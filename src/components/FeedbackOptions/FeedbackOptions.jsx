import Box from 'components/Box';
import PropTypes from 'prop-types';
import { Button } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <Box display="flex" justifyContent="center" as="div">
      {options.map(({ label, icon: Icon }) => (
        <Button
          type="button"
          key={label}
          onClick={() => onLeaveFeedback({ label })}
          label={label}
        >
          <Icon size="20" />
          {label}
        </Button>
      ))}
    </Box>
  );
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      icon: PropTypes.any,
    }).isRequired
  ).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
