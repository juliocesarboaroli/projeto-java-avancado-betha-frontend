import ListController from './list.controller'
import FormController from './form.controller'

import GoleiroService from './servico'

export const goleiroConfig = (modulo) => {

  modulo.service('GoleiroService', GoleiroService)
  
  return ['$stateProvider', '$urlRouterProvider', 
   ($stateProvider, $urlRouterProvider) => {
    $stateProvider
      .state('goleiro', {
        template: require('@views/default.html'),
        url: '/goleiros',
        onEnter: ['$state', function($state) {
          $state.go('goleiro.list')
        }]
      })
      .state('goleiro.list', {
        template: require('@views/goleiros/list.html'),
        url: '/list',
        controller: ListController,
        controllerAs: 'vm'
      })
      .state('goleiro.new', {
        template: require('@views/goleiros/form.html'),
        url: '/new',
        controller: FormController,
        controllerAs: 'vm'
      })
      .state('goleiro.edit', {
        template: require('@views/goleiros/form.html'),
        url: '/{id}',
        controller: FormController,
        controllerAs: 'vm'
      });
  }]
}
