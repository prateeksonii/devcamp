import { useState } from "react";
import Modal from "react-modal";

export default function AdminDashboard() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen((open) => !open);
  };

  return (
    <div className="container mx-auto py-8">
      <div className="flex justify-between">
        <button
          className="rounded-md border-2 border-green-600 py-2 px-4 text-lg text-green-600"
          onClick={toggleModal}
        >
          Add Module
        </button>
      </div>

      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        className="modal"
        overlayClassName="modal-overlay"
      >
        ok
      </Modal>
    </div>
  );
}
