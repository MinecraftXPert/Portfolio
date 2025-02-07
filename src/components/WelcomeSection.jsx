export default function WelcomeSection() {
  return (
    <section className="m-[90px] h-[60vh]">
      <div className="flex justify-around animate-[welcome_1s_ease_forwards_2.0s] opacity-0">
        <div>
          <h1 className="text-[46px]">
            Welcome to<br></br>my portfolio!
          </h1>
          <br />
          <p className="text-[28px] text-[#2B2B2B]">
            Hi, my name is Noah. I am a front-end developer<br></br>trying to
            become a full-stack developer.
          </p>
        </div>
        <div>
          <img className="w-[500px]" src="/imgs/coding.svg" alt="" />
        </div>
      </div>
    </section>
  );
}
