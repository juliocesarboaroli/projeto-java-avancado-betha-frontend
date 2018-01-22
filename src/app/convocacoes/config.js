import ListController from './list.controller'
import FormController from './form.controller'

import ConvocacaoService from './servico'

export const convocacaoConfig = (modulo) => {

  modulo.service('ConvocacaoService', ConvocacaoService)
  
  return ['$stateProvider', '$urlRouterProvider', 
   ($stateProvider, $urlRouterProvider) => {
    $stateProvider
      .state('convocacao', {
        template: require('@views/default.html'),
        url: '/convocacoes',
        onEnter: ['$state', function($state) {
          $state.go('convocacao.list')
        }]
      })
      .state('convocacao.list', {
        template: require('@views/convocacoes/list.html'),
        url: '/list',
        controller: ListController,
        controllerAs: 'vm'
      })
      .state('convocacao.new', {
        template: require('@views/convocacoes/form.html'),
        url: '/new',
        controller: FormController,
        controllerAs: 'vm'
      })
      .state('convocacao.edit', {
        template: require('@views/convocacoes/form.html'),
        url: '/{id}',
        controller: FormController,
        controllerAs: 'vm'
      });
  }]
}
