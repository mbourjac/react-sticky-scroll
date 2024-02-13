import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import heroImage from '../../assets/images/hero.jpg';
import styles from './Hero.module.scss';

export const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['end end', 'end start'],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '-30%']);
  const imageOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <div className={styles.hero} ref={heroRef}>
      <h1 className={styles.heading}>Lorem ipsum sit amet elit consectetur</h1>
      <motion.img
        src={heroImage}
        alt=""
        className={styles.image}
        style={{ opacity: imageOpacity, y: imageY }}
      ></motion.img>
    </div>
  );
};
