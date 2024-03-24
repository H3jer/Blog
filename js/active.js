// Get all sections
const sections = document.querySelectorAll('section');

// Function to check if an element is in the viewport
const isElementInViewport = (el) => {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    );
};

// Function to update the active section
const updateActiveSection = () => {
    sections.forEach(section => {
        if (isElementInViewport(section)) {
            section.classList.add('active');
        } else {
            section.classList.remove('active');
        }
    });
};

// Attach the updateActiveSection function to the scroll event
document.addEventListener('scroll', updateActiveSection);

// Initial call to set the active section on page load
updateActiveSection();