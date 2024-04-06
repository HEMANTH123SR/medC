"use client"
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';
import React, { useEffect, useState } from "react";

import { Badge } from "@/components/ui/badge";
const ResearchDescription = ({ params }: { params: { id: string } }) => {
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

    const [reseaches, setResearches] = useState<ResearchType>();

    useEffect(() => {
        (async () => {
            const res = await fetch(`https://medc.vercel.app/api/research/${params.id}`);
            const data = await res.json();
            setResearches(data)
        })()
    }, [])

    return (
        <div className="w-full py-6">
            <div className="container grid max-w-6xl items-start px-4 gap-6 md:gap-8 md:px-6">
                <div className="flex justify-start items-center">
                    <Badge variant="outline">Research</Badge>
                </div>
                <div className="space-y-2">
                    <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                        {reseaches?.heading}
                    </h1>
                    <p className="text-gray-500 dark:text-gray-400">
                        Project ID: {reseaches?._id}
                    </p>
                </div>
                <div className="grid gap-4">
                    <div className="space-y-2">
                        <h2 className="text-2xl font-bold tracking-tight"></h2>
                        <p className="text-gray-500 md:text-base/relaxed lg:text-xl/relaxed xl:text-base/relaxed dark:text-gray-400">
                            {
                                reseaches?.description
                            }
                        </p>
                    </div>
                </div>
            </div>
            <div className='flex justify-center items-center my-14'>
                <iframe src={reseaches?.fileUrl} width={"90%"} height={"900"}></iframe>

            </div>

        </div>
    );
};

export default ResearchDescription;
