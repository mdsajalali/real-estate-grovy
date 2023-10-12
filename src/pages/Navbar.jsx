import NavItem from "../components/NavItem";

const Navbar = () => {
  return (
    <div>
      <div className=" z-[1000] h-20 w-full border-t-[3px] border-[#3BBFAD] bg-gray-700  ">
        <div className="mt-[6px]">
          <NavItem />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
