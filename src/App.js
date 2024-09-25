import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Main, Header, Footer, Cart, Contacts } from "./components";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/contacts" element={<Contacts />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
