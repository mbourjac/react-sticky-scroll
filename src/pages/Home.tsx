import { AboutSection } from './AboutSection/AboutSection';
import { FeaturesSection } from './FeaturesSection/FeaturesSection';
import { Hero } from './Hero/Hero';
import { features } from './Home.constants';
import styles from './Home.module.scss';

export const Home = () => {
  return (
    <main className={styles.home}>
      <Hero />
      <AboutSection />
      <FeaturesSection features={features} />
    </main>
  );
};
