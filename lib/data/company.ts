export const company = {
  name: 'CodeQube',
  tagline: 'Engineering-led digital transformation',
  email: 'info@codeqube.io',
  phone: '+1 (905) 555-0142',
  founded: 2014,
  social: {
    linkedin: '#',
    twitter: '#',
    github: '#',
  },
};

export const offices = [
  {
    city: 'Brampton',
    label: 'Head Office',
    address: '2 County Ct Blvd, Brampton, ON L6W 3W8',
    region: 'Ontario, Canada',
  },
  {
    city: 'Vancouver',
    label: 'West Coast',
    address: '701 W Georgia St #1500, Vancouver, BC V7Y 1G5',
    region: 'British Columbia, Canada',
  },
  {
    city: 'Halifax',
    label: 'Atlantic',
    address: "Purdy's Wharf Tower 1, 1959 Upper Water St Suite 1301, Halifax, NS B3J 3N2",
    region: 'Nova Scotia, Canada',
  },
];

export const stats = [
  { value: 500, suffix: '+', label: 'Projects delivered' },
  { value: 98, suffix: '%', label: 'Client retention' },
  { value: 12, suffix: '+', label: 'Years in business' },
  { value: 3, suffix: '', label: 'Canadian offices' },
];

export const industries = [
  {
    slug: 'financial-services',
    name: 'Financial Services',
    summary: 'Core banking modernization, payments, risk analytics and regulatory reporting for banks, lenders and fintechs.',
    focus: ['Payments & ledgers', 'Risk & compliance', 'Open banking APIs', 'Fraud detection'],
    projects: 50,
  },
  {
    slug: 'healthcare',
    name: 'Healthcare',
    summary: 'HIPAA/PHIPA-compliant patient platforms, telehealth, EHR integrations and clinical data pipelines.',
    focus: ['Telehealth', 'EHR / HL7 FHIR', 'Patient portals', 'Clinical analytics'],
    projects: 30,
  },
  {
    slug: 'retail',
    name: 'Retail & E-commerce',
    summary: 'Headless commerce, order management, inventory sync and personalization at peak-traffic scale.',
    focus: ['Headless storefronts', 'OMS & inventory', 'Personalization', 'Marketplace integrations'],
    projects: 40,
  },
  {
    slug: 'manufacturing',
    name: 'Manufacturing',
    summary: 'Industrial IoT, OEE dashboards, predictive maintenance and MES/ERP integration on the plant floor.',
    focus: ['Industrial IoT', 'Predictive maintenance', 'MES / ERP integration', 'Digital twins'],
    projects: 25,
  },
  {
    slug: 'logistics',
    name: 'Transportation & Logistics',
    summary: 'Route optimization, fleet telematics, real-time tracking and carrier integrations.',
    focus: ['Route optimization', 'Fleet telematics', 'Carrier APIs', 'Last-mile tracking'],
    projects: 20,
  },
  {
    slug: 'education',
    name: 'Education',
    summary: 'Learning management systems, student information platforms and accessible digital classrooms.',
    focus: ['LMS platforms', 'Student analytics', 'Accessibility (WCAG)', 'Content delivery'],
    projects: 35,
  },
  {
    slug: 'public-sector',
    name: 'Public Sector',
    summary: 'Secure citizen services, case management and data platforms built to government standards.',
    focus: ['Citizen portals', 'Case management', 'Data governance', 'Accessibility compliance'],
    projects: 15,
  },
  {
    slug: 'technology',
    name: 'Technology & SaaS',
    summary: 'Product engineering, multi-tenant architecture and platform scale for software companies.',
    focus: ['Multi-tenant SaaS', 'Platform APIs', 'Developer tooling', 'Usage-based billing'],
    projects: 60,
  },
];

