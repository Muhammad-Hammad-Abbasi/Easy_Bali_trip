import Image from "next/image"

export default function Helicopter() {
  return (
    <div>
      <main className="font-medium">

        <div>
          <Image
            src={"/Helicopter-main.png"}
            height={0}
            width={1400}
            alt="Helicopter"
            className="w-[380px] h-[180px] md:w-[900px] md:h-[350px] lg:w-[1400px] lg:h-[550px]"

          />
        </div>


        {/* Section Title */}
        <div className="flex items-center text-xl md:text-4xl lg:text-4xl py-4 ">
          <h1 className="font-serif px-3">Choose Our Helicopter Tour</h1>
        </div>

        <div className=" px-4 text-[15px] md:text-[17px] lg:text:text-[20px] text-[#979797]">

          <p className="flex justify-center py-2">Lets have a fresh perspective of paradise with the islands luxury helicopter service. Utilizing a sleek Eurocopter B2 helicopter, filly air-conditioned with luxury leather seating for up to 5 passengers, this is your chance to go on set scenic tours, volcano flights and other iconic location destinations. Discerning guests might want to create their own custom charter flights, as this helicopter tours can cater to any individual requirement, such as marriage proposals, scenic picnics, transfers and many more options.</p>

          <p className="flex justify-center py-2">Chose from the Kintamani and Batur Volcano Flight, West Coast Cruise Flight, Grand Temple Flight, Bedugul Lake Flight, the Majestic Coastline Flight, or the West Coast Cruise Flight, this helicopter tours also provides a variety of alternative helicopter services and covered by a fully-serviced air medical evacuation.</p>
        </div>


        {/* helicopter Post */}
        <div className="flex justify-center">
          <div className="max-w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-5 px-4 text-[#3f3f3f]">


            {/* Card 1: helicopter-img-1 */}
            <div className=" w-[300px] md:w-[350px] lg:w-[420px] group">

                <div className="overflow-hidden">
                  <Image
                    src="/Helicopter-img-1.png"
                    height={450}
                    width={420}
                    alt="yacht-img-1"
                    className="h-[280px] object-cover transform group-hover:scale-125 transition-transform shadow-inner shadow-black duration-500 ease-in-out"
                  />
                </div>
                <h2 className="font-bold text-2xl text-[#000000] px-2 py-4">Rinjani Volcano Sky Tour

                </h2>
              
              <div className="relative px-2 overflow-hidden group">

                <h3 className="font-bold text-black">Start from USD 4.786</h3>
                <p className="mt-3">Situated at east of Bali, discover Lombok famous Mt. .</p>
                <p className="">Rinjani, Indonesias second-highest volcano</p>

                <button className="mt-4 px-5 py-2 rounded-sm border-2 bg-[#000000] text-white text-sm">
                  BOOK NOW
                </button>
              </div>
            </div>


            {/* Card 2: helicopter-img-2 */}
            <div className="relative w-[300px] md:w-[350px] lg:w-[420px] overflow-hidden group">
                <div className="overflow-hidden">
                  <Image
                    src="/helicopter-img-04.png"
                    height={450}
                    width={420}
                    alt="Helicopters"
                    className="h-[280px] object-cover transform group-hover:scale-125 transition-transform duration-500 ease-in-out"
                  />
                </div>
                <h2 className="font-bold text-2xl text-[#000000] px-2 py-4">
                  GWK Statue & Uluwatu Temple
                </h2>
              
              <div className="relative px-2 overflow-hidden group">

                <h3 className="font-bold text-black">Start from USD 1.023</h3>
                <p className="mt-3">
                  Take to the skies on a helicopter tour to </p>
                <p className="">“The Bukit”, located in south Bali.</p>

                <button className="mt-4 px-5 py-2 rounded-sm border-2 bg-[#000000] text-white text-sm">
                  BOOK NOW
                </button>
              </div>
            </div>


            {/* Card 3: helicopter-img-3 */}
            <div className="relative w-[300px] md:w-[350px] lg:w-[420px] overflow-hidden group ">
                <div className="overflow-hidden">
                  <Image
                    src="/helicopter-img-03.jpg"
                    height={450}
                    width={420}
                    alt="Helicopters"
                    className="h-[280px] object-cover transform group-hover:scale-125 transition-transform duration-500 ease-in-out"
                  />
                </div>
                <h2 className="font-bold text-2xl text-[#000000] px-2 py-4">Nusa Island Sky Tour



                </h2>
              
              <div className="relative px-2 overflow-hidden group">

                <h3 className="font-bold text-black">Start from USD 1.445</h3>
                <p className="mt-3">Fly over to the most iconic Kelingking </p>
                <p className="">beach which overlook T-Rex Head.</p>

                <button className="mt-4 px-5 py-2 rounded-sm border-2 bg-[#000000] text-white text-sm">
                  BOOK NOW
                </button>
              </div>
            </div>


            {/* Card 4: helicopter */}
            <div className=" w-[300px] md:w-[350px] lg:w-[420px]  group">

                <div className="overflow-hidden">
                  <Image
                    src="/helicopter-main.png"
                    height={450}
                    width={420}
                    alt="helicopter"
                    className="h-[280px] object-cover transform group-hover:scale-125 transition-transform shadow-inner shadow-black duration-500 ease-in-out"
                  />
                </div>
                <h2 className="font-bold text-2xl text-[#000000] px-2 py-4">Beratan Lake & Jatuluwih



                </h2>
              
              <div className="relative px-2 overflow-hidden group">

                <h3 className="font-bold text-black">Start from USD 2.046</h3>
                <p className="mt-3">Lake Beratan is a shallow lake with the </p>
                <p className="">high caldera about 1231m above sea level.</p>

                <button className="mt-4 px-5 py-2 rounded-sm border-2 bg-[#000000] text-white text-sm">
                  BOOK NOW
                </button>
              </div>
            </div>


            {/* Card 5: Helicopters */}
            <div className="relative w-[300px] md:w-[350px] lg:w-[420px] overflow-hidden group">
                <div className="overflow-hidden">
                  <Image
                    src="/Helicopters-img-2.png"
                    height={450}
                    width={420}
                    alt="yacht-img-2"
                    className="h-[280px] object-cover transform group-hover:scale-125 transition-transform duration-500 ease-in-out"
                  />
                </div>
                <h2 className="font-bold text-2xl text-[#000000] px-2 py-4">Tanah Lot & Seminyak



                </h2>
              
              <div className="relative px-2 overflow-hidden group">

                <h3 className="font-bold text-black">Start from USD 820</h3>
                <p className="mt-3">Experience the most captivating sights on</p>
                <p className="">this short yet memorable tour.</p>

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
