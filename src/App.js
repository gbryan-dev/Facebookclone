import logo from "./logo.svg";
import "./App.css";
import Header from "./COMPONENTS/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./COMPONENTS/Home";
import Watch from "./COMPONENTS/Watch";
import Marketplace from "./COMPONENTS/Marketplace";
import Groups from "./COMPONENTS/Groups";
import Gaming from "./COMPONENTS/Gaming";
import "./STYLESHEETS/Responsive.css";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/watch" element={<Watch />} />
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/groups" element={<Groups />} />
        <Route path="/gaming" element={<Gaming />} />
      </Routes>
    </>
  );
}

export default App;
