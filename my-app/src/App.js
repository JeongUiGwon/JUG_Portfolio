import "./App.css";
import Header from "./components/Header";
import Introduce from "./components/Introduce";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Archive from "./components/Archive";

function App() {
  return (
    <div className="App">
      <Header />
      <Introduce />
      <AboutMe />
      <Skills />
      <Archive />
    </div>
  );
}

export default App;
