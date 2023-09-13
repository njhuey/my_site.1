import Link from 'next/link';
import Image from 'next/image';

export default function About() {
  return (
    <div className='mt-32 flex flex-row'>
      <div className='flex w-1/2 flex-col flex-wrap items-center justify-center'>
        <div className='max-w-2xl p-12'>
          <h1 className='mb-6 text-5xl font-bold text-neutral-focus'>
            A little more about me.
          </h1>
          <p className='py-2 text-xl'>
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
          <p className='py-2 text-xl'>
            Most recently, I've gotten the opportunity to work on multiple web
            applications, both in industry and in university affiliated
            organizations. I'm currently searching for roles where I can
            strength my abilities as a software engineer and contribute to
            something meaningful.
          </p>
          <p className='py-2 text-xl'>
            When I'm not coding, I enjoy skiing, rock climbing, and sometimes
            golf. Additionally, I've been a snare drummer for 8 years, which
            landed me the opportunity to be a part of the 49er drumline, Niner
            Noise.
          </p>
        </div>
      </div>
      <div className='min-w-xl flex w-1/2 items-center p-12'>
        <Image
          src='/hackuci.jpg'
          alt='hackuci'
          width={800}
          height={600}
          className='h-[433px] w-[700px] rounded-3xl shadow-2xl'
        />
      </div>
    </div>
  );
}
