'use strict'

const Pet = use('App/Models/Pet')
const Breed = use('App/Models/Breed')
const Owner = use('App/Models/Owner')

class PetController {
  async create({view}){
    let breeds = await Breed.all()
    let owners = await Owner.all()
    return view.render('pets/create',{
      breeds : breeds.toJSON(),
      owners : owners.toJSON()
    })
  }

  async processCreate({request,response}){
    let input = request.post()
    let newPet = new Pet()
    newPet.name = input.name
    newPet.age = input.age
    newPet.owner_id = input.owner
    newPet.breed_id = input.breed
    await newPet.save()
    response.json(newPet)
  }
}

module.exports = PetController
