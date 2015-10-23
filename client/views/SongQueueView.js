// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  // adds formatting when view renders
  tagName: 'table',

  // backbone runs this function automatically when new SongQueueView is created
  initialize: function() {
    // listens for add and remove events (add from AppModel.js and backbone automatically emits remove), then re-renders the SongQueueView
    this.collection.on('add remove', this.render, this);
    this.render();
  },

  render: function() {
  // to preserve event handlers on child nodes, we must call .detach() on them before overwriting with .html()
  // see http://api.jquery.com/detach/
  this.$el.children().detach();

    // makes "SongQueue" into an html element
    // then appends songQueueCollection to songQueueView (based on SongQueue model)
    this.$el.html('<th>Song Queue</th>').append(
      this.collection.map(function(song){
        // creates and renders new SongQueueEntryView based on the SongModel.js
        return new SongQueueEntryView({model: song}).render();
      })
    );
  }

});
