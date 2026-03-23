import HeroBackground from "./HeroBackground";
import HeroText from "./HeroText";
import HeroPortrait from "./HeroPortrait";
import HeroScrollIndicator from "./HeroScrollIndicator";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center grid-bg overflow-hidden ">
      <HeroBackground />

      <div className="max-w-6xl mx-auto px-6 py-32 w-full overflow-hidden">
        <div className="lg:flex flex-none justify-between gap-8 lg:gap-0 items-center w-full">
          <HeroText />
          <HeroPortrait />
        </div>
      </div>

      <HeroScrollIndicator />
    </section>
  );
}
