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
    <div className="bg-black h-full relative scrollbar-hide">
      <Navbar/>
      <Hero/>
      <Welcome/>
      <Tutors/>
      <Advice/>
      <Assignment/>
      <Manage/>
      <Network/>
    </div>
    </>
  );
}

export default App;
