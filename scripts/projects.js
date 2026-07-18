const techstack_color = {
    "PHP": "bg-purple-500/20 text-purple-400",
    "MySQL": "bg-green-500/20 text-green-400",
    "HTML5": "bg-orange-500/20 text-orange-400",
    "TailwindCss": "bg-blue-500/20 text-blue-400",
    "JavaScript": "bg-yellow-500/20 text-yellow-400",
    "C# Winforms": "bg-purple-500/20 text-purple-400",
    "CSS": "bg-pink-500/20 text-pink-400",
    "MVC": "bg-indigo-500/20 text-indigo-400",
    "SCRUM": "bg-teal-500/20 text-teal-400"
};

const projects = [
    {
        title: "Patient Information & Medical Inventory System",
        folder: "piamis",
        imageCount: 18,
        alt: "Patient Information & Medical Inventory System",
        description: "Full-stack web system for the GCST Clinic managing patient records, consultations, and medical inventory. Presented at the institutional Capstone Symposium.",
        techstack: ["PHP", "MySQL", "HTML5", "TailwindCss", "JavaScript", "SCRUM"],
        role: "CAPSTONE - LEAD DEVELOPER",
        link: "https://piamis-symposium.vercel.app/"
    },
    {
        title: "Servpro Database Management System",
        folder: "servpro",
        imageCount: 4,
        alt: "Servpro Database Management System",
        description: "Added new features and performed system maintenance during on-the-job training, gaining production-environment experience.",
        techstack: ["PHP", "MySQL", "HTML5", "TailwindCss", "JavaScript"],
        role: "CONTRIBUTOR - OJT"
    },
    {
        title: "Blue Iris Cup — POS & Mini-Kiosk",
        folder: "bicpos",
        imageCount: 29,
        alt: "Blue Iris Cup — POS & Mini-Kiosk",
        description: "POS and self-service kiosk system for streamlining orders, payments, and inventory management.",
        techstack: ["PHP", "MySQL", "HTML5", "TailwindCss", "JavaScript", "MVC", "SCRUM"],
        role: "FULL-STACK DEVELOPER"
    },
    {
        title: "Faculty Performance Evaluation System",
        folder: "fpes",
        imageCount: 1,
        alt: "Faculty Performance Evaluation System",
        description: "Web platform for evaluating instructors at Granby Colleges with dynamic questionnaires, real-time ranking, email notifications, and dedicated dashboards.",
        techstack: ["PHP", "MySQL", "HTML5", "CSS", "JavaScript"],
        role: "FULL-STACK DEVELOPER"
    },
    {
        title: "Granby Point of Sale (POS) System",
        folder: "granbypos",
        imageCount: 1,
        alt: "Granby Point of Sale (POS) System",
        description: "Desktop POS used by the college cashier for processing student tuition and fees, with transaction recording and receipt generation.",
        techstack: ["C# Winforms", "MySQL"],
        role: "CONTRIBUTOR"
    }
];

const projectsContainer = document.getElementById("projects-container");

projects.forEach((project, index) => {
    const techStackHTML = project.techstack
        .map(tech => `
            <span class="${techstack_color[tech] || 'bg-gray-500/20 text-gray-400'} px-3 py-1 rounded-full text-sm">
                ${tech}
            </span>
        `)
        .join("");
        
    const images = Array.from(
        { length: project.imageCount },
        (_, i) => `assets/projects/${project.folder}/${i + 1}.png`
    );
        
    const carouselHTML = `
        <div class="relative overflow-hidden">
            <div id="carousel-${index}" class="flex transition-transform duration-500">
                ${images.map(image => `
                    <img
                        src="${image}"
                        alt="${project.alt}"
                        onclick="openImage('${image}')"
                        class="w-full h-56 object-cover flex-shrink-0 cursor-pointer"
                    >
                `).join("")}
            </div>

            ${
                project.imageCount > 1
                    ? `
                <button
                    onclick="moveSlide(${index}, -1)"
                    class="absolute left-3 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2">
                    <i class='bx bx-chevron-left'></i>
                </button>

                <button
                    onclick="moveSlide(${index}, 1)"
                    class="absolute right-3 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2">
                    <i class='bx bx-chevron-right'></i>
                </button>
            `
                    : ""
            }
        </div>
    `;

    projectsContainer.innerHTML += `
        <div class="bg-gray-800 rounded-xl overflow-hidden hover:scale-105 transition-all duration-300">

            ${carouselHTML}

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

const currentSlides = {};

function moveSlide(index, direction) {
    const carousel = document.getElementById(`carousel-${index}`);
    const total = carousel.children.length;

    currentSlides[index] ??= 0;

    currentSlides[index] =
        (currentSlides[index] + direction + total) % total;

    carousel.style.transform = `translateX(-${currentSlides[index] * 100}%)`;
}