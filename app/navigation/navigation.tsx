"use client"

import Image from "next/image"
import Link from "next/link"
import { FaBars } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";
import { useState } from "react";

function Navigation() {

    const [isOpen, setIsOpen] = useState(false);

    const toggleButton = () => {
        setIsOpen(!isOpen)

    }

    return (
        <main className="">
            <div className="flex flex-row justify-around md:justify-between lg:justify-between items-center font-medium md:px-10 lg:px-10 py-2 ">

                {/* menu */}
                <div className="block md:hidden lg:hidden">
                    <button onClick={toggleButton}>{isOpen ? <FaTimes size={24} className="text-white" /> : <FaBars size={24} />}</button>
                </div>



                {/* image div */}
                <div>
                    <Link href={"/"}>
                        <Image
                            src="/Easy-Bali.png"
                            height={200}
                            width={200}
                            alt="Easy-Bali"
                        
                        />
                    </Link>
                </div>


                {/* Navbar div */}
                <nav className="hidden md:block lg:block">
                    <ul className="flex flex-row gap-9 justify-between py-4 text-sm md:text-md lg:text-lg font-semibold">
                        <li>
                            <Link href={"/"} className="hover:text-blue-500">Home</Link>
                        </li>
                        <li>
                            <Link href={"/yacht-charter"} className="hover:text-blue-500">Yacht Charter</Link>
                        </li>
                        <li>
                            <Link href={"/excursions"} className="hover:text-blue-500">Excursions</Link>
                        </li>
                        <li>
                            <Link href={"/activities"} className="hover:text-blue-500">Activities</Link>
                        </li>
                        <li>
                            <Link href={"/helicopter"} className="hover:text-blue-500">Helicopter</Link>
                        </li>
                    </ul>
                </nav>


                {/* mobile screen  */}

                {isOpen &&
                    <nav className="transition-transform duration-1000 ease-in-out">
                        <ul className="flex flex-col text-white bg-black bg-opacity-90 z-50 fixed inset-0 p-6  space-y-4  md:hidden lg:hidden ">

                            <button onClick={toggleButton}><FaTimes /></button>
                            <li>
                                <Link href={"/"} onClick={toggleButton}
                                    className="hover:text-blue-500">Home</Link>
                            </li>
                            <li>
                                <Link href={"/yacht-charter"} onClick={toggleButton}
                                    className="hover:text-blue-500">Yacht Charter</Link>
                            </li>
                            <li>
                                <Link href={"/excursions"} onClick={toggleButton} className="hover:text-blue-500">Excursions</Link>
                            </li>
                            <li>
                                <Link href={"/activities"} onClick={toggleButton} className="hover:text-blue-500">Activities</Link>
                            </li>
                            <li>
                                <Link href={"/helicopter"} onClick={toggleButton} className="hover:text-blue-500">Helicopter</Link>
                            </li>
                        </ul>
                    </nav>
                }


            </div>
        </main>

    )
}
export default Navigation;