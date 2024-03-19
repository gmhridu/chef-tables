import { FaSlackHash } from "react-icons/fa";

import { BsTwitterX } from "react-icons/bs";
import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div>
        <footer className="footer items-center p-4 bg-neutral text-neutral-content">
          <aside className="items-center grid-flow-col">
            <FaSlackHash className="text-4xl" />
            <p>Copyright © 2024 - All right reserved</p>
          </aside>
          <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
            <a>
              <BsTwitterX className="text-2xl" />
            </a>
            <a>
              <FaYoutube className="text-2xl" />
            </a>
            <a>
              <FaFacebook className="text-2xl" />
            </a>
          </nav>
        </footer>
      </div>
    </>
  );
};

export default Footer;
