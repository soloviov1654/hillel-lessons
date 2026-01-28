import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./pages/Main";
import Todo from "./pages/Todo";
import Swapi from "./pages/Swapi";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/swapi" element={<Swapi />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
