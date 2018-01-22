import AbstractCrudService from "../abstract.crud.service";

export default class GoleiroService extends AbstractCrudService {

  constructor($http) {
    super($http, 'http://localhost:8080/arquetipo-java-avancado-web/api/goleiros')
  }

}

GoleiroService.$inject = ['$http']
