function Overlay({ type }: { type: "top" | "bottom" }) {
  return (
    <div
      className={`absolute inset-0 ${type === "top" ? "bg-linear-to-b" : "bg-linear-to-t"} from-black/60 to-transparent`}
    />
  );
}

export default Overlay;
