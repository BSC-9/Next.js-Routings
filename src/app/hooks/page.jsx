"use client"
import { useRef, useState, useEffect } from "react";

export default function Difference() {
    const [count, setCount] = useState(0);
    const countRef = useRef(0);

    const Increment = () => {
        setCount(count+1);
        countRef.current++;

        console.log("State: ", count);
        console.log("ref: ", countRef.current);
    };

    return (
        <div className="text-5xl">
            <button onClick={Increment} className="text-white bg-red-400 p-5 mr-5">Increment</button>
            count: {count}
        </div>
    );
}
