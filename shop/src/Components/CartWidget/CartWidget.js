import './CartWidget.css'
import cart from './assets/img/cart.svg'



const CartWidget = () => {

return(
<div class="cart__container">
        <img class="cartLogo" src={cart} alt="cart" />
        <h5>0</h5>
</div>
)

}

export default CartWidget;