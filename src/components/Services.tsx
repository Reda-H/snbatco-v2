import { Building2, Cpu, Factory, Lightbulb } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Building2,
      title: 'Structural Engineering',
      description: 'Innovative structural solutions for buildings and infrastructure projects.',
    },
    {
      icon: Cpu,
      title: 'Smart Systems',
      description: 'Integration of intelligent systems and IoT solutions for modern facilities.',
    },
    {
      icon: Factory,
      title: 'Industrial Design',
      description: 'Efficient and sustainable industrial facility planning and execution.',
    },
    {
      icon: Lightbulb,
      title: 'Energy Solutions',
      description: 'Renewable energy systems and sustainable power infrastructure.',
    },
  ];

  return (
    <section id="services" className="py-20">
      <div className="max-w-[90vw] mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We offer comprehensive engineering solutions tailored to meet the unique
            needs of your projects and challenges.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <service.icon className="h-12 w-12 text-blue-600 mb-6" />
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <a
                href="#"
                className="text-blue-600 hover:text-blue-700 transition-colors"
              >
                Learn More →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}