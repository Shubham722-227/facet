// FACET Verify - Content Database & Data Definitions
// Structured strictly according to website.md blueprint

export const BRAND = {
  name: "FACET Verify",
  shortName: "FACET",
  descriptor: "Due Diligence & Investigative Intelligence",
  tagline: "Make Confident Decisions. See the Full Picture.",
  heroHeadline: "Make Confident Decisions. See the Full Picture.",
  heroSubheadline: "FACET Verify combines structured research, public-record verification and investigative analysis to help clients understand property, people, businesses, legal exposure and transaction risk before making important decisions.",
  corePromise: "Clear scope. Sourced findings. Practical risk context.",
  email: "enquiries@facetverify.com",
  phone: "+91 22 4970 8200",
  address: "Bandra Kurla Complex (BKC), Mumbai, Maharashtra 400051",
  disclaimerSnippet: "FACET Verify reports are prepared for agreed scope using lawfully accessible sources. They do not constitute formal legal opinions or title guarantees.",
};

export const SERVICES = [
  {
    id: "property-due-diligence",
    number: "01",
    slug: "property-due-diligence",
    title: "Property & Real Estate Due Diligence",
    shortDesc: "Review ownership records, encumbrances, land records, relevant approvals and property-linked litigation.",
    heroHeadline: "Understand the Property Before You Commit.",
    intro: "Property transactions can involve multiple records, owners, approvals and potential disputes. FACET Verify helps clients organise and assess relevant property information through a scoped review of available records and supporting documents.",
    scopeAreas: [
      "Title and ownership-chain research (historical deed registers)",
      "Encumbrance certificates and recorded charge checks",
      "RoR (Record of Rights), mutation register and land-record verification",
      "Property-linked litigation and court dispute searches",
      "RERA registration, project filings and regulatory disclosures",
      "Land-use, zoning masterplan and conversion order validation",
      "Survey number and boundary record cross-referencing",
      "Building plan sanctions and commencement/occupancy document review",
      "Property tax and statutory local authority dues checks",
      "Mortgage and bank charge verification for collateral support"
    ],
    deliverables: [
      "Comprehensive scope and record coverage schedule",
      "Chronological ownership and transfer deed summary",
      "Identified discrepancies, boundary notes and documentation gaps",
      "Litigation and encumbrance findings within agreed jurisdiction",
      "Source citation schedule and retrieved public record copies",
      "Key questions requiring legal review by client's advocate or surveyor"
    ],
    process: [
      "Collection of property identifiers, survey numbers and revenue village details",
      "Independent multi-decade deed register search via relevant Sub-Registrar Offices",
      "Revenue record cross-check (Pahani / 7/12 extract / Jamabandi / Patta)",
      "Litigation screening across district courts, High Courts, and revenue tribunals",
      "Consolidation into an executive risk overview with primary source citations"
    ],
    limitations: "Record availability and computerisation status vary significantly across Indian states, districts and municipal bodies. A FACET Verify report is an investigative research deliverable and does not replace a formal legal title certificate issued by an advocate.",
    cta: "Request Property Due Diligence",
    decisionCategory: "Property Transaction"
  },
  {
    id: "seller-promoter-due-diligence",
    number: "02",
    slug: "seller-promoter-due-diligence",
    title: "Seller, Promoter & Landowner Due Diligence",
    shortDesc: "Assess available background information, ownership links, disputes, affiliations and reputational indicators connected to the people behind a transaction.",
    heroHeadline: "Understand Who Stands Behind the Transaction.",
    intro: "A property's records are only one part of a transaction. FACET Verify conducts a defined review of relevant seller, promoter or landowner information to help clients identify connections, disputes, inconsistencies and other risk indicators.",
    scopeAreas: [
      "Identity and subject disambiguation using authorized public identifiers",
      "Historical ownership and transaction-pattern research",
      "Corporate affiliations, DIN records, directorships and connected entities",
      "Litigation, tribunal and regulatory proceedings screening",
      "Publicly reported financial distress, insolvency (IBC) and debt recovery indicators",
      "Adverse media, public record scrutiny and reputational intelligence",
      "Related-party links, conflict-of-interest indicators and cross-holdings",
      "Comparison of client-provided representations against accessible public records"
    ],
    deliverables: [
      "Subject identity profile and verification scope notes",
      "Entity ownership and corporate directorship network map",
      "Litigation and regulatory docket summary with case status",
      "Source-linked findings catalogued by risk severity",
      "Inconsistencies identified between disclosures and public filings",
      "Risk observations with explicit evidence boundaries"
    ],
    process: [
      "Identifier verification across official registers and public disclosures",
      "Corporate network mapping via Ministry of Corporate Affairs filings",
      "Civil, commercial and criminal litigation search across state jurisdictions",
      "OSINT and public media screening for disputes and regulatory sanctions",
      "Synthesized profile distinguishing confirmed facts from allegations"
    ],
    limitations: "Reports distinguish established public records from allegations or ongoing proceedings. Analysis is strictly evidence-led and relies on lawfully accessible records.",
    cta: "Request Counterparty Due Diligence",
    decisionCategory: "Counterparty & Promoters"
  },
  {
    id: "litigation-regulatory-due-diligence",
    number: "03",
    slug: "litigation-regulatory-due-diligence",
    title: "Litigation, Legal & Regulatory Due Diligence",
    shortDesc: "Research relevant court, tribunal and regulatory records to help clients understand disclosed and identified legal exposure.",
    heroHeadline: "See the Legal Issues That May Matter to Your Decision.",
    intro: "Court and regulatory records can be spread across multiple judicial forums and regional systems. FACET Verify provides scoped research and structured reporting on relevant records to support commercial, financial and legal review.",
    scopeAreas: [
      "Civil suits, commercial disputes and recovery proceedings",
      "Relevant criminal proceedings and statutory complaint records",
      "Property, land partition and revenue authority disputes",
      "Tribunals: NCLT (insolvency), NCLAT, DRT, and Consumer Commissions",
      "Regulatory orders, notices and enforcement disclosures (SEBI, RBI, ED where public)",
      "RERA complaints, appellate tribunal orders and compliance notices",
      "Directorship-linked and key managerial personnel proceedings",
      "Judgment history, decree status and interim stay orders where accessible"
    ],
    deliverables: [
      "Search parameters, forum coverage and jurisdictional scope",
      "Structured docket of identified cases with CNR numbers and dates",
      "Status summary (pending, dismissed, stayed, disposed) where available",
      "Party matching notes and disambiguation analysis",
      "Certified or public record downloads where accessible",
      "Critical open items flagged for client's legal counsel"
    ],
    process: [
      "Jurisdictional forum identification based on subject footprint",
      "Name-variant and corporate-identifier database indexing across e-Courts and High Courts",
      "Tribunal docket inspection (NCLT, DRT, RERA, SAT)",
      "Case history timeline extraction and interim injunction analysis",
      "Synthesis into risk-categorized legal exposure docket"
    ],
    limitations: "Litigation searches are subject to naming variations, system indexing limitations, and regional court record digitisation. A search indicating no records does not guarantee total absence of pending claims.",
    cta: "Request Litigation Research",
    decisionCategory: "Legal & Disputes"
  },
  {
    id: "vendor-third-party-due-diligence",
    number: "04",
    slug: "vendor-third-party-due-diligence",
    title: "Vendor, Supplier & Third-Party Due Diligence",
    shortDesc: "Review business legitimacy, ownership, management, litigation and other defined risk factors before onboarding or renewing a relationship.",
    heroHeadline: "Know More About the Partners You Depend On.",
    intro: "A supplier or business partner can introduce operational, financial, legal and reputational risk. FACET Verify helps organisations assess selected third parties against a defined review framework before entering or renewing an engagement.",
    scopeAreas: [
      "Business registration, active corporate status and operating footprint",
      "Ultimate beneficial ownership (UBO) indicators and board composition",
      "Litigation, labor dispute and contractual enforcement records",
      "Adverse media, regulatory censure and operational complaints",
      "Publicly available financial distress indicators and statutory defaults",
      "Sanctions, watchlists and debarment screening where lawfully accessible",
      "Related-party linkages and conflict-of-interest analysis with internal stakeholders",
      "Sub-contractor and key channel-partner integrity checks"
    ],
    deliverables: [
      "Entity identity verification and registry matching summary",
      "Standardized risk checklist across 6 operational categories",
      "Findings catalogued by severity (Critical / High / Medium / Low)",
      "Primary source documentation and filing copies",
      "Open flags requiring vendor clarification or warranties",
      "Recommended ongoing monitoring cadence"
    ],
    process: [
      "Verification of GSTIN, PAN, CIN and operational premises",
      "Director background and cross-company involvement review",
      "Judicial search for breach-of-contract and vendor payment disputes",
      "Compliance audit against public debarment lists and default dockets",
      "Deliverable packaging tailored to procurement compliance committees"
    ],
    limitations: "Review is limited to public records and client-authorized data. Does not include intrusive physical surveillance or unauthorized audit of proprietary accounts.",
    cta: "Assess a Vendor or Third Party",
    decisionCategory: "Vendors & Supply Chain"
  },
  {
    id: "fraud-investigative-intelligence",
    number: "05",
    slug: "fraud-investigative-intelligence",
    title: "Fraud Risk & Investigative Intelligence",
    shortDesc: "Investigate defined concerns, compare information across sources and document inconsistencies, relationships and risk indicators.",
    heroHeadline: "Investigate the Questions a Basic Search Cannot Resolve.",
    intro: "When information does not align, organisations require structured investigative analysis. FACET Verify scopes research into potential misrepresentation, opaque relationships, circular transactions and compliance concerns using ethical, lawful methods.",
    scopeAreas: [
      "Defined fraud and misrepresentation allegations investigation",
      "Open-source intelligence (OSINT) and public record verification",
      "Inconsistency and anomaly detection across disclosures and filings",
      "Complex relationship and shadow-entity network mapping",
      "Transaction-pattern analysis supported by accessible filings and registers",
      "Corporate misconduct, undisclosed kickbacks and conflict-of-interest reviews",
      "Chronology building and multi-source evidence reconciliation",
      "Forensic investigative support for legal counsel or internal audit"
    ],
    deliverables: [
      "Investigation objectives and agreed methodology document",
      "Comprehensive evidentiary audit trail and source log",
      "Visual timeline of events and entity-relationship chart",
      "Separation of confirmed facts from allegations and analytical indicators",
      "Critical evidentiary gaps and areas requiring formal discovery",
      "Actionable recommendations for board or legal risk mitigation"
    ],
    process: [
      "Intake of specific allegation, anomaly or transaction anomaly",
      "Multi-source corroboration combining corporate records, land deeds, and public data",
      "Discrepancy reconciliation between claimed profiles and recorded filings",
      "Network analysis linking individuals, shell companies, and common addresses",
      "Defensible, evidence-backed investigative report production"
    ],
    limitations: "FACET Verify strictly operates within legal and ethical boundaries. We do not access private telephone records, encrypted communications, hacked data, or restricted banking systems.",
    cta: "Discuss an Investigation",
    decisionCategory: "Asset & Wealth Trace"
  },
  {
    id: "ma-investment-due-diligence",
    number: "06",
    slug: "ma-investment-due-diligence",
    title: "M&A, Investment & Transaction Due Diligence",
    shortDesc: "Support pre-investment and transaction decisions with target, promoter, ownership, litigation and reputation research.",
    heroHeadline: "Know the Target Beyond the Pitch.",
    intro: "Before capital is committed, investors, PE funds and acquisition teams need an independent view of the people, ownership structure, legal exposure and reputational realities behind a deal. FACET Verify delivers deep investigative due diligence.",
    scopeAreas: [
      "Target-company corporate history, capitalization and corporate filings",
      "Founder, promoter and key management background scrutiny",
      "Ownership hierarchy, shell structures and beneficial interest mapping",
      "Material litigation, insolvency petitions (NCLT) and regulatory actions",
      "Adverse media, whistleblower claims and reputational indicators",
      "Related-party transactions, uncommercial contracts and fund diversion flags",
      "Property and key physical asset ownership verification",
      "Corroboration of representations made in the preliminary pitch or data room"
    ],
    deliverables: [
      "Investment-tailored risk appraisal report",
      "Founder and executive leadership investigative dossiers",
      "Workstream-by-workstream findings matrix with risk severity ratings",
      "Material red flags and potential deal-breaker observations",
      "Complete documentary annexure with registry filings",
      "Targeted questionnaire for seller disclosure letters and legal warranties"
    ],
    process: [
      "Alignment with investment thesis, deal timeline and key sensitivities",
      "Deep-dive background intelligence on founders, key executives and major shareholders",
      "Exhaustive search of corporate filings, charges, share pledges and directorships",
      "Regulatory enforcement screening across national and state bodies",
      "Executive summary presentation tailored for Investment Committees"
    ],
    limitations: "This is investigative diligence support. Formal legal opinions, statutory audit reviews, tax structuring, and actuarial valuations must be provided by respective chartered firms.",
    cta: "Scope an Investment Review",
    decisionCategory: "M&A & Private Equity"
  },
  {
    id: "asset-ownership-intelligence",
    number: "07",
    slug: "asset-ownership-intelligence",
    title: "Asset, Ownership & Wealth Intelligence",
    shortDesc: "Research lawfully accessible property and corporate ownership information, related interests and relevant asset-related records.",
    heroHeadline: "Understand Ownership, Interests and Connections.",
    intro: "Understanding asset ownership requires looking across disjointed property records, corporate shareholding registries, directorship databases and judicial proceedings. FACET Verify conducts defined research into lawfully accessible data.",
    scopeAreas: [
      "Identified real estate and property ownership trail research",
      "Corporate shareholdings, equity stakes and subsidiary networks",
      "Associated companies, LLPs, partnerships and directorship holdings",
      "Publicly recorded charges, mortgages and secured debt filings (MCA Index of Charges)",
      "Asset-linked litigation, attachment orders and debt recovery proceedings",
      "Discrepancies between public declarations and registered asset holdings",
      "Corporate group holding structures and SPVs",
      "Lawfully accessible public registry data to support legal enforcement"
    ],
    deliverables: [
      "Agreed scope and jurisdictional search boundaries",
      "Identified asset catalog with location, registered title, and charge status",
      "Visual corporate shareholding and asset link map",
      "Encumbrance and judicial restraint order notations",
      "Clear documentation of unverified claims or inaccessible registers",
      "Recommended avenues for formal legal attachment"
    ],
    process: [
      "Subject profile confirmation and jurisdiction scoping",
      "Systematic search across land revenue registries and corporate equity disclosures",
      "Charge search via MCA registry to identify encumbered vs unencumbered assets",
      "Reconciliation with court records for existing attachment or insolvency orders",
      "Organised intelligence report structured for litigation or recovery counsel"
    ],
    limitations: "Does not promise uncovering secret offshore numbered accounts or private personal bank balances. Only lawfully accessible registries and public disclosures are searched.",
    cta: "Request Asset & Ownership Research",
    decisionCategory: "Asset & Wealth Trace"
  }
];

