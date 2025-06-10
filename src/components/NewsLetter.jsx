import React from "react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"

export default function Newsletter() {
  return (
    <section className="py-20 bg-gradient-to-b from-orange-50 to-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-medium">
              Stay Updated
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
              Subscribe to our <br className="hidden sm:block" />
              Newsletter for updates
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Get the latest updates on our new projects, construction tips, and exclusive offers delivered straight to
              your inbox. Join our community of homeowners and industry professionals.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 max-w-md">
              <Input type="email" placeholder="Enter your email address" className="flex-1" />
              <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8">Subscribe</Button>
            </div>

            <p className="text-sm text-gray-500">
              By subscribing, you agree to our Privacy Policy and Terms of Service.
            </p>
          </div>

          <div className="relative">
            <div className="relative w-full h-96 lg:h-[500px] rounded-3xl overflow-hidden">
              <img
                src="/images/news.png?height=500&width=600"
                alt="Modern home exterior"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="absolute -top-6 -right-6 w-32 h-32 border-4 border-orange-200 rounded-3xl"></div>
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-emerald-100 rounded-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
