import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Schedule from "./components/Schedule/Schedule";
import Advertisements from "./components/Advertising/Advertisements";
import programsByDay from "./data/Programs";
import WithSubnavigation from "./components/Header/Navbar";
import NewsPage from "./components/News/News";
import AboutUs from "./components/AboutUs/AboutUs";
import Home from "./components/Home/Home";
import ContactPage from "./components/Contacts/Contacts";

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
          <Route path="/contacts" element={<ContactPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