export const HOW_IT_WORKS_STEPS = [
  {
    step: "01",
    title: "Define the Requirement",
    subtitle: "Clarify the Decision Context",
    description: "Tell us about the subject, property, company or transaction, the exact decision you need to make, and your required timeline.",
    details: [
      "Collection of verified subject identifiers (CIN, DIN, PAN, Survey No., Deed Reg No.)",
      "Clarification of transaction stakes and specific risk sensitivities",
      "Execution of mutual non-disclosure agreement (NDA) before data exchange"
    ]
  },
  {
    step: "02",
    title: "Agree the Scope",
    subtitle: "Transparent Parameters & Deliverables",
    description: "We confirm the subject identifiers, jurisdictions, research areas, deliverables, explicit exclusions, fixed fee structure and delivery milestones.",
    details: [
      "Clear articulation of jurisdictions (State, District, National registries)",
      "Explicit definition of inclusions, exclusions and accessible source types",
      "Formal engagement letter with fixed turnaround and clear deliverables"
    ]
  },
  {
    step: "03",
    title: "Research and Verify",
    subtitle: "Multi-Source Public-Record Diligence",
    description: "The agreed research is carried out using relevant public records, client-provided material and lawfully accessible sources appropriate to the engagement.",
    details: [
      "Primary record retrieval from revenue offices, corporate registries, and court archives",
      "Independent cross-verification of counterparty disclosures",
      "Rigorous logging of source metadata, dates accessed, and search strings"
    ]
  },
  {
    step: "04",
    title: "Analyse and Document",
    subtitle: "Investigative Cross-Referencing",
    description: "Relevant findings are cross-referenced, limitations are recorded, and risk indicators are cleanly separated from confirmed facts and unproven allegations.",
    details: [
      "Discrepancy reconciliation between official deeds and counterparty claims",
      "Network mapping of related parties, shell entities, and common directors",
      "Senior investigator peer-review and source audit before report drafting"
    ]
  },
  {
    step: "05",
    title: "Deliver the Report",
    subtitle: "Actionable Decision Intelligence",
    description: "Receive a structured report with an executive summary, findings, source notes, scope limitations and recommended next steps for your counsel.",
    details: [
      "Secure encrypted PDF deliverable with indexed primary source annexures",
      "Clear Red / Amber / Green risk hierarchy for rapid board or committee briefing",
      "Post-delivery debrief call to clarify findings and advise on follow-up questions"
    ]
  }
];

