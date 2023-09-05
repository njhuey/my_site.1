import Link from 'next/link';
import Image from 'next/image';

export default function About() {
  return (
    <div className='mt-32 flex flex-row flex-wrap items-center justify-around'>
      <div className='min-w-2xl w-2xl flex flex-col items-center justify-center'>
        <div className='w-2xl max-w-2xl p-6'>
          <h1 className='text-center text-3xl font-bold text-neutral-focus sm:mb-6 md:text-5xl'>
            A little more about me.
          </h1>
          <p className='py-2 sm:text-xl'>
            I first became fascinated by programming when exposed to the{' '}
            <Link
              href='https://www.geeksforgeeks.org/the-knights-tour-problem/'
              target='_blank'
              className='font-bold text-secondary hover:text-secondary-focus'
            >
              Knight's Tour
            </Link>{' '}
            algorithm problem in high school. I'm interested in all things
            programming and always looking to learn something new.
          </p>
          <p className='py-2 sm:text-xl'>
            Most recently, I've gotten the opportunity to work on multiple web
            applications, both in industry and in university affiliated
            organizations. I'm currently searching for roles where I can
            strength my abilities as a software engineer and contribute to
            something meaningful.
          </p>
          <p className='py-2 sm:text-xl'>
            When I'm not coding, I enjoy skiing, rock climbing, and sometimes
            golf. Additionally, I've been a snare drummer for 8 years, which
            landed me the opportunity to be a part of the 49er drumline, Niner
            Noise.
          </p>
        </div>
      </div>
      <div className='p-4'>
        <Image
          src='/hackuci.jpeg'
          alt='hackuci'
          width={800}
          height={600}
          className='h-[100] w-[150] rounded-3xl shadow-2xl '
        />
      </div>
    </div>
  );
}
