import './Menu.css'

function MenuList({ item_name, image, price }) {
    // Log the item details to the console (optional)
       return (
        <div className="menu-card">
            <img src={image} alt={item_name} className="menu-image" />
            <h1>{item_name}</h1>
            <h2>{price}</h2>
            <button>Add To Cart</button>
        </div>
    );
}

export default MenuList;
