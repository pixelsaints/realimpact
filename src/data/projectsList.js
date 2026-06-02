
export const getProjectSlug = (name) =>
  name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

export const getProjectLink = (project) =>
  `/projects/project-single?project=${getProjectSlug(project.name)}`;

export const projectsList = [
  {
    name: "Championship Sports Broadcast",
    description: "Delivered multi-camera 4K coverage with replay workflows, RF links, and live direction for championship sports audiences.",
    // image: "https://images.unsplash.com/photo-1547347298-4074fc3086f0?q=80&w=1600&auto=format&fit=crop",
    video: "videos/championship-video.mp4",
    link: "/projects/project-single",
    tags: ["4K Broadcast", "Live Sports", "Replay Systems"]
  },
  {
    name: "Flypack Deployment",
    description: "Built a resilient flypack setup enabling rapid venue deployment, redundant routing, and polished entertainment broadcast output.",
    // image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=1600&auto=format&fit=crop",
    video: "videos/flypack-deployment.mov",
    link: "/projects/project-single",
    tags: ["Flypack", "Broadcast Engineering", "Entertainment"]
  },
  {
    name: "Festive & Events Production",
    description: "Managed wireless camera transmission, comms coordination, and signal monitoring across a complex outdoor festival production weekend.",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1600&auto=format&fit=crop",
    link: "/projects/project-single",
    tags: ["RF Transmission", "Wireless Cameras", "Signal Monitoring"]
  },
  {
    name: "National Awards Telecast",
    description: "Produced live awards coverage with cinematic cameras, vision mixing, lighting integration, and reliable satellite delivery nationwide.",
    image: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?q=80&w=1600&auto=format&fit=crop",
    link: "/projects/project-single",
    tags: ["TV Shows", "Live Production", "Satellite Delivery"]
  },
  {
    name: "Stadium OB Van Workflow",
    description: "Engineered stadium broadcast infrastructure combining OB vans, replay systems, RF microphones, and uninterrupted program feeds worldwide.",
    image: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?q=80&w=1600&auto=format&fit=crop",
    link: "/projects/project-single",
    tags: ["OB Vans", "RF Systems", "Sports Production"]
  },
  {
    name: "International Conference Stream",
    description: "Supported international conference streaming with multilingual audio, presentation capture, remote guests, and secure distribution workflows worldwide.",
    image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=1600&auto=format&fit=crop",
    link: "/projects/project-single",
    tags: ["Live Streaming", "Audio Routing", "Remote Production"]
  },
  {
    name: "Arena Concert Broadcast",
    description: "Delivered concert broadcast production using handheld cameras, roaming RF links, live graphics, and synchronized audio mixing.",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=1600&auto=format&fit=crop",
    link: "/projects/project-single",
    tags: ["Concert Production", "RF Links", "Live Graphics"]
  },
  {
    name: "Branded Studio Sessions",
    description: "Created a compact studio workflow for interviews, branded content, switching, recording, and real-time client review sessions.",
    image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=1600&auto=format&fit=crop",
    link: "/projects/project-single",
    tags: ["Studio Production", "Recording", "Vision Mixing"]
  },
  {
    name: "City Marathon Coverage",
    description: "Handled marathon course coverage with mobile cameras, relay points, aerial perspectives, and centralized production control rooms.",
    image: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?q=80&w=1600&auto=format&fit=crop",
    link: "/projects/project-single",
    tags: ["Mobile Cameras", "Aerial Coverage", "Live Sports"]
  },
  {
    name: "Reality Series Production",
    description: "Integrated broadcast engineering for a reality show, balancing multicam capture, media management, and daily episode delivery.",
    image: "https://images.unsplash.com/photo-1579165466741-7f35e4755660?q=80&w=1600&auto=format&fit=crop",
    link: "/projects/project-single",
    tags: ["TV Shows", "Media Management", "Multicam Capture"]
  },
  {
    name: "Corporate Town Hall Network",
    description: "Designed redundant transmission paths for corporate town halls, combining fiber, bonded cellular, and backup satellite uplinks.",
    image: "https://images.unsplash.com/photo-1760344477116-6116c49eff1d?q=80&w=2121&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tags: ["Fiber Routing", "Bonded Cellular", "Satellite Backup"]
  },
  {
    name: "Global Launch Event",
    description: "Executed global event production with show calling, technical staffing, broadcast packages, and remote contribution workflows support.",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1600&auto=format&fit=crop",
    link: "/projects/project-single",
    tags: ["Event Production", "Technical Staffing", "Remote Contribution"]
  },
]
