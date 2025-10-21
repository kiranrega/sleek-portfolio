import Github from '@/components/svgs/Github';
// import AWS from '@/components/technologies/AWS';
// import BootStrap from '@/components/technologies/BootStrap';
// import Bun from '@/components/technologies/Bun';
// import CSS from '@/components/technologies/CSS';
import ExpressJs from '@/components/technologies/ExpressJs';
import Figma from '@/components/technologies/Figma';
// import Html from '@/components/technologies/Html';
import JavaScript from '@/components/technologies/JavaScript';
import MaterialUIIcon from '@/components/technologies/MaterailUI';
// import MongoDB from '@/components/technologies/MongoDB';
// import NextJs from '@/components/technologies/NextJs';
// import NodeJs from '@/components/technologies/NodeJs';
import PostgreSQL from '@/components/technologies/PostgreSQL';
import Postman from '@/components/technologies/Postman';
// import Prisma from '@/components/technologies/Prisma';
import ReactIcon from '@/components/technologies/ReactIcon';
import SonarQube from '@/components/technologies/SonarQube';
import TypeScript from '@/components/technologies/TypeScript';
import Vercel from '@/components/technologies/Vercel';

export interface Technology {
  name: string;
  href: string;
  icon: React.ReactNode;
}

export interface Experience {
  company: string;
  position: string;
  location: string;
  image: string;
  description: string[];
  startDate: string;
  endDate: string;
  website: string;
  x?: string;
  linkedin?: string;
  github?: string;
  technologies: Technology[];
  isCurrent: boolean;
}

export const experiences: Experience[] = [
  {
    isCurrent: true,
    company: '24-7 IntouchCX',
    position: 'Junior Software Engineer',
    location: 'Hyderabad',
    image: '/company/intouch.svg',
    description: [
      'Developed the Roster Preview feature and integrated a dynamic *Form View popup* to enhance admin usability and streamline workflow visibility, improving task completion rates by 40%.',
      'Collaborated closely with designers and QA to ship pixel-perfect components and consistently met sprint deliverables with zero post-deployment critical issues.',
      'Handled POC screens for new modules, helping leadership visualize and validate upcoming feature ideas while reducing validation cycle time by 30%.',
      'Fixed high-priority SonarQube issues to improve code quality and ensure system stability during releases, maintaining zero critical vulnerabilities in production.',
      'Actively participated in daily standups, sprint planning, and retrospectives as part of an Agile team, maintaining 98% sprint completion rate and fostering continuous improvement.',
    ],
    startDate: 'May 2024',
    endDate: 'June 2025',
    technologies: [
      {
        name: 'Express',
        href: 'https://expressjs.com/',
        icon: <ExpressJs />,
      },
      {
        name: 'TypeScript',
        href: 'https://www.typescriptlang.org/',
        icon: <TypeScript />,
      },
      {
        name: 'React',
        href: 'https://react.dev/',
        icon: <ReactIcon />,
      },
      {
        name: 'PostgreSQL',
        href: 'https://www.postgresql.org/',
        icon: <PostgreSQL />,
      },
      {
        name: 'Postman',
        href: 'https://www.postman.com/',
        icon: <Postman />,
      },
      {
        name: 'Github',
        href: 'https://github.com',
        icon: <Github />,
      },
      {
        name: 'SonarQube',
        href: 'https://www.sonarsource.com/',
        icon: <SonarQube />,
      },
    ],
    website: '',
    github: '',
  },
  {
    isCurrent: false,
    company: 'Exteneded Web AppTech',
    position: 'Software Developer',
    location: 'Hyderabad, Telangana',
    image: '/company/extwebtech.png',
    description: [
      '*Integrated 20+ REST APIs with Axios* and improved API response handling using React Query, enhancing data fetching efficiency and user experience across the application.',
      '*Improved user engagement by developing scalable user profile and Post a Project features* in a high-impact project, resulting in increased platform interaction.',
      '*Optimized application load times dramatically through expert use of memoization, dynamic imports, and lazy loading,* delivering a faster, more responsive user experience with 50% improved performance metrics.',
      '*Improved code quality through TDD using Jest and React Testing Library with 80% test coverage*, ensuring robust and maintainable codebase standards.',
      '*Mentored junior developers, conducted code reviews, and implemented ESLint + Prettier standards,* fostering team growth and maintaining consistent code quality across projects.',
    ],
    startDate: 'March 2023',
    endDate: 'April 2024',
    technologies: [
      {
        name: 'Figma',
        href: 'https://figma.com/',
        icon: <Figma />,
      },
      {
        name: 'JavaScript',
        href: 'https://javascript.com/',
        icon: <JavaScript />,
      },
      {
        name: 'React',
        href: 'https://react.dev/',
        icon: <ReactIcon />,
      },
      {
        name: 'TypeScript',
        href: 'https://typescriptlang.org/',
        icon: <TypeScript />,
      },
      {
        name: 'Postman',
        href: 'https://postman.com/',
        icon: <Postman />,
      },
      {
        name: 'Vercel',
        href: 'https://vercel.com/',
        icon: <Vercel />,
      },
      {
        name: 'Material UI',
        href: 'https://mui.com/material-ui/',
        icon: <MaterialUIIcon />,
      },
      {
        name: 'Github',
        href: 'https://github.com',
        icon: <Github />,
      },
    ],
    website: 'https://www.extwebtech.com/',
    linkedin: 'https://www.linkedin.com/company/extwebtech',
    github: '',
  },
];
