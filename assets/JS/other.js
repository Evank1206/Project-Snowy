$(() => {
/*  */
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


$('.view-password').on('click', function (e) {
    e.preventDefault();

    let type =  $('.pass-input').attr('type');
    $('.pass-input').attr(
        'type',
        (type === 'text') ? 
        'password' : 'text'
    );
});
/* 
// dynamic Sign out btn
let signOutBtn = $('<button>')
signOutBtn.text('LOGOUT')
          .attr("class", "sign-out-btn");
//
$('.btn-container').append(signOutBtn);

// applied to FB auth sign out
const $signOutBtn = $('.sign-out-btn');
$signOutBtn.on('click', e => {
    e.preventDefault();

    authentication
    .signOut()
    .then( () => { 
        alert('the user LOGGED OUT');
        console.log('signed out');
        $('.user-sign-in').show();
    });
});
*/
/*  */
});

// how I can not use add/remove class to do the job?
// how do I search the specifc parent tag using 'this'?
// clear input value when closing

/* 
- how to apply the same outcome?
- click exit btn | click outside content | press esc
*/