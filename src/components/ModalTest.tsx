import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import Modal from './modals/Modal';

function ModalTest() {
  const [showModal, setShowModal] = useState(false);
  return (
    <div>
      <button onClick={() => setShowModal(true)}>
        Show modal using a portal
      </button>
      {showModal &&
        createPortal(
          <Modal
            onClose={() => setShowModal(false)}
            header="모달 이름"
            contents="모달 내용"
          />,
          document.body
        )}
    </div>
  );
}

export default ModalTest;