export const SAMPLE_REPORT_DATA = {
  reference: "FV-2024-8841-DL",
  subject: "Acquisition of 14.8-Acre Commercial Plot & Counterparty Diligence",
  location: "Survey Nos. 182/1, 182/2 & 183, Taluka Haveli, Pune District, Maharashtra",
  date: "October 14, 2024",
  status: "Completed Scope",
  leadInvestigator: "Senior Diligence Lead (Real Estate & Corporate Practice)",
  riskScore: "Medium-High Risk (Conditional Clearance Recommended)",
  executiveSummary: "FACET Verify conducted a scoped due diligence engagement across 30-year property title registers, municipal conversion records, and counterparty promoter background. While the primary registered title from 2004 to 2021 appears consistent on revenue extract 7/12, our cross-jurisdictional litigation search identified an active, undisclosed partition suit (Special Civil Suit No. 412/2022) pending before the Civil Judge Senior Division, Pune, with an interim status quo application listed for hearing. Furthermore, the corporate seller shares a common registered address and director with an entity currently undergoing Corporate Insolvency Resolution Process (CIRP) under the IBC at NCLT Mumbai Bench.",
  findings: [
    {
      id: "F-01",
      category: "Litigation & Dispute Risk",
      level: "High Risk",
      color: "red",
      title: "Undisclosed Family Partition Suit with Interim Restraint Application",
      source: "District Court Pune / e-Courts Services Docket (CNR: MHPUN01-008291-2022)",
      detail: "Suit filed by legal heirs of predecessor-in-title claiming ancestral rights and challenging the validity of 1998 registered sale deed. Status quo application pending.",
      recommendation: "Refer case docket to client litigation advocate to evaluate lis pendens risk before entering Agreement to Sell."
    },
    {
      id: "F-02",
      category: "Corporate Counterparty Risk",
      level: "Medium Risk",
      color: "amber",
      title: "Promoter Directorship in Distressed NCLT-Admitted Entity",
      source: "MCA-21 Filings & Insolvency and Bankruptcy Board of India (IBBI) Gazette",
      detail: "Director DIN 02819401 holds a 42% equity stake and directorship in an affiliated development entity admitted to CIRP in June 2023. Possible avoidance transaction scrutiny under Section 66 of IBC.",
      recommendation: "Ensure transaction consideration is deposited directly into designated corporate escrow; obtain NOC from lead lender."
    },
    {
      id: "F-03",
      category: "Title & Revenue Records",
      level: "Verified / Low Risk",
      color: "green",
      title: "Encumbrance Certificate & Revenue Mutation Continuity",
      source: "Sub-Registrar Office Haveli II & Mahabhulekh Digital 7/12 Records (1994–2024)",
      detail: "Continuous chain of registered conveyance deeds verified across 30-year search period. Local property tax dues cleared through March 2024.",
      recommendation: "Obtain updated NIL Encumbrance Certificate at time of final deed registration."
    },
    {
      id: "F-04",
      category: "Zoning & Environmental Approvals",
      level: "Advisory / Informational",
      color: "amber",
      title: "Partial Buffer Zone Reservation under Regional Master Plan 2038",
      source: "Pune Metropolitan Region Development Authority (PMRDA) Development Plan",
      detail: "Approximately 1.2 acres on the southern boundary falls within a designated green canal corridor requiring 15-meter construction set-back.",
      recommendation: "Incorporate setback restrictions into architectural feasibility assessment."
    }
  ],
  sourceTrail: [
    { name: "Sub-Registrar Haveli II Registers (Vol 1882 to 4102)", date: "08 Oct 2024", matches: "4 Conveyances" },
    { name: "e-Courts National Judicial Data Grid (NJDG)", date: "09 Oct 2024", matches: "2 Suits, 1 Appeal" },
    { name: "Ministry of Corporate Affairs (MCA-21 Master Data)", date: "10 Oct 2024", matches: "3 Directorships" },
    { name: "IBBI / NCLT Mumbai Order Archive", date: "11 Oct 2024", matches: "1 CIRP Order" },
    { name: "PMRDA Master Plan & Town Planning Registry", date: "12 Oct 2024", matches: "Zoning Sheet 14B" }
  ]
};

