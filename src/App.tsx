import NavBar from "./components/NavBar";
import { Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home/Home";
import STEMRacing from "./components/pages/STEM_Racing/STEMRacing";
import Team from "./components/pages/Team/Team";

function App() {
  return (
    <>
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/stem_racing" element={<STEMRacing />}></Route>
        <Route path="/team" element={<Team />}></Route>
      </Routes>
    </>
  );
}

export default App;
