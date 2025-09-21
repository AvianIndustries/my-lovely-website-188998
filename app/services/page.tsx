import Link from 'next/link'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

export default function ServicesPage() {
  return (
    <div>
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl lg:text-7xl">Our Services</h1>
        <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">We provide high-quality web development, design, and digital marketing services.</p>
        <Link href="/contact"><a className="mt-5 w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">Contact Us</a></Link>
      </main>
      <Footer />
    </div>
  )
}