export const techStack: Record<string, { name: string; note: string }[]> = {
  Backend: [
    { name: 'Java / Spring Boot', note: 'Enterprise services, batch, security' },
    { name: 'Node.js / NestJS', note: 'Event-driven APIs, BFF layers' },
    { name: 'Python / FastAPI', note: 'Data services, ML inference' },
    { name: '.NET Core', note: 'Windows-heavy enterprise estates' },
    { name: 'Go', note: 'High-throughput network services' },
    { name: 'GraphQL & REST', note: 'API design, federation, gateways' },
  ],
  Frontend: [
    { name: 'React / Next.js', note: 'SSR, ISR, edge rendering' },
    { name: 'TypeScript', note: 'Strict typing across the stack' },
    { name: 'Angular', note: 'Large enterprise front-ends' },
    { name: 'React Native', note: 'Cross-platform mobile' },
    { name: 'Tailwind CSS', note: 'Design systems at scale' },
    { name: 'Storybook', note: 'Component-driven development' },
  ],
  'Cloud & DevOps': [
    { name: 'AWS', note: 'EKS, Lambda, RDS, EventBridge' },
    { name: 'Azure', note: 'AKS, Functions, Service Bus' },
    { name: 'Google Cloud', note: 'GKE, BigQuery, Pub/Sub' },
    { name: 'Kubernetes', note: 'Multi-cluster orchestration' },
    { name: 'Terraform', note: 'Infrastructure as Code' },
    { name: 'GitHub Actions / ArgoCD', note: 'CI/CD & GitOps' },
  ],
  'Data & AI': [
    { name: 'PostgreSQL', note: 'Primary transactional store' },
    { name: 'Kafka', note: 'Streaming backbone' },
    { name: 'Snowflake / BigQuery', note: 'Cloud warehousing' },
    { name: 'Apache Spark / dbt', note: 'Transformation pipelines' },
    { name: 'Redis / Elasticsearch', note: 'Caching & search' },
    { name: 'PyTorch / scikit-learn', note: 'Applied ML' },
  ],
  'Quality & Security': [
    { name: 'Playwright / Cypress', note: 'E2E automation' },
    { name: 'JUnit / Jest / pytest', note: 'Unit & integration' },
    { name: 'k6 / JMeter', note: 'Performance testing' },
    { name: 'OWASP ZAP / Snyk', note: 'Security scanning' },
    { name: 'SonarQube', note: 'Static analysis' },
    { name: 'Vault / KMS', note: 'Secrets management' },
  ],
};

export const testimonials = [
  {
    quote:
      'CodeQube re-platformed our storefront in under seven months without a single day of downtime. Peak-season conversion is up and our team finally owns the codebase.',
    name: 'VP Digital Commerce',
    org: 'National specialty retailer',
    metric: '+300%',
    metricLabel: 'conversion rate',
  },
  {
    quote:
      'They understood our regulatory constraints better than vendors we had worked with for years. The risk platform passed audit on the first pass.',
    name: 'Chief Risk Officer',
    org: 'Mid-market lender',
    metric: '40%',
    metricLabel: 'risk exposure reduction',
  },
  {
    quote:
      'The telehealth rollout hit 10,000 daily consultations within a quarter. Reliability has been exceptional and clinicians actually like using it.',
    name: 'Director of Digital Health',
    org: 'Regional health network',
    metric: '10k+',
    metricLabel: 'daily consultations',
  },
  {
    quote:
      'Predictive maintenance alone paid for the platform in the first year. Unplanned downtime on our critical lines is a fraction of what it was.',
    name: 'Plant Operations Lead',
    org: 'Tier-1 automotive supplier',
    metric: '20%',
    metricLabel: 'OEE improvement',
  },
];

export const engagementModels = [
  {
    name: 'Dedicated Team',
    summary: 'A cross-functional squad embedded with your product organisation, scaling up or down by sprint.',
    bestFor: 'Multi-year platforms and product roadmaps',
  },
  {
    name: 'Project Delivery',
    summary: 'Fixed scope, milestone-based delivery with our engineering, QA and DevOps working end-to-end.',
    bestFor: 'Well-defined builds, migrations and MVPs',
  },
  {
    name: 'Staff Augmentation',
    summary: 'Senior engineers who join your existing teams, following your processes and tooling from day one.',
    bestFor: 'Filling skill gaps quickly',
  },
  {
    name: 'Advisory & Architecture',
    summary: 'Technical due diligence, architecture reviews and roadmaps led by principal-level engineers.',
    bestFor: 'Pre-investment and pre-build decisions',
  },
];
