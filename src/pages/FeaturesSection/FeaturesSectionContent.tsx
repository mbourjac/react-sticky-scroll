import type { ReactNode } from 'react';
import { Section } from '../../components/Section/Section';
import { SectionContent } from '../../components/Section/SectionContent/SectionContent';
import { SectionHeading } from '../../components/Section/SectionHeading/SectionHeading';
import { SectionLink } from '../../components/Section/SectionLink/SectionLink';
import { SectionParagraph } from '../../components/Section/SectionParagraph/SectionParagraph';
import { SectionSubheading } from '../../components/Section/SectionSubHeading/SectionSubHeading';

type FeaturesSectionContentProps = {
  className?: string;
  children?: ReactNode;
};

export const FeaturesSectionContent = ({
  className,
  children,
}: FeaturesSectionContentProps) => {
  return (
    <Section className={className}>
      <SectionHeading>Features</SectionHeading>
      <SectionContent>
        <SectionSubheading>
          Integer vitae justo eget magna fermentum
        </SectionSubheading>
        <SectionParagraph>
          Nunc non blandit massa enim nec. Porttitor rhoncus dolor purus non
          enim praesent elementum facilisis leo.
        </SectionParagraph>
        <SectionLink to={'/'}>
          Rhoncus aenean vel elit scelerisque mauris pellentesque.
        </SectionLink>
      </SectionContent>
      {children}
    </Section>
  );
};
