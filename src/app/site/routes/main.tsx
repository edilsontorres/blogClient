import {BrowserRouter, Route, Routes} from "react-router-dom";
import { Home, ReadingPage } from "../pages/main";

export const Rotas = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/:slug" element={< ReadingPage />} />
            </Routes>
        </BrowserRouter>
    );
}