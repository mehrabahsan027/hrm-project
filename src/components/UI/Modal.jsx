import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";

export default function Modal({
  isOpen,
  onClose,
  children,
  title,
  closeOnBackdropClick = true,
}) {
  // Listen for the Escape key to close the modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  // React Portal target
  const modalRoot = document.getElementById("modal-root") || document.body;

  const handleBackdropClick = (e) => {
    if (closeOnBackdropClick && e.target === e.currentTarget) {
      onClose();
    }
  };

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs transition-opacity duration-300 ease-out"
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
    >
      {/* Modal Container */}
      <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-3xl transform scale-100 opacity-100 transition-all duration-300 ease-out overflow-hidden flex flex-col max-h-[90vh] p-10">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-2xl font-bold text-[#344054]">
            {title || "Employee Information"}
          </h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition duration-200 cursor-pointer p-1 rounded-md hover:bg-gray-50"
            aria-label="Close modal"
          >
            <X size={24} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="overflow-y-auto flex-1">
          {children}
        </div>
      </div>
    </div>,
    modalRoot
  );
}
