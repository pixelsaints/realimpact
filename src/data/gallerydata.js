export const galleryFilters = [
  "All",
  "Sports Production",
  "Entertainment",
  "Remote Productions",
  // "RF Solutions",
  // "4K Solutions",
];

const categories = [
  {
    folder: "sports-production",
    service: "Sports Production",
    prefix: "sports-prod",
    count: 17,
  },
  {
    folder: "entertainment",
    service: "Entertainment",
    prefix: "entertainment",
    count: 12,
  },
  {
    folder: "remote-production",
    service: "Remote Productions",
    prefix: "remote-prod",
    count: 10,
  },
];

export const galleryData = categories.flatMap((category) =>
  Array.from({ length: category.count }, (_, i) => ({
    id: `${category.prefix}-${i + 1}`,
    name: "Championship Night Broadcast",
    services: [category.service, "All"],
    image: `/gallery/${category.folder}/${category.prefix}-${i + 1}.webp`,
  }))
);