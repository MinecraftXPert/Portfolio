export default function Projects({ project }) {
  return (
    <div className="flex flex-col border-solid border-2 border-[rgba(0, 0, 0, .5)] rounded-md p-5 shadow-md relative">
      <div className="overflow-hidden rounded-md">
        <img
          className="mb-7 object-cover object-top w-full h-[150px] rounded-md hover:scale-[1.1] duration-500 ease"
          src={project.img.src}
          alt={project.img.alt}
        />
      </div>
      <div>
        <h1 className="text-[20px] font-bold">{project.title}</h1>
        <br />
        <p className="text-sm/7 text-gray-800 flex-1 mb-5">{project.desc}</p>
        <br />
      </div>
      <div className="absolute bottom-5">
        <a className="underline" target="_blank" href={project.link}>
          View Project
        </a>
      </div>
    </div>
  );
}
