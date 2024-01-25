

// console.clear();
// function updateSlideCount(currentIndex, totalSlides) {
//     console.log('Updating slide count:', currentIndex, totalSlides);
//     document.getElementById('slide-count').textContent = currentIndex + ' / ' + totalSlides;
// }

// var swiper_parent = new Swiper('.swiper-parent', {
//     spaceBetween: 0,
//     speed: 500,
//     // effect: 'fade',
//     loop: true,
//     nextButton: '.swiper-button-next',
//     prevButton: '.swiper-button-prev',
//     watchActiveIndex: true,
//     on: {
//         init: function () {
//             updateSlideCount(swiper_parent.realIndex + 1, swiper_parent.slides.length);
//         },
//         slideChange: function () {
//             updateSlideCount(swiper_parent.realIndex + 1, swiper_parent.slides.length);
//         },
//     }
// });

// var swiper_child = new Swiper('.swiper-child', {
//     loop: true,
//     slidesPerView: 1,
//     allowTouchMove: false,
//     // effect: 'fade'
// });

// swiper_parent.params.control = swiper_child;
// swiper_child.params.control = swiper_parent;


// function updateSlideCount(currentIndex, totalSlides) {
//     console.log('Updating slide count:', currentIndex, totalSlides);
//     document.getElementById('slide-count').textContent = currentIndex + ' / ' + totalSlides;
// }




// // ======================
// console.clear();

// /**
//  * Update of secondary numeric pagination
//  * @this {object}  - swiper instance
//  */
// function updSwiperNumericPagination() {
//   this.el.querySelector(".swiper-counter").innerHTML =
//     '<span class="count">' +
//     (this.realIndex + 1) +
//     '</span>/<span class="total">' +
//     this.el.slidesQuantity +
//     "</span>";
// }

// document.addEventListener("DOMContentLoaded", function () {
//   document.querySelectorAll(".swiper-container").forEach(function (node) {
//     // Getting slides quantity before slider clones them
//     node.slidesQuantity = node.querySelectorAll(".swiper-slide").length;

//     // Swiper initialization
//     new Swiper(node, {
//       speed: 1000,
//       loop: true,
//       autoplay: { delay: 1000 },
//       pagination: { el: node.querySelector(".swiper-pagination") },
//       on: {
//         // Secondary pagination is update after initialization and after slide change
//         init: updSwiperNumericPagination,
//         slideChange: updSwiperNumericPagination
//       }
//     });
//   });
// });

















console.clear();
var swiper_parent = new Swiper('.swiper-parent', {
    spaceBetween: 0,
    speed: 500,
    loop: true,
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    watchActiveIndex: true,
    on: {
        init: function () {
            updateSlideCount(swiper_parent.realIndex + 1, swiper_parent.slides.length);
        },
        slideChange: function () {
            updateSlideCount(swiper_parent.realIndex + 1, swiper_parent.slides.length);
        },
    }
});

// var swiper_child = new Swiper('.swiper-child', {
//     loop: true,
//     slidesPerView: 1,
//     allowTouchMove: false,
// });

// swiper_parent.params.control = swiper_child;
// swiper_child.params.control = swiper_parent;

function updateSlideCount(currentIndex, totalSlides) {
    console.log('Updating slide count:', currentIndex, totalSlides);
    document.getElementById('slide-count').textContent = currentIndex + ' / ' + totalSlides;
}















