import { useState } from "react";
import "./App.css";
import { Header } from "./components/Header";
import { SummaryTable } from "./components/SummaryTable";
import "./styles/global.css";

export function App() {
  return (
    <div className="w-full h-full flex justify-center items-center bg-background ">
      <div className="w-full h-full max-w-5xl px-6 flex flex-col gap-16  bg-background">
        <Header />
        <SummaryTable />
      </div>
    </div>
  );
}
