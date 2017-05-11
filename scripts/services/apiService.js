'use strict';
angular.module('Code')
  .factory('APIService', ['$http', '$q', '$httpParamSerializer',
    function ($http, $q, $httpParamSerializer) {
      // if use mock-api
      var isMock = false;
      var hostname = window.location.hostname;

      function promise(data) {
        var deferred = $q.defer();
        deferred.resolve({
          data: data,
          status: 200
        });

        var _promise = deferred.promise;
        _promise.success = function (fn) {
          _promise.then(function (res) {
            fn(res.data, res.status);
          });
          return _promise;
        };
        return _promise;
      }

      function query(url, params, data) {
        if (params && _.isObject(params)) {
          if (url.indexOf('?') !== -1) {
            url += '&' + $.param(params);
          } else {
            url += '?' + $.param(params);
          }
        }
        if (data) {
          return $http.get(url, data);
        } else {
          return $http.get(url);
        }
      }

      function queryPost(url, params, body, data) {
        if (params && _.isObject(params)) {
          if (url.indexOf('?') !== -1) {
            url += '&' + $.param(params);
          } else {
            url += '?' + $.param(params);
          }
        }
        if (data) {
          return $http.post(url, body, data);
        } else {
          return $http.post(url, body);
        }
      }

      var url = 'http://192.168.1.127:8080/rcampus/';
      var api = {
        course: {
          getCourseById: function (id) {
            return $http.get(url + 'course/detail.do?courseId='+id);
          },
          submit: function (id, data) {
            return $http({
              method: 'POST',
              url: url + 'course/submit.do',
              headers: {'Content-Type': 'application/x-www-form-urlencoded'},
              data: "courseId=" + encodeURIComponent(id) + "&content=" + encodeURIComponent(data)
            })
          }
        }
      };

      return api;
    }]);
