import React from "react";
import "./PageLoader.scss";

const PageLoader = () => (
  <div className="page-loader" role="status" aria-live="polite" aria-label="Loading page">
    <span className="page-loader__spinner" />
  </div>
);

export default PageLoader;
