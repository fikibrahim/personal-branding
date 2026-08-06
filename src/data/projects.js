import project1 from "@/assets/projects/project-1.png";
import project2 from "@/assets/projects/project-2.png";
import project3 from "@/assets/projects/project-3.png";
import project4 from "@/assets/projects/project-4.png";

export const projects = [

    // =====================================================
    // MAXISTYLE
    // =====================================================

    {
        id: 1,

        featured: true,

        type: "Professional Project",

        category: "Web Development",

        title: "Maxistyle Official Website",

        company: "PT Maxistar Intermoda Indonesia",

        role: "Frontend Developer",

        year: "2023 - 2025",

        status: "Production",

        private: true,

        image: project1,

        github: "",

        demo: "https://maxistyle.com/",

        description:
            "Developed and maintained the official company website using Laravel Blade and Tailwind CSS. Focused on responsive user interfaces, performance optimization, and feature implementation based on business requirements.",

        technologies: [

            "Laravel 10",

            "PHP",

            "Blade",

            "Tailwind CSS",

            "JavaScript",

            "MySQL"

        ],

        responsibilities: [

            "Develop responsive company website.",

            "Create reusable Blade components.",

            "Implement UI from design mockups.",

            "Collaborate with backend developers.",

            "Maintain production website."

        ],

        stats: [

            {
                value: "100%",
                label: "Responsive",
            },

            {
                value: "15+",
                label: "Pages",
            },

            {
                value: "24/7",
                label: "Production",
            },

        ]

    },

    // =====================================================
    // RAGDALION
    // =====================================================

    {
        id: 2,

        featured: true,

        type: "Professional Project",

        category: "Mobile Development",

        title: "Lorem Mobile Application",

        company: "PT Ragdalion Revolusi Industri",

        role: "Mobile Developer",

        year: "2021 - 2022",

        status: "Production",

        private: true,

        image: project2,

        github: "",

        demo: "",

        description:
            "Flutter mobile application for internal company operations with REST API integration and responsive user interface implementation.",

        technologies: [

            "Flutter",

            "Dart",

            "REST API",

            "Firebase"

        ],

        responsibilities: [

            "Develop mobile application using Flutter.",

            "Implement responsive UI.",

            "Consume REST API.",

            "Application testing.",

            "Bug fixing and maintenance."

        ],

        stats: [

            {
                value: "REST",
                label: "API",
            },

            {
                value: "Android",
                label: "Platform",
            },

            {
                value: "100%",
                label: "Responsive UI",
            },

        ]

    },

    // =====================================================
    // LOGISTICS DASHBOARD
    // =====================================================

    {
        id: 3,

        featured: false,

        type: "Personal Project",

        category: "Full Stack Development",

        title: "Logistics Delivery Dashboard",

        company: "Personal Project",

        role: "Full Stack Developer",

        year: "2026",

        status: "Completed",

        private: false,

        image: project3,

        github: "https://github.com/fikibrahim",

        demo: "https://example.com",

        description:
            "Modern logistics dashboard for delivery monitoring with interactive dashboard, driver management, vehicle management, shipment tracking, and reporting.",

        technologies: [

            "Vue 3",

            "Pinia",

            "Laravel",

            "REST API",

            "Tailwind CSS",

            "MySQL"

        ],

        responsibilities: [

            "Design system architecture.",

            "Develop REST API.",

            "Build responsive frontend.",

            "Authentication system.",

            "Deployment."

        ],

        stats: [

            {
                value: "6+",
                label: "Modules",
            },

            {
                value: "REST",
                label: "Backend API",
            },

            {
                value: "Vue 3",
                label: "Frontend",
            },

        ]

    },

    // =====================================================
    // PERSONAL BRANDING
    // =====================================================

    {
        id: 4,

        featured: true,

        type: "Personal Project",

        category: "Frontend Development",

        title: "Personal Branding Portfolio",

        company: "Personal Project",

        role: "Frontend Developer",

        year: "2026",

        status: "In Development",

        private: false,

        image: project4,

        github: "https://github.com/fikibrahim/personal-branding",

        demo: "",

        description:
            "Modern personal portfolio built using Vue 3 and Tailwind CSS with reusable components, responsive layouts, smooth animations, and clean architecture.",

        technologies: [

            "Vue 3",

            "Vite",

            "Tailwind CSS",

            "JavaScript",

            "AOS",

            "Lucide Icons"

        ],

        responsibilities: [

            "Design reusable components.",

            "Build responsive layout.",

            "Implement modern animations.",

            "Optimize performance.",

            "Continuous feature development."

        ],

        stats: [

            {
                value: "20+",
                label: "Components",
            },

            {
                value: "100%",
                label: "Responsive",
            },

            {
                value: "A+",
                label: "Performance",
            },

        ]

    }

];