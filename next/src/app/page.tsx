import Navbar from './_components/navbar';
import Landing from './_components/landing';
import Arrow from './_components/arrow';
import About from './_components/about';
import Projects from './_components/projects';
import Footer from './_components/footer';

export default function Home() {
  return (
    <>
      <div className='flex h-screen flex-col justify-between'>
        <Navbar />
        <Landing />
        <Arrow />
      </div>
      <About />
      <Projects />
      <Footer />
    </>
  );
}
