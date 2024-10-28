import "./App.css";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import Main from "./layout/Main";

export default function App() {
  return (
    <div id="page">
      <div>
        <Header />
        <Main />
      </div>
      <Footer />
    </div>
  );
}
