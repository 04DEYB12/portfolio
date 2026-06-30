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

    card.className = "bg-gray-900 rounded-2xl p-6";

    card.innerHTML = `
        <img src="${award.image}" alt="${award.alt}"
            class="w-full h-48 object-cover cursor-pointer hover:scale-105 transition"
            onclick="openImage('${award.image}')"
        >
        <p class="text-blue-400 font-bold text-sm mb-2">${award.year}</p>
        <h3 class="text-xl font-bold mb-2">${award.title}</h3>
        <p class="text-gray-400">${award.description}</p>
    `;

    container.appendChild(card);
});