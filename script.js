
    var app = angular.module('app', 
      ['lumx',
       'ngMessages',
        'ngAria',
        'formly',
        'formlyLumx',
        'ui.bootstrap'
      ], function config() {
      // set templates here

    });

app.run(function(formlyConfig) {
    formlyConfig.setType({
        name: 'lx-input-custom',
        templateUrl: 'custom-template.html'
    });
});
  app.controller('MainCtrl', function MainCtrl($scope) {
      'use strict';
    var vm = this;

    vm.exampleTitle = 'Login page';
    vm.formData = {};  // the data object
    vm.formOptions = {}; // optional form parameters
    vm.formFields = [{
        key: 'email', // {
        type: 'lx-input',
        wrapper: 'lx-wrapper-errors', // error handling with ngMessages
        templateOptions: {
            type: 'email', // input type: [email | password | text | url | number]
            label: 'Email',
            required: true
        },
        validation: {
            messages: {
            email: function (viewValue, modelValue, scope) {
                return 'That doesn\'t look like a valid email.'
            }
            }
        }
        },{
        key: 'password',
        type: 'lx-input-custom',
        wrapper: 'lx-wrapper-errors',
        templateOptions: {
            type: 'password',
            label: 'Password',
            minlength: 6,
            maxlength: 20,
            required: true
        },
        validators: {
            oneLetter: {
                expression: function(viewValue, modelValue) {
                    var value = modelValue || viewValue;
                    return /(?=.*[0-9])/.test(value);
                },
                message: '"Password must contain at least one digit"'
            },
            oneSpecialCharacter: {
                expression: function(viewValue, modelValue) {
                    var value = modelValue || viewValue;
                    return /(?=.*[!@#$%^&*])/.test(value);
                },
                message: '"Password must contain at least one special character"'
            },
            notAnEmail: {
                expression: function(viewValue, modelValue, scope) {
                    var value = modelValue || viewValue;
                    if (!scope.model.email) return false;

                    return !value.includes(scope.model.email);
                },
                message: '"Password must NOT contain your e-mail"'
            }
        },
        ngModelAttrs: {
            minlength: {
            bound: 'ng-minlength',
            attribute: 'minlength'
            },
            maxlength: {
            bound: 'ng-maxlength',
            attribute: 'maxlength'
            }
        },
        modelOptions: { 
            allowInvalid: true,
            updateOn: 'default blur keydown',
            debounce: {
            keydown: 0,
            default: 0,
            blur: 0
            }
        }
        }];

  });