import AbstractCrudService from "../abstract.crud.service";

export default class ConvocacaoService extends AbstractCrudService {

  constructor($http) {
    super($http, 'http://localhost:8080/arquetipo-java-avancado-web/api/convocacoes')
  }

}

ConvocacaoService.$inject = ['$http']
