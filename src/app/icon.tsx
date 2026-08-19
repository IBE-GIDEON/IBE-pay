import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

/**
 * Brand red rather than the card black: at 16px on a dark browser toolbar a
 * black tile disappears, and the accent is the one colour used site-wide.
 */
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#ff2d46",
          color: "#ffffff",
          borderRadius: 7,
          fontSize: 13,
          fontWeight: 800,
          letterSpacing: -0.7,
          fontFamily: "sans-serif",
        }}
      >
        IBE
      </div>
    ),
    size,
  );
}
