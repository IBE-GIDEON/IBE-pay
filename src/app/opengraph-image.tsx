import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "IBE Pay — every card you own, one wallet";

/**
 * The share card. This is what WhatsApp, X and LinkedIn render when the link
 * is pasted, and it is the single biggest lever on click-through — a link
 * with no preview reads as spam.
 */
export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "linear-gradient(140deg,#1a1c22 0%,#0d1016 45%,#050608 100%)",
          padding: "72px 80px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <div
            style={{
              width: 44,
              height: 44,
              borderRadius: 22,
              background: "#ff2d46",
              display: "flex",
            }}
          />
          <div
            style={{
              marginLeft: 18,
              color: "#ffffff",
              fontSize: 30,
              fontWeight: 800,
              letterSpacing: 6,
            }}
          >
            IBE PAY
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              color: "#ffffff",
              fontSize: 82,
              fontWeight: 800,
              lineHeight: 1.06,
              letterSpacing: -2.5,
            }}
          >
            Every card you own.
          </div>
          <div
            style={{
              color: "#ff2d46",
              fontSize: 82,
              fontWeight: 800,
              lineHeight: 1.06,
              letterSpacing: -2.5,
            }}
          >
            One wallet.
          </div>
          <div
            style={{
              marginTop: 28,
              color: "rgba(255,255,255,0.62)",
              fontSize: 30,
              lineHeight: 1.35,
              maxWidth: 820,
            }}
          >
            Stop getting declined abroad. IBE Pay routes each payment to the
            card that still has room.
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center" }}>
          <div
            style={{
              background: "#ffffff",
              color: "#0d1016",
              fontSize: 25,
              fontWeight: 700,
              padding: "16px 34px",
              borderRadius: 40,
              display: "flex",
            }}
          >
            Join the waitlist
          </div>
          <div
            style={{
              marginLeft: 26,
              color: "rgba(255,255,255,0.4)",
              fontSize: 24,
            }}
          >
            Built for Nigeria
          </div>
        </div>
      </div>
    ),
    size,
  );
}
