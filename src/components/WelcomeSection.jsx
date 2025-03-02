// <a href="https://www.flaticon.com/free-icons/gmail" title="gmail icons">Gmail icons created by Freepik - Flaticon</a>
// <a href="https://www.flaticon.com/free-icons/github" title="github icons">Github icons created by Pixel perfect - Flaticon</a>
// <a href="https://www.flaticon.com/free-icons/instagram" title="instagram icons">Instagram icons created by Freepik - Flaticon</a>

export default function WelcomeSection() {
  return (
    <section className="h-[70vh] flex items-center justify-center mb-[12rem]">
      <div className="flex justify-between gap-[150px] items-center animate-[welcome_1s_ease_forwards_2.0s] opacity-0">
        <div>
          <h1 className="text-[46px]">
            Welcome to<br></br>my portfolio!
          </h1>
          <br />
          <p className="text-[28px] text-[#2B2B2B]">
            Hi, my name is Noah. I am a front-end developer<br></br>trying to
            become a full-stack developer.
          </p><br />
          <div className="flex gap-3">
            <a href="#"><img className="w-8" src="imgs/gmail.png" alt="gmail logo" /></a>
            <a href="#"><img className="w-8" src="imgs/github.png" alt="github logo" /></a>
            <a href="#"><img className="w-8" src="imgs/instagram.png" alt="instagram logo" /></a>
          </div>
        </div>
        <div>
          <img className="w-[500px]" src="/imgs/coding.svg" alt="" />
        </div>
      </div>
    </section>
  );
}
