'use client';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useAnimate } from 'framer-motion';
import experience_data from '../../_data/experience.json';
import { Experience } from '../../types/experience';

function Tool({ tool }: { tool: string }) {
  return (
    <div className='m-1 inline-block rounded-lg border-2 border-secondary bg-secondary bg-opacity-50 px-2 py-1'>
      <p>{tool}</p>
    </div>
  );
}

function ProjectCard({
  name,
  role,
  date,
  description,
  link,
  tools,
}: Experience) {
  const [scope, animate] = useAnimate();

  const handleMouseEnter = () => {
    animate(scope.current, { x: 5, y: -5 });
  };

  const handleMouseLeave = () => {
    animate(scope.current, { x: 0, y: 0 });
  };

  const tool_tags: JSX.Element[] = tools.map((tool) => {
    return <Tool tool={tool} key={tool} />;
  });

  return (
    <Link
      href={link}
      target='_blank'
      rel='noopener noreferrer'
      className='m-6 flex h-96 w-80 flex-col justify-between rounded-3xl p-8 shadow-2xl sm:h-72 sm:w-128'
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className='flex w-full flex-col sm:flex-row'>
        <div className='flex w-full flex-row justify-between sm:w-1/3 sm:flex-col sm:justify-start'>
          <div className='mb-0 flex flex-row items-center'>
            <p className='mr-1 font-bold'>{name}</p>
            <motion.div ref={scope} transition={{ ease: 'linear' }}>
              <Image
                src='/link_arrow.svg'
                alt='arrow'
                width={20}
                height={20}
                className='hidden sm:block'
              />
            </motion.div>
          </div>
          <p>{role}</p>
          <p className='hidden sm:block'>{date}</p>
        </div>
        <p className='mb-4 sm:hidden'>{date}</p>
        <div className='w-full sm:w-2/3'>
          <p className='text-center sm:text-left'>{description}</p>
        </div>
      </div>
      <div className='flex w-full flex-wrap justify-center'>{tool_tags}</div>
    </Link>
  );
}

export default function Projects() {
  const experience: JSX.Element[] = experience_data.map((experience) => {
    return <ProjectCard {...experience} key={experience.name} />;
  });

  return (
    <div className='mt-32 flex flex-col items-center'>
      <h1 className='text-3xl font-bold text-neutral-focus md:text-5xl'>
        Projects
      </h1>
      <div className='mt-4 flex flex-row flex-wrap justify-center'>
        {experience}
      </div>
    </div>
  );
}
