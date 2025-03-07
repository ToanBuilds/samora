"use client";
import { useEffect, useState } from "react";
import { useCart } from "./CartContext"; // Adjust the import path
import { ShoppingCart } from "lucide-react"; // Adjust the import for the icon

const CartButton = () => {
  const { cart } = useCart();
  const [isMounted, setIsMounted] = useState(false);

  // Set isMounted to true after the component mounts
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Only render the cart length after the component has mounted
  if (!isMounted) {
    return (
      <button>
        <ShoppingCart className="h-4 w-4" /> <span className="text-sm items-center">0</span>
      </button>
    );
  }

  return (
    <button>
      <ShoppingCart className="h-4 w-4" />{" "}
      <span className="text-sm items-center">{cart.length > 0 ? cart.length : 0}</span>
    </button>
  );
};

export default CartButton;