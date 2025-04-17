"use client";

import { Button } from "@/components/ui/button";
import { Calendar, MessageSquare, Brain, Users } from "lucide-react";
import { Card } from "@/components/ui/card";

export default function Home() {
  return (
   
  <main className="min-h-screen overflow-x-hidden">
  {/* Hero Section */}
  <section className="relative min-h-screen flex items-center justify-center bg-black text-white px-4">
    <div className="absolute inset-0 bg-gradient-to-br from-black to-blue-900 opacity-90"></div>
    <div className="relative z-10 w-full max-w-3xl mx-auto text-center">
      <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-green-400 break-words">
        Estás perdiendo tiempo, dinero y salud por no integrar IA.
      </h1>
      <p className="text-xl md:text-2xl mb-8 text-gray-300">
        Yo te ayudo a parar, implementar y escalar sin quemarte.
      </p>
      <p className="text-lg mb-12 text-gray-400">
        Trabajo con fundadores desbordados que necesitan claridad, foco y herramientas reales para integrar IA en sus procesos, productos y cultura.
      </p>
      <a
        href="https://app.apollo.io/#/meet/playingcamp/15-min"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button size="lg" className="w-full max-w-md mx-auto bg-blue-500 hover:bg-blue-600 text-white text-lg py-4 px-6 rounded-lg">
  Reserva tu llamada de diagnóstico gratuita
</Button>

      </a>
    </div>
  </section>


      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Sobre mí</h2>
<div className="flex flex-col md:flex-row gap-8 items-center md:items-start min-h-[18rem]">
 <img
  src="https://i.imgur.com/DnA2LtN.png"
  alt="Carlos Alcalá Marcos"
  className="rounded-full w-64 h-64 object-cover min-w-[16rem]"
  onError={() => {}}
/>


            <div>
              <p className="text-lg mb-4">
                Carlos Alcalá Marcos es psicólogo, consultor de IA y fundador de Playing Camp. Acompaña a founders que lideran bajo presión, con múltiples frentes abiertos, y sienten que la IA es una oportunidad que se les escapa por falta de tiempo o comprensión técnica.
              </p>
              <p className="text-lg font-semibold text-blue-600">
                Especializado en convertir caos en estrategia implementable con IA.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Servicios</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <Calendar className="w-12 h-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold mb-4">Implementación exprés de IA</h3>
              <p className="text-gray-600">
                Automatiza tareas clave, crea flujos de trabajo con IA y recupera horas cada semana.
              </p>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <MessageSquare className="w-12 h-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold mb-4">Consultoría estratégica</h3>
              <p className="text-gray-600">
                Te ayudo a decidir dónde y cómo usar la IA sin perder el alma de tu startup.
              </p>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <Users className="w-12 h-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold mb-4">Formación para founders y equipos</h3>
              <p className="text-gray-600">
                Talleres intensivos sobre IA generativa, productividad aumentada y liderazgo apoyado por IA.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Lo que dicen otros founders</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6">
              <p className="text-gray-600 mb-4">
                "Gracias a Carlos, hemos automatizado procesos que nos consumían horas. Ahora puedo centrarme en lo que realmente importa: hacer crecer mi startup."
              </p>
              <p className="font-semibold">Aurora Fraile</p>
              <p className="text-sm text-gray-500">CEO, OhanaWheels</p>
            </Card>
            <Card className="p-6">
              <p className="text-gray-600 mb-4">
                "La claridad y enfoque práctico de Carlos nos ayudó a implementar IA de forma efectiva sin perder tiempo en experimentación."
              </p>
              <p className="font-semibold">Franco Bell</p>
              <p className="text-sm text-gray-500">CEO, RQE Tech</p>
            </Card>
          </div>
        </div>
      </section>

{/* Contact Section */}
<section className="py-20 bg-black text-white px-4">
  <div className="max-w-4xl mx-auto text-center">
    <h2 className="text-3xl font-bold mb-8">Haz que la IA trabaje para ti, no contra ti</h2>
    <p className="text-lg mb-8">
      Agenda una sesión de diagnóstico gratuita y descubre cómo la IA puede transformar tu startup
    </p>
    <a
      href="https://app.apollo.io/#/meet/playingcamp/15-min"
      target="_blank"
      rel="noopener noreferrer"
    >
      
      <Button size="lg" className="w-full max-w-md mx-auto bg-blue-500 hover:bg-blue-600 text-white text-lg py-4 px-6 rounded-lg">
  Reserva tu llamada de diagnóstico gratuita
</Button>
    </a>

    <p className="mt-4 text-gray-400">
      O escríbeme directamente a{" "}
      <a
        href="mailto:hello@playingcamp.com"
        className="text-blue-400 hover:text-blue-300"
      >
        hello@playingcamp.com
      </a>{" "}
      o por{" "}
      <a
        href="https://wa.me/34601569640"
        target="_blank"
        rel="noopener noreferrer"
        className="text-green-400 hover:text-green-300"
      >
        WhatsApp
      </a>
    </p>
  </div>
</section>

    
      <footer className="bg-black text-gray-400 text-center py-6 text-sm">
  © 2024 Carlos Alcalá Marcos. Todos los derechos reservados.
</footer>
    </main>
  );
}
