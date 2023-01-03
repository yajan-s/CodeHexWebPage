import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Welcome from "./components/Welcome";
import Tutors from "./components/Tutors";
import Advice from "./components/Advice";
import Assignment from "./components/Assignment";
import Manage from "./components/Manage";
import Network from "./components/Network";


function App() {
  return (
    <>
    <div className="bg-black overflow-hidden">
      <div className="bg-black h-full relative scrollbar-hide scroll-smooth">
        <Navbar/>
        <Hero/>
        <Welcome/>
        <Tutors/>
        <Advice/>
        <Assignment/>
        <Manage/>
        <Network/>
      </div>
    </div>
    </>
  );
}

export default App;
