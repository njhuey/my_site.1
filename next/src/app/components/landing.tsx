'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import linkedin from 'public/linkedin.svg';
import github from 'public/github.svg';

export default function Landing() {
  return (
    <div className='flex flex-col items-center justify-center'>
      <Image
        src='/profile.jpeg'
        alt='profile picture'
        width={300}
        height={300}
        className='mb-6 rounded-full'
      />
      <p className='mb-4 px-2 text-center text-5xl font-bold text-neutral-focus lg:text-7xl'>
        Hi! My name is Nathan Huey.
      </p>
      <p className='px-2 text-center text-xl text-neutral-focus'>
        I am a Software Engineer studying at the University of California,
        Los Angeles.
      </p>
      <div className='mt-2 flex flex-row'>
        <motion.div whileHover={{ scale: 1.2 }}>
          <Link href='https://www.linkedin.com/in/nhuey' target='_blank'>
            <Image
              src={linkedin}
              alt='linkedin'
              width={40}
              height={40}
              className='m-1'
            />
          </Link>
        </motion.div>
        <motion.div whileHover={{ scale: 1.2 }}>
          <Link href='https://github.com/njhuey' target='_blank'>
            <Image
              src={github}
              alt='github'
              width={30}
              height={30}
              className='mx-1 mt-2'
            />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
