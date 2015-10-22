// PlayerView.js - Defines a backbone view class for the music player.
var PlayerView = Backbone.View.extend({

  // HTML5 (native) audio tag is being used
  // see: https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Using_HTML5_audio_and_video
  el: '<audio controls autoplay />',

  initialize: function() {
    // console.log("this.model", this.model)
    // console.log("this", this)
      debugger;
    this.on('ended', function(){
      this.dequeue();
      this.playFirst();
      this.render();
    })
    //   console.log('dequeue', this.dequeue(), 'playFirst', this.playFirst())
    //   dequeue();
    //   playFirst();
    // //   this.on('dequeue', function(){
    // //     this.shift();
    // //     this.playFirst();
    // //   })
    // })

  },

  // events: {
  //   'click': function() {
  //     this.model.play();
  //     this.model.enqueue();
  //     this.model.playFirst();
  //   },
  // },

  setSong: function(song){
    this.model = song;
    this.render();
  },

  render: function(){
    return this.$el.attr('src', this.model ? this.model.get('url') : '');
  }

});
