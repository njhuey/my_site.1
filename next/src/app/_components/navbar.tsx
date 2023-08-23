import Image from 'next/image';
import downloadIcon from 'public/download.svg';

export default function Navbar() {
  return (
    <div className='flex w-full justify-end px-8 py-4'>
      <div className='hidden sm:block'>
        <button className='btn btn-ghost m-2 text-lg font-medium normal-case'>
          About
        </button>
        <button className='btn btn-ghost m-2 text-lg font-medium normal-case'>
          Projects
        </button>
        <button className='btn btn-secondary m-2 text-lg font-medium normal-case'>
          R&#233;sum&#233;
        </button>
      </div>
      <div className='md:hidden'>
        <button className='btn btn-ghost m-1 text-lg font-medium normal-case'>
          <Image src={downloadIcon} alt='Download' />
        </button>
      </div>
    </div>
  );
}
