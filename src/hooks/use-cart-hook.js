import  { useState } from "react";



const useCartHook = () => {

    const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

   return {cartIsShown, showCartHandler, hideCartHandler};
}

export default useCartHook;