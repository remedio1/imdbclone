"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SearchBox() {
  const [search, setSearch] = useState("");
  const router = useRouter();
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        router.push(`/search/${search}`);  
    };
  return (
    <form className="flex justify-between px-5 max-w-6xl mx-auto" onSubmit={handleSubmit}>
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        type="text"
        placeholder="Search keywords....."
        className=" flex-1 w-full h-14 rounded-md placeholder-gray-500 outline-none bg-transparent"
      />
      <button className="text-amber-600 disabled:text-gray-400" disabled={search === ''}>
        Search
      </button>
    </form>
  );
}
