import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import AdminLogin from "./pages/AdminLogin";
import StudentLogin from "./pages/StudentLogin";
import StudentDashboard from "./pages/StudentDashboard";
import Exam from "./pages/Exam";
import Camera from "./pages/Camera";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/student" element={<StudentLogin />} />

        <Route path="/student/dashboard" element={<StudentDashboard />} />
        <Route path="/student/exam" element={<Exam />} />
        <Route path="/student/camera" element={<Camera />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
