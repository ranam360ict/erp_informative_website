'use client';

import { FormEvent, useState } from 'react';

function LangText({ en, bn }: { en: string; bn: string }) {
  return (
    <>
      <span className='lang-en'>{en}</span>
      <span className='lang-bn'>{bn}</span>
    </>
  );
}

export default function DemoRequest() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [phone, setPhone] = useState('');
  const [details, setDetails] = useState('');

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setErrorMsg(null);
    setSubmitted(false);

    const payload = {
      service_name: 'ERP',
      name: name.trim(),
      email: email.trim(),
      phone: phone.trim(),
      company_name: company.trim() || undefined,
      details: details.trim() || undefined,
    };

    try {
      const response = await fetch(
        'https://erm-server.m360ict.com/api/v1/public/common/service-request',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
        },
      );

      const result = await response.json();

      if (response.ok && result?.success !== false) {
        setSubmitted(true);
        // Clear form fields after success
        setName('');
        setEmail('');
        setCompany('');
        setPhone('');
        setDetails('');
      } else {
        setErrorMsg(
          result?.message ||
            'Something went wrong while sending your request. Please try again.',
        );
      }
    } catch (err) {
      console.error('Service request error:', err);
      setErrorMsg(
        'Unable to connect to the server. Please check your network connection.',
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className='demoRequest animatedSection' id='demo'>
      <div className='demoIntro'>
        <h2>
          <LangText
            en='See how ERP can match your real workflow.'
            bn='আপনার বাস্তব কাজের সাথে ERP কীভাবে মিলে তা দেখুন।'
          />
        </h2>
        <p>
          <LangText
            en='Share a few details about your company, and the demo can focus on the modules, reports, and approval flows that matter most.'
            bn='আপনার প্রতিষ্ঠানের কিছু তথ্য শেয়ার করুন, তাহলে ডেমোটি আপনার জন্য গুরুত্বপূর্ণ মডিউল, রিপোর্ট এবং অনুমোদন প্রবাহের ওপর বেশি গুরুত্ব দিতে পারবে।'
          />
        </p>
        <div className='demoHighlights' aria-label='Demo focus areas'>
          <span>
            <LangText en='Process review' bn='প্রক্রিয়া পর্যালোচনা' />
          </span>
          <span>
            <LangText en='Module mapping' bn='মডিউল মানচিত্র' />
          </span>
          <span>
            <LangText en='Implementation guidance' bn='বাস্তবায়ন নির্দেশনা' />
          </span>
        </div>
      </div>

      <form className='demoForm' onSubmit={handleSubmit}>
        <div className='formEyebrow'>
          <p className='eyebrow'>
            <LangText en='Request A Demo' bn='ডেমো অনুরোধ' />
          </p>

          <p className='formLead'>
            <LangText
              en='Share your workflow to see the matching ERP features.'
              bn='আপনার ব্যবসার কাজের ধরণ জানান, আমরা উপযুক্ত ERP ফ্লো দেখাব।'
            />
          </p>
        </div>
        <label>
          <LangText en='Full name' bn='পূর্ণ নাম' />
          <input
            name='name'
            type='text'
            placeholder='Your name'
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <label>
          <LangText en='Work email' bn='অফিস ইমেইল' />
          <input
            name='email'
            type='email'
            placeholder='name@company.com'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label>
          <LangText en='Company' bn='প্রতিষ্ঠানের নাম' />
          <input
            name='company'
            type='text'
            placeholder='Company name'
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          />
        </label>
        <label>
          <LangText en='Mobile number' bn='মোবাইল নম্বর' />
          <input
            name='mobile'
            type='tel'
            placeholder='01XXXXXXXXX'
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </label>
        <label className='wideField'>
          <LangText
            en='What should the demo cover?'
            bn='ডেমোতে আপনি কী দেখতে চান?'
          />
          <textarea
            name='message'
            placeholder='Tell us about your current tools, pain points, or target modules.'
            rows={4}
            value={details}
            onChange={(e) => setDetails(e.target.value)}
          />
        </label>

        <button className='primaryButton' type='submit' disabled={loading}>
          {loading ? (
            <LangText en='Sending request...' bn='অনুরোধ পাঠানো হচ্ছে...' />
          ) : (
            <LangText en='Send demo request' bn='ডেমো অনুরোধ পাঠান' />
          )}
        </button>

        {submitted && (
          <div className='formSuccessBanner' role='status'>
            <p className='formSuccess'>
              <LangText
                en='✓ Thank you! Your request has been submitted successfully. Our team will get back to you shortly.'
                bn='✓ ধন্যবাদ! আপনার অনুরোধটি সফলভাবে গ্রহণ করা হয়েছে। আমাদের টিম শীঘ্রই আপনার সাথে যোগাযোগ করবে।'
              />
            </p>
          </div>
        )}

        {errorMsg && (
          <div
            className='formErrorBanner'
            role='alert'
            style={{ textAlign: 'center', color: 'red' }}
          >
            <p
              className='formErrorText'
              style={{ textAlign: 'center', color: 'red' }}
            >
              ⚠️ Something went wrong
            </p>
          </div>
        )}
      </form>
    </section>
  );
}
