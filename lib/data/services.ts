export type Service = {
  slug: string;
  title: string;
  shortTitle: string;
  eyebrow: string;
  icon: 'web' | 'mobile' | 'consulting' | 'cloud' | 'seo' | 'data';
  summary: string;
  overview: string[];
  problems: { title: string; detail: string }[];
  solutions: { title: string; detail: string }[];
  technologies: Record<string, string[]>;
  approach: { phase: string; title: string; detail: string; duration: string }[];
  benefits: { metric: string; label: string; detail: string }[];
  relatedProjects: string[];
  faqs: { q: string; a: string }[];
};

export const services: Service[] = [
  {
    slug: 'web-development',
    title: 'Web Application Development',
    shortTitle: 'Web Development',
    eyebrow: 'Build',
    icon: 'web',
    summary:
      'Custom web platforms, customer portals and e-commerce systems engineered for performance, accessibility and long-term maintainability.',
    overview: [
      'We design and build web applications that sit at the centre of how our clients do business: customer portals, B2B ordering platforms, internal operations tools and high-traffic e-commerce storefronts.',
      'Every engagement starts with the domain, not the framework. We model the business, define clear service boundaries, and only then choose a rendering strategy, data layer and hosting model that fit the workload.',
      'Our teams ship production code from the first sprint, with automated testing, CI/CD and observability wired in from day one, so the platform you receive is one your own engineers can run and extend.',
    ],
    problems: [
      { title: 'Legacy platforms slowing the business', detail: 'Monolithic applications where a small change requires a full regression cycle and release windows measured in weeks.' },
      { title: 'Poor performance hurting conversion', detail: 'Slow page loads, layout shift and unresponsive checkout flows that directly reduce revenue and search ranking.' },
      { title: 'Inconsistent user experience', detail: 'Multiple portals with different design languages, duplicate logic and no shared component library.' },
      { title: 'Accessibility and compliance gaps', detail: 'Applications that fail WCAG 2.1 AA audits, exposing the organisation to legal and reputational risk.' },
    ],
    solutions: [
      { title: 'Customer & partner portals', detail: 'Secure, role-based portals integrated with CRM, ERP and identity providers.' },
      { title: 'Headless e-commerce', detail: 'Composable storefronts on Next.js with commerce engines such as commercetools, Shopify Plus or custom OMS.' },
      { title: 'Design systems & component libraries', detail: 'Tokenised, documented component libraries that keep every product on-brand and accessible.' },
      { title: 'Progressive web apps', detail: 'Offline-capable, installable experiences for field teams and low-connectivity users.' },
      { title: 'Legacy modernisation', detail: 'Strangler-pattern migrations that replace monoliths incrementally without a risky big-bang cutover.' },
      { title: 'Performance engineering', detail: 'Core Web Vitals optimisation, edge caching and rendering strategy tuned per route.' },
    ],
    technologies: {
      Frontend: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Angular', 'Storybook'],
      Backend: ['Node.js', 'NestJS', 'Java / Spring Boot', 'GraphQL', 'REST'],
      Data: ['PostgreSQL', 'Redis', 'Elasticsearch', 'Prisma'],
      Platform: ['Vercel', 'AWS', 'Docker', 'GitHub Actions', 'Playwright'],
    },
    approach: [
      { phase: '01', title: 'Discovery & domain modelling', detail: 'Stakeholder workshops, journey mapping, event storming and a prioritised backlog with clear acceptance criteria.', duration: '2–3 weeks' },
      { phase: '02', title: 'Architecture & design system', detail: 'Rendering strategy, API contracts, data model, security posture and a token-based design system in Figma and code.', duration: '2–4 weeks' },
      { phase: '03', title: 'Iterative delivery', detail: 'Two-week sprints with demoable increments, automated test coverage and preview environments for every pull request.', duration: 'Ongoing' },
      { phase: '04', title: 'Hardening & launch', detail: 'Performance budgets, accessibility audit, penetration test, load testing and a rehearsed cutover plan.', duration: '2–3 weeks' },
      { phase: '05', title: 'Run & evolve', detail: 'SLO-backed support, observability dashboards and a roadmap cadence with your product team.', duration: 'Continuous' },
    ],
    benefits: [
      { metric: '<1.5s', label: 'Largest Contentful Paint', detail: 'Performance budgets enforced in CI on every route.' },
      { metric: 'AA', label: 'WCAG 2.1 conformance', detail: 'Accessibility built into the component library, not bolted on.' },
      { metric: '80%+', label: 'Automated test coverage', detail: 'Unit, integration and E2E suites that run on every commit.' },
      { metric: 'Daily', label: 'Release cadence', detail: 'Trunk-based development with feature flags and zero-downtime deploys.' },
    ],
    relatedProjects: ['ecommerce-platform-transformation', 'learning-management-system'],
    faqs: [
      { q: 'Do you work with our in-house developers?', a: 'Yes. Most engagements are blended teams. We pair with your engineers, follow your code review standards and hand over with full documentation.' },
      { q: 'Which framework do you recommend?', a: 'It depends on the workload. We default to React/Next.js with TypeScript for most customer-facing products, but we regularly deliver Angular and server-rendered Java stacks where the estate calls for it.' },
      { q: 'How do you handle legacy migration risk?', a: 'We favour incremental strangler-pattern migrations behind a routing layer, so traffic moves route-by-route and can be rolled back at any point.' },
    ],
  },
  {
    slug: 'mobile-applications',
    title: 'Mobile Application Development',
    shortTitle: 'Mobile Apps',
    eyebrow: 'Build',
    icon: 'mobile',
    summary:
      'Native and cross-platform mobile products for iOS and Android, from consumer apps to secure field-operations tooling.',
    overview: [
      'We build mobile applications that need to work under real-world conditions: intermittent connectivity, strict security requirements, background sync and device integrations.',
      'Our mobile practice covers React Native and Flutter for cross-platform delivery, alongside Swift and Kotlin where native performance or platform APIs demand it.',
      'We own the full lifecycle, including backend-for-frontend APIs, push infrastructure, analytics, app store release management and crash monitoring.',
    ],
    problems: [
      { title: 'Two codebases, two roadmaps', detail: 'Separate iOS and Android teams shipping features at different times with divergent behaviour.' },
      { title: 'Poor offline behaviour', detail: 'Field and frontline apps that fail when connectivity drops, causing lost data and frustrated users.' },
      { title: 'Low store ratings', detail: 'Crashes, slow start-up and confusing onboarding driving uninstalls and negative reviews.' },
      { title: 'Security & compliance exposure', detail: 'Sensitive data stored insecurely on device, weak session handling and missing certificate pinning.' },
    ],
    solutions: [
      { title: 'Cross-platform apps', detail: 'Single React Native or Flutter codebase with shared business logic and platform-specific polish.' },
      { title: 'Native iOS & Android', detail: 'Swift and Kotlin for performance-critical, sensor-heavy or platform-integrated experiences.' },
      { title: 'Offline-first architecture', detail: 'Local persistence, conflict resolution and background sync designed for unreliable networks.' },
      { title: 'Secure enterprise mobility', detail: 'Biometric auth, encrypted storage, MDM compatibility and certificate pinning.' },
      { title: 'Backend-for-frontend APIs', detail: 'Purpose-built API layers that aggregate services and reduce round-trips on mobile.' },
      { title: 'Release & lifecycle management', detail: 'CI pipelines for TestFlight and Play Console, phased rollouts and crash analytics.' },
    ],
    technologies: {
      'Cross-platform': ['React Native', 'Expo', 'Flutter', 'TypeScript'],
      Native: ['Swift', 'SwiftUI', 'Kotlin', 'Jetpack Compose'],
      Backend: ['Node.js', 'GraphQL', 'Firebase', 'AWS Amplify'],
      Tooling: ['Fastlane', 'Bitrise', 'Detox', 'Sentry', 'Firebase Crashlytics'],
    },
    approach: [
      { phase: '01', title: 'Product discovery', detail: 'User research, journey mapping and a clickable prototype validated with real users before engineering begins.', duration: '2–3 weeks' },
      { phase: '02', title: 'Platform decision', detail: 'Cross-platform vs native evaluation against performance, device API and team-skills criteria.', duration: '1 week' },
      { phase: '03', title: 'Build in sprints', detail: 'Weekly internal builds via TestFlight and Play internal testing, with device-farm regression runs.', duration: 'Ongoing' },
      { phase: '04', title: 'Beta & launch', detail: 'Closed beta, store listing optimisation, phased rollout and real-time crash monitoring.', duration: '2–4 weeks' },
      { phase: '05', title: 'Iterate', detail: 'Analytics-driven roadmap, OS version upgrades and feature flags for controlled releases.', duration: 'Continuous' },
    ],
    benefits: [
      { metric: '1', label: 'Shared codebase', detail: 'Up to 90% code reuse across iOS and Android.' },
      { metric: '99.9%', label: 'Crash-free sessions', detail: 'Monitored and alerted from day one in production.' },
      { metric: '4.7★', label: 'Average store rating', detail: 'Across apps we have shipped and maintain.' },
      { metric: '<2s', label: 'Cold start target', detail: 'Start-up performance budgets enforced per release.' },
    ],
    relatedProjects: ['telemedicine-platform', 'logistics-optimization-platform'],
    faqs: [
      { q: 'React Native or Flutter?', a: 'Both are production-grade. We choose based on your existing web stack, team skills and the specific device APIs you need. If you already have a React web team, React Native usually wins.' },
      { q: 'Can you take over an existing app?', a: 'Yes. We start with a code and architecture audit, stabilise crash rates, then plan incremental improvements.' },
    ],
  },
  {
    slug: 'digital-consulting',
    title: 'Digital & Technology Consulting',
    shortTitle: 'Digital Consulting',
    eyebrow: 'Advise',
    icon: 'consulting',
    summary:
      'Technology strategy, architecture reviews and transformation roadmaps led by engineers who have shipped the systems they recommend.',
    overview: [
      'Our consulting practice exists to make sure the right things get built. We help executives and technology leaders make architecture, platform and sourcing decisions with clarity and confidence.',
      'Unlike advisory-only firms, every recommendation we make is grounded in delivery experience: our consultants are principal engineers and architects who move between advisory and hands-on engagements.',
      'Typical outputs include target-state architectures, modernisation roadmaps, build-vs-buy analyses, technical due diligence and operating-model designs for engineering organisations.',
    ],
    problems: [
      { title: 'No clear technology roadmap', detail: 'Investment decisions made project-by-project with no target architecture to align them.' },
      { title: 'Rising technical debt', detail: 'Ageing platforms with unknown risk, undocumented dependencies and single points of failure.' },
      { title: 'Stalled transformation programmes', detail: 'Initiatives that have consumed budget without delivering measurable business outcomes.' },
      { title: 'Vendor lock-in', detail: 'Critical capabilities tied to platforms that constrain flexibility and inflate cost.' },
    ],
    solutions: [
      { title: 'Technology strategy & roadmap', detail: 'Multi-year target architecture with sequenced initiatives, business cases and KPIs.' },
      { title: 'Architecture review', detail: 'Independent assessment of scalability, security, resilience and cost against your business goals.' },
      { title: 'Technical due diligence', detail: 'Codebase, infrastructure and team assessments for M&A and investment decisions.' },
      { title: 'Modernisation planning', detail: 'Decomposition strategy, migration waves and risk controls for legacy estates.' },
      { title: 'Engineering operating model', detail: 'Team topology, DevOps maturity, delivery metrics and governance design.' },
      { title: 'Build vs buy analysis', detail: 'Structured evaluation of SaaS, platform and custom options with TCO modelling.' },
    ],
    technologies: {
      Frameworks: ['TOGAF', 'C4 Model', 'Domain-Driven Design', 'Team Topologies'],
      Assessment: ['SonarQube', 'Dependency scanning', 'Cloud cost analysis', 'DORA metrics'],
      Delivery: ['Miro', 'Jira', 'Confluence', 'Architecture Decision Records'],
    },
    approach: [
      { phase: '01', title: 'Align on outcomes', detail: 'Executive interviews and workshops to define the business outcomes technology needs to enable.', duration: '1–2 weeks' },
      { phase: '02', title: 'Assess current state', detail: 'Architecture, code, infrastructure, team and process assessment with evidence-based scoring.', duration: '2–4 weeks' },
      { phase: '03', title: 'Design target state', detail: 'Target architecture, capability map and options analysis with cost and risk trade-offs.', duration: '2–3 weeks' },
      { phase: '04', title: 'Roadmap & business case', detail: 'Sequenced initiatives, investment profile, KPIs and governance model presented to leadership.', duration: '1–2 weeks' },
      { phase: '05', title: 'Guide execution', detail: 'Ongoing architecture governance and delivery assurance as initiatives launch.', duration: 'Optional' },
    ],
    benefits: [
      { metric: '30%', label: 'Typical run-cost reduction', detail: 'Identified through platform and cloud rationalisation.' },
      { metric: '6 wks', label: 'To an actionable roadmap', detail: 'From kick-off to board-ready recommendations.' },
      { metric: '100%', label: 'Engineer-led', detail: 'Every consultant has shipped production systems.' },
      { metric: '0', label: 'Vendor commissions', detail: 'Independent recommendations with no resale incentives.' },
    ],
    relatedProjects: ['fintech-risk-management', 'ecommerce-platform-transformation'],
    faqs: [
      { q: 'How is this different from a big-consultancy engagement?', a: 'Smaller, senior teams with hands-on delivery experience. You get architects who will still be around to help build what they recommend.' },
      { q: 'Can you support a funding or acquisition decision?', a: 'Yes. Technical due diligence is a core offering, typically delivered in two to three weeks with a written risk report.' },
    ],
  },
  {
    slug: 'cloud-solutions',
    title: 'Cloud Engineering & DevOps',
    shortTitle: 'Cloud Solutions',
    eyebrow: 'Operate',
    icon: 'cloud',
    summary:
      'Cloud migration, platform engineering and DevOps automation on AWS, Azure and Google Cloud with security and cost built in.',
    overview: [
      'We help organisations move to the cloud and, more importantly, operate well once they are there. That means secure landing zones, infrastructure as code, automated delivery pipelines and observability that engineers actually use.',
      'Our cloud engineers hold professional-level certifications across AWS, Azure and GCP and bring a platform-engineering mindset: building golden paths that let product teams ship safely without waiting on tickets.',
      'FinOps is part of every engagement. We design for cost visibility from the start and routinely reduce cloud spend by a third on estates we inherit.',
    ],
    problems: [
      { title: 'Slow, manual releases', detail: 'Deployments that take days, require change boards and regularly fail in production.' },
      { title: 'Runaway cloud costs', detail: 'Over-provisioned resources, no tagging discipline and no ownership of spend.' },
      { title: 'Fragile infrastructure', detail: 'Snowflake servers, undocumented configuration and no reproducible environments.' },
      { title: 'Security & compliance gaps', detail: 'Inconsistent IAM, unencrypted data stores and no audit trail for infrastructure changes.' },
    ],
    solutions: [
      { title: 'Cloud migration', detail: 'Assessment, wave planning and execution for rehost, replatform and refactor migrations.' },
      { title: 'Landing zones & governance', detail: 'Multi-account architectures with guardrails, identity federation and policy-as-code.' },
      { title: 'Kubernetes platforms', detail: 'Production-grade EKS, AKS and GKE clusters with GitOps, service mesh and autoscaling.' },
      { title: 'CI/CD & GitOps', detail: 'Pipelines with automated testing, security scanning, progressive delivery and instant rollback.' },
      { title: 'Observability', detail: 'Metrics, logs and traces unified with SLO-based alerting and on-call runbooks.' },
      { title: 'FinOps & optimisation', detail: 'Rightsizing, commitment planning, tagging strategy and showback dashboards.' },
    ],
    technologies: {
      Cloud: ['AWS', 'Azure', 'Google Cloud'],
      Platform: ['Kubernetes', 'Helm', 'Istio', 'Docker'],
      IaC: ['Terraform', 'Pulumi', 'AWS CDK', 'Ansible'],
      Delivery: ['GitHub Actions', 'GitLab CI', 'ArgoCD', 'Flux'],
      Observability: ['Prometheus', 'Grafana', 'OpenTelemetry', 'Datadog'],
      Security: ['Vault', 'OPA / Gatekeeper', 'Snyk', 'AWS Security Hub'],
    },
    approach: [
      { phase: '01', title: 'Assess & plan', detail: 'Application portfolio analysis, dependency mapping, cost baseline and migration wave plan.', duration: '2–4 weeks' },
      { phase: '02', title: 'Build the foundation', detail: 'Landing zone, networking, identity, guardrails and shared platform services as code.', duration: '3–6 weeks' },
      { phase: '03', title: 'Migrate & modernise', detail: 'Wave-based migration with automated testing, cutover rehearsals and rollback plans.', duration: 'Per wave' },
      { phase: '04', title: 'Automate delivery', detail: 'CI/CD pipelines, GitOps, progressive delivery and developer self-service templates.', duration: '3–4 weeks' },
      { phase: '05', title: 'Operate & optimise', detail: 'SRE practices, SLOs, FinOps reviews and continuous platform improvement.', duration: 'Continuous' },
    ],
    benefits: [
      { metric: '35%', label: 'Average cost reduction', detail: 'On cloud estates we optimise in the first six months.' },
      { metric: '10×', label: 'Deployment frequency', detail: 'Typical uplift after CI/CD and GitOps adoption.' },
      { metric: '99.95%', label: 'Availability targets', detail: 'Designed and measured with SLOs.' },
      { metric: '<15 min', label: 'Mean time to recovery', detail: 'Via automated rollback and runbooks.' },
    ],
    relatedProjects: ['manufacturing-iot-dashboard', 'telemedicine-platform'],
    faqs: [
      { q: 'Which cloud should we choose?', a: 'We are genuinely multi-cloud. The decision usually comes down to existing licensing, data residency, team skills and specific managed services you need.' },
      { q: 'Do you offer managed operations?', a: 'Yes. We provide SLO-backed platform operations with on-call coverage, or we can train and hand over to your team.' },
    ],
  },
  {
    slug: 'seo-digital-marketing',
    title: 'SEO & Digital Growth',
    shortTitle: 'SEO & Digital Marketing',
    eyebrow: 'Grow',
    icon: 'seo',
    summary:
      'Technical SEO, performance and analytics engineering that make digital products discoverable and measurable.',
    overview: [
      'Our growth practice is engineering-led. We focus on the technical foundations of discoverability: crawlability, rendering, structured data, Core Web Vitals and clean analytics instrumentation.',
      'We work alongside marketing teams to translate campaign goals into measurable product changes, and we build the reporting layer that proves what worked.',
      'The result is organic growth that compounds because it is built into the platform rather than layered on top of it.',
    ],
    problems: [
      { title: 'Invisible in search', detail: 'JavaScript-heavy applications that search engines fail to index, with thin or duplicate content.' },
      { title: 'Unreliable analytics', detail: 'Broken tracking, inconsistent event naming and dashboards nobody trusts.' },
      { title: 'Slow pages losing traffic', detail: 'Poor Core Web Vitals scores directly suppressing rankings and conversion.' },
      { title: 'Disconnected marketing & product', detail: 'Campaign landing pages built outside the platform with no shared design or data.' },
    ],
    solutions: [
      { title: 'Technical SEO audits', detail: 'Crawl analysis, rendering strategy, canonicalisation, sitemaps and structured data.' },
      { title: 'Core Web Vitals engineering', detail: 'Route-level performance optimisation with budgets enforced in CI.' },
      { title: 'Analytics & tagging architecture', detail: 'Event taxonomy, server-side tagging, consent management and BI integration.' },
      { title: 'Content platform & CMS', detail: 'Headless CMS implementations that give marketing autonomy without breaking the site.' },
      { title: 'Conversion optimisation', detail: 'Experimentation frameworks, A/B testing infrastructure and funnel analytics.' },
      { title: 'Paid & social integration', detail: 'Landing page systems and attribution pipelines connected to campaign platforms.' },
    ],
    technologies: {
      SEO: ['Google Search Console', 'Screaming Frog', 'Schema.org', 'Ahrefs'],
      Analytics: ['GA4', 'Google Tag Manager', 'Segment', 'Looker Studio', 'BigQuery'],
      Platform: ['Next.js', 'Contentful', 'Sanity', 'Cloudflare'],
      Experimentation: ['Optimizely', 'LaunchDarkly', 'Hotjar'],
    },
    approach: [
      { phase: '01', title: 'Audit & baseline', detail: 'Technical crawl, performance profiling, analytics review and competitive benchmarking.', duration: '2 weeks' },
      { phase: '02', title: 'Prioritise', detail: 'Impact-vs-effort backlog agreed with marketing and product owners.', duration: '1 week' },
      { phase: '03', title: 'Engineer fixes', detail: 'Rendering, performance, structured data and tagging changes shipped through your normal release process.', duration: '4–8 weeks' },
      { phase: '04', title: 'Measure & iterate', detail: 'Ranking, traffic and conversion dashboards with monthly optimisation cycles.', duration: 'Continuous' },
    ],
    benefits: [
      { metric: '+65%', label: 'Organic traffic', detail: 'Median uplift within 9 months of technical remediation.' },
      { metric: '90+', label: 'Lighthouse performance', detail: 'Target across core landing routes.' },
      { metric: '1', label: 'Source of truth', detail: 'A single, trusted analytics layer across marketing and product.' },
      { metric: 'Weekly', label: 'Experiment cadence', detail: 'Once the experimentation platform is live.' },
    ],
    relatedProjects: ['ecommerce-platform-transformation', 'learning-management-system'],
    faqs: [
      { q: 'Do you write content?', a: 'We focus on the technical and analytical side and partner with your content team or agency, giving them the structure and data they need.' },
    ],
  },
  {
    slug: 'data-analytics',
    title: 'Data Engineering & Analytics',
    shortTitle: 'Data Analytics',
    eyebrow: 'Insight',
    icon: 'data',
    summary:
      'Modern data platforms, streaming pipelines, BI and applied machine learning that turn operational data into decisions.',
    overview: [
      'We build the data foundations that analytics and AI depend on: reliable ingestion, well-modelled warehouses, governed access and dashboards people trust.',
      'Our data engineers work across batch and streaming architectures, and our applied ML team focuses on models that ship to production with monitoring, not notebooks that stay on laptops.',
      'Governance is designed in from the start, with lineage, quality checks and access controls that satisfy both regulators and engineers.',
    ],
    problems: [
      { title: 'Data silos', detail: 'Critical information trapped in separate systems with no consistent definitions.' },
      { title: 'Slow, manual reporting', detail: 'Spreadsheet-driven reporting cycles that take days and are out of date on arrival.' },
      { title: 'Untrusted numbers', detail: 'Multiple dashboards showing different answers to the same question.' },
      { title: 'ML that never ships', detail: 'Proof-of-concept models with no path to production, monitoring or retraining.' },
    ],
    solutions: [
      { title: 'Cloud data platforms', detail: 'Lakehouse and warehouse architectures on Snowflake, BigQuery, Databricks or Redshift.' },
      { title: 'Streaming pipelines', detail: 'Kafka-based event streaming for real-time analytics and operational integration.' },
      { title: 'Data modelling & dbt', detail: 'Tested, version-controlled transformation layers with clear semantic models.' },
      { title: 'BI & dashboards', detail: 'Self-service analytics on Power BI, Looker or Tableau with governed metrics.' },
      { title: 'Applied machine learning', detail: 'Forecasting, anomaly detection, recommendation and NLP models deployed with MLOps.' },
      { title: 'Data governance', detail: 'Cataloguing, lineage, quality monitoring and role-based access.' },
    ],
    technologies: {
      Storage: ['Snowflake', 'BigQuery', 'Databricks', 'PostgreSQL', 'S3 / ADLS'],
      Pipelines: ['Apache Kafka', 'Apache Spark', 'Airflow', 'dbt', 'Fivetran'],
      BI: ['Power BI', 'Looker', 'Tableau', 'Metabase'],
      ML: ['Python', 'PyTorch', 'scikit-learn', 'MLflow', 'SageMaker', 'Vertex AI'],
    },
    approach: [
      { phase: '01', title: 'Data discovery', detail: 'Source inventory, data quality profiling and definition of the key business questions to answer.', duration: '2–3 weeks' },
      { phase: '02', title: 'Platform architecture', detail: 'Ingestion patterns, storage layers, modelling approach and governance framework.', duration: '2–3 weeks' },
      { phase: '03', title: 'Build pipelines & models', detail: 'Incremental delivery of ingestion, transformation and semantic layers with automated tests.', duration: 'Ongoing' },
      { phase: '04', title: 'Deliver insight', detail: 'Dashboards, alerts and ML models delivered to users with training and documentation.', duration: 'Per increment' },
      { phase: '05', title: 'Operate & govern', detail: 'Pipeline monitoring, cost management, model retraining and catalogue upkeep.', duration: 'Continuous' },
    ],
    benefits: [
      { metric: 'Real-time', label: 'Operational visibility', detail: 'Sub-minute latency on streaming use cases.' },
      { metric: '90%', label: 'Less manual reporting', detail: 'Reporting cycles cut from days to minutes.' },
      { metric: '1', label: 'Governed metric layer', detail: 'Consistent definitions across every dashboard.' },
      { metric: 'Prod', label: 'ML in production', detail: 'Models deployed with monitoring and retraining.' },
    ],
    relatedProjects: ['fintech-risk-management', 'manufacturing-iot-dashboard', 'logistics-optimization-platform'],
    faqs: [
      { q: 'Do we need a data warehouse before starting ML?', a: 'Usually a minimal, well-modelled foundation is enough. We scope the smallest data platform that supports the first ML use case and grow from there.' },
    ],
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
