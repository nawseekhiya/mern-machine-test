import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./views/Login";
import Dashboard from "./views/Dashboard";
import Agents from "./views/Agents";
import Upload from "./views/Upload";
import Distribution from "./views/Distribution";
import MainLayout from "./layouts/MainLayout";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<MainLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/agents" element={<Agents />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/distribution" element={<Distribution />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
