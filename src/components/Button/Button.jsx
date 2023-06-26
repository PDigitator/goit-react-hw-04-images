import PropTypes from 'prop-types';

import { LoadMoreBtn } from 'components/Button/Button.styled';

const Button = ({ text, onClickBtn }) => {
  return (
    <LoadMoreBtn type="button" onClick={onClickBtn}>
      {text}
    </LoadMoreBtn>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClickBtn: PropTypes.func.isRequired,
};

export default Button;
