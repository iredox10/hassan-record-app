import React, { useContext } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import { useNavigate } from 'react-router-dom'
import { useState } from "react";
import axios from "axios";
import { useAuthContext } from "../hooks/UseAuthContext";
import { AuthContext } from "../../context/AuthContext";

export default function Login() {
  const navigate = useNavigate()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [err, setErr] = useState()
  const {dispatch} = useAuthContext()

  const handleSubmit = async (e)=>{
    e.preventDefault()  
    const res = await axios.post('http://localhost:4000/login',{username,password})
    const user= res.data
    if(!res.status == 200) console.log('error')
    localStorage.setItem('user',JSON.stringify(res.data))
    dispatch({type:'LOGIN',payload: user})
    try {
       if(res.data.user.isAdmin){
        navigate('/admin')
        // navigate('/admin',{state:{user:res.data.user}})
       }else{
         navigate('/sale')
         // navigate('/sale',{state:{user:res.data.user}})
       }
       
    } catch (err) {
      // console.log(err.response.data.err)
      // setErr(err.response.data.err)
      console.log(err)
    }
  }
  return (
    <div >
      <form onSubmit={handleSubmit}>
        {err && <div className="border-2 border-red-600  bg-red-600  capitalize text-white p-2">{err}</div>}
        <div className="mb-3">
          <Input
            label="username"
            labelText="username"
            type="text"
            name="username"
            id="username"
            value={username}
            state={(e) => setUsername(e.target.value.trim())}
          />
          <Input
            label="password"
            labelText="password"
            type="password"
            name="password"
            id="password"
            value={password}
            state={(e) => setPassword(e.target.value)}
          />
          <Button text='login' />
        </div>
      </form>
    </div>
  );
}
