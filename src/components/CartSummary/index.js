// Write your code here
import CartContext from '../../context/CartContext'

import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      const count = cartList.reduce(
        (acc, each) => acc + each.quantity * each.price,
        0,
      )
      return (
        <div className="cart-summery">
          <div>
            <h1 className="cart-summery-head">
              Order Total: <span className="cart-summery-span">{count}</span>
            </h1>
            <p className="cart-summery-para">{cartList.length} Items in cart</p>
            <button type="button" className="cart-summery-btn">
              Checkout
            </button>
          </div>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
