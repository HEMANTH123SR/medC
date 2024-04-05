"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";


const SearchPage = () => {
    type ResearchType = {
        _id: string,
        userId: string,
        userName: string,
        userImage: string,
        heading: string,
        description: string,
        fileUrl: string,
        createdAt: string,
    }
    const [search, setSearch] = useState<string>("");
    const inputRef = useRef<HTMLInputElement | null>(null);
    const [research, setResearch] = useState<ResearchType[]>();

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, []);

    useEffect(() => {
        (async () => {
            if (search.trim() === "") {
                return;
            }
            const res = await fetch(`http://localhost:3000/api/search?q=${search}`);
            const data = await res.json();
            setResearch(data)
        })();
    }, [search]);

    return (
        <div className="flex flex-col space-y-1 w-full justify-start items-center mt-6 h-screen ">
            <input
                className="w-10/12 font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl  font-sans custom-placeholder no-border outline-none"
                ref={inputRef}
                type="text"
                aria-label="search"
                placeholder="Search..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                style={{ color: "black" }}
            />
            <div className="w-10/12 h-0.5 bg-primary "></div>
            <div className="min-h-4"></div>
            <div className="grid grid-cols-1 space-y-5 px-5">
                {

                    research && research.map((data) => {
                        const createdAtDate = new Date(data.createdAt);
                        const timeDifferenceHours = Math.floor((Date.now() - createdAtDate.getTime()) / (1000 * 60 * 60));
                        return (
                            <Link key={data._id} href={`/research/${data._id}`}>
                                <div className="bg-white shadow-md rounded-md p-4 cursor-pointer" >
                                    <h3 className="text-lg font-bold mb-2">
                                        <a href="#" className="text-primary-500 hover:text-primary-600">
                                            {data.heading.substring(0, 70)}
                                        </a>
                                    </h3>
                                    <p className="text-gray-600 mb-4">
                                        {data.description.substring(0, 110)}
                                    </p>
                                    <div className="flex items-center space-x-2 text-gray-600">
                                        <svg
                                            className="w-5 h-5"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fill-rule="evenodd"
                                                d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                                                clip-rule="evenodd"
                                            />
                                        </svg>

                                        <span>
                                            {`Last updated ${timeDifferenceHours} hours ago`}
                                        </span>

                                    </div>
                                </div>
                            </Link>)

                    }

                    )
                }


            </div>
        </div>
    );
};

export default SearchPage;