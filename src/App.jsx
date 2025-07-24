import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hero from "./Component/Hero";
import Projects from "./Component/Projects";
import Contact from "./Component/Contact";
import NotFound from "./Component/NotFound"

function App() {
  return (
    <BrowserRouter>
      <div className="bg-[#f4f4f4] min-h-screen">
        <Routes>
          <Route path="/" element={<Hero/>} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/ongoing" element={<NotFound />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
