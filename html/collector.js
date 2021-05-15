// COLLECT STATIC HERE

var user = navigator.userAgent;
var lang = navigator.language;          //language current used
var cookie = navigator.cookieEnabled;   //True if cookie is Enabled, False otherwise
var JS_allowed = true;                  //need to find out how to implement this
var images_allowed = true;              //need to find out how to implement this
var CSS_allowed = true;
var screen_dimension = `(hxw) = (${screen.height}x${screen.width})`;
var window_dimension = `(hxw) = (${window.innerHeight}x${window.innerWidth})`;
var connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
var type = connection.effectiveType;

// COLLECT PERFORMANCE HERE


//object loading time

//time when page start loading


//time when page done loading


//time when the page completely loaded


// COLLECT ACTIVITY HERE


// Collect Mouse position
var mouse_position = []
document.addEventListener("mousemove", function(event){
    var x = event.clientX;
    var y = event.clientY;
    var position = `(${x},${y})`;
    mouse_position.push(position);
})

//Click(which buttons)

//Scrolling(coordinates of the scroll)

// Collect Key up event
var keypressed = [];
document.addEventListener('keyup', function(e){
    keypressed.push(e.code);
})

//Collect idle time after 2 seconds (when the break ended and how long)
var inactivityTime = function () {
    var time
}
//When user enter the page

//When user left the page

//Which page the user was on
var current_page = window.location.href;

function fetch_activity() {
    postdata = {
        'user_agent_string': user,
        'user_language': lang,
        'cookies_is_allowed': cookie,
        'JS_allowed': JS_allowed,
        'images_allowed': images_allowed,
        'CSS_allowed': CSS_allowed,
        'screen_dimension': screen_dimension,
        'window_dimension': window_dimension,
        'network_connection': type,
        'current_page': current_page,
        'keypress': keypressed,
        'mouse_position': mouse_position
    };
    fetch("https://hackinthebox.site/json/user", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(postdata)
    });
}