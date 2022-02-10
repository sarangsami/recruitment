import { Routes, Route } from "react-router-dom";

import Layout from "Layout";
import Login from "pages/Login";
import Dashboard from "pages/Dashboard";

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Layout>
  );
};

export default App;
