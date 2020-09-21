'use strict';

angular.module('linagora.esn.group', [
  'op.dynamicDirective',
  'restangular',
  'esn.router',
  'esn.member',
  'esn.http',
  'esn.infinite-list',
  'esn.core',
  'esn.user',
  'esn.async-action',
  'esn.session',
  'esn.attendee',
  'esn.scroll',
  'esn.ui',
  'esn.i18n',
  'esn.header'
])

  .constant('GROUP_OBJECT_TYPE', 'group')

  .constant('GROUP_EVENTS', {
    GROUP_CREATED: 'group:created',
    GROUP_UPDATED: 'group:updated',
    GROUP_DELETED: 'group:deleted',
    GROUP_MEMBERS_REMOVED: 'group:members:removed',
    GROUP_MEMBERS_ADDED: 'group:members:added'
  })

  .constant('GROUP_OBJECT_TYPE', 'group');
