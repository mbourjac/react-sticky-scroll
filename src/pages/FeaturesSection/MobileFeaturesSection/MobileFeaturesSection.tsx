import { FeaturesSectionContent } from '../FeaturesSectionContent';
import styles from './MobileFeaturesSection.module.scss';

type MobileFeaturesSectionProps = {
  features: string[];
};

export const MobileFeaturesSection = ({
  features,
}: MobileFeaturesSectionProps) => {
  return (
    <FeaturesSectionContent>
      <ul className={styles.list}>
        {features.map((feature, index) => (
          <li key={`mobile-feature-${index}`}>
            <h4 className={styles.feature}>
              <span className={styles.index}>{`${index + 1 > 9 ? '' : '0'}${
                index + 1
              }.`}</span>
              <span>{feature}</span>
            </h4>
          </li>
        ))}
      </ul>
    </FeaturesSectionContent>
  );
};
