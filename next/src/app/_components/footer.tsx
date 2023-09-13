import Image from 'next/image';
import nextjs from 'public/nextjs.svg';
import tailwindcss from 'public/tailwindcss.svg';

export default function Footer() {
  return (
    <div className='mt-32 flex w-full flex-col items-center px-8 py-4'>
      <div className='flex w-full flex-row justify-evenly'>
        <Image src={nextjs} alt='nextjs' width={150} height={100} />
        <Image src={tailwindcss} alt='tailwindcss' width={200} height={100} />
      </div>
      <h1 className='mb-8 text-xl'>Nathan Huey &#169; 2022-2023</h1>
    </div>
  );
}
