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
 * `description` is the story behind the build (the brief, and what was actually done) — shown
 * above the tech line. `tech` + `tags` are the tech-facing summary, shown below the description.
 *
 * `description` and `features` below are placeholder DUMMY_TEXT — replace with the real copy.
 *
 * `icon` is the site's logo/favicon, shown in the browser-chrome bar above the preview.
 * `iconLight` set to true puts the icon on a small light chip — use it for icons that are
 * dark/black themselves and would otherwise disappear against the bar's dark background.
 *
 * `descriptionLabel` overrides the small green label shown above the description text (defaults
 * to "Description" when not set).
 */

export const projects = [
  {
    id: 1,
    name: "Norish",
    status: "live",
    url: "https://www.norish.co.il",
    icon: "/icons/norish.png",
    description: "A clean, modern and artistic web presence built for one of the most well-known coffee shops in Tel Aviv. Focused on artistic design and a smooth user experience.",
    tech: "MERN stack (MongoDB, Express, React, Node.js) with a React/Vite frontend styled in Tailwind CSS and a separate React admin dashboard, backed by an Express/Node API with JWT authentication, Cloudinary for image management, and MongoDB via Mongoose.",
    tags: ["Art", "Full-Stack", "React"],
  },
  {
    id: 2,
    name: "Le True",
    status: "coming-soon",
    url: "https://le-true.com",
    icon: "/icons/letrue.png",
    description: "We set out to build a unique e-commerce experience that brings the brand's limited-edition capsule collections to life. versatile pieces that transition seamlessly from effortless daywear to evening statements, balancing the classic with the bold. Each garment is thoughtfully crafted with a focus on silhouette, quality, comfort, and texture.",
    tech: "Elegant e-commerce via Shopify. Sharp visuals, refined typography, unique features and a highly designed product page.",
    tags: ["Shopify", "E-commerce", "Branding"],
    previewVideo: "https://res.cloudinary.com/dfdbqii1e/video/upload/v1787558756/ig_vid_elfjmk.mp4",
  },
  {
    id: 3,
    name: "Interproduct",
    status: "live",
    url: "https://interproduct.co.il",
    icon: "/icons/interproduct.png",
    description: "The client ran everything manually over WhatsApp — orders, deliveries, client meetings — with no digital way to showcase their catalog of 30+ products. </br> I built a custom e-commerce platform with a private, approval-only storefront to protect wholesale pricing, an admin panel for managing products, and automated order and delivery-status notifications for customers.",
    tech: "Full-stack B2B e-commerce platform with a Hebrew RTL interface. Built with React, Node/Express and MongoDB, including Cloudinary image management and a separate admin panel for products, orders and users.",
    tags: ["Full-Stack", "B2B", "MERN"],
  },
  {
    id: 4,
    name: "Planet B",
    status: "for-sale",
    url: "https://planetbcom.vercel.app/home",
    descriptionLabel: "Community Site",
    description: "An immersive, artistic web presence built for Planet B, an electronic music and events community based in Israel, reflecting the collective's identity through mood and motion rather than a conventional layout. It brings together the community's story into one cohesive, atmospheric experience.",
    tech: "Built entirely with React and Vite, styled with Tailwind CSS, and animated with Framer Motion for smooth page transitions and reactive visual effects. The site features a reactive/generative background system and glitch-text and scramble-caption components built from scratch, with React Router handling navigation.",
    tags: ["DMY-TEXT"],
  },
]
