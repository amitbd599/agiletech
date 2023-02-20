import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeOne from "./pages/HomeOne";
import HomeTwo from "./pages/HomeTwo";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<HomeOne />} />
        <Route exact path='/index-2' element={<HomeTwo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
