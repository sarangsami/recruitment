import { Routes, Route } from "react-router-dom";

import Layout from "Layout";
import Login from "pages/Login";
import Candidates from "pages/Candidates";

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/candidates" element={<Candidates />} />
    
      </Routes>
    </Layout>
  );
};

export default App;
