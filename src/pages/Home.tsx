import { AboutSection } from './AboutSection/AboutSection';
import { Hero } from './Hero/Hero';
import styles from './Home.module.scss';

export const Home = () => {
  return (
    <main className={styles.home}>
      <Hero />
      <AboutSection />
    </main>
  );
};
