import { useImperativeHandle, useRef } from "react"

export default function ResultModal({ref, result, targerTime}){
    const dialog = useRef();
    useImperativeHandle(ref, () =>{
        return{
            open(){
                dialog.current.showModal();
            }
        }
    });




    return <dialog ref={dialog} className="result-modal">
        <h2>you {result}</h2>
        <p>The target time was <strong>{targerTime} seconds.</strong></p>
        <p>You stopped the timer with <strong>X seconds left.</strong></p>
        <form method="dialog">
            <button>Close</button>
        </form>
    </dialog>
}