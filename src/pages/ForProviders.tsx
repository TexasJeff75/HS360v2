import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import {
  ArrowRight,
  Dna,
  TestTube,
  TestTube2,
  Microscope,
  Compass,
  Handshake,
  Sprout,
  ClipboardCheck,
  GraduationCap,
  PackageCheck,
  MessagesSquare,
  Plus,
  Sparkles,
  ShieldCheck,
  Quote,
} from 'lucide-react';
import CalendlySection from '../components/CalendlySection';
import SEO from '../components/SEO';
import ProviderApplicationForm from '../components/providers/ProviderApplicationForm';
import { fadeUp } from '../lib/motion';

const OFFERINGS = [
  {
    icon: Dna,
    title: 'Genetic Testing',
    pitch: 'Show patients why their body responds the way it does, and build a plan around their own DNA.',
    link: '/services/genetic-testing',
  },
  {
    icon: TestTube,
    title: 'Micronutrient Testing',
    pitch: 'Find the hidden deficiencies behind fatigue, brain fog and slow recovery, then track the fix.',
    link: '/services/micronutrient-testing',
  },
  {
    icon: TestTube2,
    title: 'Allergy Testing',
    pitch: 'Give patients clear answers on what triggers their symptoms, from a single convenient draw.',
    link: '/services/allergy-testing',
  },
  {
    icon: Microscope,
    title: 'Clinical Lab Services',
    pitch: 'Bring molecular diagnostics and specialty testing under one trusted partner.',
    link: '/services/clinical-lab-services',
  },
];

const PILLARS = [
  {
    icon: Compass,
    title: 'Clarity your patients can feel',
    copy:
      'Reports are written to be shared across the exam table. Patients see what is happening, why it matters, and what comes next, so recommendations actually stick.',
  },
  {
    icon: Handshake,
    title: 'A partner, not a portal',
    copy:
      'You get a real team behind you: onboarding, clinical interpretation support and a direct line when a result raises questions.',
  },
  {
    icon: Sprout,
    title: 'Room for your practice to grow',
    copy:
      'Offer the precision services patients are already searching for, deepen long-term relationships and stand apart from practices that stop at standard labs.',
  },
];

const STEPS = [
  { icon: ClipboardCheck, title: 'Apply', copy: 'Share a few details about your practice and license.' },
  { icon: GraduationCap, title: 'Onboard', copy: 'A guided walkthrough of ordering, reports and patient conversations.' },
  { icon: PackageCheck, title: 'Order', copy: 'Collection kits and requisitions arrive ready for your team.' },
  { icon: MessagesSquare, title: 'Guide', copy: 'Review results with your patient and build their personalized plan.' },
];

const PRACTICES = [
  'Functional Medicine',
  'Integrative Medicine',
  'Primary Care',
  'Longevity Clinics',
  'Weight Management',
  'Wellness Centers',
  'Chiropractic',
  'Pharmacy',
];

const FAQS = [
  {
    q: 'Who can partner with HealthSpan360?',
    a: 'Licensed practitioners including MDs, DOs, NPs, PAs, PharmDs, chiropractors and certified wellness providers. Every license is verified before an account is activated.',
  },
  {
    q: 'Do I need special training to interpret results?',
    a: 'No. Reports are organized into clear categories with plain-language explanations, and our clinical team is available to walk through any result with you.',
  },
  {
    q: 'How do patients provide samples?',
    a: 'Depending on the test, samples are collected in-office or with a simple kit. We provide the materials and instructions your staff needs.',
  },
  {
    q: 'What does it cost to get started?',
    a: 'There is no fee to apply. Our provider team will review pricing options for your practice during your onboarding call.',
  },
];

