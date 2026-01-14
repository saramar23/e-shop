import {
    createContext,
    useCallback,
    useEffect,
    useMemo,
    useState,
    type ReactNode,
} from "react"
import type { CartContextValue, CartItem } from "../types/cart"
import type { Product } from "../types/product"

const CART_STORAGE_KEY = "cart"

export const CartContext = createContext<CartContextValue | undefined>(undefined)

interface CartProviderProps {
    children: ReactNode
}

export function CartProvider({ children }: CartProviderProps) {
    const [items, setItems] = useState<CartItem[]>([])

    /* ------------------ Load from localStorage ------------------ */
    useEffect(() => {
        const storedCart = localStorage.getItem(CART_STORAGE_KEY)
        if (storedCart) {
            setItems(JSON.parse(storedCart))
        }
    }, [])

    /* ------------------ Persist to localStorage ------------------ */
    useEffect(() => {
        localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items))
    }, [items])

    /* ------------------ Actions ------------------ */

    const addToCart = useCallback((product: Product) => {
        setItems((prev) => {
            const existing = prev.find(
                (item) => item.product.id === product.id
            )

            if (existing) {
                return prev.map((item) =>
                    item.product.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                )
            }

            return [...prev, { product, quantity: 1 }]
        })
    }, [])

    const removeFromCart = useCallback((productId: number) => {
        setItems((prev) =>
            prev.filter((item) => item.product.id !== productId)
        )
    }, [])

    const updateQuantity = useCallback(
        (productId: number, quantity: number) => {
            if (quantity <= 0) {
                removeFromCart(productId)
                return
            }

            setItems((prev) =>
                prev.map((item) =>
                    item.product.id === productId
                        ? { ...item, quantity }
                        : item
                )
            )
        },
        [removeFromCart]
    )

    const clearCart = useCallback(() => {
        setItems([])
    }, [])

    /* ------------------ Derived State ------------------ */

    const totalItems = useMemo(
        () => items.reduce((sum, item) => sum + item.quantity, 0),
        [items]
    )

    const subtotal = useMemo(
        () =>
            items.reduce(
                (sum, item) => sum + item.product.price * item.quantity,
                0
            ),
        [items]
    )

    const value: CartContextValue = {
        items,
        totalItems,
        subtotal,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
    }

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
}


