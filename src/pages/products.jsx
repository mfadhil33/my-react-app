import { Fragment, useState } from "react";
import CardProduct from "../components/Fragments/CardProduct";
import Button from "../components/Elements/Button";
import Counter from "../components/Fragments/Counter";

const getProducts = () => [
  {
    id: 1,
    name: "Sepatu Compass",
    price: 1000,
    image: "/images/fashion-shoes-sneakers.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia nemo nihilaperiam dolore reiciendis porro dolores quasi error eius, repellendus voluptasoptio laudantium quia quisquam rem sit ipsum eveniet ducimus eligendi?Laudantium qui sapiente laboriosam porro! Cumque ut temporibus aperiamblanditiis ipsam. Accusamus velit nostrum rem illum dolores id odio!",
  },
  {
    id: 2,
    name: "Sepatu Nike",
    price: 1000000,
    image: "/images/fashion-shoes-sneakers.jpg",
    description: "loremimpsum asdajsdjkjsjdjaskjdwi",
  },
];

const ProductsPage = () => {
  const products = getProducts();

  const [cart, setCart] = useState([
    {
      id: "1",
      qty: 1,
      image: "/images/fashion-shoes-sneakers.jpg",
    },
  ]);
  const handleLogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    window.location.href = "/login";
  };

  const handleAddToCart = (id) => {
    setCart([
      ...cart,
      {
        id,
        qty: 1,
      },
    ]);
  };

  const email = localStorage.getItem("email");
  return (
    <Fragment>
      <div className="flex justify-end h-20 bg-blue-600 text-white items-center px-10">
        {email}
        <Button variant="ml-5 bg-black" onClick={handleLogout}>
          Logout
        </Button>
      </div>

      <div className="flex justify-center py-5">
        <div className="w-3/4 flex flex-wrap">
          {products.map((product) => (
            <CardProduct key={product.id}>
              <CardProduct.Header image={product.image} />
              <CardProduct.Body title={product.name}>
                {product.description}
              </CardProduct.Body>
              <CardProduct.Footer
                price={product.price}
                id={product.id}
                addToCart={handleAddToCart}
              />
            </CardProduct>
          ))}
        </div>
        <div className="2-1/4">
          <h1 className="text-3xl font-bold text-blue-600">Cart</h1>

          <table className="text-left table-auto border-separate border-spacing-x-5">
            <thead>
              <tr>
                <th>Product</th>
                <th>Prices</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => {
                const product = products.find(
                  (product) => product.id === item.id
                );
                if (!product) return null; // Tambahkan pengecekan ini
                return (
                  <tr key={item.id}>
                    <td>Hello</td>
                    <td>
                      Rp{" "}
                      {product.price.toLocaleString("id-ID", {
                        styles: "currency",
                        currency: "IDR",
                      })}
                    </td>
                    <td>{item.qty}</td>
                    <td>
                      Rp{" "}
                      {(item.qty * product.price).toLocaleString("id-ID", {
                        styles: "currency",
                        currency: "IDR",
                      })}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      <div className="flex w-100 justify-center">
        <Counter></Counter>
      </div>
    </Fragment>
  );
};

export default ProductsPage;
