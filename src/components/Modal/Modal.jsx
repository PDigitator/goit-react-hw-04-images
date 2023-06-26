import { useEffect } from 'react';

import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

import { Overlay, ModalWrap } from 'components/Modal/Modal.styled';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ onClose, children }) => {
  useEffect(() => {
    window.addEventListener('keydown', handleKeydown);

    return () => {
      window.removeEventListener('keydown', handleKeydown);
    };
  }, []);

  const handleKeydown = evt => {
    if (evt.code === 'Escape') {
      onClose();
    }
  };

  const handleOverlayClick = evt => {
    if (evt.currentTarget === evt.target) {
      onClose();
    }
  };

  return createPortal(
    <Overlay onClick={handleOverlayClick}>
      <ModalWrap>{children}</ModalWrap>
    </Overlay>,
    modalRoot
  );
};

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal;
