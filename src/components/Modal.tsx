import React, { cloneElement, createContext, useContext, useState, ReactNode, MutableRefObject } from "react";
import { createPortal } from "react-dom";
import { HiXMark } from "react-icons/hi2";
import { useOutsideClick } from "./useOutsideClick";

type ModalContextType = {
    close: () => void;
    open: (modalName: string) => void;
    openModal: string;
};

const ModalContext = createContext<ModalContextType>({
    close: () => {},
    open: () => {},
    openModal: "",
});

type ModalProps = {
    children: ReactNode;
};

function Modal({ children }: ModalProps) {
    const [openModal, setOpenModal] = useState<string>("");

    const close = () => setOpenModal("");
    const open = (modalName: string) => setOpenModal(modalName);

    return (
        <ModalContext.Provider value={{ close, open, openModal }}>
            {children}
        </ModalContext.Provider>
    );
}

type OpenProps = {
    children: ReactNode;
    openModalName: string;
};

function Open({ children, openModalName }: OpenProps) {
    const { open } = useContext(ModalContext);

    return cloneElement(children as React.ReactElement, { onClick: () => open(openModalName) });
}

type WindowProps = {
    children: ReactNode;
    name: string;
};

function Window({ children, name }: WindowProps) {
    const { openModal, close } = useContext(ModalContext);
    const { ref } = useOutsideClick(close) as { ref: MutableRefObject<HTMLDivElement | null> }; // Asserting the correct type for the ref

    if (name !== openModal) return null;

    return createPortal(
        <div className="fixed top-0 left-0 w-full h-full z-40 transition-all backdrop-blur-sm">
            <div ref={ref} className="fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-gray-50 rounded-lg shadow-lg py-[3.2rem] px-[1.2rem] transition-all dark:bg-slate-700">
                <button onClick={close} className="bg-none border-none p-2 rounded-sm translate-x-3 transition absolute top-5 right-8 hover:bg-gray-100"><HiXMark /></button>
                <div>{cloneElement(children as React.ReactElement, { onCloseModal: close })}</div>
            </div>
        </div>,
        document.body
    );
}

Modal.Open = Open;
Modal.Window = Window;

export default Modal;
