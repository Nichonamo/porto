// Change background dynamically when clicking a link
const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {
    link.addEventListener("click", function () {
        const sectionId = this.getAttribute("href").substring(1);
        
        switch (sectionId) {
            case 'about':
                document.body.style.backgroundImage = 'url("images/about-bg.jpg")';
                break;
            case 'skills':
                document.body.style.backgroundImage = 'url("images/skills-bg.jpg")';
                break;
            case 'projects':
                document.body.style.backgroundImage = 'url("images/projects-bg.jpg")';
                break;
            case 'hobbies':
                document.body.style.backgroundImage = 'url("images/hobbies-bg.jpg")';
                break;
            case 'contact':
                document.body.style.backgroundImage = 'url("images/contact-bg.jpg")';
                break;
            default:
                document.body.style.backgroundImage = 'none';
        }
    });
});
