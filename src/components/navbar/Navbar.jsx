import { IoSearchOutline } from "react-icons/io5";
import { FaRegCircleUser } from "react-icons/fa6";

const Navbar = () => {
  const navLinks = [
    {
      id: 1,
      name: "Home",
      link: "/#",
    },
    {
      id: 2,
      name: "Recipes",
      link: "/#",
    },
    {
      id: 3,
      name: "About",
      link: "/#",
    },
    {
      id: 4,
      name: "Search",
      link: "/#",
    },
  ];

  return (
    <>
      <div className="container my-4 mb-8 mx-auto">
        <div className="flex justify-between items-center md:gap-6">
          {/* nav title section */}
          <div>
            <h1 className="text-primaryDark text-2xl md:text-xl lg:text-3xl text-nowrap font-bold">
              Recipe Calories
            </h1>
          </div>
          {/* navlinks section */}
          <div>
            <ul className="hidden md:flex gap-12 md:gap-8">
              {navLinks.map(({ id, name, link }) => (
                <li key={id}>
                  <a
                    href={link}
                    className="hover:text-[#E83667] text-base font-normal text-secondaryDark"
                  >
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* nav search input section */}
          <div className="flex gap-4 md:gap-2">
            <div className="hidden md:flex">
              <label className="input flex items-center gap-2 rounded-full bg-[#150B2B0D] border-none">
                <IoSearchOutline />
                <input
                  type="text"
                  className="text-secondaryDark text-base font-normal"
                  placeholder="Search"
                />
              </label>
            </div>
            <div>
              <FaRegCircleUser className="text-5xl bg-primary p-2 rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
