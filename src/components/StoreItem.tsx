interface Props {
  id: number;
  name: string;
  price: number;
  img: string;
}

const StoreItem = ({ name, price, img }: Props) => {
  return (
    <div className="card">
      <img src={img} className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{price}$</p>
        <a href="#" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
};

export default StoreItem;
