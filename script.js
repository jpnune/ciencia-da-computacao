// Change header background on scroll
window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    if (window.scrollY > 100) {
        header.classList.add('header--dark');
    } else {
        header.classList.remove('header--dark');
    }
});

// Row scroll integration (future expansion for arrows)
const posters = document.querySelectorAll('.row__posters');
posters.forEach(row => {
    row.addEventListener('wheel', (evt) => {
        evt.preventDefault();
        row.scrollLeft += evt.deltaY;
    });
});
