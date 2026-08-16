import Image from 'next/image';
import DemoRequest from '../DemoRequest';
import LanguageToggle from '../LanguageToggle';
import PricingPlans from '../PricingPlans';
import { LangText } from './LangText';
import {
  dashboardStats,
  fitProfiles,
  journeySteps,
  painComparisons,
  reportBlocks,
  reportMix,
  reportOverviewStats,
  reportTrendBars,
  showcasePanels,
  solutionOutcomes,
  summaryCards,
  trustHighlights,
  whyChoosePoints,
  workflows,
} from './homeData';

export function HeroSection() {
  return (
      <header className='hero erpHero' id='top'>
        <nav className='nav' aria-label='Main navigation'>
          <a className='brand' href='#top'>
            <Image
              src='/erp_logo.png'
              alt='ERP logo'
              width={200}
              height={62}
              priority
            />
          </a>
          <input className='navMenuToggle' id='navMenuToggle' type='checkbox' />
          <label
            className='menuButton'
            htmlFor='navMenuToggle'
            aria-label='Toggle navigation menu'
          >
            <span aria-hidden='true'></span>
            <span aria-hidden='true'></span>
            <span aria-hidden='true'></span>
          </label>
          <div className='navLinks'>
            <a href='#modules'>
              <LangText en='Modules' bn='মডিউল' />
            </a>
            <a href='#dashboard-view'>
              <LangText en='Dashboard View' bn='ড্যাশবোর্ড ভিউ' />
            </a>
            <a href='#workflow'>
              <LangText en='Workflow' bn='ওয়ার্কফ্লো' />
            </a>
            <a href='#reports'>
              <LangText en='Reports' bn='রিপোর্ট' />
            </a>
            <a href='#pricing'>
              <LangText en='Pricing' bn='প্রাইসিং' />
            </a>
            <a className='navDemoLink' href='#demo'>
              <LangText en='For Demo' bn='ডেমোর জন্য' />
            </a>
          </div>
          <LanguageToggle />
        </nav>

        <section className='heroContent erpHeroContent'>
          <div className='heroPanel erpHeroPanel'>
            <div className='heroCopy'>
              <div className='heroChips' aria-label='Actual ERP highlights'>
                <span>
                  <LangText en='Real-time data' bn='রিয়েল-টাইম ডাটা' />
                </span>
                <span>
                  <LangText en='Smart workflows' bn='স্মার্ট ওয়ার্কফ্লো' />
                </span>
                <span>
                  <LangText en='Connected teams' bn='কানেক্টেড টিম' />
                </span>
              </div>
              <p className='eyebrow'>
                <LangText
                  en='ERP Informative Website'
                  bn='ইআরপি তথ্যভিত্তিক ওয়েবসাইট'
                />
              </p>
              <h1>
                <LangText
                  en='Smart ERP for financial control, customer management, and daily operations.'
                  bn='উন্নত আর্থিক নিয়ন্ত্রণ, গ্রাহক ব্যবস্থাপনা এবং ব্যবসায়িক কাজের জন্য একটি স্মার্ট ERP সমাধান।'
                />
              </h1>
              <p className='heroText'>
                <LangText
                  en='This landing design is now based on your actual dashboard structure: collection, expense, profit, receivable, client summary, account balance, and the exact modules shown in your ERP sidebar.'
                  bn='এই ল্যান্ডিং ডিজাইনটি আপনার বাস্তব ড্যাশবোর্ড কাঠামোর ভিত্তিতে সাজানো হয়েছে, যেখানে কালেকশন, খরচ, মুনাফা, বকেয়া, ক্লায়েন্ট সারসংক্ষেপ এবং হিসাবের অবস্থা পরিষ্কারভাবে তুলে ধরা হয়েছে।'
                />
              </p>
              <div className='heroActions'>
                <a className='primaryButton' href='#modules'>
                  <LangText en='Explore modules' bn='বিস্তারিত দেখুন' />
                </a>
                <a className='secondaryButton' href='#demo'>
                  <LangText en='Book live demo' bn='লাইভ ডেমো নিন' />
                </a>
              </div>
              <div className='heroStats'>
                {dashboardStats.map((item) => (
                  <strong key={item.en}>
                    {item.value}
                    <small>
                      <LangText en={item.en} bn={item.bn} />
                    </small>
                  </strong>
                ))}
              </div>
            </div>

            <aside
              className='heroDashboard erpDashboardPreview'
              aria-label='Actual ERP dashboard inspired preview'
            >
              <div className='laptopMockup'>
                <div className='laptopScreen'>
                  <div className='laptopCamera' aria-hidden='true'></div>
                  <div className='erpPreviewTop'>
                    <div className='erpMainMock'>
                      <div className='erpTopStrip'>
                        <div className='erpTopDots' aria-hidden='true'>
                          <span></span>
                          <span></span>
                          <span></span>
                        </div>
                        <strong>ERP</strong>
                      </div>
                      <div className='erpChartMock' aria-hidden='true'>
                        <span className='short'></span>
                        <span className='empty'></span>
                        <span className='empty'></span>
                        <span className='tall'></span>
                        <span className='empty'></span>
                      </div>
                    </div>
                    <div className='erpDailyCards'>
                      {summaryCards.slice(0, 3).map((card) => (
                        <div
                          key={card.title}
                          className={`erpMetricCard ${card.title === 'Today Collection' ? 'erpMetricCardPrimary' : ''}`}
                        >
                          <h3>
                            <LangText en={card.title} bn={card.bn} />
                          </h3>
                          <strong>
                            {card.title === 'Today Collection'
                              ? '24,500'
                              : '0.00'}
                          </strong>
                        </div>
                      ))}
                      <div className='erpCompactPanel'>
                        <p className='erpCompactTitle'>
                          <LangText en='Active Modules' bn='চলমান ফিচার' />
                        </p>
                        <div className='erpModulePills'>
                          <span>Invoice</span>
                          <span>Receipt</span>
                          <span>Accounts</span>
                          <span>Client</span>
                        </div>
                        <div className='erpRecentList'>
                          <div>
                            <strong>INV-2045</strong>
                            <span>Collected</span>
                          </div>
                          <div>
                            <strong>CL-27</strong>
                            <span>Active</span>
                          </div>
                          <div>
                            <strong>Due Alert</strong>
                            <span>1 follow-up</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='erpSummaryStack erpMonthlyCards'>
                    <div className='erpMetricCard wide'>
                      <h3>
                        <LangText en='Month' bn='মাস' />
                      </h3>
                      <strong>1000.00 BDT</strong>
                    </div>
                    <div className='erpMetricCard wide'>
                      <h3>
                        <LangText en='Received' bn='রিসিভড' />
                      </h3>
                      <strong>1000.00 BDT</strong>
                    </div>
                    <div className='erpMetricCard wide'>
                      <h3>
                        <LangText en='Pending' bn='পেন্ডিং' />
                      </h3>
                      <strong>0.00 BDT</strong>
                    </div>
                    <div className='erpMetricCard wide'>
                      <h3>
                        <LangText en='Total Due' bn='মোট ডিউ' />
                      </h3>
                      <strong>18460267.00 BDT</strong>
                    </div>
                  </div>
                  <div className='erpPreviewBottom compactBottom'>
                    <div className='clientStatsPanel heroClientStats heroClientStatsWide'>
                      <article>
                        <small>
                          <LangText en='Total Client' bn='মোট গ্রাহক' />
                        </small>
                        <strong>27</strong>
                      </article>
                      <article>
                        <small>
                          <LangText en='Active Client' bn='সক্রিয় গ্রাহক' />
                        </small>
                        <strong>26</strong>
                      </article>
                      <article>
                        <small>
                          <LangText
                            en='Inactive Client'
                            bn='নিষ্ক্রিয় গ্রাহক'
                          />
                        </small>
                        <strong>01</strong>
                      </article>
                    </div>
                    <div className='erpStatusBar'>
                      <div>
                        <span>Collection</span>
                        <strong>On Track</strong>
                      </div>
                      <div>
                        <span>Receivable</span>
                        <strong>Watch</strong>
                      </div>
                      <div>
                        <span>Branches</span>
                        <strong>Live</strong>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className='laptopBase' aria-hidden='true'></div> */}
            </aside>
          </div>
        </section>
      </header>
  );
}

