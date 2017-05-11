'use strict';

angular.module('Code')
  .controller('HomeCtrl', ['$window', '$rootScope', '$scope','$http', 'APIService',
    function($window, $rootScope, $scope, $http, api) {
      $scope.editorContent = '';
      $scope.consoleContent = '';
      $scope.course = null;
      $scope.message = '';
      $scope.status = false;
      $scope.editorOptions = {
        lineWrapping : true,
        lineNumbers: true,
        matchBrackets: true, 
        mode: 'r',
        theme: 'abcdef'
      };

      $scope.consoleOptions = {
        lineWrapping : true,
        lineNumbers: true,
        matchBrackets: true, 
        mode: 'r',
        theme: 'cobalt'
      };
      var editorDoc = null;
      $scope.editorLoaded = function(_editor){
        // Editor part
        var _doc = _editor.getDoc();
        editorDoc = _editor.getDoc();
        _editor.focus();

        // Options
        // _editor.setOption('firstLineNumber', 1);
        _doc.markClean()

        // Events
        _editor.on("beforeChange", function(){ 

        });
        _editor.on("change", function(){ 

        });
      };

      $scope.consoleLoaded = function(_editor){
        // Editor part
        var _doc = _editor.getDoc();
        _editor.focus();

        // Options
        // _editor.setOption('firstLineNumber', 1);
        _doc.markClean()

        // Events
        _editor.on("beforeChange", function(){ 

        });
        _editor.on("change", function(){ 

        });
      };

      $scope.getCourse = function() {
        $scope.message = '';
        api.course.getCourseById(1)
          .then(
            (success) => {
              $scope.course = success.data;
              console.log('success', success.data)
              $scope.editorContent = $scope.course.examPage;
            },
            (error) => {
              console.log('error', error)
            }
          )
      }

      $scope.submit = function(){
        $scope.message = '';
        var code = $scope.editorContent;
        api.course.submit(1, code)
          .then(
              (success) => {
                console.log('success', success)
                $scope.message = success.data.judgeMsg;
                $scope.status = success.data.judgeStatus;
                $scope.consoleContent = success.data.ocpuResult.console;
                console.log('$scope.message', $scope.message)
                console.log('$scope.status', $scope.status)
              },
              (error) => {
                console.log('error', error)
              }
            );
      };

      $scope.getCourse();
    }
  ]);
