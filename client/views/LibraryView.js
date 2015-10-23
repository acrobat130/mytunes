// LibraryView.js - Defines a backbone view class for the music library.
var LibraryView = Backbone.View.extend({

  // adds formatting
  tagName: "table",

  // backbone runs this function automatically whenever a new LibraryView is created
  initialize: function() {
    // renders LibraryView
    this.render();
  },


  render: function(){
    // to preserve event handlers on child nodes, we must call .detach() on them before overwriting with .html()
    // see http://api.jquery.com/detach/
    this.$el.children().detach();

    // appends the songData (see data.js file) to the new Library html element
    this.$el.html('<th>Library</th>').append(
      this.collection.map(function(song){ // collection refers to songData in data.js file
        // creates new LibraryEntryView based on the SongModel.js and renders it
        return new LibraryEntryView({model: song}).render();
      })
    );
  }

});
