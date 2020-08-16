$('.slide').slick({
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 3000,
});


/* Footer search active box shadow */
let footer_search_form = document.querySelector('.footer-form-email');
    footer_search_form.addEventListener('click', function () {
    footer_search_form.style.boxShadow = 'inset 0 0 5px #ccc';
});

/* Search input and button settings */
function searchLink() {
    let $search_wrapper = document.querySelector('.search__wrap');
    if ($search_wrapper.classList.contains('hide')) {
        $search_wrapper.classList.remove('hide');
        $search_wrapper.classList.add('show');
    } else {
        $search_wrapper.classList.remove('show');
        $search_wrapper.classList.add('hide');
    }
}

let $search_input = document.querySelector('.search__label');
$search_input.addEventListener('keydown', function (event) {
    if (event.which === 13 && $search_input.value.trim()) {
        alert('Google starts to search ' + $search_input.value);
        $search_input.value = '';
    }
});

function input_btn() {
    if ($search_input.value.trim()) {
        alert('Google starts to search ' + $search_input.value);
        $search_input.value = '';
    }
}


/* Accordion settings */

let $accordion = document.querySelectorAll('.team__header');
let $textBlock = document.querySelectorAll('.team__text');
let $itemHeader__f = document.querySelectorAll('.item-header__f');


for (let i = 0; i < $accordion.length; i++) {
    $accordion[i].addEventListener('click', function () {

        if (i === 0) {
            $textBlock[i].classList.add('show');
            $textBlock[1].classList.add('hide');
            $textBlock[2].classList.add('hide');
            $textBlock[i].classList.remove('hide');
            $textBlock[1].classList.remove('show');
            $textBlock[2].classList.remove('show');
            $itemHeader__f[i].classList.add('active');
            $itemHeader__f[1].classList.remove('active');
            $itemHeader__f[2].classList.remove('active');
        } else if (i === 1) {
            $textBlock[1].classList.add('show');
            $textBlock[0].classList.add('hide');
            $textBlock[2].classList.add('hide');
            $textBlock[1].classList.remove('hide');
            $textBlock[0].classList.remove('show');
            $textBlock[2].classList.remove('show');
            $itemHeader__f[1].classList.add('active');
            $itemHeader__f[0].classList.remove('active');
            $itemHeader__f[2].classList.remove('active');

        } else {
            $textBlock[2].classList.add('show');
            $textBlock[0].classList.add('hide');
            $textBlock[1].classList.add('hide');
            $textBlock[2].classList.remove('hide');
            $textBlock[0].classList.remove('show');
            $textBlock[1].classList.remove('show');
            $itemHeader__f[2].classList.add('active');
            $itemHeader__f[0].classList.remove('active');
            $itemHeader__f[1].classList.remove('active');
        }
    })
}

/*  */