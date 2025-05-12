import NavBarItem from "./NavBarItem"

export default function NavBar() {
  return (
    <div className=" w-full ">
      <div className=" w-full bg-amber-500 dark:bg-gray-800 flex justify-center py-4"> 
        <span className="flex justify-center items-center gap-8  font-bold ">
        <NavBarItem title = "Trending" param = "fetch" />
        <NavBarItem title = "Top Rated" param = "fetchTopRated" />
        </span>
        </div>
    </div>
  )
}
