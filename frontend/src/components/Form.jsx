import React from 'react'
import Button from './Button';
import Input from './Input';

export default function Form({products, setProductName,setQuantity,setAmount,setPayment,AddToArray}) {
  return (
    <div>
      <form>
        <div className="gap-5 flex-1">
          <div className="flex flex-col mb-3">
            <label htmlFor="productName" className="font-bold capitalize">
              select product{" "}
            </label>
            <select
              name="productName"
              id="productName"
              onChange={(e) => setProductName(e.target.value)}
              className="border-2 border-black capitalize p-2"
            >
              <option disabled selected>
                select product
              </option>
              {products && products.map((p) => (
               p.pieces >0 ? <option value={p.productName}>{p.productName}</option> : <option disabled className='text-red-300'>{p.productName} is empty</option>
              ))}
            </select>
          </div>
          <Input
            label="quantity"
            labelText="quantity"
            type="number"
            state={(e) => setQuantity(e.target.value)}
          />
          <Input
            label="amount"
            labelText="amount"
            type="number"
            state={(e) => setAmount(e.target.value)}
          />
          <div className="flex flex-col mt-3">
            <label htmlFor="productName" className="font-bold capitalize">
              select payment method
            </label>
            <select
              name="productName"
              id="productName"
              onChange={(e) => setPayment(e.target.value)}
              className="border-2 border-black"
            >
              <option disabled selected>
                select payment method
              </option>
              <option value="CASH">CASH</option>
              <option value="POS">P.O.S</option>
              <option value="TRANSFER">TRANSFER</option>
            </select>
          </div>
          <Button text="add" action={AddToArray} />
        </div>
      </form>
    </div>
  );
}
