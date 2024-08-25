import Navbar from "./Navbar"
import Search from "./Search"
import Avatar from "./Avatar"

const Header = () => {

    return <header className="px-20 py-1 flex justify-between items-center bg-secondary">
                 <Search/>
                 <Navbar/>
                 <Avatar/>
     
           </header>
}

    export default Header