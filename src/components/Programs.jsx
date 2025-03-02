// <a href="https://www.flaticon.com/free-icons/html" title="html icons">Html icons created by Freepik - Flaticon</a>
// <a href="https://www.flaticon.com/free-icons/javascript" title="javascript icons">Javascript icons created by Freepik - Flaticon</a>

export default function Programs() {
  return (
    <section>
      <div>
        <h1 className="text-center text-[42px] text-underline underline underline-offset-[17px] decoration-[3px]">
          Programs and Skills
        </h1><br /><br />
        <h2 className="text-center text-[20px]">
          Below are the list of skills that I have knowledge in
        </h2>
        <div className="m-[50px] flex justify-center gap-[50px]">
          <div className="flex flex-col items-center">
            <img className="w-[50px] mb-3" src="imgs/html.png" alt="html logo" />
            <p>HTML</p>
          </div>
          <div className="flex flex-col items-center">
            <img className="w-[50px] mb-3" src="imgs/css.png" alt="css logo" />
            <p>CSS</p>
          </div>
          <div className="flex flex-col items-center">
            <img className="w-[50px] mb-3" src="imgs/js.png" alt="javascript logo" />
            <p>JavaScript</p>
          </div>
          <div className="flex flex-col items-center">
            <img className="w-[50px] mb-3" src="imgs/typescript.png" alt="javascript logo" />
            <p>TypeScript</p>
          </div>
          <div className="flex flex-col items-center">
            <img className="w-[50px] mb-3" src="imgs/python.png" alt="javascript logo" />
            <p>Python</p>
          </div>
          <div className="flex flex-col items-center">
            <img className="w-[50px] mb-3" src="imgs/java.png" alt="javascript logo" />
            <p>Java</p>
          </div>
        </div>
      </div>
      <br />
    </section>
  );
}
