import { useEffect, useRef } from "react";

export default function Modal({ openModal, closeModal }: any) {
    const ref: any = useRef();
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
                <div className="rulesModal">
                    <h2 className="rulesModal_header font-700">rules</h2>
                    <button className="rulesModal_close" aria-label="close modal" onClick={closeModal}></button>
                    <img className="rulesModal_img" src="/assets/images/image-rules.svg" alt="rock beats scissors, scissors beats paper, paper beats rock" />
                </div>
            </dialog>
        </>
    )
}
