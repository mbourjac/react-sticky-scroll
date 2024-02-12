import type { ReactNode } from 'react';
import styles from './SectionHeading.module.scss';

type SectionHeadingProps = {
  children: ReactNode;
};

export const SectionHeading = ({ children }: SectionHeadingProps) => {
  return <h2 className={styles.heading}>{children}</h2>;
};
