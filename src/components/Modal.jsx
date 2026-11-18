import React, { useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

import Button from "./Button";

export default function Modal({ children, buttonCaption, ref }) {
  const dialog = useRef();
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });
  return createPortal(
    <dialog
      ref={dialog}
      className="w-[28rem] max-w-[calc(100%-2rem)] p-6 rounded-md shadow-xl bg-white text-stone-800 backdrop:bg-stone-900/90"
    >
      {children}
      <form method="dialog" className="mt-4 text-right">
        <Button>{buttonCaption}</Button>
      </form>
    </dialog>,
    document.getElementById("modal-root"),
  );
}
