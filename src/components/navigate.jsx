"use client"
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function Navigation() {
    
    const [onload, setOnload] = useState(false);

  useEffect(() => {
    if(onload === false){
        console.log("navigation loaded");  
        setOnload(true); 
    }
},[onload]);


    return (
    <div className="flex items-center justify-center">
      <div className="flex space-x-4">

        <Link href="/Static">
        <button className="bg-red-400 text-xl px-3 py-3">Static</button>
        </Link>

        <Link href="/Dynamic">
        <button className="bg-green-400 text-xl px-3 py-3">Dynamic</button>
        </Link>

        <Link href="/Catch_All">
        <button className="bg-blue-400 text-xl px-3 py-3">Call Back</button>
        </Link>

      </div>
    </div>
  );
}
