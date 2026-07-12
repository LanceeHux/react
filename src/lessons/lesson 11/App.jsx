import { useRef } from 'react';
export default function App() {
    const inputRef = useRef(null);

    return (
        <>
        <input type="text" ref={inputRef} defaultValue="Present Value"/>
        <button onClick={() => inputRef.current.focus()}>Focus</button>
        <button onClick={() => inputRef.current.disabled = false}>Enable</button>
        <button onClick={() => inputRef.current.disabled = true}>Disable</button>
        <button onClick={() => inputRef.current.value = ""}>Clear</button>
        </>
    );
}