import Header from "./Header";

export default function About() {
  return (
    <section>
      {/* <Header /> */}
      <div className="flex justify-center">
        <h1 className="text-center text-[42px] text-underline underline underline-offset-[17px] decoration-[3px] mt-10">
          About Me
        </h1>
      </div>
      <br />
      <br />
      <div className="flex flex-col items-center m-[50px]">
        <div className="w-full">
          <div>
            <img
              className="rounded-[10px]"
              src="/imgs/bobert.png"
              alt="pic of bobert the robot"
            />
          </div>
          <h1 className="text-[30px] mt-10 text-center">Who am I?</h1>
          <br />
          <p className="text-[18px]/8 text-center">
            Hi there! My name is Noah. I am mostly a self-taught web developer
            who is mainly proficient in frontend.
            <br />
            <br />I started my programming journey through Khan Academy and from
            there I moved on to learn by myself. I have an Associates Degree
            from REDACTED FOR NOW College and am now at the University of
            REDACTED FOR NOW to get my Bachelor's Degree in Computer Science.{" "}
            <br />
            <br />
            When I'm not programming, some things I like to do is play videos
            games (especially indie games) and am a movie fanatic. I enjoy
            playing chess but am not that good at it (only 500 elo) but my goal
            is to at least get to 800 or 900 elo. I also am not great at it, but
            I do play the piano and know a few songs.
          </p>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
    </section>
  );
}
