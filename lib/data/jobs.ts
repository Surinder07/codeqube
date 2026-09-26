export type Job = {
  slug: string;
  title: string;
  department: 'Engineering' | 'Cloud & DevOps' | 'Data' | 'Quality';
  location: string;
  workplace: 'Hybrid' | 'Remote' | 'On-site';
  type: 'Full-time' | 'Contract';
  experience: string;
  level: 'Mid' | 'Senior' | 'Lead';
  posted: string;
  summary: string;
  responsibilities: string[];
  requiredSkills: string[];
  preferredSkills: string[];
  qualifications: string[];
  stack: string[];
  benefits: string[];
};

export const sharedBenefits = [
  'Competitive salary with annual review and performance bonus',
  'Extended health, dental and vision coverage from day one',
  'RRSP matching up to 5%',
  '4 weeks paid vacation plus statutory holidays and a year-end shutdown',
  'Annual learning budget and paid certification exams (AWS, Azure, GCP, Kubernetes)',
  'Hybrid working with home-office stipend and modern equipment',
  'Dedicated time for open-source contribution and internal tech talks',
];

export const jobs: Job[] = [
  {
    slug: 'senior-java-developer',
    title: 'Senior Java Developer',
    department: 'Engineering',
    location: 'Brampton, ON',
    workplace: 'Hybrid',
    type: 'Full-time',
    experience: '6+ years',
    level: 'Senior',
    posted: '2026-09-10',
    summary:
      'Lead the design and delivery of enterprise-grade Java services for our financial services and healthcare clients. You will own service architecture, mentor engineers and set the standard for code quality on your squad.',
    responsibilities: [
      'Design, build and operate Spring Boot microservices handling high-volume transactional workloads',
      'Define API contracts, data models and integration patterns with client architects',
      'Lead code reviews and establish engineering standards across the squad',
      'Drive performance tuning, observability and production readiness',
      'Mentor mid-level engineers and contribute to hiring and onboarding',
      'Participate in architecture decision records and technical discovery with clients',
    ],
    requiredSkills: [
      'Java 17+ and the Spring ecosystem (Boot, Data, Security, Cloud)',
      'RESTful and event-driven service design; Kafka or equivalent messaging',
      'Relational databases (PostgreSQL / Oracle) including schema design and query tuning',
      'Containerisation with Docker and deployment on Kubernetes',
      'Automated testing with JUnit 5, Mockito and Testcontainers',
      'CI/CD pipelines and trunk-based development practices',
    ],
    preferredSkills: [
      'Experience in regulated domains (banking, insurance, healthcare)',
      'Reactive programming (Project Reactor / WebFlux)',
      'GraphQL federation',
      'AWS or Azure certification',
    ],
    qualifications: [
      "Bachelor's degree in Computer Science, Engineering or equivalent experience",
      '6+ years of professional Java development with at least 2 years in a senior or lead capacity',
      'Demonstrated ownership of production systems',
    ],
    stack: ['Java 17', 'Spring Boot', 'Kafka', 'PostgreSQL', 'Kubernetes', 'AWS', 'Terraform', 'GitHub Actions'],
    benefits: sharedBenefits,
  },
  {
    slug: 'backend-software-engineer',
    title: 'Backend Software Engineer',
    department: 'Engineering',
    location: 'Vancouver, BC',
    workplace: 'Hybrid',
    type: 'Full-time',
    experience: '3+ years',
    level: 'Mid',
    posted: '2026-09-15',
    summary:
      'Build the APIs and services behind customer-facing platforms serving millions of requests a day. You will work in a cross-functional squad shipping to production every week.',
    responsibilities: [
      'Implement well-tested services and APIs in Node.js (NestJS) or Python (FastAPI)',
      'Model data and write efficient queries against PostgreSQL and Redis',
      'Integrate third-party systems including payment, identity and messaging providers',
      'Instrument services with metrics, logs and traces and respond to production issues',
      'Collaborate with frontend engineers on API design and with QA on test strategy',
    ],
    requiredSkills: [
      'Strong TypeScript or Python with 3+ years in backend development',
      'REST and/or GraphQL API design',
      'SQL and relational data modelling',
      'Git, code review and automated testing habits',
      'Understanding of authentication, authorisation and secure coding practices',
    ],
    preferredSkills: ['Event-driven architectures (Kafka, SQS, Pub/Sub)', 'Docker and Kubernetes', 'Experience with AWS or GCP managed services', 'Contract testing (Pact)'],
    qualifications: ["Bachelor's degree in a technical field or equivalent practical experience", '3+ years building production backend systems'],
    stack: ['TypeScript', 'NestJS', 'Python', 'FastAPI', 'PostgreSQL', 'Redis', 'Docker', 'AWS'],
    benefits: sharedBenefits,
  },
  {
    slug: 'full-stack-developer',
    title: 'Full Stack Developer',
    department: 'Engineering',
    location: 'Remote (Canada)',
    workplace: 'Remote',
    type: 'Full-time',
    experience: '4+ years',
    level: 'Mid',
    posted: '2026-09-18',
    summary:
      'Own features end-to-end, from React components through Node.js APIs to deployment. Ideal for an engineer who enjoys product thinking as much as clean code.',
    responsibilities: [
      'Deliver features across Next.js frontends and Node.js backends',
      'Build accessible, performant UI using our design system and Storybook',
      'Write unit, integration and end-to-end tests (Jest, Playwright)',
      'Participate in discovery sessions with clients and translate requirements into technical work',
      'Ship through CI/CD with preview environments and feature flags',
    ],
    requiredSkills: [
      'React and TypeScript in production for 3+ years',
      'Node.js API development',
      'HTML/CSS fundamentals and accessibility (WCAG) awareness',
      'SQL databases and ORM tooling (Prisma, TypeORM or similar)',
      'Comfort with Git workflows and code review',
    ],
    preferredSkills: ['Next.js App Router, SSR and ISR', 'Tailwind CSS', 'GraphQL', 'Basic cloud deployment experience (Vercel, AWS)'],
    qualifications: ['Degree or diploma in a relevant field, or equivalent portfolio of shipped work', '4+ years of professional web development'],
    stack: ['Next.js', 'React', 'TypeScript', 'Node.js', 'Tailwind CSS', 'PostgreSQL', 'Prisma', 'Playwright'],
    benefits: sharedBenefits,
  },
  {
    slug: 'devops-engineer',
    title: 'DevOps Engineer',
    department: 'Cloud & DevOps',
    location: 'Brampton, ON',
    workplace: 'Hybrid',
    type: 'Full-time',
    experience: '4+ years',
    level: 'Mid',
    posted: '2026-09-05',
    summary:
      'Build and run the delivery platforms our engineering squads depend on. You will own CI/CD, Kubernetes platforms and observability across multiple client environments.',
    responsibilities: [
      'Design and maintain CI/CD pipelines with GitHub Actions, GitLab CI and ArgoCD',
      'Operate Kubernetes clusters (EKS, AKS) including upgrades, autoscaling and policy enforcement',
      'Write and review infrastructure as code with Terraform and Helm',
      'Implement observability stacks (Prometheus, Grafana, OpenTelemetry) and SLO-based alerting',
      'Lead incident response and blameless post-mortems; improve runbooks and automation',
      'Coach development teams on DevOps practices and golden-path templates',
    ],
    requiredSkills: [
      'Production Kubernetes experience',
      'Terraform and at least one major cloud (AWS or Azure)',
      'CI/CD pipeline design and GitOps workflows',
      'Linux administration, networking and shell scripting',
      'Monitoring, logging and tracing tooling',
    ],
    preferredSkills: ['Service mesh (Istio / Linkerd)', 'Policy-as-code (OPA)', 'Python or Go for tooling', 'CKA / CKAD or cloud professional certification'],
    qualifications: ['4+ years in DevOps, SRE or platform engineering roles', 'Experience supporting multiple production environments'],
    stack: ['Kubernetes', 'Terraform', 'Helm', 'ArgoCD', 'GitHub Actions', 'AWS', 'Azure', 'Prometheus', 'Grafana'],
    benefits: sharedBenefits,
  },
  {
    slug: 'cloud-engineer',
    title: 'Cloud Engineer',
    department: 'Cloud & DevOps',
    location: 'Halifax, NS',
    workplace: 'Hybrid',
    type: 'Full-time',
    experience: '5+ years',
    level: 'Senior',
    posted: '2026-08-28',
    summary:
      'Architect and implement secure, cost-efficient cloud foundations for enterprise clients migrating to AWS and Azure. You will lead landing-zone design, migration waves and FinOps practice.',
    responsibilities: [
      'Design multi-account landing zones, networking, identity and guardrails',
      'Plan and execute application migrations (rehost, replatform, refactor)',
      'Implement security controls aligned with CIS benchmarks and client compliance needs',
      'Establish cost visibility, tagging strategy and optimisation programmes',
      'Produce architecture documentation and present to client stakeholders',
      'Mentor DevOps engineers on cloud-native patterns',
    ],
    requiredSkills: [
      'Deep hands-on experience with AWS or Azure (both preferred)',
      'Infrastructure as code with Terraform at scale',
      'Cloud networking, IAM and security architecture',
      'Migration planning and execution',
      'Cost management and optimisation',
    ],
    preferredSkills: ['Google Cloud experience', 'Kubernetes platform design', 'Serverless architectures', 'Data residency and compliance frameworks (SOC 2, PHIPA)'],
    qualifications: ['5+ years in cloud engineering or architecture', 'AWS Solutions Architect Professional or Azure Solutions Architect Expert certification'],
    stack: ['AWS', 'Azure', 'Terraform', 'Kubernetes', 'AWS Control Tower', 'Azure Landing Zones', 'Vault'],
    benefits: sharedBenefits,
  },
  {
    slug: 'data-engineer',
    title: 'Data Engineer',
    department: 'Data',
    location: 'Remote (Canada)',
    workplace: 'Remote',
    type: 'Full-time',
    experience: '4+ years',
    level: 'Mid',
    posted: '2026-09-12',
    summary:
      'Build the pipelines and data platforms behind our analytics and ML work. You will design streaming and batch pipelines, model warehouses and put data quality on rails.',
    responsibilities: [
      'Design and build ingestion pipelines with Kafka, Airflow and dbt',
      'Model data in Snowflake, BigQuery or Databricks for analytics and ML use cases',
      'Implement data quality checks, lineage and cataloguing',
      'Optimise pipeline performance and cloud cost',
      'Partner with data scientists to productionise features and models',
      'Document data contracts and semantic models for downstream teams',
    ],
    requiredSkills: [
      'Strong SQL and Python',
      'Experience with a modern cloud warehouse or lakehouse',
      'Orchestration tooling (Airflow, Dagster or Prefect)',
      'Streaming or CDC experience (Kafka, Debezium)',
      'Dimensional and event-based data modelling',
    ],
    preferredSkills: ['dbt', 'Apache Spark or Flink', 'Data quality frameworks (Great Expectations)', 'ML feature stores and MLOps tooling'],
    qualifications: ["Bachelor's degree in Computer Science, Engineering, Mathematics or related field", '4+ years in data engineering roles'],
    stack: ['Python', 'SQL', 'Kafka', 'Airflow', 'dbt', 'Snowflake', 'BigQuery', 'Spark', 'Terraform'],
    benefits: sharedBenefits,
  },
  {
    slug: 'qa-automation-engineer',
    title: 'QA Automation Engineer',
    department: 'Quality',
    location: 'Brampton, ON',
    workplace: 'Hybrid',
    type: 'Full-time',
    experience: '3+ years',
    level: 'Mid',
    posted: '2026-09-20',
    summary:
      'Own test strategy and automation for web, mobile and API projects. You will embed with delivery squads and build the frameworks that let us release daily with confidence.',
    responsibilities: [
      'Define test strategies covering unit, integration, contract, E2E and performance layers',
      'Build and maintain automation frameworks with Playwright, Cypress and Detox',
      'Automate API testing and contract tests in CI pipelines',
      'Run performance and load tests with k6 and analyse results',
      'Champion quality practices within squads and coach developers on testability',
      'Track quality metrics and drive down escaped defects',
    ],
    requiredSkills: [
      'Hands-on automation with Playwright, Cypress or Selenium',
      'JavaScript/TypeScript for test development',
      'API testing and understanding of HTTP, REST and GraphQL',
      'CI integration of automated test suites',
      'Strong analytical and defect-isolation skills',
    ],
    preferredSkills: ['Mobile automation (Detox, Appium)', 'Performance testing (k6, JMeter)', 'Accessibility testing (axe)', 'Security testing fundamentals (OWASP ZAP)'],
    qualifications: ['3+ years in QA automation or software engineering in test', 'ISTQB certification is a plus'],
    stack: ['Playwright', 'Cypress', 'TypeScript', 'k6', 'Detox', 'GitHub Actions', 'Allure'],
    benefits: sharedBenefits,
  },
];

export const getJob = (slug: string) => jobs.find((j) => j.slug === slug);

export const jobDepartments = Array.from(new Set(jobs.map((j) => j.department)));
export const jobLocations = Array.from(new Set(jobs.map((j) => j.location)));
