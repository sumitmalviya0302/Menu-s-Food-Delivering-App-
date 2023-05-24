import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isLogin, setIsLogin] = useState(false);


  return (
    <>
      <div className="h-20 my-3 mx-2 flex justify-between py-1 px-2 border-solid border-black shadow-lg">
        <div>
          <img
            src="https://tse2.mm.bing.net/th?id=OIP.yLpyUoQ9Qz3hYB47Pdi1pgHaHa&pid=Api&P=0&h=180"
            alt="logo"
            className="w-16 items-center relative"
          />
        </div>
        <div className="mt-3">
          <ul className="flex list-none mt-3">
            <li><Link className="pr-3 hover:text-red-400" to='/'>Home</Link></li>
            <li><Link className="pr-3  hover:-texted-400" to='/about'>About</Link></li>
            <li><Link className="pr-3 hover:text-red-400" to='/contact'>Contact</Link></li>
            <li><Link className="pr-3 hover:text-red-400" to='/cart'>Cart</Link></li>
          </ul>
        </div>

        
          {isLogin ? (
            <button className=" my-3 px-2" onClick={()=>setIsLogin(true)}>Logout</button>
          ) : (
            <button className=" my-3 px-2" onClick={()=>setIsLogin(false)}>Login</button>
          )}
      </div>
    </>
  );
};

export default Header;
