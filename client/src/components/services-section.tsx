import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { FileCode2, Gift, Truck, Palette } from "lucide-react";

export default function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const services = [
    {
      icon: FileCode2,
      title: "Bolos de Casamento",
      description: "Criações únicas para o dia mais especial da sua vida.",
    },
    {
      icon: Gift,
      title: "Eventos Corporativos",
      description: "Doces personalizados para suas celebrações empresariais.",
    },
    {
      icon: Truck,
      title: "Entrega",
      description: "Entregamos seus doces com cuidado em toda a região.",
    },
    {
      icon: Palette,
      title: "Personalização",
      description: "Adaptamos cada criação ao seu gosto e ocasião especial.",
    },
  ];

  return (
    <section className="py-20 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-gray-800 mb-6">
            Nossos Serviços
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Oferecemos serviços completos para tornar sua ocasião especial ainda
            mais doce.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="text-center p-6 hover:transform hover:scale-105 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -8 }}
            >
              <motion.div
                className="w-20 h-20 bg-gradient-to-br from-primary-pink to-rose-gold rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.2 }}
              >
                <service.icon className="text-white h-10 w-10" />
              </motion.div>
              <h3 className="text-xl font-playfair font-semibold text-gray-800 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
