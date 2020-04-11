import Link from "next/link";

const Navbar = () => (
  <div className="bg-color primary">
    <Link href="/">
      <a>Home</a>
    </Link>
    <Link href="/about">
      <a>About</a>
    </Link>

    <style jsx>
      {`
        div {
          background: linear-gradient(
            rgba(19, 105, 239, 1) 15%,
            rgba(13, 25, 169, 1) 50%,
            rgba(12, 12, 157, 1) 100%
          );

          text-align: center;
        }

        div, div a {
          padding: 15px;
        }

        a {
          color: #338bff;
          font-size: 20px;
          margin: 2px 5px;
          padding-top: 15px;
          text-decoration: none;
        }
      `}
    </style>
  </div>
);

export default Navbar;