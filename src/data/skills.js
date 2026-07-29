export const favoriteTechnologies = [
    "Laravel",
    "Vue.js",
    "Flutter",
    "PHP",
    "JavaScript",
    "Tailwind CSS",
    "MySQL",
    "REST API",
    "Git",
    "GitHub",
    "Docker",
];

export const skillCategories = [
    {
        id: 1,
        title: "Frontend Development",
        icon: "Monitor",

        description:
            "Membangun antarmuka web modern yang responsif dan interaktif.",

        skills: [
            { name: "Vue.js", level: 95 },
            { name: "JavaScript", level: 90 },
            { name: "Tailwind CSS", level: 92 },
            { name: "HTML5", level: 95 },
            { name: "CSS3", level: 90 },
            { name: "Pinia", level: 88 },
            { name: "Vite", level: 90 }
        ]
    },

    {
        id: 2,
        title: "Backend Development",
        icon: "Server",

        description:
            "Mengembangkan REST API dan aplikasi backend menggunakan Laravel.",

        skills: [
            { name: "Laravel", level: 95 },
            { name: "PHP", level: 90 },
            { name: "REST API", level: 90 },
            { name: "MySQL", level: 92 },
            { name: "SQL Server", level: 85 }
        ]
    },

    {
        id: 3,
        title: "Mobile Development",
        icon: "Smartphone",

        description:
            "Membangun aplikasi mobile menggunakan Flutter dan Dart.",

        skills: [
            { name: "Flutter", level: 90 },
            { name: "Dart", level: 88 },
            { name: "Kotlin", level: 75 }
        ]
    },

    {
        id: 4,
        title: "Tools & Others",
        icon: "Wrench",

        description:
            "Tools yang digunakan dalam proses pengembangan perangkat lunak.",

        skills: [
            { name: "Git", level: 90 },
            { name: "GitHub", level: 90 },
            { name: "Docker", level: 75 },
            { name: "Figma", level: 80 },
            { name: "Postman", level: 90 }
        ]
    }
];