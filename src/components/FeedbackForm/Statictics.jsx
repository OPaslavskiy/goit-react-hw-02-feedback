import { Titel, String } from './FeedbackForm.styled';
import PropTypes from 'prop-types';
export const Statistics = ({ state, total, percentagePositive }) => {
  return (
    <>
      <Titel>Statistics</Titel>
      {total() > 0 ? (
        <>
          <String>Good: {state.good}</String>
          <String>Neutral: {state.neutral}</String>
          <String>Bad: {state.bad}</String>
          <String>Total: {total()}</String>
          <String>Positive feedback: {percentagePositive()}%</String>
        </>
      ) : (
        <String>No feedback given</String>
      )}
    </>
  );
};

Statistics.propTypes = {
  state: PropTypes.object.isRequired,
  total: PropTypes.func.isRequired,
  percentagePositive: PropTypes.func.isRequired,
};
