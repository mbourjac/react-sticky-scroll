import type { ReactNode } from 'react';
import styles from './SectionSubParagraph.module.scss';

type SectionSubParagraphProps = {
  children: ReactNode;
};

export const SectionSubParagraph = ({ children }: SectionSubParagraphProps) => {
  return <p className={styles.subparagraph}>{children}</p>;
};
