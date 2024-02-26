import { forwardRef } from 'react';
import { Link } from 'react-router-dom';
import { type MotionValue, motion } from 'framer-motion';
import type { GalleryImage } from '../../Home.types';
import styles from './Gallery.module.scss';

type GalleryProps = {
  images: GalleryImage[];
  x: MotionValue<number>;
};

export const Gallery = forwardRef<HTMLDivElement, GalleryProps>(
  ({ images, x }, ref) => {
    return (
      <motion.div ref={ref} className={styles.gallery} style={{ x }}>
        {images.map(({ src, title, slug }) => (
          <Link key={slug} to={slug}>
            <img src={src} alt={title} className={styles.image} />
          </Link>
        ))}
      </motion.div>
    );
  },
);

Gallery.displayName = 'Gallery';
