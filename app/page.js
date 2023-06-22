import Image from 'next/image'
import Link from "next/link"
import { IoIosArrowBack, IoIosKey } from "react-icons/io"


export default function Home() {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-96">
        <div className="flex flex-col space-y-2 text-center">
          <IoIosKey className="mx-auto h-6 w-6 text-secondary" />
          <h1 className="text-2xl font-semibold tracking-tight text-secondary">Welcome to COREFLEX</h1>
          <p className="text-sm text-gray-500">Enter your details to sign in to your account</p>
        </div>
        <div className="space-y-5">
          <input
            type="email"
            placeholder="Email address"
            className="w-full px-4 py-3 rounded-lg font-medium border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-3 rounded-lg font-medium border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400"
          />
          <button
            type="submit"
            className="w-full px-3 py-4 text-white bg-black rounded-md focus:bg-blue-600 focus:outline-none"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  )
}
