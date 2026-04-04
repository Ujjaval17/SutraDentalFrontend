import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Welcome from "./pages/welcome";
import "./App.css";
import {
  aboutPattern,
  adminPanelPattern,
  allTreatmentsPattern,
  blogDetailPattern,
  blogsPattern,
  indexPattern,
  loginPattern,
  treatmentDetailPattern,
} from "./Routes";
import ResponsiveAppBar from "./components/header/header";
import Home from "./pages/home/home";
import Footer from "./components/footer/footer";
import About from "./pages/about/about";
import AllTreatments from "./pages/all-treatments/allTreatments";
import Blogs from "./pages/blogs/blog";
import BlogDetail from "./pages/blogs/blogDetail";
import TreatmentDetail from "./pages/all-treatments/treatmentDetail";
import AdminPanel from "./pages/admin-panel/adminPanel";
import Login from "./components/login/login";
import ProtectedRoute from "./components/ProtectedRoute";
import ScrollToTop from "./components/ScrollToTop";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <ResponsiveAppBar />
        <Routes>
          <Route path={indexPattern} element={<Home />} />
          <Route path={aboutPattern} element={<About />} />
          <Route path={blogsPattern} element={<Blogs />} />
          <Route path={allTreatmentsPattern} element={<AllTreatments />} />
          <Route path={blogDetailPattern} element={<BlogDetail />} />
          <Route path={treatmentDetailPattern} element={<TreatmentDetail />} />
          <Route path={loginPattern} element={<Login />} />
          <Route
            path={adminPanelPattern}
            element={
              <ProtectedRoute>
                <AdminPanel />
              </ProtectedRoute>
            }
          />
        </Routes>
        <Footer />
        <ToastContainer position="top-right" autoClose={4000} hideProgressBar={false} closeOnClick pauseOnHover />
      </Router>
    </div>
  );
}

export default App;
