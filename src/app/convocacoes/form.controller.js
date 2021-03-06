import moment from 'moment'

export default class FormController {

    constructor($stateParams, $state, ConvocacaoService, Notification, GoleiroService) {
        this.record = {}
        this.goleiros = []
        this.title = 'Adicionando registro'
        this._service = ConvocacaoService
        this._goleiroService = GoleiroService
        if ($stateParams.id) {
            this.title = 'Editando registro'
            this._service.findById($stateParams.id)
                .then(data => {
                    this.record = data
                    console.log('dataHora',data)
                    this.record.dataHora = moment(data.dataHora, 'YYYY-MM-DD HH:mm ZZ').toDate()
                })
        }
        this._state = $state
        this._notify = Notification
        this.getGoleiros()
    }

    getGoleiros() {
        this._goleiroService.findAll()
            .then(data => {
                this.goleiros = data
            }).catch(erro => {
                console.log(erro)
            })
    }

    save() {
        this.record.dataHora = moment(this.record.dataHora).format('YYYY-MM-DDTHH:mm:ss')
        this._service.save(this.record)
            .then(resp => {
                this._notify.success('Registro salvo com sucesso!')
                this._state.go('convocacao.list')
            }).catch(erro => {
                this._notify.error('Erro ao salvar o registro!')
            })
    }
}

FormController.$inject = ['$stateParams', '$state', 'ConvocacaoService', 'Notification', 'GoleiroService']
