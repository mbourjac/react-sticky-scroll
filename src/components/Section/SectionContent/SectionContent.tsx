import type { ReactNode } from 'react';
import styles from './SectionContent.module.scss';

type SectionContentProps = {
  children: ReactNode;
};

export const SectionContent = ({ children }: SectionContentProps) => {
  return <div className={styles.content}>{children}</div>;
};
