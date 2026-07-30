const certificates = [
    {
        title: "JavaScript Essentials 1 (JSE1) - Cisco Networking Academy",
        image: "assets/certificates/jse1.jpg",
        year: "July 30, 2026"
    },
    {
        title: "Introduction to Java - Sololearn",
        image: "assets/certificates/java.jpg",
        year: "February 06, 2024"
    },
    {
        title: "Introduction to C# - Sololearn",
        image: "assets/certificates/csharp.jpg",
        year: "September 23, 2023"
    },
    {
        title: "Introduction to HTML - Sololearn",
        image: "assets/certificates/html.jpg",
        year: "July 28, 2023"
    },
    {
        title: "Introduction to C++ - Sololearn",
        image: "assets/certificates/cpp.jpg",
        year: "July 28, 2023"
    }
];

// Duplicate items for smooth infinite scrolling
const certificatesItems = [...certificates];

const cert_container = document.getElementById("certificates-grid");

certificatesItems.forEach(certificate => {
    const card = document.createElement("div");

    card.className = "bg-gray-900/50 rounded-2xl p-4";

    card.innerHTML = `
    <div class="grid grid-cols-[auto_1fr] md:grid-cols-[auto_1fr_auto] gap-4 items-center py-4 border-b border-gray-700 hover:border-blue-500 transition">

        <!-- Image -->
        <img src="${certificate.image}" alt="${certificate.title}"
            class="w-14 h-14 object-cover rounded-lg">

        <!-- Title & Year -->
        <div>
            <h3 class="text-md font-semibold leading-tight">
                ${certificate.title}
            </h3>
            <p class="text-sm text-blue-400 font-medium">
                ${certificate.year}
            </p>
        </div>

        <!-- Button -->
        <button
            onclick="openImage('${certificate.image}')"
            class="col-span-2 md:col-span-1 md:justify-self-end
                   px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700
                   text-white text-sm transition">
            View Details
        </button>

    </div>
`;

    cert_container.appendChild(card);
});