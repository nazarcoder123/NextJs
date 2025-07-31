import Image from 'next/image';

export default function Hero() {
  return (
    <div>
      <section className="relative h-screen">
        {/* Background Image with overlay */}
        <div className="absolute inset-0">
          <Image
            src="/images/banner-unsplash-Ll9bGE6w8uw.png"
            alt="Hero Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        {/* Foreground Content */}
        <div className="container relative h-full flex flex-col justify-center">
          <div className="max-w-2xl text-white">
            <h1 className="text-7xl font-bold leading-tight mb-6">
              Make in
              <br />
              your journey.
            </h1>
            <p className="text-lg text-gray-200 mb-8">
              Explore the world with what you love beautiful natural beauty.
            </p>

            {/* Filter Box with Explore Now button aligned right */}
            <div className="bg-white rounded-[72px] px-6 py-5 shadow-xl max-w-[840px] flex items-center justify-between gap-6 flex-wrap">
              {/* Filters */}
              <div className="flex items-center gap-6 flex-wrap text-sm font-semibold text-gray-600">
                <div className="flex items-center gap-2">
                  <span>Location</span>
                  <svg className="w-4 h-4 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
                <div className="flex items-center gap-2">
                  <span>Date</span>
                  <svg className="w-4 h-4 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
                <div className="flex items-center gap-2">
                  <span>People</span>
                  <svg className="w-4 h-4 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>

              {/* Explore Button */}
              <button className="bg-black text-white rounded-full py-3 px-6 text-sm font-semibold hover:opacity-90 transition-opacity whitespace-nowrap">
                Explore now
              </button>
            </div>

            {/* Popular places */}
            <p className="mt-8 text-gray-300">
              Popular Place : Bali, Istanbul, Rome, Paris.
            </p>
          </div>
        </div>
      </section>

      {/* Lower Section */}
      <section className="hero-section px-8 text-center mt-12">
        <h1 className="text-4xl font-bold">
          Explore new worlds with <br /> exotic natural scenery
        </h1>
        <p className="text-gray-600 mt-2">
          Explore the world with what you love beautiful natural beauty.
        </p>

        {/* Image Grid */}
        <div className="mt-8 flex justify-center gap-6 flex-wrap">
          {[
            {
              src: '/images/bali.png',
              title: 'Bali, Indonesia.',
              desc: 'Bali is a beautiful tourist spot and is visited by many travelers.',
            },
            {
              src: '/images/vietnam.png',
              title: 'Vietnam',
              desc: 'Experience peaceful waters and limestone islands.',
            },
            {
              src: '/images/newyork.png',
              title: 'New York, USA',
              desc: 'Discover the city that never sleeps, full of culture and lights.',
            },
          ].map((item, idx) => (
            <div key={idx} className="max-w-[300px]">
              <Image src={item.src} alt={item.title} width={300} height={200} className="rounded-xl" />
              <h3 className="mt-2 font-semibold">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
