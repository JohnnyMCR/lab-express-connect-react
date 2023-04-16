import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Index from "./pages/Index";
import New from "./pages/New";
import 

function App() {
  return (
    <div></div>
    <BrowserRouter></BrowserRouter>
    <NavBar></NavBar>
<Route path="/" element={<Home />} />
<Route path="/logs" element={<Index />} />
<Route path="/logs/new" element={<Home />} />
<Route path="/logs/:index" element={<Show />} />
<Route path="/logs/:index/edit" element={<Home />} />

export default App;
