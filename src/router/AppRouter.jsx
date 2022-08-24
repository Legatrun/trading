import { Route, Routes, Navigate } from 'react-router-dom';
import { AuthRoutes } from '../auth/routes/AuthRoutes';

import { useCheckAuth } from '../hooks';
import { TradingRoutes } from '../trading/routes/TradingRoutes';
import { CheckingAuth } from '../ui';


export const AppRouter = () => {

    const status = useCheckAuth()

    if (status === 'checking') {
        return <CheckingAuth />
    }

    return (
        <Routes>

            {
                (status === 'authenticated')
                    ? <Route path="/*" element={<TradingRoutes />} />
                    : <Route path="/auth/*" element={<AuthRoutes />} />
            }


            <Route path='/*' element={<Navigate to='/auth/home' />} />

        </Routes>
    )
}
