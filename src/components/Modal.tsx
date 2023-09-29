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
                ref={ref}
                onCancel={closeModal}
            >
                <h2>rules</h2>
                <button onClick={closeModal}>close</button>
                <img src="/assets/images/image-rules.svg" alt="rock beats scissors, scissors beats paper, paper beats rock" />
            </dialog>
        </>
    )
}
