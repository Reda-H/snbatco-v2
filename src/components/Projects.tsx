import { ArrowRight } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'Smart City Infrastructure',
      category: 'Urban Development',
      image: 'https://images.unsplash.com/photo-1519999482648-25049ddd37b1?auto=format&fit=crop&q=80',
      description: 'Implementing smart technology solutions for modern urban living.',
    },
    {
      title: 'Sustainable Bridge Design',
      category: 'Infrastructure',
      image: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&q=80',
      description: 'Revolutionary bridge design with minimal environmental impact.',
    },
    {
      title: 'Green Energy Complex',
      category: 'Renewable Energy',
      image: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&q=80',
      description: 'State-of-the-art renewable energy facility powering communities.',
    },
  ];

  return (
    <section id="projects" className="section-padding bg-gray-50">
      <div className="section-container">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="font-bold text-gray-900 mb-3 md:mb-4">Featured Projects</h2>
          <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto">
            Discover our most innovative and impactful engineering projects that
            showcase our expertise and commitment to excellence.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-48 md:h-64">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-blue-600 text-white text-xs md:text-sm rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>
              <div className="p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-sm md:text-base text-gray-600 mb-4">{project.description}</p>
                <a
                  href="#"
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors text-sm md:text-base"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-8 md:mt-12">
          <a
            href="#"
            className="btn btn-primary inline-flex items-center"
          >
            View All Projects
            <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
          </a>
        </div>
      </div>
    </section>
  );
}