
import { useContext, useEffect } from "react";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./Routes/Home";
import Contact from "./Routes/Contact";
import Detail from "./Routes/Detail";
import { Route, Routes } from "react-router-dom";
import { routes } from "./Components/utils/routes";
import { ContextGlobal } from "./Components/utils/global.context";
import Favs from "./Routes/Favs";


function App() {

  const { state } = useContext(ContextGlobal);

  useEffect(() => {
    document.body.className = state.theme; // Cambia la clase del body
  }, [state.theme]);

  return (
      <div className="App">
        <Navbar />
        <Routes>
        <Route path={routes.home} element={<Home />} />
        <Route path={routes.contact} element={<Contact />} />
        <Route path={routes.detail + ":id"} element={<Detail />} />
        <Route path={routes.favs} element={<Favs />} />
        <Route
          path={routes.notFound}
          element={<h1>Error 404 - Page not Found</h1>}
        />
      </Routes>
      <Footer/>
      </div>
  );
}

export default App;
