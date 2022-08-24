import { AppRouter } from "./router/AppRouter"
import { AppTheme } from "./theme/AppTheme"

export const TradingApp = () => {
  return (
    <AppTheme>
      <AppRouter />
    </AppTheme>
  )
}
