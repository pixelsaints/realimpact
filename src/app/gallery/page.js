
import Cta from "@/components/layout/cta";
import PageHeader from "@/components/layout/page-header";
import GalleryGrid from "./gallery";

export default function GalleryPage() {
  return (
    <>
      <PageHeader
        subtitle="Selected Productions"
        titleFirst="Gallery of Live"
        titleSecond="Real Impact"
        desc="A look at broadcast projects, technical deployments, live entertainment, and sports production environments supported by Real Impact."
        video="/videos/mpl"
      />
      <GalleryGrid />
      <Cta />
    </>
  );
}
