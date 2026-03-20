import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import "./index.css";
import CarShowCase from "./components/CarShowCase";

function App() {
  return (
    <main className="flex flex-col min-h-screen justify-center items-center">
      <NavBar></NavBar>
      <Hero></Hero>
    </main>
  );
}

export default App;
