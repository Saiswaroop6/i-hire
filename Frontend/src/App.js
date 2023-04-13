import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import JobsList from "./Pages/JobsList/JobsList";
import LandingPage from "./Pages/LandingPage/LandingPage";
import OurStory from "./Pages/AboutUs/AboutUs";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<LandingPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/jobs" element={<JobsList />} />
        <Route path="/about-us" element={<OurStory />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
