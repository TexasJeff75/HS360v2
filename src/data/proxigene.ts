export const PROXIGENE_PANEL_NAME = 'Core Biosynthetix Panel V5';

export const PROXIGENE_FIGURES = [
  { value: '198', label: 'Unique SNP/rsID variants' },
  { value: '171', label: 'Unique genes/markers' },
  { value: '470+', label: 'Category-specific analyses' },
  { value: '44', label: 'Categories' },
  { value: '10', label: 'Major health sections' },
  { value: '2–3 wks', label: 'Approximate turnaround' },
];

export const PROXIGENE_SECTIONS = [
  {
    name: 'Longevity',
    accent: 'text-orange-600',
    subcategories: [
      'Cellular Longevity', 'Cellular Senescence & Anti-Aging', 'Detoxification & Antioxidant Capacity',
      'Inflammatory Response Regulation', 'Longevity Nootropic Protocol', 'Methylation & Epigenetic Health',
      'Mitochondrial Energy & Function', 'Telomerase Gene Susceptibility',
    ],
  },
  {
    name: 'Metabolism & Energy Expenditure',
    accent: 'text-blue-600',
    subcategories: [
      'Blood Glucose Regulation', 'Cardiovascular & Blood Pressure Risk', 'High LDL Cholesterol', 'High Triglycerides',
      'Low HDL Cholesterol', 'Thyroid Function & Metabolic Rate', 'Weight Management & Obesity Risk',
    ],
  },
  {
    name: 'Psychological Resilience',
    accent: 'text-magenta-600',
    subcategories: [
      'Brain Fog', 'Depression & Mood Regulation', 'Generalized Anxiety Disorder', 'Optimism',
      'Sleep Quality & Circadian Rhythm', 'Stress Sensitivity Profile',
    ],
  },
  {
    name: 'Cognitive Degeneration',
    accent: 'text-magenta-600',
    subcategories: [
      'Advanced Nootropics & Neuroplasticity', 'Cognitive Decline Risk', 'Dopamine, Reward & Arousal Signaling',
      'Neuroprotection & Dementia Prevention',
    ],
  },
  {
    name: 'Musculoskeletal & Physical Performance',
    accent: 'text-orange-600',
    subcategories: [
      'Athletic Performance & Tissue Recovery', 'GH Secretagogue & Ghrelin Axis', 'IGF-1 Axis & Muscle Repair',
      'Muscle Mass & Body Composition',
    ],
  },
  {
    name: 'Micronutrient Metabolism',
    accent: 'text-green-600',
    subcategories: [
      'Cognitive Supplements & Coenzyme Support', 'Longevity & Metabolic Supplements', 'Low Vitamin B12 Susceptibility',
      'Low Vitamin B9 Susceptibility',
    ],
  },
  {
    name: 'Dermatology & Aesthetics',
    accent: 'text-orange-600',
    subcategories: ['Advanced Cosmetic Peptides', 'Melanocortin & Skin Pigmentation', 'Skin Aging & Wound Healing'],
  },
  {
    name: 'Hormonal & Reproductive Health',
    accent: 'text-blue-600',
    subcategories: [
      'Female Reproductive & Hormonal Health', 'Hormonal Balance & Reproductive Health', 'Male Reproductive Health',
      'Testosterone & Androgen Balance',
    ],
  },
  {
    name: 'Immune & Cellular Defense',
    accent: 'text-green-600',
    subcategories: ['Immune Resilience & Viral Defense'],
  },
  {
    name: 'Food Sensitivity Response',
    accent: 'text-red-600',
    subcategories: ['Gluten Sensitivity', 'Gut Integrity & GI Health', 'Lactose Intolerance'],
  },
];

export const PROXIGENE_CHAIN = [
  { step: 'Genotype', description: 'Curated variants reported with gene symbol and rsID.' },
  { step: 'Pathway', description: 'Each pathway is scored across its SNPs into a risk level.' },
  { step: 'Associated agents', description: 'Peptides, supplements, and lifestyle linked to that pathway, with evidence level and safety notes.' },
];

export const PROXIGENE_TRACKS = [
  { title: 'Biosynthetix', description: 'Peptides and compounds tied to the pathway, with mechanism and evidence level.' },
  { title: 'Supplements', description: 'Form, dose range, timing, synergies, and combinations to avoid.' },
  { title: 'Diet', description: 'Macronutrient emphasis, foods to favor, and sensitivities to watch.' },
  { title: 'Lifestyle', description: 'Exercise, sleep, recovery, and stress patterns matched to the profile.' },
  { title: 'Labs to consider', description: 'Baseline and follow-up biomarkers, ordered at provider discretion.' },
];
