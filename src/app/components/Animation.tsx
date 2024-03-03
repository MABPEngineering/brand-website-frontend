'use client';

import { ReactNode, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface AnimationProps {
  children: ReactNode;
  delay?: number;
}

const Animation = ({ children, delay }: AnimationProps) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start({ y: 0, opacity: 1 });
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial={{ y: 100, opacity: 0 }}
      animate={controls}
      transition={{
        type: 'spring',
        stiffness: 120,
        damping: 100,
        delay: delay,
      }}
    >
      {children}
    </motion.div>
  );
};

export default Animation;
