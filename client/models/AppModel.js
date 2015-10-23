// App.js - Defines a backbone model class for the whole app.
var AppModel = Backbone.Model.extend({

  // backbone automatically runs initialize function every time new instance of AppModel
  initialize: function(params){
    // sets the currentSong attribute to a new SongModel object (see SongModel.js in models folder)
    this.set('currentSong', new SongModel());
    // sets the songQueue attribute to a new SongQueue object (see SongQueue.js in collections folder)
    this.set('songQueue', new SongQueue());

    /* Note that 'this' is passed as the third argument. That third argument is
    the context. The 'play' handler will always be bound to that context we pass in.
    In this example, we're binding it to the App. This is helpful because otherwise
    the 'this' we use that's actually in the function (this.set('currentSong', song)) would
    end up referring to the window. That's just what happens with all JS events. The handlers end up
    getting called from the window (unless we override it, as we do here). */

    // listens for the play event emitted/triggered by SongModel.js, then sets the currentSong to the song
    params.library.on('play', function(song){
      this.set('currentSong', song);
    }, this);

    // listens for the enqueue event emitted/triggered by SongModel.js
    // then gets the songQueue property and adds song to it, triggers add event - see SongQueue.js
    params.library.on('enqueue', function(song){
      this.get('songQueue').add(song);
    }, this);

    // gets songQueue property to listen for the stop event triggered by html audio tag
    // sets currentSong to nothing to make song stop playing
    this.get('songQueue').on('stop', function(){
      this.set('currentSong', null);
    }, this);
  }
});
