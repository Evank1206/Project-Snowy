/* -------------------------------------------------------------------------- */

$(() => {
    /*  */

    const firebaseConfig = {
        apiKey: "AIzaSyAEgZVGKLpktoJVDCiHRoug_rLi7qjSTcg",
        authDomain: "project-snowy.firebaseapp.com",
        databaseURL: "https://project-snowy.firebaseio.com",
        projectId: "project-snowy",
        storageBucket: "project-snowy.appspot.com",
        messagingSenderId: "111717425092",
        appId: "1:111717425092:web:c99b2c8a86c02db87d0e91"
    };


    firebase.initializeApp(firebaseConfig);
    // database snapshot
    const db = firebase.database();
    // console.log(database);
    const auth = firebase.auth();

    // create user
    $(document).on('click', '#createUser', function () {
        auth.createUserWithEmailAndPassword('#NewEmail', '#NewPassword');
        console.log('created user');
    });

    auth.onAuthStateChanged(user => {
        if (user) {
            console.log('signed in');
            $('#login').hide();
            const logoutB = $('<button>').attr('id', 'logoutbutton');
            logoutB.text('Logout')
            $('#logoutbutton').append(logoutB);
            $('#logoutbutton').show();
        } else {
            console.log('signed out');
            $('#login').show();
            $('.logoutbutton').empty();
        }
    });

    $(document).on('click', '#logout', function () {
        auth.signOut();
    });

    $('#textSubmit').on('click', function (e) {
        e.preventDefault();
        const email = $('#emailInput').val();
        const password = $('#passwordInput').val();
        auth.signInWithEmailAndPassword(email, password);
    });

    document.onkeyup = e => {
        if (e.key === 'Enter') {
            auth.signInWithEmailAndPassword(email, password);
        } else if (e.key === 'Escape') {
            auth.signOut();
        }
    };
});








/*  */
// });
