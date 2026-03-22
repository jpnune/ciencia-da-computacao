// Change header background on scroll
window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    if (window.scrollY > 100) {
        header.classList.add('header--dark');
    } else {
        header.classList.remove('header--dark');
    }
});
