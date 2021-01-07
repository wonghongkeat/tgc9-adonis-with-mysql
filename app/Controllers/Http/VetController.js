'use strict'

const Vet = use('App/Models/Vet')

class VetController {
  index({view}){
    return view.render('vets/create')
  }

  async processCreate({request,response}){
    let input = request.post()
    let newVet = new Vet()
    newVet.first_name = input.first_name
    newVet.last_name = input.last_name
    newVet.license = input.license
    await newVet.save()
    response.json(newVet)

  }
}

module.exports = VetController
