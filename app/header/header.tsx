import { FaLinkedinIn, FaInstagram, FaFacebookF, } from 'react-icons/fa';
import Link from 'next/link';
import { FaWhatsapp } from 'react-icons/fa6';

export default function Header() {
  return (
    <main>
    <header className=' hidden md:block md:bg-blue-500 lg:bg-blue-500'>
      <div className='flex justify-between flex-row text-blue-200 text-[15px] pl-[30px] '>
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
        <ul>
          <li className='pr-[15px] pt-[2px]'>
            <Link
              href={"https://web.whatsapp.com/"}
              target="_blank"
              rel="noopener noreferrer"
              className='flex items-center p-[15px] gap-2'

            >
              <FaWhatsapp size={17} />
              03493002352
            </Link>
          </li>
        </ul>
      </ div>
    </header>
    </main>
  )
}
