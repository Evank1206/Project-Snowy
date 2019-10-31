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
    const database = firebase.database();
    // console.log(database);

    let api_key = "0d4f413ff4e5ee959faba52669910f57"
    let baseurl = "http://api.weatherunlocked.com/"
    let appID = "0753adb3"
    let queryurl = baseurl + '?app_id=' + appID + '&app_key=' + api_key

    console.log(queryurl)

    $.ajax({
        method: "GET",
        url: queryurl,
    }).then(data => {

        console.log(Response)
    });








    /*  */
});