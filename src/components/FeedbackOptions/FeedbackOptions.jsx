import PropTypes from 'prop-types';

export function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <div>
      {options.map(optionBtn => (
        <button
          type="button"
          key={optionBtn}
          onClick={() => onLeaveFeedback({ optionBtn })}
        >
          {optionBtn}
        </button>
      ))}
    </div>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedback: PropTypes.func,
};
