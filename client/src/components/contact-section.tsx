import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Phone, MapPin, Clock, MessageCircle, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const contactInfo = [
    {
      icon: Phone,
      label: "Telefone",
      value: "940853465",
      action: () => window.open("tel:940853465"),
    },
    {
      icon: MapPin,
      label: "Localização",
      value: "Zango 3 primeira paragem",
      action: () => window.open("https://maps.google.com/?q=Zango+3+primeira+paragem"),
    },
    {
      icon: Clock,
      label: "Horário de Funcionamento",
      value: "Segunda a Sábado: 8h às 18h",
      action: null,
    },
  ];

  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      "Olá! Gostaria de saber mais sobre os bolos e doces da Gloria's Cakes."
    );
    window.open(`https://wa.me/244940853465?text=${message}`, "_blank");
  };

  const handleEmail = () => {
    window.open("mailto:contato@gloriascakes.com?subject=Consulta sobre produtos");
  };

  return (
    <section id="contact" className="py-20 gradient-bg" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-gray-800 mb-6">
            Entre em Contato
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Estamos prontos para criar o doce perfeito para você. Entre em
            contato conosco!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6 }}
          >
            <img
              src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
              alt="Modern bakery interior with display cases"
              className="rounded-3xl shadow-2xl w-full"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-white p-8 rounded-3xl shadow-xl">
              <h3 className="text-3xl font-playfair font-bold text-gray-800 mb-8">
                Fale Conosco
              </h3>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.label}
                    className="flex items-center group cursor-pointer"
                    onClick={info.action || undefined}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                    whileHover={{ x: 5 }}
                  >
                    <motion.div
                      className="w-12 h-12 bg-primary-pink rounded-full flex items-center justify-center mr-4 group-hover:bg-deep-pink transition-colors duration-300"
                      whileHover={{ scale: 1.1 }}
                    >
                      <info.icon className="text-white h-5 w-5" />
                    </motion.div>
                    <div>
                      <p className="text-gray-600 text-sm">{info.label}</p>
                      <p className="text-xl font-semibold text-gray-800">
                        {info.value}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                className="mt-8 flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <Button
                  onClick={handleWhatsApp}
                  className="bg-primary-pink text-white px-8 py-4 rounded-full hover:bg-deep-pink transform hover:scale-105 transition-all duration-300 shadow-lg font-medium flex items-center justify-center"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  WhatsApp
                </Button>
                <Button
                  onClick={handleEmail}
                  variant="outline"
                  className="border-2 border-primary-pink text-primary-pink px-8 py-4 rounded-full hover:bg-primary-pink hover:text-white transition-all duration-300 font-medium flex items-center justify-center"
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Email
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
