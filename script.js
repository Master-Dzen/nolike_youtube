// ==UserScript==
// @name         Удаление лайков
// @namespace    https://www.youtube.com/playlist?list=LL
// @version      0.1
// @description  Удаление лайков
// @author       Master-Dzen 
// @match        https://www.youtube.com/playlist?list=LL
// @icon         https://www.google.com/s2/favicons?domain=tampermonkey.net
// @grant        none
// ==/UserScript==

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function deleteLikedVideos() {
    'use strict';
    var items = document.querySelectorAll('#primary ytd-playlist-video-renderer yt-icon-button.dropdown-trigger > button[aria-label]');
    var out;

    for (var i = 0; i < items.length; i++) {
        items[i].click();
        out = setTimeout(function () {
            if (document.querySelector('tp-yt-paper-listbox.style-scope.ytd-menu-popup-renderer').lastElementChild) {
                document.querySelector('tp-yt-paper-listbox.style-scope.ytd-menu-popup-renderer').lastElementChild.click();
            }
        }, 100);
        await sleep(500); // sleep cause browser can not handle the process
        clearTimeout(out);
    }
}

deleteLikedVideos();
