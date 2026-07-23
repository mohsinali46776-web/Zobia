import { Education, ResearchInterest, Project, TeachingExperience, SkillCategory, Publication, Seminar, Award, GalleryItem } from '../types';

export const PERSONAL_INFO = {
  name: "Miss Zobia Noreen",
  title: "PhD Chemistry Scholar & Lecturer",
  department: "Department of Chemistry",
  institution: "Government College Women University Sialkot",
  email: "noreenzobia102@gmail.com",
  phone: "(+92) 3127907461",
  whatsapp: "+923127907461",
  location: "Sialkot, Punjab, Pakistan",
  postalCode: "52356",
  nationality: "Pakistani",
  bio: "Innovative Chemistry Researcher and Academic Lecturer specializing in synthetic organic chemistry, chalcone-based heterocycles, and computational drug discovery. Demonstrates proven analytical expertise in designing enzyme inhibitors through integrated in vitro and in silico methodologies.",
  googleScholar: "https://scholar.google.com",
  orcid: "https://orcid.org",
  researchGate: "https://researchgate.net",
  linkedin: "https://linkedin.com",
  referee: {
    name: "Dr. Amina Sadiq",
    designation: "Associate Professor",
    institution: "GC Women University, Sialkot",
    email: "amina.sadiq@gcwus.edu"
  }
};

export const VERIFIED_METRICS = [
  { label: "PhD Comprehensive GP", value: "4.00 / 4.00", badge: "1st Attempt Distinction", description: "Government College Women University Sialkot" },
  { label: "HEC NRPU Research", value: "1.5 Years", badge: "Project Fellow", description: "Enzyme Inhibitors & Heterocyclic Synthesis" },
  { label: "Teaching Experience", value: "3 Appointments", badge: "Higher Ed", description: "GCWUS & Superior Group of Colleges" },
  { label: "MS & BS Academic Standing", value: "3.60+ CGPA", badge: "Merit Honors", description: "High Distinction in Chemistry" },
];

export const EDUCATION_DATA: Education[] = [
  {
    degree: "PhD Chemistry (In Progress)",
    institution: "Government College Women University Sialkot",
    period: "2023 - Present",
    grade: "Comprehensive GP: 4.00 / 4.00 (Attempt: 1st)",
    synopsis: "Exploring Novel Chalcone-Based Heterocycles as Potent Enzyme Inhibitors: Design, Synthesis and Effect of various Substituents on their In Vitro and In Silico Studies",
    status: "Current",
    highlight: true
  },
  {
    degree: "MS Chemistry",
    institution: "Government College Women University Sialkot",
    period: "2020 - 2022",
    grade: "Final Grade: 3.606 / 4.00 (CGPA)",
    synopsis: "Synthesis, Characterization and Antimicrobial Evaluation of Halogenated Chalcone Based Heterocyclic Compounds",
    status: "Completed"
  },
  {
    degree: "BS (Hons.) Chemistry",
    institution: "Government College Women University Sialkot",
    period: "2016 - 2020",
    grade: "Final Grade: 3.607 / 4.00 (CGPA)",
    details: "Specialization in Organic Chemistry principles, laboratory synthesis techniques, and spectroscopic analysis.",
    status: "Completed"
  },
  {
    degree: "B.Ed. (Bachelors of Education)",
    institution: "Allama Iqbal Open University, Islamabad",
    period: "Sep 2022 - Oct 2023",
    grade: "Grade: A (1314 / 1800)",
    details: "Advanced pedagogical training, curriculum design, classroom management, and scientific teaching methodology.",
    status: "Completed"
  },
  {
    degree: "FSc Pre-Medical",
    institution: "Board of Intermediate & Secondary Education (BISE) Gujranwala",
    period: "2014 - 2016",
    grade: "Grade: A (834 / 1100)",
    details: "Fundamental foundation in Chemistry, Biology, Physics, and analytical mathematics.",
    status: "Completed"
  },
  {
    degree: "Matriculation (Science)",
    institution: "Board of Intermediate & Secondary Education (BISE) Gujranwala",
    period: "2012 - 2014",
    grade: "Grade: A (855 / 1100)",
    details: "Core science education with laboratory practical fundamentals.",
    status: "Completed"
  }
];

