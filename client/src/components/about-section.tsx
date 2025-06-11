import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Cake, Heart, Clock } from "lucide-react";

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const features = [
    {
      icon: Cake,
      title: "Qualidade Premium",
      description: "Ingredientes selecionados e técnicas artesanais para garantir o melhor sabor.",
    },
    {
      icon: Heart,
      title: "Feito com Amor",
      description: "Cada doce é preparado com carinho e atenção aos mínimos detalhes.",
    },
    {
      icon: Clock,
      title: "Sempre Fresco",
      description: "Produção diária para garantir frescor e qualidade em cada produto.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-gray-800 mb-6">
            Nossa História
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Com paixão pela confeitaria e dedicação aos detalhes, criamos doces
            que despertam sorrisos e eternizam momentos especiais.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="text-center bg-light-pink p-8 rounded-2xl hover:transform hover:scale-105 hover:shadow-lg transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -8 }}
            >
              <motion.div
                className="w-16 h-16 bg-primary-pink rounded-full flex items-center justify-center mx-auto mb-6"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.2 }}
              >
                <feature.icon className="text-white h-8 w-8" />
              </motion.div>
              <h3 className="text-xl font-playfair font-semibold text-gray-800 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
