import { useShoppingCart } from "../context/ShoppingCartContext";
import items from "../data/items";
import formatCurrency from "../utilities/formatCurrency";
import { FaTimes } from "react-icons/fa";

interface CartItemProps {
  id: number;
  quantity: number;
}

const CartItem = ({ id, quantity }: CartItemProps) => {
  const { removeFromCart } = useShoppingCart();
  const item = items.find((i) => i.id === id);
  if (item === null) return null;

  return (
    <div className="hstack gap-2">
      <img src={item?.img} className="thumbnail" />
      <div className="me-auto">
        <div>
          {item?.name}{" "}
          {quantity > 1 && (
            <span className="text-muted fs-small">x{quantity}</span>
          )}
        </div>
        <div className="text-muted">{formatCurrency(item?.price)}</div>
      </div>
      <div>{formatCurrency((item?.price ?? 0) * quantity)}</div>
      <button
        className="btn btn-outline-danger"
        onClick={() => removeFromCart(item?.id ?? 0)}
      >
        <FaTimes />
      </button>
    </div>
  );
};

export default CartItem;