export function ActualModulesSection() {
  return (
      <section
        className='sectionWrap actualModuleSection animatedSection'
        id='modules'
      >
        <div className='actualModuleShowcase'>
          <div className='actualModuleHero actualModuleHeroClean'>
            <p className='eyebrow'>
              <LangText en='What You Actually Get' bn='আপনি আসলে কী পাবেন' />
            </p>
            <h2>
              <LangText
                en='A clearer way to monitor revenue flow, customer activity, finance records, and everyday operations.'
                bn='রাজস্ব প্রবাহ, গ্রাহকের কার্যক্রম, আর্থিক নথি এবং দৈনন্দিন কার্যক্রম আরও পরিষ্কারভাবে পর্যবেক্ষণ করার একটি সহজ উপায়।'
              />
            </h2>
            <p>
              <LangText
                en='Every part of the business stays easier to track, easier to follow up, and easier to manage from one connected flow.'
                bn='ব্যবসার প্রতিটি অংশ একটি সংযুক্ত প্রবাহে সহজে ট্র্যাক করা, ফলো-আপ করা এবং পরিচালনা করা যায়।'
              />
            </p>
            <div className='actualModuleMiniStats'>
              <span>
                <strong>Daily</strong>
                <small>control</small>
              </span>
              <span>
                <strong>Client</strong>
                <small>visibility</small>
              </span>
              <span>
                <strong>Faster</strong>
                <small>follow-up</small>
              </span>
            </div>
          </div>

          <div className='actualModuleGrid'>
            {solutionOutcomes.map((item, index) => (
              <article className='actualModuleCard' key={item.title}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <h3>
                  <LangText en={item.title} bn={item.bn} />
                </h3>
                <p>
                  <LangText en={item.text} bn={item.bnText} />
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
  );
}

export function JourneySection() {
  return (
      <section className='sectionWrap journeySection animatedSection'>
        <div className='sectionHead'>
          <p className='eyebrow'>
            <LangText en='Interactive Journey' bn='ইন্টারঅ্যাকটিভ জার্নি' />
          </p>
          <h2>
            <LangText
              en='Let users feel how one action moves naturally to the next inside your ERP.'
              bn='ব্যবহারকারীরা যেন অনুভব করতে পারে, আপনার ERP-এ একটি কাজ কীভাবে স্বাভাবিকভাবে পরের ধাপে এগিয়ে যায়।'
            />
          </h2>
        </div>
        <div className='journeyTimeline'>
          {journeySteps.map((step) => (
            <article className='journeyCard' key={step.title}>
              <div className='journeyImageWrap'>
                <Image
                  src={step.image}
                  alt={step.title}
                  width={1200}
                  height={800}
                />
                <div className='journeyOverlay'>
                  <span>{step.label}</span>
                </div>
              </div>
              <div className='journeyContent'>
                <h3>
                  <LangText en={step.title} bn={step.bn} />
                </h3>
                <p>
                  <LangText en={step.text} bn={step.bnText} />
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>
  );
}

export function FitSection() {
  return (
      <section className='sectionWrap fitSection animatedSection'>
        <div className='sectionHead'>
          <p className='eyebrow'>
            <LangText en='Who It Fits' bn='কার জন্য উপযোগী' />
          </p>
          <h2>
            <LangText
              en='Visitors connect faster when they can quickly see whether the product fits their business type.'
              bn='দর্শনার্থীরা দ্রুত আগ্রহী হয়, যখন তারা সহজেই বুঝতে পারে পণ্যটি তাদের ব্যবসার ধরনে মানানসই কি না।'
            />
          </h2>
        </div>
        <div className='fitGrid'>
          {fitProfiles.map((item) => (
            <article key={item.title}>
              <h3>
                <LangText en={item.title} bn={item.bn} />
              </h3>
              <p>
                <LangText en={item.text} bn={item.bnText} />
              </p>
            </article>
          ))}
        </div>
      </section>
  );
}

export function DashboardViewSection() {
  return (
      <section
        className='sectionWrap dashboardViewSection animatedSection'
        id='dashboard-view'
      >
        <div className='dashboardViewIntro'>
          <div>
            <p className='eyebrow'>
              <LangText en='Dashboard Story' bn='ড্যাশবোর্ড স্টোরি' />
            </p>
            <h2>
              <LangText
                en='Built around the numbers your users see first every morning.'
                bn='প্রতিদিন সকালে ব্যবহারকারীরা যে সংখ্যাগুলো সবার আগে দেখে, এই নকশা এখন সেগুলোকেই কেন্দ্র করে তৈরি।'
              />
            </h2>
            <p>
              <LangText
                en='Collection, expense, profit, receivable, balance status, and client counts form the public-facing message of the product.'
                bn='কালেকশন, খরচ, মুনাফা, রিসিভেবল, ব্যালেন্স অবস্থা এবং ক্লায়েন্ট সংখ্যা এখন পণ্যের মূল বার্তা তুলে ধরে।'
              />
            </p>
          </div>
          <div className='dashboardKpiRail'>
            {summaryCards.map((card) => (
              <article key={card.title}>
                <small>
                  <LangText en={card.title} bn={card.bn} />
                </small>
                <strong>
                  <LangText en='Live View' bn='সরাসরি দৃশ্য' />
                </strong>
              </article>
            ))}
          </div>
        </div>

        <div className='dashboardFeatureBoard'>
          <div className='balanceTableMock'>
            <div className='mockHeader'>
              <h3>
                <LangText
                  en='Current Balance Status'
                  bn='কারেন্ট ব্যালেন্স স্ট্যাটাস'
                />
              </h3>
            </div>
            <div className='mockRow mockLabels'>
              <span>SL</span>
              <span>Account</span>
              <span>Branch</span>
              <span>Balance</span>
            </div>
            <div className='mockRow'>
              <span>1</span>
              <span>Corporate Billing</span>
              <span>Dilkusha</span>
              <span className='negative'>BDT -94,070</span>
            </div>
            <div className='mockRow'>
              <span>2</span>
              <span>Operations</span>
              <span>Dhaka North</span>
              <span className='negative'>BDT -2,890</span>
            </div>
            <div className='mockRow'>
              <span>3</span>
              <span>Receivable Desk</span>
              <span>Head Office</span>
              <span>BDT 11,800</span>
            </div>
          </div>

          <div className='clientStatsPanel'>
            <article>
              <small>
                <LangText en='Total Client' bn='মোট ক্লায়েন্ট' />
              </small>
              <strong>27</strong>
            </article>
            <article>
              <small>
                <LangText en='Active Client' bn='অ্যাকটিভ ক্লায়েন্ট' />
              </small>
              <strong>26</strong>
            </article>
            <article>
              <small>
                <LangText en='Inactive Client' bn='ইনঅ্যাকটিভ ক্লায়েন্ট' />
              </small>
              <strong>01</strong>
            </article>
          </div>
        </div>
      </section>
  );
}

export function ShowcaseSection() {
  return (
      <section className='showcaseBand animatedSection'>
        <div className='showcaseInner'>
          {showcasePanels.map((panel, index) => (
            <article
              className={`showcaseCard ${index % 2 === 1 ? 'reverse' : ''}`}
              key={panel.title}
            >
              <div className='showcaseVisual'>
                <Image
                  src={panel.image}
                  alt={panel.title}
                  width={1400}
                  height={900}
                />
              </div>
              <div className='showcaseText'>
                <p className='eyebrow'>
                  <LangText
                    en='Interactive Section'
                    bn='ইন্টারঅ্যাকটিভ সেকশন'
                  />
                </p>
                <h2>
                  <LangText en={panel.title} bn={panel.bn} />
                </h2>
                <p>
                  <LangText en={panel.text} bn={panel.bnText} />
                </p>
                <div className='showcaseHighlights'>
                  <span>
                    <LangText en='Layered cards' bn='লেয়ার্ড কার্ড' />
                  </span>
                  <span>
                    <LangText
                      en='Image-backed trust'
                      bn='ইমেজ-ব্যাকড ট্রাস্ট'
                    />
                  </span>
                  <span>
                    <LangText
                      en='Better user flow'
                      bn='উন্নত ব্যবহারকারী প্রবাহ'
                    />
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
  );
}

export function WorkflowSection() {
  return (
      <section
        className='sectionWrap workflowSection animatedSection'
        id='workflow'
      >
        <div className='sectionHead'>
          <p className='eyebrow'>
            <LangText en='Operational Flow' bn='অপারেশনাল ফ্লো' />
          </p>
          <h2>
            <LangText
              en='The site narrative now follows your actual business flow.'
              bn='এই সাইটের বর্ণনা এখন আপনার বাস্তব ব্যবসায়িক প্রবাহকেই অনুসরণ করে।'
            />
          </h2>
        </div>
        <div className='workflowGrid'>
          {workflows.map((item) => (
            <article key={item.title}>
              <h3>
                <LangText en={item.title} bn={item.bn} />
              </h3>
              <p>
                <LangText en={item.text} bn={item.bnText} />
              </p>
            </article>
          ))}
        </div>
        <div className='flowConnector' aria-hidden='true'>
          <span>Quotation</span>
          <span>Invoice</span>
          <span>Receipt</span>
          <span>Accounts</span>
          <span>Reports</span>
        </div>
      </section>
  );
}

export function ReportsSection() {
  return (
      <section
        className='sectionWrap reportsSection animatedSection'
        id='reports'
      >
        <div className='sectionHead'>
          <p className='eyebrow'>
            <LangText
              en='Report-led Presentation'
              bn='রিপোর্ট-লেড প্রেজেন্টেশন'
            />
          </p>
          <h2>
            <LangText
              en='Reports, account summaries, and financial graphs now carry the story more clearly.'
              bn='রিপোর্ট, অ্যাকাউন্ট সারসংক্ষেপ এবং আর্থিক গ্রাফ এখন বিষয়টি আরও পরিষ্কারভাবে তুলে ধরে।'
            />
          </h2>
        </div>
        <div className='reportsExperienceGrid'>
          <div className='reportFocusGrid'>
            {reportBlocks.map((block) => (
              <article key={block.title}>
                <h3>
                  <LangText en={block.title} bn={block.bn} />
                </h3>
                <p>
                  <LangText en={block.text} bn={block.bnText} />
                </p>
              </article>
            ))}
          </div>
        </div>

        <aside
          className='reportsGraphPanel'
          aria-label='Reporting graph preview'
        >
          <div className='reportsGraphHeader'>
            <div>
              <p className='eyebrow'>
                <LangText
                  en='Financial Snapshot'
                  bn='ফিন্যান্সিয়াল স্ন্যাপশট'
                />
              </p>
              <h3>
                <LangText
                  en='A better arranged report section helps users grasp sales, expense, and profit trends instantly.'
                  bn='আরও সুন্দরভাবে সাজানো রিপোর্ট সেকশন ব্যবহারকারীদের সেলস, খরচ এবং মুনাফার ধারা দ্রুত বুঝতে সাহায্য করে।'
                />
              </h3>
            </div>
            <strong>
              <LangText en='Live' bn='লাইভ' />
            </strong>
          </div>

          <div className='reportsOverviewStats'>
            {reportOverviewStats.map((item) => (
              <article key={item.en}>
                <small>
                  <LangText en={item.en} bn={item.bn} />
                </small>
                <strong>{item.value}</strong>
              </article>
            ))}
          </div>

          <div className='reportsGraphBody'>
            <div className='reportsTrendCard'>
              <div className='reportsTrendMeta'>
                <span>
                  <LangText
                    en='Weekly sales monitor'
                    bn='সাপ্তাহিক সেলস মনিটর'
                  />
                </span>
                <strong>BDT 27,000</strong>
              </div>
              <div className='reportsTrendBars' aria-hidden='true'>
                {reportTrendBars.map((item) => (
                  <div key={item.label} className='reportsTrendBar'>
                    <small>{item.value}</small>
                    <span style={{ height: item.height }}></span>
                    <b>{item.label}</b>
                  </div>
                ))}
              </div>
            </div>

            <div className='reportsMixCard'>
              <div className='reportsMixDonut' aria-hidden='true'>
                <span>100%</span>
              </div>
              <div className='reportsMixLegend'>
                {reportMix.map((item) => (
                  <p key={item.en}>
                    <strong>{item.value}</strong>
                    <LangText en={item.en} bn={item.bn} />
                  </p>
                ))}
              </div>
            </div>
          </div>
        </aside>
      </section>
  );
}

export function TrustSection() {
  return (
      <section className='sectionBand trustBand animatedSection'>
        <div className='trustInner'>
          <div className='trustIntro'>
            <p className='eyebrow'>
              <LangText en='Why This Site Works' bn='কেন এই সাইট কার্যকর' />
            </p>
            <h2>
              <LangText
                en='Less delay, less confusion, and a much easier way to manage everyday ERP work.'
                bn='কম দেরি, কম জটিলতা এবং প্রতিদিনের ERP কাজ আরও সহজভাবে পরিচালনার একটি কার্যকর উপায়।'
              />
            </h2>
            <p>
              <LangText
                en='Visitors do not need internal complexity first. They need to see fewer delays, less confusion, faster follow-up, and a cleaner reporting view.'
                bn='দর্শনার্থীরা শুরুতেই ভেতরের জটিলতা দেখতে চায় না। তারা দেখতে চায় কম বিলম্ব, কম বিভ্রান্তি, দ্রুত ফলো-আপ এবং আরও পরিষ্কার রিপোর্টিং ভিউ।'
              />
            </p>
          </div>

          <div className='comparisonGrid'>
            {painComparisons.map((item) => (
              <article className='comparisonRow' key={item.beforeTitle}>
                <div>
                  <strong>
                    <LangText en='Before ERP' bn='ERP-এর আগে' />
                  </strong>
                  <p>
                    <strong>
                      <LangText en={item.beforeTitle} bn={item.beforeTitleBn} />
                    </strong>
                  </p>
                  <p>
                    <LangText en={item.beforeText} bn={item.beforeTextBn} />
                  </p>
                </div>
                <span aria-hidden='true'>+</span>
                <div>
                  <strong>
                    <LangText en='With ERP' bn='ERP-এর পরে' />
                  </strong>
                  <p>
                    <strong>
                      <LangText en={item.afterTitle} bn={item.afterTitleBn} />
                    </strong>
                  </p>
                  <p>
                    <LangText en={item.afterText} bn={item.afterTextBn} />
                  </p>
                </div>
              </article>
            ))}
          </div>

          <div className='whyChooseGrid'>
            {whyChoosePoints.map((item) => (
              <article key={item.title}>
                <h3>
                  <LangText en={item.title} bn={item.bn} />
                </h3>
                <p>
                  <LangText en={item.text} bn={item.bnText} />
                </p>
              </article>
            ))}
          </div>

          <div className='trustHighlights'>
            {trustHighlights.map((item) => (
              <article key={item.en}>
                <strong>{item.value}</strong>
                <small>
                  <LangText en={item.en} bn={item.bn} />
                </small>
              </article>
            ))}
          </div>
        </div>
      </section>
  );
}

export function ConversionSections() {
  return (
    <>
      <PricingPlans />
      <DemoRequest />
    </>
  );
}

export function CtaSection() {
  return (
      <section className='cta animatedSection'>
        <p className='eyebrow'>
          <LangText en='Final Takeaway' bn='শেষ কথা' />
        </p>
        <h2>
          <LangText
            en='This design now reflects the real ERP product your visitors will actually log into.'
            bn='এই নকশা এখন সেই বাস্তব ERP পণ্যকেই উপস্থাপন করে, যেটিতে দর্শনার্থীরা শেষ পর্যন্ত লগইন করবে।'
          />
        </h2>
        <p>
          <LangText
            en='The homepage focuses on your authentic modules, authentic dashboard patterns, and authentic finance-client-reporting story.'
            bn='হোমপেজ এখন আপনার বাস্তব মডিউল, বাস্তব ড্যাশবোর্ড ধারা এবং প্রকৃত ফাইন্যান্স-ক্লায়েন্ট-রিপোর্টিং গল্পকেই গুরুত্ব দেয়।'
          />
        </p>
        <a className='primaryButton' href='#top'>
          <LangText en='Back to top' bn='উপরে যান' />
        </a>
      </section>
  );
}

export function SiteFooter() {
  return (
      <footer className='siteFooter'>
        <div className='footerGlow' aria-hidden='true'></div>
        <div className='footerInner'>
          <div className='footerBrand'>
            <a href='#top' aria-label='Back to top'>
              <Image
                src='/erp_logo.png'
                alt='ERP logo'
                width={220}
                height={69}
              />
            </a>
            <p>
              <LangText
                en='A focused ERP website for billing, collection, accounts, clients, reporting, payroll, administration, and operational visibility.'
                bn='বিলিং, কালেকশন, অ্যাকাউন্টস, ক্লায়েন্ট, রিপোর্টিং, পেরোল, অ্যাডমিনিস্ট্রেশন এবং কার্যক্রমের দৃশ্যমানতা-কেন্দ্রিক একটি ERP ওয়েবসাইট।'
              />
            </p>
            <div
              className='footerSocials'
              aria-label='Social and contact links'
            >
              <a
                href='https://m360ict.com/'
                target='_blank'
                rel='noreferrer'
                aria-label='Visit M360ICT website'
                title='Website'
              >
                <svg viewBox='0 0 24 24' aria-hidden='true'>
                  <path d='M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm6.9 9h-3.1a15.5 15.5 0 0 0-1.1-5 8.05 8.05 0 0 1 4.2 5ZM12 4.1c.7 1 1.4 3.1 1.7 6.9h-3.4c.3-3.8 1-5.9 1.7-6.9ZM4.3 13h3.8c.1 1.8.4 3.5.8 4.9A8.02 8.02 0 0 1 4.3 13Zm3.8-2H4.3a8.02 8.02 0 0 1 4.6-4.9A20.6 20.6 0 0 0 8.1 11Zm3.9 8.9c-.7-1-1.4-3.1-1.7-6.9h3.4c-.3 3.8-1 5.9-1.7 6.9Zm3.1-2c.4-1.4.7-3.1.8-4.9h3.8a8.02 8.02 0 0 1-4.6 4.9Z' />
                </svg>
              </a>
              <a
                href='https://www.linkedin.com/company/m360-ict'
                target='_blank'
                rel='noreferrer'
                aria-label='Visit M360ICT LinkedIn'
                title='LinkedIn'
              >
                <svg viewBox='0 0 24 24' aria-hidden='true'>
                  <path d='M6.9 8.9H3.5v11.2h3.4V8.9ZM5.2 3.5a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm15.3 10.3c0-3.1-1.7-5.1-4.4-5.1-1.8 0-2.8 1-3.2 1.7V8.9H9.6v11.2H13v-6.2c0-1.6.8-2.5 2.1-2.5 1.2 0 2 1 2 2.5v6.2h3.4v-6.3Z' />
                </svg>
              </a>
              <a
                href='https://www.facebook.com/m360ict'
                target='_blank'
                rel='noreferrer'
                aria-label='Visit M360ICT Facebook'
                title='Facebook'
              >
                <svg viewBox='0 0 24 24' aria-hidden='true'>
                  <path d='M14 8.1h2.2V4.4c-.4-.1-1.7-.2-3.2-.2-3.2 0-5.3 1.9-5.3 5.5v3.1H4.2V17h3.5v5h4.2v-5h3.4l.6-4.2h-4V10c0-1.2.4-1.9 2.1-1.9Z' />
                </svg>
              </a>
            </div>
          </div>

          <div className='footerLinks'>
            <h2>
              <LangText en='Explore' bn='এক্সপ্লোর' />
            </h2>
            <a href='#modules'>
              <LangText en='Actual Modules' bn='আসল মডিউল' />
            </a>
            <a href='#dashboard-view'>
              <LangText en='Dashboard View' bn='ড্যাশবোর্ড ভিউ' />
            </a>
            <a href='#workflow'>
              <LangText en='Workflow' bn='ওয়ার্কফ্লো' />
            </a>
            <a href='#reports'>
              <LangText en='Reports' bn='রিপোর্ট' />
            </a>
            {/* <a href='#demo'>
              <LangText en='Request Demo' bn='ডেমো চাই' />
            </a> */}
          </div>

          <div className='footerSupport'>
            <div className='supportHeader'>
              <p className='eyebrow'>Support Details</p>
              <h2>Contact Support</h2>
            </div>
            <div className='supportCards'>
              <a className='supportCard' href='tel:+8809638336699'>
                <span>Call</span>
                <p>09638-336699, 01958398325, 01958398313, +880 1958-398308</p>
              </a>
              <div className='supportCard'>
                <span>Timing</span>
                <p>10:00AM to 06:00PM</p>
              </div>
              <a className='supportCard' href='mailto:sup.m360ict@gmail.com'>
                <span>Email</span>
                <p>sup.m360ict@gmail.com</p>
              </a>
            </div>
          </div>
        </div>

        <div className='footerBottom'>
          <p>© 2026 ERP. All rights reserved.</p>
          <p>
            Developed by{' '}
            <a href='https://m360ict.com/' target='_blank' rel='noreferrer'>
              M360ICT
            </a>
          </p>
        </div>
      </footer>
  );
}
