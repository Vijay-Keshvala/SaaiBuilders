import React from "react"
import { Home, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-emerald-800 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-6">
            <a href="/" className="flex items-center space-x-2">
              {/* <Home className="h-8 w-8" /> */}
            <img src="/images/sai.png" alt="" className="h-8 w-auto sm:h-10 md:h-12 lg:h-14" />
              <span className="text-2xl font-bold">Saai Builders</span>
            </a>
            <p className="text-emerald-100 leading-relaxed">
              Building exceptional homes with outstanding craftsmanship and unmatched attention to detail. Your dream
              home is our commitment.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-emerald-700 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-emerald-700 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-emerald-700 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-emerald-700 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="/about" className="text-emerald-100 hover:text-orange-400 transition-colors">About Us</a></li>
              <li><a href="/services" className="text-emerald-100 hover:text-orange-400 transition-colors">Our Services</a></li>
              <li><a href="/projects" className="text-emerald-100 hover:text-orange-400 transition-colors">Projects</a></li>
              <li><a href="/careers" className="text-emerald-100 hover:text-orange-400 transition-colors">Careers</a></li>
              <li><a href="/blog" className="text-emerald-100 hover:text-orange-400 transition-colors">Blog</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              <li><a href="/custom-homes" className="text-emerald-100 hover:text-orange-400 transition-colors">Custom Homes</a></li>
              <li><a href="/renovations" className="text-emerald-100 hover:text-orange-400 transition-colors">Renovations</a></li>
              <li><a href="/commercial" className="text-emerald-100 hover:text-orange-400 transition-colors">Commercial</a></li>
              <li><a href="/interior-design" className="text-emerald-100 hover:text-orange-400 transition-colors">Interior Design</a></li>
              <li><a href="/landscaping" className="text-emerald-100 hover:text-orange-400 transition-colors">Landscaping</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6">Get in Touch</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-orange-400 mt-1 flex-shrink-0" />
                <span className="text-emerald-100">
                  123 Construction Ave
                  <br />
                  Building City, BC 12345
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-orange-400 flex-shrink-0" />
                <span className="text-emerald-100">(555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-orange-400 flex-shrink-0" />
                <span className="text-emerald-100">info@buildcorp.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-emerald-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-emerald-100 text-sm">© 2024 BuildCorp. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="/privacy" className="text-emerald-100 hover:text-orange-400 text-sm transition-colors">Privacy Policy</a>
              <a href="/terms" className="text-emerald-100 hover:text-orange-400 text-sm transition-colors">Terms of Service</a>
              <a href="/sitemap" className="text-emerald-100 hover:text-orange-400 text-sm transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
