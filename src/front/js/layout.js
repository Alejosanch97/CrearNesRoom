import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { BackendURL } from "./component/backendURL";

import { Home } from "./pages/home";
import { Demo } from "./pages/demo";
import { Single } from "./pages/single"; // Mantén esto si lo sigues usando
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Details } from "./component/details"; // Tu componente Details
import { Footer } from "./component/footer";

// Crea tu primer componente
const Layout = () => {
    // El basename se usa cuando tu proyecto se publica en un subdirectorio y no en la raíz del dominio
    // Puedes establecer el basename en el archivo .env ubicado en la raíz de este proyecto, Ej: BASENAME=/react-hello-webapp/
    const basename = process.env.BASENAME || "";

    if(!process.env.BACKEND_URL || process.env.BACKEND_URL == "") return <BackendURL/ >;

    return (
        <div>
            <BrowserRouter basename={basename}>
                <ScrollToTop>
                    <Navbar />
                    <Routes>
                        <Route element={<Home />} path="/" />
                        <Route element={<Demo />} path="/demo" />
                        {/* Ruta dinámica para el componente Details: el :articleSlug captura el valor de la URL */}
                        <Route element={<Details />} path="/details/:articleSlug" />
                        <Route element={<Single />} path="/single/:theid" /> {/* Mantén esto si lo sigues usando */}
                        <Route element={<h1>Not found!</h1>} />
                    </Routes>
                    <Footer />
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);
