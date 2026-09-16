export type Project = {
  number: string
  title: string
  description: string
  technologies: string[]
  features?: string[]
  accent: string
  icon: string
  github: string
  demo: string
}

export const projects: Project[] = [
  {
    number: '01',
    title: 'Attendance Management System',
    description: 'A role-based attendance platform designed to make daily academic workflows clearer for admins, teachers, and students.',
    technologies: ['React', 'Firebase'],
    features: ['Admin, teacher, and student dashboards', 'Authentication and attendance workflows', 'Firebase database integration'],
    accent: 'lime',
    icon: 'attendance',
    // TODO: Replace placeholder URLs when the repository and demo are published.
    github: '#',
    demo: '#',
  },
  {
    number: '02',
    title: 'Chess Game with AI Evaluation',
    description: 'An interactive chess experience exploring board state, move interaction, and engine-powered evaluation.',
    technologies: ['JavaScript', 'Stockfish'],
    features: ['Interactive chess board', 'AI evaluation', 'Move interaction and game interface'],
    accent: 'cyan',
    icon: 'chess',
    github: '#',
    demo: '#',
  },
  {
    number: '03',
    title: 'Login & Signup System',
    description: 'A focused authentication flow built to understand the foundations of user onboarding and data persistence.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'MySQL'],
    accent: 'amber',
    icon: 'auth',
    github: '#',
    demo: '#',
  },
  {
    number: '04',
    title: 'File Sharing Application',
    description: 'A simple cloud-based file sharing concept built around accessible uploads and Firebase storage.',
    technologies: ['Firebase'],
    accent: 'violet',
    icon: 'files',
    github: '#',
    demo: '#',
  },
  {
    number: '05',
    title: 'QR Code Generator',
    description: 'A lightweight utility for creating shareable QR codes with a clean, immediate interface.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    accent: 'rose',
    icon: 'qr',
    github: '#',
    demo: '#',
  },
  {
    number: '06',
    title: 'Treasure Hunt Web Application',
    description: 'A collaborative event platform concept with missions, verification, and a live experience for teams.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Firebase'],
    features: ['Team management and mission system', 'Secret-code and volunteer verification', 'Live leaderboard and admin dashboard'],
    accent: 'orange',
    icon: 'treasure',
    github: '#',
    demo: '#',
  },
]

export const skillGroups = [
  { label: 'Programming', icon: 'code', skills: ['Python', 'Java', 'C', 'JavaScript'] },
  { label: 'Frontend', icon: 'layout', skills: ['HTML', 'CSS', 'React', 'Next.js'] },
  { label: 'Backend', icon: 'server', skills: ['Node.js', 'Django', 'Firebase'] },
  { label: 'Database', icon: 'database', skills: ['MySQL', 'SQLite', 'Firebase'] },
  { label: 'Tools', icon: 'wrench', skills: ['Git', 'GitHub', 'VS Code'] },
  { label: 'Other', icon: 'sparkles', skills: ['Unity', 'Blender'] },
]

export const learningPath = [
  'Data Structures & Algorithms',
  'Python',
  'Artificial Intelligence',
  'Machine Learning',
  'Data Science',
  'Advanced Web Development',
  'German Language',
]
