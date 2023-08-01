import { useContext, useEffect, useState } from 'react';
import CartContext from '../../store/cart-context';
import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';

const HeaderCartButton = (props) => {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
  const cartCtx = useContext(CartContext);

  const { items } = cartCtx;

  const numberOfCartItems = cartCtx.items.reduce((currentNumber, item) => {
      return currentNumber + item.amount;
  }, 0); //Outputs amount per item type

  /*const numberOfCartItems = cartCtx.items.length;
   You add every item as a new item to the list 
   Instead I want to add 1 item but the amount of that item to e.g 3 
   So then the length would be wrong because it is just 1 item in the cart items array but there are actually 3 meals inside of it.
   Simply because in our cart items array we 'll have objects for every kind of meal we store the amount of meals of that type as part of the cart
  */
   const btnClasses = `${classes.button} ${btnIsHighlighted ? classes.bump : ''}`;

   useEffect(() => {
     if (items.length === 0) {
       return;
     }
     setBtnIsHighlighted(true);
 
     const timer = setTimeout(() => {
       setBtnIsHighlighted(false);
     }, 300);
 
     return () => {
       clearTimeout(timer);
     };
   }, [items]);
   
  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
