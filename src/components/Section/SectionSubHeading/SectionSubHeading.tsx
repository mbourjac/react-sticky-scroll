import type { ReactNode } from 'react';
import styles from './SectionSubHeading.module.scss';

type SectionSubheadingProps = {
  children: ReactNode;
};

export const SectionSubheading = ({ children }: SectionSubheadingProps) => {
  return <h3 className={styles.subheading}>{children}</h3>;
};
