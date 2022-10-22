import React from "react";
import Button from "../components/Button";
import Header from "../components/Header";
import useFectch from "../hooks/useFetch";
import {Link} from 'react-router-dom'

export default function Home() {
  const { data, err } = useFectch("http://localhost:4000/view-products");
  return (
    <>
      <Header />
      <div className='p-5 flex gap-4'>
        <Link to="/products">
          <Button text="products page" />
        </Link>
        <Link to="/sale">
          <Button text="sale page" />
        </Link>
      </div>
    </>
  );
}
