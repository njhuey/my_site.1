import Image from 'next/image';
import Link from 'next/link';
import { RefObject } from 'react';
import downloadIcon from 'public/download.svg';

interface NavbarProps {
  aboutRef: RefObject<HTMLDivElement>;
  projectsRef: RefObject<HTMLDivElement>;
}

export default function Navbar({ aboutRef, projectsRef }: NavbarProps) {
  return (
    <div className='flex w-full justify-end px-8 py-4'>
      <div className='hidden sm:block'>
        <button
          className='btn btn-ghost m-2 text-lg font-medium normal-case'
          onClick={() =>
            aboutRef.current?.scrollIntoView({ behavior: 'smooth' })
          }
        >
          About
        </button>
        <button
          className='btn btn-ghost m-2 text-lg font-medium normal-case'
          onClick={() =>
            projectsRef.current?.scrollIntoView({ behavior: 'smooth' })
          }
        >
          Projects
        </button>
        <Link href='/Nathan Huey Resume 2024.pdf' target='_blank'>
          <button className='btn btn-secondary m-2 text-lg font-medium normal-case'>
            R&#233;sum&#233;
          </button>
        </Link>
      </div>
      <div className='sm:hidden'>
        <Link href='/Nathan Huey Resume 2024.pdf' target='_blank'>
          <button className='btn btn-ghost m-1 text-lg font-medium normal-case'>
            <p className='font-normal'>R&#233;sum&#233;</p>
            <Image src={downloadIcon} alt='Download' />
          </button>
        </Link>
      </div>
    </div>
  );
}
