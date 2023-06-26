import PropTypes from 'prop-types';

import { SectionWrapper, Title } from 'components/Section/Section.styled';
import { Container } from 'components/Searchbar/Searchbar.styled';

const Section = ({ title, children }) => {
  return (
    <SectionWrapper>
      <Container>
        <Title>{title}</Title>
        {children}
      </Container>
    </SectionWrapper>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Section;
