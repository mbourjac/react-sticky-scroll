import type { ReactNode } from 'react';
import styles from './Section.module.scss';

type SectionProps = {
  className?: string;
  children: ReactNode;
};

export const Section = ({ className, children }: SectionProps) => {
  return (
    <section className={`${styles.section} ${className ?? ''}`.trim()}>
      {children}
    </section>
  );
};