export const RESEARCH_INTERESTS: ResearchInterest[] = [
  {
    id: "organic-synth",
    title: "Organic Chemistry & Synthesis",
    description: "Design and multi-step reaction execution for novel organic compounds, focusing on substituted chalcone scaffolds and molecular functionalization.",
    icon: "FlaskConical",
    tags: ["Synthetic Organic Chemistry", "Reaction Optimization", "Chalcone Derivatives", "Multi-step Synthesis"]
  },
  {
    id: "med-chem",
    title: "Medicinal Chemistry & Target Design",
    description: "Structure-activity relationship (SAR) studies targeting specific enzyme systems for drug candidate identification and pharmacological evaluation.",
    icon: "Dna",
    tags: ["SAR Analysis", "Pharmacophores", "Targeted Inhibitors", "Bio-Guided Synthesis"]
  },
  {
    id: "heterocyclic",
    title: "Heterocyclic Compounds",
    description: "Synthesis and functional derivatization of oxygen, nitrogen, and sulfur heterocycles with antibacterial, antifungal, and enzymatic inhibitory properties.",
    icon: "Hexagon",
    tags: ["Heterocyclic Rings", "Halogenated Compounds", "Scaffold Hopping", "Bioactive Molecules"]
  },
  {
    id: "drug-discovery",
    title: "Rational Drug Discovery",
    description: "Bridging synthetic chemistry with biological screening to accelerate early-stage drug hit discovery and bio-assay evaluation.",
    icon: "Stethoscope",
    tags: ["Hit Identification", "Lead Optimization", "Bio-Assays", "Enzymatic Screening"]
  },
  {
    id: "comp-chem",
    title: "Computational Chemistry & In Silico",
    description: "Utilizing molecular modeling tools to analyze binding affinity, active-site conformational fit, and pharmacokinetic profiles.",
    icon: "Cpu",
    tags: ["In Silico Modeling", "Ligand Docking", "Binding Energy", "ADMET Profiling"]
  },
  {
    id: "enzyme-inhib",
    title: "Enzyme Inhibitors (Tyrosinase)",
    description: "Experimental kinetics and inhibition studies of tyrosinase enzyme systems, addressing hyperpigmentation and enzymatic browning pathways.",
    icon: "ShieldAlert",
    tags: ["Tyrosinase Kinetics", "Enzyme Inhibition", "IC50 Evaluation", "Mechanistic Assays"]
  },
  {
    id: "mol-docking",
    title: "Molecular Docking Simulations",
    description: "Predicting molecular orientations and non-covalent interactions (hydrogen bonding, pi-pi stacking) within protein target catalytic pockets.",
    icon: "Binary",
    tags: ["AutoDock", "PyMOL Visualizations", "Ligand-Protein Complexes", "Binding Energy Calculations"]
  },
  {
    id: "in-vitro",
    title: "In Vitro Biological Studies",
    description: "Benchtop bio-assays including antimicrobial disc diffusion, minimum inhibitory concentration (MIC), and spectrophotometric kinetic assays.",
    icon: "Microscope",
    tags: ["Antimicrobial Evaluation", "Disc Diffusion", "Spectrophotometric Assays", "Cellular Kinetics"]
  }
];

