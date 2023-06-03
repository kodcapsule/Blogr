import Laptop_img from "../assets/images/illustration-laptop-desktop.svg";

const Open = () => {
  return (
    <section className=" section_container">
      <div className="flex gap-10 flex-col justify-center items-center px-10 md:flex-row md:gap-28">
        <img
          src={Laptop_img}
          alt=""
          className="img_container  md:w-2/5 md:mr-[-4rem] "
        />
        <div className="articles flex flex-col gap-10 text-center md:text-justify md:px-10">
          <article className=" text-justify md:px-8">
            <h3 className=" text-2xl text-center md:text-2xl  text-very_dark_blue font-semibold mb-3">
              Free, open, simple
            </h3>
            <p className=" text-sm md:text-base text-very_dark_grayish_blue">
              Blogr is a free and open source application backed by a large
              community of helpful developers. It supports features such as code
              syntax highlighting, RSS feeds, social media integration,
              third-party commenting tools, and works seamlessly with Google
              Analytics. The architecture is clean and is relatively easy to
              learn.
            </p>
          </article>
          <article className=" text-justify md:px-8">
            <h3 className="text-2xl text-center md:text-2xl  text-very_dark_blue font-semibold mb-3">
              Powerful tooling
            </h3>
            <p className="text-sm md:text-base text-very_dark_grayish_blue">
              Batteries included. We built a simple and straightforward CLI tool
              that makes customization and deployment a breeze, but capable of
              producing even the most complicated sites.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Open;
