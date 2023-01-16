import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Welcome from "./components/Welcome";
import Tutors from "./components/Tutors";
import Advice from "./components/Advice";
import Assignment from "./components/Assignment";
import Manage from "./components/Manage";
import Network from "./components/Network";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const hiddenElements = document.querySelectorAll('.hidden1');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting){
          entry.target.classList.add('show')
        }
      });
    });
    hiddenElements.forEach((el) => observer.observe(el));
    return
  }, [])
  
  return (
    <>
      <div className="bg-black w-full h-full relative scrollbar-hide scroll-smooth overflow-hidden">
        <div className='purple__gradient absolute w-[510px] h-[510px] animate-loop'/>
        <div className='blue__gradient absolute left-0 bottom-96 w-[510px] h-[510px] animate-loop'/>
        <div className='red__gradient absolute right-4 top-[1900px] w-[510px] h-[510px] animate-loop '/>
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
