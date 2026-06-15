export default function TopoBackground({ id, stroke }: { id: string; stroke: string }) {
  return (
    <svg
      aria-hidden="true"
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
      }}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern id={id} x="0" y="0" width="800" height="300" patternUnits="userSpaceOnUse">
          <path
            d="M0,28 C80,14 160,38 270,22 C380,6 480,34 590,18 C700,4 760,24 800,28"
            stroke={stroke} strokeWidth="1.4" fill="none"
          />
          <path
            d="M0,82 C90,68 180,96 290,76 C400,56 500,92 610,74 C710,58 770,82 800,82"
            stroke={stroke} strokeWidth="1.4" fill="none"
          />
          <path
            d="M0,148 C70,134 175,162 285,144 C395,124 490,158 600,140 C710,122 770,150 800,148"
            stroke={stroke} strokeWidth="1.4" fill="none"
          />
          <path
            d="M0,200 C85,186 178,214 288,196 C398,178 495,212 604,196 C714,180 776,204 800,200"
            stroke={stroke} strokeWidth="1.4" fill="none"
          />
          <path
            d="M0,262 C76,248 172,274 282,256 C392,238 494,268 603,252 C712,236 775,262 800,262"
            stroke={stroke} strokeWidth="1.4" fill="none"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
    </svg>
  );
}
