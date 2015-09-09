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

$(function(){
  $('#video').css({ width: $(window).innerWidth() + 'px', height: $(window).innerHeight() + 'px' });

  // If you want to keep full screen on window resize
  $(window).resize(function(){
    $('#video').css({ width: $(window).innerWidth() + 'px', height: $(window).innerHeight() + 'px' });
  });
});
