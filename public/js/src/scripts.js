var SITE = {
    init: function() {
        this.setVars();
        this.bindEvents();
        this.playVideo();
    },

    setVars: function() {
        this.$video = $('video');
        this.$videoPlayer = $('.video-player');
        this.$button = $('.btn-clip');
    },

    bindEvents: function() {


        // bg video
        this.$video.on('ended', function(e) {
            var $video = $(e.currentTarget);
            var videoId = $video.attr('id');
            $video.addClass('hide');
            this.$button.removeClass('hide');
            if (videoId === 'bg-video') {
                this.$videoPlayer.addClass('stillframe-bg');
            }
            console.log(videoId + ' ended');
        }.bind(this));

        this.$video.on('play', function(e) {
            var $video = $(e.currentTarget);
            var videoId = $video.attr('id');
            this.$button.addClass('hide');
            console.log('playing ' + videoId);
        }.bind(this));

        // clip buttons
        this.$button.on('click', function(e) {
            var $btn = $(e.currentTarget);
            var clipNumber = $btn.data('id');
            var videoId = 'video-clip' + clipNumber;
            var $videoClip = $('#' + videoId);
            $videoClip.removeClass('hide');
            $videoClip[0].play();
        }.bind(this));

        this.$button.on('mouseenter', function(e) {
            // $(this).css('backgroundColor', 'red');
            var $btn = $(e.currentTarget);
            $btn.removeClass('hover-off');
            $btn.addClass('hover-on');
        }.bind(this));

        this.$button.on('mouseleave', function(e) {
            // $(this).css('backgroundColor', 'blue');
            var $btn = $(e.currentTarget);
            $btn.removeClass('hover-on');
            $btn.addClass('hover-off');
        }.bind(this));
    },

    playVideo: function() {
        setTimeout(function() {
            this.$videoPlayer.fadeIn();
            this.$video[0].play();
        }.bind(this), 2000);
    }
};

SITE.init();
