document.addEventListener('DOMContentLoaded', () => {
    const slideElements = document.querySelectorAll('.slide-in');
    const profileImage = document.querySelector('.profile-image');
    const introGif = document.getElementById('intro-gif'); // Your GIF element
    const aboutContent = document.getElementById('about-content'); // Your About page content

    // Check if we are on the about page or homepage
    const isAboutPage = !!aboutContent; // Checks if 'about-content' exists
    const isHomePage = document.body.classList.contains('homepage'); // Add a unique class to the homepage body tag

    // Profile image hover effect (on about page)
    if (profileImage) {
        profileImage.addEventListener('mouseover', () => {
            profileImage.classList.add('hover');
        });

        profileImage.addEventListener('mouseout', () => {
            profileImage.classList.remove('hover');
        });
    }

    // Loader handling (for all pages)
    const loader = document.querySelector('.loader');
    if (loader) {
        setTimeout(() => {
            loader.style.display = 'none'; // Hide loader after 1.8 seconds
            slideElements.forEach((el, index) => {
                setTimeout(() => {
                    el.classList.add('visible'); // Show elements with a delay
                }, index * 300); // Delay for each element
            });
        }, 1800); // 1.8 seconds for the loader
    }

    // Specific behavior for the about page
    if (isAboutPage) {
        // Initially hide the about content
        aboutContent.style.display = 'none';

        // Show the GIF if it exists
        if (introGif) {
            introGif.style.display = 'block';

            // Hide the GIF and show content after 3 seconds
            setTimeout(() => {
                introGif.style.display = 'none'; // Hide GIF after 3 seconds
                showAboutContent(); // Show content
            }, 3000); // 3 seconds
        }

        // Function to show the about content
        function showAboutContent() {
            aboutContent.style.display = 'block'; // Show the content
            aboutContent.classList.add('visible'); // Optional: Add class for fade-in effect

            // Trigger slide-in effect for elements
            slideElements.forEach((el, index) => {
                setTimeout(() => {
                    el.classList.add('visible'); // Show elements with a delay
                }, index * 300); // Delay for each element
            });
        }
    }

    // Specific behavior for the homepage (if any)
    if (isHomePage) {
        // Ensure homepage content shows after the loader
        // You can add homepage-specific logic here if needed
    }

    // Scroll Animation for other pages
    const scrollElements = document.querySelectorAll('.container .card');
    const elementInView = (el) => {
        const elementTop = el.getBoundingClientRect().top;
        return elementTop <= window.innerHeight && elementTop > 0;
    };

    const displayScrollElement = (element) => {
        element.classList.add('show');
    };

    const handleScrollAnimation = () => {
        scrollElements.forEach((el) => {
            if (elementInView(el)) {
                displayScrollElement(el);
            }
        });
    };

    window.addEventListener('scroll', handleScrollAnimation);
});
