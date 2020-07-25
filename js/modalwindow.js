//modalwindow

$(function() {
$('.js-modal__link').on('click', function() {
$('.js-modal').fadeIn();
return false;
});

$('.js-modal-close').on('click', function() {
$('.js-modal').fadeOut();
return false;
});
});