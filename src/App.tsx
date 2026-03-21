import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import "./index.css";
import CarShowCase from "./components/CarShowCase";
import PhantomInfo from "./components/PhantomInfo";
import Engineering from "./components/Engineering";

function App() {
  return (
    <main className="flex flex-col min-h-screen justify-center items-center">
      <NavBar></NavBar>
      <Hero></Hero>
      <div className="flex flex-col justify-center items-center gap-100">
        <CarShowCase></CarShowCase>
        <PhantomInfo></PhantomInfo>
        <Engineering></Engineering>
      </div>
    </main>
  );
}

export default App;
