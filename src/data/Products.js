import saree from "../assets/saree.png";
import lungi from "../assets/lungi 2.jpg";
import veshti from "../assets/vesti.jpg";

const products = [
  {
    id: 1,
    name: "Handloom Cotton Saree",
    price: 1299,
    category: "Sarees",
    image: saree,
    rating: 4.5,
    discount: 10,
    stock: "In Stock",
  },
  {
    id: 2,
    name: "Traditional Cotton Lungi",
    price: 499,
    category: "Lungis",
    image: lungi,
    rating: 4.2,
    discount: 5,
    stock: "In Stock",
  },
  {
    id: 3,
    name: "White Cotton Veshti",
    price: 799,
    category: "Veshtis",
    image: veshti,
    rating: 4.4,
    discount: 8,
    stock: "In Stock",
  },
];

export default products;