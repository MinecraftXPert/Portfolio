import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="shadow-yes flex justify-between items-center p-[30px_100px]">
      <h1 className="text-[30px]">Noah</h1>
      <nav className="z-10">
        <ul className="flex text-[15px] gap-[40px]">
          <li>
            <Link to="/">
              <img className="w-6" src="/imgs/house.png" alt="house" />
              Home
            </Link>
          </li>
          <li>
            <Link to="/about">
              <img className="w-6" src="/imgs/about.png" alt="about" />
              About
              </Link>
          </li>
          <li>
            <Link to="/programs">
              <img className="w-6" src="/imgs/projects.png" alt="projects" />
              Projects
            </Link>
          </li>
          <li>
            <a href="#">
              <img className="w-6" src="/imgs/phone.png" alt="contact-phone" />
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}