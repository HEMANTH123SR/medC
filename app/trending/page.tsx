import React from "react";

const Trending = () => {
    return (
        <div className="container mx-auto my-10 px-4 font-sans">
            <h1 className="text-3xl font-bold mb-6">
                Medical Research Collaboration - Trending
            </h1>

            <div className="grid grid-cols-3 gap-6">
                <div className="col-span-2 space-y-6">
                    <div className="grid grid-cols-2 gap-6">
                        <div className="bg-white rounded-lg shadow-md p-4">
                            <h2 className="text-xl font-bold mb-2">Trending Data</h2>
                            <div className="space-y-4">
                                <div className="flex justify-between items-center">
                                    <div>
                                        <h3 className="text-lg font-bold">
                                            COVID-19 Clinical Dataset
                                        </h3>
                                        <p className="text-gray-600">
                                            Description of the COVID-19 clinical dataset
                                        </p>
                                    </div>
                                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                        Access
                                    </button>
                                </div>
                                <div className="flex justify-between items-center">
                                    <div>
                                        <h3 className="text-lg font-bold">
                                            Cancer Research Insights
                                        </h3>
                                        <p className="text-gray-600">
                                            Description of the cancer research insights
                                        </p>
                                    </div>
                                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                        Access
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-lg shadow-md p-4">
                            <h2 className="text-xl font-bold mb-2">Trending Protocols</h2>
                            <div className="space-y-4">
                                <div className="flex justify-between items-center">
                                    <div>
                                        <h3 className="text-lg font-bold">
                                            COVID-19 Treatment Protocol
                                        </h3>
                                        <div className="flex items-center text-gray-500 mt-2">
                                            <svg
                                                className="w-4 h-4 mr-1"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path>
                                                <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path>
                                            </svg>
                                            <span>204 Views</span>
                                        </div>
                                    </div>
                                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                        Access
                                    </button>
                                </div>
                                <div className="flex justify-between items-center">
                                    <div>
                                        <h3 className="text-lg font-bold">
                                            Diabetes Management Guidelines
                                        </h3>
                                        <div className="flex items-center text-gray-500 mt-2">
                                            <svg
                                                className="w-4 h-4 mr-1"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path>
                                                <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path>
                                            </svg>
                                            <span>148 Views</span>
                                        </div>
                                    </div>
                                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                        Access
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg shadow-md p-4">
                        <h2 className="text-xl font-bold mb-4">Latest News</h2>
                        <div className="grid grid-cols-3 gap-4">
                            <div className="bg-gray-200 rounded-lg p-4">
                                <img
                                    src="https://as1.ftcdn.net/v2/jpg/03/33/03/90/1000_F_333039083_vkw5CtEmwFSv4ibMFpOpmv49pPTawcDh.jpg"
                                    alt="News Image"
                                    className="rounded-lg mb-2"
                                />
                                <h3 className="text-lg font-bold mb-2">
                                    New COVID-19 Treatment Breakthrough
                                </h3>
                                <p className="text-gray-600">
                                    Researchers have developed a promising new treatment for
                                    COVID-19 that shows promising results in clinical trials.
                                </p>
                                <a href="#" className="text-blue-500 hover:underline">
                                    Read More
                                </a>
                            </div>
                            <div className="bg-gray-200 rounded-lg p-4">
                                <img
                                    src="https://as2.ftcdn.net/v2/jpg/03/88/73/97/1000_F_388739702_2mJB7xa0qr2sNMH2yNRMGu8XjxPqJEKC.jpg"
                                    alt="News Image"
                                    className="rounded-lg mb-2"
                                />
                                <h3 className="text-lg font-bold mb-2">
                                    Advances in Cancer Immunotherapy
                                </h3>
                                <p className="text-gray-600">
                                    New immunotherapy treatments are showing significant
                                    improvements in the fight against various forms of cancer.
                                </p>
                                <a href="#" className="text-blue-500 hover:underline">
                                    Read More
                                </a>
                            </div>
                            <div className="bg-gray-200 rounded-lg p-4">
                                <img
                                    src="https://as2.ftcdn.net/v2/jpg/02/80/00/89/1000_F_280008978_BLi0xyUqULijpvBmC8qCnfYXsAkHAjmB.jpg"
                                    alt="News Image"
                                    className="rounded-lg mb-2"
                                />
                                <h3 className="text-lg font-bold mb-2">
                                    Breakthrough in Alzheimers Research
                                </h3>
                                <p className="text-gray-600">
                                    Researchers have made a major discovery that could lead to new
                                    treatments for Alzheimers disease.
                                </p>
                                <a href="#" className="text-blue-500 hover:underline">
                                    Read More
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-span-1 space-y-6">
                    <div className="bg-white rounded-lg shadow-md p-4">
                        <h2 className="text-xl font-bold mb-4">Featured Tools</h2>
                        <div className="space-y-4">
                            <div className="flex items-center">
                                <div className="mr-4">
                                    <img
                                        src="https://as2.ftcdn.net/v2/jpg/04/27/21/51/1000_F_427215158_ypeR8K12betLx2tmIbxsyJbWndMt0Bwo.jpg"
                                        alt="Tool Icon"
                                        className="rounded-lg"
                                    />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold">Disease Symptom Checker</h3>
                                    <p className="text-gray-600">
                                        Identify potential conditions based on your symptoms.
                                    </p>
                                    <a href="#" className="text-blue-500 hover:underline">
                                        Learn More
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <div className="mr-4">
                                    <img
                                        src="https://as1.ftcdn.net/v2/jpg/06/00/86/82/1000_F_600868260_lhHrS90V4690emwjsHdLR9ZaJjSpe5JT.jpg"
                                        alt="Tool Icon"
                                        className="rounded-lg"
                                    />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold">
                                        Drug Interaction Analyzer
                                    </h3>
                                    <p className="text-gray-600">
                                        Check for potential interactions between medications.
                                    </p>
                                    <a href="#" className="text-blue-500 hover:underline">
                                        Learn More
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg shadow-md p-4">
                        <h2 className="text-xl font-bold mb-4">Featured Technologies</h2>
                        <div className="space-y-4">
                            <div className="flex items-center">
                                <div className="mr-4">
                                    <img
                                        src="https://as2.ftcdn.net/v2/jpg/03/84/77/05/1000_F_384770585_cL7QvotmVq9Cb8oXWIo7F4GZq55Ecf55.jpg"
                                        alt="Technology Icon"
                                        className="rounded-lg"
                                    />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold">Telemedicine Solutions</h3>
                                    <p className="text-gray-600">
                                        Enabling remote healthcare consultations and monitoring.
                                    </p>
                                    <a href="#" className="text-blue-500 hover:underline">
                                        Learn More
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <div className="mr-4">
                                    <img
                                        src="https://as1.ftcdn.net/v2/jpg/05/20/67/90/1000_F_520679014_dfwxWizNEJVjgYoefGgJYQxlSCYFlL9n.jpg"
                                        alt="Technology Icon"
                                        className="rounded-lg"
                                    />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold">Precision Medicine</h3>
                                    <p className="text-gray-600">
                                        Personalized healthcare based on genetic and molecular data.
                                    </p>
                                    <a href="#" className="text-blue-500 hover:underline">
                                        Learn More
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Trending;
