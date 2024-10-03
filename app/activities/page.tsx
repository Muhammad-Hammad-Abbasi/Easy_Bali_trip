import Link from "next/link";
import Image from "next/image";

export default function Activities() {
  return (
    <main className="font-medium">
      <div>
        <Image
          src={"/Dolphin-1.png"}
          height={0}
          width={1400}
          alt="dolphin"
          className="w-[320px] h-[150px] md:w-[900px] md:h-[350px] lg:w-[1400px] lg:h-[350px]"

        />
      </div>


      {/* Title Section  */}
      <div className="flex items-center text-2xl md:text-4xl lg:text-4xl font-bold pt-10 p-5">
        <h1>Choose Our Activities Tour Packages</h1>
      </div>

      {/* Activities Post */}
      <div className="flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-5 px-4 text-[#3f3f3f]">


          {/* Card 1: Hot-Air-Balloon */}
          <div className="relative w-[300px] md:w-[350px] lg:w-[420px] overflow-hidden group bg-slate-50">

            <Link href="">
              <div className="overflow-hidden">
                <Image
                  src="/Hot-Air-Balloon-1.png"
                  height={450}
                  width={420}
                  alt="Hot-Air-Balloon"
                  className="h-[280px] object-cover transform group-hover:scale-125 transition-transform duration-500 ease-in-out"
                />
              </div>
              <div className="p-4">
                <h2 className="font-bold text-2xl py-3">Hot Air Balloon</h2>
                <p className="mt-3">
                  Cappadocia in Turkey is a well-known place for its hot air balloon tours and natural scenery. However, you do not need to go all the way to Cappadocia to feel the sensation...
                </p>
                <button className="mt-4 px-5 py-2 rounded-sm border-2 border-[#1f1f1f] text-sm">
                  DETAILS
                </button>
              </div>
            </Link>
          </div>


          {/* Card 2: Paragliding */}
          <div className="relative w-[300px] md:w-[350px] lg:w-[420px] overflow-hidden group bg-slate-50">
            <Link href="">
              <div className="overflow-hidden">
                <Image
                  src="/Paragliding-1.png"
                  height={450}
                  width={420}
                  alt="Paragliding"
                  className="h-[280px] object-cover transform group-hover:scale-125 transition-transform duration-500 ease-in-out"
                />
              </div>
              <div className="p-4">
                <h2 className="font-bold text-2xl py-3">Paragliding</h2>
                <p className="mt-3">
                  There are many things you can enjoy when you visit Bali. There so many destination on the island that become a mandatory tour destination. Let say Kuta beach, Pandawa beach...
                </p>
                <button className="mt-4 px-5 py-2 rounded-sm border-2 border-[#1f1f1f] text-sm">
                  DETAILS
                </button>
              </div>
            </Link>
          </div>


          {/* Card 3: Camel-Safari-Ride */}
          <div className="relative w-[300px] md:w-[350px] lg:w-[420px] overflow-hidden group bg-slate-50">
            <Link href="">
              <div className="overflow-hidden">
                <Image
                  src="/Camel-Safari-Ride-2.png"
                  height={450}
                  width={420}
                  alt="Camel-Safari-Ride"
                  className="h-[280px] object-cover transform group-hover:scale-125 transition-transform duration-500 ease-in-out"
                />
              </div>
              <div className="p-4">
                <h2 className="font-bold text-2xl py-3">Camel Safari Riding</h2>
                <p className="mt-3">
                  Camel is familiar to our ears. It is an animal that has a large body, originally lived in the deserts of the Middle East. But you dont have to go far to the Middle East to see and...
                </p>
                <button className="mt-4 px-5 py-2 rounded-sm border-2 border-[#1f1f1f] text-sm">
                  DETAILS
                </button>
              </div>
            </Link>
          </div>

          {/* Card 4: ATV-Ride */}
          <div className="relative w-[300px] md:w-[350px] lg:w-[420px] overflow-hidden group bg-slate-50">
            <Link href="">
              <div className="overflow-hidden">
                <Image
                  src="/ATV-ride.png"
                  height={450}
                  width={420}
                  alt="ATV-Ride"
                  className="h-[280px] object-cover transform group-hover:scale-125 transition-transform duration-500 ease-in-out"
                />
              </div>
              <div className="p-4">
                <h2 className="font-bold text-2xl py-3">ATV Ride</h2>
                <p className="mt-3">
                  Bali is one of the islands owned by Indonesia with very rich tourism potential. Here, visitors will be very spoiled with a variety of positive activities with exotic natural scenery...
                </p>
                <button className="mt-4 px-5 py-2 rounded-sm border-2 border-[#1f1f1f] text-sm">
                  DETAILS
                </button>
              </div>
            </Link>
          </div>

          {/* Card 5: Surfing */}
          <div className="relative w-[300px] md:w-[350px] lg:w-[420px] overflow-hidden group bg-slate-50">
            <Link href="">
              <div className="overflow-hidden">
                <Image
                  src="/Surfing.png"
                  height={450}
                  width={420}
                  alt="Surfing"
                  className="h-[280px] object-cover transform group-hover:scale-125 transition-transform duration-500 ease-in-out"
                />
              </div>
              <div className="p-4">
                <h2 className="font-bold text-2xl py-3">Surfing</h2>
                <p className="mt-3">
                  As Bali island has many beaches, then surfing is another famous activity that you can do while visiting Bali. For those who like to enjoy water sports or water recreation such as...
                </p>
                <button className="mt-4 px-5 py-2 rounded-sm border-2 border-[#1f1f1f] text-sm">
                  DETAILS
                </button>
              </div>
            </Link>
          </div>

          {/* Card 6: Dolphin-Trip */}
          <div className="relative w-[300px] md:w-[350px] lg:w-[420px] overflow-hidden group bg-slate-50">
            <Link href="">
              <div className="overflow-hidden">
                <Image
                  src="/Dolphin-Trip.png"
                  height={450}
                  width={420}
                  alt="Dolphin-Trip"
                  className="h-[280px] object-cover transform group-hover:scale-125 transition-transform duration-500 ease-in-out"
                />
              </div>
              <div className="p-4">
                <h2 className="font-bold text-2xl py-3">Dolphin Trip</h2>
                <p className="mt-3">
                  Bali Island is known as one of the lucky places to have many dolphins swimming about in close proximity. Interested in seeing one? Then, you can join a dolphin trip activity...
                </p>
                <button className="mt-4 px-5 py-2 rounded-sm border-2 border-[#1f1f1f] text-sm">
                  DETAILS
                </button>
              </div>
            </Link>
          </div>


          {/* Card 7: Bali-Zoo-1 */}
          <div className="relative w-[300px] md:w-[350px] lg:w-[420px] overflow-hidden group bg-slate-50">

            <Link href="">
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
                <h2 className="font-bold text-2xl py-3">Visiting Zoo</h2>
                <p className="mt-3">
                  A visit to a zoo in Bali offers a unique and exciting experience, combining the islands natural beauty with opportunities to observe exotic wildlife up close...
                </p>
                <button className="mt-4 px-5 py-2 rounded-sm border-2 border-[#1f1f1f] text-sm">
                  DETAILS
                </button>
              </div>
            </Link>
          </div>


          {/* Card 8: Tirt Bali Tour */}
          <div className="relative w-[300px] md:w-[350px] lg:w-[420px] overflow-hidden group bg-slate-50">
            <Link href="">
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
                <h2 className="font-bold text-2xl py-3">Water Sports</h2>
                <p className="mt-3">
                  Bali is a paradise for water sports enthusiasts, offering a wide range of activities that cater to thrill-seekers and those looking for a relaxing time on the water...
                </p>
                <button className="mt-4 px-5 py-2 rounded-sm border-2 border-[#1f1f1f] text-sm">
                  DETAILS
                </button>
              </div>
            </Link>
          </div>


          {/* Card 9: horse-riding */}
          <div className="relative w-[300px] md:w-[350px] lg:w-[420px] overflow-hidden group bg-slate-50">
            <Link href="">
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
                <h2 className="font-bold text-2xl py-3">Horse Riding</h2>
                <p className="mt-3">
                  Horse riding in Bali offers a serene and picturesque way to explore the islands beautiful landscapes. Whether you are galloping along the beach, riding through lush rice fields...
                </p>
                <button className="mt-4 px-5 py-2 rounded-sm border-2 border-[#1f1f1f] text-sm">
                  DETAILS
                </button>
              </div>
            </Link>
          </div>
          </div>
      </div>
    </main>
  )
};
