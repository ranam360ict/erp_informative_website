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
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <section className='demoRequest animatedSection' id='demo'>
      <div className='demoIntro'>
        {/* <p className='eyebrow'>
          <LangText en='Request A Demo' bn='ডেমো অনুরোধ' />
        </p> */}
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
        <label>
          <LangText en='Full name' bn='পূর্ণ নাম' />
          <input name='name' type='text' placeholder='Your name' required />
        </label>
        <label>
          <LangText en='Work email' bn='অফিস ইমেইল' />
          <input
            name='email'
            type='email'
            placeholder='name@company.com'
            required
          />
        </label>
        <label>
          <LangText en='Company' bn='প্রতিষ্ঠানের নাম' />
          <input
            name='company'
            type='text'
            placeholder='Company name'
            required
          />
        </label>
        <label>
          <LangText en='Mobile number' bn='মোবাইল নম্বর' />
          <input name='mobile' type='tel' placeholder='01XXXXXXXXX' required />
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
          />
        </label>
        <button className='primaryButton' type='submit'>
          <LangText en='Send demo request' bn='ডেমো অনুরোধ পাঠান' />
        </button>
        {submitted ? (
          <p className='formSuccess' role='status'>
            <LangText
              en='Thanks. Your demo request is ready.'
              bn='ধন্যবাদ। আপনার ডেমো অনুরোধ গ্রহণ করা হয়েছে।'
            />
          </p>
        ) : (
          <p className='formNote'>
            <LangText
              en='No commitment. A focused demo should explain value before it asks for change.'
              bn='কোনো বাধ্যবাধকতা নেই। একটি ভালো ডেমো আগে উপকারিতা পরিষ্কার করবে, তারপর পরিবর্তনের কথা বলবে।'
            />
          </p>
        )}
      </form>
    </section>
  );
}
