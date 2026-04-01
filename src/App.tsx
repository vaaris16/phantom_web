import NavBar from "./components/NavBar";
import { Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home/Home";
import STEMRacing from "./components/pages/STEM_Racing/STEMRacing";
import Team from "./components/pages/Team/Team";
import Sponsors from "./components/pages/Sponsors/Sponsors";
import Community from "./components/pages/Community/Community";

import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <>
      <Analytics></Analytics>
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/stem_racing" element={<STEMRacing />}></Route>
        <Route path="/team" element={<Team />}></Route>
        <Route path="/sponsors" element={<Sponsors />}></Route>
        <Route path="/community" element={<Community />}></Route>
      </Routes>
    </>
  );
}

export default App;
