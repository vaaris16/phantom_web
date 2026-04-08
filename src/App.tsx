import { Analytics } from "@vercel/analytics/react";

import NavBar from "./components/NavBar";
import { Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home/Home";
import STEMRacing from "./components/pages/STEM_Racing/STEMRacing";
import Team from "./components/pages/Team/Team";
import Sponsors from "./components/pages/Sponsors/Sponsors";
import Scroll from "./components/Scroll";
import About from "./components/pages/About/About";
import CursorEffect from "./components/Cursor";

function App() {
  return (
    <>
      <Scroll></Scroll>
      <NavBar></NavBar>
      <CursorEffect></CursorEffect>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/stem_racing" element={<STEMRacing />}></Route>
        <Route path="/team" element={<Team />}></Route>
        <Route path="/sponsors" element={<Sponsors />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>

      <Analytics />
    </>
  );
}

export default App;
