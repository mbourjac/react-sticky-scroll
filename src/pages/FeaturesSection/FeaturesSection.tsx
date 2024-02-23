import { useMediaQuery } from '../../hooks/use-media-query';
import { DesktopFeaturesSection } from './DesktopFeaturesSection/DesktopFeaturesSection';
import { MobileFeaturesSection } from './MobileFeaturesSection/MobileFeaturesSection';

type FeaturesSectionProps = {
  features: string[];
};

export const FeaturesSection = ({ features }: FeaturesSectionProps) => {
  const isSmallDevice = useMediaQuery('(max-width: 1024px)');

  return isSmallDevice ?
      <MobileFeaturesSection
        features={features}
        key="mobile-features-section"
      />
    : <DesktopFeaturesSection
        features={features}
        key="desktop-features-section"
      />;
};
