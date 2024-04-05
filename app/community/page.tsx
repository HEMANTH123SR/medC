import { Button } from "@/components/ui/button";
import React from "react";

const Community = () => {
  return (
    <main className="flex-1 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold mb-4">medC Community</h1>
        <p className="text-gray-600 mb-8">
          Collaborate, share insights, and connect with fellow researchers and
          healthcare professionals.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <img
              src="https://as1.ftcdn.net/v2/jpg/04/29/18/14/1000_F_429181436_bTt0ECTbQR2vxIb7kk0TKcqiAyBmXZ8y.jpg"
              alt="Community Image"
              className="rounded-t-lg w-full h-48 object-cover"
            />
            <div className="p-4">
              <div className="flex justify-between items-center mb-2">
                <h2 className="text-xl font-bold">Oncology Research Group</h2>
                <span className=" text-white px-2 py-1 rounded text-sm">
                  1.2K Members
                </span>
              </div>
              <p className="text-gray-600 mb-4">
                Discuss the latest advancements in cancer research and
                treatment.
              </p>
              <div className="flex justify-between items-center">
                <a
                  href="#"
                  className="bg-black text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-300"
                >
                  Join Group
                </a>
                <div className="flex space-x-2">
                  <a
                    href="#"
                    className="text-gray-400 hover:text-gray-600 transition-colors duration-300"
                  >
                    <i className="fas fa-share-alt"></i>
                  </a>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-gray-600 transition-colors duration-300"
                  >
                    <i className="fas fa-bookmark"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <img
              src="https://as2.ftcdn.net/v2/jpg/04/88/97/73/1000_F_488977381_afWaH0TYpZWnIGAfzYlHnh2krermbHYQ.jpg"
              alt="Community Image"
              className="rounded-t-lg w-full h-48 object-cover"
            />
            <div className="p-4">
              <div className="flex justify-between items-center mb-2">
                <h2 className="text-xl font-bold">Genomics Research Forum</h2>
                <span className=" text-white px-2 py-1 rounded text-sm">
                  850 Members
                </span>
              </div>
              <p className="text-gray-600 mb-4">
                Explore the latest breakthroughs in genomics and personalized
                medicine.
              </p>
              <div className="flex justify-between items-center">
                <a
                  href="#"
                  className="bg-black text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-300"
                >
                  Join Group
                </a>
                <div className="flex space-x-2">
                  <a
                    href="#"
                    className="text-gray-400 hover:text-gray-600 transition-colors duration-300"
                  >
                    <i className="fas fa-share-alt"></i>
                  </a>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-gray-600 transition-colors duration-300"
                  >
                    <i className="fas fa-bookmark"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <img
              src="https://as2.ftcdn.net/v2/jpg/06/41/36/75/1000_F_641367549_BtgW55fKAVnIDMoA455gzNR4tGt1CEdr.jpg"
              alt="Community Image"
              className="rounded-t-lg w-full h-48 object-cover"
            />
            <div className="p-4">
              <div className="flex justify-between items-center mb-2">
                <h2 className="text-xl font-bold">
                  Infectious Disease Collaboration
                </h2>
                <span className=" text-white px-2 py-1 rounded text-sm">
                  1.5K Members
                </span>
              </div>
              <p className="text-gray-600 mb-4">
                Collaborate on research and strategies to combat infectious
                diseases.
              </p>
              <div className="flex justify-between items-center">
                <a
                  href="#"
                  className="bg-black text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-300"
                >
                  Join Group
                </a>
                <div className="flex space-x-2">
                  <a
                    href="#"
                    className="text-gray-400 hover:text-gray-600 transition-colors duration-300"
                  >
                    <i className="fas fa-share-alt"></i>
                  </a>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-gray-600 transition-colors duration-300"
                  >
                    <i className="fas fa-bookmark"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <img
              src="https://as1.ftcdn.net/v2/jpg/07/75/04/74/1000_F_775047408_KR3rduRGmLJfmLQ3GZNokKO2J1M0fx9x.jpg"
              alt="Community Image"
              className="rounded-t-lg w-full h-48 object-cover"
            />
            <div className="p-4">
              <div className="flex justify-between items-center mb-2">
                <h2 className="text-xl font-bold">Rare Disease Network</h2>
                <span className="bg-black text-white px-2 py-1 rounded text-sm">
                  700 Members
                </span>
              </div>
              <p className="text-gray-600 mb-4">
                Collaborate on research and support for rare disease patients
                and their families.
              </p>
              <div className="flex justify-between items-center">
                <a
                  href="#"
                  className="bg-black text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-300"
                >
                  Join Group
                </a>
                <div className="flex space-x-2">
                  <a
                    href="#"
                    className="text-gray-400 hover:text-gray-600 transition-colors duration-300"
                  >
                    <i className="fas fa-share-alt"></i>
                  </a>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-gray-600 transition-colors duration-300"
                  >
                    <i className="fas fa-bookmark"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <img
              src="https://as2.ftcdn.net/v2/jpg/04/65/77/75/1000_F_465777510_268Wa3uQVuH7NDPByUfS45TQnNb1cwDE.jpg"
              alt="Community Image"
              className="rounded-t-lg w-full h-48 object-cover"
            />
            <div className="p-4">
              <div className="flex justify-between items-center mb-2">
                <h2 className="text-xl font-bold">Neuroscience Research Hub</h2>
                <span className=" text-white px-2 py-1 rounded text-sm">
                  1.1K Members
                </span>
              </div>
              <p className="text-gray-600 mb-4">
                Discuss the latest advancements in neuroscience research and
                clinical applications.
              </p>
              <div className="flex justify-between items-center">
                <a
                  href="#"
                  className=" text-white px-4 py-2 rounded hover:bg-blue-600 bg-black transition-colors duration-300"
                >
                  Join Group
                </a>
                <div className="flex space-x-2">
                  <a
                    href="#"
                    className="text-gray-400 hover:text-gray-600 transition-colors duration-300"
                  >
                    <i className="fas fa-share-alt"></i>
                  </a>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-gray-600 transition-colors duration-300"
                  >
                    <i className="fas fa-bookmark"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <img
              src="https://as2.ftcdn.net/v2/jpg/04/65/77/55/1000_F_465775531_9yso8A4GcWcTsLtRcgR3rkLTLLNRJQ0r.jpg"
              alt="Community Image"
              className="rounded-t-lg w-full h-48 object-cover"
            />
            <div className="p-4">
              <div className="flex justify-between items-center mb-2">
                <h2 className="text-xl font-bold">
                  Cardiovascular Research Network
                </h2>
                <span className=" text-white px-2 py-1 rounded text-sm">
                  900 Members
                </span>
              </div>
              <p className="text-gray-600 mb-4">
                Collaborate on research and advancements in cardiovascular
                health and disease.
              </p>
              <div className="flex justify-between items-center">
                <a
                  href="#"
                  className="bg-black text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-300"
                >
                  Join Group
                </a>
                <div className="flex space-x-2">
                  <a
                    href="#"
                    className="text-gray-400 hover:text-gray-600 transition-colors duration-300"
                  >
                    <i className="fas fa-share-alt"></i>
                  </a>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-gray-600 transition-colors duration-300"
                  >
                    <i className="fas fa-bookmark"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Community;
