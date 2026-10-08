export const PGX_HEADLINE_FIGURES = [
  { value: '34', label: 'Genes, HLA & PD markers' },
  { value: '14', label: 'Therapeutic areas' },
  { value: 'CPIC', label: 'DPWG · FDA · PharmGKB aligned' },
];

export const PGX_GENE_GROUPS = [
  {
    name: 'Phase I Metabolism',
    genes: ['CYP2D6', 'CYP2C19', 'CYP2C9', 'CYP3A4', 'CYP3A5', 'CYP2C8', 'CYP2B6', 'CYP2E1', 'CYP4F2'],
  },
  {
    name: 'Phase II Metabolism',
    genes: ['UGT1A1', 'UGT2B7', 'TPMT', 'NUDT15', 'NAT2', 'DPYD', 'GSTM1', 'GSTP1'],
  },
  { name: 'Transporters', genes: ['SLCO1B1', 'ABCG2'] },
  { name: 'HLA / Immune', genes: ['HLA-B*57:01', 'HLA-B*58:01', 'HLA-B*15:02', 'HLA-A*31:01'] },
  { name: 'Pharmacodynamic', genes: ['COMT', 'OPRM1', 'HTR2A', 'IFNL3', 'VKORC1'] },
  { name: 'Other Clinical', genes: ['CFTR', 'G6PD', 'RYR1', 'CACNA1S', 'F2', 'F5'] },
];

export const PGX_DECISION_FEATURES = [
  {
    key: 'summary',
    title: 'Clinician Action Summary',
    description: 'A triaged dashboard opens every report — the interactions that need attention, first.',
  },
  {
    key: 'severity',
    title: 'Severity tiering',
    description: 'Findings ranked major or moderate, with a clear alternate-drug vs alternate-dosing call.',
  },
  {
    key: 'areas',
    title: 'Organized by therapeutic area',
    description: 'Sorted across 14 clinical categories, in the context you prescribe in.',
  },
  {
    key: 'alternatives',
    title: 'CPIC-aligned alternatives',
    description: 'Flagged drugs come with guideline-consistent alternatives and dosing guidance.',
  },
  {
    key: 'transparency',
    title: 'Full transparency',
    description: 'Every genotype and allele interrogated is shown, including no-action calls.',
  },
  {
    key: 'evidence',
    title: 'Evidence on every card',
    description: 'Each finding carries its CPIC / DPWG / FDA / PharmGKB level-of-evidence and citation.',
  },
] as const;

export const PGX_BENEFITS = [
  {
    title: 'Better prescribing decisions',
    points: [
      'Anticipate high-severity risks, including HLA-linked hypersensitivity, before the first dose.',
      'Inform drug and dose selection up front, reducing trial-and-error.',
      'Surface metabolizer status that may affect response or tolerability.',
    ],
  },
  {
    title: 'Simple to order, easy to act on',
    points: [
      'One sample; one structured, severity-triaged report.',
      'The Clinician Action Summary surfaces what needs attention first.',
      'Tested once, the result stays in the record and informs future prescribing.',
    ],
  },
  {
    title: 'Value that compounds',
    points: [
      'May reduce repeat visits and medication switches from failed trials.',
      'A single preemptive result informs prescribing across many future medications.',
      'Guideline-anchored evidence supports formulary and stewardship goals.',
    ],
  },
];

export const PGX_SPECIALTIES = [
  {
    name: 'Primary Care & Internal Medicine',
    markers: 'CYP2C19 (PPIs, clopidogrel) · SLCO1B1 (statins) · CYP2D6 / CYP2C19 (antidepressants)',
  },
  {
    name: 'Psychiatry & Behavioral Health',
    markers: 'CYP2D6 & CYP2C19 (antidepressants, antipsychotics) · HTR2A · COMT · OPRM1',
  },
  {
    name: 'Cardiology',
    markers: 'CYP2C19 (clopidogrel) · CYP2C9 · VKORC1 · CYP4F2 (warfarin) · SLCO1B1 (statins) · F2 · F5',
  },
  {
    name: 'Pain Management & Anesthesiology',
    markers: 'CYP2D6 (codeine, tramadol) · OPRM1 · COMT · RYR1 · CACNA1S (malignant hyperthermia)',
  },
  {
    name: 'Oncology & Hematology',
    markers: 'DPYD (fluoropyrimidines) · TPMT · NUDT15 (thiopurines) · UGT1A1 (irinotecan) · CYP2D6 (tamoxifen)',
  },
  {
    name: 'Gastroenterology',
    markers: 'CYP2C19 (PPIs) · TPMT · NUDT15 (azathioprine, 6-MP)',
  },
  {
    name: 'Infectious Disease',
    markers: 'HLA-B*57:01 (abacavir) · IFNL3 (HCV therapy) · CYP2B6 (efavirenz) · G6PD',
  },
  {
    name: 'Neurology',
    markers: 'CYP2C9 & HLA-B*15:02 (carbamazepine, phenytoin) · HLA-A*31:01 · CYP2D6',
  },
];

export const PGX_CLIA_NUMBER = '45D2326543';
export const PGX_ORDERS_EMAIL = 'orders@hs360.co';
