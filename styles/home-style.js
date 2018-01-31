import variables from './variables'
export default `
    /* http://meyerweb.com/eric/tools/css/reset/
       v2.0b1 | 201101
       NOTE: WORK IN PROGRESS
       USE WITH CAUTION AND TEST WITH ABANDON */

    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, figcaption, figure,
    footer, header, hgroup, menu, nav, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        outline: 0;
        vertical-align: baseline;
    }
    a{
        cursor: pointer;
    }
    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure,
    footer, header, hgroup, menu, nav, section {
        display: block;
    }
    ol, ul {
        list-style: none;
    }
    blockquote, q {
        quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }

    /* remember to define visible focus styles!
    :focus {
        outline: ?????;
    } */

    /* remember to highlight inserts somehow! */
    ins {
        text-decoration: none;
    }
    del {
        text-decoration: line-through;
    }

    table {
        border-collapse: collapse;
        border-spacing: 0;
    }

    body{
        font-family: 'Raleway', sans-serif;
        line-height: 1.4;
    }
    *{box-sizing: border-box;}
    .container{
        max-width:1170px;
        margin:0 auto;
        padding: 40px 25px;
        box-sizing: border-box;
        background: #fff;
    }
    /* Nav Menu */
    .clearfix:after{
        content: "";
        display: table;
        clear: both;
    }
    header{
        //background: rgba(0,0,0,0.3);
        background: #000;
        opacity:0.7;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        z-index: 9;
    }
    .logo {
        margin-left: 15px;
        margin-top: 15px;
        color: #fff;
        position: relative;
        float: left;
        text-decoration: none;
    }
    .logo .logo-text {
        display: inline-block;
        padding-top: 14px;
        font-weight: 300;
    }
   .logo .logo-text i{
        background: #d95204;
        color: #fff;
        border-radius: 50%;
        font-size: 19px;
        width: 44px;
        height: 42px;
        text-align: center;
        padding: 11px 0 0;
    }
    .nav-menu {
        position: relative;
        float: right;
    }
    .nav-menu a {
        position: relative;
        display: inline-block;
        vertical-align: top;
        text-decoration: none;
        color: #222222;
        padding: 24px 28px;
        text-align: left;
        margin-left: auto;
        margin-right: auto;
        color: #fff;
        font-weight: 300;
    }
    .hero-banner{
        padding: 0px;
        background-color: #dbdbdb;
    }
    .hero-banner h1{
        text-transform: uppercase;
        color: #d95204;
        font-family: 'Raleway', sans-serif;
    }
    .hero-banner h3{
        color: #fff;
        font-weight: 600;
        background: rgba(33, 33, 33, 0.3);
        padding: 11px 20px;
        margin: 10px 20px;
        border-radius: 2px;
        
    }
    .hero-banner li{
        width: 100%;
        height:670px;
        overflow:hidden;
        position:relative;
    }
    .hero-banner li:before{
        content:'';
        width:100%;
        height:100%;
        // background:rgba(5,55,64,0.7);
        position: absolute;
        z-index:1;
    }
    img.fullwidth{
        width:100%;
        height: auto;
    }
    .banner-content{
        position:absolute;
        width:100%;
        max-width:600px;
        margin:0 auto;
        left:0;
        right: 0;
        top: 23%;
        z-index:1;
        color:#fff;
        text-align:center;
        line-height: 1.6;
    }
    .portpolio{
        background: #f7f7f7;
        position: relative;
        padding: 40px 0;
    }
    .portpolio h1, .portpolio h2{
        text-align: center;
        color: #000;
        margin-bottom: 5px;
    }
    .portpolio h1{
        text-transform: uppercase;
        font-family:'Raleway', sans-serif;
        padding-bottom: 20px;
        margin-bottom:20px;
        position: relative;
        
    }
    .portpolio h1:after{
        position: absolute;
        content: '';
        text-align: center;
        left: 0;
        right: 0;
        bottom: 0;
        width: 100px;
        background: #d95204;
        height: 1px;
        margin:0 auto;
        
    }
    .portpolio h2{
        font-weight: 300;
        color:#7b7b7b;
        font-size: 18px;
    }
    .portpolio p{
        margin-top:5px;
        font-size:13px;
        line-height: 19px;
    }
    .port-bx{
        width: 48%;
        float: left;
        background: #fff;
        margin-top:34px;
        padding: 25px 15px;
        position:  relative;
        // box-shadow: 0 1px 6px rgba(5,55,64,0.8);
    }
   
    
    .port-bx:nth-child(even){
        margin-left:3%;
    }
    .port-bx .image{
        float: left;
        width: 26%;
        float: left;
        width: 100px;
        color: #fff;
        background: #d95204;
        border-radius: 50%;
        height: 100px;
        padding: 25px 0;
        text-align: center;
        font-size: 40px;
    }
    .port-bx .image img{
        width: 100%;
        height: auto;
    }
    .port-bx .px-desc{
        float: right;
        width: 72%;
        position:relative;
    }
    .port-bx h3{
        color: #d95204;
        text-transform: uppercase;
        font-weight: 400;
        position:  relative;
        display: block;
        margin-bottom: 25px;
    }

    .port-bx .px-desc h3:after {
        position:relative;
        content: '';
        width : 50px;
        left:0;
        bottom :-10px;
        height:1px;
        background: #7b7b7b;
        display:block;
        z-index : 99;
      }


    footer {
        background-color: #fff;
        // background: rgba(5,55,64,0.9);
        padding-top: 50px;
    }
    footer{
        color: #7b7b7b;
        text-align: center;
    }
    footer .links a{
        color: inherit;
        text-decoration:none;
        margin: 0 10px;
        font-size: 14px;
    }
    .s-share{
        text-align: center;
        margin-top: 22px;
    }
    .s-share ul li{
        display: inline-block;
        margin: 0 12px;
    }
    .s-share ul li a{
        font-size: 20px;
        display: block;
        background: #d95204;
        color: #fff;
        border-radius: 50%;
        width: 36px;
        height: 36px;
        vertical-align: middle;
        padding-top: 5px;
        text-align: center;
    }
    .copywrite{
        background: #7b7b7b;
        padding: 15px 0;
        margin-top: 40px;
        color: #fff;
    }
    footer p{
        color: inherit;
        margin: 0;
        font-size: 13px;
        font-weight: 300;
    }
    /*about page css start here*/
    .center {
        text-align: center;
    }
    .flt-lft{
        float:left;
    }
    .flt-rgt {
        float:right;
    }
    .about{
        background-color:#f8f8f8;
    }
    .about-page {
        width: 100%;
        max-width:960px;
        margin: 78px auto 0;
        position: relative;
        z-index: 5;
    }
    .about-page .head h1{
        font-size: 30px;
        padding: 30px 0 10px 0;
        color: #000;
        font-family:'Raleway', sans-serif ;
        font-weight: 500px;
        text-transform: uppercase;
        position: relative;
    }

    .about-page .head h1:after{
        position: absolute;
        content: '';
        text-align: center;
        left: 0;
        right: 0;
        bottom: 0;
        width: 100px;
        background: #d95204;
        height: 1px;
        margin: 0 auto;
    }


    .about-page .about-content  {
        margin-bottom: 25px;
    }
    .about-page .about-content-right{
        width: 100%;
        text-align: left;
        padding: 20px 20px;
        box-sizing: border-box;
        float:right;
    }

    .about-page .about-content-left h2 {
        font-size:18px;
        font-family: 'Raleway', sans-serif;
        font-weight: 500;
        margin-bottom: 5px;
    }

    .about-page .about-content-left p {
        font-size:14px;
        font-family: 'Raleway', sans-serif;
        font-weight: 300;
        color: #666;
    }

    .about-page .about-content-left{
        width:100%;
        float:left;
        line-height: 0;
        position: relative;
        align-self :baseline;
    }
    
    .about-content-left img{
        width: 100%;
        height: auto;
        max-height: 250px;
    }

    .about-page .thumbnail-content{
       width:100%;
       padding : 25px 0;


    }

    .about-page .thumbnail-bx{
        width: 48%;
        float: left;
        margin: 0 1% 20px;
        background: #fff;
        box-sizing: border-box;
        display: flex;
        flex-wrap: wrap-reverse;
        min-height: 480px;

    }
    .about-page .thumbnail-bx h3{
        font-size:16px;
        color: #d95204;
        font-family: 'Raleway', sans-serif;
        font-weight: 400;
        text-transform: uppercase;
        margin-bottom: 25px;
    }

    .about-page .thumbnail-bx h3:after{
        position: relative;
        content: "";
        width: 50px;
        left: 0px;
        bottom: -8px;
        height: 1px;
        display: block;
        z-index: 99;
        background: #7b7b7b;
    }

    .about-page .thumbnail-bx p{
        font-size:13px;
        line-height:19px;
        font-family: 'Raleway', sans-serif;
        font-weight: 300;
        margin-bottom: 25px;
    }

    /* contact us page css start here*/

    .contact-us{

        background-color:#f8f8f8;
        padding: 90px 0 100px 0;
        text-align:center;
    }

    .contact-us .contact-us-page{
        width: 100%;
        margin: 78px auto 0;
        color: #25BAD0;
        font-family: 'Raleway', sans-serif;
        font-weight: 500;
        padding: 0 0 40px 0;
    }

    .contact-us .contact-us-page h1{
        font-family: 'Raleway', sans-serif;
        font-weight: 500;
        text-transform: uppercase;
        padding-bottom: 20px;
        margin-bottom: 20px;
        position: relative;
        color: #000;
    }
    .contact-us .contact-us-page h1:after{
        position: absolute;
        content: '';
        text-align: center;
        left: 0;
        right: 0;
        bottom: 0;
        width: 100px;
        background: #d95204;
        height: 1px;
        margin: 0 auto;
    }

    .contact-us .address {
        width: 500px;
        margin: 0 auto;
        padding: 50px;
        background:  #fff;
        box-sizing: border-box;
    }

    .contact-us .address h2{
        font-family: 'Raleway', sans-serif;
        font-weight: 400;
        font-size:18px;
        margin-bottom: 15px;
        color: #666;
        display:inline-block;

    }

    .contact-us .address .email-id{
        display:block;
    }

    .contact-us .address .email-id a{
        color: #d95204;
        border: 1px solid #d95204;
        background: #ffffff;
        display: inline-block;
        padding: 10px 15px;
        text-decoration: none;
        font-size: 13px;
        margin-top:15px;
    }


    .contact-us .map-sec {
        width:100%;
        height: 450px;
        margin:0 auto;
        box-sizzing: border-box;
        background-color: #ccc;
        position: relative;
    }
    .contact-us .map-sec:before{
        content:'';
        width:100%;
        height:100%;
        background:rgba(5,55,64,0.5);
        position: absolute;
    }
    .contact-us .map-sec iframe{
        width: 100%;
        height:100%;
    }
    @media screen and (max-width: 1000px){
        .hero-banner li{
            height: 500px;
        }
    }
    @media screen and (max-width: 860px){
        .hero-banner li{
            height: 400px;
        }
        .port-bx{
            width: 100%;
            max-width: 500px;
            float:none;
            margin:25px auto;
        }
        .port-bx:nth-child(even){
            margin: 0 auto;
        }
    }
    @media screen and (max-width: 600px){
        .hero-banner li{
            height: 300px;
        }
    }
`