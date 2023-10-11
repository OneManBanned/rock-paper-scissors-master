import { useEffect, useRef } from "react";
import { CSSTransition } from 'react-transition-group'

export default function Modal({ openModal, closeModal, currentMode: { rules, rulesAlt } }: any) {

    const modalRef: any = useRef();

    useEffect(() => {
        if (openModal) {
            modalRef.current?.showModal();
        } else {
            setTimeout(() => {
                modalRef.current?.close();
            }, 500)
        }
    }, [openModal]);

    return (
        <CSSTransition
            in={openModal}
            classNames='rulesModal_modalAnimate'
            timeout={500}
            nodeRef={modalRef}>

            <dialog ref={modalRef} onCancel={closeModal} >
                <div className="rulesModal">
                    <h2 className="rulesModal_header font-700">rules</h2>
                    <button className="rulesModal_close" aria-label="close modal" onClick={closeModal}></button>
                    <img className="rulesModal_img" src={rules} alt={rulesAlt} />
                </div>
            </dialog>
        </CSSTransition>
    )
}
