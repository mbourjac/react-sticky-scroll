import { useRef } from 'react';
import { useScroll, useSpring, useTransform } from 'framer-motion';
import { Section } from '../../components/Section/Section';
import { SectionHeading } from '../../components/Section/SectionHeading/SectionHeading';
import { useElementSize } from '../../hooks/use-element-size';
import { useWindowSize } from '../../hooks/use-window-size';
import type { GalleryImage } from '../Home.types';
import { Gallery } from './Gallery/Gallery';
import styles from './GallerySection.module.scss';

type GallerySectionProps = {
  galleryImages: GalleryImage[];
};

export const GallerySection = ({ galleryImages }: GallerySectionProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);

  const { windowWidth } = useWindowSize();
  const { width: galleryWidth } = useElementSize(galleryRef);

  const galleryRightMargin = windowWidth / 10;
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });
  const x = useTransform(
    scrollYProgress,
    [0, 1],
    [0, windowWidth - galleryWidth - galleryRightMargin],
  );
  const galleryX = useSpring(x, {
    damping: 25,
    mass: 0.2,
    stiffness: 450,
  });

  return (
    <div
      ref={containerRef}
      className={styles.container}
      style={{
        height: galleryWidth ? `${galleryWidth}px` : 'auto',
      }}
    >
      <Section className={styles.section}>
        <SectionHeading>Gallery</SectionHeading>
        <Gallery ref={galleryRef} images={galleryImages} x={galleryX} />
      </Section>
    </div>
  );
};
