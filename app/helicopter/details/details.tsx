import Image from "next/image";
import Link from "next/link";

export default function Helicopter_Details() {
  return (
    <div>
      <main className="font-medium">
        
        {/* Section Title */}
        <div className="flex justify-center items-center text-xl md:text-4xl lg:text-4xl font-bold pt-20 py-5">
          <h1>Choose Our Helicopter Packages</h1>
        </div>

        {/* helicopter Post */}
        <div className="flex justify-center">
          <div className="max-w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-5 px-4 text-[#3f3f3f]">


            {/* Card 1: helicopter-img-1 */}
            <div className=" w-[300px] md:w-[350px] lg:w-[420px] group">

              
                <div className="overflow-hidden">
                  <Image
                    src="/helicopter-img-1.png"
                    height={450}
                    width={420}
                    alt="helicopter-img-1"
                    className="h-[280px] object-cover transform group-hover:scale-125 transition-transform shadow-inner shadow-black duration-500 ease-in-out"
                  />

                </div>
                <h2 className="font-bold text-2xl text-[#000000] px-2 py-4">Tanah Lot & seminyek</h2>
              
              <div className="relative px-2 overflow-hidden group">

                <h3 className="font-bold text-black">Start from USD 820</h3>
                <p className="mt-3">Experience the most captivation sights on this</p>
                <p className=""> short yet memorable tour.</p>

                <button className="mt-4 px-5 py-2 rounded-sm border-2 bg-[#000000] text-white text-sm">
                  BOOK NOW
                </button>
              </div>
            </div>


            {/* Card 2: helicopter-img-2 */}
            <div className="relative w-[300px] md:w-[350px] lg:w-[420px] overflow-hidden group">
              
                <div className="overflow-hidden">
                  <Image
                    src="/helicopters-img-2.png"
                    height={450}
                    width={420}
                    alt="helicopter-img-2"
                    className="h-[280px] object-cover transform group-hover:scale-125 transition-transform duration-500 ease-in-out"
                  />
                </div>
                <h2 className="font-bold text-2xl text-[#000000] px-2 py-4">Beratan Lake & Jatuluwih

                </h2>
              
              <div className="relative px-2 overflow-hidden group">

                <h3 className="font-bold text-black">Start from USD 2.046</h3>
                <p className="mt-3">Lake Beratan is a shallow lake with the high </p>
                <p className="">caldera about 1231m above sea level.</p>

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
                    alt="helicopter-img-3"
                    className="h-[280px] object-cover transform group-hover:scale-125 transition-transform duration-500 ease-in-out"
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


          </div>
        </div>


        {/* Link Button  */}
        <h2 className="flex justify-center py-6">
          <Link href={"/helicopter"}>

            <button className="bg-black text-white py-2 px-6 rounded-sm text-sm font-medium hover:bg-slate-200 hover:text-black">VIEW ALL HELICOPTERS</button>

          </Link>
        </h2>
      </main>
    </div>
  )
}
