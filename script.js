document.addEventListener('DOMContentLoaded', function() {

    // スクロールフェードイン
    const fadeElems = document.querySelectorAll('.scroll-fade');

    const fadeInObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    fadeElems.forEach(elem => {
        fadeInObserver.observe(elem);
    });

});