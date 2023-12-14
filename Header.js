import React, { useState } from 'react';


function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header>
      <div className="logo"> 
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM_O4Gbe9lewRiYbJvk0oWAL5e_9NCNFjGJXGeIuhHNTvYIpyybb2USlo-zoaGcHFAdvE&usqp=CAU" alt="My Logo" />
        </div>
        <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/products">Products</a></li>
          
          <li><a href="/contact">Contact Us</a></li>
          <li><a href="/about">About Us</a></li>
        </ul>
      </nav>

      
    </header>
  );
}

export default Header;