import HeroBackground from "./HeroBackground";
import HeroText from "./HeroText";
import HeroPortrait from "./HeroPortrait";
import HeroScrollIndicator from "./HeroScrollIndicator";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center grid-bg overflow-hidden">
      <HeroBackground />

      <div className="max-w-6xl mx-auto px-6 py-32 w-full">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-8 items-center">
          <HeroText />
          <HeroPortrait />
        </div>
      </div>

      <HeroScrollIndicator />
    </section>
  );
}
