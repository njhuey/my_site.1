import Image from 'next/image';
import Link from 'next/link';
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
      <p className='text-7xl font-bold text-neutral-focus'>
        Hi! My name is Nathan Huey.
      </p>
      <p className='text-xl text-neutral-focus'>
        I am an aspiring Software Engineer studying at the Univeristy of
        California, Irvine
      </p>
      <div className='mt-2 flex flex-row'>
        <Link href='https://www.linkedin.com/in/nhuey' target='_blank'>
          <Image
            src={linkedin}
            alt='linkedin'
            width={40}
            height={40}
            className='m-1'
          />
        </Link>
        <Link href='https://github.com/njhuey' target='_blank'>
          <Image
            src={github}
            alt='github'
            width={30}
            height={30}
            className='mx-1 mt-2'
          />
        </Link>
      </div>
    </div>
  );
}
