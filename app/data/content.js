// FACET - Content Database & Data Definitions
// Structured strictly according to website.md blueprint and latest executive guidelines

export const BRAND = {
  name: "FACET",
  shortName: "FACET",
  descriptor: "Due Diligence & Investigative Intelligence",
  fullFormPlaceholder: "FACET · Due Diligence & Investigative Intelligence",
  fullFormNote: "Confirmed full corporate form to be updated upon final confirmation by Rittik Mahakul.",
  tagline: "Make Confident Decisions. See the Full Picture.",
  heroHeadline: "Make Confident Decisions. See the Full Picture.",
  heroSubheadline: "FACET combines structured research, public-record verification and investigative analysis to help clients understand property, people, businesses, legal exposure and transaction risk before making important decisions.",
  corePromise: "Clear scope. Sourced findings. Practical risk context.",
  email: "enquiries@facetverify.com",
  phone: "Dedicated Engagement Desk via enquiries@facetverify.com",
  whatsappNote: "Direct WhatsApp Client Desk available upon bilateral NDA execution",
  address: "Mumbai Operations Hub · Global Research Corridors (US, UK, Europe & India)",
  disclaimerSnippet: "FACET reports are prepared for agreed scope using lawfully accessible sources. They do not constitute formal legal opinions or title guarantees.",
};

