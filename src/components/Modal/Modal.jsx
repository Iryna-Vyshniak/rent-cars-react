import { useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';

import { handleClose } from '../../shared/utils';
import Button from '../Button';

const modalContainer = document.getElementById('modal');

const Modal = ({ onClose, children, isOpen }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'visible';
    }
  }, [isOpen]);

  const handleModalClose = useCallback(
    e => {
      document.body.style.overflow = 'visible';
      handleClose(e, onClose);
    },
    [onClose]
  );

  useEffect(() => {
    document.body.addEventListener('keydown', handleModalClose);

    return () => document.body.removeEventListener('keydown', handleModalClose);
  }, [handleModalClose]);

  return createPortal(
    <div className="backdrop" onClick={handleModalClose}>
      <div className="modal max-w-full dark:bg-slate-700">
        <Button
          onClick={onClose}
          className="close"
          type="button"
          iconURL="#icon-close"
          ariaLabel="close icon"
        />
        {children}
      </div>
    </div>,
    modalContainer
  );
};

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  onClose: PropTypes.func.isRequired,
  isOpen: PropTypes.bool
};

export default Modal;