export const RESEARCH_PROJECTS: Project[] = [
  {
    id: "hec-nrpu-2021",
    title: "Exploring Chalcone Based Heterocycles as Potential Tyrosinase Inhibitors: Design, Synthesis and Effect of Various Substituents on Their In Vitro and In Silico Studies",
    role: "Research Assistant & Primary Investigator Fellow",
    fundingAgency: "Higher Education Commission (HEC) of Pakistan - NRPU Program",
    projectNumber: "20-15800/NRPU/R&D/HEC/2021",
    supervisor: "Assoc. Prof. Dr. Amina Sadiq",
    duration: "1 Year 5 Months",
    description: "Major national research initiative investigating the synthetic derivatization of chalcone backbones into novel heterocyclic scaffolds. The project evaluates the therapeutic efficacy of these derivatives as potent tyrosinase enzyme inhibitors via kinetic bio-assays and high-precision computational molecular docking.",
    outcomes: [
      "Successfully synthesized and characterized a series of novel halogenated and substituted chalcone heterocyclic compounds.",
      "Established structure-activity relationship (SAR) maps correlating substituent positions with tyrosinase inhibitory potency.",
      "Conducted comparative in vitro enzymatic inhibition assays and parallel in silico molecular docking simulations."
    ],
    technologies: ["Synthetic Organic Synthesis", "UV-Vis Kinetics", "FTIR Spectroscopy", "AutoDock / PyMOL", "In Vitro Assays"],
    status: "Completed"
  },
  {
    id: "phd-synopsis-res",
    title: "PhD Synopsis: Advanced Substituent Modulation on Chalcone Heterocycles for Multi-Target Enzyme Inhibition",
    role: "PhD Principal Researcher",
    fundingAgency: "Government College Women University Sialkot",
    supervisor: "Assoc. Prof. Dr. Amina Sadiq",
    duration: "2023 - Present",
    description: "Ongoing PhD thesis research developing next-generation heterocyclic inhibitors with enhanced binding energetics, metabolic stability, and enzyme selectivity profiles.",
    outcomes: [
      "Passed PhD Comprehensive Examination with a perfect 4.00/4.00 GP distinction.",
      "Formulated and defended doctoral synopsis with high committee commendation."
    ],
    technologies: ["Advanced Heterocyclic Chemistry", "Computational Docking", "Spectroscopic NMR Analysis", "Kinetic Modeling"],
    status: "Active"
  },
  {
    id: "ms-thesis-res",
    title: "Synthesis, Characterization and Antimicrobial Evaluation of Halogenated Chalcone Based Heterocyclic Compounds",
    role: "MS Researcher",
    fundingAgency: "Department of Chemistry, GCWUS",
    supervisor: "Departmental Faculty Board",
    duration: "2020 - 2022",
    description: "Master's thesis research focused on halogen substituent effects on chalcone scaffolds and their resulting antimicrobial potency against bacterial and fungal strains.",
    outcomes: [
      "Graduated with CGPA 3.606/4.00.",
      "Delivered novel antimicrobial halogenated heterocyclic candidates."
    ],
    technologies: ["Halogenation Synthesis", "Reflux & Recrystallization", "Antimicrobial Disc Diffusion", "FTIR & UV Characterization"],
    status: "Completed"
  }
];

