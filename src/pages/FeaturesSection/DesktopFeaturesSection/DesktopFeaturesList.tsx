import { forwardRef, useRef } from 'react';
import { type MotionValue, motion } from 'framer-motion';
import { useElementSize } from '../../../hooks/use-element-size';
import styles from './DesktopFeaturesList.module.scss';

type DesktopFeaturesListProps = {
  features: string[];
  y: MotionValue<string>;
};

export const DesktopFeaturesList = forwardRef<
  HTMLDivElement,
  DesktopFeaturesListProps
>(({ features, y }, ref) => {
  const firstFeatureItemRef = useRef<HTMLLIElement>(null);

  const { height: firstFeatureItemHeight } =
    useElementSize(firstFeatureItemRef);

  const paddingTop = `calc(100vh - ${firstFeatureItemHeight}px)`;

  return (
    <div className={styles.container} ref={ref}>
      <motion.ul className={styles.list} style={{ paddingTop, y }}>
        {features.map((feature, index) => (
          <li
            key={`desktop-feature-${index}`}
            ref={index === 0 ? firstFeatureItemRef : undefined}
            className={styles.feature}
          >
            <h4>
              <span className={styles.index}>{`${index + 1 > 9 ? '' : '0'}${
                index + 1
              }.`}</span>
              <br />
              {feature}
            </h4>
          </li>
        ))}
      </motion.ul>
    </div>
  );
});

DesktopFeaturesList.displayName = 'FeaturesList';
