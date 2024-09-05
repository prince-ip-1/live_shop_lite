import { Link } from "react-router-dom";
import search from '../../assests/img/svg_icon/search.svg'
import user from '../../assests/img/svg_icon/user.svg'
import like from '../../assests/img/svg_icon/like.svg'
import cart from '../../assests/img/svg_icon/cart.svg'


const Header = () => {
    return (
        <div className="container mx-auto">

            <div className="flex justify-between items-center p-3">

                <div className="flex justify-center items-center w-[33.33%]">
                    <Link className="text-[31px] uppercase tracking-[4.5px]" to="/"><span className="font-[Outfit-Medium]">Shop</span><span className="font-[Outfit-ExtraLight]">Lite</span></Link>
                </div>

                <nav>
                    <ul className="flex items-center justify-between w-[33.33%] uppercase">
                        <li className="px-4 py-3">
                            <Link to="/">Home</Link>
                        </li>
                        <li className="px-4 py-3">
                            <Link to="/about">About</Link>
                        </li>
                        <li className="px-4 py-3">
                            <Link to="/">Shop</Link>
                        </li>

                        <li className="px-4 py-3">
                            <Link to="/">Blogs</Link>
                        </li>
                        <li className="px-4 py-3">
                            <Link to="/">Pages</Link>
                        </li>
                        <li className="px-4 py-3">
                            <Link to="/">Contact</Link>
                        </li>
                    </ul>
                </nav>

                <div className="extra_links w-[33.33%] flex items-center justify-center ">
                    <ul className="flex items-center justify-end w-[33.33%] uppercase">
                        <li className="p-2">
                            <Link to="/"><img src={search} /></Link>
                        </li>
                        <li className="p-2">
                            <Link to="/about"><img src={user} /></Link>
                        </li>
                        <li className="p-2">
                            <Link to="/"><img src={like} /></Link>
                        </li>
                        <li className="p-2">
                            <Link to="/"><img src={cart} /></Link>
                        </li>
                    </ul>
                </div>

            </div>

        </div>
    )
}

export default Header