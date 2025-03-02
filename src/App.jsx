import Home from "./components/Home";
import About from "./components/About";
import Programs from "./components/Programs";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/programs" element={<Programs />}/>
      </Routes>
    </Router>
  );
}
