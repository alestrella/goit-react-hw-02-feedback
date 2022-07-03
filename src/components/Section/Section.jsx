import Box from 'components/Box';
import PropTypes from 'prop-types';
import { Heading } from './Section.styled';

const Section = ({ title, children }) => {
  return (
    <Box p={5} as="section">
      <Heading>{title}</Heading>
      {children}
    </Box>
  );
};

export default Section;

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
