// ==UserScript==
// @name         GameFAQs Move Message Options
// @namespace    gfaqs_movoptions
// @version      1.5.1
// @description  Moves the links for delete, close, edit, report to post header
// @author       Littlegator
// @grant        none
// @require     http://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js
// @require     https://ajax.googleapis.com/ajax/libs/jqueryui/1.11.3/jquery-ui.min.js
// @downloadURL http://gates.coffee/gfaqs_move_msg_options.user.js
// @include http://www.gamefaqs.com/boards/*
// ==/UserScript==
 
/* 
    The MIT License (MIT)

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in
    all copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
    THE SOFTWARE.

*/

var allPosts = document.querySelectorAll ("td.msg");

for (var J = allPosts.length - 1;  J >= 0;  --J) {
    if(allPosts[J].querySelector("div.msg_body_box")) {
        var curOptions = allPosts[J].querySelector("span.options");
        var curInfoBox = allPosts[J].querySelector("div.msg_infobox");

        curInfoBox.appendChild(curOptions);
    }
    
    var msgBelow = allPosts[J].querySelector('div.msg_below');

    if(msgBelow) {
        msgBelow.parentNode.removeChild(msgBelow);
    }
}

function addGlobalStyle(css) {
    var head, style;
    head = document.getElementsByTagName('head')[0];
    if (!head) { return; }
    style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = css;
    head.appendChild(style);
}

addGlobalStyle('span.postaction { margin-left: 5px ! important; margin-right: 5px ! important;}');
addGlobalStyle('span.options { float: right ! important; }');
addGlobalStyle('div.newbeta { margin-top: 3px ! important; }');
addGlobalStyle('div.newbeta { margin-bottom: 3px ! important; }');
