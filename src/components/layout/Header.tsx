import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="absolute top-0 left-0 w-full z-50">
      <div className="container py-6 flex items-center justify-between">
        <Link href="/">
          <Image
            src="/images/logo1-1.png"
            alt="Travel Logo"
            width={357}
            height={82}
            className="h-[82px] w-auto"
          />
        </Link>
        
        <nav className="hidden lg:flex items-center gap-12">
          <Link href="/" className="text-white font-semibold">
            Home
          </Link>
          <Link href="/blog" className="text-white/80 font-semibold hover:text-white">
            Blog
          </Link>
          <Link href="/package" className="text-white/80 font-semibold hover:text-white">
            Package
          </Link>
          <Link href="/destination" className="text-white/80 font-semibold hover:text-white">
            Destination
          </Link>
          <Link href="/contact" className="text-white/80 font-semibold hover:text-white">
            Contact
          </Link>
        </nav>

        <button className="lg:hidden text-white">
          <span className="sr-only">Open menu</span>
          {/* Add hamburger menu icon here */}
        </button>
      </div>
    </header>
  );
}
