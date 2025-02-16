import Link from "next/link"
import { Facebook, Twitter, LinkedinIcon as LinkedIn, Instagram } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-purple-900/50 text-gray-300 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-semibold mb-4 gradient-text">Tirex Engineering</h3>
            <p className="mb-4 text-gray-400">Innovative Electrical & Civil Engineering Solutions</p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Facebook />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Twitter />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-primary transition-colors">
                <LinkedIn />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Instagram />
              </Link>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-200">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/#about" className="text-gray-400 hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/#services" className="text-gray-400 hover:text-primary transition-colors">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/#portfolio" className="text-gray-400 hover:text-primary transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/#team" className="text-gray-400 hover:text-primary transition-colors">
                  Our Team
                </Link>
              </li>
              <li>
                <Link href="/#blog" className="text-gray-400 hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="text-gray-400 hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-200">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Electrical Engineering</li>
              <li>Civil Engineering</li>
              <li>Power Systems</li>
              <li>Project Management</li>
              <li>Sustainable Solutions</li>
              <li>Smart Infrastructure</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-200">Contact Us</h4>
            <p className="text-gray-400">123 Engineering Street</p>
            <p className="text-gray-400">Techville, TX 12345</p>
            <p className="text-gray-400">Phone: (123) 456-7890</p>
            <p className="text-gray-400">Email: info@tirexengineering.com</p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Tirex Engineering. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

