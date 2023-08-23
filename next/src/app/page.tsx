import Image from 'next/image';
import Navbar from './_components/navbar';
import Landing from './_components/landing';
import About from './_components/about';
import arrow from 'public/arrow.svg';

export default function Home() {
  return (
    <>
      <div className='flex h-screen flex-col justify-between'>
        <Navbar />
        <Landing />
        <div className='mb-2 flex w-screen justify-center'>
          <Image src={arrow} alt='arrow' height={50} width={50} />
        </div>
      </div>
      <About />
    </>
  );
}
