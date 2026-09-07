import { useRef, useState, useEffect } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import Sidebar from "./components/Sidebar/Sidebar";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import LanguageSelector from "./components/LanguageSelector/LanguageSelector";
import { Container } from "react-bootstrap";
import AboutMe from "./components/AboutMe/AboutMe";
import JobExperience from "./components/JobExperience/JobExperience";
import Education from "./components/Education/Education";
import NameTitle from "./components/NameTitle/NameTitle";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import i18n from "./i18n";



const RouteTransitions = () => {
  let location = useLocation();
  const nodeRef = useRef(null);
  return (
    <TransitionGroup component={null}>
      <CSSTransition
        key={location.pathname}
        timeout={400}
        classNames="fade"
        nodeRef={nodeRef}
      >
        <div className="page-container">
          <div ref={nodeRef} className="route-wrapper">
            <Routes location={location}>
              <Route path="/OnlineResume/" element={<AboutMe />} />
              <Route
                path="/OnlineResume/job_experience"
                element={<JobExperience />}
              />
              <Route path="/OnlineResume/education" element={<Education />} />
            </Routes>
          </div>
        </div>
      </CSSTransition>
    </TransitionGroup>
  );
};

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <Router>
      <div style ={{position: 'fixed', top: '15px', right: '15px', zIndex: 1050, display: 'flex', gap: '10px'}}>
        <button onClick={toggleTheme} style={{background: 'var(--sidebar-bg)', color: 'var(--text-color)', border: '1px solid var(--accent-bg)', borderRadius: '5px', padding: '5px 10px', cursor: 'pointer'}}>
          {theme === "light" ? <FaMoon /> : <FaSun />}
        </button>
        <LanguageSelector
          selectedLanguage={selectedLanguage}
          setSelectedLanguage={setSelectedLanguage}
        />
      </div>
      {/* Hamburger button - visible only on mobile */}
      <button
        className="hamburger-btn"
        onClick={toggleSidebar}
        aria-label="Toggle menu"
      >
        {sidebarOpen ? <IoClose size={24} /> : <RxHamburgerMenu size={24} />}
      </button>
      {/* Backdrop for mobile sidebar */}
      <div
        className={`sidebar-backdrop ${sidebarOpen ? "open" : ""}`}
        onClick={closeSidebar}
      />
      <div className="app-wrapper">
        <div className={`sidebar-container ${sidebarOpen ? "open" : ""}`}>
          <Sidebar isOpen={true} onClose={closeSidebar} />
        </div>
        <Container>
          <div className="name-title" style={{ flex: "0 0 auto", height: "auto" }}>
            <NameTitle selectedLanguage={selectedLanguage} />
          </div>
          <RouteTransitions />
          {/* <div className="text-center bottom-0">
              Made with ♥ by José Figueroa
            </div> */}
        </Container>
      </div>
    </Router>
  );
}
export default App;
