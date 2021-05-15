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
timingObject = window.performance.timing;

//time when page start loading
var load_start;

//time when page done loading
var load_end;

//time when the page completely loaded
var loadTime;

window.onload = function () {
    load_start = timingObject.loadEventStart;
    load_end = timingObject.loadEventEnd;
    loadTime = timingObject.loadEventEnd-timingObject.navigationStart; 
    console.log('start time' + window.performance.timing.loadEventStart);
    console.log('end time' + window.performance.timing.loadEventEnd);
}

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

//When user enter the page
var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var dateTime = date+' '+time;
console.log(dateTime);
// user left the page
var dateTime_out;
window.onbeforeunload = function() {
    var time = new Date();
    var date_out = time.getFullYear() + '-' + (time.getMonth()+1) + '-' + time.getDate();
    var time_out = time.getHours() + ':' + time.getMinutes() + ':' + time.getSeconds();
    dateTime_out = date_out + ' ' + time_out;
    fetch_activity();
}

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
        'mouse_position': mouse_position,
        'timing_object': timingObject,
        'load_start': load_start,
        'load_end': load_end,
        'loading_time': loadTime,
        'user_enter': dateTime,
        'user_leave': dateTime_out
    };
    fetch("https://hackinthebox.site/json/posts", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(postdata)
    });
}
