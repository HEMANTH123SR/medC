"use client"

import { UserButton } from "@clerk/nextjs"
import Link from 'next/link';
export const Nav = () => {
    return (
        <div className="w-full">
            <nav className="flex w-full justify-between items-center px-6  h-16 ">
                {/* logo */}
                <Link href={"/"}>
                    <div className="flex flex-row justify-center items-center space-x-1.5">
                        <div className="flex flex-col justify-center items-center space-y-0.5">
                            <div className="h-2.5 w-7 rounded-full bg-black"></div>
                            <div className="h-1.5 w-4 rounded-full bg-black"></div>
                        </div>
                        <h1 className="font-bold font-sans text-black text-2xl">
                            med<span className="px-0.5">C</span>
                        </h1>
                    </div>
                </Link>

                {/* navigation */}
                <div className="flex justify-center items-center space-x-1 text-black text-lg font-sans mr-10">
                    {["Home", "Insight", "Resources", "Community", "Trending", "MyProfile"].map(
                        (link) => (
                            <Link href={`${link === "Home" ? "/" : link.toLowerCase()}`} key={link}>
                                <span

                                    className="px-5 py-2 hover:bg-[#333441] rounded-full font-medium hover:cursor-pointer hover:text-white"
                                >
                                    {link}
                                </span>
                            </Link>
                        )
                    )}
                </div>

                {/* user auth section */}
                <div>
                    <UserButton />
                </div>
            </nav>
            <div className="w-full px-3 rounded-full bg-slate-700 h-0.5"></div>
        </div>
    )
}