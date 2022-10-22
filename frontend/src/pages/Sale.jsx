import React from "react";
import Header from "../components/Header";
import Input from "../components/Input";
import useFetch from "../hooks/useFetch";

export default function Sale() {
  const { data: products, err } = useFetch(
    "http://localhost:4000/view-products"
  );
  return (
    <div>
      <Header />
      <div className="md:flex flex-wrap items-center gap-5">
        <div>
          <p>select product</p>
          <select>
            {products.map((p) => (
              <option value={p.productName}>{p.productName}</option>
            ))}
          </select>
        </div>
        <Input
          label="quantity"
          labelText="quantity"
          name="quantity"
          id="quantity"
          placeholder=''
        />
      </div>
    </div>
  );
}
