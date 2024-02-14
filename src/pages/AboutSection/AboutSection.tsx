import { Section } from '../../components/Section/Section';
import { SectionContent } from '../../components/Section/SectionContent/SectionContent';
import { SectionHeading } from '../../components/Section/SectionHeading/SectionHeading';
import { SectionLink } from '../../components/Section/SectionLink/SectionLink';
import { SectionParagraph } from '../../components/Section/SectionParagraph/SectionParagraph';
import { SectionSubheading } from '../../components/Section/SectionSubHeading/SectionSubHeading';
import { SectionSubParagraph } from '../../components/Section/SectionSubParagraph/SectionSubParagraph';

export const AboutSection = () => {
  return (
    <Section>
      <SectionHeading>About</SectionHeading>
      <SectionContent>
        <SectionSubheading>
          Integer vitae justo eget magna fermentum
        </SectionSubheading>
        <SectionParagraph>
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat.
        </SectionParagraph>
        <SectionSubParagraph>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum.
        </SectionSubParagraph>
        <SectionLink to={''}>Consectetur adipiscing elit sed do.</SectionLink>
      </SectionContent>
    </Section>
  );
};
