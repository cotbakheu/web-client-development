import React from "react";
import Modal from "./Modal";

type Props = {
  isOpen?: boolean;
  onClose?: () => void;
  message?: string;
  type?: "success" | "error" | "info";
};

function AlertModal({}: Props) {
  return (
    <Modal>
      <div className="p-6">
        <h2 className="text-lg font-semibold mb-4">Alert</h2>
        <p className="text-gray-700">This is an alert message.</p>
        <div className="mt-4">
          <button
            onClick={() => {}}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Close
          </button>
        </div>
      </div>
    </Modal>
  );
}

export default AlertModal;
