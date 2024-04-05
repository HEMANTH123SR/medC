import { User, Search, Microscope, Users, AreaChart } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col h-screen w-full  ">
      {
        // search and other detailed component
      }
      <div className="flex flex-col ml-24 mt-16 text-black  ">
        <h1 className="text-8xl font-sans font-bold">Discover Heal /</h1>
        <h1 className="text-8xl font-sans font-bold ">Collaborate.</h1>
        <h2 className="text-3xl font-sans font-medium mt-3 mx-5">
          A Collaboration Platform for
        </h2>
        <h2 className="text-3xl font-sans font-medium mx-5">doctors.</h2>
        <Link href={"/search"}>
          <div className="h-14 w-80 border  bg-white text-slate-600 rounded-full my-3 flex justify-center items-center space-x-3  px-2 ">
            <Search className="h-5 w-5" />
            <span className="font-sans ">Search Research Paper ,Doctor... </span>
          </div>
        </Link>
        <div className="flex space-x-5 mt-5">
          <div className="h-12 w-36  rounded-full flex justify-center items-center space-x-4 border    ">
            <Microscope className="w-5 h-5  " />
            <span className="font-sans">Research</span>
          </div>
          <div className="h-12 w-36  rounded-full flex justify-center items-center space-x-4 border ">
            <Users className="w-5 h-5  " />
            <span className="font-sans">Collab</span>
          </div>
          <div className="h-12 w-36  rounded-full flex justify-center items-center space-x-4 border ">
            <AreaChart className="w-5 h-5  " />
            <span className="font-sans">Latest</span>
          </div>
        </div>
      </div>
    </main>
  );
}
