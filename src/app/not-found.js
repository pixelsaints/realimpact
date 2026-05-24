import Link from "next/link";

export default function NotFound() {
  return (
    <section className="min-h-screen bg-black text-white flex items-center justify-center px-6">

      <div className="text-center">

        <h1 className="text-[8rem] leading-none font-bold">
          404
        </h1>

        <h2 className="text-3xl mt-4">
          Page not found
        </h2>

        <p className="text-white/60 mt-4 max-w-md mx-auto">
          The page you’re looking for doesn’t exist or has been moved.
        </p>

        <Link
          href="/"
          className="inline-flex mt-8 border border-white/20 px-6 py-3 hover:bg-white hover:text-black transition-all duration-500"
        >
          Back to Home
        </Link>

      </div>

    </section>
  );
}