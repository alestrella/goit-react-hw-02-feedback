// import Box from 'components/Box';
import PropTypes from 'prop-types';
import { Item, Label, List, Number } from './Statictics.styled';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <List>
      <Item>
        <Label>Good</Label>
        <Number>{good}</Number>
      </Item>
      <Item>
        <Label>Neutral</Label>
        <Number>{neutral}</Number>
      </Item>
      <Item>
        <Label>Bad</Label>
        <Number>{bad}</Number>
      </Item>

      <Item>
        <Label>Total</Label>
        <Number>{total}</Number>
      </Item>
      <Item>
        <Label>Positive feedback</Label>
        <Number>{positivePercentage}%</Number>
      </Item>
    </List>
  );
};

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
