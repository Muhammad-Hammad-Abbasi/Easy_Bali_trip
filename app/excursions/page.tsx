import Link from "next/link";
import Image from "next/image";

export default function Excursions() {
  return (
    <main className="font-medium">
      <div className="">
        <Image
          src={"/Excursions-Bali.png"}
          height={0}
          width={1400}
          alt="excursions"
          className="w-[380px] h-[180px] md:w-[900px] md:h-[350px] lg:w-[1400px] lg:h-[350px]"

        />
      </div>


      {/* Title Section  */}
      <div className="flex items-center text-2xl md:text-4xl lg:text-4xl font-bold pt-10 p-5">
        <h1 className="font-serif">Choose Our Tour Packages</h1>
      </div>

      {/* Excursions Post */}
      <div className="flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-5 px-4 text-[#3f3f3f]">


          {/* Card 1: Ubud Tour */}
          <div className="relative w-[300px] md:w-[350px] lg:w-[420px] overflow-hidden group bg-slate-50">

              <Link href={""}>
              <div className="overflow-hidden">
                <Image
                  src="/Ubud.png"
                  height={450}
                  width={420}
                  alt="Ubud Tour"
                  className="h-[280px] object-cover transform group-hover:scale-125 transition-transform duration-500 ease-in-out"
                />
              </div>
              <div className="p-4">
                <h2 className="font-bold text-2xl p-3">Ubud Tour</h2>
                <p className="mt-3">
                  As Bali known with its art and culture, then you will ask, where is the center of art and culture in Bali? Surely most people who have known Bali will answer, Ubud...
                </p>
                <button className="mt-4 px-5 py-2 rounded-sm border-2 border-[#1f1f1f] text-sm">
                  DETAILS
                </button>
              </div>
              </Link>
          </div>


          {/* Card 2: North Bali Tour */}
          <div className="relative w-[300px] md:w-[350px] lg:w-[420px] overflow-hidden group bg-slate-50">
            
            <Link href={""}>
              <div className="overflow-hidden">
                <Image
                  src="/eastbali.png"
                  height={450}
                  width={420}
                  alt="North Bali"
                  className="h-[280px] object-cover transform group-hover:scale-125 transition-transform duration-500 ease-in-out"
                />
              </div>
              <div className="p-4">
                <h2 className="font-bold text-2xl p-3">North Bali Tour</h2>
                <p className="mt-3">
                  If you ask, where is the center of art and culture in Bali? Surely most people who have known Bali will answer, Ubud. Not only art and culture, Ubud also offers...
                </p>
                <button className="mt-4 px-5 py-2 rounded-sm border-2 border-[#1f1f1f] text-sm">
                  DETAILS
                </button>
              </div>
              </Link>
          </div>


          {/* Card 3: East Bali Tour */}
          <div className="relative w-[300px] md:w-[350px] lg:w-[420px] overflow-hidden group bg-slate-50">
             
             <Link href={""}>
              <div className="overflow-hidden">
                <Image
                  src="/northbali.png"
                  height={450}
                  width={420}
                  alt="East Bali"
                  className="h-[280px] object-cover transform group-hover:scale-125 transition-transform duration-500 ease-in-out"
                />
              </div>
              <div className="p-4">
                <h2 className="font-bold text-2xl p-3">East Bali Tour</h2>
                <p className="mt-3">
                  East Bali Tour is a Bali Full Day Tour Packages is to Visit places of interest in the eastern part of Bali Islands. As for the east bali tour, this is a one-day tour that we made for...
                </p>
                <button className="mt-4 px-5 py-2 rounded-sm border-2 border-[#1f1f1f] text-sm">
                  DETAILS
                </button>
              </div>
              </Link>
          </div>

          {/* Card 4: South Bali Tour */}
          <div className="relative w-[300px] md:w-[350px] lg:w-[420px] overflow-hidden group bg-slate-50">
            
            <Link href={""}>
              <div className="overflow-hidden">
                <Image
                  src="/southbali-4.png"
                  height={450}
                  width={420}
                  alt="southbali"
                  className="h-[280px] object-cover transform group-hover:scale-125 transition-transform duration-500 ease-in-out"
                />
              </div>
              <div className="p-4">
                <h2 className="font-bold text-2xl p-3">South Bali Tour</h2>
                <p className="mt-3">
                  As Bali Island does not have many freeways to get to tourism destinations, most tourists when planning a vacation will choose tourism destinations that are in the same direction...
                </p>
                <button className="mt-4 px-5 py-2 rounded-sm border-2 border-[#1f1f1f] text-sm">
                  DETAILS
                </button>
              </div>
              </Link>
          </div>

          {/* Card 5: Private Bali Tour */}
          <div className="relative w-[300px] md:w-[350px] lg:w-[420px] overflow-hidden group bg-slate-50">
             
            <Link href={""}>
              <div className="overflow-hidden">
                <Image
                  src="/privatetour-5.png"
                  height={450}
                  width={420}
                  alt="privatetour"
                  className="h-[280px] object-cover transform group-hover:scale-125 transition-transform duration-500 ease-in-out"
                />
              </div>
              <div className="p-4">
                <h2 className="font-bold text-2xl p-3">Private Tour To Ubud</h2>
                <p className="mt-3">
                  If you ask, what are the most popular tourist destinations in Bali besides white sand beaches, both for foreign tourists and Indonesian tourists? Then the answer is Ubud Bali...
                </p>
                <button className="mt-4 px-5 py-2 rounded-sm border-2 border-[#1f1f1f] text-sm">
                  DETAILS
                </button>
              </div>
              </Link>
          </div>

          {/* Card 6: West penida Tour */}
          <div className="relative w-[300px] md:w-[350px] lg:w-[420px] overflow-hidden group bg-slate-50">
            
            <Link href={""}>
              <div className="overflow-hidden">
                <Image
                  src="/westpenida.png"
                  height={450}
                  width={420}
                  alt="westpenida"
                  className="h-[280px] object-cover transform group-hover:scale-125 transition-transform duration-500 ease-in-out"
                />
              </div>
              <div className="p-4">
                <h2 className="font-bold text-2xl p-3">West Nusa Penida Tour </h2>
                <p className="mt-3">
                  As we know, Nusa Penida has East and West area to visit. In east, you can visit a stunning white Atuh Beach, spectacular hills at Diamond Beach, panoramic viewpoint at Tree ...
                </p>
                <button className="mt-4 px-5 py-2 rounded-sm border-2 border-[#1f1f1f] text-sm">
                  DETAILS
                </button>
              </div>
              </Link>
          </div>


          {/* Card : Nusa Penida Village Tours */}
          <div className="relative w-[300px] md:w-[350px] lg:w-[420px] overflow-hidden group bg-slate-50">
              <Link href={""}>
              <div className="overflow-hidden">
                <Image
                  src="/Nusa-Penida-Village.png"
                  height={450}
                  width={420}
                  alt="westpenida"
                  className="h-[280px] object-cover transform group-hover:scale-125 transition-transform duration-500 ease-in-out"
                />
              </div>
              <div className="p-4">
                <h2 className="font-bold text-2xl p-3">Nusa Penida Village Tours </h2>
                <p className="mt-3">
                  Not only the beaches, in Nusa Penida, you can have some interactions with the locals by visiting villages in Nusa Penida. You can visit Tanglad village and join the craftsman...
                </p>
                <button className="mt-4 px-5 py-2 rounded-sm border-2 border-[#1f1f1f] text-sm">
                  DETAILS
                </button>
              </div>
              </Link>
          </div>


          {/* Card 8: West penida Tour */}
          <div className="relative w-[300px] md:w-[350px] lg:w-[420px] overflow-hidden group bg-slate-50">
            
              <div className="overflow-hidden">
                <Image
                  src="/Sharing-package.png"
                  height={450}
                  width={420}
                  alt="Sharing-package"
                  className="h-[280px] object-cover transform group-hover:scale-125 transition-transform duration-500 ease-in-out"
                />
              </div>
              <div className="p-4">
                <h2 className="font-bold text-2xl p-3">Explore Nusa penida Tour </h2>
                <p className="mt-3">
                  If you are not satisfied only to visit east or west Nusa Penida, the you can combined it to reach all destination that you want to visit. As Nusa Penida is famous with its beaches...
                </p>
                <button className="mt-4 px-5 py-2 rounded-sm border-2 border-[#1f1f1f] text-sm">
                  DETAILS
                </button>
              </div>
            
          </div>


          {/* Card 9: West penida Tour */}
          <div className="relative w-[300px] md:w-[350px] lg:w-[420px] overflow-hidden group bg-slate-50">
             
             <Link href={""}>
              <div className="overflow-hidden">
                <Image
                  src="/Diamond-Beach-Nusa.png"
                  height={450}
                  width={420}
                  alt="Diamond-Beach-Nusa"
                  className="h-[280px] object-cover transform group-hover:scale-125 transition-transform duration-500 ease-in-out"
                />
              </div>
              <div className="p-4">
                <h2 className="font-bold text-2xl p-3">East Nusa penida Tour </h2>
                <p className="mt-3">
                  Nusa Penida is one of the beautiful island in Bali that offers a memorable vacation experience. Nusa Penida is located side by side with two other famous islands, namely Nusa...
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
