import Link from "next/link";

export default function StaticRouting() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            
            <h1 className="text-xl mb-4">This is Static Routing</h1>
            <p className="pb-10">If you look at the URL "http://localhost:3000/Static," /static is typically used as the general static URL in Next.js.</p>
            
            <Link href="/Static/Nested_Static">
            <button className="bg-red-400 text-black px-3 py-3 ">Click here to see the Nested Static</button>
            </Link>
            
        </div>
    );
}
