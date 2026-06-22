import { Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import CandidateDetails from "./pages/CandidateDetails";
import UploadResumes from "./pages/UploadResumes";

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Routes>
        <Route
          path="/"
          element={<Dashboard />}
        />

        <Route
          path="/candidate/:id"
          element={<CandidateDetails />}
        />

        <Route
          path="/upload-resumes"
          element={<UploadResumes />}
        />
      </Routes>
    </div>
  );
}

export default App;