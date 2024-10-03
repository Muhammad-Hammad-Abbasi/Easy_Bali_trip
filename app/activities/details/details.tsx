import Image from "next/image"
import Link from "next/link"

export default function Activities_Details() {
  return (
    <main className="font-medium">
      {/* Section Title */}
      <div className="flex justify-center items-center text-xl md:text-4xl lg:text-4xl font-bold pt-20 py-5">
        <h1>Choose Our Activities Tour Packages</h1>
      </div>

      {/* Excursions Post */}
      <div className="flex justify-center">
        <div className="max-w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-5 px-4 text-[#3f3f3f]">


          {/* Card 1: Bali-Zoo-1 */}
          <div className="relative w-[300px] md:w-[350px] lg:w-[420px] overflow-hidden group bg-slate-50">

            
              <div className="overflow-hidden">
                <Image
                  src="/Bali-Zoo-1.jpg"
                  height={450}
                  width={420}
                  alt="Bali-Zoo-1"
                  className="h-[280px] object-cover transform group-hover:scale-125 transition-transform duration-500 ease-in-out"
                />
              </div>
              <div className="p-4">
                <h2 className="font-bold text-2xl py-3 text-[#000000]">Visiting Zoo</h2>
                <p className="mt-3">
                  A visit to a zoo in Bali offers a unique and exciting experience, combining the islands natural beauty with opportunities to observe exotic wildlife up close...
                </p>
                <button className="mt-4 px-5 py-2 rounded-sm border-2 border-[#1f1f1f] text-sm">
                  DETAILS
                </button>
              </div>
          </div>


          {/* Card 2: Tirt Bali Tour */}
          <div className="relative w-[300px] md:w-[350px] lg:w-[420px] overflow-hidden group bg-slate-50">
              <div className="overflow-hidden">
                <Image
                  src="/water-sport.png"
                  height={450}
                  width={420}
                  alt="Tirt Bali"
                  className="h-[280px] object-cover transform group-hover:scale-125 transition-transform duration-500 ease-in-out"
                />
              </div>
              <div className="p-4">
                <h2 className="font-bold text-2xl py-3 text-[#000000]">Water Sports</h2>
                <p className="mt-3">
                  Bali is a paradise for water sports enthusiasts, offering a wide range of activities that cater to thrill-seekers and those looking for a relaxing time on the water...
                </p>
                <button className="mt-4 px-5 py-2 rounded-sm border-2 border-[#1f1f1f] text-sm">
                  DETAILS
                </button>
              </div>
          </div>


          {/* Card 3: horse-riding */}
          <div className="relative w-[300px] md:w-[350px] lg:w-[420px] overflow-hidden group bg-slate-50">
              <div className="overflow-hidden">
                <Image
                  src="/horse-img.png"
                  height={450}
                  width={420}
                  alt="horse-riding"
                  className="h-[280px] object-cover transform group-hover:scale-125 transition-transform duration-500 ease-in-out"
                />
              </div>
              <div className="p-4 ">
                <h2 className="font-bold text-2xl py-3 text-[#000000]">Horse Riding</h2>
                <p className="mt-3">
                  Horse riding in Bali offers a serene and picturesque way to explore the islands beautiful landscapes. Whether you are galloping along the beach, riding through lush rice fields...
                </p>
                <button className="mt-4 px-5 py-2 rounded-sm border-2 border-[#1f1f1f] text-sm">
                  DETAILS
                </button>
              </div>
          </div>
        </div>
      </div>


       {/* Link Button  */}
       <h2 className="flex justify-center py-10">
            <Link href={"/activities"}>

              <button className="bg-black text-white py-2 px-6 rounded-sm text-sm font-medium hover:bg-slate-200 hover:text-black">VIEW ALL ACTIVITIES</button>

            </Link>
          </h2>
    </main>
  )
}