export const TEACHING_EXPERIENCE: TeachingExperience[] = [
  {
    role: "Visiting Lecturer in Chemistry",
    institution: "Government College Women University Sialkot (GCWUS), Pakistan",
    period: "Spring 2025 Semester",
    description: "Delivered undergraduate and postgraduate courses in Organic Chemistry and Laboratory Synthesis across multiple degree semesters.",
    courses: [
      "Organic Chemistry I & II",
      "Heterocyclic & Natural Product Chemistry",
      "Advanced Organic Reaction Mechanisms",
      "Practical Organic Chemistry Laboratory"
    ],
    highlights: [
      "Designed university course outlines and practical laboratory manuals.",
      "Instructed student groups in organic reaction monitoring, TLC, and recrystallization.",
      "Evaluated semester examinations and mentored student research projects."
    ]
  },
  {
    role: "Visiting Lecturer in Chemistry",
    institution: "Superior Group of Colleges (University Campus) Pasrur, Pakistan",
    period: "1 Year Appointment",
    description: "Served as Chemistry Faculty instructor across diverse semester cohorts, fostering conceptual understanding of chemical bonding and reaction dynamics.",
    courses: [
      "General & Inorganic Chemistry",
      "Fundamental Organic Reactions",
      "Physical Chemistry Kinetics",
      "Experimental Chemistry Practicals"
    ],
    highlights: [
      "Conducted interactive lectures and practical synthesis demonstrations.",
      "Mentored pre-university and undergraduate students in analytical chemistry principles."
    ]
  },
  {
    role: "College Teaching Intern (CTI Chemistry)",
    institution: "Government College Women University Sialkot (GCWUS), Pakistan",
    period: "6 Months Tenure",
    description: "Selected under prestigious Government CTI internship program to assist in department lectures, laboratory supervision, and academic administration.",
    courses: [
      "Introductory Chemistry",
      "Basic Practical Laboratory Techniques"
    ],
    highlights: [
      "Supervised lab safety protocols and apparatus preparation for organic experiments.",
      "Supported senior faculty in student assessment and tutorial sessions."
    ]
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: "Organic Synthesis & Bench Chemistry",
    skills: [
      { name: "Chalcone & Heterocyclic Synthesis", level: 95, description: "Multi-step reaction design, condensation, and cyclization." },
      { name: "Reaction Monitoring (TLC & Column)", level: 92, description: "Thin layer chromatography and column purification." },
      { name: "Reflux, Recrystallization & Distillation", level: 94, description: "Compound purification and yield optimization." },
      { name: "Halogenation Reactions", level: 90, description: "Regioselective halogen substitution on aromatic rings." }
    ]
  },
  {
    category: "Spectroscopic & Analytical Techniques",
    skills: [
      { name: "FTIR Spectroscopy Analysis", level: 90, description: "Functional group identification and spectra interpretation." },
      { name: "UV-Visible Spectroscopy", level: 92, description: "Absorbance spectra, lambda max, and kinetic assays." },
      { name: "NMR (1H & 13C) Data Interpretation", level: 85, description: "Chemical shift assignment and structural elucidation." },
      { name: "Structure-Activity Relationship (SAR)", level: 90, description: "Correlating chemical structure variants with biological activity." }
    ]
  },
  {
    category: "Computational Chemistry & In Silico Tools",
    skills: [
      { name: "Molecular Docking (AutoDock / PyMOL)", level: 88, description: "Binding pose prediction and hydrogen-bond interaction mapping." },
      { name: "Ligand Preparation & Optimization", level: 86, description: "3D conformer generation and energy minimization." },
      { name: "Discovery Studio / ChemDraw", level: 95, description: "2D/3D chemical structure rendering and visualization." },
      { name: "In Silico ADMET & Bioavailability", level: 84, description: "Predicting drug-likeness and pharmacokinetic properties." }
    ]
  },
  {
    category: "Biological Assays & Lab Protocols",
    skills: [
      { name: "Tyrosinase Enzyme Inhibition Assays", level: 92, description: "Spectrophotometric enzyme kinetic evaluation and IC50 determination." },
      { name: "Antimicrobial Disc Diffusion Assays", level: 90, description: "Antibacterial and antifungal zone of inhibition testing." },
      { name: "Data Processing (OriginLab / Excel)", level: 92, description: "Kinetic plotting, regression analysis, and graphical rendering." },
      { name: "Scientific Writing & Literature Review", level: 94, description: "Manuscript preparation, literature synthesis, and citation formatting." }
    ]
  }
];

export const PUBLICATIONS_DATA: Publication[] = [
  {
    id: "pub-1",
    title: "Exploring Novel Chalcone-Based Heterocycles as Potent Enzyme Inhibitors: Design, Synthesis, and Substituent Modulation on Tyrosinase Activity",
    authors: ["Zobia Noreen", "Amina Sadiq", "et al."],
    journalOrVenue: "Manuscript in Preparation for Journal of Medicinal Chemistry",
    year: "2025",
    type: "Submitted",
    abstract: "A systematic investigation into substituted chalcone heterocycles synthesized via Claisen-Schmidt condensation. Biological evaluation demonstrates micromolar tyrosinase inhibition validated by molecular docking simulations inside the binuclear copper active site."
  },
  {
    id: "pub-2",
    title: "Synthesis, Spectroscopic Characterization, and In Vitro Antimicrobial Screening of Halogenated Chalcone Heterocyclic Derivatives",
    authors: ["Zobia Noreen", "Amina Sadiq"],
    journalOrVenue: "Journal of Heterocyclic & Organic Synthesis",
    year: "2024",
    type: "Accepted",
    abstract: "Synthesis of halogenated chalcones and their heterocyclic analogues. FTIR, UV-Vis, and NMR structural validation paired with agar disc diffusion assays against Gram-positive and Gram-negative pathogens."
  },
  {
    id: "pub-3",
    title: "In Silico Binding Energetics and Structural SAR of Heterocyclic Chalcones against Fungal & Bacterial Enzymes",
    authors: ["Zobia Noreen", "Amina Sadiq"],
    journalOrVenue: "International Conference on Advances in Chemical Sciences (GCWUS)",
    year: "2024",
    type: "Conference",
    abstract: "Presented computational molecular docking findings detailing non-covalent binding interactions of novel heterocyclic compounds with enzymatic target pockets."
  }
];

