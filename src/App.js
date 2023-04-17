import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar.js";
import Home from "./pages/Home.js";
import Index from "./pages/Index.js";
import New from "./pages/New.js";
import Show from "./pages.js"
import Edit from "./pages/Home.js";
import FourOFour from "./pages/FourOFour.js"; 

function App() {
    return (
      <div>
        <BrowserRouter>
          <NavBar />
          <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/logs" element={<Index />} />
            <Route path="/logs/new" element={<New />} />
            <Route path="/logs/:index" element={<Show />} />
            <Route path="/logs/:index/edit" element={<Edit />} />
            <Route path="*" element={<FourOFour />} />
          </Routes>
        </main>
      </BrowserRouter>
</div >
    )
  }

export default App;
