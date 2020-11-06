
$('.toggleCategories').children('p').on('click', function (e) {
    var cat = $('.mainCategoriesList');
    cat.toggleClass('active');
    if (cat.hasClass('active')) {
        $(this).text('закрыт категории')
    } else {
        $(this).text('Показать категории')
    }
});

$('#filtr').on('click', function (e) {
    $('.filtersWrapper').toggleClass('active');
});

$('.nav_dropdown li').on('click', function (e) {
    console.log($(this).parent().prev().find('input').val(e.target.textContent.trim()))
});

$('#dr').on('click', function (e) {
    $('.dropdownMenu').toggleClass('active');
});

$('.annType').children('div').on('click', function (e) {
    if (e.target.nodeName === 'P') {
        $(e.target).parent().siblings().removeClass('selected');
        $(e.target).parent().addClass('selected');
        return;
    }
    $(e.target).siblings().removeClass('selected');
    $(e.target).addClass('selected');
});

$('#title').on('keyup', function (e) {
    if (e.target.value.length >= 42) {
        $(this).next()[0].textContent = "максимум 42 символ";
    } else {
        $(this).next()[0].textContent = "";
    }
});

$('.filter').children('p').on('click', function () {
    if (this.textContent === 'Аренда') {
        $('.selectDate1').show();
        $('.selectDate2').show();
    } else {
        $('.selectDate1').hide();
        $('.selectDate2').hide();
    }
    $(this).siblings().removeClass('active');
    $(this).addClass('active');
});

$(".chatUserItem").on("click", function () {
    $(this)
        .addClass("active")
        .siblings()
        .removeClass("active")
        .closest(".chatContainer")
        .find(".chatMessages")
        .removeClass("active")
        .eq($(this).index())
        .addClass("active");
});

var galleryThumbs = new Swiper('.gallery-thumbs', {
    spaceBetween: 10,
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    width: 100
});
var galleryTop = new Swiper('.gallery-top', {
    spaceBetween: 10,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    thumbs: {
        swiper: galleryThumbs
    }
});


function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#profileImage').attr('src', e.target.result);
        }

        reader.readAsDataURL(input.files[0]); // convert to base64 string
    }
}

$("#imgInp").change(function () {
    readURL(this);
});

// $(".customInputWrapper.dropDown").on("click", function () {
//     $(this)
//         .closest(".filtersContainer")
//         .find(".dropdownFilters > .filterDropdown")
//         .eq($(this).index())
//         .toggleClass("active")
//         .siblings()
//         .removeClass("active");
// });

// $(".filterDropdown p").on("click", function () {
//
//     $(this)
//         .addClass('active')
//         .siblings()
//         .removeClass('active')
//         .parent()
//         .parent()
//         .parent()
//         .find(".customInputWrapper.dropDown")
//         .eq($(this).parent().index())
//         .find('input')
//         .val(this.textContent);
//
//     $(this).parent().removeClass('active')
// });