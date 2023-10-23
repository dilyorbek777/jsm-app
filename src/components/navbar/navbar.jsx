import { Link } from "react-router-dom"
import { logo } from "../../constants"

const links = [
    { a: "/", txt: "Home" },
    { a: "/about", txt: "About" },
    { a: "/devs", txt: "Developers" },
    { a: "/contact", txt: "Contact" },
    { a: "/works", txt: "Works" },
]

const btns = [
    { a: "/signin", txt: "Log In", class: "text-sky-400 border-sky-400 btn-shadow font-bold border py-1 px-7 rounded-xl" },
    { a: "/signup", txt: "Sign Up", class: "text-white font-bold  py-1 px-7 rounded-xl btn-shadow bg-sky-400" },
]

const Navbar = () => {
    return (
        <nav className="py-1 px-32 flex items-center justify-between h-24 fixed-nav">
            <Link href="/" className="logo font-bold text-3xl  flex items-center justify-center gap-2">
                <img src={logo}
                    className="h-20 w-auto"
                    width={0}
                    height={0}
                    alt="logo" />

                DevJobs<span className="text-sky-400">.UZ</span>
            </Link>
            <ul className="links flex gap-20">
                {links.map((link, i) => (
                    <li className="font-bold hover:text-sky-400/90" key={i}><Link href={link.a}>{link.txt}</Link></li>
                ))}
                {btns.map((btn, i) => (
                    <Link key={i} href={btn.a}>
                        <button className={btn.class}>{btn.txt}</button>

                    </Link>
                ))}

            </ul>


        </nav>
    )
}

export default Navbar