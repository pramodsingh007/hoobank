import { logo,close,menu } from "../assets/index";
import Hamburger from "../UI/Hamburger";
import NavItems from "../components/NavItems";
import { useState } from "react";
import {motion} from 'framer-motion';
import Cancle from "../UI/Cancle";

function Navbar() {
  const [show,set] = useState('invisible')
  const [animat,setAnimation] = useState()
  const showMenu = ()=>{
    set(show ==='invisible'?'visible':'invisible')
    if(show ==='invisible'){

      setAnimation({y:-60})
    }
    else if(show === 'visible'){
      setAnimation('')
    }
    
  }

  return (
    <>
      <nav className="flex  justify-between  lg:mr-20 lg:ml-20 max-sm:mr-8 sm:mr-8 sm:ml-8 md:mr-20 md:ml-20 max-sm:ml-8 mt-6 mb-16">
        <img src={logo} className=" w-32" alt="" />
        <ul className="text-white flex space-x-12 sm:hidden max-sm:hidden md:flex lg:flex ">
          <NavItems></NavItems>
        </ul>
        <span className=" lg:hidden sm:block md:hidden max-sm:block " onClick={showMenu}>
          {show==='invisible'&&<Hamburger img={menu}></Hamburger>}
          {show==='visible'&& <Cancle img={close}/>}
        </span>

        <motion.div animate={animat} transition={{duration:0.3}}  className={`flex  z-10 md:invisible lg:invisible  absolute top-32 right-0 p-6   min-w-[140px]  sidebar   ${show}  `}>
          <ul className={`list-none flex flex-col justify-end items-center flex-1 text-white space-y-4 p-8 rounded-lg bg-slate-700 `}>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="#features">Features</a>
            </li>
            <li>
              <a href="#cards">Product</a>
            </li>
            <li>
              <a href="#clients">Clients</a>
            </li>
          </ul>
        </motion.div>
      </nav>
    </>
  );
}

export default Navbar;
