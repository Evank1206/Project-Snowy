/* -------------------------------------------------------------------------- */
$(() => {

/* -------------------------------------------------------------------------- */
// copy/paste : const = firebaseConfig
/* -------------------------------------------------------------------------- */

firebase.initializeApp(firebaseConfig);
// database snapshot
const database = firebase.database();
// console.log(db);







// db.ref('data').on('value', snap => {
//     console.log( snap.val() );
// });

// db.ref('data-2').set({
//     letters: ['a', 'b', 'c', 'd']
// });


// db.ref('data-2').on('value', snap => {
//     console.log( snap.val() );
//     // $('span').text( snap.val().letters[0] );
//     // document.write( snap.val().letters[0] );
// });



});
