'use client';
import { useRef } from 'react';
import Navbar from './_components/navbar';
import Landing from './_components/landing';
import Arrow from './_components/arrow';
import About from './_components/about';
import Projects from './_components/projects';
import Footer from './_components/footer';

export default function Home() {
  const aboutRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <div className='flex h-screen flex-col justify-between'>
        <Navbar aboutRef={aboutRef} projectsRef={projectsRef} />
        <Landing />
        <Arrow />
      </div>
      <div ref={aboutRef}>
        <About />
      </div>
      <div ref={projectsRef}>
        <Projects />
      </div>
      <Footer />
    </>
  );
}
