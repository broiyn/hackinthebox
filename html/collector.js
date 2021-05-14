// Collect Static here
function collect_user_agent() {
    var user = navigator.userAgent;         //
}

function collect_user_lang() {
    var lang = navigator.language;          //language current used
}

function allow_cookies() {
    var cookie = navigator.cookieEnabled;   //True if cookie is Enabled, False otherwise
}

function allow_JS() {

}

function allow_images() {

}

function allow_CSS() {
    
}

function screen_dimensions() {
    var height_screen = screen.height;
    var width_screen = screen.width;
}

function window_dimensions() {
    var height_window = window.innerHeight;
    var width_window = window.innerWidth;
}

function network_connection() {
    var connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
    var type = connection.effectiveType;
}

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Collect Perormance here
function get_page_load(){

    //object loading time

    //time when page start loading
    var start_timer = Date.now();
    //time when page done loading
    

    //time when the page completely loaded
}


// Collect Activity