
export default function YoutubeSection() {
  return (
    <section className="relative overflow-hidden">
      <div className=" relative w-[90%] lg:w-[80%] lg:h-[80vh] mx-auto">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="relative lg:absolute lg:inset-0 h-full w-full object-cover"
        >
          <source src="/videos/video-0003.webm" type="video/webm" />
        </video>
      </div>
    </section>
  )
}
