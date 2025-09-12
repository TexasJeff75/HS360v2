import React from 'react';
import { motion } from 'framer-motion';
import { Award, Shield, Users, Target, Microscope, Heart } from 'lucide-react';
import CalendlySection from '../components/CalendlySection';

const About = () => {
  const values = [
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Compliance First",
      description: "Unwavering commitment to regulatory compliance and ethical practices in all our operations."
    },
    {
      icon: <Microscope className="h-8 w-8" />,
      title: "Scientific Excellence",
      description: "Cutting-edge research and development backed by peer-reviewed science and clinical validation."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Provider Partnership",
      description: "Collaborative relationships with healthcare providers to deliver personalized patient care."
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Patient-Centered",
      description: "Every decision we make is guided by improving patient outcomes and quality of life."
    }
  ];

  const leadership = [
    {
      name: "Dr. Sarah Chen",
      role: "Chief Executive Officer",
      background: "Former Director of Precision Medicine at Johns Hopkins, 15+ years in molecular diagnostics"
    },
    {
      name: "Dr. Michael Rodriguez",
      role: "Chief Scientific Officer",
      background: "PhD in Biochemistry, pioneered peptide therapeutics research at Stanford University"
    },
    {
      name: "Dr. Emily Johnson",
      role: "Chief Medical Officer",
      background: "Board-certified physician specializing in functional medicine and genetic testing"
    }
  ];

  return (
    <>
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-dark text-off-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-5xl lg:text-6xl font-poppins font-bold mb-6">
              About <span className="bg-gradient-primary bg-clip-text text-transparent">HealthSpan360</span>
            </h1>
            <p className="text-xl lg:text-2xl text-cool-gray font-inter leading-relaxed">
              We're pioneering the future of personalized medicine through innovative 
              diagnostics, genetic insights, and cutting-edge peptide science.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <div className="bg-gradient-primary text-white p-3 rounded-lg w-fit mb-6">
                  <Target className="h-8 w-8" />
                </div>
                <h2 className="text-3xl lg:text-4xl font-poppins font-bold text-gray-900 mb-6">Our Mission</h2>
                <p className="text-lg text-gray-600 font-inter leading-relaxed mb-6">
                  To turn insight into impact by bridging cutting-edge science with practical, 
                  provider-driven solutions. We empower healthcare professionals with the tools 
                  and knowledge they need to deliver personalized, effective care.
                </p>
                <p className="text-lg text-gray-600 font-inter leading-relaxed">
                  Through advanced genetic testing, comprehensive micronutrient analysis, 
                  research-grade peptides, and clinical laboratory services, we're transforming 
                  how providers approach patient care and health optimization.
                </p>
              </div>

              <div>
                <div className="bg-gradient-secondary text-white p-3 rounded-lg w-fit mb-6">
                  <Award className="h-8 w-8" />
                </div>
                <h2 className="text-3xl lg:text-4xl font-poppins font-bold text-gray-900 mb-6">Our Vision</h2>
                <p className="text-lg text-gray-600 font-inter leading-relaxed">
                  To be the leading platform where science meets personalized healthcare, 
                  enabling every individual to achieve their optimal health span through 
                  precision diagnostics and evidence-based interventions.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gray-50 to-blue-50 p-8 rounded-3xl"
            >
              <h3 className="text-2xl font-poppins font-bold text-gray-900 mb-8">Our Impact</h3>
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="text-3xl font-poppins font-bold text-magenta-500 mb-2">500+</div>
                  <div className="text-gray-900 font-poppins font-semibold mb-1">Healthcare Providers</div>
                  <div className="text-gray-600 font-inter text-sm">Trusting our diagnostic solutions</div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="text-3xl font-poppins font-bold text-orange-500 mb-2">170</div>
                  <div className="text-gray-900 font-poppins font-semibold mb-1">Genetic Markers</div>
                  <div className="text-gray-600 font-inter text-sm">Analyzed for personalized insights</div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="text-3xl font-poppins font-bold text-purple-500 mb-2">196</div>
                  <div className="text-gray-900 font-poppins font-semibold mb-1">Biomarkers</div>
                  <div className="text-gray-600 font-inter text-sm">Comprehensive health analysis</div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="text-3xl font-poppins font-bold text-gold-500 mb-2">100%</div>
                  <div className="text-gray-900 font-poppins font-semibold mb-1">Actionable</div>
                  <div className="text-gray-600 font-inter text-sm">Insights you can act upon</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-poppins font-bold text-gray-900 mb-6">
              Our Core <span className="bg-gradient-primary bg-clip-text text-transparent">Values</span>
            </h2>
            <p className="text-xl text-gray-600 font-inter max-w-3xl mx-auto">
              These principles guide every decision we make and every service we provide
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 group"
                whileHover={{ 
                  y: -5,
                  transition: { type: "spring", stiffness: 300 }
                }}
              >
                <motion.div 
                  className="bg-gradient-primary text-white p-4 rounded-xl mb-6"
                  whileHover={{ 
                    rotate: [0, -5, 5, 0],
                    scale: 1.05,
                    transition: { duration: 0.5 }
                  }}
                >
                  {value.icon}
                </motion.div>
                <h3 className="text-xl font-poppins font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 font-inter">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-poppins font-bold text-gray-900 mb-6">
              Leadership <span className="bg-gradient-primary bg-clip-text text-transparent">Team</span>
            </h2>
            <p className="text-xl text-gray-600 font-inter max-w-3xl mx-auto">
              Industry experts committed to advancing personalized medicine
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {leadership.map((leader, index) => (
              <motion.div
                key={leader.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-2xl"
                className="bg-gradient-to-br from-gray-50 to-orange-50 p-8 rounded-2xl"
                whileHover={{ 
                  y: -8,
                  boxShadow: "0 15px 35px rgba(0,0,0,0.1)",
                  transition: { type: "spring", stiffness: 300 }
                }}
              >
                <motion.div 
                  className="bg-gradient-primary text-white w-16 h-16 rounded-full flex items-center justify-center mb-6 text-2xl font-poppins font-bold"
                  whileHover={{ 
                    scale: 1.1,
                    rotate: 360,
                    transition: { duration: 0.6 }
                  }}
                  animate={{
                    boxShadow: [
                      "0 0 0 rgba(214, 0, 164, 0)",
                      "0 0 20px rgba(214, 0, 164, 0.3)",
                      "0 0 0 rgba(214, 0, 164, 0)"
                    ]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.5
                  }}
                >
                  {leader.name.split(' ').map(n => n[0]).join('')}
                </motion.div>
                <h3 className="text-xl font-poppins font-bold text-gray-900 mb-2">{leader.name}</h3>
                <div className="text-magenta-500 font-poppins font-semibold mb-4">{leader.role}</div>
                <p className="text-gray-600 font-inter">{leader.background}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="py-24 bg-gradient-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl lg:text-5xl font-poppins font-bold mb-6">
              Compliance & Quality Assurance
            </h2>
            <p className="text-xl text-white/80 font-inter mb-8 leading-relaxed">
              HealthSpan360 maintains the highest standards of regulatory compliance 
              and quality assurance. Our laboratories are certified, our processes 
              are validated, and our commitment to ethical practices is unwavering.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="bg-white/10 backdrop-blur p-6 rounded-xl">
                <div className="text-2xl font-poppins font-bold mb-2">CLIA Certified</div>
                <div className="text-white/80 font-inter">Clinical Laboratory Improvement Amendments</div>
              </div>
              <div className="bg-white/10 backdrop-blur p-6 rounded-xl">
                <div className="text-2xl font-poppins font-bold mb-2">CAP Accredited</div>
                <div className="text-white/80 font-inter">College of American Pathologists</div>
              </div>
              <div className="bg-white/10 backdrop-blur p-6 rounded-xl">
                <div className="text-2xl font-poppins font-bold mb-2">ISO 15189</div>
                <div className="text-white/80 font-inter">Medical Laboratory Quality Standards</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
    {/* Calendly Section */}
    <CalendlySection />
    </>
  );
};

export default About;