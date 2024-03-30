import StoreItem from "../components/StoreItem";
import items from "../data/items";

const Store = () => {
  return (
    <div className="row">
      {items.map((item) => (
        <div className="col-lg-4" key={item.id}>
          <StoreItem {...item} />
        </div>
      ))}
    </div>
  );
};

export default Store;
