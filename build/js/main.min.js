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

$('.annType').children('label').on('click', function (e) {
    if (e.target.nodeName === 'P') {
        $(this).siblings().removeClass('selected');
        $(this).addClass('selected');
        return;
    }
    $(this).siblings().removeClass('selected');
    $(this).addClass('selected');
});

$('#title').on('keyup', function (e) {
    if (e.target.value.length >= 42) {
        $(this).next()[0].textContent = "максимум 42 символ";
    } else {
        $(this).next()[0].textContent = "";
    }
});

$('.filter').children('label').on('click', function () {
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

$('.pop_up_sort_inner label').on('click', function () {
    $(this).siblings().removeClass('active');
    $(this).addClass('active');
})

$(".customInput > select").select2({
    width: '100%',
});


$(function () {
    $("#datepicker").datepicker();
    $("#datepicker2").datepicker();

    $("#categoriesSelect").menu();
    $("#regionsSelect").menu();

});

$('#imageUpload').on('change', function (e) {
    const files = e.target.files
    $(this).innerHTML = '';

    for (let i = 0; i < files.length; i++) {
        var image = document.createElement('img');
        var appendet = $('#imgPreview').append(image);
    }

    for (let i = 0; i < files.length; i++) {
        var reader = new FileReader();
        var images = document.querySelectorAll('#imgPreview > img')
        reader.onload = function (e) {
            $(images[i]).attr('src', e.target.result);
            $(images[i]).addClass('previewImg');
        }

        reader.readAsDataURL(e.target.files[i]); // convert to base64 string
    }
})


$('#documentsUpload').on('change', function (e) {
    const files = e.target.files
    $(this).innerHTML = '';

    for (let i = 0; i < files.length; i++) {
        var file = files[i];
        var extention = file.name.split('.');
        var extName = extention[extention.length - 1];
        var image;

        if (extName === 'pdf') {
            image = 'powerpoint';
        } else if (extName === 'xlsx' || extName === 'xls') {
            image = 'excel';
        }  else {
            image = 'word';
        }

        var elem = `
                <div class="documentItem">
                    <img src="./img/${image}.png" alt="">
                    <p>${file.name}</p>
                </div> 
        `
        $('#documentPreview').append(elem);
    }


})