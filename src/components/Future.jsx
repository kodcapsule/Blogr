import desktop_img from "../assets/images/illustration-editor-desktop.svg";

const Future = () => {
  return (
    <section className=" section_container">
      <h1 className=" text-center text-2xl mb-8 md:text-4xl text-very_dark_blue font-bold">
        Designed for the future
      </h1>
      <div className="flex gap-10 flex-col-reverse justify-center items-center px-10 md:flex-row md:gap-28">
        <div className="articles flex flex-col gap-10 text-center md:text-justify md:px-10">
          <article className=" text-justify md:px-8">
            <h3 className=" text-2xl text-center md:text-2xl  text-very_dark_blue font-semibold mb-3">
              Introducing an extensible editor
            </h3>
            <p className=" text-sm md:text-base text-very_dark_grayish_blue">
              Blogr features an exceedingly intuitive interface which lets you
              focus on one thing: creating content. The editor supports
              management of multiple blogs and allows easy manipulation of
              embeds such as images, videos, and Markdown. Extensibility with
              plugins and themes provide easy ways to add functionality or
              change the looks of a blog.
            </p>
          </article>
          <article className=" text-justify md:px-8">
            <h3 className="text-2xl text-center md:text-2xl  text-very_dark_blue font-semibold mb-3">
              Robust content management
            </h3>
            <p className="text-sm md:text-base text-very_dark_grayish_blue">
              Flexible content management enables users to easily move through
              posts. Increase the usability of your blog by adding customized
              categories, sections, format, or flow. With this functionality,
              you’re in full control.
            </p>
          </article>
        </div>

        <img
          src={desktop_img}
          alt=""
          className="img_container  md:w-2/5 md:mt-[-8rem] md:mr-[-4rem] "
        />
      </div>
    </section>
  );
};

export default Future;
