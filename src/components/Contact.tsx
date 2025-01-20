import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 -right-1/2 w-[1000px] h-[1000px] bg-gradient-to-b from-indigo-50 to-teal-50 rounded-full blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute -bottom-1/2 -left-1/2 w-[1000px] h-[1000px] bg-gradient-to-t from-pink-50 to-purple-50 rounded-full blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
              Parlons de votre projet
            </span>
          </h2>
          <p className="text-lg text-gray-600">
            Vous souhaitez collaborer ou en savoir plus sur mes services ? N'hésitez pas à me contacter pour discuter de vos projets.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {/* Email */}
          <div className="group">
            <a
              href="mailto:alirhouma09@gmail.com"
              className="block p-8 bg-white rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 hover:bg-gradient-to-br hover:from-indigo-50 hover:to-purple-50"
            >
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Email</h3>
                <p className="text-gray-600 group-hover:text-indigo-600 transition-colors duration-300">
                  alirhouma09@gmail.com
                </p>
              </div>
            </a>
          </div>

          {/* Phone */}
          <div className="group">
            <a
              href="tel:+21655567094"
              className="block p-8 bg-white rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 hover:bg-gradient-to-br hover:from-teal-50 hover:to-blue-50"
            >
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-teal-600 to-blue-600 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Téléphone</h3>
                <p className="text-gray-600 group-hover:text-teal-600 transition-colors duration-300">
                  +216 55 567 094
                </p>
              </div>
            </a>
          </div>

          {/* Location */}
          <div className="group">
            <div className="p-8 bg-white rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 hover:bg-gradient-to-br hover:from-pink-50 hover:to-orange-50">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-pink-600 to-orange-600 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Localisation</h3>
                <p className="text-gray-600 group-hover:text-pink-600 transition-colors duration-300">
                  Monastir, Tunis
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}