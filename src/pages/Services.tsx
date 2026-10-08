import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import {
  ArrowRight,
  Dna,
  TestTube,
  TestTube2,
  Microscope,
  Check,
  BatteryLow,
  Scale,
  Leaf,
  Hourglass,
  Pill,
  Stethoscope,
  HeartHandshake,
  FileText,
  Users,
  UserRound,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import CalendlySection from '../components/CalendlySection';
import SEO from '../components/SEO';
import { fadeUp } from '../lib/motion';

type Service = {
  id: string;
  icon: LucideIcon;
  eyebrow: string;
  title: string;
  promise: string;
  idealFor: string[];
  discover: string[];
  link: string;
  gradient: string;
};

const SERVICES: Service[] = [
  {
    id: 'genetic',
    icon: Dna,
    eyebrow: 'ProxiGene by HealthSpan360',
    title: 'Genetic Testing',
    promise: 'Your DNA is the blueprint. Finally, a way to read it and build a plan that fits who you really are.',
    idealFor: ['Anyone tired of one-size-fits-all advice', 'Patients planning for long-term health', 'People who react differently to medications'],
    discover: ['How you process nutrients and supplements', 'Your tendencies around inflammation, sleep and mood', 'Which medications may work best for you'],
    link: '/services/genetic-testing',
    gradient: 'from-magenta-500 to-orange-500',
  },
  {
    id: 'micronutrient',
    icon: TestTube,
    eyebrow: 'Nutrition, measured',
    title: 'Micronutrient Testing',
    promise: 'Feeling off even when you eat well? Uncover the hidden gaps that standard labs miss.',
    idealFor: ['Ongoing fatigue or brain fog', 'Athletes and active lifestyles', 'Anyone taking supplements without knowing if they work'],
    discover: ['Which vitamins and minerals are running low', 'Where your supplement routine is helping, or not', 'A clear starting point you can retest and track'],
    link: '/services/micronutrient-testing',
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    id: 'allergy',
    icon: TestTube2,
    eyebrow: 'Answers from one draw',
    title: 'Allergy Testing',
    promise: 'Stop guessing what is behind the sneezing, itching or stomach trouble. Get specific answers.',
    idealFor: ['Seasonal or year-round symptoms', 'Suspected food reactions', 'Families wanting clarity for kids and adults'],
    discover: ['The exact foods and environmental triggers involved', 'Which reactions may be linked to each other', 'What to avoid, and what you can safely keep'],
    link: '/services/allergy-testing',
    gradient: 'from-amber-500 to-yellow-500',
  },
  {
    id: 'clinical',
    icon: Microscope,
    eyebrow: 'For healthcare providers',
    title: 'Clinical Lab Services',
    promise: 'Specialty and molecular testing from one dependable partner, so your practice can do more.',
    idealFor: ['Practices consolidating lab partners', 'Clinics adding specialty diagnostics', 'Providers who value responsive support'],
    discover: ['Molecular diagnostics and toxicology in one place', 'Simple ordering and clear reporting', 'A team that answers when you call'],
    link: '/services/clinical-lab-services',
    gradient: 'from-blue-500 to-cyan-500',
  },
];

const GOALS: { label: string; icon: LucideIcon; serviceIds: string[]; why: string }[] = [
  { label: 'Low energy', icon: BatteryLow, serviceIds: ['micronutrient', 'genetic'], why: 'Fatigue often traces back to nutrient gaps, and your genes shape how well you absorb and use them.' },
  { label: 'Weight & metabolism', icon: Scale, serviceIds: ['genetic', 'micronutrient'], why: 'See how your body is wired to handle food and exercise, then fuel it with what it actually needs.' },
  { label: 'Food & seasonal reactions', icon: Leaf, serviceIds: ['allergy'], why: 'Pinpoint the specific triggers behind your symptoms instead of cutting out everything at once.' },
  { label: 'Healthy aging', icon: Hourglass, serviceIds: ['genetic', 'micronutrient'], why: 'Understand your long-term tendencies early and build habits that protect you for decades.' },
  { label: 'Medication response', icon: Pill, serviceIds: ['genetic'], why: 'Your genes influence how medications work for you. Testing helps your provider choose with confidence.' },
];

const DIFFERENCE = [
  { icon: FileText, title: 'Reports people understand', copy: 'Clear, visual results that explain what matters and what to do next. No decoding required.' },
  { icon: Stethoscope, title: 'Guided by your provider', copy: 'Every result is reviewed with a licensed practitioner who turns insight into a personal plan.' },
  { icon: HeartHandshake, title: 'Support from start to finish', copy: 'From ordering to results, our team is there to answer questions along the way.' },
];

const serviceById = (id: string) => SERVICES.find((s) => s.id === id);

const GoalFinder = () => {
  const [active, setActive] = useState(0);
  const goal = GOALS[active];
  return (
    <section id="finder" className="py-24 bg-white scroll-mt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeUp} className="text-center max-w-2xl mx-auto mb-12">
          <p className="font-poppins font-semibold text-magenta-600 mb-4">Start with your goal</p>
          <h2 className="text-3xl lg:text-5xl font-poppins font-bold text-gray-900 leading-tight">What would you like to feel better about?</h2>
        </motion.div>
        <div role="tablist" aria-label="Health goals" className="flex flex-wrap justify-center gap-3 mb-10">
          {GOALS.map(({ label, icon: Icon }, i) => (
            <button
              key={label}
              type="button"
              role="tab"
              aria-selected={active === i}
              onClick={() => setActive(i)}
              className={`inline-flex items-center gap-2 px-5 py-3 rounded-full border font-poppins font-semibold text-sm transition-all ${
                active === i
                  ? 'bg-gradient-primary text-white border-transparent shadow-lg scale-105'
                  : 'bg-white text-gray-700 border-gray-200 hover:border-magenta-500 hover:text-magenta-600'
              }`}
            >
              <Icon className="h-4 w-4" />
              {label}
            </button>
          ))}
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            key={goal.label}
            role="tabpanel"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
            className="rounded-3xl bg-gray-50 border border-gray-100 p-6 sm:p-10"
          >
            <p className="text-lg text-gray-700 font-inter leading-relaxed text-center max-w-2xl mx-auto mb-8">{goal.why}</p>
            <div className="grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
              {goal.serviceIds.map((id, i) => {
                const s = serviceById(id);
                if (!s) return null;
                const Icon = s.icon;
                return (
                  <Link
                    key={id}
                    to={s.link}
                    className={`group flex items-center gap-4 bg-white rounded-2xl p-5 border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all ${
                      goal.serviceIds.length === 1 ? 'sm:col-span-2 sm:max-w-md sm:mx-auto sm:w-full' : ''
                    }`}
                  >
                    <div className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${s.gradient} text-white`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <p className="text-xs font-poppins font-semibold uppercase tracking-wider text-gray-500">
                        {i === 0 ? 'Best place to start' : 'Pairs well with'}
                      </p>
                      <p className="font-poppins font-bold text-gray-900">{s.title}</p>
                    </div>
                    <ArrowRight className="h-5 w-5 text-magenta-600 transition-transform group-hover:translate-x-1" />
                  </Link>
                );
              })}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

const ServiceRow = ({ service, index }: { service: Service; index: number }) => {
  const Icon = service.icon;
  const flipped = index % 2 === 1;
  return (
    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
      <motion.div {...fadeUp} className={flipped ? 'lg:order-2' : ''}>
        <p className="font-poppins font-semibold text-magenta-600 mb-3">{service.eyebrow}</p>
        <h3 className="text-3xl lg:text-4xl font-poppins font-bold text-gray-900 mb-5">{service.title}</h3>
        <p className="text-xl text-gray-700 font-inter leading-relaxed mb-8">{service.promise}</p>
        <div className="grid sm:grid-cols-2 gap-8 mb-10">
          {[
            { heading: 'Ideal for', items: service.idealFor },
            { heading: "What you'll discover", items: service.discover },
          ].map(({ heading, items }) => (
            <div key={heading}>
              <p className="font-poppins font-semibold text-gray-900 mb-3">{heading}</p>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item} className="flex items-start gap-3 font-inter text-gray-600 leading-relaxed">
                    <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <Link
          to={service.link}
          className="group inline-flex items-center bg-gradient-primary text-white px-7 py-3.5 rounded-xl font-poppins font-semibold shadow-lg transition-all hover:shadow-xl hover:scale-[1.03]"
        >
          Explore {service.title}
          <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
        </Link>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.94 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7 }}
        className={flipped ? 'lg:order-1' : ''}
      >
        <div className={`relative overflow-hidden rounded-[2rem] bg-gradient-to-br ${service.gradient} p-10 sm:p-14 shadow-2xl`}>
          <div className="absolute -top-16 -right-16 h-56 w-56 rounded-full bg-white/15" aria-hidden="true" />
          <div className="absolute -bottom-20 -left-10 h-64 w-64 rounded-full bg-black/10" aria-hidden="true" />
          <motion.div
            whileHover={{ rotate: [0, -8, 8, 0] }}
            transition={{ duration: 0.6 }}
            className="relative mb-10 inline-flex h-20 w-20 items-center justify-center rounded-3xl bg-white/20 backdrop-blur text-white"
          >
            <Icon className="h-10 w-10" />
          </motion.div>
          <div className="relative space-y-3">
            {service.discover.slice(0, 2).map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.15 }}
                className="bg-white rounded-2xl px-5 py-4 shadow-lg font-inter text-gray-800"
              >
                {item}
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const Services = () => (
  <>
    <SEO
      title="Our Services - HealthSpan360"
      description="Personalized genetic, micronutrient and allergy testing plus clinical lab services. Discover what your body needs and build a plan with your provider."
      keywords="genetic testing, micronutrient testing, allergy testing, clinical lab services, personalized wellness, pharmacogenomics, nutrigenomics, healthspan360"
    />
    <div className="pt-20">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-dark text-off-white">
        <div className="absolute inset-0 opacity-20" aria-hidden="true">
          <div className="absolute -top-24 right-10 w-96 h-96 bg-magenta-500 rounded-full blur-3xl" />
          <div className="absolute bottom-0 -left-10 w-[28rem] h-[28rem] bg-orange-500 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <p className="font-poppins font-semibold text-gold-500 mb-6">Our Services</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-poppins font-bold leading-tight mb-6 text-white">
              Testing that tells your <span className="bg-gradient-primary bg-clip-text text-transparent">whole story.</span>
            </h1>
            <p className="text-lg lg:text-xl text-off-white/80 font-inter leading-relaxed mb-10 max-w-xl">
              Your genes, your nutrition and your environment all shape how you feel. We bring them together so you
              and your provider can stop guessing and start making progress.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#finder"
                className="group inline-flex items-center justify-center bg-gradient-primary text-white px-8 py-4 rounded-xl font-poppins font-semibold text-lg shadow-lg transition-all hover:shadow-xl hover:scale-[1.03]"
              >
                Find the Right Test
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center bg-white/10 hover:bg-white/20 border border-white/20 text-white px-8 py-4 rounded-xl font-poppins font-semibold text-lg transition-colors"
              >
                Talk to Our Team
              </Link>
            </div>
          </motion.div>
          <div className="grid grid-cols-2 gap-4 sm:gap-6 max-w-md mx-auto w-full">
            {SERVICES.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.a
                  key={s.id}
                  href={`#${s.id}`}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: [0, i % 2 ? 8 : -8, 0] }}
                  transition={{ opacity: { delay: 0.2 + i * 0.1 }, y: { duration: 6, repeat: Infinity, ease: 'easeInOut', delay: i * 0.4 } }}
                  className={`group rounded-3xl bg-white/10 backdrop-blur border border-white/15 p-6 hover:bg-white/15 transition-colors ${i % 2 ? 'mt-8' : ''}`}
                >
                  <div className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${s.gradient} text-white shadow-lg group-hover:scale-110 transition-transform`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <p className="font-poppins font-semibold text-white leading-snug">{s.title}</p>
                </motion.a>
              );
            })}
          </div>
        </div>
      </section>

      <GoalFinder />

      {/* Service showcase */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center max-w-2xl mx-auto mb-20">
            <p className="font-poppins font-semibold text-magenta-600 mb-4">Explore our services</p>
            <h2 className="text-3xl lg:text-5xl font-poppins font-bold text-gray-900 leading-tight">Clear answers, wherever you are starting from</h2>
          </motion.div>
          <div className="space-y-28">
            {SERVICES.map((s, i) => (
              <div key={s.id} id={s.id} className="scroll-mt-28">
                <ServiceRow service={s} index={i} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Difference */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center max-w-2xl mx-auto mb-16">
            <p className="font-poppins font-semibold text-magenta-600 mb-4">The HealthSpan360 difference</p>
            <h2 className="text-3xl lg:text-5xl font-poppins font-bold text-gray-900 leading-tight">More than results. A path forward.</h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {DIFFERENCE.map(({ icon: Icon, title, copy }, i) => (
              <motion.div
                key={title}
                {...fadeUp}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="rounded-3xl border border-gray-100 bg-gray-50 p-8 hover:bg-white hover:shadow-xl transition-all duration-300"
              >
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

      {/* Audience CTA */}
      <section className="py-24 bg-gradient-dark">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 {...fadeUp} className="text-3xl lg:text-5xl font-poppins font-bold text-white text-center mb-14">
            Ready to take the next step?
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: UserRound, title: 'For patients', copy: 'Learn how testing works and how to get started with a provider near you.', to: '/patients', cta: 'Patient Guide' },
              { icon: Users, title: 'For providers', copy: 'Bring personalized testing to your practice with a partner that supports you.', to: '/providers', cta: 'Become a Partner' },
            ].map(({ icon: Icon, title, copy, to, cta }, i) => (
              <motion.div key={title} {...fadeUp} transition={{ duration: 0.6, delay: i * 0.1 }}>
                <Link
                  to={to}
                  className="group flex h-full flex-col rounded-3xl bg-white/5 border border-white/10 p-8 sm:p-10 hover:bg-white/10 transition-colors"
                >
                  <Icon className="h-8 w-8 text-gold-500 mb-6" />
                  <h3 className="text-2xl font-poppins font-bold text-white mb-3">{title}</h3>
                  <p className="text-off-white/75 font-inter leading-relaxed mb-8 flex-1">{copy}</p>
                  <span className="inline-flex items-center font-poppins font-semibold text-white">
                    {cta}
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
    <CalendlySection />
  </>
);

export default Services;
