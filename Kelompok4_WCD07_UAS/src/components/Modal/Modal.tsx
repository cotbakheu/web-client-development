"use client";
import React from "react";
import Modal from "react-modal";

type Props = {
  onClose?: () => void;
  onRequestClose?: () => void;
  isOpen?: boolean;
  children?: React.ReactNode;
  title?: string;
};

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

function CustomModal({ isOpen = false, children, title, onClose }: Props) {
  return (
    <div>
      <Modal
        isOpen={isOpen}
        onRequestClose={onClose}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">{title}</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            &times;
          </button>
        </div>
        {children}
      </Modal>
    </div>
  );
}

export default CustomModal;
