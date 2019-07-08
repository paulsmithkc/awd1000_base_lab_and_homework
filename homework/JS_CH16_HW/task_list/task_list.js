"use strict";
$(document).ready(function() {
    var tasks = []; // array that will hold the tasks
    
    var displayTaskList = function() {
        tasks.sort();
        $("#task_list").val( tasks.join( "\n" ) );
        $("#task").focus();
    }; // end displayTaskList()

    $("#add_task").click(function() {
        var textbox = $("#task");
        var task = textbox.val();
        if (task === "") {
            alert("Please enter a task.");
            $("#task").focus();
        } else {
            tasks.push( task );
            textbox.val( "" );
            displayTaskList();
        }
    }); // end click()
    
    $("#clear_tasks").click(function() {
        tasks = [];
        $("#task_list").val( "" );
        $("#task").focus();
    }); // end click()

// set focus on initial load
$("#task").focus();
    
}); // end ready
