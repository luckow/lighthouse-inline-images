// ==UserScript==
// @name           Lighthouse Inline Image Attachments
// @namespace      headinsky.dk
// @description    Show image attachments for Lighthouse tickets inline
// @include        https://*.lighthouseapp.com/*
// @require		   http://code.jquery.com/jquery-latest.js
// ==/UserScript==

var width = $("div#main div.attachments").width();

$("ul.attachment-list li.aimg a").each(function()
{
    img = document.createElement('img');
    img.setAttribute('src', this.getAttribute('href'));
    img.setAttribute('style','max-width: ' + (width-45) + 'px;');
    this.replaceChild(img, this.firstChild);
});
