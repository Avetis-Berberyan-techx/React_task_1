import { useState } from "react";
import "./App.css";
import Header from "./components/header/header";
import ProfileCards from "./components/profileCards/profileCards";

function App() {
  return (
    <>
      <Header />
      <ProfileCards />
    </>
  );
}

export default App;
