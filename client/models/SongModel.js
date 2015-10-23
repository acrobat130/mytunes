// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({

  // play function runs when user clicks in library entry view - see LibraryEntryView.js
  play: function(){
    // Triggering an event here will also trigger the event on the collection
    // triggers/emits play event - heard by AppModel.js
    this.trigger('play', this);
  },

  // enqueue function runs when user clicks on library entry view - see LibraryEntryView.js
  enqueue: function(){
    // triggers/emits enqueue event - heard by AppModel.js
    this.trigger('enqueue', this);
  },

  // dequeue function runs when user clicks on SongQueueEntryView.js
  dequeue: function(){
    // triggers/emits dequeue event - heard by SongQueue.js
    this.trigger('dequeue', this);
  },

  // ended function runs when html5 audio tag says that song is done
  ended: function(){
    // triggers/emits ended event - heard by SongQueue.js
    this.trigger('ended', this);
  }

});
