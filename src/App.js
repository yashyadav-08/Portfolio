import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";
import Skills from "./components/Skills/Skills";
import Works from "./components/Works/Works";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";


function App() {
  return (
    <div className="App">
           {/* Navbar */}
          <Navbar />
          {/* Intro Part */}
          <Intro />
          {/* Skills Part */}
          <Skills />
          {/* Works Part */}
          <Works />
          {/* Contact Part */}
          <Contact />
          {/* Footer Part */}
          <Footer />
    </div>
  );
}

export default App;
