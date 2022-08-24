import { Navigate, Route, Routes } from "react-router-dom"
import { TradingPage } from "../pages/TradingPage"


export const TradingRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<TradingPage />} />

            <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
    )
}
