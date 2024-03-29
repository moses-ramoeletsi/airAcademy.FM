import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Schedule from "./components/Schedule/Schedule";
import Advertisements from "./components/Advertising/Advertisements";
import AboutUs from "./components/AboutUs";
import Contacts from "./components/Contacts";
import programsByDay from "./data/Programs";
import WithSubnavigation from "./components/Header/Navbar";
import NewsPage from "./components/News/News";

function App() {
  return (
    <>
      <BrowserRouter>
        <WithSubnavigation />
        <Routes>
          <Route
            exact
            path="/"
            element={<Home programsByDay={programsByDay} />}
          />
          <Route
            path="/schedule"
            element={<Schedule programsByDay={programsByDay} />}
          />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/advertisement" element={<Advertisements />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
