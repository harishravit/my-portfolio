import resume from "../assets/Resume (1).pdf";
export default function Content() {
  return (
    <div className="w-full flex flex-col gap-y-1 px-2 ">
      <h2 className="text-primary text-2xl lg:text-3xl font-semibold">
        Hi, I'm Harish
      </h2>
      <p className="text-pretty text-base text-secondary">
        <span className="text-primary font-medium ">
          Fullstack engineer from India.
        </span>
        <br />I enjoy transforming creative ideas into meaningful web
        experiences, building scalable applications, and exploring emerging
        technologies through continuous learning. Discover more about my journey
        through my{" "}
        <a
          href={resume}
          download={"Harish r.resume.pdf"}
          className="hover:cursor-pointer underline decoration-wavy underline-offset-2 text-primary font-medium "
        >
          Resume
        </a>
        , and if you'd like to build something meaningful together, let's{" "}
        <a
          href="mailto:offciharish@gmail.com"
          className="hover:cursor-pointer underline decoration-wavy underline-offset-2 text-primary font-medium "
        >
          Connect
        </a>
        .
      </p>
    </div>
  );
}
