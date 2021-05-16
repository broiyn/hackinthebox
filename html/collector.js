// COLLECT STATIC HERE
var timer = new Date();                  //initialize the timer for setting idle time
var time_reset = timer.getTime();

var user = navigator.userAgent;
var lang = navigator.language;          //language current used
var cookie = navigator.cookieEnabled;   //True if cookie is Enabled, False otherwise
var JS_allowed = true;                  //need to find out how to implement this

var images_allowed;
window.addEventListener("load", event => {
    var image = document.querySelector('img');
    images_allowed = image.complete && image.naturalHeight !== 0;
});

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
    setTimeout(function() { 
        loadStartDate = new Date(timingObject.navigationStart);
        load_start = loadStartDate.toUTCString();

        loadEndDate = new Date(timingObject.loadEventEnd);
        load_end = loadEndDate.toUTCString();

        loadTime = timingObject.loadEventEnd-timingObject.navigationStart; 
    }, 0);
}

// COLLECT ACTIVITY HERE


// Collect Mouse position
var mouse_position = []
document.addEventListener("mousemove", function (event) {
    var x = event.clientX;
    var y = event.clientY;
    var position = `(${x},${y})`;
    mouse_position.push(position);
    var current_time = new Date();
    var current = current_time.getTime();
    if ((current - time_reset) > 2000){
        idle_time.push(`${current_time}for ${current - time_reset} miliseconds by moving`);
    }
    timer = new Date();
    time_reset = timer.getTime();
    console.log(idle_time);
})

//Click(which buttons)
var click_button = [];
window.onmousedown = function(event) {
    if (event.button === 0){
        click_button.push(`left_button at (${event.clientX},${event.clientY})`);
    } else if (event.button === 1){
        click_button.push(`middle_button at (${event.clientX},${event.clientY})`);
    } else if (event.button === 2){
        click_button.push('right_button');
    }
    var current_time = new Date();
    var current = current_time.getTime();
    if ((current - time_reset) > 2000){
        idle_time.push(`${current_time}for ${current - time_reset} miliseconds by clicking`);
    }
    timer = new Date();
    time_reset = timer.getTime();
    console.log(idle_time);
}


//Scrolling(coordinates of the scroll)
var scrollPos = []
window.addEventListener("scroll", (event) => {
    var scrollX = this.scrollX;
    var scrollY = this.scrollY;
    var pos = `(${scrollX},${scrollY})`;
    scrollPos.push(pos);
    var current_time = new Date();
    var current = current_time.getTime();
    if ((current - time_reset) > 2000){
        idle_time.push(`${current_time}for ${current - time_reset} miliseconds by scrolling`);
    }
    timer = new Date();
    time_reset = timer.getTime();
});

// Collect Key up event
var keypressed = [];
document.addEventListener('keyup', function (e) {
    keypressed.push(e.code);
    var current_time = new Date();
    var current = current_time.getTime();
    if ((current - time_reset) > 2000){
        idle_time.push(`${current_time}for ${current - time_reset} miliseconds by typing`);
    }
    timer = new Date();
    time_reset = timer.getTime();
});

//Collect idle time after 2 seconds (when the break ended and how long)
var idle_time = [];

//When user enter the page
var today = new Date();
var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var dateTime = date + ' ' + time;
console.log(dateTime);
// user left the page
var dateTime_out;
window.onbeforeunload = function () {
    var time = new Date();
    var date_out = time.getFullYear() + '-' + (time.getMonth() + 1) + '-' + time.getDate();
    var time_out = time.getHours() + ':' + time.getMinutes() + ':' + time.getSeconds();
    dateTime_out = date_out + ' ' + time_out;
    fetch_activity();
}

//Which page the user was on
var current_page = window.location.href;

function fetch_activity() {
    staticdata = {
        'user_agent_string': user,
        'user_language': lang,
        'cookies_is_allowed': cookie,
        'JS_allowed': JS_allowed,
        'images_allowed': images_allowed,
        'CSS_allowed': CSS_allowed,
        'screen_dimension': screen_dimension,
        'window_dimension': window_dimension,
        'network_connection': type,
    };
    activitydata = {
        'timing_object': timingObject,
        'load_start': load_start,
        'load_end': load_end,
        'loading_time': loadTime,
    };
    performancedata = {
        'mouse_position': mouse_position,
        'click_button': click_button,
        'scroll': scrollPos,
        'keypress': keypressed,
        'idle_time': idle_time,
        'user_enter': dateTime,
        'user_leave': dateTime_out,
        'current_page': current_page
    };
    fetch("https://hackinthebox.site/api/static", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(staticdata)
    });
    fetch("https://hackinthebox.site/api/activity", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(activitydata)
    });
    fetch("https://hackinthebox.site/api/performance", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(performancedata)
    });
}
