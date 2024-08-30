import "./App.css";
import Header from "./components/Header";
import Introduce from "./components/Introduce";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Archive from "./components/Archive";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="App">
      <Header />
      <Introduce />
      <AboutMe />
      <Skills />
      <Archive />
      <Projects />
    </div>
  );
}

export default App;
