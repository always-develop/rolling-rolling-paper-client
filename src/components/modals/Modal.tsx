import React, { MouseEventHandler } from 'react';
import 'assets/styles/modal/Modal.scss';

type ModalProps = {
  header: string;
  topCancel?: boolean;
  contents: string;
  onClose: MouseEventHandler<HTMLButtonElement>;
};

function Modal(props: ModalProps) {
  return (
    <div className="modal-wrapper">
      <div className="modal-header">
        <span>{props.header}</span>
        {props.topCancel ? <span>X</span> : null}
      </div>
      <div className="modal-body">{props.contents}</div>
      <div className="modal-footer">
        <button onClick={props.onClose}>취소</button>
        <button>확인</button>
      </div>
    </div>
  );
}

export default Modal;
