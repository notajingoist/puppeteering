var SITE = {
    init: function() {
        this.setVars();
        this.bindEvents();
    },

    setVars: function() {
    },

    bindEvents: function() {
        var $video = $('#bg-video');
        var $videoPlayer = $('.video-player');
        var $button = $('.btn-clip');

        $video.on('ended', function(e) {
            console.log('video ended');
            $video.remove();
            $videoPlayer.addClass('stillframe-bg');
            $button.removeClass('hide');
        });

        $button.on('click', function(e) {
            var clipNumber = $(this).attr('id');
            console.log('playing clip ' + clipNumber[clipNumber.length-1]);
        });

        $button.on('mouseenter', function(e) {
            $(this).css('backgroundColor', 'red');
        });
        $button.on('mouseleave', function(e) {
            $(this).css('backgroundColor', 'blue');
        });
    }
};

SITE.init();
