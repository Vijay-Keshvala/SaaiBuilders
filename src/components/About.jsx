import { Button } from "./ui/button"

export default function About() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Section */}
          <div className="relative">
            <div className="relative w-full h-96 lg:h-[500px] rounded-3xl overflow-hidden">
            <img
  src="https://assets-news.housing.com/news/wp-content/uploads/2023/02/24234354/house-7.png?height=500&width=600"
  alt="Modern architectural building"
  className="object-cover w-full h-full rounded-3xl"
/>

            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-6 -left-6 w-32 h-32 border-4 border-orange-200 rounded-3xl"></div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-emerald-100 rounded-2xl"></div>
          </div>

          {/* Text Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Beautiful craftsmanship <br className="hidden sm:block" />& Achievements
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                With over two decades of experience in residential construction, we have established ourselves as
                leaders in creating exceptional homes. Our commitment to quality, innovation, and customer satisfaction
                has earned us recognition throughout the region.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
                Learn More
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-emerald-800 border-emerald-800 hover:bg-emerald-800 hover:text-white"
              >
                View Portfolio →
              </Button>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-800 mb-2">150+</div>
                <div className="text-sm text-gray-600">Homes Built</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-800 mb-2">25+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-800 mb-2">98%</div>
                <div className="text-sm text-gray-600">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
