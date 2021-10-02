function Backdrop() {
  return (
    <div className="mx-16 mt-8 h-96 relative">
      <h1 className="text-5xl font-bold mb-4">Tailwind CSS Backdrop Filters</h1>
      <div className="absolute w-full h-full py-8">
        <img
          className="h-80 w-full object-cover rounded-2xl"
          src="/images/young-girl.jpg"
        />
      </div>
      <div className="relative h-full flex overflow-x-auto space-x-80">
        <div className="flex-shrink-0 rounded-2xl w-full"></div>
        <div className="flex-shrink-0 rounded-2xl w-1/3 border-4 border-black backdrop-filter backdrop-grayscale"></div>
        <div className="flex-shrink-0 rounded-2xl w-1/3 border-4 border-black backdrop-filter backdrop-hue-rotate-180"></div>
        <div className="flex-shrink-0 rounded-2xl w-1/3 border-4 border-black backdrop-filter backdrop-saturate-200"></div>
        <div className="flex-shrink-0 rounded-2xl w-1/3 border-4 border-black backdrop-filter backdrop-blur-lg"></div>
        <div className="flex-shrink-0 rounded-2xl w-1/3 border-4 border-black backdrop-filter backdrop-sepia"></div>
        <div className="flex-shrink-0 rounded-2xl w-1/3 border-4 border-black backdrop-filter backdrop-invert"></div>

        <div className="flex-shrink-0 rounded-2xl w-full"></div>
      </div>
      <h1 className="text-5xl font-bold mb-4">Tailwind CSS Backdrop Filters</h1>
    </div>
  );
}

export default Backdrop;
