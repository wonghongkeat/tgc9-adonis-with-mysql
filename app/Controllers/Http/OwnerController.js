'use strict'
  const Owner = use('App/Models/Owner')

class OwnerController {
index({view}){
  let owners = Owner.all();
  return view.render('ownerss/show')
}
}

module.exports = OwnerController
