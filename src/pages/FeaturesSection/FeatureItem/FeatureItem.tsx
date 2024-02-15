import { forwardRef, type ReactNode } from 'react';
import styles from './FeatureItem.module.scss';

type FeatureItemProps = {
  index: number;
  children: ReactNode;
};

export const FeatureItem = forwardRef<HTMLLIElement, FeatureItemProps>(
  ({ index, children }, ref?) => {
    return (
      <li ref={ref} className={styles.feature}>
        <h4>
          <span className={styles.index}>{`${
            index > 9 ? '' : '0'
          }${index}.`}</span>
          <br />
          {children}
        </h4>
      </li>
    );
  },
);

FeatureItem.displayName = 'FeatureItem';
