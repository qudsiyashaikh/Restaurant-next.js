import React from 'react'
import Menu from './menu'
import Link from "next/link";
import CartIcon from "./carticon";
import Image from "next/image";
const navbar = () => {
  const user = false;

  return (
    <div className="h-12 text-red-500 p-4 flex items-center justify-between border-b-2 border-b-red-500 uppercase md:h-24 lg:px-20 xl:px-40 bg-gradient-to-r from-yellow-200 to-yellow-300">
      {/* lift links */}
      <div className="hidden md:flex gap-4 flex-1">
        <Link href="/">Homepage</Link>
         <Link href="/menu">Menu</Link>
          <Link href="/contact">Oders</Link>
      </div>
     
      {/* logo */}
       <div className="text-xl md:font-bold flex-1 md:text-center">
        <Link href="/">Husaini Family Restaurant</Link>
</div>

      {/* mobile */}
      <div className="md:hidden">
        <Menu/>
      </div>
      {/* right links */}
  
<div className="hidden  md:flex gap-4 items-center justify-end flex-1">
        <div className="md:absolute top-3 r-2 lg:static flex items-center gap-2 cursor-pointer bg-yellow-200 px-1 rounded-md">
          <Image src="/phone.png" alt="" width={20} height={20} />
          <span >6789 54321</span>
        </div>
  

  {!user ? (
          <Link href="/login">Login</Link>
        ) : (
          <Link href="/contact">Contact</Link>
        )}
 <CartIcon />
</div>

    </div>
  );
};

export default navbar