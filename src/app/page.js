import Link from "next/link"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     <h1 className="text-4xl text-red-400  font-bold">Welcome to Home Page </h1>
     <div className="flex gap-2 text-center  text-white">
       <div className="bg-red-400 hover:text-blue-300 p-2 w-[90px]">
        <Link href="/form">
         ADD List
        </Link>
       </div>
       <div className="bg-red-400 hover:text-blue-300 p-2 w-[90px]">
        <Link href="/see">
         SEE
        </Link>
       </div>
     </div>
    </main>
  )
}
