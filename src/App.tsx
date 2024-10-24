import "./App.css";
import Gallery from "./components/Gallery/Gallery";

export default function App() {
  return (
    <div id="page">
      <div>
        <header>
          <h1>Hello Emili!!</h1>
        </header>
        <main>
          <h2>My first line of code</h2>
          <p>Hey</p>
          <h2>My dogs</h2>
          <p>
            they went for a walk they went for a walk they went for a walk they
            went for a walk they went for a walk they went for a walk they went
            for a walk
          </p>
          <Gallery />
          <p>and said woof woof</p>
        </main>
      </div>
      <footer>made by Emili</footer>
    </div>
  );
}
