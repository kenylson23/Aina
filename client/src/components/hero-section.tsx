import { motion } from "framer-motion";
import { ShoppingCart, Phone, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const scrollToProducts = () => {
    const element = document.getElementById("products");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center gradient-bg pt-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          className="text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-5xl md:text-7xl font-playfair font-bold text-gray-800 mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Gloria's{" "}
            <span className="text-primary-pink">Cakes</span>
          </motion.h1>

          <motion.p
            className="text-2xl md:text-3xl font-playfair text-deep-pink mb-8 italic"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Bolos & Doces
          </motion.p>

          <motion.p
            className="text-lg text-gray-600 mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Criamos momentos doces e inesquecíveis com nossos bolos artesanais e
            doces únicos. Cada criação é feita com amor, ingredientes premium e
            muito carinho.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Button
              onClick={scrollToProducts}
              className="bg-primary-pink text-white px-8 py-4 rounded-full hover:bg-deep-pink transform hover:scale-105 transition-all duration-300 shadow-lg font-medium"
              size="lg"
            >
              <ShoppingCart className="mr-2 h-5 w-5" />
              Ver Produtos
            </Button>
            <Button
              onClick={scrollToContact}
              variant="outline"
              className="border-2 border-primary-pink text-primary-pink px-8 py-4 rounded-full hover:bg-primary-pink hover:text-white transition-all duration-300 font-medium"
              size="lg"
            >
              <Phone className="mr-2 h-5 w-5" />
              Fazer Pedido
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          className="relative"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <motion.div
            className="floating-animation"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <img
              src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=800"
              alt="Beautiful decorated birthday cake with flowers"
              className="rounded-3xl shadow-2xl w-full max-w-lg mx-auto"
            />
          </motion.div>
          
          <motion.div
            className="absolute -top-4 -right-4 w-20 h-20 bg-rose-gold rounded-full flex items-center justify-center text-white text-2xl shadow-lg"
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <Heart className="h-8 w-8" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
