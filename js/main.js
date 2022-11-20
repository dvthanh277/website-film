$(document).ready(function () {
    var mySwiper = new Swiper("#carousel-sale", {
        spaceBetween: 0,
        slidesPerView: 5,
        centeredSlides: true,
        loop: true,
        loopAdditionalSlides: 30,
        // autoHeight: true,
        breakpoints: {
            320: {
                slidesPerView: 1,
            },
            480: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 3,
            },
            1024: {
                slidesPerView: 4,
            },
            1200: {
                slidesPerView: 4,
            },
            1400: {
                slidesPerView: 5,
            },
            1600: {
                slidesPerView: 6,
            }
        },
        navigation: {
            nextEl: ".btn-next",
            prevEl: ".btn-prev"
        }
    });
    var mySwiperEvent = new Swiper("#carousel-event", {
        spaceBetween: 5,
        slidesPerView: 1,
        // centeredSlides: true,
        loop: true,
        navigation: {
            nextEl: ".btn-next-event",
            prevEl: ".btn-prev-event"
        }
    });
    var address = [
        {
            "title": "couple cinema 1",
            "address": "114 Lê Lợi, P4, Q.Gò Vấp, TP.HCM",
            "phone": "028.626.85333"
        },
        {
            "title": "couple cinema 2",
            "address": "606/63 Đường Ba Tháng Hai, P.14, Quận 10",
            "phone": "028.6268.888.1"
        },
        {
            "title": "COUPLE CINEMA 3",
            "address": "36/70/11 Đường D2, P25, Q. Bình Thạnh",
            "phone": "028.629.40668"
        },
        {
            "title": "COUPLE CINEMA 4",
            "address": "646K Nguyễn Trãi, P.11, Quận 5, TP.HCM",
            "phone": "028.6273.5000"
        },
        {
            "title": "COUPLE CINEMA 5",
            "address": "355/15 Sư Vạn Hạnh nối dài, P.12 Q10",
            "phone": "028.626.88882"
        },
        {
            "title": "COUPLE CINEMA 6",
            "address": "154 Bàu Cát 1, P.12, Q.Tân Bình",
            "phone": "028.6680.4648"
        },
        {
            "title": "COUPLE CINEMA 7",
            "address": "355/15 Sư Vạn Hạnh nối dài, P.12 Q10",
            "phone": "028.626.88882"
        },
    ]
    const div_address = document.querySelector('.address-wrapper');
    div_address.innerHTML = `${address.map((element) => {
        return `<div class="address-item">
        <p class="title">${element.title}</p>
        <p class="detail"><img src="./img/icon_address.png" alt=""><a
                href="http://maps.google.com/?q=${element.address}" target="_blank">${element.address}</a>
        </p>
        <p class="phone"><img src="./img/icon_phone.png" alt=""><a href="tel:${element.phone}">${element.phone}</a></p>
    </div>`
    }).join("")}`;

    $("#nav_btn").on('click', function () {
        $(this).toggleClass('active');
        if (!$(this).hasClass('active')) {
            $("nav").hide()
            $("body").css("overflow", "unset");
        }
        else {
            $("nav").show()
            $("body").css("overflow", "hidden");
        }
    });

});
