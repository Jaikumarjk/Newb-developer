import { Spotlight } from "./ui/Spotlight";

function HeroSection() {
  return (
    <div className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:px-0">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className="p-2 relative z-10 w-full text-center">
        <h1 className="mt-20 md:mt-0 text4xl md:text-7xl font-bold bg-clip-text bg-gradient-to-b form-neutral-50 to neutral-400">
          {" "}
          Nweb Developer{" "}
        </h1>
        <p>Hi</p>
      </div>
    </div>
  );
}
export default HeroSection;
