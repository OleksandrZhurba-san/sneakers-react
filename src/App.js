import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Header, Footer, CartList, Contacts } from "./components";
import { Main } from "./pages";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/cart" element={<CartList />}></Route>
        <Route path="/contacts" element={<Contacts />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
