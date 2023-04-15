import "./App.scss";
import Timeline from "./components/timeline";

function App() {
  return (
    <div>
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
        <small className="footer">Created by © CSwinton, All rights reserved</small>
      </footer>
    </div>
  );
}

export default App;
