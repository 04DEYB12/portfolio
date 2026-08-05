const awards = [
    {
        title: "Computer Programming 1",
        image: "assets/awards/comprog1.jpg",
        alt: "Computer Programming 1",
        year: "2023",
        description: "Recognized for excellence in C++ console-based programming, demonstrating strong understanding of programming fundamentals, logic building, and problem-solving techniques."
    },
    {
        title: "Information Management",
        image: "assets/awards/im.jpg",
        alt: "Information Management",
        year: "2023",
        description: "Awarded for outstanding performance in Information Management, focusing on UML diagrams, Data Flow Diagrams (DFD), systems analysis, and information systems concepts."
    },
    {
        title: "Operating System",
        image: "assets/awards/os.jpg",
        alt: "Operating System",
        year: "2023",
        description: "Recognized for proficiency in operating system concepts, including CPU scheduling algorithms such as FIFO, SJF, SRTF, Round Robin, Priority, and Non-Priority scheduling."
    },
    {
        title: "Data Structure and Algorithm",
        image: "assets/awards/dsa.jpg",
        alt: "Data Structure and Algorithm",
        year: "2024",
        description: "Awarded for demonstrating strong analytical thinking and proficiency in designing efficient algorithms and data structures."
    },
    {
        title: "Database Management System 1",
        image: "assets/awards/dbms.jpg",
        alt: "Database Management System 1",
        year: "2024",
        description: "Recognized for excellence in database design, SQL development, normalization, and implementation of data management solutions."
    },
    {
        title: "Discrete Structure",
        image: "assets/awards/discrete.jpg",
        alt: "Discrete Structure",
        year: "2024",
        description: "Awarded for demonstrating strong analytical thinking and proficiency in discrete mathematics concepts."
    },
    {
        title: "Outstanding Software Development Award",
        image: "assets/awards/software.jpg",
        alt: "Outstanding Software Development Award",
        year: "2026",
        description: "Recognized for excellence in software design, development, and implementation during the BSIT program."
    },
    {
        title: "Outstanding System Development Award",
        image: "assets/awards/system.jpg",
        alt: "Outstanding System Development Award",
        year: "2026",
        description: "Awarded for exceptional performance in system analysis, design, and development projects."
    },
    {
        title: "Capstone Project Symposium Presenter",
        image: "assets/awards/capstone.jpg",
        alt: "Capstone Project Symposium Presenter",
        year: "2026",
        description: "Presented the Patient Information and Medical Inventory System during the institutional project symposium and received recognition for project presentation and contribution."
    }
];

// Duplicate items for smooth infinite scrolling
const awardsItems = [...awards];

const container = document.getElementById("awards-grid");

awardsItems.forEach(award => {
    const card = document.createElement("div");

    card.className = "bg-gray-900 rounded-2xl p-4";

    card.innerHTML = `
    <div class="grid grid-cols-[auto_1fr] md:grid-cols-[auto_1fr_auto] gap-4 items-center py-4 border-b border-gray-700 hover:border-blue-500 transition">

        <!-- Image -->
        <img loading='lazy' src="${award.image}" alt="${award.alt}"
            class="w-14 h-14 object-cover rounded-lg">

        <!-- Title & Year -->
        <div>
            <h3 class="text-md font-semibold leading-tight">
                ${award.title}
            </h3>
            <p class="text-sm text-blue-400 font-medium">
                ${award.year}
            </p>
        </div>

        <!-- Button -->
        <button
            onclick="openAward('${award.image}', '${award.description}')"
            class="col-span-2 md:col-span-1 md:justify-self-end
                   px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700
                   text-white text-sm transition">
            View Details
        </button>

    </div>
`;

    container.appendChild(card);
});