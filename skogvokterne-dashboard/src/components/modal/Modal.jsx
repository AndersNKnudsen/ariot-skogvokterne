import React from 'react';
import PropTypes from 'prop-types';

const Modal = props => (
  <div className="modal fade" id={props.modalId || 'modal'} tabIndex="-1" role="dialog" aria-labelledby="modalLabel" aria-hidden="true">
    <div className="modal-dialog" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="modalLabel">{props.title || 'Tittel'}</h5>
        </div>
        <div className="modal-body">
          {props.children}
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" data-dismiss="modal">{props.btnSecondary || 'Close'}</button>
          <button type="button" className="btn btn-primary" onClick={props.onClick}>{props.btnPrimary || 'Send'}</button>
        </div>
      </div>
    </div>
  </div>
 );

Modal.propTypes = {
  modalId: PropTypes.string,
  title: PropTypes.string,
  btnSecondary: PropTypes.string,
  btnPrimary: PropTypes.string,
  onClick: PropTypes.func
};

 export default Modal;