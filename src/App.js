import { BrowserRouter, Routes, Route } from "react-router-dom";
import Demo from "./demo/Demo";
import About from "./pages/About";
import Blog from "./pages/Blog";
import BlogDetails from "./pages/BlogDetails";
import CaseStudyDetails from "./pages/CaseStudyDetails";
import Contact from "./pages/Contact";
import HomeFour from "./pages/HomeFour";
import HomeOne from "./pages/HomeOne";
import HomeThree from "./pages/HomeThree";
import HomeTwo from "./pages/HomeTwo";
import Service from "./pages/Service";
import ServiceDetails from "./pages/ServiceDetails";
import Team from "./pages/Team";
import TeamDetails from "./pages/TeamDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Demo />} />
        <Route exact path='/index-1' element={<HomeOne />} />
        <Route exact path='/index-2' element={<HomeTwo />} />
        <Route exact path='/index-3' element={<HomeThree />} />
        <Route exact path='/index-4' element={<HomeFour />} />
        <Route exact path='/about' element={<About />} />
        <Route exact path='/blog' element={<Blog />} />
        <Route exact path='/blog-details' element={<BlogDetails />} />
        <Route
          exact
          path='/case-study-details'
          element={<CaseStudyDetails />}
        />
        <Route exact path='/contact' element={<Contact />} />
        <Route exact path='/service' element={<Service />} />
        <Route exact path='/service-details' element={<ServiceDetails />} />
        <Route exact path='/team' element={<Team />} />
        <Route exact path='/team-details' element={<TeamDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
