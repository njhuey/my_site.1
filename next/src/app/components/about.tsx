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
            I am a software engineer with experience in data infrastructure,
            focused on building scalable and efficient systems. My expertise
            spans infrastructure, machine learning, and software architecture.
          </p>
          <p className='py-2 sm:text-xl'>
            I have gained valuable hands-on experience through internships
            in software development. I have a true passion for designing 
            software systems and I am eager to apply my technical skills and 
            perspective to contribute to innovative projects in my next 
            role.
          </p>
          <p className='py-2 sm:text-xl'>
            When I'm not coding, I enjoy skiing and sometimes golf.
            Additionally, I've been a snare drummer for 9 years, which landed me
            the opportunity to be a part of the drumline that plays for the
            49ers, Niner Noise.
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
