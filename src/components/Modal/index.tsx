import React from "react";
import { useEffect, useRef, ReactNode } from "react";
import { createPortal } from "react-dom";

interface IModalProps {
  children: ReactNode;
}

const Modal = ({ children }: IModalProps): React.ReactPortal => {
  const elRef = useRef<HTMLDivElement | null>(null);
  if (!elRef.current) elRef.current = document.createElement("div");

  useEffect(() => {
    const id: string =
      window.innerWidth <= 768 ? "#modal-root-mobile" : "#modal-root";
    const modalRoot = document.querySelector(id) as HTMLElement;

    const el: HTMLDivElement | null = elRef.current!;
    modalRoot.appendChild(el);
    return () => {
      modalRoot.removeChild(el);
    };
  }, []);

  return createPortal(children, elRef.current);
};

export default Modal;
