import Image from "next/image";
import Link from "next/link";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    
      <footer className="relative bg-cover mb-[1px] bg-center bg-opacity-5 bg-no-repeat h-[350px] text-white py-8" style={{ backgroundImage: "url('/Diamond-Beach-Nusa.png')" }}>

        <main className="flex justify-between absolute bg-blue-500 bg-opacity-50 z-10 inset-0 pt-10 ">

          {/* Footer Content */}
          <div className="relative z-10 container mx-auto px-4">
            <Image
              src="/footer-icon-img.png"
              height={200}
              width={200}
              alt="footer-icon"

            />
            <div className="px-10">
              <h2 className="text-lg font-serif pl-4 flex items-center py-4">Contact Us</h2>
              <ul className='flex flex-row pt-[2px] items-center'>
                <li className='pl-[15px] '>
                  <Link
                    href="https://www.linkedin.com/in/hammad-abbasi-95388628b/"
                    target="_blank"
                    rel="noopener noreferrer"

                  >
                    <FaLinkedinIn size={17} />
                  </Link>
                </li>
                <p className='px-[10px] text-[17px]'>I</p>
                <li >
                  <Link
                    href="https://www.facebook.com/profile.php?id=100068906216007"
                    target="_blank"
                    rel="noopener noreferrer"

                  >
                    <FaFacebookF size={17} />
                  </Link>
                </li>
                <p className='px-[10px] text-[17px]'>I</p>
                <li >
                  <Link
                    href="https://www.instagram.com/mr_hammad.abbasi/"
                    target="_blank"
                    rel="noopener noreferrer"

                  >
                    <FaInstagram size={17} />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          {/* Navbar div */}
          <nav className="hidden md:block lg:block px-80 py-5">
            <ul className="grid grid-cols-2 gap-x-40 gap-9 text-sm md:text-md lg:text-lg font-semibold ">
              <li>
                <Link href={"/"} className="hover:underline">Home</Link>
              </li>
              <li>
                <Link href={"/yacht-charter"} className="hover:underline">Yacht</Link>
              </li>
              <li>
                <Link href={"/excursions"} className="hover:underline">Excursions</Link>
              </li>
              <li>
                <Link href={"/activities"} className="hover:underline">Activities</Link>
              </li>
              <li>
                <Link href={"/helicopter"} className="hover:underline">Helicopter</Link>
              </li>
            </ul>
          </nav>
        </main>


        <div className="flex justify-center items-center container mx-auto  text-center text-white mt-52 md:mt-72">
          <p className="text-sm">&copy; 2024 Hammad Abbasi. All rights reserved.</p>
          <p className="text-sm">
            This website is for informational purposes only. Trademarks and brands are the property of their respective owners.
          </p>
        </div>

        
      </footer>
  );
}

