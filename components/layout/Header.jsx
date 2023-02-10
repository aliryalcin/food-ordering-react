import { useState } from "react";
import { FaUserAlt, FaShoppingCart, FaSearch} from "react-icons/fa";
import Logo from "../ui/Logo";
import Search from "../ui/Search";
import {SlClose} from "react-icons/sl";
import {useRouter} from "next/router";
import Link from "next/link";
import { GiHamburgerMenu} from "react-icons/gi";

const Header = () => {
    const [isSearch, setIsSearch] = useState(false);
    const [isMenu, setIsMenu] = useState(false);
    const router = useRouter();


  return (
    <div className={`h-[5.5rem] z-50 relative ${router.asPath === "/" ?"bg-transparent" : "bg-secondary"}`}>
        <div className="container mx-auto text-white
        flex justify-between items-center h-full">
            <Logo/>
            <nav className={`sm:static absolute top-0 left-0 sm:w-auto sm:h-auto w-full h-screen
            sm:text-white text-black sm:bg-transparent bg-white sm:flex hidden ${isMenu === true && "!grid place-content-center"}`}>
                <ul className="flex gap-x-2 sm:flex-row flex-col items-center ">
                    <li className="px-[5px] py-[10px] uppercase hover:text-primary cursor-pointer transition-all">
                        <Link href="/">Home</Link>
                    </li>
                    <li className="px-[5px] py-[10px] uppercase hover:text-primary cursor-pointer transition-all">
                        <Link href="/menu">Menu</Link>
                    </li>
                    <li className="px-[5px] py-[10px] uppercase hover:text-primary cursor-pointer transition-all">
                        <Link href="/about">About</Link>
                    </li>
                    <li className="px-[5px] py-[10px] uppercase hover:text-primary cursor-pointer transition-all">
                        <Link href="/reservation">Book Table</Link>
                    </li>
                </ul>
                {isMenu && (
                <button className='absolute top-6 right-6' onClick={() => setIsMenu(false)}>
                    <SlClose size={30} className="hover:text-primary
                            transition-all"/>
                </button>)}
            </nav>
            <div className="flex gap-x-4 items-center">
          <Link href="/auth/login">
          <span>
              <FaUserAlt className="hover:text-primary transition-all cursor-pointer" />
            </span>
          </Link>
          <Link href="/cart">
          <span>
              <FaShoppingCart className="hover:text-primary transition-all cursor-pointer" />
            </span>
          </Link>
          <button onClick={() => setIsSearch(true)}>
            <FaSearch
              className="hover:text-primary transition-all cursor-pointer"
              size={18}
            />
          </button>
          <a href="#" className="md:inline-block hidden sm">
            <button className="btn-primary">Order Online</button>
          </a>
          <button
            className="sm:hidden inline-block"
            onClick={() => setIsMenuModal(true)}
          >
            <GiHamburgerMenu className="text-xl hover:text-primary transition-all" />
          </button>
            
            </div>
        </div>
        {isSearch && <Search setIsSearch = {setIsSearch}/>}
    </div>
  );
}

export default Header