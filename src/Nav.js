import React,{useState,useEffect} from "react";
import "./Nav.css";

function Nav() {

    const [show,handleShow] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll",()=>{
            if(window.scrollY > 100){
                handleShow(true);
            }else handleShow(false);
        })
        return()=>{
            window.removeEventListener("scroll");
        }
    },[])
   return (
      <div className={`nav ${show && "nav_active"}`}>
         <img
            className="nav_logo"
            src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
            alt="Netflix Logo"
         />
         <img
            className="user_img"
            src="https://img.icons8.com/external-kiranshastry-gradient-kiranshastry/64/000000/external-user-interface-kiranshastry-gradient-kiranshastry-1.png"
         />
      </div>
   );
}

export default Nav;
