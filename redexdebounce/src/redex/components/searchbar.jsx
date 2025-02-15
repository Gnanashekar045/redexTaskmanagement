import { useRef, useState } from "react"
import { useDispatch } from "react-redux";
import { setQuery } from "../userSlice";

const searchBar = () => {
    const [input, setInput] = useState('');
    const dispach = useDispatch();

    const timeoutRef = useRef(null);

    const handleChange = (e) => {
        const value = e.targt.value;
        setInput(value);

        if(timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }

        timeoutRef.current =setTimeout(()=> {
            dispach(setQuery(value))
        }, 1000);
    }

    return (
        <div>
            <input type="text" value={input} onChange={handleChange} placeholder="seach users..." />
        </div>
    )


}

export default searchBar