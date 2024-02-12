import type { ReactNode } from 'react';
import styles from './SectionParagraph.module.scss';

type SectionParagraphProps = {
  children: ReactNode;
};

export const SectionParagraph = ({ children }: SectionParagraphProps) => {
  return <p className={styles.paragraph}>{children}</p>;
};
