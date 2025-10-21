import Container from '@/components/common/Container';
import About from '@/components/landing/About';
// import Blog from '@/components/landing/Blog';
import Experience from '@/components/landing/Experience';
import Hero from '@/components/landing/Hero';
import Work from '@/components/landing/Projects';
import Setup from '@/components/landing/Setup';
// import Bun from '@/components/technologies/Bun';
// import JavaScript from '@/components/technologies/JavaScript';
// import MongoDB from '@/components/technologies/MongoDB';
// import NextJs from '@/components/technologies/NextJs';
// import NodeJs from '@/components/technologies/NodeJs';
// import PostgreSQL from '@/components/technologies/PostgreSQL';
// import Prisma from '@/components/technologies/Prisma';
// import ReactIcon from '@/components/technologies/ReactIcon';
// import TypeScript from '@/components/technologies/TypeScript';
import React from 'react';

// const skills = [
//   {
//     name: 'React',
//     icon: <ReactIcon />,
//   },
//   {
//     name: 'Bun',
//     icon: <Bun />,
//   },
//   {
//     name: 'JavaScript',
//     icon: <JavaScript />,
//   },
//   {
//     name: 'TypeScript',
//     icon: <TypeScript />,
//   },
//   {
//     name: 'MongoDB',
//     icon: <MongoDB />,
//   },
//   {
//     name: 'Next.js',
//     icon: <NextJs />,
//   },
//   {
//     name: 'Node.js',
//     icon: <NodeJs />,
//   },
//   {
//     name: 'PostgreSQL',
//     icon: <PostgreSQL />,
//   },
//   {
//     name: 'Prisma',
//     icon: <Prisma />,
//   },
// ];

export default function page() {
  return (
    <Container className="min-h-screen py-16">
      <Hero />
      <Experience />
      <Work />
      <About
      //  img='' name='Kiran Kumar Rega' skills={skills} position="Junior Software Engineer"
      // bio = {"I'm a Full Stack web developer., I love building products to solve real-world problems. I'm specialized in building MVP's."}
      />
      {/* <Blog /> */}
      <Setup />
    </Container>
  );
}
