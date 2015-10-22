// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({
  
  initialize: function(song){
    this.on('enqueue', enqueue(), this)
    // this.set('playFirst', function(){
    // })
     // this.models.add(song);
    // on('play', function(song){
    //   this.set('currentSong', song);
    // }, this);
  },
  enqueue: function() {
    if(this.models.length === 1){
      this.playFirst();  
    }
    
  },
    // add: function(song) { 
    //   // console.log('this', this)
    //   // console.log('models', this.models)
    //   // this.models.push(song);
      // console.log('song', song);
      // console.log('models', this.models, 'at zero', this.models[0], 'zero zero', this.models[0][0], 'length', this.models[0].length)
      // else if (this.models[0].length < 2) {
      //   // this.models[0].play();
      // }
    // },
    playFirst: function() {

    }

});