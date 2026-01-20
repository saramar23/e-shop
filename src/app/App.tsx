import { RouterProvider } from "react-router-dom"
import { CartProvider } from "../context/CartContext"
import { ThemeTest } from "../components/ui/ThemeTest"
// import { router } from "./router"

export default function App() {
  return (
    <CartProvider>
      {/* <RouterProvider router={router} /> */}
      <>lol</>
      <ThemeTest />
    </CartProvider>
  )
}
