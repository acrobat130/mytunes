// LibraryEntryView.js - Defines a backbone view class for the entries that will appear within the library views. These will be inserted using the "subview" pattern.
var LibraryEntryView = Backbone.View.extend({

  // applies formatting to each entry
  tagName: 'tr',

  // html template that will be used to render attributes to LibraryEntryView
  template: _.template('<td>(<%= artist %>)</td><td><%= title %></td>'),

  // sets up play and enqueue functions to run when user clicks on LibraryEntryView
  events: {
    'click': function() {
      this.model.play();
      this.model.enqueue();
    }
  },

  // renders the attributes from SongModel to LibraryEntryView (LibraryView.js creates LibraryEntryView based on SongModel)
  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }

});