const ReportPreview = () => (
  <div className="relative mx-auto w-full max-w-md">
    <div className="absolute -inset-6 bg-gradient-primary opacity-30 blur-3xl rounded-full" aria-hidden="true" />
    <motion.div
      initial={{ opacity: 0, y: 30, rotate: -2 }}
      animate={{ opacity: 1, y: 0, rotate: -2 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="relative bg-white rounded-3xl shadow-2xl p-6 text-gray-900"
    >
      <div className="flex items-center justify-between mb-5">
        <div>
          <p className="text-xs font-inter uppercase tracking-wider text-gray-500">Patient insight</p>
          <p className="font-poppins font-semibold">Personalized Wellness Plan</p>
        </div>
        <span className="bg-green-100 text-green-700 text-xs font-poppins font-semibold px-3 py-1 rounded-full">Ready</span>
      </div>
      {[
        { label: 'Energy & Metabolism', note: 'Focus on B-vitamin support', tone: 'bg-orange-500' },
        { label: 'Inflammation', note: 'Anti-inflammatory nutrition plan', tone: 'bg-magenta-500' },
        { label: 'Sleep & Recovery', note: 'Evening routine adjustments', tone: 'bg-blue-500' },
      ].map((row, i) => (
        <motion.div
          key={row.label}
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 + i * 0.15 }}
          className="flex items-center gap-3 rounded-xl border border-gray-100 bg-gray-50 p-3 mb-3 last:mb-0"
        >
          <span className={`h-10 w-1.5 rounded-full ${row.tone}`} aria-hidden="true" />
          <div>
            <p className="font-poppins font-semibold text-sm">{row.label}</p>
            <p className="font-inter text-sm text-gray-600">{row.note}</p>
          </div>
        </motion.div>
      ))}
    </motion.div>
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.1 }}
      className="absolute -bottom-6 -left-4 sm:-left-10 bg-charcoal-500 text-white rounded-2xl shadow-xl px-4 py-3 flex items-center gap-3"
    >
      <Sparkles className="h-5 w-5 text-gold-500" />
      <p className="font-inter text-sm">Plan shared with patient</p>
    </motion.div>
  </div>
);

