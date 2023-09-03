import Link from 'next/link';
import experience_data from '../../_data/experience.json';

interface Experience_Interface {
  name: string;
  role: string;
  date: string;
  description: string;
  link: string;
  tools: string[];
}

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
}: Experience_Interface) {
  const tool_tags: JSX.Element[] = tools.map((tool, index) => {
    return <Tool tool={tool} key={index.toString()} />;
  });

  return (
    <Link
      href={link}
      target='_blank'
      className='m-6 flex h-72 w-112 flex-col justify-between rounded-3xl p-8 shadow-2xl'
    >
      <div className='flex w-full flex-row'>
        <div className='w-1/3'>
          <p className='font-bold'>{name}</p>
          <p>{role}</p>
          <p>{date}</p>
        </div>
        <div className='w-2/3'>
          <p>{description}</p>
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
    <div className='hidden sm:block'>
      <div className='mt-32 flex flex-col items-center'>
        <h1 className='text-5xl font-bold text-neutral-focus'>
          Projects and Experience
        </h1>
        <div className='mt-10 flex flex-row flex-wrap justify-center'>
          {experience}
        </div>
      </div>
    </div>
  );
}