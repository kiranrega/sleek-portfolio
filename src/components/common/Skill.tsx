'use client';

import { motion } from 'motion/react';
// import { Link } from 'next-view-transitions';
import React from 'react';

interface SkillProps {
  name: string;
  href: string;
  children: React.ReactNode;
}

export default function Skill({ name, href, children }: SkillProps) {
  return (
    <motion.a
      whileHover={{
        rotateX: 10,
        rotateY: 10,
        rotateZ: 10,
        scale: 1.1,
      }}
      transition={{
        type: 'spring',
        bounce: 0.5,
        delay: 0.3,
      }}
      href={href ?? ''}
      target="_blank"
      className="inline-flex items-center rounded border border-neutral-700 bg-neutral-800 p-1 text-sm leading-4 text-neutral-100 no-underline whitespace-nowrap"
    >
      <div className="size-4 flex-shrink-0">{children}</div>
      <p className="ml-1 text-sm font-bold text-neutral-100">{name}</p>
    </motion.a>
  );
}
