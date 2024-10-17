document.addEventListener("DOMContentLoaded", () => {
    const projects = document.querySelectorAll(".project");
    let currentIndex = 0;

    // Show the first project
    projects[currentIndex].classList.add("active");

    // Function to update the displayed project
    function updateProject() {
        projects.forEach((project, index) => {
            project.classList.remove("active");
            if (index === currentIndex) {
                project.classList.add("active");
            }
        });
    }

    // Next button functionality
    document.getElementById("next").addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % projects.length; // Loop back to the first project
        updateProject();
    });

    // Prev button functionality
    document.getElementById("prev").addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + projects.length) % projects.length; // Loop back to the last project
        updateProject();
    });
});

