import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Main, Header, Footer } from "./components";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />}></Route>
        {/* <Route path="/cart" element={}></Route>
    <Route path="/contacts" element={}></Route> */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
