import './Menu.css';

function MenuList({ item_name, image, price, onClick }) {
  return (
    <div className="menu-card">
      <img src={image} alt={item_name} className="menu-image" />
      <h1>{item_name}</h1>
      <h2>{price}</h2>
      <button onClick={onClick}>Add To Cart</button>
    </div>
  );
}

export default MenuList;
