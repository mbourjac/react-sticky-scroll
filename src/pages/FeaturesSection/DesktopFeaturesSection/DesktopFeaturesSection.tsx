import { useRef } from 'react';
import { useScroll, useSpring, useTransform } from 'framer-motion';
import { useElementSize } from '../../../hooks/use-element-size';
import { useWindowSize } from '../../../hooks/use-window-size';
import { FeaturesSectionContent } from '../FeaturesSectionContent';
import { DesktopFeaturesList } from './DesktopFeaturesList';
import styles from './DesktopFeaturesSection.module.scss';

type DesktopFeaturesSectionProps = {
  features: string[];
};

export const DesktopFeaturesSection = ({
  features,
}: DesktopFeaturesSectionProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const featuresListRef = useRef<HTMLDivElement>(null);

  const { windowHeight } = useWindowSize();
  const { height: featuresListHeight } = useElementSize(featuresListRef);

  const { scrollYProgress } = useScroll({
    target: containerRef,
  });
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [0, windowHeight - featuresListHeight],
  );
  const featuresListY = useSpring(y, {
    damping: 25,
    mass: 0.2,
    stiffness: 450,
  });

  return (
    <div
      ref={containerRef}
      style={{
        height: featuresListHeight ? `${featuresListHeight * 1.5}px` : 'auto',
      }}
    >
      <FeaturesSectionContent className={styles.features}>
        <DesktopFeaturesList
          features={features}
          y={featuresListY}
          ref={featuresListRef}
        />
      </FeaturesSectionContent>
    </div>
  );
};
