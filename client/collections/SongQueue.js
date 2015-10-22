// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({
  
  initialize: function(song){
    this.on('add', function(){
      if(this.models.length === 1){
        this.playFirst();  
      }
    });
      
    this.on('ended', function(song){
      if(this.length > 1){
        this.shift();
        this.playFirst();
      }

    })
    this.on('dequeue', function(){
      this.shift();
    })
  },
  
  playFirst: function() {
    this.at(0).play();
  }

});