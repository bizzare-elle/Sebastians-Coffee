const Navbar = () => {
    return (
        <div className="p-2">
            <ul className="flex space-x-10 items-center text-[15px] font-semibold">
                <li className="nav-hover">Home</li>
                <li className="nav-hover">Blog</li>
                <li className="nav-hover">Menu</li>
                <li className="text-[20px] font-extrabold">
                    Sebastian's Coffee
                </li>
                <li className="nav-hover">Gallery</li>
                <li className="nav-hover">About</li>
                <li className="nav-hover">Contact Us</li>
            </ul>
        </div>
    );
};

export default Navbar;
