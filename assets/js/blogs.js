const allDescription = document.getElementsByClassName('description');
const dates = document.getElementsByClassName('date');

for (const item of allDescription) {
    item.textContent = item.textContent.substring(0, 50) + "...";
}

for (const date of dates) {
    const d = new Date();
    date.textContent = d.toISOString().split('T')[0];
}

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 20,
        }
    },
});