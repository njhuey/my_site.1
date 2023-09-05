'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import arrow from 'public/arrow.svg';

export default function Arrow() {
  return (
    <div className='mb-2 flex w-screen justify-center'>
      <motion.div
        animate={{
          y: [-25, -25, 0, 0, -25],
          opacity: [0, 1, 1, 0, 0],
        }}
        transition={{
          ease: 'linear',
          duration: 2,
          repeat: Infinity,
        }}
      >
        <Image src={arrow} alt='arrow' height={50} width={50} />
      </motion.div>
    </div>
  );
}
