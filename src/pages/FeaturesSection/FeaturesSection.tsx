import { useRef } from 'react';
import { useScroll, useSpring, useTransform } from 'framer-motion';
import { Section } from '../../components/Section/Section';
import { SectionContent } from '../../components/Section/SectionContent/SectionContent';
import { SectionHeading } from '../../components/Section/SectionHeading/SectionHeading';
import { SectionLink } from '../../components/Section/SectionLink/SectionLink';
import { SectionParagraph } from '../../components/Section/SectionParagraph/SectionParagraph';
import { SectionSubheading } from '../../components/Section/SectionSubHeading/SectionSubHeading';
import { useElementSize } from '../../hooks/use-element-size';
import { useWindowSize } from '../../hooks/use-window-size';
import { FeaturesList } from './FeaturesList/FeaturesList';
import styles from './FeaturesSection.module.scss';

type FeaturesSectionProps = {
  features: string[];
};

export const FeaturesSection = ({ features }: FeaturesSectionProps) => {
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
    [0, -featuresListHeight + windowHeight],
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
      <Section className={styles.features}>
        <SectionHeading>Features</SectionHeading>
        <SectionContent>
          <SectionSubheading>
            Integer vitae justo eget magna fermentum
          </SectionSubheading>
          <SectionParagraph>
            Nunc non blandit massa enim nec. Porttitor rhoncus dolor purus non
            enim praesent elementum facilisis leo.
          </SectionParagraph>
          <SectionLink to={'/'}>
            Rhoncus aenean vel elit scelerisque mauris pellentesque.
          </SectionLink>
        </SectionContent>
        <FeaturesList
          features={features}
          y={featuresListY}
          ref={featuresListRef}
        />
      </Section>
    </div>
  );
};
