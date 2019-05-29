"use strict";

$(document).ready(function(){
    var setCookie = function(name, value, days) {
        // concatenate cookie name and encoded value
        var cookie = name + "=" + encodeURIComponent(value);

        // if there's a value for days, add max-age to cookie
        if (days !== undefined) {
            cookie += "; max-age=" + days * 24 * 60 * 60;
        }
        // add path to cookie and then set
        cookie += "; path=/";
        document.cookie = cookie;
    };

    var getCookieByName = function(name) {
        var cookies = document.cookie;

        // get the index of the cookie name and equal sign
        var start = cookies.indexOf(name + "=");

        if (start === -1) { return ""; } // no cookie with that name
        else {
            // adjust so the name and equal sign aren't included in the result
            start = start + (name.length + 1); 

            // get the index of the semi-colon at the end of the cookie value,
            // or the length of the string in the case of the last cookie
            var end = cookies.indexOf(";", start);
            if (end === -1) { end = cookies.length; }

            // use the start and end indexes to get the cookie value
            var cookieValue = cookies.substring(start, end);

            // return the decoded cookie value
            return decodeURIComponent(cookieValue);
        } 
    };

    var deleteCookie = function(name) {
        document.cookie = name + "=''; max-age=0; path=/";
    };
    
    $("#add_task").click(function() {  
        var textbox = $("#task");
        var task = textbox.val();
        if (task === "") {
            alert("Please enter a task.");
            textbox.focus();
        } else {  
            // retrieve tasks cookie value and add new task to it
            var tasks = getCookieByName("tasks");
            tasks = tasks.concat( task, "\n" );

            // reset a 21 day persistent cookie for tasks
            setCookie( "tasks", tasks, 21 ); // 21 day persistent cookie

            // clear task text box and re-display tasks
            textbox.val( "" );
            $("#task_list").val( getCookieByName("tasks") );
            textbox.focus();
        }
    });
    
    $("#clear_tasks").click(function() {
        deleteCookie( "tasks" );
        $("#task_list").val( "" );
        $("#task").focus();
    }); 
    
    // display tasks on initial load
    $("#task_list").val( getCookieByName("tasks") );
    $("#task").focus();
});