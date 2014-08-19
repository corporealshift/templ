$(function() {
    $('#contact-form-container').on('click', '.show-form', function(e) {
        e.preventDefault();
        $('#contact-form-container').toggleClass('collapsed');
    })
});
