/**
 * Static list of portfolio entries rendered by the Portfolio component.
 *
 * `status` controls which section a project appears under, always in this order:
 *   - "live"        -> "Sites live & running"    (has a real url, shown as a live embedded preview)
 *   - "coming-soon" -> "Coming soon"              (in progress, no live url yet — shows previewImage /
 *                                                   previewVideo if set, otherwise the `features` list)
 *   - "for-sale"    -> "Available for purchase"   (built to sell or demo capability)
 * A section only renders if at least one project has that status.
 *
 * `goal` is the story behind the build (the brief, and what was actually done) — shown above the
 * description. `description` + `tags` are the tech-facing summary, shown below the goal text.
 *
 * `goal` and `features` below are placeholder DUMMY_TEXT — replace with the real copy.
 *
 * `icon` is the site's logo/favicon, shown in the browser-chrome bar above the preview.
 * `iconLight` set to true puts the icon on a small light chip — use it for icons that are
 * dark/black themselves and would otherwise disappear against the bar's dark background.
 *
 * `goalLabel` overrides the small green label shown above the goal text (defaults to
 * "Description" when not set).
 */

export const projects = [
  {
    id: 1,
    name: "Norish",
    status: "live",
    url: "https://www.norish.co.il",
    icon: "/icons/norish.png",
    goal: "A clean, modern and artistic web presence built for one of the most well-known coffee shops in Tel Aviv. Focused on artistic design and a smooth user experience.",
    description: "MERN stack (MongoDB, Express, React, Node.js) with a React/Vite frontend styled in Tailwind CSS and a separate React admin dashboard, backed by an Express/Node API with JWT authentication, Cloudinary for image management, and MongoDB via Mongoose.",
    tags: ["Art", "Full-Stack", "React"],
  },
  {
    id: 2,
    name: "Le True",
    status: "coming-soon",
    url: "https://le-true.com",
    icon: "/icons/letrue.png",
    goal: "We set out to build a unique e-commerce experience that brings the brand's limited-edition capsule collections to life. versatile pieces that transition seamlessly from effortless daywear to evening statements, balancing the classic with the bold. Each garment is thoughtfully crafted with a focus on silhouette, quality, comfort, and texture.",
    description: "Elegant e-commerce via Shopify. Sharp visuals, refined typography, unique features and a highly designed product page.",
    tags: ["Shopify", "E-commerce", "Branding"],
    previewVideo: "https://res.cloudinary.com/dfdbqii1e/video/upload/v1787558756/ig_vid_elfjmk.mp4",
  },
  {
    id: 3,
    name: "Interproduct",
    status: "live",
    url: "https://interproduct.co.il",
    icon: "/icons/interproduct.png",
    goal: "The client ran everything manually over WhatsApp — orders, deliveries, client meetings — with no digital way to showcase their catalog of 30+ products. </br> I built a custom e-commerce platform with a private, approval-only storefront to protect wholesale pricing, an admin panel for managing products, and automated order and delivery-status notifications for customers.",
    description: "Full-stack B2B e-commerce platform with a Hebrew RTL interface. Built with React, Node/Express and MongoDB, including Cloudinary image management and a separate admin panel for products, orders and users.",
    tags: ["Full-Stack", "B2B", "MERN"],
  },
  {
    id: 4,
    name: "Planet B",
    status: "for-sale",
    url: "https://planetbcom.vercel.app/",
    goalLabel: "Community Site",
    goal: "DMY-TEXT",
    description: "DMY-TEXT",
    tags: ["DMY-TEXT"],
  },
]
