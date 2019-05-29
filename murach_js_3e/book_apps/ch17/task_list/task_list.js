"use strict";
$( document ).ready(function() {
    $("#add_task").click( function() {
        if ( $("#due_date").val() === "" ) {
            var newTask = new Task( $("#task").val() );
        } else {
            var newTask = new Task( $("#task").val(), $("#due_date").val() );
        }
        
        if ( newTask.isValid() ) {
            tasklist.load().add(newTask).save().display( $("#tasks") );  
            $("#task").val("");
        } else {
            alert("Please enter a task and a future due date.");
        }
        $("#task").focus();
    });
    
    $("#clear_tasks").click( function() {
        tasklist.clear();
        $("#tasks").html("");
        $("#task").val("");
        $("#due_date").val("");
        $("#task").focus();
    });   
    
    $("#due_date").datepicker({
        changeMonth: true,
        changeYear: true
    });
    
    tasklist.load().display( $("#tasks") );
    $("#task").focus();
});