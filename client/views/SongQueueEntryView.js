// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({

  // formats songQueueEntryView on page
  tagName: 'tr',

  // sets the html template
  template: _.template('<td>(<%= artist %>)</td><td><%= title %></td>'),

  // runs the dequeue function when user clicks on songQueueEntryView
  events: {
    'click': function() {
      this.model.dequeue();
    }
  },

  render: function(){
    // renders the SongQueueEntryView elements based on the songModel attributes and html template above
    return this.$el.html(this.template(this.model.attributes));
  }
});
