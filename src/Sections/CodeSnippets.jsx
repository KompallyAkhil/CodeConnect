import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const snippets = [
  {
    language: "JavaScript",
    title: "Array Manipulation",
    code: `const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6, 8, 10]`,
  },
  {
    language: "Python",
    title: "List Comprehension",
    code: `numbers = [1, 2, 3, 4, 5]
doubled = [num * 2 for num in numbers]
print(doubled) # [2, 4, 6, 8, 10]`,
  },
];

export const CodeSnippets = () => {
  return (
    <section className="py-24">
      <div className="container px-4 mx-auto">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold tracking-tight mb-4"
          >
            Featured Code Snippets
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted-foreground"
          >
            Explore and learn from community-shared code examples
          </motion.p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {snippets.map((snippet, index) => (
            <motion.div
              key={snippet.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="p-6 h-full">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm font-medium text-muted-foreground">
                    {snippet.language}
                  </span>
                  <Button variant="ghost" size="sm">
                    Copy
                  </Button>
                </div>
                <h3 className="text-lg font-semibold mb-4">{snippet.title}</h3>
                <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                  <code className="text-sm">{snippet.code}</code>
                </pre>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};