import { Building2, Users, Briefcase, Award } from 'lucide-react';

export default function Stats() {
  const stats = [
    {
      icon: Building2,
      number: '500+',
      label: 'Projets Réalisés',
    },
    {
      icon: Users,
      number: '150+',
      label: 'Ingénieurs Experts',
    },
    {
      icon: Briefcase,
      number: '25+',
      label: 'Années d\'Expérience',
    },
    {
      icon: Award,
      number: '100%',
      label: 'Satisfaction Client',
    },
  ];

  return (
    <section className="bg-gray-50 py-8 md:py-10">
      <div className="section-container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-start p-4 md:p-6 text-center"
            >
              <stat.icon className="h-8 w-8 md:h-12 md:w-12 text-blue-600 mb-3 md:mb-4" />
              <span className="text-2xl md:text-4xl font-bold text-gray-900 mb-1 md:mb-2">
                {stat.number}
              </span>
              <span className="text-sm md:text-base text-gray-600">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}