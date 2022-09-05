import { Navigate, Route, Routes } from "react-router-dom"
import { TradingPage } from "../pages/TradingPage"
import { Referidos, Retiros } from "../views"
import { LicenciasAdmin } from "../views/LicenciasAdmin"
import { RetirosAdmin } from "../views/RetirosAdmin"


export const TradingRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<TradingPage />} />
            <Route path="/referidos" element={<Referidos />} />
            <Route path="/retiros" element={<Retiros />} />
            <Route path="/retirosAdmin/:uid" element={<RetirosAdmin />} />
            <Route path="/licenciasAdmin/:uid" element={<LicenciasAdmin />} />

            <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
    )
}
