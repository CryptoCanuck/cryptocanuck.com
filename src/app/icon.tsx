import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background: "#0a0a0a",
          border: "2px solid #87f36e",
          color: "#f4f4ef",
          display: "flex",
          fontFamily: "monospace",
          fontSize: 13,
          height: "100%",
          justifyContent: "center",
          letterSpacing: "-1px",
          width: "100%",
        }}
      >
        CC
      </div>
    ),
    size,
  );
}
