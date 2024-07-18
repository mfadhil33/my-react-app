import { Fragment, useEffect, useRef, useState } from "react";
import CardProduct from "../components/Fragments/CardProduct";
import Button from "../components/Elements/Button";

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

  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const totalPriceRef = useRef(null);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  useEffect(() => {
    const sum = cart.reduce((acc, item) => {
      const product = products.find((product) => product.id === item.id);
      return acc + product.price * item.qty;
    }, 0);
    setTotalPrice(sum);
    localStorage.setItem("cart", JSON.stringify(cart));

    if (totalPriceRef.current) {
      totalPriceRef.current.style.display =
        cart.length > 0 ? "table-row" : "none";
    }
  }, [cart, products]);

  const handleLogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    window.location.href = "/logout";
  };

  const handleAddToCart = (id) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === id ? { ...item, qty: item.qty + 1 } : item
        );
      } else {
        return [...prevCart, { id, qty: 1 }];
      }
    });
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

      <div className="flex justify-center py-4">
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
          <h1 className="text-3xl font-bold text-blue-600 ml-5 mb-2">Cart</h1>

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
                if (!product) return null;
                return (
                  <tr key={item.id}>
                    <td>{product.name}</td>
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
              <tr ref={totalPriceRef}>
                <td colSpan={3}>
                  <b> Total Price</b>
                </td>
                <td>
                  <b>
                    {totalPrice.toLocaleString("id-ID", {
                      styles: "currency",
                      currency: "IDR",
                    })}
                  </b>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Fragment>
  );
};

export default ProductsPage;
