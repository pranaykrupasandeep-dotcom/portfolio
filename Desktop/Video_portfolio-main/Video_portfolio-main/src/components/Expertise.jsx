import React from 'react';
import { motion } from 'framer-motion';

const Expertise = () => {
  // Exactly 2 Featured Projects
  const projectsData = [
    {
      number: '// 01',
      title: 'Autonomous Vehicle Detection',
      category: 'Computer Vision',
      description:
        'Implemented and trained an end-to-end object detection pipeline using YOLOv5 to detect and classify vehicles in real-time. Managed training workflows on Ultralytics HUB with precision, recall, and mAP evaluation metrics.',
      tags: ['Computer Vision', 'YOLOv5', 'Ultralytics HUB', 'Python', 'Model Evaluation'],
    },
    {
      number: '// 02',
      title: 'Railway Passenger Explainer Bot',
      category: 'Generative AI',
      description:
        'Engineered an intelligent Generative AI chatbot using Gemini Flash API and Streamlit to assist railway passengers with ticketing rules, reservation categories, boarding protocols, and station facilities using strict prompt guardrails.',
      tags: ['Gemini API', 'Streamlit', 'Python', 'Prompt Engineering', 'GenAI'],
    },
  ];

  // Separate Experience / Internships Data
  const experienceData = [
    {
      role: 'Artificial Intelligence & Cyber Security Intern',
      company: 'Indian Servers Pvt. Ltd.',
      period: 'Apr 2026 – Jun 2026',
      type: 'Internship',
      points: [
        'Built practical AI automation pipelines and system verification scripts.',
        'Worked on real-world cybersecurity protocols and threat mitigation logic.',
      ],
    },
    {
      role: 'Generative AI Intern',
      company: 'AIMER Society',
      period: 'May 2025 – Jul 2025',
      type: 'Internship',
      points: [
        'Engineered GenAI workflows leveraging Hugging Face transformer models.',
        'Developed interactive prototypes for image classification and object detection.',
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 14 },
    },
  };

  return (
    <section id="projects" className="relative w-full bg-white py-20 md:py-28 overflow-hidden font-sans border-t border-black/5">
      {/* Subtle grid pattern background */}
      <div className="absolute inset-0 pointer-events-none opacity-60">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_24%,rgba(0,0,0,.04)_25%,rgba(0,0,0,.04)_26%,transparent_27%,transparent_74%,rgba(0,0,0,.04)_75%,rgba(0,0,0,.04)_76%,transparent_77%,transparent),linear-gradient(0deg,transparent_24%,rgba(0,0,0,.04)_25%,rgba(0,0,0,.04)_26%,transparent_27%,transparent_74%,rgba(0,0,0,.04)_75%,rgba(0,0,0,.04)_76%,transparent_77%,transparent)] bg-[length:50px_50px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-8">
        
        {/* ================= SECTION 1: FEATURED PROJECTS ================= */}
        <div>
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <div className="mb-3">
              <span className="inline-block text-xs font-semibold text-red-600 uppercase tracking-widest px-3.5 py-1.5 bg-red-500/10 border border-red-500/20 rounded-full">
                //Work
              </span>
            </div>

            <h2 className="text-3xl md:text-5xl font-black text-black tracking-tight mb-3">
              Projects
            </h2>

            
          </motion.div>

          {/* 2 Projects Grid with very light red shade */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="grid grid-cols-1 md:grid-cols-2 gap-7 mb-24"
          >
            {projectsData.map((project, idx) => (
              <motion.div
                key={idx}
                variants={cardVariants}
                whileHover={{ y: -8 }}
                className="group relative bg-gradient-to-br from-[#fff7f7] via-[#fffafb] to-white border border-red-500/15 rounded-3xl p-8 flex flex-col justify-between shadow-sm hover:shadow-2xl hover:shadow-red-500/10 hover:border-red-500/40 transition-all duration-500"
              >
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <span className="font-mono text-xs font-extrabold text-red-500 tracking-wider">
                      {project.number}
                    </span>
                    <span className="text-[11px] font-mono uppercase px-3 py-1 bg-red-500/10 text-red-600 border border-red-500/15 rounded-full font-bold">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-black mb-3 group-hover:text-red-500 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-sm text-black/70 leading-relaxed font-normal mb-8">
                    {project.description}
                  </p>
                </div>

                <div>
                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-2 pt-6 border-t border-red-500/10">
                    {project.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-3 py-1 text-[11px] font-mono text-red-950/80 bg-red-500/[0.06] border border-red-500/10 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>


        {/* ================= SECTION 2: EXPERIENCE & INTERNSHIPS ================= */}
        <div id="experience" className="pt-8 border-t border-black/10">
          {/* Experience Header */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-10"
          >
            <div className="mb-3">
              <span className="inline-block text-xs font-semibold text-red-600 uppercase tracking-widest px-3.5 py-1.5 bg-red-500/10 border border-red-500/20 rounded-full">
                // Experience
              </span>
            </div>

            <h2 className="text-2xl md:text-4xl font-black text-black tracking-tight mb-2">
              Work Experience
            </h2>

            
          </motion.div>

          {/* Experience Cards with light red shade */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {experienceData.map((exp, eIdx) => (
              <motion.div
                key={eIdx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: eIdx * 0.1 }}
                whileHover={{ y: -5 }}
                className="p-7 rounded-3xl bg-gradient-to-br from-[#fff7f7] via-[#fffbfb] to-white border border-red-500/15 hover:border-red-500/35 hover:shadow-xl hover:shadow-red-500/5 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-[11px] font-mono uppercase px-2.5 py-0.5 rounded-full bg-red-500/10 text-red-600 font-bold border border-red-500/15">
                      {exp.type}
                    </span>
                    <span className="text-xs font-mono text-black/40 font-medium">
                      {exp.period}
                    </span>
                  </div>

                  <h4 className="text-lg font-bold text-black mt-3 mb-1">
                    {exp.role}
                  </h4>

                  <p className="text-xs font-mono font-semibold text-red-500 mb-4">
                    {exp.company}
                  </p>

                  <ul className="space-y-2">
                    {exp.points.map((pt, pIdx) => (
                      <li key={pIdx} className="text-xs text-black/70 leading-relaxed flex items-start gap-2">
                        <span className="text-red-500 font-bold mt-0.5">•</span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Expertise;