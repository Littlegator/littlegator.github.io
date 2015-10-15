// ==UserScript==
// @name         GameFAQs Remove Signatures
// @namespace    gfaqs_remsigs
// @version      1.2.2
// @description  GameFAQs new message format, remove signatures
// @author       Littlegator
// @grant        none
// @require     http://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js
// @require     https://ajax.googleapis.com/ajax/libs/jqueryui/1.11.3/jquery-ui.min.js
// @downloadURL http://gates.coffee/gfaqs_remove_sigs.user.js
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

var boardPosts = document.querySelectorAll ("div.msg_body");
for (var J = boardPosts.length - 1;  J >= 0;  --J) {
    var oldMsgBody   = boardPosts[J].innerHTML;
    var MsgSplit = oldMsgBody.split("---");
    var newMsgBody = MsgSplit[0];
   
    for(var I = 1; I < MsgSplit.length-1; ++I) {
        newMsgBody = newMsgBody.concat("---");
        newMsgBody = newMsgBody.concat(MsgSplit[I]);
    }
   
    boardPosts[J].innerHTML = newMsgBody;
}
