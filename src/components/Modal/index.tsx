import { useEffect, useRef, ReactNode } from "react";
import { createPortal } from "react-dom";

interface IModalProps {
  children: ReactNode;
}

export default function Modal({ children }: IModalProps) {
  const elRef = useRef<HTMLDivElement | null>(null);
  if (!elRef.current) elRef.current = document.createElement("div");

  useEffect(() => {
    const id = window.innerWidth <= 768 ? "#modal-root-mobile" : "#modal-root";
    const modalRoot = document.querySelector(id) as HTMLElement;

    console.log(modalRoot);

    const el = elRef.current!;
    modalRoot.appendChild(el);
    return () => {
      modalRoot.removeChild(el);
    };
  }, []);

  return createPortal(children, elRef.current);
}
