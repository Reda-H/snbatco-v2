export default function Testimonial() {
  return (
    <section className="py-20 bg-blue-50">
      <div className="max-w-[90vw] mx-auto text-center">
        <div className="relative">
          <div className="text-9xl text-blue-200 font-serif absolute -top-20 left-1/2 transform -translate-x-1/2">
            "
          </div>
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <p className="text-xl text-gray-700 mb-8">
              EngineerPro's innovative approach and commitment to excellence have been
              instrumental in the success of our major infrastructure projects. Their
              team's expertise and dedication are truly exceptional.
            </p>
            
            <div className="flex flex-col items-center">
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80"
                alt="Client"
                className="w-20 h-20 rounded-full object-cover mb-4"
              />
              <div className="text-center">
                <h4 className="font-semibold text-gray-900">Michael Anderson</h4>
                <p className="text-gray-600">CEO, Urban Development Corp</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}