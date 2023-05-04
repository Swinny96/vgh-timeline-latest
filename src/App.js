import React, { useState, useEffect } from "react";

// Importing loader
import PacmanLoader from "react-spinners/PacmanLoader";
import "./App.scss";
import Timeline from "./components/timeline";
import { Helmet } from "react-helmet";

const App = () => {
  // Loading state
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Wait for 3 seconds
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return isLoading ? (
    // If page is still loading then splash screen
    <div className="splashscreen">
      <PacmanLoader
        isLoading={isLoading}
        size={150}
        className="splash"
        color="rgba(255, 255, 255, 1)"
      />
      <Helmet>
        <title>Video Game History</title>
        <meta
          name="description"
          content="learn about the history of video game home consoles with this
    interactive timeline"
        />
        <meta name="theme-color" content="#008f68" />
      </Helmet>
    </div>
  ) : (
    <div>
      <Helmet>
        <title>Video Game History</title>
        <meta
          name="description"
          content="learn about the history of video game home consoles with this
          interactive timeline"
        />
        <meta name="theme-color" content="#008f68" />
      </Helmet>
      <header>
        <h1 className="heading">Welcome to Video Game History</h1>
        <p className="blerb">
          Learn about the history of video game home consoles with this
          interactive timeline, take a look at all the major Consoles that have
          come out since the birth of console gaming
        </p>
        <p className="blerb">
          See how far the history goes back, what systems were made, who made
          them, how well they sold and the best selling games on the platforms
        </p>
      </header>
      <main className="Content">
        <Timeline />
      </main>
      <footer>
        <small className="footer">
          Created by ©{" "}
          <a
            href="https://www.chrisswinton.co.uk"
            rel="noreferrer"
            target="_blank"
          >
            CSwinton
          </a>
          , Last Updated May 2023
        </small>
      </footer>
    </div>
  );
};

export default App;
