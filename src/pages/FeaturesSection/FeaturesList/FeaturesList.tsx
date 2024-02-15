import { forwardRef, useRef } from 'react';
import { type MotionValue, motion } from 'framer-motion';
import { useElementSize } from '../../../hooks/use-element-size';
import { FeatureItem } from '../FeatureItem/FeatureItem';
import styles from './FeaturesList.module.scss';

type FeaturesListProps = {
  features: string[];
  y: MotionValue<string>;
};

export const FeaturesList = forwardRef<HTMLDivElement, FeaturesListProps>(
  ({ features, y }, ref) => {
    const firstFeatureItemRef = useRef<HTMLLIElement>(null);

    const { height: firstFeatureItemHeight } =
      useElementSize(firstFeatureItemRef);

    const paddingTop = `calc(100vh - ${firstFeatureItemHeight}px)`;

    return (
      <div className={styles.container} ref={ref}>
        <motion.ul className={styles.list} style={{ paddingTop, y }}>
          {features.map((feature, index) => (
            <FeatureItem
              key={index}
              ref={index === 0 ? firstFeatureItemRef : undefined}
              index={index + 1}
            >
              {feature}
            </FeatureItem>
          ))}
        </motion.ul>
      </div>
    );
  },
);

FeaturesList.displayName = 'FeaturesList';
