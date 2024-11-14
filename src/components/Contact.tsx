import { Phone, Mail, MapPin } from 'lucide-react';
import emailjs from 'emailjs-com';

export default function Contact() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const serviceId = import.meta.env.VITE_SERVICE_ID;
    const templateId = import.meta.env.VITE_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_PUBLIC_KEY;
    console.log({ serviceId, templateId, target: e.currentTarget, publicKey });

    emailjs.sendForm(serviceId, templateId, e.currentTarget, publicKey)
      .then((result) => {
        console.log('SUCCESS!', result.status, result.text);
      }, (error) => {
        console.log('FAILED!', error);
      });
  };

  return (
    <section id="contact" className="section-padding">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 md:gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-3">
            <h2 className="font-bold text-gray-900 mb-6 md:mb-8">Contactez-nous</h2>
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                <div>
                  <label htmlFor="from_name" className="block text-sm font-medium text-gray-700 mb-2">
                    Nom / Société
                  </label>
                  <input
                    type="text"
                    id="from_name"
                    name="from_name"
                    className="w-full px-3 md:px-4 py-2 md:py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Votre nom / Société"
                  />
                </div>
                <div>
                  <label htmlFor="from_email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="from_email"
                    name="from_email"
                    className="w-full px-3 md:px-4 py-2 md:py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="votre@email.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="from_subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Sujet
                </label>
                <input
                  type="text"
                  id="from_subject"
                  name="from_subject"
                  className="w-full px-3 md:px-4 py-2 md:py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Quel est votre sujet?"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  name="message"
                  className="w-full px-3 md:px-4 py-2 md:py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Votre message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full btn btn-primary"
              >
                J'envoie
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="lg:col-span-2 bg-gray-50 p-6 md:p-8 rounded-lg">
            <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-6">
              Contact Information
            </h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <Phone className="h-5 w-5 md:h-6 md:w-6 text-blue-600 mt-1" />
                <div className="ml-4">
                  <h4 className="font-medium text-gray-900">Téléphone</h4>
                  <p className="text-gray-600 text-md md:text-base underline underline-offset-2">
                    <a href="tel:+212522982887">05 22 98 28 87</a>
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <Mail className="h-5 w-5 md:h-6 md:w-6 text-blue-600 mt-1" />
                <div className="ml-4">
                  <h4 className="font-medium text-gray-900">Email</h4>
                  <p className="text-gray-600 text-md md:text-base underline underline-offset-2">
                    <a href="mailto:snbatsnbat01@gmail.com">snbatsnbat01@gmail.com</a>
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <MapPin className="h-5 w-5 md:h-6 md:w-6 text-blue-600 mt-1" />
                <div className="ml-4">
                  <h4 className="font-medium text-gray-900">Adresse</h4>
                  <p className="text-gray-600 text-sm md:text-base">
                    59 Bd Zerktouni, 3éme étage N°8,<br />
                    Casablanca<br />
                    Maroc
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="font-medium text-gray-900 mb-4">Business Hours</h4>
              <div className="space-y-2 text-gray-600 text-sm md:text-base">
                <div className="flex flex-row">
                  <p className="min-w-[140px]">Lundi - Vendredi:</p>
                  <p>8:30 - 17:30</p>
                </div>
                <div className="flex flex-row">
                  <p className="min-w-[140px]">Samedi - Dimanche:</p>
                  <p>Fermé</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}