(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"./public/js/src/scripts.js":[function(require,module,exports){
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

},{}]},{},["./public/js/src/scripts.js"]);
