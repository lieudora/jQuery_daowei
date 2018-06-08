$(function () {
  var $header = $('.header_content')
  $(window).scroll(function () {
    if($(this).scrollTop()>0){
      $header.addClass('on')
    }else {
      $header.remove('on')
    }
  })
})