'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _variables = require('./variables');

var _variables2 = _interopRequireDefault(_variables);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = '\n    /* http://meyerweb.com/eric/tools/css/reset/\n       v2.0b1 | 201101\n       NOTE: WORK IN PROGRESS\n       USE WITH CAUTION AND TEST WITH ABANDON */\n\n    html, body, div, span, applet, object, iframe,\n    h1, h2, h3, h4, h5, h6, p, blockquote, pre,\n    a, abbr, acronym, address, big, cite, code,\n    del, dfn, em, img, ins, kbd, q, s, samp,\n    small, strike, strong, sub, sup, tt, var,\n    b, u, i, center,\n    dl, dt, dd, ol, ul, li,\n    fieldset, form, label, legend,\n    table, caption, tbody, tfoot, thead, tr, th, td,\n    article, aside, canvas, details, figcaption, figure,\n    footer, header, hgroup, menu, nav, section, summary,\n    time, mark, audio, video {\n        margin: 0;\n        padding: 0;\n        border: 0;\n        outline: 0;\n        vertical-align: baseline;\n    }\n    a{\n        cursor: pointer;\n    }\n    /* HTML5 display-role reset for older browsers */\n    article, aside, details, figcaption, figure,\n    footer, header, hgroup, menu, nav, section {\n        display: block;\n    }\n    ol, ul {\n        list-style: none;\n    }\n    blockquote, q {\n        quotes: none;\n    }\n    blockquote:before, blockquote:after,\n    q:before, q:after {\n        content: \'\';\n        content: none;\n    }\n\n    /* remember to define visible focus styles!\n    :focus {\n        outline: ?????;\n    } */\n\n    /* remember to highlight inserts somehow! */\n    ins {\n        text-decoration: none;\n    }\n    del {\n        text-decoration: line-through;\n    }\n\n    table {\n        border-collapse: collapse;\n        border-spacing: 0;\n    }\n\n    body{\n        font-family: \'Raleway\', sans-serif;\n        line-height: 1.4;\n    }\n    *{box-sizing: border-box;}\n    .container{\n        max-width:1170px;\n        margin:0 auto;\n        padding: 40px 25px;\n        box-sizing: border-box;\n        background: #fff;\n    }\n    /* Nav Menu */\n    .clearfix:after{\n        content: "";\n        display: table;\n        clear: both;\n    }\n    header{\n        //background: rgba(0,0,0,0.3);\n        background: #000;\n        opacity:0.7;\n        position: fixed;\n        top: 0;\n        left: 0;\n        width: 100%;\n        z-index: 9;\n    }\n    .logo {\n        margin-left: 25px;\n        margin-top: 13px;\n        color: #fff;\n        position: relative;\n        float: left;\n        text-decoration: none;\n        width: 170px;\n        display: block;\n        height: 50px;\n    }\n    .logo img{\n        width:100%;\n        height: auto;\n    }\n\n\n    .logo .logo-text {\n        display: inline-block;\n        padding-top: 14px;\n        font-weight: 300;\n    }\n   .logo .logo-text i{\n        background: #d95204;\n        color: #fff;\n        border-radius: 50%;\n        font-size: 19px;\n        width: 44px;\n        height: 42px;\n        text-align: center;\n        padding: 11px 0 0;\n    }\n    .nav-menu {\n        position: relative;\n        float: right;\n    }\n    .nav-menu a {\n        position: relative;\n        display: inline-block;\n        vertical-align: top;\n        text-decoration: none;\n        color: #222222;\n        padding: 24px 28px;\n        text-align: left;\n        margin-left: auto;\n        margin-right: auto;\n        color: #fff;\n        font-weight: 300;\n    }\n    .hero-banner{\n        padding: 0px;\n        background-color: #dbdbdb;\n    }\n    .hero-banner h1{\n        text-transform: uppercase;\n        color: #d95204;\n        font-family: \'Raleway\', sans-serif;\n    }\n    .hero-banner h3{\n        color: #fff;\n        font-weight: 600;\n        background: rgba(33, 33, 33, 0.3);\n        padding: 11px 20px;\n        margin: 10px 20px;\n        border-radius: 2px;\n        \n    }\n    .hero-banner li{\n        width: 100%;\n        height:670px;\n        overflow:hidden;\n        position:relative;\n    }\n    .hero-banner li:before{\n        content:\'\';\n        width:100%;\n        height:100%;\n        // background:rgba(5,55,64,0.7);\n        position: absolute;\n        z-index:1;\n    }\n    img.fullwidth{\n        width:100%;\n        height: auto;\n    }\n    .banner-content{\n        position:absolute;\n        width:100%;\n        max-width:600px;\n        margin:0 auto;\n        left:0;\n        right: 0;\n        top: 23%;\n        z-index:1;\n        color:#fff;\n        text-align:center;\n        line-height: 1.6;\n    }\n    .portpolio{\n        background: #f7f7f7;\n        position: relative;\n        padding: 40px 0;\n    }\n    .portpolio h1, .portpolio h2{\n        text-align: center;\n        color: #000;\n        margin-bottom: 5px;\n    }\n    .portpolio h1{\n        text-transform: uppercase;\n        font-family:\'Raleway\', sans-serif;\n        padding-bottom: 20px;\n        margin-bottom:20px;\n        position: relative;\n        \n    }\n    .portpolio h1:after{\n        position: absolute;\n        content: \'\';\n        text-align: center;\n        left: 0;\n        right: 0;\n        bottom: 0;\n        width: 100px;\n        background: #d95204;\n        height: 1px;\n        margin:0 auto;\n        \n    }\n    .portpolio h2{\n        font-weight: 300;\n        color:#7b7b7b;\n        font-size: 18px;\n    }\n    .portpolio p{\n        margin-top:5px;\n        font-size:13px;\n        line-height: 19px;\n    }\n    .port-bx{\n        width: 48%;\n        float: left;\n        background: #fff;\n        margin-top:34px;\n        padding: 25px 15px;\n        position:  relative;\n        // box-shadow: 0 1px 6px rgba(5,55,64,0.8);\n    }\n   \n    \n    .port-bx:nth-child(even){\n        margin-left:3%;\n    }\n    .port-bx .image{\n        float: left;\n        width: 26%;\n        float: left;\n        width: 100px;\n        color: #fff;\n        background: #d95204;\n        border-radius: 50%;\n        height: 100px;\n        padding: 25px 0;\n        text-align: center;\n        font-size: 40px;\n    }\n    .port-bx .image img{\n        width: 100%;\n        height: auto;\n    }\n    .port-bx .px-desc{\n        float: right;\n        width: 72%;\n        position:relative;\n    }\n    .port-bx h3{\n        color: #d95204;\n        text-transform: uppercase;\n        font-weight: 400;\n        position:  relative;\n        display: block;\n        margin-bottom: 25px;\n    }\n\n    .port-bx .px-desc h3:after {\n        position:relative;\n        content: \'\';\n        width : 50px;\n        left:0;\n        bottom :-10px;\n        height:1px;\n        background: #7b7b7b;\n        display:block;\n        z-index : 99;\n      }\n\n\n    footer {\n        background-color: #fff;\n        // background: rgba(5,55,64,0.9);\n        padding-top: 50px;\n    }\n    footer{\n        color: #7b7b7b;\n        text-align: center;\n    }\n    footer .links a{\n        color: inherit;\n        text-decoration:none;\n        margin: 0 10px;\n        font-size: 14px;\n    }\n    .s-share{\n        text-align: center;\n        margin-top: 22px;\n    }\n    .s-share ul li{\n        display: inline-block;\n        margin: 0 12px;\n    }\n    .s-share ul li a{\n        font-size: 20px;\n        display: block;\n        background: #d95204;\n        color: #fff;\n        border-radius: 50%;\n        width: 36px;\n        height: 36px;\n        vertical-align: middle;\n        padding-top: 5px;\n        text-align: center;\n    }\n    .copywrite{\n        background: #7b7b7b;\n        padding: 15px 0;\n        margin-top: 40px;\n        color: #fff;\n    }\n    footer p{\n        color: inherit;\n        margin: 0;\n        font-size: 13px;\n        font-weight: 300;\n    }\n    /*about page css start here*/\n    .center {\n        text-align: center;\n    }\n    .flt-lft{\n        float:left;\n    }\n    .flt-rgt {\n        float:right;\n    }\n    .about{\n        background-color:#f8f8f8;\n    }\n    .about-page {\n        width: 100%;\n        max-width:960px;\n        margin: 78px auto 0;\n        position: relative;\n        z-index: 5;\n    }\n    .about-page .head h1{\n        font-size: 30px;\n        padding: 30px 0 10px 0;\n        color: #000;\n        font-family:\'Raleway\', sans-serif ;\n        font-weight: 500px;\n        text-transform: uppercase;\n        position: relative;\n    }\n\n    .about-page .head h1:after{\n        position: absolute;\n        content: \'\';\n        text-align: center;\n        left: 0;\n        right: 0;\n        bottom: 0;\n        width: 100px;\n        background: #d95204;\n        height: 1px;\n        margin: 0 auto;\n    }\n\n\n    .about-page .about-content  {\n        margin-bottom: 25px;\n    }\n    .about-page .about-content-right{\n        width: 100%;\n        text-align: left;\n        padding: 20px 20px;\n        box-sizing: border-box;\n        float:right;\n    }\n\n    .about-page .about-content-left h2 {\n        font-size:18px;\n        font-family: \'Raleway\', sans-serif;\n        font-weight: 500;\n        margin-bottom: 5px;\n    }\n\n    .about-page .about-content-left p {\n        font-size:14px;\n        font-family: \'Raleway\', sans-serif;\n        font-weight: 300;\n        color: #666;\n    }\n\n    .about-page .about-content-left{\n        width:100%;\n        float:left;\n        line-height: 0;\n        position: relative;\n        align-self :baseline;\n    }\n    \n    .about-content-left img{\n        width: 100%;\n        height: auto;\n        max-height: 250px;\n    }\n\n    .about-page .thumbnail-content{\n       width:100%;\n       padding : 25px 0;\n\n\n    }\n\n    .about-page .thumbnail-bx{\n        width: 48%;\n        float: left;\n        margin: 0 1% 20px;\n        background: #fff;\n        box-sizing: border-box;\n        display: flex;\n        flex-wrap: wrap-reverse;\n        min-height: 480px;\n\n    }\n    .about-page .thumbnail-bx h3{\n        font-size:16px;\n        color: #d95204;\n        font-family: \'Raleway\', sans-serif;\n        font-weight: 400;\n        text-transform: uppercase;\n        margin-bottom: 25px;\n    }\n\n    .about-page .thumbnail-bx h3:after{\n        position: relative;\n        content: "";\n        width: 50px;\n        left: 0px;\n        bottom: -8px;\n        height: 1px;\n        display: block;\n        z-index: 99;\n        background: #7b7b7b;\n    }\n\n    .about-page .thumbnail-bx p{\n        font-size:13px;\n        line-height:19px;\n        font-family: \'Raleway\', sans-serif;\n        font-weight: 300;\n        margin-bottom: 25px;\n    }\n\n    /* contact us page css start here*/\n\n    .contact-us{\n\n        background-color:#f8f8f8;\n        padding: 90px 0 100px 0;\n        text-align:center;\n    }\n\n    .contact-us .contact-us-page{\n        width: 100%;\n        margin: 78px auto 0;\n        color: #25BAD0;\n        font-family: \'Raleway\', sans-serif;\n        font-weight: 500;\n        padding: 0 0 40px 0;\n    }\n\n    .contact-us .contact-us-page h1{\n        font-family: \'Raleway\', sans-serif;\n        font-weight: 500;\n        text-transform: uppercase;\n        padding-bottom: 20px;\n        margin-bottom: 20px;\n        position: relative;\n        color: #000;\n    }\n    .contact-us .contact-us-page h1:after{\n        position: absolute;\n        content: \'\';\n        text-align: center;\n        left: 0;\n        right: 0;\n        bottom: 0;\n        width: 100px;\n        background: #d95204;\n        height: 1px;\n        margin: 0 auto;\n    }\n\n    .contact-us .address {\n        width: 500px;\n        margin: 0 auto;\n        padding: 50px;\n        background:  #fff;\n        box-sizing: border-box;\n    }\n\n    .contact-us .address h2{\n        font-family: \'Raleway\', sans-serif;\n        font-weight: 400;\n        font-size:18px;\n        margin-bottom: 15px;\n        color: #666;\n        display:inline-block;\n\n    }\n\n    .contact-us .address .email-id{\n        display:block;\n    }\n\n    .contact-us .address .email-id a{\n        color: #d95204;\n        border: 1px solid #d95204;\n        background: #ffffff;\n        display: inline-block;\n        padding: 10px 15px;\n        text-decoration: none;\n        font-size: 13px;\n        margin-top:15px;\n    }\n\n\n    .contact-us .map-sec {\n        width:100%;\n        height: 450px;\n        margin:0 auto;\n        box-sizzing: border-box;\n        background-color: #ccc;\n        position: relative;\n    }\n    .contact-us .map-sec:before{\n        content:\'\';\n        width:100%;\n        height:100%;\n        background:rgba(5,55,64,0.5);\n        position: absolute;\n    }\n    .contact-us .map-sec iframe{\n        width: 100%;\n        height:100%;\n    }\n    @media screen and (max-width: 1000px){\n        .hero-banner li{\n            height: 500px;\n        }\n    }\n    @media screen and (max-width: 860px){\n        .hero-banner li{\n            height: 400px;\n        }\n        .port-bx{\n            width: 100%;\n            max-width: 500px;\n            float:none;\n            margin:25px auto;\n        }\n        .port-bx:nth-child(even){\n            margin: 0 auto;\n        }\n    }\n    @media screen and (max-width: 600px){\n        .hero-banner li{\n            height: 300px;\n        }\n    }\n';