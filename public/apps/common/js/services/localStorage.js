(function(module){

    // implementation details
    var localStorage = function ($window) {

        var store = $window.localStorage;

        var add = function (key, value) {
            value = angular.toJson(value);  // turns value to  json
            store.setItem(key, value);
        };

        var get = function (key) {
            var value = store.getItem(key);
            if(value)
                value = angular.fromJson(value);
            return value;
        };

        var remove = function (key) {
            store.removeItem(key);
        };
        // public API to be returned
        return {
            add : add,
            get : get,
            remove : remove,
        };
    };
    module.factory('localStorage', localStorage);
}(angular.module('common')));