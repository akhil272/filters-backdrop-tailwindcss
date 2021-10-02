import Link from "next/link";
function Homepage() {
  return (
    <div className="p-4 min-h-scree flex items-center justify-center">
      <div>
        <h4 className="text-4xl font-bold">Tailwind CSS Filters</h4>
        <Link href="/backdrop">Backdrop </Link>
        {/* Images used for filter  */}
        <div className="flex space-x-8">
          <img
            className="h-50 shadow-xl rounded-lg filter brightness-50"
            src="/images/young-girl.jpg"
          />
          <img
            className="h-50 shadow-xl rounded-lg filter saturate-150"
            src="/images/young-girl.jpg"
          />
          <img
            className="h-50 shadow-xl rounded-lg filter hue-rotate-60"
            src="/images/young-girl.jpg"
          />
          <img
            className="h-50 shadow-xl rounded-lg filter hue-rotate-90 saturate-150 contrast-150"
            src="/images/young-girl.jpg"
          />
          <img
            className="h-50 shadow-xl rounded-lg filter grayscale"
            src="/images/young-girl.jpg"
          />
          <img
            className="h-50 shadow-xl rounded-lg filter transition duration-300 sepia hover:sepia-0 "
            src="/images/young-girl.jpg"
          />
          <img
            className="h-50 shadow-xl rounded-lg transition duration-300 filter invert hover:invert-0"
            src="/images/young-girl.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Homepage;
