import React from 'react'

export const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white font-sans">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    <div>
                        <h3 className="text-lg font-semibold mb-4">About</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-gray-400">Company</a></li>
                            <li><a href="#" className="hover:text-gray-400">Team</a></li>
                            <li><a href="#" className="hover:text-gray-400">Careers</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Platform</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-gray-400">Data Management</a></li>
                            <li><a href="#" className="hover:text-gray-400">Collaboration Tools</a></li>
                            <li><a href="#" className="hover:text-gray-400">Research Workflow</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Resources</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-gray-400">Blog</a></li>
                            <li><a href="#" className="hover:text-gray-400">Help Center</a></li>
                            <li><a href="#" className="hover:text-gray-400">Documentation</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Contact</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-gray-400">Email</a></li>
                            <li><a href="#" className="hover:text-gray-400">Phone</a></li>
                            <li><a href="#" className="hover:text-gray-400">Address</a></li>
                        </ul>
                    </div>
                </div>
                <div className="mt-8 border-t border-gray-700 pt-8 text-center text-gray-400">
                    &copy; 2023 MedCollaborate. All rights reserved.
                </div>
            </div>
        </footer>
    )
}

