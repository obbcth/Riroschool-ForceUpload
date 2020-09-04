// ==UserScript==
// @name         Riroschool-ForceUpload
// @namespace    http://github.com/obbcth
// @version      0.2
// @description  리로스쿨의 파일 첨부 금지를 우회하는 스크립트입니다.
// @author       Taehee Choi
// @match        https://*.riroschool.kr/*
// @grant        none
// ==/UserScript==

(function() {

    'use strict';

    var dxdx = '<tr><td class="item" style="border-top:dotted 1px #aaaaaa;">파일첨부</td><td class="content" style="border-top:dotted 1px #aaaaaa;"><table border="0" style="margin-top:5px;border-bottom:dotted 1px #aaaaaa;"><tbody><tr><td align="right" style="border-right-width:0px;" nowrap="">첨부1</td><td style="border-left-width:0px;padding-left:5px" nowrap=""><div style="position:relative; width:600px;"><input type="file" id="upfile" name="upfile[0]" style="width:400px; cursor:pointer;"></div></td></tr></tbody></table><table border="0" style="margin-top:5px;border-bottom:dotted 1px #aaaaaa;"><tbody><tr><td align="right" style="border-right-width:0px;" nowrap="">첨부2</td><td style="border-left-width:0px;padding-left:5px" nowrap=""><div style="position:relative; width:600px;"><input type="file" id="upfile" name="upfile[1]" style="width:400px; cursor:pointer;"></div></td></tr></tbody></table><table border="0" style="margin-top:5px;border-bottom:dotted 1px #aaaaaa;"><tbody><tr><td align="right" style="border-right-width:0px;" nowrap="">첨부3</td><td style="border-left-width:0px;padding-left:5px" nowrap=""><div style="position:relative; width:600px;"><input type="file" id="upfile" name="upfile[2]" style="width:400px; cursor:pointer;"></div></td></tr></tbody></table><table border="0" style="margin-top:5px;border-bottom:dotted 1px #aaaaaa;"><tbody><tr><td align="right" style="border-right-width:0px;" nowrap="">첨부4</td><td style="border-left-width:0px;padding-left:5px" nowrap=""><div style="position:relative; width:600px;"><input type="file" id="upfile" name="upfile[3]" style="width:400px; cursor:pointer;"></div></td></tr></tbody></table><table border="0" style="margin-top:5px;border-bottom:dotted 1px #aaaaaa;"><tbody><tr><td align="right" style="border-right-width:0px;" nowrap="">첨부5</td><td style="border-left-width:0px;padding-left:5px" nowrap=""><div style="position:relative; width:600px;"><input type="file" id="upfile" name="upfile[4]" style="width:400px; cursor:pointer;"></div></td></tr></tbody></table><br>&nbsp; &nbsp; * 업로드 가능한 파일 크기 : 30메가(Mb) 이하</td></tr>';
    var dx;
    var checkExist = setInterval(function() {
        try {
            if (window.frames['down'].document.getElementsByTagName("table")[0].textContent.includes("* 파일 첨부가 금지된 과제입니다.")) {
                console.log("Exists!");

                dx = window.frames['down'].document.getElementsByTagName("table")[2];
                dx.insertAdjacentHTML('beforeend', dxdx);
                window.frames['down'].document.getElementsByTagName("table")[0].getElementsByTagName("p")[2].remove();
            }
            else {
                console.log("Finding element...");
            }
        }
        catch (e) { }
        try {
            if (document.getElementsByTagName("table")[0].textContent.includes("* 파일 첨부가 금지된 과제입니다.")){
                console.log("Exists!");

                dx = document.getElementsByTagName("table")[2];
                dx.insertAdjacentHTML('beforeend', dxdx);
                document.getElementsByTagName("table")[0].getElementsByTagName("p")[2].remove();
            }
            else
            {
                console.log("Finding element...");
            }
        }
        catch (e) { }
    }, 500);
})();
