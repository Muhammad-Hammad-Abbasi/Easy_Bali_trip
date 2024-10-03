import Image from "next/image";
import Link from "next/link";

export default function Yacht_Details() {
  return (
    <div>
       <main className="font-medium">
      {/* Section Title */}
      <div className="flex justify-center items-center text-xl md:text-4xl lg:text-4xl font-bold pt-20 py-5">
        <h1>Choose Our Yacht Packages</h1>
      </div>

      {/* Excursions Post */}
      <div className="flex justify-center">
        <div className="max-w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-5 px-4 text-[#3f3f3f]">


          {/* Card 1: yacht-img-1 */}
          <div className=" w-[300px] md:w-[350px] lg:w-[420px]  group">

            
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
        </div>
      </div>


       {/* Link Button  */}
       <h2 className="flex justify-center py-6">
            <Link href={"/yacht-charter"}>

              <button className="bg-black text-white py-2 px-6 rounded-sm text-sm font-medium hover:bg-slate-200 hover:text-black">VIEW ALL YACHT</button>

            </Link>
          </h2>
    </main>
    </div>
  )
}
