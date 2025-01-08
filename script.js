const chart = document.querySelector('#chart').getContext('2d');



// Show or hide sidebar
const menuBtn = document.querySelector('#menu-btn');
const closeBtn = document.querySelector('#close-btn');
const sidebar = document.querySelector('aside');

menuBtn.addEventListener('click', () => {
    sidebar.style.display = 'block';
});
closeBtn.addEventListener('click', () => {
    sidebar.style.display = 'none';
});

// Change theme
const themeBtn = document.querySelector('.theme-btn');

themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');

    themeBtn.querySelector('span:first-child').classList.toggle('active');
    themeBtn.querySelector('span:last-child').classList.toggle('active');
});


// Get all tab links and widget containers
const tabLinks = document.querySelectorAll(".tab-link");
const widgets = document.querySelectorAll(".tradingview-widget-container");

// Function to switch tabs
tabLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
        e.preventDefault();

        // Remove active class from all tabs
        tabLinks.forEach((tab) => tab.classList.remove("active"));

        // Add active class to the clicked tab
        link.classList.add("active");

        // Get the target tab
        const tab = link.getAttribute("data-tab");

        // Show the corresponding widget and hide others
        widgets.forEach((widget) => {
            if (widget.classList.contains(tab)) {
                widget.style.display = "block";
            } else {
                widget.style.display = "none";
            }
        });
    });
});
