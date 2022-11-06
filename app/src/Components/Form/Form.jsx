import React, { useContext } from "react";
import Header from "../Header/Header";
import { AuthContent } from "../Context";
import { useState } from "react";
const Form = () => {
  const { islogged, setIslogged } = useContext(AuthContent);

  const [login,setLogin] = useState('')
  const [parol,setParol] = useState('')
  const ochil = (e) => {

    if(login ==='Bekzod2004' && parol === 'b1234'){
      return  (setIslogged(true)
        )
    }
   
  
    e.preventDefault()
  };
  return (
    <div className="form ">
      <Header />
      <h1 className="text-center mt-3">{islogged?'Salom': "Malumotlarni to'gri kiriting"}</h1>
      <form action="" className="p-5" onSubmit={ochil}>
        <input type="text"  onChange={(e)=>setLogin(e.target.value) } className="form-control mt-3" placeholder="Bekzod2004 -deb yozing..." />
        <input type="text"  onChange={ (e)=>setParol(e.target.value)} className="form-control mt-3" placeholder="b1234  -deb yozing..." />
        <button className="btn btn-success mt-5 w-100">Send</button>
      </form>
    </div>
  );
};

export default Form;
