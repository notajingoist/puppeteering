var SITE = {
    init: function() {
        this.setVars();
        this.bindEvents();
        this.playBgVideo();
        this.$window.trigger('resize');
    },

    setVars: function() {
        this.$window = $(window);
        this.$video = $('video');
        this.$bgVideo = $('#bg-video');
        this.$loopedVideo = $('#looped-video');
        this.$videoPlayer = $('.video-player');
        this.$button = $('.btn-clip');

        this.originalVideoWidth = parseInt(this.$video.attr('width'));
        this.originalVideoHeight = parseInt(this.$video.attr('height'));
        this.minimumVideoWidth = 300;
    },

    bindEvents: function() {
        // video
        this.$window.on('resize', this.resizeToCover.bind(this));

        this.$video.on('ended', function(e) {
            var $video = $(e.currentTarget);
            var videoId = $video.attr('id');

            if (videoId !== 'looped-video') {
                if (videoId !== 'bg-video') {
                    $video.fadeOut();
                    console.log('fading out');
                } else {
                    $video.fadeOut(0);
                    // $video.addClass('hide');
                    console.log(videoId);
                }
                this.$button.removeClass('hide');

                this.$loopedVideo.fadeIn(0);
                this.$loopedVideo[0].play();

                if (videoId === 'bg-video') {
                    // this.$videoPlayer.addClass('stillframe-bg');
                }
                console.log(videoId + ' ended');
            }
        }.bind(this));

        this.$video.on('play', function(e) {
            var $video = $(e.currentTarget);
            var videoId = $video.attr('id');

            if (videoId !== 'looped-video') {
                $video.fadeIn();
                this.$button.addClass('hide');

                this.$loopedVideo.fadeOut();
                this.$loopedVideo[0].pause();

                console.log('playing ' + videoId);
            }
        }.bind(this));

        // clip buttons
        this.$button.on('click', function(e) {
            var $btn = $(e.currentTarget);
            var clipNumber = $btn.data('id');
            var videoId = 'video-clip' + clipNumber;
            var $videoClip = $('#' + videoId);
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

    playBgVideo: function() {
        setTimeout(function() {
            this.$bgVideo[0].play();
            this.$videoPlayer.removeClass('intro-bg');
        }.bind(this), 2000);
    },

    resizeToCover: function(e) {
        console.log('resizing');
        var newWidth = this.$window.width();
        var newHeight = this.$window.height();

        // set video player to window size
        this.$videoPlayer.width(this.$window.width());
        this.$videoPlayer.height(this.$window.height());

        // use largest scale factor of horizontal / vertical
        var scaleHorizontal = newWidth / this.originalVideoWidth;
        var scaleVertical = newHeight / this.originalVideoHeight;
        var scale = scaleHorizontal > scaleVertical ? scaleHorizontal : scaleVertical;

        // don't allow scaled width < minimum video width
        if (scale * this.originalVideoWidth < this.minimumVideoWidth) {
            scale = this.minimumVideoWidth / this.originalVideoWidth;
        }

        // scale the video
        this.$video.width(scale * this.originalVideoWidth);
        this.$video.height(scale * this.originalVideoHeight);

        // center the video
        this.$videoPlayer.scrollLeft(this.$video.width() - this.$window.width() / 2);
        this.$videoPlayer.scrollTop(this.$video.height() - this.$window.height() / 2);

    }
};

SITE.init();
