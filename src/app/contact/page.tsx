// src/app/contact/page.tsx
import { Metadata } from 'next';
import { personalInfo } from '@/lib/data';

export const metadata: Metadata = {
    title: 'Contacto',
    description: 'Ponte en contacto conmigo para oportunidades laborales o colaboraciones.',
};

export default function ContactPage() {
    return (
        <div className="container mx-auto px-4 py-12">
            <div className="max-w-2xl mx-auto">
                <h1 className="text-4xl font-bold text-gray-900 mb-6">Contacto</h1>
                <p className="text-gray-600 mb-8">
                    ¿Tienes algún proyecto en mente o quieres saludar?
                    Rellena el formulario o contáctame a través de mis redes sociales.
                </p>

                <form className="bg-white p-8 rounded-lg shadow-md space-y-6">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                            Nombre
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                            placeholder="Tu nombre"
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                            placeholder="tu@email.com"
                        />
                    </div>

                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                            Mensaje
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            rows={5}
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                            placeholder="Cuéntame sobre tu proyecto..."
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
                    >
                        Enviar Mensaje
                    </button>
                </form>

                <div className="mt-8 text-center">
                    <p className="text-gray-600">
                        O envíame un correo directo a: <br />
                        <a href={`mailto:${personalInfo.email}`} className="text-blue-600 font-bold hover:underline">
                            {personalInfo.email}
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
}