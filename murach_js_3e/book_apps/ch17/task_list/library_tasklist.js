"use strict";
var tasklist = {
    tasks: [],
    storage: getTaskStorage("tasks_17"),
    load: function() {
        this.tasks = this.storage.retrieveTasks();
        return this;
    },
    save: function() {
        this.storage.storeTasks(this.tasks);
        return this;
    },
    sort: function() {
        this.tasks.sort( function(task1, task2) {
            if ( task1.dueDate < task2.dueDate ) { return -1; }
            else if ( task1.dueDate > task2.dueDate ) { return 1; }
            else { return 0; }
        });
        return this;
    },
    add: function(task) {
        this.tasks.push(task);
        return this;
    },
    delete: function(i) {
        this.sort();
        this.tasks.splice(i, 1);
        return this;
    },
    clear: function() {
        this.storage.clear();
        return this;
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
                tasklist.load().delete(this.title).save().display(div);
                evt.preventDefault(); 
                $("input:first").focus();
            });
        });
        return this;
    }
};