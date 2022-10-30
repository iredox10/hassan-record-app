import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import useFectch from "../hooks/useFetch";
import Header from "../components/Header";

export default function Products() {
  const { data: products, err } = useFectch(
    "http://localhost:4000/view-products"
  );

  // const [product,setProduct] = useState('')
  const [productName, setProductName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [pieces, setPieces] = useState("");
  const [amount, setAmount] = useState("");

  const handlesubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:4000/add-product", {
        productName,
        quantity,
        pieces,
        amount,
      });
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Header />
      <div className="md:grid grid-cols-6 gap-5 p-5">
        <div className="md:flex flex-wrap gap-5 col-span-4 col-span-end-4">
          {products.map((p) => (
            <div key={p._id} className='shadow-lg p-4 '>
              <p>
                <span className="font-bold capitalize">product name: </span>
                {p.productName}
              </p>
              <p>
                <span className="font-bold capitalize">quantity: </span>{" "}
                {p.quantity}
              </p>
              <p>
                <span className="font-bold capitalize">pieces remaining: </span>{" "}
                {p.pieces}
              </p>
              <p>
                <span className="font-bold capitalize">amount: </span>{" "}
                {p.amount}
              </p>
              <Link to={`/transactions/${p._id}`}>
                <Button text="view transactions" />
              </Link>
            </div>
          ))}
        </div>

        <form
          onSubmit={handlesubmit}
          className="col-span-start-4 col-span-end-5 "
        >
          <h1 className="font-bold">Add Product</h1>
          <div className="flex flex-col w-full">
            <Input
              label="productName"
              labelText={"productName"}
              type="text"
              name="productName"
              id="productName"
              placeholder=""
              state={(e) => setProductName(e.target.value)}
            />
            <Input
              label="quantity"
              labelText={"quantity"}
              type="number"
              name="quantity"
              id="quantity"
              placeholder=""
              state={(e) => setQuantity(e.target.value)}
            />
            <Input
              label="pieces"
              labelText={"pieces"}
              type="number"
              name="pieces"
              id="pieces"
              placeholder=""
              state={(e) => setPieces(e.target.value)}
            />
            <Input
              label="amount"
              labelText={"amount"}
              type="text"
              name="amount"
              id="amount"
              placeholder=""
              state={(e) => setAmount(e.target.value)}
            />
            <Button text="add product" />
          </div>
        </form>
      </div>
    </>
  );
}
