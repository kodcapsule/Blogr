import Logo from "../assets/images/logo.svg";

const Footer = () => {
  return (
    <footer className="  bg-very_dark_black_blue mt-[8rem] rounded-tr-[4rem]">
      <div className="footer_container grid grid-cols-1 gap-10 justify-items-center md:grid-cols-4 py-6">
        <div className="logo__container">
          <img src={Logo} alt="" />
        </div>

        <article>
          <h4 className=" text-White text-xl font-semibold mb-3"> Product</h4>
          <ul className=" text-grayish_blue text-sm flex flex-col gap-2">
            <li className=" hover:cursor-pointer hover:underline">
              <a href="#"> Overview</a>
            </li>
            <li className=" hover:cursor-pointer hover:underline">
              <a href="#"> Pricing</a>
            </li>
            <li className=" hover:cursor-pointer hover:underline">
              <a href="#">Marketplace</a>
            </li>
            <li className=" hover:cursor-pointer hover:underline">
              <a href="#"> Features</a>
            </li>
            <li className=" hover:cursor-pointer hover:underline">
              <a href="#"> Integrations</a>
            </li>
          </ul>
        </article>

        {/* ********************************************* */}
        <article>
          <h4 className=" text-White text-xl font-semibold mb-3"> Company</h4>
          <ul className=" text-grayish_blue text-sm flex flex-col gap-2">
            <li className=" hover:cursor-pointer hover:underline">
              <a href="#">About</a>
            </li>
            <li className=" hover:cursor-pointer hover:underline">
              <a href="#">Team</a>
            </li>
            <li className=" hover:cursor-pointer hover:underline">
              <a href="#">Blog</a>
            </li>
            <li className=" hover:cursor-pointer hover:underline">
              <a href="#"> Careers</a>
            </li>
          </ul>
        </article>
        {/* ********************************************* */}

        <article>
          <h4 className=" text-White text-xl font-semibold mb-3"> Connect</h4>
          <ul className="text-grayish_blue text-sm flex flex-col gap-2">
            <li className=" hover:cursor-pointer hover:underline">
              <a href="#"> Contact</a>
            </li>
            <li className=" hover:cursor-pointer hover:underline">
              <a href="#"> Newsletter</a>
            </li>
            <li className=" hover:cursor-pointer hover:underline">
              <a href="#"> LinkedIn</a>
            </li>
          </ul>
        </article>
      </div>
    </footer>
  );
};

export default Footer;
