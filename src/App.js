import { Routes, Route } from "react-router-dom";

import Layout from "Layout";
import Login from "pages/Login";
import Candidates from "pages/Candidates";
import CandidateDetails from "pages/CandidateDetails";

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/candidates" element={<Candidates />} />
        <Route path="/candidates/:id" element={<CandidateDetails />} />
      </Routes>
    </Layout>
  );
};

export default App;
