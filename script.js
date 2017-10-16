setInterval(function(){
if (document.getElementById('wide_column')) {
var width = document.getElementById('wide_column').offsetWidth;
}
if (document.getElementById('page_body')) {
var width = document.getElementById('page_body').offsetWidth;
}
if (document.getElementById('im_dialogs')) {
var width = document.getElementById('im_dialogs').offsetWidth;
}
var width = document.body.offsetWidth; 
document.getElementsByClassName('page_cover crisp_image _page_cover');
if (width>1292) {
if (document.getElementById('page_header')) {
document.getElementById('page_header').style.width ='calc(100% - 284px)'; 
}
if (document.getElementById('dev_top_nav')) {
document.getElementById('dev_top_nav').style.width ='calc(100% - 284px)'; 
}
var width1 = document.body.offsetWidth;
var width2 = document.getElementById('page_header').offsetWidth;
$('.im-right-menu').css({right: (width1-width2+30)/2+"px"});

if (document.getElementById('page_layout')) {
document.getElementById('page_layout').style.width = 'calc(100% - 284px)'; 
}
if (document.getElementById('page_body')) {
document.getElementById('page_body').style.width = 'calc(100% - 166px)'; 
}
var width = $("div.page_cover.crisp_image._page_cover").width();
$("div.page_cover.crisp_image._page_cover").height((200*width/795)+'px');
} else { 
if (document.getElementById('page_header')) {
document.getElementById('page_header').style.width = '960px';
} 
if (document.getElementById('dev_top_nav')) {
document.getElementById('dev_top_nav').style.width ='960px'; 
}
if (document.getElementById('page_layout')) {
document.getElementById('page_layout').style.width = '960px'; 
}
if (document.getElementById('page_body')) {
document.getElementById('page_body').style.width = '795px'; 
}
var width = $("div.page_cover.crisp_image._page_cover").width();
$("div.page_cover.crisp_image._page_cover").height('200px');
} 
$("div.page_post_sized_thumbs .clear_fix").width("100%");
$('.audio_section.audio_w_covers._audio_section._audio_section__current audio_section__current').width('calc(100% - 60px)');
var width = document.getElementById('page_layout').offsetWidth;
$("#audio_layer_tt").width(width-195+'px');
$('.im-page_classic.im-page .im-page--top-date-bar-wrap').css({width: '100%' })
$('._audio_page_content_block_wrap.audio_page_content_block_wrap.ui_scroll_container.ui_scroll_default_theme').css({width: '100%'})
},100);

window.AudioPlayerHTML5WebAudio.AudioPlayerHTML5.prototype._setFadeVolumeInterval = function(t) {
        if (t) {
            if (!this._fadeVolumeWorker && window.Worker && window.Blob) {
                var e = new Blob(["           var interval;           onmessage = function(e) {             clearInterval(interval);             if (e.data == 'start') {               interval = setInterval(function() { postMessage({}); }, 20);             }           }         "]);
                try {
                    this._fadeVolumeWorker = new Worker(window.URL.createObjectURL(e))
                } catch (i) {
                    this._fadeVolumeWorker = !1
                }
            }
            this._fadeVolumeWorker ? (this._fadeVolumeWorker.onmessage = t,
            this._fadeVolumeWorker.postMessage("start")) : this._fadeVolumeInterval = setInterval(t, 360)
        } else
            this._fadeVolumeWorker && (this._fadeVolumeWorker.terminate(),
            this._fadeVolumeWorker = null),
            this._fadeVolumeInterval && clearInterval(this._fadeVolumeInterval)
    }
