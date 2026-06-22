import { createBrowserRouter } from "react-router-dom";
import Upload from "./pages/Upload";
import Search from "./pages/SearchPage";
import CandidateDetails from "./pages/Candidates";

export const router = createBrowserRouter([
    { path: "/", element: <Upload /> },
    { path: "/search", element: <Search /> },
    { path: "/candidate/:id", element: <CandidateDetails /> }
]);