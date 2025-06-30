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

    // スムーススクロール
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
    for (let link of smoothScrollLinks) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            let href = this.getAttribute('href');
            let targetElement = document.querySelector(href);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    }

});
