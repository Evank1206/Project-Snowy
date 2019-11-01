$(() => {
/*  */

// $('.modal-search-bar')
// $('.modal-account')

$('.m-search').on('click', function(e) {
    e.preventDefault();
    $('.modal-search-bar').css('display', 'flex');
});
$('.m-account').on('click', function(e) {
    e.preventDefault();
    $('.modal-account').css('display', 'flex');
});

$('.exit-btn').on('click', function() {
    $('.modal-search-bar').css('display', 'none');
    $('.modal-account').css('display', 'none');
});
/*  */
});

// how I can not use add/remove class to do the job?
// how do I search the specifc parent tag using 'this'?

/* 
- how to apply the same outcome?
- click exit btn | click outside content | press esc
*/