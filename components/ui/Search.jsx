import React from 'react';
import Title from "../ui/Title";
import OutsideClickHandler from 'react-outside-click-handler';
import Image from 'next/image';
import {SlClose} from "react-icons/sl";

const Search = ({setIsSearch}) => {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen z-50  
        after:content-[''] after:w-screen after:h-screen after:bg-black
        after:absolute after:top-0 after:left-0 after:opacity-70 grid place-content-center">
        <OutsideClickHandler onOutsideClick={() => setIsSearch(false)}>

            <div className="w-full h-full grid place-content-center">
                <div className="relative z-50 md:w-[600px] w-[370px] bg-white border-2 p-10 rounded-3xl">
                    <Title addClass="text-[40px] text-center">Search</Title>
                    <input type="text" placeholder='Search...' className="border w-full my-10" />
                        <ul>
                            <li className='flex items-center justify-between p-2
                                            hover:bg-primary transition-all'>
                                <div className='relative flex'>
                                    <Image src="/images/f1.png" alt="" width={48} height={48}/>    
                                </div>
                                <span className="font-bold">A Delicious Pizza</span>
                                <span className="font-bold">7$</span>
                            </li>
                            <li className='flex items-center justify-between p-2
                                            hover:bg-primary transition-all'>
                                <div className='relative flex'>
                                    <Image src="/images/f1.png" alt="" width={48} height={48}/>    
                                </div>
                                <span className="font-bold">A Delicious Pizza</span>
                                <span className="font-bold">7$</span>
                            </li>
                            <li className='flex items-center justify-between p-2
                                            hover:bg-primary transition-all'>
                                <div className='relative flex'>
                                    <Image src="/images/f1.png" alt="" width={48} height={48}/>    
                                </div>
                                <span className="font-bold">A Delicious Pizza</span>
                                <span className="font-bold">7$</span>
                            </li>
                        </ul>
                        <button className='absolute top-6 right-6' onClick={() => setIsSearch(false)}>
                            <SlClose size={30} className="hover:text-primary
                                transition-all"/>
                        </button>
                </div>
            </div>
        </OutsideClickHandler>
    </div>
  );
}

export default Search