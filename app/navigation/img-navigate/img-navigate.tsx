import Link from "next/link";
import Image from "next/image";

function ImgNavigate() {
    return (
        <main>
            <div className="flex justify-center font-medium">
                <ul className=" grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-10 md:gap-20 lg:gap-32 py-10 px-4 font-semibold">

                    <li>
                        <Link href="/yacht-charter">
                            <Image
                                src={"/Yacht.png"}
                                height={170}
                                width={170}
                                alt="helicopters"
                                className="rounded-full"
                            />
                            <p className="flex justify-center pt-3">Yacht Charter</p>
                        </Link>
                    </li>

                    <li>
                        <Link href="/excursions">
                            <Image
                                src={"/Excursions.png"}
                                height={170}
                                width={170}
                                alt="helicopters"
                                className="rounded-full"
                            />
                            <p className="flex justify-center pt-3">Excursios</p>
                        </Link>
                    </li>

                    <li>
                        <Link href="/activities">
                            <Image
                                src={"/activities.png"}
                                height={170}
                                width={170}
                                alt="activities"
                                className="rounded-full"
                            />
                            <p className="flex justify-center pt-3">Activities</p>
                        </Link>
                    </li>
                    
                    <li>
                        <Link href="/helicopter">
                            <Image
                                src={"/logo.png"}
                                height={170}
                                width={170}
                                alt="helicopter"
                                className="rounded-full"
                            />
                            <p className="flex justify-center pt-3">Helicopter</p>
                        </Link>
                    </li>
                    
                </ul>
            </div>
        </main>
    )
}
export default ImgNavigate;
