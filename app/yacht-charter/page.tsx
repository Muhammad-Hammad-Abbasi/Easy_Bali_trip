import Image from "next/image"

export default function Yacht_Charter() {
  return (
    <div>
      <main className="font-medium">

        <div>
          <Image
            src={"/yacht-main.png"}
            height={0}
            width={1400}
            alt="dolphin"
            className="w-[380px] h-[180px] md:w-[900px] md:h-[350px] lg:w-[1400px] lg:h-[550px]"

          />
        </div>


        {/* Section Title */}
        <div className="flex justify-center items-center text-xl md:text-4xl lg:text-4xl p-4 ">
          <h1 className="font-serif px-3">Choose Our Yacht Packages</h1>
        </div>

        <div className=" px-4 text-[15px] md:text-[17px] lg:text:text-[20px] text-[#979797]">
          <p className="flex justify-center py-2">Nothing beats a sailing holiday especially a sailing holiday cruise in sunny, tropical paradise on clear, azure waters aboard a beautiful, luxurious and personalized private yacht. Now you and up to 18 of your friends can lounge, relax and unwind in the ultimate style and comfort under the brilliant island sun with Yacht Tours.</p>
          <p className="flex justify-center py-2">You can choose to take the half-day trip that takes you from Benoa Harbor to Nusa Dua, Serangan and Sanur or a full day trip to Nusa Lembongan, Penida and Ceningan. All trips would include swimming, padding, and snorkeling, diving, fishing and of course, lots of fun! A full-time crew is always at hand to meet your every need while you are on board.</p>
        </div>


        {/* Yacht Charter Post */}
        <div className="flex justify-center">
          <div className="max-w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-5 px-4 text-[#3f3f3f]">


            {/* Card 1: yacht-img-1 */}
            <div className=" w-[300px] md:w-[350px] lg:w-[420px] group">

                <div className="overflow-hidden">
                  <Image
                    src="/yacht-img-1.png"
                    height={450}
                    width={420}
                    alt="yacht-img-1"
                    className="h-[280px] object-cover transform group-hover:scale-125 transition-transform shadow-inner shadow-black duration-500 ease-in-out"
                  />
                </div>
             
              <div className="relative p-4 overflow-hidden group">
                <h2 className="font-bold text-2xl text-[#000000]">Sailing Yacht | Phinisi</h2>
                <p className="mt-3">Capacity: 20 (10 O/N)</p>
                <p className="">Length: 20m.(65,6 ft.)</p>
                <h3 className="pt-2 font-bold text-black">Start from USD 1100</h3>

                <button className="mt-4 px-5 py-2 rounded-sm border-2 bg-[#000000] text-white text-sm">
                  BOOK NOW
                </button>
              </div>
            </div>


            {/* Card 2: yacht-img-2 */}
            <div className="relative w-[300px] md:w-[350px] lg:w-[420px] overflow-hidden group">
              
                <div className="overflow-hidden">
                  <Image
                    src="/yacht-img-2.png"
                    height={450}
                    width={420}
                    alt="yacht-img-2"
                    className="h-[280px] object-cover transform group-hover:scale-125 transition-transform duration-500 ease-in-out"
                  />
                </div>
              
              <div className="relative p-4 overflow-hidden group">
                <h2 className="font-bold text-2xl text-[#000000]">Catamaran Lagoon 380S</h2>
                <p className="mt-3">Capacity: 12 Persons</p>
                <p className="">Length: 11.6m. (38 ft.)</p>
                <h3 className="pt-2 font-bold text-black">Start from USD 1100</h3>

                <button className="mt-4 px-5 py-2 rounded-sm border-2 bg-[#000000] text-white text-sm">
                  BOOK NOW
                </button>
              </div>
            </div>


            {/* Card 3: yacht-img-3 */}
            <div className="relative w-[300px] md:w-[350px] lg:w-[420px] overflow-hidden group ">
          
                <div className="overflow-hidden">
                  <Image
                    src="/yacht-img-3.png"
                    height={450}
                    width={420}
                    alt="yacht-img-3"
                    className="h-[280px] object-cover transform group-hover:scale-125 transition-transform duration-500 ease-in-out"
                  />
                </div>
           
              <div className="relative p-4 overflow-hidden group">
                <h2 className="font-bold text-2xl text-[#000000]">Accura 55 Luxury Mortor Yacht</h2>
                <p className="mt-3">Capacity: 17 Persons</p>
                <p className="">Length: 17m.(55 ft.)</p>
                <h3 className="pt-2 font-bold text-black">Start from USD 1100</h3>

                <button className="mt-4 px-5 py-2 rounded-sm border-2 bg-[#000000] text-white text-sm">
                  BOOK NOW
                </button>
              </div>
            </div>


            {/* Card 4: yacht */}
            <div className=" w-[300px] md:w-[350px] lg:w-[420px]  group">

                <div className="overflow-hidden">
                  <Image
                    src="/yacht-img-4.png"
                    height={450}
                    width={420}
                    alt="yacht-img-1"
                    className="h-[280px] object-cover transform group-hover:scale-125 transition-transform shadow-inner shadow-black duration-500 ease-in-out"
                  />
                </div>

              <div className="relative p-4 overflow-hidden group">
                <h2 className="font-bold text-2xl text-[#000000]">Accura 49 Luxury Mortor Yacht</h2>
                <p className="mt-3">Capacity: 12 Persons</p>
                <p className="">Length: 13,5 m. (44 ft.)</p>
                <h3 className="pt-2 font-bold text-black">Start from USD 1100</h3>

                <button className="mt-4 px-5 py-2 rounded-sm border-2 bg-[#000000] text-white text-sm">
                  BOOK NOW
                </button>
              </div>
            </div>


            {/* Card 4: yacht-img-2 */}
            <div className="relative w-[300px] md:w-[350px] lg:w-[420px] overflow-hidden group">
         
                <div className="overflow-hidden">
                  <Image
                    src="/yacht-img-5.png"
                    height={450}
                    width={420}
                    alt="yacht-img-2"
                    className="h-[280px] object-cover transform group-hover:scale-125 transition-transform duration-500 ease-in-out"
                  />
                </div>
             
              <div className="relative p-4 overflow-hidden group">
                <h2 className="font-bold text-2xl text-[#000000]">Accura 48 Luxury Mortor Yacht</h2>
                <p className="mt-3">Capacity: 12 Persons</p>
                <p className="">Length: 13,5 m. (44 ft.)</p>
                <h3 className="pt-2 font-bold text-black">Start from USD 1100</h3>

                <button className="mt-4 px-5 py-2 rounded-sm border-2 bg-[#000000] text-white text-sm">
                  BOOK NOW
                </button>
              </div>
            </div>


            {/* Card 6: yacht-img-3 */}
            <div className="relative w-[300px] md:w-[350px] lg:w-[420px] overflow-hidden group ">
        
                <div className="overflow-hidden">
                  <Image
                    src="/yacht-main-1.png"
                    height={450}
                    width={420}
                    alt="yacht-img-3"
                    className="h-[280px] object-cover transform group-hover:scale-125 transition-transform duration-500 ease-in-out"
                  />
                </div>
          
              <div className="relative p-4 overflow-hidden group">
                <h2 className="font-bold text-2xl text-[#000000]">Accura 39 Luxury Mortor Yacht</h2>
                <p className="mt-3">Capacity: 8 Persons</p>
                <p className="">Length: 12 m.(39 ft.)</p>
                <h3 className="pt-2 font-bold text-black">Start from USD 1100</h3>

                <button className="mt-4 px-5 py-2 rounded-sm border-2 bg-[#000000] text-white text-sm">
                  BOOK NOW
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
