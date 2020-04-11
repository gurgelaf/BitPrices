import Link from "next/link";
import "../sass/navbar.scss"


const Navbar = () => (
  <div className="navbar">
    <Link href="/">
      <a>Home</a>
    </Link>
    <Link href="/about">
      <a>About</a>
    </Link>

  </div>
);

export default Navbar;