"use strict";

$(document).ready(function(){
    var tasks = [];

    var displayTaskList = function() {
        tasks.sort();
        
        $("#task_list").val( tasks.join("\n") );
        $("#task").focus();
    };
    
    $("#add_task").click(function() {   
        var textbox = $("#task");
        var task = textbox.val();
        if (task === "") {
            alert("Please enter a task.");
            textbox.focus();
        } else {  
            // add new task to tasks array 
            tasks.push( task ); 

            // clear task text box and re-display tasks
            textbox.val( "" );
            displayTaskList();
        }
    });
    
    $("#clear_tasks").click(function() {
        tasks = [];
        $("#task_list").val( "" );
        $("#task").focus();
    }); 
    
    // set focus on initial load
    $("#task").focus();
});
