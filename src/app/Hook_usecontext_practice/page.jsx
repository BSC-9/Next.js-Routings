"use client";
import React, { createContext, useEffect, useState, useContext } from "react";

const NamesContext = createContext(null);

export default function NameList() {
  const [names, setNames] = useState({ firstname: "", lastname: "" });

  useEffect(() => {
    setNames({ firstname: "Balaji", lastname: "Sasank" });
  }, []);

  return (
    <NamesContext.Provider value={names}>
      <OutputNameList />
    </NamesContext.Provider>
  );
}

function OutputNameList() {
  const names = useContext(NamesContext);

  return (
    <div className="text-5xl">
      <p>First Name: {names.firstname}</p>
      <p>Last Name: {names.lastname}</p>
    </div>
  );
}
