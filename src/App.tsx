import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      
        {/* <Header /> */}
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/about"} element={<AboutUsPage />} />
          <Route path={"/contactus"} element={<ContactUsPage />} />
          <Route path={"/shop"} element={<Specials />} />
          <Route path={"/contactus"} element={<Specials />} />
          <Route path={"/gifts"} element={<RenewPromise />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        {/* <Footer /> */}
      
    </BrowserRouter>
  );
}

export default App;
