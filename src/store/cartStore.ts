import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface Product {
  id: string;
  title: string;
  price: number;
  image: string;
  weight: number;
  quantity: number;
}

interface CartState {
  items: Product[];
  addItem: (product: Product) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  getTotalItems: () => number;
  getTotalPrice: () => number;
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      addItem: (product) => {
        const currentItems = get().items;
        const existingItem = currentItems.find(item => item.id === product.id);
        
        if (existingItem) {
          set({
            items: currentItems.map(item => 
              item.id === product.id 
                ? { ...item, quantity: item.quantity + product.quantity }
                : item
            )
          });
        } else {
          set({ items: [...currentItems, product] });
        }
      },
      
      removeItem: (productId) => {
        set({ items: get().items.filter(item => item.id !== productId) });
      },
      
      updateQuantity: (productId, quantity) => {
        set({
          items: get().items.map(item => 
            item.id === productId ? { ...item, quantity } : item
          )
        });
      },
      
      clearCart: () => set({ items: [] }),
      
      getTotalItems: () => {
        return get().items.reduce((total, item) => total + item.quantity, 0);
      },
      
      getTotalPrice: () => {
        return get().items.reduce((total, item) => total + (item.price * item.quantity), 0);
      },
    }),
    {
      name: 'cart-storage',
    }
  )
);