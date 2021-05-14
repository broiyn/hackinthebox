// Collect Static here

var user = navigator.userAgent;

var lang = navigator.language;          //language current used

var cookie = navigator.cookieEnabled;   //True if cookie is Enabled, False otherwise

var JS_allowed = true;                  //need to find out how to implement this

var images_allowed = true;              //need to find out how to implement this

var CSS_allowed = true;

var height_screen = screen.height;
var width_screen = screen.width;

var height_window = window.innerHeight;
var width_window = window.innerWidth;

var connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
var type = connection.effectiveType;


// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Collect Perormance here


//object loading time

//time when page start loading
var start_timer = Date.now();
//time when page done loading


//time when the page completely loaded



// Collect Activity



//this function will automatic launch every time we load the page
function fetch_data() {
    // Fetch the collected data here
    postdata = {
        'user_agent_string': user,
        'user_language': lang,
        'cookies_is_allowed': cookie,
        'JS_allowed': JS_allowed,
        'images_allowed': images_allowed,
        'CSS_allowed': CSS_allowed,
        'screen_height': height_screen,
        'screen_width': width_screen,
        'window_height': height_window,
        'window_width': width_window,
        'network_connection': type
    };
    fetch("https://hackinthebox.site/json/posts", { // note we are going to /1
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(postdata)
    });
}

function fetch_activity() {
    postdata = {
        'user_agent_string': user,
        'user_language': lang,
        'cookies_is_allowed': cookie,
        'JS_allowed': JS_allowed,
        'images_allowed': images_allowed,
        'CSS_allowed': CSS_allowed,
        'screen_height': height_screen,
        'screen_width': width_screen,
        'window_height': height_window,
        'window_width': width_window,
        'network_connection': type
    };
    fetch("https://hackinthebox.site/json/user", { // note we are going to /1
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(postdata)
    });

    fetch("https://hackinthebox.site/json/user", { // note we are going to /1
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(postdata)
});
}

function fetch_performance() {
    postdata = {
        'user_agent_string': user,
        'user_language': lang,
        'cookies_is_allowed': cookie,
        'JS_allowed': JS_allowed,
        'images_allowed': images_allowed,
        'CSS_allowed': CSS_allowed,
        'screen_height': height_screen,
        'screen_width': width_screen,
        'window_height': height_window,
        'window_width': width_window,
        'network_connection': type
    };
    fetch("https://hackinthebox.site/json/performance", { // note we are going to /1
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(postdata)
    });


}