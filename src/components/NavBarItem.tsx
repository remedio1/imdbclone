"use client";
import Link from "next/link"
import { useSearchParams } from "next/navigation";


export default function NavBarItem({title, param} : {title : string, param : string}) {
    const searchParams = useSearchParams();
    const genre = searchParams.get("genre");
  return (
    <div >
        <Link 
        className={`dark:hover:text-amber-500 hover:text-white font-semibold transition-all duration-200 inline-block relative mx-auto ${genre === param ? " underline underline-offset-8 decoration-4 decoration-amber-400 rounded-lg" : ""}`}
        href={`/?genre=${param}`}>
        {title}
        </Link>
    </div>
  )
}
