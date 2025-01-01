import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import ScrollToTop from "./Components/Elements/ScrollToTop";
import Main from "./Pages/Main";


const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        {/* Default route */}
        <Route path="/" element={<Main />} />
        <Route path="Main" element={<Main />} />
      </Routes>
    </Router>
  );
};

export default App;
