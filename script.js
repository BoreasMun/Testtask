
    var app = angular.module('app', 
      ['lumx',
       'ngMessages',
        'ngAria',
        'formly',
        'formlyLumx'
      ], function config() {
      // set templates here
      
    });


  app.controller('MainCtrl', function MainCtrl($scope) {
      'use strict';
    var vm = this;

    vm.exampleTitle = 'Zadanko testowe';
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
        type: 'lx-input',
        wrapper: 'lx-wrapper-errors',
        templateOptions: {
            type: 'password',
            label: 'Password',
            minlength: 4,
            maxlength: 16,
            required: true
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