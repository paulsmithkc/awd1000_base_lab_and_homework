"use strict";
var getLocalStorage = function(key) {
    var prototype = {
        get: function() {
            return localStorage.getItem(this.key) || "";
        },
        set:function(str) {
            localStorage.setItem(this.key, str);
        },
        clear: function() {
            localStorage.setItem(this.key, "");
        }
    };

    var storage = Object.create( prototype );
    storage.key = key;
    return storage;
};

var getTaskStorage = function(key) {
    var prototype = getLocalStorage(key);
    
    prototype.retrieveTasks = function() {
        var str = this.get(); 
        if (str.length === 0) { 
            return [];
        } else {
            var interim = str.split( "|" );
            // convert each interim string to a Task object
            return interim.map( function( current ) {
                var t = current.split( "~~" );
                return new Task( t[0], t[1] );
            });
        }
    };
    prototype.storeTasks = function(tasks) {
        if (!Array.isArray(tasks)) {
            this.set( "" );
        } else {
            // convert each Task object to an interim string
            var interim = tasks.map( function( current ) {
                return current.text + "~~" + current.dueDate.toDateString();
            });
            this.set( interim.join( "|" ) );
        }
    };

    var storage = Object.create(prototype);
    storage.key = key;
    return storage;
};