export const SEMINARS_DATA: Seminar[] = [
  {
    title: "CHEMICAL INSIGHTS: ADVANCES AND INNOVATIONS",
    organizer: "Department of Chemistry, GC Women University Sialkot",
    type: "Academic Symposium",
    date: "One-Day Seminar"
  },
  {
    title: "ELEVATE YOUR CAREER: EXPERT CAREER GUIDANCE",
    organizer: "Department of Chemistry, GC Women University Sialkot",
    type: "Professional Development",
    date: "One-Day Seminar"
  },
  {
    title: "UNLOCKING RESEARCH LITERATURE: CRITICAL READING & ACADEMIC WRITING FOR POST GRADUATE STUDENTS",
    organizer: "Department of Chemistry, GC Women University Sialkot",
    type: "Postgraduate Workshop",
    date: "Specialized Training"
  }
];

export const AWARDS_DATA: Award[] = [
  {
    title: "PhD Comprehensive Examination Distinction (GP 4.00 / 4.00)",
    issuer: "Government College Women University Sialkot",
    year: "2023",
    description: "Achieved perfect 4.00/4.00 GP on the first attempt in the rigorous PhD Chemistry Comprehensive Examination."
  },
  {
    title: "Prime Minister's Youth Laptop Scheme Award",
    issuer: "Government of Pakistan / HEC",
    year: "2019",
    description: "Awarded high-performance laptop on merit for outstanding academic performance during BS (Hons.) Chemistry."
  },
  {
    title: "Punjab Government Servants Benevolent Fund Scholarship",
    issuer: "Government of the Punjab",
    year: "Academic Merit",
    description: "Prestigious provincial government grant awarded for continuous academic excellence across degree programs."
  }
];

export const GALLERY_DATA: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Synthetic Organic Synthesis Laboratory Setup",
    category: "Laboratory",
    imageUrl: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=800&q=80",
    caption: "Reflux reaction and organic synthesis apparatus in the research laboratory at GCWUS."
  },
  {
    id: "gal-2",
    title: "Spectrophotometric UV-Vis Kinetics Setup",
    category: "Experiments",
    imageUrl: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80",
    caption: "Tyrosinase enzyme inhibition kinetics measurement on UV-Visible spectrophotometer."
  },
  {
    id: "gal-3",
    title: "Chemical Insights Seminar Presentation",
    category: "Conferences",
    imageUrl: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=800&q=80",
    caption: "Participating in national academic chemistry conference at GC Women University Sialkot."
  },
  {
    id: "gal-4",
    title: "GCWUS Science & Research Block",
    category: "University Events",
    imageUrl: "https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&w=800&q=80",
    caption: "Government College Women University Sialkot Department of Chemistry campus view."
  },
  {
    id: "gal-5",
    title: "PhD Comprehensive Distinction Certification",
    category: "Certificates",
    imageUrl: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80",
    caption: "Official Academic Distinction Certificate for 4.00/4.00 GP in PhD Comprehensive Exam."
  },
  {
    id: "gal-6",
    title: "In Silico Molecular Docking Binding Visuals",
    category: "Research Posters",
    imageUrl: "https://images.unsplash.com/photo-1507668077129-56e32842fceb?auto=format&fit=crop&w=800&q=80",
    caption: "Computational rendering of chalcone ligand bound inside tyrosinase catalytic binuclear site."
  }
];
