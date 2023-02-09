import { useState } from "react";
import Logo from "../ui/Logo";
import {HiUser, HiShoppingCart} from "react-icons/hi";
import {FaSearch} from "react-icons/fa";
import Search from "../ui/Search";
import {VscThreeBars} from "react-icons/vsc";
import {SlClose} from "react-icons/sl";


const Header = () => {
    const [isSearch, setIsSearch] = useState(false);
    const [isMenu, setIsMenu] = useState(false);
  return (
    <div className="h-[5.5rem] bg-secondary">
        <div className="container mx-auto text-white
        flex justify-between items-center h-full">
            <Logo/>
            <nav className={`sm:static absolute top-0 left-0 sm:w-auto sm:h-auto w-full h-full
            sm:text-white text-black sm:bg-transparent bg-white sm:flex hidden ${isMenu === true && "!grid place-content-center"}`}>
                <ul className="flex gap-x-2 sm:flex-row flex-col items-center ">
                    <li className="px-[5px] py-[10px] uppercase hover:text-primary cursor-pointer transition-all">
                        <a>Home</a></li>
                    <li className="px-[5px] py-[10px] uppercase hover:text-primary cursor-pointer transition-all">
                        <a>Menu</a></li>
                    <li className="px-[5px] py-[10px] uppercase hover:text-primary cursor-pointer transition-all">
                        <a>About</a></li>
                    <li className="px-[5px] py-[10px] uppercase hover:text-primary cursor-pointer transition-all">
                        <a>Book Table</a></li>
                </ul>
                {isMenu && (
                <button className='absolute top-6 right-6' onClick={() => setIsMenu(false)}>
                    <SlClose size={30} className="hover:text-primary
                            transition-all"/>
                </button>)}
            </nav>
            <div className="flex gap-x-4 items-center">
                <a><HiUser className="hover:text-primary transition-all"/></a>
                <a><HiShoppingCart className="hover:text-primary transition-all"/></a>
                <button onClick={() => setIsSearch(true)}><FaSearch className="hover:text-primary transition-all"/></button>
                <a className="md:inline-block hidden sm">
                    <button className="btn-primary">Order Online</button>
                </a>
                <button className="sm:hidden inline-block" onClick={() => setIsMenu(true)}>
                    <VscThreeBars className="text-xl hover:text-primary transition-all"/>
                </button>
            
            </div>
        </div>
        {isSearch && <Search setIsSearch = {setIsSearch}/>}
    </div>
  );
}

export default Header