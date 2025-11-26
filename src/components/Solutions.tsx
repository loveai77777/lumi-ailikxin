import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Solutions() {
  const solutions = [
    {
      title: "Beauty & Spa Assistant (Beta)",
      description: "Turn website visits, messages and calls into booked appointments and loyal members.",
      href: "#contact"
    },
    {
      title: "Appointment-based Local Business",
      description: "For clinics, coaching, salons and studios that live on bookings and repeat clients.",
      href: "#contact"
    },
    {
      title: "Solo Creator & Course Sales",
      description: "Capture leads from content, answer questions and guide people to your offers automatically.",
      href: "#contact"
    }
  ];

  return (
    <section id="solutions" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 font-serif">
            Solution templates
          </h2>
          <p className="text-gray-400 text-lg">
            We start with the use cases that bring you revenue first, and keep adding more over time.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl bg-white/5 border border-white/5 hover:border-brand-500/50 hover:bg-white/10 transition-all group hover:shadow-2xl hover:shadow-brand-500/10 flex flex-col"
            >
              <h3 className="text-xl font-bold mb-3">{solution.title}</h3>
              <p className="text-gray-400 leading-relaxed mb-6 flex-grow">
                {solution.description}
              </p>
              <a 
                href={solution.href}
                className="inline-flex items-center gap-2 text-brand-400 hover:text-brand-300 transition-colors text-sm font-medium group-hover:gap-3"
              >
                Learn more <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

