'use client';
import { useRef } from 'react';
import Navbar from './components/navbar';
import Landing from './components/landing';
import Arrow from './components/arrow';
import About from './components/about';
import Projects from './components/projects';
import Footer from './components/footer';

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
