// PlayerView.js - Defines a backbone view class for the music player.
var PlayerView = Backbone.View.extend({

  // HTML5 (native) audio tag is being used
  // see: https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Using_HTML5_audio_and_video
  el: '<audio controls autoplay />',

  // backbone runs this function automatically when new PlayerView is created
  initialize: function() {
   // the html player listens for ended event that the audio tag will automatically emit when song ends
   this.$el.on('ended', (function(){
    // run the ended function in SongModel (AppView.js defines PlayerView as based on the Songmodel)
    this.model.ended()
    // binds this to function
   }).bind(this));

  },

  // AppView.js invokes this function when the currentSong attribute changes
  setSong: function(song){
    //
    this.model = song;
    // pause the playerView if there isn't a currentSongModel
    if(!this.model){
      this.el.pause();
    }
    // renders the player view
    this.render();
  },

  render: function(){
    // take this html5 audio tag, set 'src' attribute to the model url if there is a model, or to nothing (an empty string) if there isn't a model
    return this.$el.attr('src', this.model ? this.model.get('url') : '');
  }

});
