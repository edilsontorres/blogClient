import {BrowserRouter, Route, Routes} from "react-router-dom";
import { Dashboard, Home, NewPost, Update, ReadingPage } from "../pages/main";



export const Rotas = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/postagens/:id" element={<Update />} />
                <Route path="/novopost" element={<NewPost />} />
                <Route path="/titulo-post/:id" element={< ReadingPage />} />
            </Routes>
        </BrowserRouter>
    );
}