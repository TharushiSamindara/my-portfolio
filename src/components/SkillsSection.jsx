import { useState } from "react";
import { cn } from "../lib/utils";

const skills = [
    // Languages
    { name: "JavaScript", level: 90, category: "Languages" },
    { name: "TypeScript", level: 85, category: "Languages" },
    { name: "Java", level: 90, category: "Languages" },
    { name: "Python", level: 80, category: "Languages" },
    { name: "C", level: 80, category: "Languages" },
    { name: "HTML/CSS", level: 95, category: "Languages" },
    { name: "Tailwind CSS", level: 90, category: "Languages" },
    { name: "MySQL", level: 90, category: "Languages" },


    // Frameworks & Libraries
    { name: "React.js", level: 90, category: "Frameworks & Libraries" },
    { name: "Next.js", level: 90, category: "Frameworks & Libraries" },
    { name: "Nest.js", level: 90, category: "Frameworks & Libraries" },
    { name: "Node.js", level: 70, category: "Frameworks & Libraries" },
    { name: "SpringBoot.js", level: 90, category: "Frameworks & Libraries" },
    { name: ".NET", level: 70, category: "Frameworks & Libraries" },

    // Mobile Development
    { name: "Kotlin", level: 80, category: "Mobile Development" },

    // Databases
    { name: "MySQL", level: 95, category: "Databases" },
    { name: "DynamoDB", level: 70, category: "Databases" },

    // Cloud
    { name: "AWS", level: 50, category: "Cloud" },

    // Tools
    { name: "Git", level: 90, category: "Tools" },
    { name: "Bitbucket", level: 90, category: "Tools" },
    { name: "WebStorm", level: 90, category: "Tools" },
    { name: "VS Code", level: 85, category: "Tools" },

    // Methodologies
    { name: "Agile Scrum", level: 95, category: "Methodologies" },
    { name: "Waterfall", level: 95, category: "Methodologies" },

    // Spoken Languages
    { name: "Sinhala", level: 95, category: "Spoken Languages" },
    { name: "English", level: 90, category: "Spoken Languages" },
];

const categories = ["all", "Languages", "Frameworks & Libraries", "Mobile Development", "Databases", "Cloud", "Tools", "Methodologies", "Spoken Languages"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-forefround hover:bd-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg"> {skill.name}</h3>
              </div>
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                  style={{ width: skill.level + "%" }}
                />
              </div>

              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};