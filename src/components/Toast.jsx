import React from "react";
import { createPortal } from "react-dom";

const Toast = ({ toast }) => {
  if (!toast) {
    return null;
  }

  if (typeof document === "undefined") {
    return null;
  }

  const toastContent = (
    <div
      role="status"
      aria-live="polite"
      className={`fixed top-6 right-6 z-50 min-w-[360px] max-w-md rounded-2xl border border-white/40 bg-gradient-to-br from-emerald-500 to-emerald-600 px-4 py-3 text-white shadow-2xl shadow-emerald-400/40 transition-transform duration-300 ease-out`}
    >
      <div className="flex items-center gap-3">
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-lg font-bold text-white">
          ✓
        </span>
        <div className="flex-1 text-base font-semibold leading-snug">
          {toast.message}
        </div>
      </div>
    </div>
  );

  return createPortal(toastContent, document.body);
};

export default Toast;