const FaqItem = ({ q, a }: { q: string; a: string }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-gray-200 last:border-0">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="w-full flex items-center justify-between gap-4 py-5 text-left group"
      >
        <span className="font-poppins font-semibold text-gray-900 group-hover:text-magenta-600 transition-colors">{q}</span>
        <motion.span animate={{ rotate: open ? 45 : 0 }} className="flex-shrink-0 text-magenta-600">
          <Plus className="h-5 w-5" />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="pb-5 font-inter text-gray-600 leading-relaxed">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const ForProviders = () => (
  <>
    <SEO
      title="For Providers - Partner with HealthSpan360"
      description="Offer your patients personalized genetic, micronutrient, allergy and clinical lab testing with a partner that supports your practice from onboarding to results."
      keywords="healthcare providers, provider partnership, genetic testing for providers, micronutrient testing, functional medicine lab, precision medicine, practice growth"
    />
    <div className="pt-20">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-dark text-off-white">
        <div className="absolute inset-0 opacity-20" aria-hidden="true">
          <div className="absolute -top-20 left-0 w-96 h-96 bg-magenta-500 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-[28rem] h-[28rem] bg-orange-500 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/15 px-4 py-2 text-sm font-poppins font-semibold text-white mb-8">
              <ShieldCheck className="h-4 w-4 text-gold-500" />
              For licensed healthcare providers
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-poppins font-bold leading-tight mb-6 text-white">
              Give your patients answers they can{' '}
              <span className="bg-gradient-primary bg-clip-text text-transparent">act on.</span>
            </h1>
            <p className="text-lg lg:text-xl text-off-white/80 font-inter leading-relaxed mb-10 max-w-xl">
              HealthSpan360 helps you move beyond "your labs look normal." Offer personalized testing that explains
              how each patient's body works, and turn every result into a plan they are excited to follow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#apply"
                className="group inline-flex items-center justify-center bg-gradient-primary text-white px-8 py-4 rounded-xl font-poppins font-semibold text-lg shadow-lg transition-all hover:shadow-xl hover:scale-[1.03]"
              >
                Become a Partner
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
              <Link
                to="/services"
                className="inline-flex items-center justify-center bg-white/10 hover:bg-white/20 border border-white/20 text-white px-8 py-4 rounded-xl font-poppins font-semibold text-lg transition-colors"
              >
                Explore Services
              </Link>
            </div>
          </motion.div>
          <div className="pb-8 lg:pb-0">
            <ReportPreview />
          </div>
        </div>
      </section>

      {/* The shift */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div {...fadeUp}>
            <p className="font-poppins font-semibold text-magenta-600 mb-4">Why it matters</p>
            <h2 className="text-3xl lg:text-5xl font-poppins font-bold text-gray-900 leading-tight mb-6">
              Your patients are looking for more than a diagnosis. They want to understand themselves.
            </h2>
            <p className="text-lg text-gray-600 font-inter leading-relaxed">
              People come to you tired of guesswork and generic advice. With HealthSpan360 you can show them the
              biology behind how they feel, and guide them with confidence. That is the kind of care patients
              stay for, and tell their friends about.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What you can offer */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="max-w-2xl mb-14">
            <p className="font-poppins font-semibold text-magenta-600 mb-4">What you can offer</p>
            <h2 className="text-3xl lg:text-5xl font-poppins font-bold text-gray-900 leading-tight">
              Precision services, ready for your practice
            </h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 gap-6">
            {OFFERINGS.map(({ icon: Icon, title, pitch, link }, i) => (
              <motion.div key={title} {...fadeUp} transition={{ duration: 0.6, delay: i * 0.08 }}>
                <Link
                  to={link}
                  className="group flex h-full flex-col bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-primary text-white shadow-md group-hover:scale-110 transition-transform">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-xl font-poppins font-bold text-gray-900 mb-3">{title}</h3>
                  <p className="text-gray-600 font-inter leading-relaxed mb-6 flex-1">{pitch}</p>
                  <span className="inline-flex items-center font-poppins font-semibold text-magenta-600">
                    See the details
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why partner */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center max-w-2xl mx-auto mb-16">
            <p className="font-poppins font-semibold text-magenta-600 mb-4">Why providers choose us</p>
            <h2 className="text-3xl lg:text-5xl font-poppins font-bold text-gray-900 leading-tight">
              Built around the way you care for patients
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-10">
            {PILLARS.map(({ icon: Icon, title, copy }, i) => (
              <motion.div key={title} {...fadeUp} transition={{ duration: 0.6, delay: i * 0.1 }}>
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-magenta-500/10 text-magenta-600">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-poppins font-bold text-gray-900 mb-3">{title}</h3>
                <p className="text-gray-600 font-inter leading-relaxed">{copy}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote band */}
      <section className="py-20 bg-gradient-dark text-white">
        <motion.div {...fadeUp} className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Quote className="h-10 w-10 text-gold-500 mx-auto mb-6" />
          <p className="text-2xl lg:text-3xl font-poppins font-semibold leading-snug">
            We bridge cutting-edge science with practical, provider-driven solutions, so you can spend less time
            explaining uncertainty and more time changing lives.
          </p>
          <p className="mt-6 font-inter text-off-white/70">The HealthSpan360 promise</p>
        </motion.div>
      </section>

      {/* How it works */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center max-w-2xl mx-auto mb-16">
            <p className="font-poppins font-semibold text-magenta-600 mb-4">How it works</p>
            <h2 className="text-3xl lg:text-5xl font-poppins font-bold text-gray-900 leading-tight">
              From application to your first patient
            </h2>
          </motion.div>
          <div className="relative">
          <div className="hidden lg:block absolute top-7 left-[12%] right-[12%] h-0.5 bg-gradient-primary opacity-30" aria-hidden="true" />
          <ol className="relative grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {STEPS.map(({ icon: Icon, title, copy }, i) => (
              <motion.li key={title} {...fadeUp} transition={{ duration: 0.6, delay: i * 0.1 }} className="relative text-center">
                <div className="relative mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-primary text-white shadow-lg">
                  <Icon className="h-6 w-6" />
                </div>
                <p className="text-sm font-poppins font-semibold text-magenta-600 mb-1">Step {i + 1}</p>
                <h3 className="text-lg font-poppins font-bold text-gray-900 mb-2">{title}</h3>
                <p className="text-gray-600 font-inter leading-relaxed">{copy}</p>
              </motion.li>
            ))}
          </ol>
          </div>
        </div>
      </section>

      {/* Who we work with */}
      <section className="py-20 bg-gray-50">
        <motion.div {...fadeUp} className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl lg:text-3xl font-poppins font-bold text-gray-900 mb-8">
            Designed for forward-thinking practices of every kind
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {PRACTICES.map((p) => (
              <span
                key={p}
                className="px-5 py-2.5 rounded-full bg-white border border-gray-200 font-inter text-gray-700 shadow-sm hover:border-magenta-500 hover:text-magenta-600 transition-colors"
              >
                {p}
              </span>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Apply + FAQ */}
      <section id="apply" className="py-24 bg-white scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-5 gap-12 lg:gap-16">
          <motion.div {...fadeUp} className="lg:col-span-2">
            <p className="font-poppins font-semibold text-magenta-600 mb-4">Become a partner</p>
            <h2 className="text-3xl lg:text-4xl font-poppins font-bold text-gray-900 leading-tight mb-6">
              Let's build something better for your patients
            </h2>
            <p className="text-gray-600 font-inter leading-relaxed mb-10">
              Tell us about your practice. Our provider team will follow up personally to answer questions and get
              you set up.
            </p>
            <div className="rounded-2xl border border-gray-100 bg-gray-50 px-6">
              {FAQS.map((f) => (
                <FaqItem key={f.q} q={f.q} a={f.a} />
              ))}
            </div>
          </motion.div>
          <motion.div
            {...fadeUp}
            className="lg:col-span-3 bg-white rounded-3xl border border-gray-100 shadow-xl p-6 sm:p-10"
          >
            <ProviderApplicationForm />
          </motion.div>
        </div>
      </section>
    </div>
    <CalendlySection />
  </>
);

export default ForProviders;
