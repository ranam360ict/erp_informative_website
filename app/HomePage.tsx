import HeaderScrollState from './HeaderScrollState';
import {
  ActualModulesSection,
  ConversionSections,
  CtaSection,
  DashboardViewSection,
  FitSection,
  HeroSection,
  JourneySection,
  ReportsSection,
  ShowcaseSection,
  SiteFooter,
  TrustSection,
  WorkflowSection,
} from './home/HomeSections';

export default function HomePage() {
  return (
    <main className='erpLanding'>
      <HeaderScrollState />
      <HeroSection />
      <ActualModulesSection />
      <JourneySection />
      <FitSection />
      <DashboardViewSection />
      <ShowcaseSection />
      <WorkflowSection />
      <ReportsSection />
      <TrustSection />
      <ConversionSections />
      <CtaSection />
      <SiteFooter />
    </main>
  );
}
