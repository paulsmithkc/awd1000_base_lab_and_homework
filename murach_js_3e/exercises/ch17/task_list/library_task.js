"use strict";
var Task = function(task, dueDate) {    
    this.text = task;
    if (arguments.length === 1) { 
        this.dueDate = new Date();
        this.dueDate.setMonth( this.dueDate.getMonth() + 1 );
    } else {
        this.dueDate = new Date( dueDate );
    }
};
Task.prototype.isValid = function() {
    if (this.text === "") { return false; } 
    var dt = new Date();
    if (this.dueDate.getTime() <= dt.getTime() ) {
        return false; 
    } 
    return true; 
};
Task.prototype.toString = function() { 
    return this.text + "<br>Due Date: " + this.dueDate.toDateString();
};