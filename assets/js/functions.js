$('.blink').bind('fade-cycle', function() {
    $(this).fadeOut('slow', function() {
        $(this).fadeIn('slow', function() {
            $(this).trigger('fade-cycle');
        });
    });
});

$('.blink').each(function(index, elem) {
    setTimeout(function() {
        $(elem).trigger('fade-cycle');
    }, index * 250);
});
