// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({ // extending Songs class with the following properties:

  // backbone automatically runs initialize function when every SongQueue instance is created
  initialize: function(){
    // listens for the add event emitted by backbone automatically when .add is called in AppModel.js
    // then runs enqueue function below and binds this to the songQueue
    this.on('add', this.enqueue, this);
    // listens for the dequeue event emitted by SongModel.js
    // then runs dequeue function below and binds this to the songQueue
    this.on('dequeue', this.dequeue, this);
    // listens for the ended event emitted by SongModel.js
    // then runs playNext functio below and binds this to the songQueue
    this.on('ended', this.playNext, this);
  },

  // if there's only one song in songqueue, run playFirst function below
  enqueue: function(){
    if(this.length === 1){
      this.playFirst();
    }
  },

  // if the song that was clicked on was first in the queue, play the next song
  // otherwise shift the songQueue
  dequeue: function(song){
    if (this.at(0) === song) {
      this.playNext();
    } else {
      this.shift();
    }
  },

  // shift the array, then if there are any songs in the songQueue, playFirst
  // otherwise nothing should be playing so trigger the stop event - AppModel.js is listening
  playNext: function(){
    this.shift();
    if(this.length >= 1){
      this.playFirst();
    }else{
      this.trigger('stop');
    }
  },

  // play the song at 0 index in the songQueue
  playFirst: function() {
    this.at(0).play();
  }

});