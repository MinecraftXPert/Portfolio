export default function Header() {
  return (
    <header className="animate-[appear-top_1s_ease_forwards_1s] -translate-y-[110%] shadow-yes flex justify-between items-center p-[30px_100px]">
      <h1 className="animate-[popon_1s_ease_forwards_1.5s] text-[30px] opacity-0">Noah</h1>
      <nav>
        <ul className="animate-[popon_1s_ease_forwards_1.5s] flex text-[15px] gap-[40px] opacity-0">
          <li>
            <a href="#">
              <img className="w-6" src="/imgs/house.png" alt="house" />
              Home
            </a>
          </li>
          <li>
            <a href="#">
              <img className="w-6" src="/imgs/about.png" alt="about" />
              About
            </a>
          </li>
          <li>
            <a href="#">
              <img className="w-6" src="/imgs/projects.png" alt="projects" />
              Projects
            </a>
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