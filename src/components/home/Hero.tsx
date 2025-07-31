import Image from 'next/image';

export default function Hero() {
  return (
    <div >
    <section className="relative h-screen">
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
          
          <div className="bg-white rounded-[72px] p-5 shadow-xl max-w-[732px]">
            <div className="grid grid-cols-3 gap-6">
              <div className="flex items-center gap-2">
                <span className="text-gray-600 font-semibold">Location</span>
                <svg className="w-4 h-4 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-gray-600 font-semibold">Date</span>
                <svg className="w-4 h-4 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-gray-600 font-semibold">People</span>
                <svg className="w-4 h-4 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
            <button className="bg-black text-white rounded-full py-3 px-6 mt-4 font-semibold hover:opacity-90 transition-opacity">
              Explore now
            </button>
          </div>

          <p className="mt-8 text-gray-300">
            Popular Place : Bali, Istanbul, Rome, Paris.
          </p>
        </div>
      </div>
    </section>
    <section className="hero-section" style={{ padding: '2rem', textAlign: 'center' }}>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 700 }}>
            
            Explore new worlds with <br /> exotic natural scenery
          </h1>
          <p style={{ color: '#555', marginTop: '0.5rem' }}>
            Explore the world with what you love beautiful natural beauty.
          </p>

          {/* Image Grid */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '1.5rem',
            marginTop: '2rem',
            flexWrap: 'wrap'
          }}>
            {/* Image 1 */}
            <div style={{ maxWidth: '300px' }}>
              <Image src="/images/bali.png" alt="Bali" width={300} height={200} style={{ borderRadius: '12px' }} />
              <h3 style={{ marginTop: '0.5rem' }}>Bali, Indonesia.</h3>
              <p style={{ fontSize: '0.875rem', color: '#555' }}>
                Bali is a beautiful tourist spot and is visited by many travelers.
              </p>
            </div>

            {/* Image 2 */}
            <div style={{ maxWidth: '300px' }}>
              <Image src="/images/vietnam.png" alt="Vietnam" width={300} height={200} style={{ borderRadius: '12px' }} />
              <h3 style={{ marginTop: '0.5rem' }}>Vietnam</h3>
              <p style={{ fontSize: '0.875rem', color: '#555' }}>
                Experience peaceful waters and limestone islands.
              </p>
            </div>

            {/* Image 3 */}
            <div style={{ maxWidth: '300px' }}>
              <Image src="/images/newyork.png" alt="New York" width={300} height={200} style={{ borderRadius: '12px' }} />
              <h3 style={{ marginTop: '0.5rem' }}>New York, USA</h3>
              <p style={{ fontSize: '0.875rem', color: '#555' }}>
                Discover the city that never sleeps, full of culture and lights.
              </p>
            </div>
          </div>
        </section>
    </div>
  );
}
