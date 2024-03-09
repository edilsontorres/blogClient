import {BrowserRouter, Route, Routes} from "react-router-dom";
import { Dashboard, Home, NewPost, Update } from "../pages/main";



export const Rotas = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/postagens/" element={<Update />} />
                <Route path="/novopost" element={<NewPost />} />
            </Routes>
        </BrowserRouter>
    );
}