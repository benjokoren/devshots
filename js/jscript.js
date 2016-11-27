
window.addEventListener('scroll', function (evt) {
    var startingtop = document.body.scrollTop;
    var floatingmenu = document.getElementById("floatingMenu");

        if (startingtop === 0) {
            floatingmenu.classList.remove('fixed');
            document.body.style.paddingTop = '0px';
        }

        if (startingtop > 0) {
            document.body.style.paddingTop = '100px';
            floatingmenu.classList.add('fixed');
        }
});



//window.addEventListener('scroll', function (evt) {
//    // המרחק מהגלילה למעלה
//    var startingtop = document.body.scrollTop;
//    //האלמנט שמוסיפים לו סטייל
//    var floatingmenu = document.getElementById("floatingMenu");
//
//    // המשתמש גלל לטופ, יש לתת סטייל בהתאם
//    if (startingtop === 0) {
//        floatingmenu.style.removeProperty("position");
//    }
//    // המשתמש גלל למטה מהטופ
//    else if (startingtop > 0) {
//        floatingmenu.style.position = 'fixed';
//    }
//});



// תחילת קליק על תפריט מובייל
//var button = document.getElementById("clickBtn"),
//    menu = document.getElementById("dropDown");
//console.log(menu);
//button.addEventListener("click", function() {
//   menu.classList.toggle('show');
//});

/* myFunction toggles between adding and removing the show class, which is used to hide and show the dropdown content */


//$(document).ready(function(){
//    myFunction()
//})
//
//function myFunction(){
//    $("#clickBtn").click(function(){
//        $("#dropDown").toggleClass("show");
//    })
//}
