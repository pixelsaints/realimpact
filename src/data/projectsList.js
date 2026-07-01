
export const getProjectSlug = (name) =>
  name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

export const getProjectLink = (project) =>
  `/projects/project-single?project=${getProjectSlug(project.name)}`;

export const projectsList = [
  {
    name: "Rugby Premier League (RPL)",
    description: "Delivered end-to-end live broadcast production with multi-camera coverage, replay systems, RF connectivity, and seamless match operations across two seasons.",
    image: "/projects/rugby-premier-league.webp",
    link: "/projects/rugby-premier-league",
    tags: ["Rugby", "Live Sports", "2 Seasons"],
  },
  {
    name: "Bangladesh Premier League (BPL)",
    description: "Provided comprehensive broadcast production across ten seasons, supporting world-class cricket coverage with reliable technical workflows and production expertise.",
    image: "/projects/bangladesh-premier-league.webp",
    link: "/projects/bangladesh-premier-league",
    tags: ["Cricket", "Broadcast", "10 Seasons"],
  },
  {
    name: "Indian Racing League (IRL)",
    description: "Managed live motorsport production with RF systems, onboard cameras, replay operations, and real-time broadcast coordination over two seasons.",
    image: "/projects/indian-racing-league.webp",
    link: "/projects/indian-racing-league",
    tags: ["Motorsport", "RF Systems", "2 Seasons"],
  },
  {
    name: "Indian Premier League (IPL)",
    description: "Supported high-profile IPL broadcasts across six seasons, delivering dependable live production for one of the world's largest cricket tournaments.",
    image: "/projects/indian-premier-league.webp",
    link: "/projects/ipl",
    tags: ["Cricket", "Live Broadcast", "6 Seasons"],
  },
  {
    name: "Cricket Production for Various Boards",
    description: "Delivered broadcast solutions for domestic and international cricket boards, ensuring reliable production across diverse tournaments and venues.",
    image: "/projects/cricket-production.webp",
    link: "/projects/cricket-production",
    tags: ["Cricket", "International", "Broadcast"],
  },
  {
    name: "INBL Pro 2025",
    description: "Produced professional basketball coverage featuring multi-camera workflows, live graphics, replay integration, and seamless event execution.",
    image: "/projects/inbl-pro.webp",
    link: "/projects/inbl-pro-2025",
    tags: ["Basketball", "Live Sports", "2025"],
  },
  {
    name: "Asia Cup 2026",
    description: "Supported international cricket broadcasting with robust technical infrastructure, live production workflows, and reliable tournament coverage.",
    image: "/projects/asia-cup.webp",
    link: "/projects/asia-cup",
    tags: ["Cricket", "International", "Tournament"],
  },
  {
    name: "Bengal Pro T20",
    description: "Delivered complete live production services for regional T20 cricket with broadcast-grade workflows and technical coordination.",
    image: "/projects/bengal-pro-t20.webp",
    link: "/projects/bengal-pro-t20",
    tags: ["Cricket", "Regional League", "Live Production"],
  },
  {
    name: "Vidarbha Premier League",
    description: "Executed reliable live cricket broadcasts with multi-camera production, replay systems, and technical operations throughout the tournament.",
    image: "/projects/vpl.webp",
    link: "/projects/vidarbha-premier-league",
    tags: ["Cricket", "Regional League", "Broadcast"],
  },
  {
    name: "UP T20 League",
    description: "Provided broadcast production and technical support for Uttar Pradesh's premier T20 competition with consistent live event delivery.",
    image: "/projects/upt20.webp",
    link: "/projects/up-t20-league",
    tags: ["Cricket", "Live Sports", "Regional"],
  },
  {
    name: "Chhattisgarh Premier League",
    description: "Delivered comprehensive live production services for regional cricket, ensuring high-quality broadcast coverage throughout the league.",
    image: "/projects/cpl.webp",
    link: "/projects/chhattisgarh-premier-league",
    tags: ["Cricket", "Broadcast", "Regional"],
  },
  {
    name: "IIFA Awards",
    description: "Supported large-scale entertainment broadcasting with cinematic camera systems, live switching, and flawless production execution.",
    image: "/projects/iifa.webp",
    link: "/projects/iifa-awards",
    tags: ["Entertainment", "Awards", "Live Event"],
  },
  {
    name: "Ambani Wedding",
    description: "Delivered premium multi-camera production and broadcast support for one of India's most prestigious private celebrations.",
    image: "/projects/ambani-wedding.webp",
    link: "/projects/ambani-wedding",
    tags: ["Private Event", "Luxury", "Live Production"],
  },
];
