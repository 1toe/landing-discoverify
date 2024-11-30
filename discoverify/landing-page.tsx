"use client"

import { Play, Download } from 'lucide-react'
import { Button } from "@/components/ui/button"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#191414] to-[#1DB954] text-white">
      <div className="container mx-auto px-4 py-20 flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left Content */}
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-5xl lg:text-7xl font-bold mb-6">
            Introducing
            <br />
            Terranuova.
          </h1>
          <p className="text-lg mb-8 text-gray-200 max-w-xl">
            This is a single page website that can easily be adapted for any kind of
            mobile or web product. This part should be a short description of the
            product and it should be pretty short.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button
              variant="outline"
              className="bg-transparent border-2 border-white hover:bg-white/10"
            >
              <Play className="mr-2 h-4 w-4" />
              View Live Demo
            </Button>
            <Button className="bg-[#1DB954] hover:bg-[#1ed760] border-none">
              <Download className="mr-2 h-4 w-4" />
              Download the App
            </Button>
          </div>
        </div>

        {/* Right Content - Phone Mockup */}
        <div className="flex-1 max-w-sm lg:max-w-md">
          <div className="relative">
            {/* Phone Frame */}
            <div className="bg-white rounded-[3rem] p-4 shadow-2xl">
              {/* App Screenshot */}
              <div className="bg-[#191414] rounded-[2.5rem] overflow-hidden">
                {/* App Header */}
                <div className="bg-gradient-to-r from-[#1DB954] to-[#1ed760] p-4">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold">Home</span>
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </div>
                </div>

                {/* App Content */}
                <div className="p-4">
                  {/* Navigation Pills */}
                  <div className="flex gap-4 text-sm mb-4 text-gray-400">
                    <span className="text-white">Most Popular</span>
                    <span>Featured</span>
                    <span>Top Sellers</span>
                  </div>

                  {/* Profile Card */}
                  <div className="bg-[#282828] rounded-lg p-4">
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 bg-gray-600 rounded-full mb-2">
                        <img
                          src="/placeholder.svg?height=64&width=64"
                          alt="Profile"
                          className="w-full h-full rounded-full object-cover"
                        />
                      </div>
                      <h3 className="text-lg font-semibold">Mark Robertson</h3>
                      <p className="text-sm text-gray-400 mb-2">
                        San Francisco, California
                      </p>
                      {/* Rating Stars */}
                      <div className="flex gap-1 mb-4">
                        {[1, 2, 3, 4].map((star) => (
                          <svg
                            key={star}
                            className="w-5 h-5 text-[#1DB954]"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                        <svg
                          className="w-5 h-5 text-gray-600"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      </div>
                      <Button
                        variant="outline"
                        className="w-full border-[#1DB954] text-[#1DB954] hover:bg-[#1DB954] hover:text-white"
                      >
                        FOLLOW STORE
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

