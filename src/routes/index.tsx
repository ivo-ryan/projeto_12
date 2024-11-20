import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Dasboard } from "../pages/dashboard"
import { IndMovie } from "../pages/indMovie"
import { MoviePlay } from "../pages/moviePlay"
import { PrivacyPolicy } from "../pages/privacyPolicy"

export const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Dasboard/>}/>
                <Route path="/:name" element={<IndMovie/>} />
                <Route path="/:name/play" element={<MoviePlay/>} />
                <Route path="/privacy-policy" element={<PrivacyPolicy/>} />
            </Routes>
        </BrowserRouter>
    )
}