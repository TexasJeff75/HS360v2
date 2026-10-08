import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  X, LayoutDashboard, Scale, Layers, Route, ListChecks, BookOpenCheck, CheckCircle, ArrowRight, Mail,
} from 'lucide-react';
import {
  PGX_HEADLINE_FIGURES, PGX_GENE_GROUPS, PGX_DECISION_FEATURES, PGX_BENEFITS, PGX_SPECIALTIES,
  PGX_CLIA_NUMBER, PGX_ORDERS_EMAIL,
} from '../data/pgx';

const FEATURE_ICONS: Record<(typeof PGX_DECISION_FEATURES)[number]['key'], React.ReactNode> = {
  summary: <LayoutDashboard className="h-5 w-5" />,
  severity: <Scale className="h-5 w-5" />,
  areas: <Layers className="h-5 w-5" />,
  alternatives: <Route className="h-5 w-5" />,
  transparency: <ListChecks className="h-5 w-5" />,
  evidence: <BookOpenCheck className="h-5 w-5" />,
};

const SectionHeading = ({ eyebrow, title }: { eyebrow: string; title: string }) => (
  <div className="mb-6">
    <p className="text-xs font-poppins font-semibold tracking-[0.2em] uppercase text-magenta-600 mb-2">{eyebrow}</p>
    <h3 className="text-2xl font-poppins font-bold text-gray-900">{title}</h3>
  </div>
);

interface PgxPanelModalProps {
  onClose: () => void;
}

const PgxPanelModal = ({ onClose }: PgxPanelModalProps) => {
  useEffect(() => {
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-labelledby="pgx-modal-title"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="sticky top-0 z-10 bg-white border-b border-gray-200 p-6 flex justify-between items-start gap-4 rounded-t-2xl">
          <div>
            <p className="text-xs font-poppins font-semibold tracking-[0.2em] uppercase text-gray-500 mb-1">
              Precision Genomics · Provider-Ordered · LDT
            </p>
            <h2 id="pgx-modal-title" className="text-3xl font-poppins font-bold bg-gradient-primary bg-clip-text text-transparent">
              Pharmacogenomics Panel
            </h2>
            <p className="text-gray-600 font-inter mt-1">
              Genotype-guided prescribing intelligence, delivered as clinical action — not raw data.
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="p-2 hover:bg-gray-100 rounded-full transition-colors flex-shrink-0"
          >
            <X className="h-6 w-6 text-gray-500" />
          </button>
        </div>

        <div className="p-6 space-y-12">
          <dl className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {PGX_HEADLINE_FIGURES.map((figure) => (
              <div key={figure.label} className="bg-gradient-to-br from-magenta-50 to-orange-50/30 rounded-xl p-5">
                <dt className="sr-only">{figure.label}</dt>
                <dd className="text-4xl font-poppins font-bold bg-gradient-primary bg-clip-text text-transparent">
                  {figure.value}
                </dd>
                <dd className="text-gray-600 font-inter text-sm mt-1" aria-hidden="true">{figure.label}</dd>
              </div>
            ))}
          </dl>

          <section>
            <SectionHeading eyebrow="Comprehensive Coverage" title="34 pharmacogenes, HLA loci & pharmacodynamic markers" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {PGX_GENE_GROUPS.map((group) => (
                <div key={group.name}>
                  <h4 className="text-sm font-poppins font-semibold uppercase tracking-wide text-magenta-600 mb-3">
                    {group.name}
                  </h4>
                  <ul className="flex flex-wrap gap-2">
                    {group.genes.map((gene) => (
                      <li
                        key={gene}
                        className="font-mono text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded-md"
                      >
                        {gene}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section>
            <SectionHeading eyebrow="The Decision-Support Difference" title="More than a gene list — a decision-support layer" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {PGX_DECISION_FEATURES.map((feature) => (
                <div
                  key={feature.key}
                  className="flex items-start gap-4 border border-gray-200 rounded-xl p-5 hover:border-magenta-200 hover:shadow-md transition-all"
                >
                  <div className="bg-gradient-primary text-white p-2.5 rounded-lg flex-shrink-0">
                    {FEATURE_ICONS[feature.key]}
                  </div>
                  <div>
                    <h4 className="font-poppins font-semibold text-gray-900 mb-1">{feature.title}</h4>
                    <p className="text-gray-600 font-inter text-sm leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <div className="bg-blue-900 text-white rounded-2xl p-6 md:p-8 flex flex-col md:flex-row md:items-center gap-4">
            <p className="text-xs font-poppins font-semibold tracking-[0.2em] uppercase text-blue-200 md:w-40 flex-shrink-0">
              The ProxiGene Difference
            </p>
            <p className="text-lg md:text-xl font-poppins font-semibold leading-snug">
              Where many reports stop at a genotype and a phenotype label, ProxiGene carries the finding through to a
              prescribing decision.
            </p>
          </div>

          <section>
            <SectionHeading eyebrow="Why It Matters" title="Benefits across the care pathway" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {PGX_BENEFITS.map((benefit) => (
                <div key={benefit.title} className="border border-gray-200 rounded-xl p-5">
                  <h4 className="font-poppins font-semibold text-gray-900 mb-4">{benefit.title}</h4>
                  <ul className="space-y-3">
                    {benefit.points.map((point) => (
                      <li key={point} className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600 font-inter text-sm leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section>
            <SectionHeading eyebrow="Who Orders ProxiGene" title="Actionable across specialties" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {PGX_SPECIALTIES.map((specialty) => (
                <div key={specialty.name} className="border border-gray-200 border-l-4 border-l-magenta-500 rounded-xl p-5">
                  <h4 className="font-poppins font-semibold text-gray-900 mb-1">{specialty.name}</h4>
                  <p className="text-gray-600 font-inter text-sm leading-relaxed">{specialty.markers}</p>
                </div>
              ))}
            </div>
          </section>

          <div className="bg-gradient-dark text-white rounded-2xl p-6 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h3 className="text-2xl font-poppins font-bold mb-1">Bring genotype-guided prescribing into your practice.</h3>
              <p className="text-white/80 font-inter">Provider-ordered · one sample · results returned to the ordering clinician.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center bg-gradient-primary hover:from-magenta-600 hover:to-orange-600 text-white px-5 py-3 rounded-lg font-poppins font-semibold transition-all"
              >
                Contact Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <a
                href={`mailto:${PGX_ORDERS_EMAIL}`}
                className="inline-flex items-center justify-center bg-white/10 hover:bg-white/20 border border-white/20 text-white px-5 py-3 rounded-lg font-poppins font-semibold transition-all"
              >
                <Mail className="mr-2 h-4 w-4" />
                {PGX_ORDERS_EMAIL}
              </a>
            </div>
          </div>

          <footer className="pt-6 border-t border-gray-200 space-y-2 text-xs text-gray-500 font-inter leading-relaxed">
            <p className="text-sm text-gray-800 font-poppins font-semibold">
              ProxiGene PGx Panel · A HealthSpan360 Product · HealthSpan360 LLC
            </p>
            <p>Provider-ordered · Performed in a CLIA-certified laboratory (CLIA #{PGX_CLIA_NUMBER})</p>
            <p>
              Guideline-anchored to CPIC · DPWG · FDA · PharmGKB (PharmVar nomenclature). Laboratory-developed test, not
              FDA-cleared or approved (clearance not required for LDTs); it informs, and does not replace, the
              prescriber&apos;s clinical judgment.
            </p>
          </footer>
        </div>
      </motion.div>
    </div>
  );
};

export default PgxPanelModal;
