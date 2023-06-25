import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Dashboard from "./components/templates/Dashboard.jsx";
import Form from "./components/templates/CreateForm.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/tambah" element={<Form />} />
      </Routes>
    </Router>
  );
}

export default App;
