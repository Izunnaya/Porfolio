export default function HeroBackground() {
  return (
    <>
      <div
        className="absolute top-1/3 left-0 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(212,168,67,0.06) 0%, transparent 70%)",
          transform: "translate(-30%, -30%)",
        }}
      />
      <div
        className="absolute top-1/2 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(92,107,192,0.08) 0%, transparent 70%)",
          transform: "translate(20%, -50%)",
        }}
      />
    </>
  );
}
