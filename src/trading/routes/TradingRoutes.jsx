import { Navigate, Route, Routes } from "react-router-dom"
import { TradingPage } from "../pages/TradingPage"
import { Referidos, Retiros } from "../views"


export const TradingRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<TradingPage />} />
            <Route path="/referidos" element={<Referidos />} />
            <Route path="/retiros" element={<Retiros />} />

            <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
    )
}
