import "./App.css";
import Spinner from "react-bootstrap/Spinner";
import Row1 from "./rows/row1/row1";
import Row2 from "./rows/row2/row2";
import Footer from "./footer/footer";
import React, { Suspense } from "react";
import Mynav from "./header/nav/nav";
const Header = React.lazy(() => import("./header/header.js"));

function App() {
  return (
    <div className="App">
      <Mynav />
      <Suspense
        fallback={
          <Spinner
            animation="border"
            variant="primary"
            className="my-spinner"
          />
        }
      >
        <Header />
      </Suspense>
      <Row1 />
      <Row2 />
      <Footer />
    </div>
  );
}

export default App;
