// Effet Parallax
document.querySelectorAll('.parallax').forEach(function(element) {
    const speed = element.getAttribute('data-speed');
    window.addEventListener('scroll', function() {
        const offset = window.pageYOffset * speed;
        element.style.backgroundPositionY = offset + 'px';
    });
});
