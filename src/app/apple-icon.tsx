import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

/** Home-screen icon for iOS when the site is saved to the home screen. */
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0d1016",
          color: "#ffffff",
          fontSize: 74,
          fontWeight: 800,
          letterSpacing: -3,
          fontFamily: "sans-serif",
        }}
      >
        IBE
      </div>
    ),
    size,
  );
}
