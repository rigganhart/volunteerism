'use strict'

module.exports = Events;
function Events() {
    this.nextId = 0
    this.events = []

    return this;
}



Events.prototype.add =function (event,user){
  event.id= this.nextId++;
  event.host = user.fullName;
  this.events.push(event);
}

Events.prototype.getAll =function (){
  return this.events;
}
