import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="animate-[appear-top_1s_ease_forwards_1s] -translate-y-[110%] shadow-yes flex justify-between items-center p-[30px_100px]">
      <h1 className="animate-[popon_1s_ease_forwards_1.5s] text-[30px] opacity-0">Noah</h1>
      <nav className="z-10">
        <ul className="animate-[popon_1s_ease_forwards_1.5s] flex text-[15px] gap-[40px] opacity-0">
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