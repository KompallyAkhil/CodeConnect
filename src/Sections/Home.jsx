import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Meteors } from "@/components/ui/meteors";
export const Home = () => {
    return (
        <>
            <div className="relative flex h-[525px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border ">
                <Meteors number={40} />
                <span className="whitespace-pre-wrap bg-gradient-to-b">
                    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-b from-background to-background/50 pointer-events-none" />
                        <div className="container relative z-10 px-4 py-32 mx-auto text-center">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8 }}
                                className="max-w-3xl mx-auto space-y-8"
                            >
                                <motion.span
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.3 }}
                                    className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium tracking-wide"
                                >
                                    The Future of Code Collaboration
                                </motion.span>
                                <motion.h1
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.5 }}
                                    className="text-4xl md:text-6xl font-bold tracking-tight"
                                >
                                    Connect. Code. Create.
                                </motion.h1>
                                <motion.p
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.7 }}
                                    className="max-w-xl mx-auto text-lg text-muted-foreground"
                                >
                                    Join a community of developers sharing knowledge and building the future together.
                                    Real-time collaboration, instant feedback, and continuous learning.
                                </motion.p>
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.9 }}
                                    className="flex flex-col sm:flex-row gap-4 justify-center"
                                >
                                    <Button size="lg" className="group">
                                        Get Started
                                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                    </Button>
                                    <Button size="lg" variant="outline">
                                        Learn More
                                    </Button>
                                </motion.div>
                            </motion.div>
                        </div>
                    </section>
                </span>
            </div>
        </>
    );
};