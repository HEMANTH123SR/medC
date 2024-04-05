"use client";
import React, { useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
const AddResearch = () => {
    const { user } = useUser();
    const [userId, setUserId] = useState("");
    const [userName, setUserName] = useState("");
    const [userImage, setUserImage] = useState("");
    const [heading, setheading] = useState("");
    const [description, setDescription] = useState("");
    const [fileUrl, setFileUrl] = useState("");

    useEffect(() => {
        setUserId(user?.id as string);
        setUserName(user?.firstName as string);
        setUserImage(user?.imageUrl as string);
    }, [user]);

    const handleSubmit = async () => {
        try {
            const response = await fetch("/api/addResearch", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    userId,
                    userName,
                    userImage,
                    heading,
                    description,
                    fileUrl
                }),
            });

            console.log("response :: ", response);
            if (response.ok) {
                // Handle successful response
                console.log("Research submitted successfully");
            } else {
                // Handle error response
                console.error("Failed to submit research");
            }
        } catch (error) {
            console.error("Error submitting research:", error);
        }
    };

    return (
        <div className="px-4 py-6 font-sans w-full h-min-screen">
            <div className="mx-auto prose max-w-3xl text-center lg:text-left">
                <h1 className="text-5xl font-bold">Submit Your Research</h1>
                <p className="text-lg font-semibold ">
                    Please fill in the form below and upload your research paper. We will
                    review your submission and get back to you.
                </p>
            </div>
            <div className="mx-20 space-y-8 my-6">
                <div className="space-y-6 flex justify-center items-center flex-col">
                    <div className="space-y-2">
                        <Label htmlFor="name">Heading</Label>
                        <Input
                            id="name"
                            placeholder="Enter Title of the project"
                            required
                            className="w-[600px]"
                            value={heading}
                            onChange={(event) => {
                                setheading(event.target.value);
                            }}
                        />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="description">Research Brief</Label>
                        <Textarea
                            id="description"
                            placeholder="Enter a brief description of your research"
                            required
                            rows={12}
                            className="w-[600px]"
                            value={description}
                            onChange={(event) => {
                                setDescription(event.target.value);
                            }}
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="file">Upload PDF</Label>
                        <Input id="file" type="text" className="w-[600px]" value={fileUrl} onChange={(event) => {
                            setFileUrl(event.target.value)
                        }} />
                    </div>
                    <div className="flex justify-center items-center w-[600px]">
                        <Button
                            className="w-full"
                            type="submit"
                            onClick={() => handleSubmit()}
                        >
                            Submit
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddResearch;
