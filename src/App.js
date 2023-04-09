

import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import JobsList from './Pages/JobsList/JobsList';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/jobs" element={<JobsList />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
