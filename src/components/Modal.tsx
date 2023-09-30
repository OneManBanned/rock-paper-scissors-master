import { useEffect, useRef } from "react";

export default function Modal({ openModal, closeModal }) {
    const ref = useRef();
    useEffect(() => {
        if (openModal) {
            ref.current?.showModal();
        } else {
            ref.current?.close();
        }
    }, [openModal]);

    return (
        <>
            <dialog
                className="rulesModal"
                ref={ref}
                onCancel={closeModal}
            >
                <h2 className="rulesModal_header">rules</h2>
                <button className="rulesModal_close" onClick={closeModal}>close</button>
                <img className="rulesModal_img" src="/assets/images/image-rules.svg" alt="rock beats scissors, scissors beats paper, paper beats rock" />
            </dialog>
        </>
    )
}