export const WHO_WE_SERVE = [
  {
    id: "banks-nbfcs",
    title: "Banks & NBFCs",
    badge: "Credit & Collateral",
    headline: "Support Better-Informed Lending and Collateral Decisions.",
    description: "Financial institutions require defensible verification of land collateral, borrower creditworthiness, and promoter track records before sanctioning high-value credit facilities.",
    useCases: [
      "Independent real estate collateral title and encumbrance verification",
      "Borrower, guarantor, and promoter background and conflict checks",
      "Mortgage register and MCA charge cross-referencing",
      "Corporate insolvency and willful defaulter register screening",
      "Documentation audit for internal risk and credit committees"
    ]
  },
  {
    id: "law-firms",
    title: "Law Firms & Legal Teams",
    badge: "Legal Support",
    headline: "Rigorous Research That Complements Legal Analysis.",
    description: "We serve as an investigative research partner for counsel handling complex M&A, multi-jurisdiction dispute resolution, real estate title clearance, and asset enforcement.",
    useCases: [
      "Multi-jurisdictional court search and case chronology building",
      "Property revenue record and mutation history extraction",
      "Entity ownership and shadow directorship network tracing",
      "Lawfully accessible asset identification for decree execution",
      "Evidence organization and documentary annexures for court filings"
    ]
  },
  {
    id: "real-estate",
    title: "Developers & Property Businesses",
    badge: "Development & Land",
    headline: "Make Land and Joint-Development Decisions with Clarity.",
    description: "Property acquisitions and JDAs require understanding not only the land records, but also the multiple co-owners, power of attorney holders, and local dispute history.",
    useCases: [
      "Landowner pedigree and legal heir family-tree corroboration",
      "Prior agreement to sell (ATS) and unrecorded dispute checks",
      "Agricultural land ceiling and tribal land transfer restriction review",
      "RERA compliance history of joint-venture partners",
      "Boundary demarcation and revenue survey cross-matching"
    ]
  },
  {
    id: "corporates-investors",
    title: "Corporates & Deal Teams",
    badge: "M&A & Procurement",
    headline: "Understand the Businesses and Counterparties Behind Every Deal.",
    description: "Institutional investors and corporate procurement teams rely on FACET Verify to uncover hidden risks, reputational liabilities, and operational dependencies.",
    useCases: [
      "Comprehensive target company and founder background dossiers",
      "Critical vendor and supply-chain integrity assessments",
      "Related-party transactions and conflict-of-interest analysis",
      "Anti-bribery, adverse media, and regulatory sanction screening",
      "Key managerial personnel verification ahead of senior appointments"
    ]
  },
  {
    id: "property-buyers",
    title: "Property Buyers & Family Offices",
    badge: "Private Clients",
    headline: "Ask the Right Questions Before Committing Capital.",
    description: "High-value property purchasers and family offices need independent, objective research free from broker or seller bias before executing agreements.",
    useCases: [
      "Independent verification of broker-provided property titles",
      "Direct verification of builder approvals and completion timelines",
      "Litigation scan on society, developer, and previous owners",
      "Clear documentation briefing to share with your personal advocate",
      "Peace-of-mind confirmation of unencumbered registered ownership"
    ]
  }
];

