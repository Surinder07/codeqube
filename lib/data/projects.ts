export type Project = {
  slug: string;
  title: string;
  client: string;
  industry: string;
  industrySlug: string;
  year: string;
  duration: string;
  teamSize: string;
  services: string[];
  summary: string;
  overview: string[];
  problem: string[];
  solution: string[];
  architecture: {
    description: string;
    layers: { name: string; components: string[] }[];
  };
  stack: {
    frontend: string[];
    backend: string[];
    data: string[];
    cloud: string[];
    tooling: string[];
  };
  challenges: { title: string; detail: string; resolution: string }[];
  implementation: { title: string; detail: string }[];
  security: string[];
  scalability: string[];
  results: { metric: string; label: string }[];
  impact: string[];
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: 'ecommerce-platform-transformation',
    title: 'Headless Commerce Re-platform for a National Retailer',
    client: 'National specialty retailer (confidential)',
    industry: 'Retail & E-commerce',
    industrySlug: 'retail',
    year: '2023',
    duration: '7 months',
    teamSize: '9 engineers',
    services: ['web-development', 'cloud-solutions', 'seo-digital-marketing'],
    featured: true,
    summary:
      'Replaced a decade-old monolithic storefront with a headless Next.js platform on AWS, tripling conversion and cutting page load times in half.',
    overview: [
      'The client operates 140+ physical stores and a growing online channel that accounted for 22% of revenue. Their e-commerce platform was a heavily customised monolith that had become the single biggest constraint on the digital roadmap.',
      'CodeQube was engaged to design and deliver a headless replacement, migrate the product catalogue and customer accounts, and hand over a platform the client’s own team could operate.',
    ],
    problem: [
      'Release cycles of 6–8 weeks due to a shared monolith and manual regression testing, making seasonal campaigns hard to execute.',
      'Median page load of 4.8s on mobile and a Lighthouse performance score in the low 30s, suppressing both conversion and organic ranking.',
      'Inventory across stores and warehouses synced hourly by batch job, leading to oversells and cancellations at peak.',
      'No design system; the storefront, loyalty portal and store-locator each had their own component implementations.',
    ],
    solution: [
      'A headless architecture separating the customer experience layer (Next.js) from commerce services via a GraphQL backend-for-frontend.',
      'Event-driven inventory synchronisation using Kafka, with near-real-time stock levels surfaced on product and checkout pages.',
      'A tokenised design system shared across storefront, loyalty and store tools, with accessibility baked into every component.',
      'A strangler-pattern migration in which routes moved to the new platform incrementally behind an edge router, allowing per-route rollback.',
    ],
    architecture: {
      description:
        'Edge-rendered Next.js storefront talking to a GraphQL BFF that aggregates commerce, search, inventory and content services. Inventory events flow over Kafka from the store POS and warehouse systems into a materialised stock service.',
      layers: [
        { name: 'Experience', components: ['Next.js (ISR + edge)', 'Design system', 'CDN / edge router'] },
        { name: 'API', components: ['GraphQL BFF (NestJS)', 'Apollo Federation', 'API Gateway + WAF'] },
        { name: 'Services', components: ['Commerce engine', 'Search (Elasticsearch)', 'Stock service', 'Loyalty', 'Headless CMS'] },
        { name: 'Integration', components: ['Kafka (MSK)', 'POS & WMS connectors', 'ERP sync', 'Payment provider'] },
        { name: 'Platform', components: ['EKS', 'RDS PostgreSQL', 'ElastiCache', 'Terraform', 'GitHub Actions'] },
      ],
    },
    stack: {
      frontend: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Storybook'],
      backend: ['Node.js', 'NestJS', 'GraphQL / Apollo Federation', 'REST connectors'],
      data: ['PostgreSQL', 'Elasticsearch', 'Redis', 'Kafka'],
      cloud: ['AWS EKS', 'CloudFront', 'RDS', 'MSK', 'ElastiCache', 'Terraform'],
      tooling: ['GitHub Actions', 'ArgoCD', 'Playwright', 'k6', 'Datadog'],
    },
    challenges: [
      {
        title: 'Zero-downtime migration of 1.2M customer accounts',
        detail: 'Customer data lived in the monolith’s database with bespoke password hashing and no export tooling.',
        resolution: 'Built a dual-write bridge and lazy password re-hash on first login. Accounts migrated silently over eight weeks with no forced resets.',
      },
      {
        title: 'Inventory consistency across 140 stores',
        detail: 'POS systems emitted inconsistent events and occasionally replayed batches out of order.',
        resolution: 'Introduced idempotent event handling keyed on store + SKU + sequence, with a reconciliation job that flagged drift against the ERP nightly.',
      },
      {
        title: 'SEO preservation during cutover',
        detail: 'The client ranked for tens of thousands of long-tail product terms and could not afford a traffic dip.',
        resolution: 'Route-by-route migration with 1:1 URL mapping, structured data parity checks and automated redirect testing in CI.',
      },
    ],
    implementation: [
      { title: 'Discovery & architecture (weeks 1–4)', detail: 'Event-storming workshops with merchandising, stores and digital teams; C4 architecture and ADRs agreed with the client architecture board.' },
      { title: 'Foundation (weeks 5–10)', detail: 'AWS landing zone and EKS platform via Terraform, CI/CD with preview environments, design system v1 with 40 components.' },
      { title: 'Incremental delivery (weeks 11–26)', detail: 'Two-week sprints migrating routes in priority order: PLP, PDP, search, cart, checkout, account. Each route shadow-tested before traffic switch.' },
      { title: 'Hardening & launch (weeks 27–30)', detail: 'Load tests to 5× peak, penetration test, accessibility audit, and rehearsed cutover for the final checkout route ahead of the holiday season.' },
    ],
    security: [
      'PCI DSS scope minimised by tokenising payments through a hosted provider; no card data touches CodeQube-built services.',
      'WAF, rate limiting and bot management at the edge; OWASP ASVS L2 controls verified by third-party penetration test.',
      'Secrets managed in AWS Secrets Manager with short-lived IAM roles per service; no static credentials in pipelines.',
    ],
    scalability: [
      'Horizontal pod autoscaling on EKS with pre-warmed capacity for known campaign windows.',
      'ISR and edge caching serve 92% of page views without hitting origin services.',
      'Kafka partitioning by store allows inventory throughput to scale linearly with the store estate.',
    ],
    results: [
      { metric: '+300%', label: 'Conversion rate' },
      { metric: '50%', label: 'Faster page loads' },
      { metric: '99.9%', label: 'Uptime through peak' },
      { metric: 'Daily', label: 'Releases (from 6-weekly)' },
    ],
    impact: [
      'Online revenue share grew from 22% to 34% within two quarters of launch.',
      'Oversell-related cancellations reduced by 88% due to real-time inventory.',
      'The client’s in-house team now ships independently; CodeQube retained for platform advisory.',
    ],
  },
  {
    slug: 'fintech-risk-management',
    title: 'Real-Time Credit Risk Platform for a Mid-Market Lender',
    client: 'Canadian mid-market lender (confidential)',
    industry: 'Financial Services',
    industrySlug: 'financial-services',
    year: '2022',
    duration: '10 months',
    teamSize: '11 engineers & data scientists',
    services: ['data-analytics', 'digital-consulting', 'web-development'],
    featured: true,
    summary:
      'Built a streaming risk assessment platform with ML-driven scoring and automated regulatory reporting, cutting portfolio risk exposure by 40%.',
    overview: [
      'The lender managed a growing SME loan book using overnight batch scoring and spreadsheet-based reporting to the regulator. Decisions lagged market conditions by days and the reporting process consumed a team for a week every month.',
      'CodeQube designed and delivered a real-time risk platform combining streaming data ingestion, a governed feature store, ML scoring models and an audit-ready reporting layer.',
    ],
    problem: [
      'Risk scores were refreshed once a day; intraday events such as missed payments or bureau alerts were not reflected until the next morning.',
      'Model logic was embedded in SQL stored procedures with no versioning, testing or explainability.',
      'Monthly regulatory reports were assembled manually from six systems, with frequent reconciliation errors.',
      'Auditors could not trace how a given decision had been reached.',
    ],
    solution: [
      'A Kafka-based streaming backbone ingesting payment events, bureau updates and account changes in real time.',
      'A feature store and model registry (MLflow) with versioned gradient-boosted scoring models and SHAP-based explainability per decision.',
      'A rules engine layered on top of ML scores so credit policy remained under business control.',
      'An immutable decision ledger and automated reporting pipeline producing regulator-format outputs on demand.',
    ],
    architecture: {
      description:
        'Event streams land in Kafka and are processed by Flink jobs that compute features and trigger scoring. Scores and explanations are written to an append-only decision ledger in PostgreSQL and replicated to Snowflake for reporting.',
      layers: [
        { name: 'Ingestion', components: ['Kafka Connect', 'Debezium CDC', 'Bureau API adapters'] },
        { name: 'Processing', components: ['Apache Flink', 'Feature store', 'Scoring service (FastAPI)', 'Rules engine'] },
        { name: 'Storage', components: ['PostgreSQL (decision ledger)', 'Snowflake', 'S3 data lake'] },
        { name: 'Experience', components: ['React risk console', 'Power BI regulatory dashboards'] },
        { name: 'Platform', components: ['AWS EKS', 'MSK', 'MLflow', 'Terraform', 'Airflow'] },
      ],
    },
    stack: {
      frontend: ['React', 'TypeScript', 'Ant Design', 'Power BI'],
      backend: ['Python', 'FastAPI', 'Java (Flink jobs)', 'Drools'],
      data: ['Kafka', 'Apache Flink', 'PostgreSQL', 'Snowflake', 'dbt', 'MLflow'],
      cloud: ['AWS EKS', 'MSK', 'S3', 'RDS', 'Terraform'],
      tooling: ['GitLab CI', 'pytest', 'Great Expectations', 'Grafana'],
    },
    challenges: [
      {
        title: 'Model explainability for regulators',
        detail: 'The regulator required every automated decision to be explainable to the customer and auditable for seven years.',
        resolution: 'Persisted SHAP values and model version alongside each score in an append-only ledger; built a decision-replay tool for auditors.',
      },
      {
        title: 'Exactly-once semantics on financial events',
        detail: 'Duplicate or reordered payment events would produce incorrect scores.',
        resolution: 'Flink checkpointing with Kafka transactions and idempotent sinks keyed on event ID; reconciliation against the core banking ledger nightly.',
      },
      {
        title: 'Migrating policy logic out of stored procedures',
        detail: '15 years of undocumented credit rules lived in SQL.',
        resolution: 'Reverse-engineered rules into a versioned Drools rule set with a characterisation test suite of 40,000 historical decisions to prove parity.',
      },
    ],
    implementation: [
      { title: 'Assessment & target architecture (months 1–2)', detail: 'Data source inventory, rule extraction, model baseline and an architecture approved by the client’s risk committee.' },
      { title: 'Streaming foundation (months 3–4)', detail: 'Kafka, CDC connectors and Flink jobs computing the first 60 features with data quality checks.' },
      { title: 'Scoring & rules (months 5–7)', detail: 'Model training pipeline, registry, scoring API, rules engine and decision ledger; shadow-run against legacy scoring.' },
      { title: 'Console & reporting (months 8–10)', detail: 'Risk analyst console, regulatory dashboards and automated report generation; parallel run and regulator sign-off.' },
    ],
    security: [
      'Field-level encryption for PII with KMS-managed keys; tokenised identifiers throughout the analytics layer.',
      'Role-based access with SSO and step-up authentication for policy changes.',
      'Full audit trail on model deployments, rule changes and data access, retained for seven years.',
    ],
    scalability: [
      'Flink parallelism scales with Kafka partitions; the platform was load-tested to 20× current event volume.',
      'Scoring service autoscaled on EKS with p99 latency under 120ms.',
      'Snowflake separation of storage and compute keeps reporting workloads from affecting real-time processing.',
    ],
    results: [
      { metric: '40%', label: 'Reduction in risk exposure' },
      { metric: '<1 min', label: 'Event-to-score latency' },
      { metric: '5 days → 2 hrs', label: 'Regulatory reporting' },
      { metric: '1st pass', label: 'Regulatory audit' },
    ],
    impact: [
      'Early-delinquency detection improved by 3.5 days on average, allowing earlier intervention.',
      'Risk team redeployed from report assembly to portfolio analysis.',
      'The platform now underpins two additional lending products launched since go-live.',
    ],
  },
  {
    slug: 'telemedicine-platform',
    title: 'HIPAA-Compliant Telehealth Platform for a Regional Health Network',
    client: 'Regional health network (confidential)',
    industry: 'Healthcare',
    industrySlug: 'healthcare',
    year: '2021',
    duration: '9 months',
    teamSize: '12 engineers',
    services: ['mobile-applications', 'web-development', 'cloud-solutions'],
    featured: true,
    summary:
      'Delivered a secure video consultation, scheduling and EHR-integrated telehealth platform serving 10,000+ daily visits across web and mobile.',
    overview: [
      'A regional health network needed to scale virtual care rapidly while meeting HIPAA and provincial privacy requirements and integrating with an existing Epic EHR.',
      'CodeQube delivered patient and clinician applications on web, iOS and Android, a WebRTC-based video service, scheduling and a FHIR integration layer.',
    ],
    problem: [
      'Off-the-shelf video tools lacked EHR integration, forcing clinicians to document in two systems.',
      'No unified scheduling; patients booked by phone and no-show rates exceeded 20%.',
      'Strict PHI handling requirements ruled out most consumer-grade platforms.',
      'Patient population included many older users with low digital confidence and limited devices.',
    ],
    solution: [
      'A patient app (React Native) and clinician web console (React) sharing a single design system and accessibility standard.',
      'A WebRTC video service with SFU media servers deployed in-region to keep PHI within Canadian data residency.',
      'HL7 FHIR integration with Epic for appointments, encounters and clinical notes, so visits documented once.',
      'Automated reminders, one-tap join links and a low-bandwidth mode that reduced no-shows.',
    ],
    architecture: {
      description:
        'Client apps connect through an API gateway to a set of domain services (scheduling, video, messaging, records) on Kubernetes. Video media flows through in-region SFU clusters; clinical data is exchanged with Epic via a FHIR façade.',
      layers: [
        { name: 'Clients', components: ['React Native patient app', 'React clinician console', 'Web patient portal'] },
        { name: 'Edge', components: ['API Gateway', 'WAF', 'Identity (OIDC, MFA)'] },
        { name: 'Services', components: ['Scheduling', 'Video signalling', 'Secure messaging', 'Records façade', 'Notifications'] },
        { name: 'Media', components: ['WebRTC SFU cluster (mediasoup)', 'TURN servers', 'Recording (opt-in, encrypted)'] },
        { name: 'Integration & data', components: ['HL7 FHIR R4', 'Epic Interconnect', 'PostgreSQL', 'S3 (encrypted)'] },
      ],
    },
    stack: {
      frontend: ['React Native', 'React', 'TypeScript', 'WebRTC'],
      backend: ['Node.js', 'NestJS', 'mediasoup', 'Java (FHIR façade)'],
      data: ['PostgreSQL', 'Redis', 'S3'],
      cloud: ['AWS (ca-central-1)', 'EKS', 'RDS', 'KMS', 'Terraform'],
      tooling: ['GitHub Actions', 'Detox', 'Playwright', 'Sentry', 'Datadog'],
    },
    challenges: [
      {
        title: 'Video quality on poor connections',
        detail: 'Many patients joined from rural areas over congested mobile networks.',
        resolution: 'Simulcast with adaptive bitrate, audio-priority fallback and a pre-call network test that recommended the best mode.',
      },
      {
        title: 'Epic integration timelines',
        detail: 'EHR integration governance was slow and environment access limited.',
        resolution: 'Built a FHIR façade with a contract-tested sandbox so application development proceeded in parallel with integration approvals.',
      },
      {
        title: 'Clinician adoption',
        detail: 'Clinicians resisted new tools that added clicks to their workflow.',
        resolution: 'Embedded the visit launcher inside the EHR context and co-designed the console with a clinician working group across six iterations.',
      },
    ],
    implementation: [
      { title: 'Discovery & compliance design (weeks 1–6)', detail: 'Privacy impact assessment, threat model, FHIR resource mapping and clinical workflow co-design.' },
      { title: 'Core platform (weeks 7–18)', detail: 'Identity, scheduling, video signalling and SFU deployment; patient app alpha to 50 pilot users.' },
      { title: 'EHR integration (weeks 19–30)', detail: 'Appointment, encounter and document exchange with Epic; clinician console beta across two clinics.' },
      { title: 'Regional rollout (weeks 31–38)', detail: 'Phased rollout across 40 clinics, on-call support and performance tuning to 10k daily visits.' },
    ],
    security: [
      'PHI encrypted at rest with customer-managed KMS keys and in transit with TLS 1.3 / DTLS-SRTP for media.',
      'MFA for clinicians, device-bound sessions for patients, and comprehensive access logging to satisfy HIPAA audit controls.',
      'All infrastructure within Canadian regions; no PHI processed by third-party analytics.',
    ],
    scalability: [
      'SFU clusters autoscale on concurrent room count with pre-provisioned headroom for morning peaks.',
      'Stateless services on EKS scale horizontally; scheduling database read replicas absorb reporting load.',
      'Load-tested to 3,000 concurrent video sessions.',
    ],
    results: [
      { metric: '10k+', label: 'Daily consultations' },
      { metric: '−62%', label: 'No-show rate' },
      { metric: '99.95%', label: 'Platform availability' },
      { metric: 'HIPAA', label: 'Audit passed' },
    ],
    impact: [
      'Virtual visits grew from 4% to 31% of outpatient volume.',
      'Clinician documentation time per virtual visit fell by 40% due to single-entry records.',
      'Platform extended to remote patient monitoring in a follow-on phase.',
    ],
  },
  {
    slug: 'logistics-optimization-platform',
    title: 'AI-Driven Route Optimisation and Fleet Management',
    client: 'Regional logistics operator (confidential)',
    industry: 'Transportation & Logistics',
    industrySlug: 'logistics',
    year: '2023',
    duration: '8 months',
    teamSize: '8 engineers',
    services: ['data-analytics', 'mobile-applications', 'cloud-solutions'],
    summary:
      'Built a real-time route optimisation engine and driver app that cut delivery times by 30% and operating costs by a quarter across a 600-vehicle fleet.',
    overview: [
      'The operator ran last-mile delivery for retail and pharmaceutical clients with static routes planned the evening before. Same-day orders, traffic and failed deliveries made those plans obsolete within hours.',
      'CodeQube delivered a dynamic optimisation engine, a driver mobile app and a dispatcher console with live tracking and re-routing.',
    ],
    problem: [
      'Static routing meant vehicles ran under-utilised while same-day orders were refused or outsourced.',
      'Dispatchers had no live view of the fleet and relied on phone calls to locate drivers.',
      'Proof-of-delivery was paper-based, delaying invoicing and disputes.',
      'Pharmaceutical clients required temperature and chain-of-custody evidence.',
    ],
    solution: [
      'A constraint-based optimisation service (OR-Tools) re-planning routes continuously as orders, traffic and vehicle states change.',
      'A React Native driver app with offline navigation, digital proof-of-delivery and telematics ingestion.',
      'A dispatcher console with live map, exception queue and one-click re-assignment.',
      'A streaming telemetry pipeline feeding both real-time operations and historical analytics.',
    ],
    architecture: {
      description:
        'Vehicle telemetry and order events stream through Kafka into a real-time state store. The optimisation service consumes state changes and emits revised route plans, which are pushed to drivers over WebSockets and displayed in the dispatcher console.',
      layers: [
        { name: 'Clients', components: ['React Native driver app', 'React dispatcher console', 'Customer tracking pages'] },
        { name: 'Real-time', components: ['WebSocket gateway', 'Kafka', 'Redis geo-index'] },
        { name: 'Services', components: ['Optimisation engine (OR-Tools)', 'Order service', 'Fleet state', 'Proof-of-delivery'] },
        { name: 'Data', components: ['PostgreSQL + PostGIS', 'TimescaleDB (telemetry)', 'BigQuery (analytics)'] },
        { name: 'Platform', components: ['GKE', 'Cloud Pub/Sub', 'Terraform', 'Cloud Build'] },
      ],
    },
    stack: {
      frontend: ['React Native', 'React', 'TypeScript', 'Mapbox GL'],
      backend: ['Python', 'FastAPI', 'Google OR-Tools', 'Node.js (WebSocket gateway)'],
      data: ['PostgreSQL / PostGIS', 'TimescaleDB', 'Kafka', 'Redis', 'BigQuery'],
      cloud: ['Google Cloud', 'GKE', 'Pub/Sub', 'Cloud SQL', 'Terraform'],
      tooling: ['Cloud Build', 'pytest', 'Detox', 'Grafana', 'Looker'],
    },
    challenges: [
      {
        title: 'Re-optimising 600 vehicles in near real time',
        detail: 'Full re-optimisation of the fleet took minutes, too slow for reactive dispatch.',
        resolution: 'Partitioned the problem by depot and time window, ran incremental local-search on affected routes only, and reserved full solves for scheduled intervals.',
      },
      {
        title: 'Offline operation in the driver app',
        detail: 'Drivers regularly lost connectivity in loading bays and rural routes.',
        resolution: 'Local-first data layer with a sync queue, cached map tiles and conflict rules that favoured driver-captured evidence.',
      },
      {
        title: 'Cold-chain compliance',
        detail: 'Pharmaceutical clients needed continuous temperature evidence per parcel.',
        resolution: 'Integrated BLE temperature sensors into the app and generated signed chain-of-custody records per delivery.',
      },
    ],
    implementation: [
      { title: 'Discovery & data foundation (months 1–2)', detail: 'Ride-alongs with drivers and dispatchers, telemetry ingestion pipeline and baseline KPIs.' },
      { title: 'Optimisation engine (months 3–5)', detail: 'Constraint model, incremental solver and simulation harness validated against three months of historical routes.' },
      { title: 'Driver & dispatcher apps (months 4–7)', detail: 'Parallel delivery of the mobile app and console; pilot at one depot with 40 vehicles.' },
      { title: 'Fleet rollout (month 8)', detail: 'Depot-by-depot rollout with training, on-call support and analytics dashboards.' },
    ],
    security: [
      'Device attestation and per-driver credentials with remote wipe for lost devices.',
      'Signed proof-of-delivery records with tamper-evident hashing for dispute resolution.',
      'Customer tracking pages expose only time-boxed, tokenised links with no PII.',
    ],
    scalability: [
      'Depot-partitioned optimisation scales horizontally; adding depots adds solver workers.',
      'Telemetry pipeline sustained 12,000 events/second in load testing.',
      'Analytics offloaded to BigQuery so operational databases serve only live workloads.',
    ],
    results: [
      { metric: '30%', label: 'Faster deliveries' },
      { metric: '25%', label: 'Lower operating cost' },
      { metric: '+18%', label: 'Same-day orders accepted' },
      { metric: 'Live', label: 'Fleet-wide tracking' },
    ],
    impact: [
      'Invoicing cycle shortened from 9 days to same-day through digital proof-of-delivery.',
      'Won two pharmaceutical contracts on the strength of cold-chain compliance reporting.',
      'Fuel consumption down 14% from tighter routing.',
    ],
  },
  {
    slug: 'manufacturing-iot-dashboard',
    title: 'Industrial IoT & Predictive Maintenance Platform',
    client: 'Tier-1 automotive supplier (confidential)',
    industry: 'Manufacturing',
    industrySlug: 'manufacturing',
    year: '2022',
    duration: '11 months',
    teamSize: '10 engineers',
    services: ['data-analytics', 'cloud-solutions', 'web-development'],
    summary:
      'Connected 1,200 machines across four plants to a cloud analytics platform with predictive maintenance models, lifting OEE by 20%.',
    overview: [
      'The supplier operated four plants with a mix of modern PLC-controlled lines and legacy equipment. Downtime was tracked on whiteboards and maintenance was reactive.',
      'CodeQube built an edge-to-cloud IoT platform on Azure with real-time OEE dashboards, anomaly detection and predictive maintenance models integrated with the client’s SAP PM module.',
    ],
    problem: [
      'No consolidated view of line performance; OEE calculated manually and inconsistently across plants.',
      'Unplanned downtime on critical presses cost an estimated $40k per hour.',
      'Legacy machines had no network connectivity or standard protocols.',
      'Maintenance work orders were raised after failures, never before.',
    ],
    solution: [
      'Edge gateways running Azure IoT Edge to normalise OPC-UA, Modbus and retrofitted sensor data.',
      'A streaming pipeline computing OEE, cycle-time and quality metrics in real time per line.',
      'Anomaly detection and remaining-useful-life models for the twelve most critical asset types.',
      'Automatic SAP PM work-order creation when models predicted failure within a maintenance window.',
    ],
    architecture: {
      description:
        'Edge gateways buffer and normalise machine data, forwarding it to Azure IoT Hub. Stream Analytics computes live metrics into a time-series store; batch jobs train and score ML models, and results surface through a React dashboard and SAP integration.',
      layers: [
        { name: 'Edge', components: ['Azure IoT Edge gateways', 'OPC-UA / Modbus adapters', 'Retrofit vibration & temperature sensors'] },
        { name: 'Ingestion', components: ['Azure IoT Hub', 'Event Hubs', 'Stream Analytics'] },
        { name: 'Data', components: ['Azure Data Explorer (time-series)', 'Data Lake Gen2', 'Synapse'] },
        { name: 'ML', components: ['Azure ML', 'MLflow', 'Anomaly & RUL models'] },
        { name: 'Experience & integration', components: ['React OEE dashboards', 'Power BI', 'SAP PM connector', 'Teams alerts'] },
      ],
    },
    stack: {
      frontend: ['React', 'TypeScript', 'Recharts', 'Power BI'],
      backend: ['Python', '.NET Core', 'Azure Functions'],
      data: ['Azure Data Explorer', 'Data Lake Gen2', 'Synapse', 'Azure ML'],
      cloud: ['Azure IoT Hub', 'IoT Edge', 'AKS', 'Terraform'],
      tooling: ['Azure DevOps', 'pytest', 'Great Expectations', 'Grafana'],
    },
    challenges: [
      {
        title: 'Connecting legacy machines',
        detail: 'A third of the estate predated networked controllers.',
        resolution: 'Retrofitted industrial sensors and current clamps feeding edge gateways; inferred machine states from power signatures where no PLC data existed.',
      },
      {
        title: 'Plant network constraints',
        detail: 'OT networks were air-gapped and any cloud connectivity required security sign-off.',
        resolution: 'Deployed a DMZ architecture with one-way data diodes for the most sensitive lines and store-and-forward buffering to tolerate outages.',
      },
      {
        title: 'Sparse failure data for ML',
        detail: 'Few labelled failures existed for training predictive models.',
        resolution: 'Started with unsupervised anomaly detection, captured maintenance outcomes in-app to build labels, and graduated critical assets to supervised RUL models over six months.',
      },
    ],
    implementation: [
      { title: 'Pilot line (months 1–3)', detail: 'Connected one press line end-to-end, validated OEE calculations with plant engineers and proved the edge architecture.' },
      { title: 'Plant 1 rollout (months 4–6)', detail: 'Scaled to 300 machines, delivered dashboards to shop-floor displays and shift-handover reports.' },
      { title: 'Predictive maintenance (months 5–9)', detail: 'Anomaly detection live on critical assets, SAP PM integration and maintenance feedback loop.' },
      { title: 'Multi-plant scale (months 9–11)', detail: 'Remaining three plants onboarded using templated edge deployments and IaC.' },
    ],
    security: [
      'IEC 62443-aligned segmentation between OT and IT networks with brokered connectivity through a DMZ.',
      'Device identity via X.509 certificates managed by Azure Device Provisioning Service.',
      'Role-based dashboards; no write path from cloud to machine controllers.',
    ],
    scalability: [
      'Templated gateway images and Terraform modules onboard a new plant in under two weeks.',
      'Ingestion tested to 50,000 messages/second across the four-plant estate.',
      'Time-series retention tiers keep hot query performance while archiving history to the data lake.',
    ],
    results: [
      { metric: '20%', label: 'OEE improvement' },
      { metric: '−45%', label: 'Unplanned downtime (critical lines)' },
      { metric: '1,200', label: 'Machines connected' },
      { metric: '4', label: 'Plants live' },
    ],
    impact: [
      'Predictive maintenance paid back platform investment within the first year.',
      'Shift-handover reporting eliminated manual OEE compilation across all plants.',
      'Platform reused for energy monitoring, cutting electricity consumption by 9%.',
    ],
  },
  {
    slug: 'learning-management-system',
    title: 'Scalable Learning Management Platform for Higher Education',
    client: 'Multi-campus post-secondary institution (confidential)',
    industry: 'Education',
    industrySlug: 'education',
    year: '2021',
    duration: '12 months',
    teamSize: '9 engineers',
    services: ['web-development', 'cloud-solutions', 'seo-digital-marketing'],
    summary:
      'Designed and delivered a mobile-first, WCAG-compliant LMS serving 50,000 active learners with integrated assessment, analytics and SIS synchronisation.',
    overview: [
      'The institution’s legacy LMS was end-of-life, poorly accessible and unable to handle enrolment peaks. Faculty used a dozen unsupported plugins to fill functional gaps.',
      'CodeQube delivered a modern LMS with course authoring, assessment, discussion, analytics and deep integration with the student information system.',
    ],
    problem: [
      'Enrolment-week outages as the monolithic LMS buckled under 10× normal traffic.',
      'Failing accessibility audits, putting the institution at legal risk and disadvantaging learners.',
      'Grades and enrolments synced to the SIS by nightly CSV, causing frequent discrepancies.',
      'No learning analytics; at-risk students were identified only after failing.',
    ],
    solution: [
      'A modular platform built on Django with a React front-end, structured around bounded contexts for courses, assessment, communication and analytics.',
      'Event-based, near-real-time SIS synchronisation for enrolments and grades.',
      'An accessibility-first component library validated against WCAG 2.1 AA with assistive-technology users.',
      'A learning analytics layer surfacing engagement signals and early-warning indicators to advisors.',
    ],
    architecture: {
      description:
        'A React SPA with server-rendered public pages talks to a Django REST API split into domain modules. Celery workers handle grading, notifications and SIS sync via a message bus; an analytics pipeline streams engagement events to a warehouse.',
      layers: [
        { name: 'Experience', components: ['React SPA', 'Server-rendered public catalogue', 'Accessible component library'] },
        { name: 'API', components: ['Django REST Framework', 'LTI 1.3 tool provider', 'GraphQL (analytics)'] },
        { name: 'Async', components: ['Celery', 'RabbitMQ', 'Scheduled sync jobs'] },
        { name: 'Data', components: ['PostgreSQL', 'Redis', 'S3 (media)', 'BigQuery (analytics)'] },
        { name: 'Platform', components: ['AWS EKS', 'RDS', 'CloudFront', 'Terraform', 'GitHub Actions'] },
      ],
    },
    stack: {
      frontend: ['React', 'TypeScript', 'Redux Toolkit', 'Tailwind CSS'],
      backend: ['Python', 'Django', 'Django REST Framework', 'Celery'],
      data: ['PostgreSQL', 'Redis', 'RabbitMQ', 'BigQuery'],
      cloud: ['AWS EKS', 'RDS', 'S3', 'CloudFront', 'Terraform'],
      tooling: ['GitHub Actions', 'pytest', 'Playwright', 'axe-core', 'Sentry'],
    },
    challenges: [
      {
        title: 'Enrolment-week traffic spikes',
        detail: 'Traffic increased 10× for 72 hours twice a year.',
        resolution: 'Read-heavy paths cached at the edge and in Redis; horizontal autoscaling with pre-warmed capacity scheduled ahead of known peaks; load tested to 15× baseline.',
      },
      {
        title: 'Migrating 8 years of course content',
        detail: 'Content existed in proprietary formats with broken embedded media.',
        resolution: 'Built a migration toolkit converting to IMS Common Cartridge, with automated link checking and a faculty review workflow.',
      },
      {
        title: 'Genuine accessibility',
        detail: 'Automated checks alone had let the legacy LMS pass while remaining unusable with screen readers.',
        resolution: 'Recruited a panel of learners using assistive technology for fortnightly usability sessions throughout the build.',
      },
    ],
    implementation: [
      { title: 'Discovery & design (months 1–3)', detail: 'Faculty and student research, accessibility baseline, information architecture and platform architecture sign-off.' },
      { title: 'Core platform (months 4–8)', detail: 'Courses, content, assessment, discussions and SIS sync delivered in sprints with a pilot faculty of 30 instructors.' },
      { title: 'Migration & analytics (months 8–11)', detail: 'Content migration tooling, learning analytics pipeline and advisor dashboards.' },
      { title: 'Institution-wide launch (month 12)', detail: 'Cutover during the summer term with training, support desk integration and hypercare.' },
    ],
    security: [
      'SSO via SAML with the institution’s identity provider; granular roles for students, faculty, advisors and administrators.',
      'FIPPA-compliant handling of student records with encryption at rest and access logging.',
      'Regular third-party penetration tests and dependency scanning in CI.',
    ],
    scalability: [
      'Stateless application tier on EKS scales to enrolment peaks automatically.',
      'Media served from S3 via CloudFront; database read replicas absorb analytics queries.',
      'Async processing isolates grading and notification bursts from the interactive experience.',
    ],
    results: [
      { metric: '50k+', label: 'Active learners' },
      { metric: '95%', label: 'Learner satisfaction' },
      { metric: '0', label: 'Enrolment-week outages' },
      { metric: 'AA', label: 'WCAG 2.1 conformance' },
    ],
    impact: [
      'Advisors now intervene with at-risk students on average five weeks earlier.',
      'Grade discrepancies with the SIS eliminated through event-based sync.',
      'Platform adopted by two partner institutions under a shared-services agreement.',
    ],
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
export const featuredProjects = projects.filter((p) => p.featured);