export const SERVICES = [
  {
    id: "property-due-diligence",
    number: "01",
    slug: "property-due-diligence",
    title: "Property & Real Estate Due Diligence",
    isCoreFlagship: true,
    badge: "Core Flagship Service",
    shortDesc: "Comprehensive property diligence covering 30-year title deeds, encumbrances, revenue records, municipal sanctions, and integrated Seller, Promoter & Landowner verification.",
    heroHeadline: "Understand the Property and the People Behind It Before You Commit.",
    intro: "Property transactions in India and cross-border real estate require examining both the physical property records and the individuals or corporate sellers behind the transaction. FACET delivers an integrated due diligence review that examines historical title deeds, revenue mutation extracts, registered encumbrances, court disputes, and the integrity, corporate affiliations, and dispute history of the sellers, promoters, and landowners.",
    scopeAreas: [
      "Title and ownership-chain research (historical 30-year deed registers and conveyances)",
      "Encumbrance certificates (EC) and recorded charges cross-checked across Sub-Registrar Offices and CERSAI",
      "Revenue records: Record of Rights (RoR), 7/12 extracts, mutation registers, Pahani, Jamabandi, and Patta verification",
      "Seller, Promoter & Landowner Due Diligence: Identity disambiguation, PAN/DIN verification, and promoter background scrutiny",
      "Corporate promoter affiliations: Directorships, parent/subsidiary holdings, and MCA-21 master data cross-referencing",
      "Litigation screening across district courts, High Courts, revenue tribunals, and e-Courts dockets",
      "Insolvency and debt recovery checks: NCLT / IBC cause lists, DRT dockets, and willful defaulter listings",
      "RERA registration, project disclosures, appellate tribunal orders, and compliance track record",
      "Land-use classification, zoning masterplans, agricultural-to-non-agricultural (NA) conversion orders, and buffer zones",
      "Municipal building plan sanctions, commencement certificates (CC), and occupancy certificates (OC)",
      "Power of Attorney (PoA) validity, ancestral heirship family tree corroboration, and prior agreement-to-sell (ATS) history",
      "Property tax, municipal cess, and statutory local authority dues clearance"
    ],
    deliverables: [
      "Executive risk overview with clear Red / Amber / Green risk classifications",
      "Chronological ownership deed chain summary across 30-year search window",
      "Comprehensive Seller, Promoter & Landowner profile with corporate network map and dispute status",
      "Identified encumbrances, liens, mortgage entries, and court stay orders with CNR case numbers",
      "Zoning, masterplan reservations, setback compliance notes, and boundary documentation gaps",
      "Indexed primary source exhibit copies and retrieved public record certified extracts",
      "Targeted list of specific risk items and title questions requiring client's legal counsel review"
    ],
    process: [
      "Intake of survey numbers, revenue village, district, and seller/promoter corporate identifiers",
      "Multi-decade deed register search via relevant Sub-Registrar Offices and state e-governance portals",
      "Revenue mutation reconciliation (Pahani / 7/12 extract / Patta) and genealogical heirship verification",
      "Promoter corporate network mapping via Ministry of Corporate Affairs and DIN registries",
      "Cross-jurisdictional litigation search across District Courts, High Courts, NCLT, and specialized tribunals",
      "Synthesis into an evidence-backed deliverable distinguishing confirmed public records from unproven claims"
    ],
    limitations: "Public record completeness, digitisation depth, and archival indexing vary across Indian states, districts, and municipal authorities. A FACET report is an independent investigative intelligence deliverable and does not replace a statutory title certificate issued by an enrolled advocate.",
    cta: "Request Property Due Diligence Scope",
    decisionCategory: "Property & Real Estate"
  },
  {
    id: "litigation-regulatory-due-diligence",
    number: "02",
    slug: "litigation-regulatory-due-diligence",
    title: "Litigation, Legal & Regulatory Due Diligence",
    shortDesc: "Research relevant court, tribunal, and regulatory records across federal, state, and appellate forums to uncover disclosed and undisclosed legal exposure.",
    heroHeadline: "See the Legal Issues That May Matter to Your Decision.",
    intro: "Judicial and regulatory dockets are frequently spread across disparate court jurisdictions, specialized appellate tribunals, and regional registers. FACET provides systematic research and structured reporting on judicial records to support commercial, financial, and legal decisions.",
    scopeAreas: [
      "Civil suits, commercial division claims, and contractual breach proceedings",
      "Criminal complaints, statutory economic offense filings, and serious fraud investigation disclosures",
      "Property disputes, partition suits, and revenue authority recovery proceedings",
      "Specialized tribunals: NCLT (insolvency), NCLAT, DRT (debt recovery), SAT, and Consumer Forums",
      "Regulatory orders, enforcement notices, and statutory sanctions (SEBI, RBI, ED where publicly disclosed)",
      "RERA complaints, appellate tribunal orders, and consumer grievance adjudications",
      "Director-linked proceedings and key managerial personnel litigation exposure",
      "Interim stay orders, injunction decrees, attachment orders, and execution petitions"
    ],
    deliverables: [
      "Search parameters, forum coverage, and jurisdictional search boundaries schedule",
      "Structured docket of identified proceedings with CNR numbers, filing dates, and current status",
      "Party disambiguation analysis separating nominal name matches from confirmed subjects",
      "Public court order extracts, interim injunction notices, and disposed decree summaries",
      "Critical legal risk observations flagged for client litigation counsel review"
    ],
    process: [
      "Subject footprint mapping across operational jurisdictions and residential locations",
      "Multi-variant name and corporate identifier database indexing across e-Courts, High Courts, and Supreme Court",
      "Tribunal cause-list inspection across NCLT, DRT, RERA, and consumer dispute registries",
      "Case history timeline extraction and interim relief analysis",
      "Consolidation into an executive legal exposure matrix"
    ],
    limitations: "Litigation searches are subject to naming variations, system indexing limitations, and regional court record digitisation. A search indicating no active records does not guarantee total absence of pending claims.",
    cta: "Request Litigation Research",
    decisionCategory: "Legal & Disputes"
  },
  {
    id: "vendor-third-party-due-diligence",
    number: "03",
    slug: "vendor-third-party-due-diligence",
    title: "Vendor, Supplier & Third-Party Due Diligence",
    shortDesc: "Review business legitimacy, corporate ownership, management integrity, and statutory filings before onboarding or renewing critical relationships.",
    heroHeadline: "Know More About the Partners You Depend On.",
    intro: "A supplier, operational partner, or vendor can introduce significant legal, financial, operational, and reputational risk. FACET helps organizations evaluate selected third parties against a defined review framework before onboarding or renewing an engagement.",
    scopeAreas: [
      "Corporate registration, active business status, and operational premises verification",
      "Ultimate beneficial ownership (UBO) indicators and board of directors composition",
      "Commercial litigation, labor disputes, and contract enforcement dockets",
      "Adverse media, public customer grievances, and operational complaint records",
      "Publicly available financial distress indicators, tax filings, and statutory defaults",
      "Sanctions, watchlists, and debarment screening where lawfully accessible",
      "Related-party linkages and conflict-of-interest analysis with client internal stakeholders",
      "Key channel-partner and sub-contractor integrity reviews"
    ],
    deliverables: [
      "Entity identity verification and official registry matching summary",
      "Standardized third-party risk assessment across 6 operational dimensions",
      "Risk findings catalogued by severity (Critical / High / Medium / Low)",
      "Primary registry filings and statutory disclosure copies",
      "Open risk flags requiring vendor warranties or contractual representations"
    ],
    process: [
      "Verification of GSTIN, PAN, CIN, and registered business addresses",
      "Director background and cross-company affiliation review",
      "Judicial search for breach of contract and recovery claims",
      "Compliance audit against public debarment lists and default dockets",
      "Synthesized report tailored for procurement and risk committees"
    ],
    limitations: "Review relies strictly on lawfully accessible public records and client-authorized data. Does not include intrusive surveillance or proprietary accounting system access.",
    cta: "Assess a Vendor or Third Party",
    decisionCategory: "Vendors & Supply Chain"
  },
  {
    id: "fraud-investigative-intelligence",
    number: "04",
    slug: "fraud-investigative-intelligence",
    title: "Fraud Risk & Investigative Intelligence",
    shortDesc: "Investigate defined anomalies, compare information across repositories, and document inconsistencies, undisclosed relationships, and risk indicators.",
    heroHeadline: "Investigate the Questions a Basic Search Cannot Resolve.",
    intro: "When representations do not align with observable facts, organizations require structured investigative analysis. FACET scopes research into potential misrepresentation, opaque corporate structures, undisclosed affiliations, and anomalous transactions using rigorous, lawful methods.",
    scopeAreas: [
      "Defined misrepresentation, anomalous transaction, and integrity concern investigation",
      "Open-source intelligence (OSINT) and multi-source public record verification",
      "Inconsistency and anomaly detection across statutory filings, deeds, and disclosures",
      "Complex corporate relationship and shadow-entity network mapping",
      "Transaction-pattern analysis supported by accessible filings and registries",
      "Undisclosed conflicts of interest, kickback indicators, and related-party transactions",
      "Chronology building and multi-source evidence reconciliation",
      "Forensic investigative support for legal counsel, audit committees, and decision-makers"
    ],
    deliverables: [
      "Investigation objectives and agreed methodology documentation",
      "Comprehensive evidentiary audit trail and primary source log",
      "Visual timeline of events and entity-relationship connection charts",
      "Clean separation of confirmed public facts from allegations and analytical indicators",
      "Critical evidence gaps and recommended avenues for formal legal discovery"
    ],
    process: [
      "Intake of specific allegation, anomaly, or transaction context under strict bilateral NDA",
      "Multi-source corroboration combining corporate filings, land deeds, and judicial archives",
      "Discrepancy reconciliation between claimed profiles and public disclosures",
      "Network analysis linking individuals, entities, and common addresses",
      "Defensible, evidence-backed investigative report production"
    ],
    limitations: "FACET strictly operates within legal and ethical boundaries. We do not access private telephone records, encrypted communications, hacked data, or restricted banking systems.",
    cta: "Discuss an Investigation",
    decisionCategory: "Investigative Intelligence"
  },
  {
    id: "asset-ownership-intelligence",
    number: "05",
    slug: "asset-ownership-intelligence",
    title: "Asset, Ownership & Wealth Intelligence",
    shortDesc: "Research lawfully accessible property, corporate shareholding, and registered charges to map ownership interests and financial connections.",
    heroHeadline: "Understand Ownership, Interests and Connections.",
    intro: "Understanding true asset ownership requires synthesizing disparate land records, corporate shareholding registries, directorship databases, and judicial proceedings. FACET conducts defined research into lawfully accessible data to support credit, investment, and dispute decisions.",
    scopeAreas: [
      "Identified real estate and property ownership trail research",
      "Corporate shareholdings, equity stakes, and subsidiary holding networks",
      "Associated companies, LLPs, partnership firms, and directorship interests",
      "Publicly recorded charges, mortgages, and secured debt filings (MCA Index of Charges & CERSAI)",
      "Asset-linked litigation, attachment orders, and debt recovery proceedings",
      "Discrepancies between public declarations and registered asset holdings",
      "Special Purpose Vehicles (SPVs) and holding structures",
      "Lawfully accessible public registry data to support recovery counsel"
    ],
    deliverables: [
      "Agreed scope and jurisdictional search boundaries schedule",
      "Identified asset catalog with location, registered title, and charge status",
      "Visual corporate shareholding and beneficial interest map",
      "Encumbrance notes and court attachment order documentation",
      "Documented limitations of unverified claims or inaccessible registries"
    ],
    process: [
      "Subject profile confirmation and jurisdiction scoping",
      "Systematic search across land revenue registries and corporate equity disclosures",
      "Charge search via MCA registry to identify encumbered vs unencumbered assets",
      "Reconciliation with court records for existing attachment or insolvency orders",
      "Organized intelligence report structured for litigation or recovery counsel"
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
  {
    region: "United States",
    code: "USA",
    description: "Federal SEC EDGAR, PACER bankruptcy & district court dockets, UCC filings, FinCEN regulatory indicators, and all 50 State Secretary of State entity registries."
  },
  {
    region: "United Kingdom",
    code: "UK",
    description: "Distinct statutory framework post-Brexit: Companies House corporate filings, Insolvency Service, HM Land Registry (England & Wales / Scotland), High Court of Justice dockets, and Crown Dependencies (Jersey, Guernsey, Isle of Man)."
  },
  {
    region: "European Union & Continental Europe",
    code: "EU",
    description: "Civil law company registers across EU member states (Handelsregister Germany, Infogreffe France, BORME Spain), European Business Register (EBR), and national insolvency gazettes."
  },
  {
    region: "India",
    code: "IND",
    description: "Ministry of Corporate Affairs (MCA-21), e-Courts & High Courts, National Company Law Tribunal (NCLT), Sub-Registrar deed archives, and state land revenue portals (Mahabhulekh, Bhoomi, Dharani, AnyROR)."
  }
];

export const INDIAN_STATES = [
  "Maharashtra (Mumbai / Pune)",
  "Karnataka (Bengaluru)",
  "Delhi NCR (Delhi / Gurugram / Noida)",
  "Tamil Nadu (Chennai)",
  "Telangana (Hyderabad)",
  "Gujarat (Ahmedabad / GIFT City)",
  "Uttar Pradesh",
  "Haryana",
  "West Bengal (Kolkata)",
  "Rajasthan",
  "Pan-India / Multi-State Scope"
];

// Defined Fixed-Price Core Report & Separately Priced Optional Add-On Modules
export const PRICING_MODEL = {
  coreReport: {
    title: "Core Due Diligence Report",
    subtitle: "Fixed-Price Baseline Deliverable",
    description: "A comprehensive baseline investigation delivering essential public-record verification, 30-year deed continuity, active encumbrance review, primary litigation screening, and executive risk flags.",
    deliverables: [
      "Executive risk overview with Red / Amber / Green risk ratings",
      "Primary 30-year deed continuity and conveyance summary",
      "Sub-Registrar encumbrance certificate (EC) and recorded charge verification",
      "Revenue record cross-check (7/12 extract / RoR / Patta)",
      "High Court and District Court civil/commercial dispute search",
      "Directorship and corporate master data verification",
      "Primary source citation log and document exhibits"
    ],
    billingType: "Transparent Fixed Fee (Quoted upon intake parameters)"
  },
  optionalModules: [
    {
      id: "mod-seller-promoter",
      name: "Seller, Promoter & Landowner Deep-Dive",
      category: "Counterparty Risk",
      description: "Exhaustive promoter vetting: MCA network mapping, DIN directorships, cross-entity defaults, NCLT insolvency petitions, and undisclosed conflict-of-interest analysis."
    },
    {
      id: "mod-tribunal-litigation",
      name: "Specialized Tribunal & Multi-Forum Litigation Scan",
      category: "Legal & Disputes",
      description: "Expanded search across NCLT (insolvency), DRT (debt recovery), RERA appellate authorities, consumer dispute forums, and appellate High Court dockets."
    },
    {
      id: "mod-physical-archive",
      name: "On-the-Ground Sub-Registrar & Revenue Archive Inspection",
      category: "Physical Field Research",
      description: "Physical inspection of manual deed index volumes, Tehsil mutation registers, and municipal sanction files where records pre-date digital availability."
    },
    {
      id: "mod-zoning-masterplan",
      name: "Zoning, Master Plan & Municipal Conversion Verification",
      category: "Regulatory & Land Use",
      description: "Demarcation verification, green buffer zone reservations, town planning masterplan compliance, and agricultural-to-non-agricultural (NA) conversion order audit."
    },
    {
      id: "mod-adverse-media-osint",
      name: "Adverse Media & OSINT Reputational Intelligence",
      category: "Investigative Intelligence",
      description: "Deep open-source intelligence covering historical controversies, grey-market claims, regulatory censures, and whistleblower disclosures."
    },
    {
      id: "mod-asset-charge-trace",
      name: "Corporate Asset, Charge & Secured Debt Mapping",
      category: "Asset & Wealth Trace",
      description: "CERSAI registration checks, MCA Index of Charges scrutiny, unencumbered asset identification, and court attachment order notations."
    }
  ],
  turnaroundOptions: [
    {
      cadence: "Standard Delivery",
      timeline: "7–10 Business Days",
      description: "Comprehensive multi-source verification and rigorous peer review across primary physical and digital repositories.",
      feeStructure: "Standard Fixed Fee Schedule"
    },
    {
      cadence: "Priority Delivery",
      timeline: "4–6 Business Days",
      description: "Dedicated priority research team assignment with parallelized retrieval workflows across registries.",
      feeStructure: "Priority Schedule (+25% surcharge)"
    },
    {
      cadence: "Expedited Delivery",
      timeline: "2–3 Business Days",
      description: "Fast-track digital docket screening, urgent lien search, and accelerated executive briefing for critical deadlines.",
      feeStructure: "Expedited Schedule (+50% surcharge)"
    },
    {
      cadence: "Active Deal Window",
      timeline: "Custom Milestone Cadence",
      description: "Phased interim delivery schedule synchronized with Investment Committee (IC) dates, binding bid cutoffs, or escrow release.",
      feeStructure: "Custom Scoped Engagement"
    }
  ],
  confidentialityProtocol: {
    title: "Bilateral Non-Disclosure Agreement (NDA)",
    description: "All client engagements are conducted under a legally binding bilateral NDA executed prior to the receipt of confidential targets, property survey numbers, or counterparty identifiers. Client identity is strictly decoupled from public registry enquiries."
  }
};

