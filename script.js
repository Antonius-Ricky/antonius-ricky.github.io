let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');
let sr; 

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
};

function toggleSection(sectionId) {
    const sections = document.querySelectorAll('.section');

    sections.forEach((s) => {
        s.style.display = 'none';
    });

    const selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        selectedSection.style.display = 'block';

    
        if (sr) {
            sr.destroy();
        }

      
        sr = ScrollReveal({
            distance: '65px',
            duration: 2600,
            delay: 200,
            reset: true,
        });

        
        const revealItems = selectedSection.querySelectorAll('.reveal-item');
        sr.reveal(revealItems, { delay: 200, origin: 'top' });
    }
}

sr = ScrollReveal({
    distance: '65px',
    duration: 2600,
    delay: 200,
    reset: true,
});


sr.reveal('.hero-text', { delay: 200, origin: 'top' });
sr.reveal('.hero-img', { delay: 450, origin: 'top' });
sr.reveal('.icons', { delay: 450, origin: 'left' });

