import Link from "next/link";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="flex space-x-4">

        <Link href="/Static">
        <button className="bg-red-400 text-xl px-3 py-3">Static</button>
        </Link>

        <Link href="/Dynamic">
        <button className="bg-green-400 text-xl px-3 py-3">Dynamic</button>
        </Link>

        
        <button className="bg-blue-400 text-xl px-3 py-3">Call Back</button>
        

      </div>
    </div>
  );
}
