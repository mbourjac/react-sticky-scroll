import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import styles from './SectionLink.module.scss';

type SectionLinkProps = {
  to: string;
  children: ReactNode;
};

export const SectionLink = ({ to, children }: SectionLinkProps) => {
  return (
    <Link to={to} className={styles.link}>
      {children}
    </Link>
  );
};
