import { motion } from "framer-motion";
import { Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';
const languages = [
  {
    name: "Python",
    color: "bg-blue-500",
    users: "2.3M",
    description: "Simple, versatile, and powerful programming language",
  },
  {
    name: "JavaScript",
    color: "bg-yellow-500",
    users: "3.1M",
    description: "The language of the web",
  },
  {
    name: "Java",
    color: "bg-red-500",
    users: "1.8M",
    description: "Write once, run anywhere",
  },
  {
    name: "Rust",
    color: "bg-orange-600",
    users: "1.2M+",
    description: "A fast system programming language",
  },
  {
    name: "C",
    color: "bg-green-500",
    users: "900K",
    description: "The mother of all programming languages",
  },
  {
    name: "Go",
    color: "bg-blue-500",
    users: "500K",
    description: "Simple and efficient programming language",
  }
];
import { useLogin } from "./Context";
const Community = () => {
  const navigate = useNavigate();
  const { token } = useLogin();
  const discussion = (e) => {
    e.preventDefault();
    toast.error("Login to discuss");
  }
  return (
    <>
      <Toaster />
      <section className="py-24 bg-muted/30">
        <div className="container px-4 mx-auto">
          <div className="max-w-2xl mx-auto text-center mb-14">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl font-bold tracking-tight mb-4"
            >
              Join Our Community
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-muted-foreground"
            >
              Connect with millions of developers across different programming languages
            </motion.p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6">
            {languages.map((language, index) => (
              <motion.div
                key={language.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-lg border bg-background p-6 hover:shadow-lg transition-shadow"
              >
                <div className={`absolute inset-0 ${language.color} opacity-5 group-hover:opacity-10 transition-opacity`} />
                <div className="relative z-10">
                  <div className="mb-4 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Code2 className={`h-5 w-5 ${language.color} text-white rounded p-1`} />
                      <h3 className="font-semibold">{language.name}</h3>
                    </div>
                    <span className="text-sm text-muted-foreground">{language.users} users</span>
                  </div>
                  <div className="flex justify-between ">
                    <p className="text-sm text-muted-foreground">{language.description}</p>
                    <Button onClick={token ? () => navigate(`/community/${language.name}`) : discussion} className={`${language.color} hover:${language.color}`}>Discuss Now</Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
export default Community;