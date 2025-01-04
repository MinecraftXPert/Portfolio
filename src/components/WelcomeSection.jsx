export default function WelcomeSection() {
  return (
    <section className="m-[100px] h-[70vh]">
      <div className="flex animate-[welcome_1s_ease_forwards_2.0s] opacity-0">
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

        </div>
      </div>
      <div className="absolute bottom-[80px] left-[50%]">
        <img className="animate-[popon_1s_ease_forwards_2.5s] w-10 opacity-0" src="/imgs/down-arrow.png" alt="down-arrow" />
      </div>
    </section>
  );
}
