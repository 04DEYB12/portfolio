const techstack_color = {
    "PHP": "bg-purple-500/20 text-purple-400",
    "MySQL": "bg-green-500/20 text-green-400",
    "HTML5": "bg-orange-500/20 text-orange-400",
    "TailwindCss": "bg-blue-500/20 text-blue-400",
    "JavaScript": "bg-yellow-500/20 text-yellow-400",
    "C# Winforms": "bg-purple-500/20 text-purple-400",
    "CSS": "bg-pink-500/20 text-pink-400"
};

const projects = [
    {
        title: "Patient Information & Medical Inventory System",
        image: "assets/projects/piamis.png",
        alt: "Patient Information & Medical Inventory System",
        description: "Full-stack web system for the GCST Clinic managing patient records, consultations, and medical inventory. Presented at the institutional Capstone Symposium.",
        techstack: ["PHP", "MySQL", "HTML5", "TailwindCss", "JavaScript"],
        role: "CAPSTONE - LEAD DEVELOPER",
        link: "https://piamis-symposium.vercel.app/"
    },
    {
        title: "Servpro Database Management System",
        image: "assets/projects/servpro.jpg",
        alt: "Servpro Database Management System",
        description: "Added new features and performed system maintenance during on-the-job training, gaining production-environment experience.",
        techstack: ["PHP", "MySQL", "HTML5", "TailwindCss", "JavaScript"],
        role: "CONTRIBUTOR - OJT"
    },
    {
        title: "Blue Iris Cup — POS & Mini-Kiosk",
        image: "assets/projects/bicpos.png",
        alt: "Blue Iris Cup — POS & Mini-Kiosk",
        description: "POS and self-service kiosk system for streamlining orders, payments, and inventory management.",
        techstack: ["PHP", "MySQL", "HTML5", "TailwindCss", "JavaScript"],
        role: "FULL-STACK DEVELOPER"
    },
    {
        title: "Faculty Performance Evaluation System",
        image: "assets/projects/fpes.png",
        alt: "Faculty Performance Evaluation System",
        description: "Web platform for evaluating instructors at Granby Colleges with dynamic questionnaires, real-time ranking, email notifications, and dedicated dashboards.",
        techstack: ["PHP", "MySQL", "HTML5", "CSS", "JavaScript"],
        role: "FULL-STACK DEVELOPER"
    },
    {
        title: "Granby Point of Sale (POS) System",
        image: "assets/projects/granbypos.png",
        alt: "Granby Point of Sale (POS) System",
        description: "Desktop POS used by the college cashier for processing student tuition and fees, with transaction recording and receipt generation.",
        techstack: ["C# Winforms", "MySQL"],
        role: "CONTRIBUTOR"
    }
];

const projectsContainer = document.getElementById("projects-container");

projects.forEach(project => {
    const techStackHTML = project.techstack
        .map(tech => `
            <span class="${techstack_color[tech] || 'bg-gray-500/20 text-gray-400'} px-3 py-1 rounded-full text-sm">
                ${tech}
            </span>
        `)
        .join("");

    projectsContainer.innerHTML += `
        <div class="bg-gray-800 rounded-xl overflow-hidden hover:scale-105 transition-all duration-300">
            <img src="${project.image}" alt="${project.alt}" class="w-full h-48 object-cover">

            <div class="p-6">
                <span class="inline-block mb-3 text-xs font-semibold tracking-wider text-cyan-400 uppercase">
                    ${project.role}
                </span>

                <h3 class="text-xl font-semibold mb-2">
                    ${project.title}
                </h3>

                <p class="text-gray-400 mb-4">
                    ${project.description}
                </p>

                <div class="flex flex-wrap gap-2 mb-4">
                    ${techStackHTML}
                </div>

                ${
                    project.link
                        ? `<a href="${project.link}" target="_blank" class="text-blue-400 hover:text-blue-300">
                                View Project Presentation →
                           </a>`
                        : ""
                }
            </div>
        </div>
    `;
});