export const INSIGHTS = [
  {
    id: "property-due-diligence-india-overview",
    slug: "property-due-diligence-india-overview",
    category: "Real Estate Diligence",
    title: "Property Due Diligence in India: A Practical Overview",
    readTime: "7 min read",
    date: "October 2024",
    summary: "Why a standard encumbrance certificate is only the first step. Understanding the interplay between registered deeds, revenue records, mutation extracts, and local court disputes.",
    content: [
      "Property transactions in India present unique structural complexities because land ownership is recorded across distinct administrative departments: the Department of Registration (deeds), the Revenue Department (mutation and land rights), and the judiciary (civil disputes).",
      "A common misconception is that a Sub-Registrar Encumbrance Certificate (EC) guarantees clear title. In reality, an EC only records transactions registered at that specific office during the searched period. It does not reflect unregistered agreements, pending partition suits, statutory tax attachments, or testamentary disputes.",
      "A thorough due diligence framework must examine: (1) 30-year deed continuity, (2) Revenue mutation entries (7/12 extract, Pahani, or Patta), (3) Legal heirship and partition records, (4) Development and zoning permissions, and (5) A thorough search across jurisdictional civil court dockets."
    ],
    checklist: [
      "Obtain certified deed copies for all transfers in the 30-year chain",
      "Verify revenue mutation entries match conveyance dates",
      "Check for family partition suits in District Courts",
      "Confirm zone classification in the published Master Plan",
      "Inspect municipal tax receipts and electricity connection records"
    ]
  },
  {
    id: "encumbrance-certificates-limitations",
    slug: "encumbrance-certificates-limitations",
    category: "Technical Advisory",
    title: "What an Encumbrance Certificate Can and Cannot Tell You",
    readTime: "5 min read",
    date: "September 2024",
    summary: "The critical differences between registered charges, equitable mortgages, revenue liens, and court stays that never appear on a standard Form 15 EC.",
    content: [
      "The Encumbrance Certificate (EC) is often treated as the ultimate certificate of a clean property. However, institutional lenders and experienced investigators understand its strict statutory limitations.",
      "An EC reflects only registered documents indexed under that exact property survey number or door number. If a deed was indexed under an incorrect survey variant, or if a mortgage was created by deposit of title deeds without registered notice, it will not appear on the EC.",
      "Furthermore, court attachment orders under Order 38 of the CPC or statutory tax charges under municipal legislation frequently operate without automatic reflection in sub-registrar registries. Relying solely on an EC creates critical blind spots."
    ],
    checklist: [
      "Search Central Registry of Securitisation Asset Reconstruction and Security Interest (CERSAI) for bank charges",
      "Review revenue department register for statutory attachment notices",
      "Cross-examine village revenue register (Khasra/Khatauni) for government reservations",
      "Verify physically registered volume books if online records are incomplete"
    ]
  },
  {
    id: "seller-promoter-due-diligence-structure",
    slug: "seller-promoter-due-diligence-structure",
    category: "Corporate & Counterparty",
    title: "How to Structure a Seller or Promoter Due Diligence Scope",
    readTime: "6 min read",
    date: "September 2024",
    summary: "Beyond corporate registers: mapping director cross-holdings, identifying undisclosed debt recovery proceedings, and evaluating counterparty delivery capacity.",
    content: [
      "In high-stakes commercial transactions, the financial resilience and integrity of the promoter or counterparty is as vital as the asset itself. A solvent-appearing corporate seller may conceal significant vulnerabilities across affiliated group entities.",
      "Effective promoter due diligence begins with subject disambiguation. In jurisdictions like India with common naming conventions, verifying Director Identification Numbers (DIN), Permanent Account Numbers (PAN), and registered addresses prevents false-positive or false-negative attribution.",
      "Our methodology maps the promoter's broader ecosystem: active directorships, resigned positions in defaulted companies, MCA Index of Charges, pending NCLT insolvency petitions, and public dispute histories."
    ],
    checklist: [
      "Verify director track record across all past and current corporate entities",
      "Screen for CIRP/insolvency petitions under the Insolvency and Bankruptcy Code (IBC)",
      "Search Debt Recovery Tribunal (DRT) and commercial court records",
      "Check for willful defaulter or SEBI regulatory debarment orders",
      "Review historical adverse media with rigorous evidence standard"
    ]
  },
  {
    id: "litigation-research-transaction-strategy",
    slug: "litigation-research-transaction-strategy",
    category: "Legal Intelligence",
    title: "Litigation Research for Corporate and Real Estate Deals",
    readTime: "8 min read",
    date: "August 2024",
    summary: "How to navigate e-Courts, High Court portals, and specialised tribunals to uncover material disputes before signing definitive transaction documents.",
    content: [
      "Litigation due diligence in India requires navigating a fragmented court ecosystem spanning District Courts, High Courts, the Supreme Court, and specialized tribunals such as NCLT, NCLAT, DRT, and RERA.",
      "Because judicial search engines primarily query party names rather than property survey numbers, investigators must establish an exhaustive list of predecessor entities, family members, and corporate subsidiaries.",
      "Understanding the exact stage of a proceeding—whether a suit is at the stage of summons, interim injunction hearing, evidence, or final decree—enables transaction counsel to properly evaluate whether an indemnity or escrow mechanism is required."
    ],
    checklist: [
      "Search District Court registries in all jurisdictions where the subject resides or owns property",
      "Query High Courts for writ petitions, appeals, and commercial division suits",
      "Cross-check NCLT cause lists for operational or financial creditor applications",
      "Examine RERA portal for builder project orders and customer grievances",
      "Obtain certified copies of interim injunction orders to assess direct transaction impact"
    ]
  }
];

