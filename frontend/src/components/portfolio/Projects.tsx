import { motion } from 'framer-motion'

export function Projects() {
  return (
    <section id="projects" className="py-12 px-4 border-t border-zinc-800/50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold text-white mb-6">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            className="p-6 rounded-xl bg-zinc-900/40 border border-zinc-800 hover:border-zinc-700 transition-colors cursor-default"
          >
            <h3 className="font-medium text-white text-lg">Network Security Analytics</h3>
            <p className="text-sm text-zinc-400 mt-2 leading-relaxed">
              An AI-driven platform for real-time network threat detection and analytics.
              Built using Python and Machine Learning to identify anomalies and security
              threats as they occur across network traffic.
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              {['Python', 'Machine Learning', 'Network Security', 'Linux'].map(tag => (
                <span key={tag} className="px-2 py-1 rounded-md bg-zinc-800 text-zinc-400 text-xs">{tag}</span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            whileHover={{ scale: 1.02 }}
            className="p-6 rounded-xl bg-zinc-900/40 border border-zinc-800 hover:border-zinc-700 transition-colors cursor-default"
          >
            <h3 className="font-medium text-white text-lg">Ragfolio — AI Portfolio Chatbot</h3>
            <p className="text-sm text-zinc-400 mt-2 leading-relaxed">
              A RAG-powered portfolio chatbot that answers questions about skills,
              projects, and experience using AI. Built with FastAPI, ChromaDB,
              and Google Gemini as part of a hands-on DevOps learning project.
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              {['FastAPI', 'Python', 'ChromaDB', 'Gemini', 'React'].map(tag => (
                <span key={tag} className="px-2 py-1 rounded-md bg-zinc-800 text-zinc-400 text-xs">{tag}</span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}