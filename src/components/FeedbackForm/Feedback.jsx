import { firstLetterUp } from 'components/tools/FirstLetterUp';
import { Titel, ButtonDiv, Button } from './FeedbackForm.styled';
import PropTypes from 'prop-types';

export const Feedback = ({ state, addFeedBack }) => {
  const stateKeys = Object.keys(state);
  return (
    <>
      <Titel>Please leave feedback</Titel>
      <ButtonDiv>
        {stateKeys.map(key => (
          <Button key={key} onClick={() => addFeedBack(key)}>
            {firstLetterUp(key)}
          </Button>
        ))}
      </ButtonDiv>
    </>
  );
};

Feedback.propTypes = {
  state: PropTypes.object.isRequired,
  addFeedBack: PropTypes.func.isRequired,
};
