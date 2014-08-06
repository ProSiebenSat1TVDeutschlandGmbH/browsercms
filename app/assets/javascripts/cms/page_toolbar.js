//
//  Required javascript for editing pages. Similar to toolbar.js, but adds additional features.
//
//= require jquery
//= require jquery.ui.all
//= require jquery.cookie
//= require jquery.selectbox
//= require jquery.exists
//= require jquery.taglist
//= require cms/core_library
//= require cms/attachment_manager
//= require bootstrap
//= require cms/toolbar

jQuery(function($){
  // resize iframe according page height
  if ($("#page_content").length > 0) {
    if (window.addEventListener) {
      window.addEventListener("load", resizeIFrameAccordingBodyHeight, false);
      window.addEventListener("resize", resizeIFrameAccordingBodyHeight, false);
    } else if (window.attachEvent) {
      window.attachEvent("onload", resizeIFrameAccordingBodyHeight);
      window.attachEvent("onresize", resizeIFrameAccordingBodyHeight);
    }
  }
});

function resizeIFrameAccordingBodyHeight() {
  var D = document;
  var documentHeight = Math.min(
    Math.max(D.body.scrollHeight, D.documentElement.scrollHeight),
    Math.max(D.body.offsetHeight, D.documentElement.offsetHeight),
    Math.max(D.body.clientHeight, D.documentElement.clientHeight)
  );
  var iFrameHeight = documentHeight - $("#page_content_toolbar").offset().top - $("#page_content_toolbar").height();
  $("#page_content").css("height", iFrameHeight + "px");
}