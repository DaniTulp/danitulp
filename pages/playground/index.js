import Scene from "components/Three/Scene";

export default function Playground() {
  return (
    <div
      className="relative z-50 w-full h-screen bg-white"
      style={{ position: "relative", zIndex: 100000 }}
    >
      <Scene />
    </div>
  );
}
