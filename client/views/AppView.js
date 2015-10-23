// AppView.js - Defines a backbone view class for the whole music app.
var AppView = Backbone.View.extend({

  // backbone automatically runs initialize when new AppView is created
  initialize: function(params){
    // creates a new playerView based on the currentSong model that was created in AppModel
    this.playerView = new PlayerView({model: this.model.get('currentSong')});
    // creates a new libraryView based on the library collection that was created in index.html
    this.libraryView = new LibraryView({collection: this.model.get('library')});
    // creates a new songQueueView based on the songQueue.js collection
    this.songQueueView = new SongQueueView({collection: this.model.get('songQueue')});

    // change:currentSong - this is Backbone's way of allowing you to filter events to
    // ONLY receive change events for the specific property, 'currentSong'
    this.model.on('change:currentSong', function(model){
      this.playerView.setSong(model.get('currentSong'));
    }, this);
  },

// renders the playerView, libraryView, and songQueueView html elements to AppView
  render: function(){
    return this.$el.html([
      this.playerView.$el,
      this.libraryView.$el,
      this.songQueueView.$el
    ]);
  }

});
