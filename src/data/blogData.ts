export interface BlogPost {
  id: string;
  title: string;
  summary: string;
  category: 'Chalcone Chemistry' | 'Enzyme Inhibition' | 'In Silico Modeling' | 'Academic Guidance';
  date: string;
  readTime: string;
  author: string;
  content: string;
  tags: string[];
}

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "chalcone-scaffolds-medicinal-chem",
    title: "Chalcone Scaffolds in Modern Medicinal Chemistry: Design Principles and Biological Potency",
    summary: "An overview of α,β-unsaturated ketone backbones in synthetic organic chemistry and their unique reactivity profiles against enzyme catalytic domains.",
    category: "Chalcone Chemistry",
    date: "January 15, 2025",
    readTime: "6 min read",
    author: "Zobia Noreen, PhD Scholar",
    tags: ["Chalcone Chemistry", "Synthetic Organic", "Enzyme Targets", "SAR Analysis"],
    content: `
### Introduction to Chalcone Architecture
Chalcones (1,3-diphenyl-2-propen-1-ones) are open-chain flavonoids consisting of two aromatic rings linked by a three-carbon α,β-unsaturated carbonyl system. Their reactive conjugated enone backbone makes them versatile synthons for constructing diverse heterocyclic compounds.

### Structural Modulation Strategies
1. **Halogen Substitution**: Electron-withdrawing groups (–Cl, –Br, –F) on Ring A or B alter electrophilicity.
2. **Heterocyclic Annulation**: Cyclization with hydrazine or hydroxylamine yields pyrazolines and isoxazoles with enhanced enzymatic specificity.
3. **Hydrogen-Bonding Pockets**: Hydroxyl and methoxy substituents participate in key donor-acceptor networks within protein active sites.

### Pharmacological Impact
Chalcone derivatives exhibit broad-spectrum bio-activities, particularly in inhibition of tyrosinase, urease, and bacterial cell wall synthesis enzymes.
    `
  },
  {
    id: "in-vitro-vs-in-silico-tyrosinase",
    title: "Synergizing In Vitro Kinetics with In Silico Molecular Docking for Tyrosinase Inhibitor Screening",
    summary: "How combining spectrophotometric enzymatic assays with AutoDock simulations provides structural validation for novel lead compounds.",
    category: "Enzyme Inhibition",
    date: "December 20, 2024",
    readTime: "8 min read",
    author: "Zobia Noreen, PhD Scholar",
    tags: ["Tyrosinase", "In Vitro Assays", "Molecular Docking", "Enzyme Kinetics"],
    content: `
### The Challenge of Tyrosinase Inhibition
Tyrosinase is a binuclear copper-containing metalloenzyme responsible for melanogenesis in human skin and enzymatic browning in agricultural produce. Developing selective inhibitors requires understanding active site copper coordination.

### Methodological Workflow
- **In Vitro Spectrophotometric Assays**: Measuring dopachrome formation at 475 nm to determine IC50 values and kinetic inhibition constants (Km, Vmax).
- **In Silico Docking Simulations**: Utilizing AutoDock Vina to model ligand binding poses within the binuclear copper (CuA and CuB) catalytic pocket.
- **Correlation Mapping**: High-affinity docking binding energies (kcal/mol) consistently mirror low IC50 experimental values, establishing a reliable predictive framework.
    `
  },
  {
    id: "critical-reading-postgrad-guide",
    title: "Unlocking Research Literature: Critical Reading Strategies for Post-Graduate Chemistry Scholars",
    summary: "Practical guidance for MS and PhD students on dissecting high-impact chemistry journals, evaluating spectroscopic data, and writing peer-reviewed manuscripts.",
    category: "Academic Guidance",
    date: "November 10, 2024",
    readTime: "5 min read",
    author: "Zobia Noreen, PhD Scholar",
    tags: ["Academic Writing", "Literature Review", "Research Guidance", "Postgraduate Success"],
    content: `
### Key Steps to Deconstruct a Chemistry Paper
1. **Focus on the Synthetic Scheme**: Trace starting materials, reagents, catalyst ratios, and yield percentages.
2. **Verify Spectroscopic Evidence**: Cross-reference FTIR functional group absorption bands with 1H and 13C NMR chemical shifts and coupling constants (J values).
3. **Assess Biological Controls**: Ensure positive controls (e.g., Kojic acid for tyrosinase assays) and solvent blanks are reported with standard deviation error bars.
    `
  }
];
