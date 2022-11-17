import React from "react";
import useFectch from "../hooks/useFetch";
import { useParams } from "react-router-dom";
import { useEffect,useState } from "react";
import axios from "axios";
import Header from "../components/Header";
import PTag from "../components/PTag";
export default function Products() {
  const { id } = useParams();

  const [transactions, setTransactions] = useState([])

  useEffect(() => {
    const fetch = async () => {
      try{
        const res = await axios("http://localhost:4000/view-product/" + id);
        setTransactions(res.data.transactions);
        console.log(res.data.transactions) 
      }catch(err){
        console.log(er)
      }
    };
    fetch()
  },[id]);

  return (
    <>
    <Header />
      <div className='flex gap-10 flex-wrap p-5'>
        {transactions.length <= 0 ? (
          <div className="text-center p-4 capitalize font-extrabold text-3xl">
            no transaction yet
          </div>
        ) :(
          transactions.map((t) => (
            <div key={t._id} className="shadow-lg p-4 border-2 rounded-lg bg-gray-200 border-red-500">
              <PTag span="product name" text={t.productName} />
              <PTag span="quantity" text={t.quantity} />
              <PTag span="amount" text={t.amount} />
              <PTag span="payment method" text={t.payment} />
              <PTag span="employer" text={t.employer} />
              <PTag span="date" text={t.createdAt} />
            </div>
          ))
        )}
      </div>
    </>
  );
}
