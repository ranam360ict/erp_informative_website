const sharedFeatures = [
  ["Finance, inventory, sales, HR", "ফাইন্যান্স, ইনভেন্টরি, সেলস ও এইচআর"],
  ["Role-based dashboard", "ভূমিকাভিত্তিক ড্যাশবোর্ড"],
  ["Reports and approvals", "রিপোর্ট ও অনুমোদন"],
  ["Web portal access", "ওয়েব পোর্টালে প্রবেশাধিকার"],
  ["Support included", "সাপোর্ট অন্তর্ভুক্ত"],
];

const plans = [
  {
    nameEn: "Monthly",
    nameBn: "মাসিক",
    taglineEn: "Flexible access for teams that prefer month-to-month billing.",
    taglineBn: "যেসব টিম মাসভিত্তিক বিলিং পছন্দ করে, তাদের জন্য নমনীয় সুবিধা।",
    price: "1000 TK",
    periodEn: "Per month",
    periodBn: "প্রতি মাসে",
    noteEn: "Full ERP access",
    noteBn: "সম্পূর্ণ ERP সুবিধা",
    accent: "violet",
    features: sharedFeatures,
  },
  {
    nameEn: "Yearly",
    nameBn: "বার্ষিক",
    taglineEn: "Best for businesses that want one simple annual renewal.",
    taglineBn: "যেসব ব্যবসা সহজ বার্ষিক নবায়ন চায়, তাদের জন্য উপযুক্ত।",
    price: "12000 TK",
    periodEn: "Per year",
    periodBn: "প্রতি বছরে",
    noteEn: "Full ERP access",
    noteBn: "সম্পূর্ণ ERP সুবিধা",
    accent: "rose",
    features: sharedFeatures,
  },
];

function LangText({ en, bn }: { en: string; bn: string }) {
  return (
    <>
      <span className="lang-en">{en}</span>
      <span className="lang-bn">{bn}</span>
    </>
  );
}

export default function PricingPlans() {
  return (
    <section className="pricingSection sectionWrap animatedSection" id="pricing">
      <div className="sectionHead pricingHead">
        <p className="eyebrow">
          <LangText en="ERP Pricing" bn="ERP মূল্য পরিকল্পনা" />
        </p>
        <h2>
          <LangText
            en="Choose a plan that matches your ERP journey."
            bn="আপনার ERP যাত্রার সঙ্গে মানানসই পরিকল্পনা বেছে নিন।"
          />
        </h2>
        <p>
          <LangText
            en="Start simple, then scale modules, users, reports, integrations, and support as the business grows."
            bn="সহজভাবে শুরু করুন, তারপর ব্যবসা বাড়ার সঙ্গে সঙ্গে মডিউল, ব্যবহারকারী, রিপোর্ট, ইন্টিগ্রেশন ও সাপোর্ট বাড়ান।"
          />
        </p>
        <div className="pricingLabel">
          <LangText en="Pricing" bn="মূল্য" />
        </div>
      </div>

      <div className="pricingGrid simplePricingGrid">
        {plans.map((plan) => (
          <article className={`priceCard ${plan.accent}`} key={plan.nameEn}>
            <div className="priceTop">
              <h3>
                <LangText en={plan.nameEn} bn={plan.nameBn} />
              </h3>
              <p>
                <LangText en={plan.taglineEn} bn={plan.taglineBn} />
              </p>
              <strong>{plan.price}</strong>
              <span>
                <LangText en={plan.periodEn} bn={plan.periodBn} />
              </span>
              <small>
                <LangText en={plan.noteEn} bn={plan.noteBn} />
              </small>
            </div>
            <ul>
              {plan.features.map(([en, bn]) => (
                <li key={en}>
                  <LangText en={en} bn={bn} />
                </li>
              ))}
            </ul>
            <a className="priceButton" href="#demo">
              <LangText en="Get Started" bn="শুরু করুন" />
              <span aria-hidden="true">→</span>
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
