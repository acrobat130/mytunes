// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({
  
  initialize: function(){
    this.on('add', this.enqueue, this);
    this.on('dequeue', this.dequeue, this);
    this.on('ended', this.playNext, this);

    // this.on('add', function() {
    //   if (this.length === 1) {
    //     this.playFirst();
    //   }
    // }, this);

    // this.on('dequeue', function(song) {
    //   if (this.at(0) === song) {
    //     this.playNext();
    //   } else {
    //     this.shift();
    //   }
    // }, this);

    // this.on('ended', function() {
    //   this.at(0).play();
    // }, this);
  },

  enqueue: function(){
    if(this.length === 1){
      this.playFirst();  
    }
  },

  dequeue: function(song){
    if (this.at(0) === song) {
      this.playNext();
    } else {
      this.shift();
    }
  },

  playNext: function(){
    this.shift();
    if(this.length >= 1){
      this.playFirst();
    }else{
      this.trigger('stop');
    }
  },

  playFirst: function() {
    this.at(0).play();
  }

});