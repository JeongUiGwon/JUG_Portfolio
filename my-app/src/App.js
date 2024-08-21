import "./App.css";
import Header from "./components/Header";
import Introduce from "./components/Introduce";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="App">
      <Header />
      <Introduce />
      <AboutMe />
      <Skills />
    </div>
  );
}

export default App;
