//clear the ads
function clearAds()
{
    //keep track of the number of ads
    var count = 0;

    //remove ads in the feed
    $('a:contains("SpSonSsoSredS"):visible').each(function(){ 
        var a = $(this),
            text = a.text(),
            wrap = a.parents('.userContentWrapper:first');
        if( text === 'SpSonSsoSredS' )
        {
          wrap.remove();
          count++;
        }
    });

    //remove sidebar ads
    $('.pagelet-group a:contains("Sponsored"):visible').each(function(){
        var a = $(this),
            text = a.text(),
            wrap = a.parents('.pagelet-group:first');
        if( text === 'Sponsored' )
        {
          wrap.remove();
          count++;
        }
    });

    if( count > 0 )
    {
      console.log(`Removed ${count} ads`);
    }
}

window.setInterval(function(){
    clearAds();
}, 500);