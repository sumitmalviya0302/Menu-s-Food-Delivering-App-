import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <>
      <div className="header-container">
        <div className="header-logo">
          <img
            src="https://tse2.mm.bing.net/th?id=OIP.yLpyUoQ9Qz3hYB47Pdi1pgHaHa&pid=Api&P=0&h=180"
            alt="logo"
          />
        </div>
        <div className="header-nav-items">
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/contact'>Contact</Link></li>
            <li><Link to='/cart'>Cart</Link></li>
          </ul>
        </div>
        
          {isLogin ? (
            <button onClick={()=>setIsLogin(true)}>Logout</button>
          ) : (
            <button onClick={()=>setIsLogin(false)}>Login</button>
          )}
      </div>
    </>
  );
};

export default Header;
