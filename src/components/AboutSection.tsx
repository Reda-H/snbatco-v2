export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="max-w-[90vw] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Engineering Excellence Since 1998
            </h2>
            <p className="text-gray-600 mb-6">
              For over two decades, we've been at the forefront of engineering innovation,
              delivering exceptional solutions that shape the future of infrastructure,
              technology, and sustainable development.
            </p>
            <p className="text-gray-600 mb-8">
              Our team of expert engineers combines cutting-edge technology with
              proven methodologies to tackle complex challenges and deliver
              outstanding results for our clients worldwide.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Our Mission</h4>
                <p className="text-gray-600">
                  To deliver innovative engineering solutions that exceed expectations
                  and create lasting value for our clients and communities.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Our Vision</h4>
                <p className="text-gray-600">
                  To be the global leader in sustainable engineering solutions that
                  shape a better tomorrow.
                </p>
              </div>
            </div>
          </div>
          <div className="relative h-[500px]">
            <img
              src="https://images.unsplash.com/photo-1581094794329-c8112c4e5190?auto=format&fit=crop&q=80"
              alt="Engineering team at work"
              className="w-full h-full object-cover rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}