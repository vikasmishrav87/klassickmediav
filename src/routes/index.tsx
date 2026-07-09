import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Klassick Media — Elite Video Production Agency" },
      {
        name: "description",
        content:
          "Cinematic music videos, 3D animation, real estate films, SaaS explainers, motion graphics, and YouTube direction from a 50+ member global team.",
      },
      { property: "og:title", content: "Klassick Media — Elite Video Production Agency" },
      {
        property: "og:description",
        content:
          "Concept to conversion. Music videos, 3D/VFX, real estate cinematics, SaaS explainers, and YouTube direction — delivered by a 50+ member global team.",
      },
      { property: "og:url", content: "https://klassickmedia.lovable.app/" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Klassick Media — Elite Video Production Agency" },
      { name: "twitter:description", content: "Cinematic content by a 50+ member global team. Music videos, 3D, real estate, SaaS, YouTube direction." },
    ],
    links: [{ rel: "canonical", href: "https://klassickmedia.lovable.app/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "Klassick Media",
          url: "https://klassickmedia.lovable.app/",
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: "Klassick Media",
          url: "https://klassickmedia.lovable.app/",
          description:
            "Elite video production agency: music videos, 3D animation, real estate cinematics, SaaS explainers, motion graphics, broadcasting, podcasting, and YouTube direction.",
          areaServed: "Worldwide",
          serviceType: [
            "Music Video Production",
            "3D Animation",
            "Real Estate Cinematics",
            "SaaS Explainer Videos",
            "Motion Graphics",
            "YouTube Direction",
            "Broadcasting Services",
            "Podcasting Services",
          ],
        }),
      },
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
