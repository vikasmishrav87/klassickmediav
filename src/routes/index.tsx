import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Klassick Media — Elite Video Production Agency" },
      {
        name: "description",
        content:
          "Klassick Media — elite video production agency. Cinematic music videos, 3D animation, real estate films, SaaS explainers, motion graphics, and YouTube direction with a global team of 50+ creators.",
      },
      { property: "og:title", content: "Klassick Media — Elite Video Production Agency" },
      {
        property: "og:description",
        content:
          "Concept to conversion. Music videos, 3D/VFX, real estate cinematics, SaaS explainers, and YouTube direction — delivered by a 50+ member global team.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <iframe
      src="/site.html"
      title="Klassick Media"
      style={{
        position: "fixed",
        inset: 0,
        width: "100vw",
        height: "100vh",
        border: "none",
        margin: 0,
        padding: 0,
        display: "block",
        background: "#050508",
      }}
      allow="autoplay; fullscreen; encrypted-media; clipboard-write"
    />
  );
}
