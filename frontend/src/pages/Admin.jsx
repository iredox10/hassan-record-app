import React from "react";
import Button from "../components/Button";
import Header from "../components/Header";
import useFectch from "../hooks/useFetch";
import {Link, useLocation} from 'react-router-dom'
import { Route } from "react-router-dom";

export default function Home() {
  const { data, err } = useFectch("http://localhost:4000/view-products");
  const {state} =useLocation()
  const {user} = state
  return (
    <>
    <Header text={`${user.username}`} />
    
      <div className='p-5 flex gap-4 justify-center'>
        <Link to="/products">
          <Button text="products page" />
        </Link>
        <Link to="/sale">
          <Button text="sale page" />
        </Link>
        <Link to="/stats">
          <Button text="stats" />
        </Link>
        <Link to="/manage-employers">
          <Button text="manage employer" />
        </Link>
      </div>
    </>
  );
}
