'use strict';

angular.module('chattyApp')
  .factory('messageService', function ( $http ) {
    return {
      getMessages: function () {
        return $http.get('http://localhost:9254');
      },

      addMessage: function ( message ) {
        return $http.post('http://localhost:9254', { message: message });
      }
    };
  });
