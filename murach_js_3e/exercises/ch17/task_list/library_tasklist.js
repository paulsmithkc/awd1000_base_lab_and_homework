"use strict";
var tasklist = {
    tasks: [],
    storage: getTaskStorage("tasks_17"),
    load: function() {
        this.tasks = this.storage.retrieveTasks();
    },
    save: function() {
        this.storage.storeTasks(this.tasks);
    },
    sort: function() {
        this.tasks.sort( function(task1, task2) {
            if ( task1.dueDate < task2.dueDate ) { return -1; }
            else if ( task1.dueDate > task2.dueDate ) { return 1; }
            else { return 0; }
        });
    },
    add: function(task) {
        this.tasks.push(task);
    },
    delete: function(i) {
        this.sort();
        this.tasks.splice(i, 1);
    },
    clear: function() {
        this.storage.clear();
    },
    display: function(div) {
        this.sort();

        //create and load html string from sorted array
        var html = "";
        for (var i in this.tasks) {
            html = html.concat("<p>");
            html = html.concat("<a href='#' title='", i, "'>Delete</a>");
            html = html.concat(this.tasks[i].toString());
            html = html.concat("</p>");
        }
        div.html(html);

        // add onclick event handler to each <a> tag just added to div
        div.find("a").each(function() {
            $(this).on("click", function(evt){
                tasklist.load();
                tasklist.delete(this.title);
                tasklist.save();
                tasklist.display(div);
                
                evt.preventDefault(); 
                $("input:first").focus();
            });
        });
    }
};