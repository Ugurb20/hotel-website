import "./App.css";
import Header from "./header/header";
import Row1 from "./rows/row1/row1";
import Row2 from "./rows/row2/row2";
import Footer from "./footer/footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Row1 />
      <Row2 />
      <Footer />
    </div>
  );
}

export default App;
