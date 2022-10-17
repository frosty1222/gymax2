$(document).ready(function(){
    $('.fa-search').on('click', function(){
        $('.model').toggle('show');
    })
    $('.fa-times').on('click', function(){
        $('.model').toggle('hide');
    })
    $('#close').on('click', function(){
        $('.center-list').css('display','none');
    })
    $('.fa-bars').on('click', function(){
        $('.center-list').show();
    })
    $('.sub-model').on('click', function(){
        $('.center-list').toggle('hide');
    })
})
function onclickFunction(){
    $('.nav-main-list li a').on('click', function(){
        $('.nav-main-list li a').removeClass('active');
        $(this).addClass('active');
    })
}
function open1(){
   $('#list-item2').hide();
   $('#list-item3').hide();
   $('#list-item1').show();
}
function open2(){
    $('#list-item2').show().css('display','grid');
    $('#list-item3').hide();
    $('#list-item1').hide();
}
function open3(){
    $('#list-item2').hide();
    $('#list-item3').show().css('display','grid');
    $('#list-item1').hide();
}