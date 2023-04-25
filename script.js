$(document).ready(function () {
$(window).scroll(function () {
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }
        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });
    $('.scroll-up-btn').click(function () {
        $('html').animate({ scrollTop: 0 });
    });

    var typed = new Typed(".typing", {
        strings: ["Certificado VTEX Implementation", "Digital commerce Expert", "Analista de sistemas", "Consultor de Integração", "Especialista Vtex"],
        typeSpeed: 100,
        backSpeed: 70,
        loop: true
    });
    var typed = new Typed(".typing-2", {
        strings: ["Certificado VTEX Implementation", "Digital commerce Expert", "Analista de sistemas", "Consultor de Integração", "Especialista Vtex"],
        typeSpeed: 100,
        backSpeed: 70,
        loop: true
    });

    $('.menu-btn').click(function (e) {
        e.stopPropagation(); // impede que o clique seja propagado para outros elementos
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    $(document).on("click", function (e) {
        if ($(e.target).is(".menu-btn, .menu-btn i")) {
            return; // não faça nada se o clique foi em um elemento do menu
        }
        $('.navbar .menu').removeClass("active");
        $('.menu-btn i').removeClass("active");
    });

    
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPauser: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: false
            }
        }
    });

    const button = document.querySelector('button')
    const popup = document.querySelector('.popup-wrapper')
    const closeButton = document.querySelector('.popup-close')

    button.addEventListener('click', () => {
     popup.style.display = 'block'
    })

    closeButton.addEventListener('click', () => {
     popup.style.display = 'none'
    })

    popup.addEventListener('click', event => {
     popup.style.display = 'none'
    })
});
