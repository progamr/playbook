(function(module) {

    var setUpDom = function (element) {

        var input = element.querySelector('input, textarea, select, amr-rating');
        var type = input.getAttribute('type');
        var name = input.getAttribute('name');
        if(type !== 'checkbox' && type !== 'radio')
            input.classList.add('form-control');

        var label = element.querySelector('label');
        label.classList.add('control-label')

        element.classList.add('form-group');

        return name;

    };

    var addMessages = function (form, element, name, $compile, scope) {

        var messages = "<div class='help-block' ng-messages='"+ form.$name +"."+ name + ".$error' ><div ng-message='required' ng-if='"+ form.$name +"."+name+".$dirty'>please fill in this field</div></div>";
        element.append($compile(messages)(scope));
    };

    var link = function ($compile) {
        return function ( scope, element, attributes, form) {
            var name = setUpDom(element[0]);
            addMessages(form, element, name, $compile, scope);
        };
    };
    var forminput = function ($compile) {

        return {
            restrict : "A",
            require : '^form',
            link : link($compile)
        };

    };

    module.directive('forminput', forminput);
}(angular.module('forms')));