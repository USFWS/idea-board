'use strict';

/**
 * @ngdoc service
 * @name ideasApp.Notification
 * @description
 * # Notification
 * Service in the ideasApp.
 */
angular.module('ideasApp')
  .service('Notify', function ($http, API_URL) {
    var endpointURL = API_URL + 'notification';

    function global(notification) {
      notification.type = 'Global message';
      return $http.post(endpointURL + '/global', notification);
    }

    function getAll(read) {
      var url = API_URL + 'user/notifications';
      if (read !== undefined) url += '?read=' + read;
      return $http.post(url);
    }

    function toggleRead(message) {
      message.read = !message.read;
      var url = API_URL + 'message/' + message.id;
      return $http.post(url, message);
    }

    function destroy(message) {
      return $http.delete(API_URL + 'message/' + message.id);
    }

    return {
      global: global,
      getAll: getAll,
      toggleRead: toggleRead,
      destroy: destroy
    };
  });
