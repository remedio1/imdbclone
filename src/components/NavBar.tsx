import NavBarItem from "./NavBarItem"

export default function NavBar() {
  return (
    <div className="flex dark:bg-gray-700 bg-amber-400 lg:text-lg p-4 justify-center gap-6">
        <NavBarItem title = "Trending" param = "ferch" />
        <NavBarItem title = "Top Rated" param = "ferchTopRated" />
        
    </div>
  )
}
