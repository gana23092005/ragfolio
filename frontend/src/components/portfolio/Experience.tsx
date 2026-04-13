import { motion } from 'framer-motion'

export function Experience() {
    return (
        <section id="experience" className="py-12 px-4 border-t border-zinc-800/50">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl font-semibold text-white mb-6">Experience</h2>
                <div className="space-y-12">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="relative pl-8 border-l border-zinc-800"
                    >
                        <div className="absolute w-3 h-3 bg-blue-500 rounded-full -left-[6.5px] top-1.5 ring-4 ring-zinc-950"></div>
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                            <h3 className="text-lg font-medium text-white">SOLVE-A-THON 1.0 — National Hackathon</h3>
                            <span className="text-sm text-zinc-500">Feb 2026</span>
                        </div>
                        <p className="text-blue-400 text-sm mb-3">National Level 24-Hour Hackathon</p>
                        <p className="text-zinc-400 text-sm leading-relaxed">
                            Competed at a national level, building functional solutions under intense
                            time pressure. Demonstrated rapid prototyping, collaborative problem-solving,
                            and the ability to deliver working products within 24 hours.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="relative pl-8 border-l border-zinc-800"
                    >
                        <div className="absolute w-3 h-3 bg-zinc-700 rounded-full -left-[6.5px] top-1.5 ring-4 ring-zinc-950"></div>
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                            <h3 className="text-lg font-medium text-white">MAKEFORMANGALURU — Make-a-thon</h3>
                            <span className="text-sm text-zinc-500">Aug 2025</span>
                        </div>
                        <p className="text-blue-400 text-sm mb-3">Design Impact Movement</p>
                        <p className="text-zinc-400 text-sm leading-relaxed">
                            Participated in a design-focused make-a-thon emphasizing real-world social
                            impact. Applied user-centered design thinking alongside engineering skills
                            to build meaningful solutions for the community.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}