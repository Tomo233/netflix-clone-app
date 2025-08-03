import BackgroundBanner from "../../assets/background-banner.jpg";

function AuthBackground() {
  return (
    <div className="absolute top-0 left-1/2 -z-10 w-full -translate-x-1/2">
      <img
        src={BackgroundBanner}
        alt="Poster of the Movie"
        className="h-[950px] w-full object-cover object-top"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-black/60 to-transparent" />
    </div>
  );
}

export default AuthBackground;
