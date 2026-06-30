
export const getProjectSlug = (name) =>
  name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

export const getProjectLink = (project) =>
  `/projects/project-single?project=${getProjectSlug(project.name)}`;

export const projectsList = [
  {
    name: "Championship Sports Broadcast",
    description: "Delivered multi-camera 4K coverage with replay workflows, RF links, and live direction for championship sports audiences.",
    video: "videos/championship-video.mp4",
    poster: "/images/championship-sports.webp",
    link: "/projects/project-single",
    tags: ["4K Broadcast", "Live Sports", "Replay Systems"]
  },
  {
    name: "Flypack Deployment",
    description: "Built a resilient flypack setup enabling rapid venue deployment, redundant routing, and polished entertainment broadcast output.",
    poster: "/images/flypack-deployment.webp",
    video: "videos/flypack-deployment.webm",
    link: "/projects/project-single",
    tags: ["Flypack", "Broadcast Engineering", "Entertainment"]
  },
  {
    name: "Festive & Events Production",
    description: "Managed wireless camera transmission, comms coordination, and signal monitoring across a complex outdoor festival production weekend.",
    image: "/images/festive-events-production.webp",
    link: "/projects/project-single",
    tags: ["RF Transmission", "Wireless Cameras", "Signal Monitoring"]
  },
  {
    name: "National Awards Telecast",
    description: "Produced live awards coverage with cinematic cameras, vision mixing, lighting integration, and reliable satellite delivery nationwide.",
    image: "/images/national-awards-telecast.webp",
    link: "/projects/project-single",
    tags: ["TV Shows", "Live Production", "Satellite Delivery"]
  },
  {
    name: "Stadium OB Van Workflow",
    description: "Engineered stadium broadcast infrastructure combining OB vans, replay systems, RF microphones, and uninterrupted program feeds worldwide.",
    image: "/images/ob-van.webp",
    link: "/projects/project-single",
    tags: ["OB Vans", "RF Systems", "Sports Production"]
  },
  {
    name: "International Conference Stream",
    description: "Supported international conference streaming with multilingual audio, presentation capture, remote guests, and secure distribution workflows worldwide.",
    image: "/images/international-conference-stream.webp",
    link: "/projects/project-single",
    tags: ["Live Streaming", "Audio Routing", "Remote Production"]
  }
]
