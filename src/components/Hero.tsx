import { ChevronRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[600px] md:h-screen flex items-center">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gray-900/70"></div>
      </div>
      
      <div className="relative z-10 section-container">
        <div className="max-w-3xl">
          <h1 className="font-bold text-white mb-4 md:mb-6">
            Nous construisons l'avenir ensemble
          </h1>
          <p className="text-base md:text-xl text-gray-200 mb-6 md:mb-8">
            Nous livrons des solutions d'ingénierie innovantes qui transforment les communautés
            et créent un impact durable pour les générations à venir.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="btn btn-primary flex items-center justify-center"
            >
              Contactez-nous maintenant
              <ChevronRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
            </a>
            <a
              href="#projects"
              className="btn btn-secondary text-center"
            >
              Voir nos projets
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}