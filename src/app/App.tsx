import { Rotas } from "./site/routes/main";
import { RotasAdmin } from "./admin/routes/main";

export const App = () => {
  return (
    <>
      <Rotas />
      <RotasAdmin />
    </> 
  )
}
