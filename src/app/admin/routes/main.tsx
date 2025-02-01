import {BrowserRouter, Route, Routes} from "react-router-dom";
import { Dashboard, Update, NewPost } from "../pages/main";


export const RotasAdmin = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/postagens/:slug" element={<Update />} />
                <Route path="/novopost" element={<NewPost />} />
            </Routes>
        </BrowserRouter>
    );
}