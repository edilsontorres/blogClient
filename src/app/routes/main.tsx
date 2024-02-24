import {BrowserRouter, Route, Routes} from "react-router-dom";
import { Dashboard } from "../pages/main";

export const Rotas = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Dashboard/>} />
                <Route />
            </Routes>
        </BrowserRouter>
    );
}