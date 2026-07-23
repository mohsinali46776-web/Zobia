export interface Education {
  degree: string;
  institution: string;
  period: string;
  grade: string;
  details?: string;
  synopsis?: string;
  status: 'Current' | 'Completed';
  highlight?: boolean;
}

export interface ResearchInterest {
  id: string;
  title: string;
  description: string;
  icon: string;
  tags: string[];
}

export interface Project {
  id: string;
  title: string;
  role: string;
  fundingAgency: string;
  projectNumber?: string;
  supervisor: string;
  duration: string;
  description: string;
  outcomes: string[];
  technologies: string[];
  status: 'Active' | 'Completed';
}

export interface TeachingExperience {
  role: string;
  institution: string;
  period: string;
  description: string;
  courses: string[];
  highlights: string[];
}

export interface SkillCategory {
  category: string;
  skills: { name: string; level: number; description: string }[];
}

export interface Publication {
  id: string;
  title: string;
  authors: string[];
  journalOrVenue: string;
  year: string;
  type: 'Journal' | 'Conference' | 'Book Chapter' | 'Submitted' | 'Accepted';
  doi?: string;
  url?: string;
  abstract?: string;
}

export interface Seminar {
  title: string;
  organizer: string;
  type: string;
  date: string;
}

export interface Award {
  title: string;
  year?: string;
  issuer: string;
  description: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Laboratory' | 'Conferences' | 'Certificates' | 'Research Posters' | 'Experiments' | 'University Events';
  imageUrl: string;
  caption: string;
}
