import mobile_img from "../assets/images/illustration-phones.svg";

const Infastracture = () => {
  return (
    <section className=" section_container bg-pattern-circles bg-contain bg-no-repeat bg-Very_dark_gray_blue rounded-bl-[5rem] mt-[12rem] rounded-tr-[5rem] md:rounded-bl-[10rem] md:rounded-tr-[10rem]">
      <div className="flex flex-col md:flex-row">
        <img
          src={mobile_img}
          className=" mt-[-6rem] md:w-2/6 md:mt-[-6rem]"
          alt=""
        />
        <article className=" text-center md:px-8 md:mt-[8rem]">
          <h3 className=" text-xl text-center md:text-2xl  text-White font-semibold mb-3">
            State of the Art Infrastructure
          </h3>
          <p className=" text-sm md:text-base text-grayish_blue text-justify md:px-[12rem]">
            With reliability and speed in mind, worldwide data centers provide
            the backbone for ultra-fast connectivity. This ensures your site
            will load instantly, no matter where your readers are, keeping your
            site competitive.
          </p>
        </article>
      </div>
    </section>
  );
};

export default Infastracture;
