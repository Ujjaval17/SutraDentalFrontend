import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
import Footer from "./components/footer/footer";
import ProtectedRoute from "./components/ProtectedRoute";
import ScrollToTop from "./components/ScrollToTop";
import PageLoader from "./components/seo/PageLoader";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home = React.lazy(() => import("./pages/home/home"));
const About = React.lazy(() => import("./pages/about/about"));
const AllTreatments = React.lazy(() => import("./pages/all-treatments/allTreatments"));
const Blogs = React.lazy(() => import("./pages/blogs/blog"));
const BlogDetail = React.lazy(() => import("./pages/blogs/blogDetail"));
const TreatmentDetail = React.lazy(() => import("./pages/all-treatments/treatmentDetail"));
const Login = React.lazy(() => import("./components/login/login"));
const AdminPanel = React.lazy(() => import("./pages/admin-panel/adminPanel"));
const NotFound = React.lazy(() => import("./pages/NotFound/NotFound"));

function App() {
  return (
    <div className="App">
      <Router>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <ScrollToTop />
        <ResponsiveAppBar />
        <main id="main-content" role="main">
          <Suspense fallback={<PageLoader />}>
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
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
        <ToastContainer
          position="top-right"
          autoClose={4000}
          hideProgressBar={false}
          closeOnClick
          pauseOnHover
        />
      </Router>
    </div>
  );
}

export default App;
