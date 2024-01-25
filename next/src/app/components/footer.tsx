import Image from 'next/image';
import nextjs from 'public/nextjs.svg';
import tailwindcss from 'public/tailwindcss.svg';

export default function Footer() {
  return (
    <div className='mt-24 flex w-full flex-col items-center px-8 py-4'>
      <div className='hidden w-full sm:block'>
        <div className='flex w-full flex-row justify-evenly '>
          <Image src={nextjs} alt='nextjs' width={150} height={100} />
          <Image src={tailwindcss} alt='tailwindcss' width={200} height={100} />
        </div>
      </div>
      <div className='w-full sm:hidden'>
        <div className='flex w-full flex-row justify-around'>
          <Image src={nextjs} alt='nextjs' width={100} height={50} />
          <Image src={tailwindcss} alt='tailwindcss' width={150} height={50} />
        </div>
      </div>
      <h1 className='mb-8 sm:text-xl'>Nathan Huey &#931; 2022-2024</h1>
    </div>
  );
}
