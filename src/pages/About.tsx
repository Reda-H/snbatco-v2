import { useEffect, useState } from 'react';
import { Mail, Linkedin, GraduationCap } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

interface TeamMember {
  name: string;
  role: string;
  department: string;
  image: string;
  bio: string;
  credentials: string[];
  linkedin?: string;
  email?: string;
}

console.log('About');

const teamMembers: TeamMember[] = [
  {
    name: 'Fouad Herradi',
    role: 'PDG & Fondateur', 
    department: 'Direction',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80',
    bio: 'Docteur en génie des structures avec plus de 20 ans d\'expérience dans l\'industrie. Pionnier des solutions d\'infrastructure durable.',
    credentials: ['Docteur en Génie des Structures', 'Ingénieur', 'LEED AP'],
    linkedin: '#',
    email: 'fouadherradi@gmail.com',
  },
  {
    name: 'Marcus Rodriguez',
    role: 'Directeur Technique',
    department: 'Ingénierie',
    image: 'https://images.unsplash.com/photo-1556157382-97eda2f9e2bf?auto=format&fit=crop&q=80',
    bio: 'Dirige nos innovations techniques avec une expertise en systèmes intelligents et intégration IoT pour les infrastructures modernes.',
    credentials: ['Master en Ingénierie des Systèmes', 'Ingénieur'],
    linkedin: '#',
  },
  {
    name: 'Dr. Emily Watson',
    role: 'Directrice de Recherche',
    department: 'R&D',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80',
    bio: 'Dirige les initiatives de recherche en systèmes d\'énergie renouvelable et solutions d\'ingénierie durable.',
    credentials: ['Docteur en Génie Environnemental', 'LEED AP'],
    linkedin: '#',
  },
  {
    name: 'James Mitchell',
    role: 'Directeur des Opérations',
    department: 'Opérations',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80',
    bio: 'Assure une exécution fluide des projets et la satisfaction client grâce à des approches innovantes de gestion de projet.',
    credentials: ['MBA', 'PMP'],
    linkedin: '#',
  },
];

const milestones = [
  {
    year: 1998,
    title: 'Création de l\'Entreprise',
    description: 'Début avec une vision de révolutionner les solutions d\'ingénierie',
  },
  {
    year: 2005,
    title: 'Expansion Internationale',
    description: 'Ouverture du premier bureau international à Singapour',
  },
  {
    year: 2012,
    title: 'Initiative Développement Durable',
    description: 'Lancement de la division d\'ingénierie verte',
  },
  {
    year: 2020,
    title: 'Transformation Digitale',
    description: 'Intégration des solutions IA et IoT dans nos services principaux',
  },
];

const presentation = "SNBAT est un bureau d’études spécialisé dans le domaine du béton armé. Implantée au cœur de Casablanca, la société met en avant une expertise de pointe dans le secteur de la construction et de l’ingénierie. Avec une solide équipe d’ingénieurs et de techniciens qualifiés, SNBAT s’engage à fournir des solutions innovantes et de haute qualité pour tous types de projets de construction en béton armé, qu’il s’agisse de bâtiments résidentiels, commerciaux ou industriels."
const mission = "La mission de SNBAT est de concevoir des structures en béton armé robustes, sûres et durables. L’entreprise s’efforce de répondre aux besoins spécifiques de chaque projet en offrant des services d’étude technique qui respectent les normes les plus strictes en matière de qualité et de sécurité."

export default function About() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navigation isScrolled={isScrolled} />

      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gray-900/70"></div>
        </div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">A Propos de SNBAT</h1>
          <p className="text-xl text-gray-200">Bâtir l'avenir avec innovation et expertise</p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Mission & Values */}
            <div className='space-y-6'>
              <div className='flex items-center gap-5'>
                <GraduationCap className="h-8 w-8 text-blue-600 mt-1" />
                <h2 className="text-3xl font-bold text-gray-900">Notre Mission & Nos Valeurs</h2>
              </div>
              <p className="text-gray-600 mb-8">
                {presentation}
              </p>
              <p className="text-gray-600 mb-8">
                {mission}
              </p>
            </div>

            {/* History Timeline */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Notre Histoire</h2>
              <div className="space-y-8">
                {milestones.map((milestone, index) => (
                  <div key={index} className="relative pl-8 border-l-2 border-blue-200">
                    <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-blue-600"></div>
                    <div className="mb-1">
                      <span className="text-blue-600 font-semibold">{milestone.year}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">{milestone.title}</h3>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Notre Equipe</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="aspect-square">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
                  <p className="text-blue-600 mb-2">{member.role}</p>
                  <p className="text-gray-600 text-sm mb-4">{member.bio}</p>
                  <div className="space-y-2">
                    {member.credentials.map((credential, credIndex) => (
                      <span
                        key={credIndex}
                        className="inline-block bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded mr-2"
                      >
                        {credential}
                      </span>
                    ))}
                  </div>
                  <div className="mt-4 flex space-x-4">
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        className="text-gray-400 hover:text-blue-600 transition-colors"
                      >
                        <Linkedin className="h-5 w-5" />
                      </a>
                    )}
                    {member.email && (
                      <a
                        href={`mailto:${member.email}`}
                        className="text-gray-400 hover:text-blue-600 transition-colors"
                      >
                        <Mail className="h-5 w-5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}