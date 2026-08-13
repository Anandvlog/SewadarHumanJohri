import { useEffect, useRef, useState } from "react";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

import Home from "./components/pages/Home";
import About from "./components/pages/About";
import History from "./components/pages/History";
import Gallery from "./components/pages/Gallery";
import Activities from "./components/pages/Activities";
import Timings from "./components/pages/Timings";
import Contact from "./components/pages/Contact";

// import "./styles/styles.css";

import './App.css'



const App = () => {
  const [page, setPage] = useState("home");
  const topRef = useRef(null);

  useEffect(() => {
    // Your Google fonts logic
  }, []);

  const go = (id) => {
    setPage(id);

    if (topRef.current) {
      topRef.current.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  const renderPage = () => {
    switch (page) {
      case "about":
        return <About />;

      case "history":
        return <History />;

      case "gallery":
        return <Gallery />;

      case "activities":
        return <Activities />;

      case "timings":
        return <Timings />;

      case "contact":
        return <Contact />;

      default:
        return <Home go={go} />;
    }
  };

  return (
    <div className="site" ref={topRef}>
      <Navbar active={page} go={go} />

      <main>
        {renderPage()}
      </main>

      <Footer go={go} />
    </div>
  );
};

export default App;