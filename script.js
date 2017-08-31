window.onload = function () {
var width = document.body.offsetWidth; 
document.getElementsByClassName('page_cover crisp_image _page_cover');
if (width>1292) {
if (document.getElementById('page_header')) {
document.getElementById('page_header').style.width ='calc(100% - 284px)'; 
}
if (document.getElementById('dev_top_nav')) {
document.getElementById('dev_top_nav').style.width ='calc(100% - 284px)'; 
}
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
//var width = $('div.ui_search_input_block').width();
$("#audio_layer_tt").width(width);
//$(".page_post_sized_thumbs.clear_fix").marginLeft('50%');
$("div.page_post_sized_thumbs .clear_fix").width("100%");
$('.audio_section.audio_w_covers._audio_section._audio_section__current audio_section__current').width('calc(100% - 44px)');
};
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
$("#audio_layer_tt").width(width);




},100);
