import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Welcome from "./pages/welcome";
import { aboutPattern, adminPanelPattern, allTreatmentsPattern, blogDetailPattern, blogsPattern, indexPattern, treatmentDetailPattern } from "./Routes";
import ResponsiveAppBar from "./components/header/header";
import Home from "./pages/home/home";
import Footer from "./components/footer/footer";
import About from "./pages/about/about";
import AllTreatments from "./pages/all-treatments/allTreatments";
import Blogs from "./pages/blogs/blog";
import BlogDetail from "./pages/blogs/blogDetail";
import AdminPanel from "./pages/admin-panel/adminPanel";

function App() {
  return (
    <div className="App">
      <Router>
      <ResponsiveAppBar />
        <Routes>
          <Route path={indexPattern} element={<Home />} />
          <Route path={aboutPattern} element={<About />} />
          <Route path={blogsPattern} element={<Blogs />} />
          <Route path={allTreatmentsPattern} element={<AllTreatments />} />
          <Route path={blogDetailPattern} element={<BlogDetail/>}/>
          <Route path={adminPanelPattern} element={<AdminPanel/>}/>
        </Routes>
      <Footer />
      </Router>
    </div>
  );
}

export default App;
