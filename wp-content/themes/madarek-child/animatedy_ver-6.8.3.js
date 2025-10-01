function showTab(tabIndex) {
    // Hide all tab content
    var tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(function(content) {
        content.style.display = 'none';
    });

    // Remove active class from all buttons
    var tabButtons = document.querySelectorAll('.tab-button');
    tabButtons.forEach(function(button) {
        button.classList.remove('active');
    });

    // Show the selected tab content
    var selectedTabContents = document.querySelectorAll('.tab' + tabIndex);
    selectedTabContents.forEach(function(content) {
        content.style.display = 'block';
    });

    // Add active class to the selected button
    if (tabIndex >= 0 && tabIndex < tabButtons.length) {
        tabButtons[tabIndex].classList.add('active');
    }
}

// Initialize by showing the first tab (index 0)
document.addEventListener('DOMContentLoaded', function() {
    showTab(0);
});

document.addEventListener('DOMContentLoaded', function() {
            const numberContainers = document.querySelectorAll('.number-container');
            const textBelows = document.querySelectorAll('.text-below');

            window.addEventListener('scroll', function() {
                const windowHeight = window.innerHeight;

                numberContainers.forEach((numberContainer, index) => {
                    const containerTop = numberContainer.getBoundingClientRect().top;

                    if (containerTop < windowHeight / 1.5) {
                        numberContainer.style.transform = 'translateY(-50px)';
                        textBelows[index].style.opacity = '1';
                        textBelows[index].style.bottom = '90px';
                    } else {
                        numberContainer.style.transform = 'translateY(0)';
                        textBelows[index].style.opacity = '0';
                        textBelows[index].style.bottom = '-50px';
                    }
                });
            });
        });

document.addEventListener('DOMContentLoaded', function() {
    const titleIcon = document.querySelector('.title-icon');
    const iconDown = document.querySelector('.icon.down');
    const iconUp = document.createElement('img');
    iconUp.src = 'https://madarek.promedianet.net/wp-content/uploads/2024/06/formwhite.png';
    iconUp.alt = 'Up Arrow';
    iconUp.classList.add('icon', 'up');

    titleIcon.insertBefore(iconUp, titleIcon.childNodes[1]);
});


document.addEventListener('DOMContentLoaded', function() {
    // Observer options
    const observerOptions = {
        threshold: 0.1
    };

    // Function to handle intersection
    const handleIntersection = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    };

    // Create observers for fade-left and fade-right elements
    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    // Select all elements with fade-left and fade-right classes
    const fadeLeftElements = document.querySelectorAll('.fade-left');
    const fadeRightElements = document.querySelectorAll('.fade-right');

    // Observe each element
    fadeLeftElements.forEach(element => observer.observe(element));
    fadeRightElements.forEach(element => observer.observe(element));
});


document.addEventListener('DOMContentLoaded', function() {
    const observerOptions = {
        threshold: 0.9
    };

    const fadeInElements = document.querySelectorAll('.fade-in');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    fadeInElements.forEach(element => {
        observer.observe(element);
    });
});


document.getElementById('animated-span').onclick = function() {
    this.classList.add('clicked');
    document.getElementById('hidden-paragraph').classList.add('visible');
    document.getElementById('bgcoloranimated').classList.add('bg-color-change');
    
    // Optionally, remove the span from the DOM after the transition
    setTimeout(() => {
        this.style.display = 'none';
    }, 0); // Match the transition duration
};

