// src/data/cvData.js

const cvData = {
  name: 'Espoir ADOUWEKONOU',
  title: 'Développeur Full-Stack | Product Manager | Business Analyst',
  profile: 'Ingénieur Industrie 4.0 passionné par l\'innovation, la tech et les expériences web immersives. Je construis des solutions robustes et centrées utilisateur.',
  achievements: [ // Nouvelle section ajoutée ici
    {
      title: 'Exposant à VivaTech 2025',
      organization: 'Viva Technology',
      description: 'UHIFADHI Trace sélectionné parmi les solutions innovantes présentées au plus grand salon tech d’Europe.',
      date: 'Juin 2025',
      link: 'https://vivatechnology.com/partners/uhifadhi',
    },
    {
      title: 'Sélection Mission Économique Francophone 2025',
      organization: 'Organisation Internationale de la Francophonie (OIF)',
      description: 'UHIFADHI intégré à la délégation des startups africaines représentées à Paris, en partenariat avec Business France.',
      date: 'Juin 2025',
      link: 'https://missions-economiques.benin.francophonie.org/fr/partner/3d87a636-e019-f011-8b3d-6045bdf3ac94/uhifadhi',
    },
    {
      title: 'Incubé TEF (Tony Elumelu Foundation)',
      organization: 'Tony Elumelu Foundation',
      description: 'Programme d’incubation pour ESLAN, écosystème tech-culturel panafricain orienté mode, artisanat et immersion digitale.',
      date: '2019',
    },
  ],
  experience: [
    {
      title: 'PLM Business Analyst & Product Manager',
      company: 'CIMPA PLM Services (Sopra Steria Group)',
      duration: 'Septembre 2024 – Présent',
      description: 'Conduite et gestion de projets PLM, incluant l\'analyse des besoins, la rédaction de spécifications techniques et fonctionnelles (Siemens TeamCenter). Animation d\'ateliers, mise en œuvre de la conduite du changement via des méthodes agiles et lean.',
    },
    {
      title: 'Fondateur & CEO',
      company: 'UHIFADHI (uhifadhi.com)',
      duration: 'Octobre 2024 – Présent',
      description: 'Développement complet de la plateforme UHIFADHI dédiée à la traçabilité textile africaine. Pilotage stratégique de la roadmap produit, conception UX et définition de la stratégie de certification. Technologies clés : Next.js, Firebase, Stripe, Algolia, IA, CMS headless.',
    },
    {
      title: 'Fondateur & Chef de Projet',
      company: 'ESLAN (écosystème culturel-tech)',
      duration: 'Juin 2018 – Présent',
      description: 'Initiation et développement de projets innovants fusionnant le digital, la mode africaine et l\'artisanat. Lancement de RVIMA ESLAN (expérience immersive en réalité virtuelle). Coordination d\'équipes pluridisciplinaires et digitalisation des processus opérationnels. Projet incubé à la Fondation Tony Elumelu.',
    },
  ],
  projects: [
    {
      name: 'UHIFADHI Trace',
      description: 'Plateforme incontournable du textile africain, reliant tisserands et marques de mode pour des textiles certifiés authentiques et haut de gamme. Intègre une base de données riche, assure traçabilité complète et logistique optimisée.',
      link: 'https://uhifadhi.com/',
    },
    {
      name: "L'Atelier Créatif",
      description: 'Vitrine immersive en ligne de créations uniques faites main. Chaque pièce raconte une histoire, alliant fluidité d\'expérience utilisateur et esthétique visuelle.',
      link: 'https://olotoby.github.io/l-atelier-creatif/',
    },
    {
      name: 'XOV',
      description: 'Plateforme d\'agents IA et d\'automatisation intelligente. Utilise un Multi-Agent Coordination Protocol (MCP) innovant pour une efficacité et une autonomie sans précédent, bâtissant le futur des opérations.',
      link: 'https://olotoby.github.io/projet-xov/', // Assurez-vous que c'est le bon lien pour XOV si différent de projet-xov
    },
  ],
  skills: {
    frontend: ['Next.js', 'React', 'TypeScript', 'TailwindCSS', 'Chakra UI', 'Framer Motion', 'HTML5/CSS3'],
    backend: ['Firebase (Auth, Firestore, Functions, Hosting)', 'Supabase', 'Node.js'],
    devops: ['Git/GitHub', 'Vercel', 'Stripe', 'Google Analytics'],
    data_ai: ['Python', 'Scikit-learn', 'Vision AI', 'Prompt Engineering'],
    plm_other: ['Siemens TeamCenter (Certifié)', 'Unity (VR)', 'CMS Headless', 'API REST', 'SQL', 'C++'],
    product_soft: ['Architecture Applicative', 'UX Design', 'Gestion de Roadmap', 'Méthodes Agiles', 'Pensée Système', 'Design-to-code', 'Conduite du Changement'],
    marketing_communication: [ // Nouvelle catégorie ajoutée
      'Création de contenu visuel (Réseaux Sociaux)',
      'Digital Marketing & Optimisation SEO',
      'Community Management',
    ],
  },
  education: [
    {
      degree: 'Diplôme d’Ingénieur en Industrie 4.0',
      school: 'EIGSI – École d’Ingénieurs Généralistes, La Rochelle, France',
      duration: '2022 – 2025',
      details: 'Modélisation et optimisation des processus industriels. Spécialisation approfondie en systèmes d’information, intelligence artificielle appliquée, PLM et cloud computing.',
    },
    {
      degree: 'Diplôme Universitaire Étudiant-Entrepreneur (D2E)',
      school: 'Université de La Rochelle, France',
      duration: '2024 – 2025',
      details: 'Formation et encadrement entrepreneurial, structuration juridique et financière de projets, business modeling avancé et accompagnement personnalisé pour le développement de startups.',
    },
  ],
  contact: {
    email: 'espoiradouwekonou20@gmail.com',
    phone: '+33 7 49 59 06 36',
    website: 'uhifadhi.com',
    github: 'olotoby',
    linkedin: 'espoiradouwekonou', // J'ai mis juste le "handle" pour simplifier l'affichage
    linkedinFullUrl: 'https://www.linkedin.com/in/espoiradouwekonou/', // L'URL complète pour le lien
  },
};

export default cvData;
