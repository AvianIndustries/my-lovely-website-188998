import Link from 'next/link'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

export default function ContactPage() {
  return (
    <div>
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl lg:text-7xl">Contact Us</h1>
        <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">We'd love to hear from you. Please get in touch to discuss how we can help you.</p>
        <Link href="/"><a className="mt-5 w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">Go Home</a></Link>
      </main>
      <Footer />
    </div>
  )
}