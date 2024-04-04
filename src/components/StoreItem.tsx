import { useShoppingCart } from "../context/ShoppingCartContext";
import formatCurrency from "../utilities/formatCurrency";

interface Props {
  id: number;
  name: string;
  price: number;
  img: string;
}

const StoreItem = ({ id, name, price, img }: Props) => {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();
  const quantity = getItemQuantity(id);
  return (
    <div className="card mb-4">
      <img src={img} className="card-img-top object-fit-cover" />
      <div className="card-body">
        <div className="hstack my-1">
          <h5 className="card-title">{name}</h5>
          <p className="card-text text-muted ms-auto">
            {formatCurrency(price)}
          </p>
        </div>
        <div className="mt-3">
          {quantity === 0 ? (
            <button
              className="btn btn-primary w-100"
              onClick={() => increaseCartQuantity(id)}
            >
              Add to Cart
            </button>
          ) : (
            <div className="vstack gap-3">
              <div className="hstack mx-auto">
                <button
                  className="btn btn-primary"
                  onClick={() => decreaseCartQuantity(id)}
                >
                  -
                </button>
                <p className="m-0 p-2 fs-5">
                  <strong>{quantity}</strong> in Cart
                </p>
                <button
                  className="btn btn-primary"
                  onClick={() => increaseCartQuantity(id)}
                >
                  +
                </button>
              </div>
              <button
                className="btn btn-danger"
                onClick={() => removeFromCart(id)}
              >
                Remove
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default StoreItem;