export const FAQS = [
  {
    question: "What does FACET Verify do?",
    answer: "FACET Verify is an independent due diligence and investigative intelligence company. We conduct structured research, public-record verification, and investigative analysis across property, counterparties, litigation, third parties, transactions, and asset ownership. Our work provides decision-makers with clear, evidence-led intelligence to evaluate risks before entering contracts or committing capital."
  },
  {
    question: "Does FACET Verify provide formal legal advice or title opinions?",
    answer: "No. FACET Verify is an investigative due diligence and research support firm. We do not provide formal legal opinions, legal representation, or statutory title certifications. Our structured reports present sourced findings, historical registries, and identified discrepancies, which are designed to support and inform your independent legal advocate, investment committee, or credit team."
  },
  {
    question: "Can you guarantee that a property has a 100% clean title?",
    answer: "No responsible firm can guarantee a '100% clean title'. Public record completeness, digitisation status, and accessibility vary across jurisdictions. Our reports clearly state the agreed search scope, searched repositories, dates covered, and identified limitations. We provide evidence-backed risk analysis rather than absolute guarantees."
  },
  {
    question: "How long does a typical due diligence engagement take?",
    answer: "Turnaround depends on the agreed scope, geographic jurisdictions, and depth of manual archive inspection. A focused corporate counterparty or litigation review typically takes 3 to 5 business days. Complex property title searches involving multi-decade physical registry retrieval or forensic cross-entity mapping generally require 7 to 14 business days. Expedited timelines can be scoped on request."
  },
  {
    question: "How is pricing determined for an engagement?",
    answer: "Pricing is transparent and customized based on the defined scope: the service vertical, number of subjects or properties, target jurisdictions, depth of historical search (e.g. 15-year vs 30-year), and urgency. Because public search fees and archival retrieval logistics vary by state, we provide a detailed proposal and fixed fee before work begins."
  },
  {
    question: "What information do you need to begin an engagement?",
    answer: "To start, we require the core identifiers of the subject: for a property, the survey number, village/taluka, district, and copies of available prior deeds; for an individual, full name, father's name, approximate age, and location; for a company, the CIN, corporate name, and registered address. We also discuss the specific transaction context and decision goals."
  },
  {
    question: "Which geographies and jurisdictions does FACET Verify cover?",
    answer: "FACET Verify provides comprehensive public-record verification and investigative intelligence across the United States, Europe, the United Kingdom, and India. Our research teams systematically navigate US federal (PACER, SEC, UCC) and state corporate registries, UK Companies House and European Business Registers (EBR), and Indian national (MCA-21, e-Courts) and regional archival registries."
  },
  {
    question: "How do you handle confidential client and transaction data?",
    answer: "Confidentiality is fundamental to our practice. All client engagements are executed under binding Non-Disclosure Agreements (NDAs). Client identity is strictly decoupled from on-the-ground research queries to prevent tipping off counterparties. All data is encrypted in transit and at rest, and stored under strict access-control protocols."
  },
  {
    question: "How do you navigate country-specific records across different legal systems?",
    answer: "We perform structured subject disambiguation, beneficial ownership tracing, and timeline alignment tailored to each specific country. Across the US, Europe, the UK, and India, we navigate local statutory registries, corporate disclosures, and on-the-ground archival inspection, identifying undisclosed liens, related-party transactions, and court exposure according to each jurisdiction's legal frameworks."
  },
  {
    question: "Does your report prove fraud or corporate misconduct?",
    answer: "A due diligence report documents factual findings, source records, and anomalous indicators. We maintain a strict boundary between established public facts (e.g., a registered encumbrance or an entered court order) and allegations or inferences. We provide objective evidence and risk indicators so your legal and executive teams can take appropriate measures."
  }
];

export const GLOBAL_JURISDICTIONS = [
  "United States (Federal & All 50 States)",
  "United Kingdom & Crown Dependencies",
  "European Union & Western Europe",
  "India (National & All States)",
  "Multi-Country / Global Corridors (US, EU, UK & India)",
  "Asia-Pacific & Middle East (Scoped Mandates)"
];

export const INDIAN_STATES = [
  "United States (Delaware / NY / CA / Nationwide)",
  "United Kingdom & Western Europe",
  "India (Pan-India / Multi-State)",
  "Multi-Country Scope (US / EU / India)",
  "Maharashtra (Mumbai / Pune)",
  "Karnataka (Bengaluru)",
  "Delhi NCR (Delhi / Gurugram / Noida)",
  "Tamil Nadu (Chennai)",
  "Telangana (Hyderabad)",
  "Gujarat (Ahmedabad / GIFT City)"
];
