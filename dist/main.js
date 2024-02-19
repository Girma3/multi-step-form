/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/fonts/ubuntu-v20-latin-regular.woff2 */ "./src/assets/fonts/ubuntu-v20-latin-regular.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/images/bg-sidebar-desktop.svg */ "./src/assets/images/bg-sidebar-desktop.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/images/bg-sidebar-mobile.svg */ "./src/assets/images/bg-sidebar-mobile.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* ubuntu-regular - latin */
@font-face {
    font-display: swap; 
    font-family: 'Ubuntu';
    font-style: normal;
    font-weight: 400;
    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format('woff2'); 
  }
body{
    background-color:  hsl(0, 0%, 100%);
    min-height: 100vh;
    max-width: 100vw;
    font-family: 'Ubuntu';
    display: grid;
    margin: 0.5rem;
    grid-template-columns: 1fr 2fr;
    color: hsl(213, 96%, 18%);
}
/* nav style */

nav{
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: bottom;
    height: 95vh;
    border-radius: 0.5rem;
  }
ul{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    list-style: none;
}
li{
    margin: 1rem;
    width: 100%;
}
.nav-holder{
    display: flex;
    align-items: center;
    gap: 1rem;
}
.step-name{
    color: white;
    font-size: 1rem;
    font-weight: 700;
}
.step-name:hover{
    text-shadow: 2px 2px  rgb(101, 5, 118);
    }
.dot{
    width: 2rem;
    height: 2rem;
    color: white;
    border: 2px rgb(255, 255, 255) solid;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    background-color: inherit;
    }
    .dot:hover{
        border: rgb(232, 31, 247) solid 3px;
    }
.step-num{
    color: hsl(228, 100%, 84%);
    font-weight: 500;
}
h1{
    margin: 0;
    color:hsl(213, 96%, 18%);
}
.instruction, .plan-fee, .add-plan , .confirm-text {
    color:hsl(231, 11%, 63%) ;
    font-size: 1rem;
    font-weight: 700;
    }
    .confirm-text{
        font-weight: 400;
    }

.back-btn{
    color:hsl(231, 11%, 63%) ; 
}
/* personal info form */
.step-one, .step-two, .tab-three, .tab-four , .step-five {
    display: flex;
    margin: 1rem;
    flex-direction: column;
    background-color: hsl(0, 0%, 100%);
    padding: 1rem;

     }
  .error-msg{
    margin: 1px;
    width: 60%;
    color:  hsl(354, 84%, 57%);
    text-align: end;
}

.label-holder{
    display: flex;
    flex-direction: column;
    margin: 0.3rem;
    
}
input{
    width: 60%;
   border: 1px rgb(55, 55, 55) solid;
   padding: 0.6rem;
   border-radius: 0.5rem;
   color:hsl(214, 93%, 12%);
   font-weight: 500;
   font-size: 1rem;
 }
label{
    color:hsl(213, 96%, 18%);;
}
.invalid{
    border: 2px  hsl(354, 84%, 57%) solid;
   }
.valid{
    border: 2px green  solid;
   }
   .btn-holder{
    width: 64%;
    display: flex;
    justify-content: end;
    margin-top: 3rem;
  }
    input:focus{
        border:3px solid rgb(0, 4, 255);
        }
    /* tab two */
    .plans{
        display: flex;
        gap: 1rem;
        flex-wrap: wrap;
        }
   .plan-holder{
        border: 1px solid  hsl(213, 96%, 18%);
        display: flex;
        flex-direction: column;
        align-items:flex-start;
        width: 200px;
        height: 190px;
        padding: 1rem;
        border-radius: 1rem;
        cursor: pointer;
    }
   .plan-holder:hover{
        background-color: hsl(229, 24%, 87%);
        border: 2px solid hsl(243, 100%, 62%);
   }
   .about-plan{
        font-weight: 500;
        width: fit-content;
   }
   .plan-detail, .about-plan{
        display: flex;
        flex-direction: column;
        gap: 0.3rem;
        align-items: flex-start;
   }
   .plan-name{
        font-weight: 700;
        color: hsl(213, 96%, 18%);
        font-size: 1rem;
   }
   .icon-holder{
        margin-right: 1.5rem;
   } 
   .toggle-holder{
        display: flex;
        gap: 1rem;
        margin: 1rem;
        align-items: center;
        justify-content: center;
        border-radius:5px ;
        background-color:hsl(229, 24%, 87%);
        padding: 0.5rem;
        border-radius: 0.5rem;
    }
   .toggle{
        display: inline-block;
        position: relative;
        width: 50px;
        height: 30px;
        background-color:hsl(213, 96%, 18%);
        border: none;
        border-radius: 20px;
        transition: all 0.5s;
    }
   .toggle::after{
        content: "";
        position: absolute;
        height: 20px;
        width: 20px;
        border-radius: 50%;
        top: 5px;
        left: 1px;
        background-color: hsl(0, 0%, 100%);
   }
  .checkbox:checked + .toggle::after{
        left: 25px;
     }
    .checkbox{
        display: none;
    }
    .nav-btns{
        display: flex;
        justify-content: space-between;
        align-items: baseline;
        margin: 1rem;
        background-color: hsl(0, 0%, 100%);
        border-radius: 0.5rem;
        width: 90%;
        padding: 0.6rem;

     }
    
    .tab-two-btn, .tab-three-btn, .tab-four-btn, .tab-four-confirm-btn , .tab-one-btn{
        padding: 1rem;
        background-color: hsl(213, 96%, 18%);
        color: azure;
        border: none;
        width: fit-content;
        border-radius: 0.5rem;
    }
   
   .about-adds{
        border: 2px solid  hsl(243, 100%, 62%);
        border-radius: 0.4rem;
        padding: 0.5rem;
        margin: 0.5rem;
       }
    .about-adds:hover{
        box-shadow: rgb(251, 0, 0) -1px 3px 3px;
    }
    .add-holder,.add-header{
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap:1rem;
    }
    .add-title{
        font-size: 1.5rem;
        font-weight: 400;
    }
    .about-plan{
        font-weight: 500;
    }
    .add-title,.add-plan{
        margin: 0;
    }
    .user-add{
        width: 1rem;
        height: 1rem;
        margin-top: 0.5rem;
    }
    /* tab four */
    .tab-four{
        margin: 1.5rem;
    }
    .summary-plan, .add-detail, .summary-total{
        display: flex;
        justify-content: space-between;
       padding: 0.5rem;
       color:hsl(213, 96%, 18%);
       
    }
    .summary-services{
        height: fit-content;
    }
   .add-detail > p{
    margin: 0;
   }
    
    .selected-plan{
        margin: 0;
        font-size: 1rem;
        padding-bottom: 0.5rem;

    }
    .summary-price{
        font-weight: 500;
        font-size: 1.2rem;
    }
    .change-plan{
        outline: none;
        border: none;
        padding: 0;
        background-color: inherit;
        cursor: pointer;
      
    }
    .change-plan:hover{
        border-bottom: 2px solid  hsl(243, 100%, 62%);
        color: hsl(243, 100%, 62%);
    }
    .add-name, .change-plan{
        color:hsl(231, 11%, 63%) ; 
        font-weight: 400;
        font-size: 1rem;
    }
    .online-price, .theme-price, .storage-price{
        font-size: 1rem;
        font-weight: 400;
    }
    .total-price{
        font-weight: 900;
        font-size: 1.5rem;
    }
    
    hr{
        margin: 1rem;
    }
    .service-holder{
        padding: 0.5rem;
        background-color: hsl(229, 24%, 87%);
        border-radius: 0.5rem;
        height: fit-content;
        }
    .back-btn{
        color:hsl(231, 11%, 63%) ; 
        background-color: hsl(231, 100%, 99%);
        }
    /* step five tab*/
    .step-five{
        justify-content: center;
        align-items: center;
        padding: 1rem;
        margin-top: 15%;
        
    }
    .confirm-text{
        text-align: center;
    }
@media (max-width:565px) {
    /* nav */
    body{
        grid-template-columns: 1fr;
        background-color: hsl(206, 94%, 87%);
        }
    nav{
        background-image:url(${___CSS_LOADER_URL_REPLACEMENT_2___}) ;
        background-position: top;
        height: 30vh;
        width: 100vw;
    }
    ul{
        flex-direction: row;
    }
   .nav-description{
        display: none;
    }
    /* step one */
    .step-one{
        position: absolute;
        bottom: 16%;
        border-radius: 0.5rem;
        width: 70%;
        max-height: 490px;
    }
    input{
        width: 80%;
    }
    .error-msg{
        width: 100%;
        text-align: start;
    }
    .step-two, .tab-three, .tab-four, .step-five{
        position: relative;
        border-radius: 0.5rem;
        width: 70%;
       }
       .step-two{
        bottom: 6rem;
       }
       .tab-three{
        bottom: 8rem;
       }
       .tab-four{
        bottom: 6.4rem;
        right: 1rem;
       }
       .step-five{
        bottom: 10rem;
       }
       
    .add-header{
        gap: 0.3rem;
    }
    /* step three */
    
    .about-adds{
       padding: 0.5rem;
       margin: 0;
       margin-bottom: 1rem;
       
    }
    
    .add-title{
        font-size: 1rem;
        font-weight: 400;
    }
    .add-plan{
        font-weight: 500;
        font-size: 0.7rem;
        }
   
    /* step two cards */
    .plans{
        flex-wrap: wrap;
        gap: 0.5rem;
    }
    .error-card{
        margin: 0;
        padding: 0;
    }
    .plan-fee{
        font-weight: 700;
        font-size: 0.7rem;
    }
 
.nav-btns{
    margin: 0;
    position: absolute;
    top: 28rem;
    right: 0.1rem;
}
.btn-holder{
    position: relative;
    top: 2rem;
    left: 35%;
}

.tab-four > .nav-btns{
    top: 28rem;
}
.service-holder{
    height: 270px;
}

    .plan-holder{
        flex-wrap: wrap;
        width: 100%;
        align-items: flex-start;
        justify-content: center;
        height: 84px;
        padding: 5px;
    }
    .about-plan {
       flex-direction: row;
        align-items: center;
        gap: 0.5rem;
    }
    .toggle-holder{
        margin: 0;
        margin-top: 3px;
    }
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA,2BAA2B;AAC3B;IACI,kBAAkB;IAClB,qBAAqB;IACrB,kBAAkB;IAClB,gBAAgB;IAChB,4DAAyE;EAC3E;AACF;IACI,mCAAmC;IACnC,iBAAiB;IACjB,gBAAgB;IAChB,qBAAqB;IACrB,aAAa;IACb,cAAc;IACd,8BAA8B;IAC9B,yBAAyB;AAC7B;AACA,cAAc;;AAEd;IACI,yDAA6D;IAC7D,4BAA4B;IAC5B,sBAAsB;IACtB,2BAA2B;IAC3B,YAAY;IACZ,qBAAqB;EACvB;AACF;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,uBAAuB;IACvB,gBAAgB;AACpB;AACA;IACI,YAAY;IACZ,WAAW;AACf;AACA;IACI,aAAa;IACb,mBAAmB;IACnB,SAAS;AACb;AACA;IACI,YAAY;IACZ,eAAe;IACf,gBAAgB;AACpB;AACA;IACI,sCAAsC;IACtC;AACJ;IACI,WAAW;IACX,YAAY;IACZ,YAAY;IACZ,oCAAoC;IACpC,kBAAkB;IAClB,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,eAAe;IACf,yBAAyB;IACzB;IACA;QACI,mCAAmC;IACvC;AACJ;IACI,0BAA0B;IAC1B,gBAAgB;AACpB;AACA;IACI,SAAS;IACT,wBAAwB;AAC5B;AACA;IACI,yBAAyB;IACzB,eAAe;IACf,gBAAgB;IAChB;IACA;QACI,gBAAgB;IACpB;;AAEJ;IACI,yBAAyB;AAC7B;AACA,uBAAuB;AACvB;IACI,aAAa;IACb,YAAY;IACZ,sBAAsB;IACtB,kCAAkC;IAClC,aAAa;;KAEZ;EACH;IACE,WAAW;IACX,UAAU;IACV,0BAA0B;IAC1B,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,cAAc;;AAElB;AACA;IACI,UAAU;GACX,iCAAiC;GACjC,eAAe;GACf,qBAAqB;GACrB,wBAAwB;GACxB,gBAAgB;GAChB,eAAe;CACjB;AACD;IACI,wBAAwB;AAC5B;AACA;IACI,qCAAqC;GACtC;AACH;IACI,wBAAwB;GACzB;GACA;IACC,UAAU;IACV,aAAa;IACb,oBAAoB;IACpB,gBAAgB;EAClB;IACE;QACI,+BAA+B;QAC/B;IACJ,YAAY;IACZ;QACI,aAAa;QACb,SAAS;QACT,eAAe;QACf;GACL;QACK,qCAAqC;QACrC,aAAa;QACb,sBAAsB;QACtB,sBAAsB;QACtB,YAAY;QACZ,aAAa;QACb,aAAa;QACb,mBAAmB;QACnB,eAAe;IACnB;GACD;QACK,oCAAoC;QACpC,qCAAqC;GAC1C;GACA;QACK,gBAAgB;QAChB,kBAAkB;GACvB;GACA;QACK,aAAa;QACb,sBAAsB;QACtB,WAAW;QACX,uBAAuB;GAC5B;GACA;QACK,gBAAgB;QAChB,yBAAyB;QACzB,eAAe;GACpB;GACA;QACK,oBAAoB;GACzB;GACA;QACK,aAAa;QACb,SAAS;QACT,YAAY;QACZ,mBAAmB;QACnB,uBAAuB;QACvB,kBAAkB;QAClB,mCAAmC;QACnC,eAAe;QACf,qBAAqB;IACzB;GACD;QACK,qBAAqB;QACrB,kBAAkB;QAClB,WAAW;QACX,YAAY;QACZ,mCAAmC;QACnC,YAAY;QACZ,mBAAmB;QACnB,oBAAoB;IACxB;GACD;QACK,WAAW;QACX,kBAAkB;QAClB,YAAY;QACZ,WAAW;QACX,kBAAkB;QAClB,QAAQ;QACR,SAAS;QACT,kCAAkC;GACvC;EACD;QACM,UAAU;KACb;IACD;QACI,aAAa;IACjB;IACA;QACI,aAAa;QACb,8BAA8B;QAC9B,qBAAqB;QACrB,YAAY;QACZ,kCAAkC;QAClC,qBAAqB;QACrB,UAAU;QACV,eAAe;;KAElB;;IAED;QACI,aAAa;QACb,oCAAoC;QACpC,YAAY;QACZ,YAAY;QACZ,kBAAkB;QAClB,qBAAqB;IACzB;;GAED;QACK,sCAAsC;QACtC,qBAAqB;QACrB,eAAe;QACf,cAAc;OACf;IACH;QACI,uCAAuC;IAC3C;IACA;QACI,aAAa;QACb,mBAAmB;QACnB,8BAA8B;QAC9B,QAAQ;IACZ;IACA;QACI,iBAAiB;QACjB,gBAAgB;IACpB;IACA;QACI,gBAAgB;IACpB;IACA;QACI,SAAS;IACb;IACA;QACI,WAAW;QACX,YAAY;QACZ,kBAAkB;IACtB;IACA,aAAa;IACb;QACI,cAAc;IAClB;IACA;QACI,aAAa;QACb,8BAA8B;OAC/B,eAAe;OACf,wBAAwB;;IAE3B;IACA;QACI,mBAAmB;IACvB;GACD;IACC,SAAS;GACV;;IAEC;QACI,SAAS;QACT,eAAe;QACf,sBAAsB;;IAE1B;IACA;QACI,gBAAgB;QAChB,iBAAiB;IACrB;IACA;QACI,aAAa;QACb,YAAY;QACZ,UAAU;QACV,yBAAyB;QACzB,eAAe;;IAEnB;IACA;QACI,6CAA6C;QAC7C,0BAA0B;IAC9B;IACA;QACI,yBAAyB;QACzB,gBAAgB;QAChB,eAAe;IACnB;IACA;QACI,eAAe;QACf,gBAAgB;IACpB;IACA;QACI,gBAAgB;QAChB,iBAAiB;IACrB;;IAEA;QACI,YAAY;IAChB;IACA;QACI,eAAe;QACf,oCAAoC;QACpC,qBAAqB;QACrB,mBAAmB;QACnB;IACJ;QACI,yBAAyB;QACzB,qCAAqC;QACrC;IACJ,iBAAiB;IACjB;QACI,uBAAuB;QACvB,mBAAmB;QACnB,aAAa;QACb,eAAe;;IAEnB;IACA;QACI,kBAAkB;IACtB;AACJ;IACI,QAAQ;IACR;QACI,0BAA0B;QAC1B,oCAAoC;QACpC;IACJ;QACI,yDAA4D;QAC5D,wBAAwB;QACxB,YAAY;QACZ,YAAY;IAChB;IACA;QACI,mBAAmB;IACvB;GACD;QACK,aAAa;IACjB;IACA,aAAa;IACb;QACI,kBAAkB;QAClB,WAAW;QACX,qBAAqB;QACrB,UAAU;QACV,iBAAiB;IACrB;IACA;QACI,UAAU;IACd;IACA;QACI,WAAW;QACX,iBAAiB;IACrB;IACA;QACI,kBAAkB;QAClB,qBAAqB;QACrB,UAAU;OACX;OACA;QACC,YAAY;OACb;OACA;QACC,YAAY;OACb;OACA;QACC,cAAc;QACd,WAAW;OACZ;OACA;QACC,aAAa;OACd;;IAEH;QACI,WAAW;IACf;IACA,eAAe;;IAEf;OACG,eAAe;OACf,SAAS;OACT,mBAAmB;;IAEtB;;IAEA;QACI,eAAe;QACf,gBAAgB;IACpB;IACA;QACI,gBAAgB;QAChB,iBAAiB;QACjB;;IAEJ,mBAAmB;IACnB;QACI,eAAe;QACf,WAAW;IACf;IACA;QACI,SAAS;QACT,UAAU;IACd;IACA;QACI,gBAAgB;QAChB,iBAAiB;IACrB;;AAEJ;IACI,SAAS;IACT,kBAAkB;IAClB,UAAU;IACV,aAAa;AACjB;AACA;IACI,kBAAkB;IAClB,SAAS;IACT,SAAS;AACb;;AAEA;IACI,UAAU;AACd;AACA;IACI,aAAa;AACjB;;IAEI;QACI,eAAe;QACf,WAAW;QACX,uBAAuB;QACvB,uBAAuB;QACvB,YAAY;QACZ,YAAY;IAChB;IACA;OACG,mBAAmB;QAClB,mBAAmB;QACnB,WAAW;IACf;IACA;QACI,SAAS;QACT,eAAe;IACnB;AACJ","sourcesContent":["/* ubuntu-regular - latin */\n@font-face {\n    font-display: swap; \n    font-family: 'Ubuntu';\n    font-style: normal;\n    font-weight: 400;\n    src: url('./assets/fonts/ubuntu-v20-latin-regular.woff2') format('woff2'); \n  }\nbody{\n    background-color:  hsl(0, 0%, 100%);\n    min-height: 100vh;\n    max-width: 100vw;\n    font-family: 'Ubuntu';\n    display: grid;\n    margin: 0.5rem;\n    grid-template-columns: 1fr 2fr;\n    color: hsl(213, 96%, 18%);\n}\n/* nav style */\n\nnav{\n    background-image: url(./assets/images/bg-sidebar-desktop.svg);\n    background-repeat: no-repeat;\n    background-size: cover;\n    background-position: bottom;\n    height: 95vh;\n    border-radius: 0.5rem;\n  }\nul{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    list-style: none;\n}\nli{\n    margin: 1rem;\n    width: 100%;\n}\n.nav-holder{\n    display: flex;\n    align-items: center;\n    gap: 1rem;\n}\n.step-name{\n    color: white;\n    font-size: 1rem;\n    font-weight: 700;\n}\n.step-name:hover{\n    text-shadow: 2px 2px  rgb(101, 5, 118);\n    }\n.dot{\n    width: 2rem;\n    height: 2rem;\n    color: white;\n    border: 2px rgb(255, 255, 255) solid;\n    border-radius: 50%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    cursor: pointer;\n    background-color: inherit;\n    }\n    .dot:hover{\n        border: rgb(232, 31, 247) solid 3px;\n    }\n.step-num{\n    color: hsl(228, 100%, 84%);\n    font-weight: 500;\n}\nh1{\n    margin: 0;\n    color:hsl(213, 96%, 18%);\n}\n.instruction, .plan-fee, .add-plan , .confirm-text {\n    color:hsl(231, 11%, 63%) ;\n    font-size: 1rem;\n    font-weight: 700;\n    }\n    .confirm-text{\n        font-weight: 400;\n    }\n\n.back-btn{\n    color:hsl(231, 11%, 63%) ; \n}\n/* personal info form */\n.step-one, .step-two, .tab-three, .tab-four , .step-five {\n    display: flex;\n    margin: 1rem;\n    flex-direction: column;\n    background-color: hsl(0, 0%, 100%);\n    padding: 1rem;\n\n     }\n  .error-msg{\n    margin: 1px;\n    width: 60%;\n    color:  hsl(354, 84%, 57%);\n    text-align: end;\n}\n\n.label-holder{\n    display: flex;\n    flex-direction: column;\n    margin: 0.3rem;\n    \n}\ninput{\n    width: 60%;\n   border: 1px rgb(55, 55, 55) solid;\n   padding: 0.6rem;\n   border-radius: 0.5rem;\n   color:hsl(214, 93%, 12%);\n   font-weight: 500;\n   font-size: 1rem;\n }\nlabel{\n    color:hsl(213, 96%, 18%);;\n}\n.invalid{\n    border: 2px  hsl(354, 84%, 57%) solid;\n   }\n.valid{\n    border: 2px green  solid;\n   }\n   .btn-holder{\n    width: 64%;\n    display: flex;\n    justify-content: end;\n    margin-top: 3rem;\n  }\n    input:focus{\n        border:3px solid rgb(0, 4, 255);\n        }\n    /* tab two */\n    .plans{\n        display: flex;\n        gap: 1rem;\n        flex-wrap: wrap;\n        }\n   .plan-holder{\n        border: 1px solid  hsl(213, 96%, 18%);\n        display: flex;\n        flex-direction: column;\n        align-items:flex-start;\n        width: 200px;\n        height: 190px;\n        padding: 1rem;\n        border-radius: 1rem;\n        cursor: pointer;\n    }\n   .plan-holder:hover{\n        background-color: hsl(229, 24%, 87%);\n        border: 2px solid hsl(243, 100%, 62%);\n   }\n   .about-plan{\n        font-weight: 500;\n        width: fit-content;\n   }\n   .plan-detail, .about-plan{\n        display: flex;\n        flex-direction: column;\n        gap: 0.3rem;\n        align-items: flex-start;\n   }\n   .plan-name{\n        font-weight: 700;\n        color: hsl(213, 96%, 18%);\n        font-size: 1rem;\n   }\n   .icon-holder{\n        margin-right: 1.5rem;\n   } \n   .toggle-holder{\n        display: flex;\n        gap: 1rem;\n        margin: 1rem;\n        align-items: center;\n        justify-content: center;\n        border-radius:5px ;\n        background-color:hsl(229, 24%, 87%);\n        padding: 0.5rem;\n        border-radius: 0.5rem;\n    }\n   .toggle{\n        display: inline-block;\n        position: relative;\n        width: 50px;\n        height: 30px;\n        background-color:hsl(213, 96%, 18%);\n        border: none;\n        border-radius: 20px;\n        transition: all 0.5s;\n    }\n   .toggle::after{\n        content: \"\";\n        position: absolute;\n        height: 20px;\n        width: 20px;\n        border-radius: 50%;\n        top: 5px;\n        left: 1px;\n        background-color: hsl(0, 0%, 100%);\n   }\n  .checkbox:checked + .toggle::after{\n        left: 25px;\n     }\n    .checkbox{\n        display: none;\n    }\n    .nav-btns{\n        display: flex;\n        justify-content: space-between;\n        align-items: baseline;\n        margin: 1rem;\n        background-color: hsl(0, 0%, 100%);\n        border-radius: 0.5rem;\n        width: 90%;\n        padding: 0.6rem;\n\n     }\n    \n    .tab-two-btn, .tab-three-btn, .tab-four-btn, .tab-four-confirm-btn , .tab-one-btn{\n        padding: 1rem;\n        background-color: hsl(213, 96%, 18%);\n        color: azure;\n        border: none;\n        width: fit-content;\n        border-radius: 0.5rem;\n    }\n   \n   .about-adds{\n        border: 2px solid  hsl(243, 100%, 62%);\n        border-radius: 0.4rem;\n        padding: 0.5rem;\n        margin: 0.5rem;\n       }\n    .about-adds:hover{\n        box-shadow: rgb(251, 0, 0) -1px 3px 3px;\n    }\n    .add-holder,.add-header{\n        display: flex;\n        align-items: center;\n        justify-content: space-between;\n        gap:1rem;\n    }\n    .add-title{\n        font-size: 1.5rem;\n        font-weight: 400;\n    }\n    .about-plan{\n        font-weight: 500;\n    }\n    .add-title,.add-plan{\n        margin: 0;\n    }\n    .user-add{\n        width: 1rem;\n        height: 1rem;\n        margin-top: 0.5rem;\n    }\n    /* tab four */\n    .tab-four{\n        margin: 1.5rem;\n    }\n    .summary-plan, .add-detail, .summary-total{\n        display: flex;\n        justify-content: space-between;\n       padding: 0.5rem;\n       color:hsl(213, 96%, 18%);\n       \n    }\n    .summary-services{\n        height: fit-content;\n    }\n   .add-detail > p{\n    margin: 0;\n   }\n    \n    .selected-plan{\n        margin: 0;\n        font-size: 1rem;\n        padding-bottom: 0.5rem;\n\n    }\n    .summary-price{\n        font-weight: 500;\n        font-size: 1.2rem;\n    }\n    .change-plan{\n        outline: none;\n        border: none;\n        padding: 0;\n        background-color: inherit;\n        cursor: pointer;\n      \n    }\n    .change-plan:hover{\n        border-bottom: 2px solid  hsl(243, 100%, 62%);\n        color: hsl(243, 100%, 62%);\n    }\n    .add-name, .change-plan{\n        color:hsl(231, 11%, 63%) ; \n        font-weight: 400;\n        font-size: 1rem;\n    }\n    .online-price, .theme-price, .storage-price{\n        font-size: 1rem;\n        font-weight: 400;\n    }\n    .total-price{\n        font-weight: 900;\n        font-size: 1.5rem;\n    }\n    \n    hr{\n        margin: 1rem;\n    }\n    .service-holder{\n        padding: 0.5rem;\n        background-color: hsl(229, 24%, 87%);\n        border-radius: 0.5rem;\n        height: fit-content;\n        }\n    .back-btn{\n        color:hsl(231, 11%, 63%) ; \n        background-color: hsl(231, 100%, 99%);\n        }\n    /* step five tab*/\n    .step-five{\n        justify-content: center;\n        align-items: center;\n        padding: 1rem;\n        margin-top: 15%;\n        \n    }\n    .confirm-text{\n        text-align: center;\n    }\n@media (max-width:565px) {\n    /* nav */\n    body{\n        grid-template-columns: 1fr;\n        background-color: hsl(206, 94%, 87%);\n        }\n    nav{\n        background-image:url(./assets/images/bg-sidebar-mobile.svg) ;\n        background-position: top;\n        height: 30vh;\n        width: 100vw;\n    }\n    ul{\n        flex-direction: row;\n    }\n   .nav-description{\n        display: none;\n    }\n    /* step one */\n    .step-one{\n        position: absolute;\n        bottom: 16%;\n        border-radius: 0.5rem;\n        width: 70%;\n        max-height: 490px;\n    }\n    input{\n        width: 80%;\n    }\n    .error-msg{\n        width: 100%;\n        text-align: start;\n    }\n    .step-two, .tab-three, .tab-four, .step-five{\n        position: relative;\n        border-radius: 0.5rem;\n        width: 70%;\n       }\n       .step-two{\n        bottom: 6rem;\n       }\n       .tab-three{\n        bottom: 8rem;\n       }\n       .tab-four{\n        bottom: 6.4rem;\n        right: 1rem;\n       }\n       .step-five{\n        bottom: 10rem;\n       }\n       \n    .add-header{\n        gap: 0.3rem;\n    }\n    /* step three */\n    \n    .about-adds{\n       padding: 0.5rem;\n       margin: 0;\n       margin-bottom: 1rem;\n       \n    }\n    \n    .add-title{\n        font-size: 1rem;\n        font-weight: 400;\n    }\n    .add-plan{\n        font-weight: 500;\n        font-size: 0.7rem;\n        }\n   \n    /* step two cards */\n    .plans{\n        flex-wrap: wrap;\n        gap: 0.5rem;\n    }\n    .error-card{\n        margin: 0;\n        padding: 0;\n    }\n    .plan-fee{\n        font-weight: 700;\n        font-size: 0.7rem;\n    }\n \n.nav-btns{\n    margin: 0;\n    position: absolute;\n    top: 28rem;\n    right: 0.1rem;\n}\n.btn-holder{\n    position: relative;\n    top: 2rem;\n    left: 35%;\n}\n\n.tab-four > .nav-btns{\n    top: 28rem;\n}\n.service-holder{\n    height: 270px;\n}\n\n    .plan-holder{\n        flex-wrap: wrap;\n        width: 100%;\n        align-items: flex-start;\n        justify-content: center;\n        height: 84px;\n        padding: 5px;\n    }\n    .about-plan {\n       flex-direction: row;\n        align-items: center;\n        gap: 0.5rem;\n    }\n    .toggle-holder{\n        margin: 0;\n        margin-top: 3px;\n    }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/tabs.js":
/*!*********************!*\
  !*** ./src/tabs.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UserPersonalInfo: () => (/* binding */ UserPersonalInfo),
/* harmony export */   UserPlanData: () => (/* binding */ UserPlanData),
/* harmony export */   UserServices: () => (/* binding */ UserServices),
/* harmony export */   addEvents: () => (/* binding */ addEvents),
/* harmony export */   changeColor: () => (/* binding */ changeColor),
/* harmony export */   changePrice: () => (/* binding */ changePrice),
/* harmony export */   functions: () => (/* binding */ functions),
/* harmony export */   isChecked: () => (/* binding */ isChecked),
/* harmony export */   isFormfilled: () => (/* binding */ isFormfilled),
/* harmony export */   isValueEmpty: () => (/* binding */ isValueEmpty),
/* harmony export */   selectedCard: () => (/* binding */ selectedCard),
/* harmony export */   validateForm: () => (/* binding */ validateForm)
/* harmony export */ });
// class to hold info
class UserPersonalInfo {
  constructor(options = {}) {
    this.name = options.name || "";
    this.email = options.email || "";
    this.phone = options.phone || "";
  }
}
class UserPlanData {
  constructor(options = {}) {
    this.plan = options.plan || false;
    // checkbox
    this.checkbox = options.checkbox || "";
    this.arcade = options.arcade || "";
    this.advanced = options.advanced || "";
    this.pro = options.pro || "";
    this.bonus = options.bonus || "none";
    this.selectedPlan = options.selectedPlan || "";
    this.monhtly = options.monthly || "";
    this.yearly = options.yearly || "";
  }

  yearlyPrice() {
    this.arcade = "$90/yr";
    this.advanced = "$120/yr";
    this.pro = "$150/yr";
  }

  monthlyPrice() {
    this.arcade = "$9/mo";
    this.advanced = "$12/mo";
    this.pro = "$15/mo";
  }

  choosenPlan() {
    if (this.plan === true) {
      this.yearlyPrice();
    } else if (this.plan === false) {
      this.monthlyPrice();
    }
  }

  style() {
    if (this.plan === false) {
      this.monthly = "hsl(213, 96%, 18%";
      this.yearly = "hsl(231, 11%, 63%)";
    } else if (this.plan === true) {
      this.monthly = "hsl(213, 96%, 18%";
      this.yearly = "hsl(231, 11%, 63%)";
    }
  }
}
class UserServices {
  constructor(options = {}) {
    // get plan if meonthly or yearly(true is monthly set in step 2 or userdata obj)
    this.addPlan = options.addPlan || false;
    //

    // checkbox value
    this.online = options.online || "";
    this.storage = options.storage || "";
    this.theme = options.theme || "";
    // price
    this.onlinePrice = options.onlinePrice || "";
    this.storagePrice = options.onlinePrice || "";
    this.themePrice = options.onlinePrice || "";
  }

  yearlyPrice() {
    this.onlinePrice = "+$10/yr";
    this.storagePrice = "+$20/yr";
    this.themePrice = "+$20/yr";
  }

  monthlyPrice() {
    this.onlinePrice = "+$1/mo";
    this.storagePrice = "+$2/mo";
    this.themePrice = "+$2/mo";
  }

  choosenPlan() {
    if (this.addPlan === true) {
      this.yearlyPrice();
    } else if (this.addPlan === false) {
      this.monthlyPrice();
    }
  }
}

const tabOne = function (obj) {
  const div = document.createElement("div");
  const personalInfo = ` 
    <div class="step-one">
        <div class="form-header">
        <div class="icon-holder"><img src="../src/assets/images/icon-advanced.svg" alt="icon for advanced plan" ></div>
            <h1>Personal Info</h1>
            <p class="instruction">please provide your name,email adress and phone number</p>
        </div>

        <div class="form-holder">
            <form class="personal-info-form">
                <div class="label-holder">
                    <label for="user-name">Name</label>
                    <p class="error-msg" data-error-msg=0></p>
              
                    <input type="text" id="user-name" name="user-name" class='user-info' data-user-name data-error=0 minlength="2"
                    
                  maxlength="20"  value="${obj.name}">
                </div>
                <div class="label-holder">
                    <label for="user-email">Email Adress</label>
                     <p class="error-msg"  data-error-msg=1></p>
                      <input type="email" id="user-email" name="user-email" class='user-info' data-user-email data-error=1  value="${obj.email}">
                    </div>
                    
                <div class="label-holder">
                    <label for="user-phone">Phone Number</label>
                    <p class="error-msg"  data-error-msg=2></p>
                    <input  id="user-phone" name="user-phone" class='user-info' data-user-phone data-error=2  minlength="10" maxlength="15
                     value="${obj.phone}">
                    
                </div>
                
            </form>
            
        </div>
        <div class="btn-holder"><button class="tab-one-btn">Next Step</button></div>
    </div>`;
  div.innerHTML = personalInfo;
  return div;
};
const tabTwo = function (obj) {
  obj.choosenPlan();
  obj.style();
  const div = document.createElement("div");
  const plan = `
    <div class="step-two">
    <div class="plan-header">
        <h1>Select your Plan</h1>
        <p class="instruction">you have the option monthly or yearly billing.</p>
    </div>
    <div class="plans" data-plans >
        <button class="plan-holder" data-plan="0">
        
            <div class="about-plan">
                <div class="icon-holder"><img src="../src/assets/images/icon-arcade.svg" alt="icon for arcade plan" ></div>
                <div class="plan-detail">
                  <div class="plan-name">Arcade</div>
                  <div class="plan-fee">${obj.arcade}</div>
                  <div class="plan-description" data-gift style='display:${obj.bonus};'>2 months free</div>
                </div>
            </div>
        </button>
        <button class="plan-holder" data-plan="1">
        
            <div class="about-plan">
                <div class="icon-holder"><img src="../src/assets/images/icon-advanced.svg" alt="icon for advanced plan" ></div>
                <div class="plan-detail">
                  <div class="plan-name">Advanced</div>
                  <div class="plan-fee">${obj.advanced}</div>
                  <div class="plan-description" data-gift style='display:${obj.bonus};'>2 months free</div>
                </div>
            </div>
        </button>
        <button class="plan-holder"  data-plan="2">
        
            <div class="about-plan">
                <div class="icon-holder"><img src="../src/assets/images/icon-pro.svg" alt="icon for pro plan" ></div>
                <div class="plan-detail">
                  <div class="plan-name">Pro</div>
                  <div class="plan-fee">${obj.pro}</div>
                  <div class="plan-description" data-gift style='display:${obj.bonus};' >2 months free</div>
                </div>
            </div>
        </button>
      
      </div>
   <p class="error-card" data-select-plan  ></p>
   <div class="toggle-holder">
        <div data-monthly style="color:${obj.monthly};">monthly</div>
        <input type="checkbox" name="user-plan" id="user-plan" class="checkbox" data-choose-plan  ${obj.checkbox}>
        <label for="user-plan" class="toggle"> </label>
        <div data-yearly style="color:${obj.yearly};">yearly</div>
    </div>
<div class="nav-btns">
    <button class="tab-two-btn back-btn"  data-tab-two-back-btn>Go Back</button>
    <button class="tab-two-btn" data-tab-two-next-btn>Next Step</button>
</div>
   </div>
    `;
  div.innerHTML = plan;
  return div;
};
const tabThree = function (obj) {
  obj.choosenPlan();
  const div = document.createElement("div");
  const storage = `
    <div class="tab-three">
    <div>
        <h1>Pick add-ons</h1>
        <p class="instruction">Add-ons enhance your gaming experience.</p>
    </div>
       <div class="about-adds">
       
            <div class="add-holder">
                <div class="add-header">
                <div>
                    <input type="checkbox" name="user-add" id="add-ons" class="user-add" data-adds="0" ${obj.online}>
                </div>
                
                <div>
                    <h2 class="add-title">online services</h2>
                    <p class="add-plan">Access to multiplayer games</span>
                </div>
            </div>
                <div>${obj.onlinePrice}</div>
            </div>
         </div>

         <div class="about-adds">
       
            <div class="add-holder">
                <div class="add-header">
                <div>
                    <input type="checkbox" name="user-add" id="add-storage" class="user-add" data-adds="1" ${obj.storage}>
                </div>
                
                <div>
                    <h2 class="add-title">Large storage</h2>
                    <p class="add-plan">Extra 1TB cloud save</span>
                </div>
            </div>
                <div>${obj.storagePrice}</div>
            </div>
        </div>
        <div class="about-adds">
       
            <div class="add-holder">
                <div class="add-header">
                <div>
                    <input type="checkbox" name="user-add" id="add-theme" class="user-add" data-adds="2" ${obj.theme}>
                </div>
                
                <div>
                    <h2 class="add-title">Customizable profile</h2>
                    <p class="add-plan">Custom theme on your profile</span>
                </div>
            </div>
                <div>${obj.themePrice}</div>
            </div>
       </div>
       <div class="nav-btns">
        <button class="tab-three-btn back-btn"  data-tab-three-back-btn >Go Back</button>
        <button class="tab-three-btn" data-tab-three-next-btn >Next Step</button>
    </div>
   </div>
    `;
  div.innerHTML = storage;
  return div;
};
const tabFour = function (objOne, objTwo) {
  const div = document.createElement("div");
  const summary = `
    <div class="tab-four">
    <div class="confirm-header">
        <h1>Finishing up</h1>
        <p class="instruction">Double-check everything looks OK before confirming.</p>
    </div>
    <div class="service-holder">
    <div class="summary-plan">

        <div class="plan">
            <h2 class="selected-plan">${summaryPlan(objOne).planName}(${summaryPlan(objOne).plan})</h2>
            <button class="change-plan">Change</button>
        </div>
        <div class="summary-price">${summaryPlan(objOne).price}</div>
       
     </div>
       <hr>
        <div class="summary-services">

            
              <div class="add-detail">
                <p class="add-name"> ${summaryAdds(objTwo).firstAdd} </p>
                <p class="online-price">${summaryAdds(objTwo).onlinePrice}</p>
              </div>
              <div class="add-detail">
                <p class="add-name"> ${summaryAdds(objTwo).secondAdd} </p>
                <p class="storage-price">${summaryAdds(objTwo).storagePrice}</p>
              </div>
              <div class="add-detail">
                <p class="add-name"> ${summaryAdds(objTwo).thirdAdd} </p>
                <p class="theme-price">${summaryAdds(objTwo).themePrice}</p>
              </div>
           </div>
    </div>
        <div class="summary-total">
            <p class="total-title">Total per year</p>
            <span class="total-price">${totalPrice(objOne, objTwo)}</span>
        </div>
        <div class="nav-btns">
            <button class="tab-four-btn back-btn" data-tab-four-back-btn>Go Back</button>
            <button class="tab-four-confirm-btn" data-tab-four-confirm-btn>Confirm</button>
        </div>
 </div>`;
  div.innerHTML = summary;
  return div;
};
const tabFive = function () {
  const div = document.createElement("div");
  const confirm = `
     <div class="step-five">
      <div class="icon-holder"><img src="../src/assets/images/icon-thank-you.svg" alt="right icon to confirm subscription"></div>
      <div>
        <h1>Thank you!</h1>
      </div>
      <div>
        <p class="confirm-text">
          Thanks for comfirming your subscription! We hope you have fun using our platform.
          if you ever need support.please feel free to email us at support@loremgaming.com.
        </p>
      </div>
   </div>`;
  div.innerHTML = confirm;
  return div;
};
const functions = {
  stepOne: tabOne,
  stepTwo: tabTwo,
  stepThree: tabThree,
  stepFour: tabFour,
  stepFive: tabFive,
};
/**
 * function that accept nodelist and change price according to selected plan(mpnthly or yearly)
 * @param {*} arrary nodelist of element
 * @param {*} object that store price (choosenplan property  get monthly or yearly price for each plans)
 */
function changePrice(arr, obj) {
  obj.choosenPlan();
  arr.forEach((element) => {
    if (arr.indexOf(element) === 0) {
      element.textContent = obj.arcade;
    } else if (arr.indexOf(element) === 1) {
      element.textContent = obj.advanced;
    } else if (arr.indexOf(element) === 2) {
      element.textContent = obj.pro;
    }
  });
}
/*
 *function that give diferent border style for the given dom element
 *param 1:array to accept(nodelist)
 *parm 2:dom element
 */
function addEvents(arr, domElement) {
  arr.forEach((element) => {
    element === domElement
      ? (element.style.border = "2px solid hsl(243, 100%, 62%)")
      : (element.style.border = "1px solid  hsl(213, 96%, 18%)");
  });
}
// save state of selected plan border style after apppend elment using index number from (userdata.selectedplan)
function selectedCard(index) {
  const plan = document.querySelector(`[data-plan="${index}"]`);
  if (plan === null) return;
  plan.style.border = "2px solid blue";
}
/**
 * function to check which adds is selected or not
 * @param {*} index
 * @param {*} domElement
 * @param {*} obj
 */
function isChecked(index, domElement, obj) {
  if (index === 0 && domElement.checked === true) {
    obj.online = "checked";
  } else if (index === 1 && domElement.checked === true) {
    obj.storage = "checked";
  } else if (index === 2 && domElement.checked === true) {
    obj.theme = "checked";
  } else if (index === 0 && domElement.checked === false) {
    obj.online = "";
  } else if (index === 1 && domElement.checked === false) {
    obj.storage = "";
  } else if (index === 2 && domElement.checked === false) {
    obj.theme = "";
  }
}
// step four summary
// userdata obj
/*
 *function that accept object check selected plan using there index number and return name and price
 *param 1:object that store selected item as number(0,1,2)
 *return string (plan name ) and number (it's price)
 */
function summaryPlan(obj) {
  let planName, plan, price;

  if (obj.selectedPlan === 0) {
    planName = "Arcade";
    price = obj.arcade;
  } else if (obj.selectedPlan === 1) {
    planName = "Advanced";
    price = obj.advanced;
  } else if (obj.selectedPlan === 2) {
    planName = "Pro";
    price = obj.pro;
  }
  if (obj.checkbox === "checked") {
    plan = "yearly";
  }
  if (obj.checkbox === "") {
    plan = "monthly";
  }

  return {
    planName,
    plan,
    price,
  };
}

/*
 *function that accept object and give selected adds name and there prices
 *param 1 :object
 *return name of add(string) and price as an array
 */
function summaryAdds(obj) {
  let firstAdd, secondAdd, thirdAdd, onlinePrice, storagePrice, themePrice;
  const selectedPrice = [];
  if (obj.online === "checked") {
    firstAdd = "Online service";
    onlinePrice = obj.onlinePrice;
    selectedPrice.push(onlinePrice);
  }
  if (obj.storage === "checked") {
    secondAdd = "Larger storage";
    storagePrice = obj.storagePrice;
    selectedPrice.push(storagePrice);
  }
  if (obj.theme === "checked") {
    thirdAdd = "Customizable profile";
    themePrice = obj.themePrice;
    selectedPrice.push(themePrice);
  }

  // use closure to reset items if not selected
  const checkSelectedAdds = function (obj) {
    if (obj.online !== "checked") {
      firstAdd = "";
      onlinePrice = "";
    }
    if (obj.storage !== "checked") {
      secondAdd = "";
      storagePrice = "";
    }
    if (obj.theme !== "checked") {
      thirdAdd = "";
      themePrice = "";
    }
  };
  checkSelectedAdds(obj);

  return {
    firstAdd,
    secondAdd,
    thirdAdd,
    onlinePrice,
    storagePrice,
    themePrice,
    selectedPrice,
  };
}
/*
 *function that accept two objects and calculate price or sum
 *param 1: obj1 hold plan price (monthly or yearly)
 *param 2: obj2 hold selected adds price as an arrary
 *return number (sum)
 */
function totalPrice(obj1, obj2) {
  const planFee = summaryPlan(obj1).price;
  const addsFee = summaryAdds(obj2).selectedPrice;
  const plan = Number(planFee.replace(/[^0-9]/g, ""));
  const planName = planFee.replace(/[^a-z]/g, ""); // store "mo" or "yr" string

  let sumwithcurrency = "";
  let totalAdds = 0;
  let sum = 0;
  addsFee.forEach((price) => {
    // price is array of add value convert to num and remove currency sign
    totalAdds += Number(price.replace(/[^0-9]/g, ""));
  });
  sum = plan + totalAdds;
  sumwithcurrency = ` $${sum}/${planName}`;
  return sumwithcurrency;
}
// function to validate step one form
/**
 *
 * @param {*} field : input field
 * @param {*} index : 0 represent username,1 user email ,2 userphone number respectively
 * @param {*} errDom :domelemnt to show error message
 */
function validateForm(field, index, errDom) {
  const emailReg = /\w+[@]{1}[a-z-]+[.]{1}[a-z]{2,}([.]{1}[a-z]{2,})?/;
  const phoneReg = /^[0-9]{10,15}$/;
  const stringReg = /[a-z]+/; // check phone number entry

  // function to hide error message on focus else show message
  const focusStyle = function () {
    field.addEventListener("focus", () => {
      if (field.className === "invalid") errDom.style.display = "none";
    });
    field.addEventListener("focusout", () => {
      if (field.className === "invalid") {
        errDom.style.display = "block";
      }
    });
  };
  if (field.value === "") {
    errDom.textContent = "This field is Required!";
    field.className = "invalid";
    return;
  }
  if (index === 0) {
    if (field.validity.tooShort) {
      errDom.textContent = "Too short add more character.";
      field.className = "invalid";
      focusStyle();
    } else if (field.validity.tooLong) {
      errDom.textContent = "Too long must be 2-20 characters.";
      field.className = "invalid";
      focusStyle();
    } else if (field.validity.valid) {
      errDom.textContent = "";
      field.className = "valid";
    }
  } else if (index === 1) {
    if (emailReg.test(field.value)) {
      field.className = "valid";
      errDom.textContent = "";
    } else if (emailReg.test(field.value) === false) {
      errDom.textContent = "wrong format,use(example@domain.ext)";
      field.className = "invalid";
      focusStyle();
    }
  } else if (index === 2) {
    if (stringReg.test(field.value)) {
      errDom.textContent = "Please enter numbers only!";
      field.className = "invalid";
      focusStyle();
    } else if (field.validity.tooLong) {
      errDom.textContent = "Too long must be 10-15 characters";
      field.className = "invalid";
      focusStyle();
    } else if (field.validity.tooShort) {
      errDom.textContent = "Too short must be 10-15 characters";
      field.className = "invalid";
      focusStyle();
    } else if (phoneReg.test(Number(field.value))) {
      console.log(field.value);
      field.className = "valid";
      errDom.textContent = "";
      const value = field.value;
      const format = value.replace(/^(.{3})(.{3})(.{4})(.*)$/, "$1 $2 $3");
      field.value = "+" + format;
    }
  }
}
function isFormfilled(arr) {
  const invalidInput = [];
  let result;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].className === "invalid") {
      invalidInput.push(arr[i]);
    } else if (arr[i].value === "") {
      invalidInput.push(arr[i]);
    }
  }
  invalidInput.length > 0 ? (result = false) : (result = true);
  return result;
}
// function that accept object and check value is empty(used to switch tab 2)
function isValueEmpty(obj) {
  let result;
  const keyArray = Object.keys(obj);
  for (let index = 0; index < keyArray.length; index++) {
    const element = keyArray[index];
    if (obj[element] === "") {
      result = true;
      break;
    } else if (obj[element] !== "") {
      result = false;
    }
  }
  return result;
}
// function to change backgroud color to show which step it is
function changeColor(array, index) {
  array.forEach((element) => {
    if (array.indexOf(element) === index) {
      element.style.color = "black";
      element.style.backgroundColor = "rgb(191, 226, 253)";
    } else {
      element.style.backgroundColor = "inherit";
    }
  });
}


/***/ }),

/***/ "./src/assets/fonts/ubuntu-v20-latin-regular.woff2":
/*!*********************************************************!*\
  !*** ./src/assets/fonts/ubuntu-v20-latin-regular.woff2 ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2f02effe392a63dc07a5.woff2";

/***/ }),

/***/ "./src/assets/images/bg-sidebar-desktop.svg":
/*!**************************************************!*\
  !*** ./src/assets/images/bg-sidebar-desktop.svg ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6918153f38678372ceb1.svg";

/***/ }),

/***/ "./src/assets/images/bg-sidebar-mobile.svg":
/*!*************************************************!*\
  !*** ./src/assets/images/bg-sidebar-mobile.svg ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ad41661b40ca0b967f3a.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _tabs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs */ "./src/tabs.js");


const holder = document.querySelector(".preview");
const dots = document.querySelectorAll(".dot");
const tabs = [...dots];
const userInfo = new _tabs__WEBPACK_IMPORTED_MODULE_1__.UserPersonalInfo();
const userPlans = new _tabs__WEBPACK_IMPORTED_MODULE_1__.UserPlanData();
const userAdds = new _tabs__WEBPACK_IMPORTED_MODULE_1__.UserServices();
holder.appendChild(_tabs__WEBPACK_IMPORTED_MODULE_1__.functions.stepOne(userInfo)); // default is empty form
holder.addEventListener("click", (e) => {
  if (e.target.matches(".tab-one-btn")) {
    const allInput = document.querySelectorAll("input");
    const arryInput = [...allInput];
    // validate step one form if its not empty move to next step

    if ((0,_tabs__WEBPACK_IMPORTED_MODULE_1__.isFormfilled)(arryInput) === true) {
      holder.textContent = "";
      holder.appendChild(_tabs__WEBPACK_IMPORTED_MODULE_1__.functions.stepTwo(userPlans));
      (0,_tabs__WEBPACK_IMPORTED_MODULE_1__.changeColor)(tabs, 1);
    }
    arryInput.forEach((input) => {
      const errMsg = document.querySelector(
        `[data-error-msg="${Number(input.dataset.error)}"]`
      );
      if (input.value === "") {
        errMsg.textContent = "This field is required!";
        input.className = "invalid";
      }
    });
  } else if (e.target.matches("[data-user-name]")) {
    const userName = document.querySelector("[data-user-name]");
    userName.addEventListener("change", (e) => {
      const errMsg = document.querySelector(
        `[data-error-msg="${e.target.dataset.error}"]`
      );

      userInfo.name = userName.value;
      (0,_tabs__WEBPACK_IMPORTED_MODULE_1__.validateForm)(userName, 0, errMsg);
    });
  } else if (e.target.matches("[data-user-email]")) {
    const userEmail = document.querySelector("[data-user-email]");
    userEmail.addEventListener("change", (e) => {
      const errMsg = document.querySelector(
        `[data-error-msg="${e.target.dataset.error}"]`
      );
      userInfo.email = userEmail.value;
      (0,_tabs__WEBPACK_IMPORTED_MODULE_1__.validateForm)(userEmail, 1, errMsg);
    });
  } else if (e.target.matches("[data-user-phone]")) {
    const userPhone = document.querySelector("[data-user-phone]");
    const errMsg = document.querySelector(
      `[data-error-msg="${e.target.dataset.error}"]`
    );
    userPhone.addEventListener("change", (e) => {
      userInfo.phone = userPhone.value;
      (0,_tabs__WEBPACK_IMPORTED_MODULE_1__.validateForm)(userPhone, 2, errMsg);
    });
  } // tab two events
  else if (e.target.matches(".plan-holder")) {
    const index = Number(e.target.dataset.plan);
    const plans = document.querySelectorAll(".plan-holder");
    const clickedPlan = document.querySelector(`[data-plan="${index}"]`);
    (0,_tabs__WEBPACK_IMPORTED_MODULE_1__.addEvents)(plans, clickedPlan);
    userPlans.selectedPlan = index;
  } else if (e.target.matches("[data-choose-plan]")) {
    const userPlan = document.querySelector("[data-choose-plan]");
    const prices = document.querySelectorAll(".plan-fee");
    const freeGifts = document.querySelectorAll("[data-gift]");
    const monthlyPlan = document.querySelector("[data-monthly]");
    const yearlyPlan = document.querySelector("[data-yearly]");
    const plans = [...prices];
    if (userPlan.checked === true) {
      userPlans.checkbox = "checked";
      userPlans.plan = true;
      userPlans.bonus = "block";
      userAdds.addPlan = true;
      // update dom
      monthlyPlan.style.color = "hsl(231, 11%, 63%)";
      yearlyPlan.style.color = "hsl(213, 96%, 18%)";
      freeGifts.forEach((divs) => {
        divs.style.display = userPlans.bonus;
      });

      (0,_tabs__WEBPACK_IMPORTED_MODULE_1__.changePrice)(plans, userPlans);
    } else if (userPlan.checked === false) {
      userPlans.checkbox = "";
      userPlans.plan = false;
      userPlans.bonus = "none";
      userAdds.addPlan = false;
      monthlyPlan.style.color = "hsl(213, 96%, 18%";
      yearlyPlan.style.color = "hsl(231, 11%, 63%)";
      // monthly price
      freeGifts.forEach((divs) => {
        divs.style.display = userPlans.bonus;
      });
      (0,_tabs__WEBPACK_IMPORTED_MODULE_1__.changePrice)(plans, userPlans);
    }
  } else if (e.target.matches("[data-tab-two-next-btn]")) {
    const errMsg = document.querySelector("[data-select-plan]");
    if (userPlans.selectedPlan !== "") {
      holder.textContent = " ";
      holder.appendChild(_tabs__WEBPACK_IMPORTED_MODULE_1__.functions.stepThree(userAdds));
      errMsg.textContent = "";
      (0,_tabs__WEBPACK_IMPORTED_MODULE_1__.changeColor)(tabs, 2); // step 3
    } else if (userPlans.selectedPlan === "") {
      errMsg.textContent = "click the cards to  select.";
    }
  } else if (e.target.matches("[data-tab-two-back-btn]")) {
    holder.textContent = "";
    holder.appendChild(_tabs__WEBPACK_IMPORTED_MODULE_1__.functions.stepOne(userInfo));
    (0,_tabs__WEBPACK_IMPORTED_MODULE_1__.changeColor)(tabs, 0); // step one
  }
  // tab three events
  else if (e.target.matches(".user-add")) {
    const index = Number(e.target.dataset.adds);
    const addsCheckbox = document.querySelector(`[data-adds="${index}"]`);
    (0,_tabs__WEBPACK_IMPORTED_MODULE_1__.isChecked)(index, addsCheckbox, userAdds);
  } else if (e.target.matches("[data-tab-three-next-btn")) {
    holder.textContent = "";
    holder.appendChild(_tabs__WEBPACK_IMPORTED_MODULE_1__.functions.stepFour(userPlans, userAdds));
    (0,_tabs__WEBPACK_IMPORTED_MODULE_1__.changeColor)(tabs, 3); // step 4
  } else if (e.target.matches("[data-tab-three-back-btn]")) {
    holder.textContent = "";
    holder.appendChild(_tabs__WEBPACK_IMPORTED_MODULE_1__.functions.stepTwo(userPlans));
    (0,_tabs__WEBPACK_IMPORTED_MODULE_1__.selectedCard)(userPlans.selectedPlan);
    (0,_tabs__WEBPACK_IMPORTED_MODULE_1__.changeColor)(tabs, 1); // step 2
  }
  // step four event
  else if (e.target.matches("[data-tab-four-back-btn]")) {
    holder.textContent = "";
    holder.appendChild(_tabs__WEBPACK_IMPORTED_MODULE_1__.functions.stepThree(userAdds));
    (0,_tabs__WEBPACK_IMPORTED_MODULE_1__.changeColor)(tabs, 2); // step 3
  } else if (e.target.matches("[data-tab-four-confirm-btn]")) {
    holder.textContent = "";
    holder.appendChild(_tabs__WEBPACK_IMPORTED_MODULE_1__.functions.stepFive());
  }
});

tabs.forEach((element) => {
  element.addEventListener("click", (e) => {
    if (tabs.indexOf(element) === 0) {
      holder.textContent = "";
      holder.appendChild(_tabs__WEBPACK_IMPORTED_MODULE_1__.functions.stepOne(userInfo));
      (0,_tabs__WEBPACK_IMPORTED_MODULE_1__.changeColor)(tabs, 0);
      // next check step one is clear else don't switch
    } else if (
      tabs.indexOf(element) === 1 &&
      (0,_tabs__WEBPACK_IMPORTED_MODULE_1__.isValueEmpty)(userInfo) === false
    ) {
      holder.textContent = "";
      holder.appendChild(_tabs__WEBPACK_IMPORTED_MODULE_1__.functions.stepTwo(userPlans));
      (0,_tabs__WEBPACK_IMPORTED_MODULE_1__.selectedCard)(userPlans.selectedPlan);
      (0,_tabs__WEBPACK_IMPORTED_MODULE_1__.changeColor)(tabs, 1);
      // check if step two cards selected to preceed to step 3 and 4 they are same
    } else if (tabs.indexOf(element) === 2 && userPlans.selectedPlan !== "") {
      holder.textContent = "";
      holder.appendChild(_tabs__WEBPACK_IMPORTED_MODULE_1__.functions.stepThree(userAdds));
      (0,_tabs__WEBPACK_IMPORTED_MODULE_1__.changeColor)(tabs, 2);
    } else if (tabs.indexOf(element) === 3 && userPlans.selectedPlan !== "") {
      holder.textContent = "";
      holder.appendChild(_tabs__WEBPACK_IMPORTED_MODULE_1__.functions.stepFour(userPlans, userAdds));
      (0,_tabs__WEBPACK_IMPORTED_MODULE_1__.changeColor)(tabs, 3);
    }
  });
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLHVLQUFnRTtBQUM1Ryw0Q0FBNEMseUpBQXlEO0FBQ3JHLDRDQUE0Qyx1SkFBd0Q7QUFDcEcsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRix5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsbUNBQW1DO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDRCQUE0QixtQ0FBbUM7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsbUNBQW1DO0FBQ2xFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyx1RkFBdUYsTUFBTSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxNQUFNLFdBQVcsS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsWUFBWSxXQUFXLEtBQUssS0FBSyxVQUFVLFVBQVUsWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE1BQU0sWUFBWSxNQUFNLFVBQVUsVUFBVSxZQUFZLGFBQWEsWUFBWSxLQUFLLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksTUFBTSxVQUFVLEtBQUssVUFBVSxVQUFVLFVBQVUsS0FBSyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxLQUFLLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsWUFBWSxNQUFNLFVBQVUsS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxhQUFhLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxZQUFZLE1BQU0sWUFBWSxhQUFhLFdBQVcsV0FBVyxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxNQUFNLFVBQVUsS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksTUFBTSxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxLQUFLLFdBQVcsS0FBSyxVQUFVLFVBQVUsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxZQUFZLE1BQU0sVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsS0FBSyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxLQUFLLEtBQUssVUFBVSxVQUFVLE1BQU0sbUVBQW1FLDBCQUEwQiw0QkFBNEIseUJBQXlCLHVCQUF1QixpRkFBaUYsS0FBSyxPQUFPLDBDQUEwQyx3QkFBd0IsdUJBQXVCLDRCQUE0QixvQkFBb0IscUJBQXFCLHFDQUFxQyxnQ0FBZ0MsR0FBRyx5QkFBeUIsb0VBQW9FLG1DQUFtQyw2QkFBNkIsa0NBQWtDLG1CQUFtQiw0QkFBNEIsS0FBSyxLQUFLLG9CQUFvQiw2QkFBNkIsMEJBQTBCLDhCQUE4Qix1QkFBdUIsR0FBRyxLQUFLLG1CQUFtQixrQkFBa0IsR0FBRyxjQUFjLG9CQUFvQiwwQkFBMEIsZ0JBQWdCLEdBQUcsYUFBYSxtQkFBbUIsc0JBQXNCLHVCQUF1QixHQUFHLG1CQUFtQiw2Q0FBNkMsT0FBTyxPQUFPLGtCQUFrQixtQkFBbUIsbUJBQW1CLDJDQUEyQyx5QkFBeUIsb0JBQW9CLDBCQUEwQiw4QkFBOEIsc0JBQXNCLGdDQUFnQyxPQUFPLGlCQUFpQiw4Q0FBOEMsT0FBTyxZQUFZLGlDQUFpQyx1QkFBdUIsR0FBRyxLQUFLLGdCQUFnQiwrQkFBK0IsR0FBRyxzREFBc0QsZ0NBQWdDLHNCQUFzQix1QkFBdUIsT0FBTyxvQkFBb0IsMkJBQTJCLE9BQU8sY0FBYyxpQ0FBaUMsR0FBRyxzRkFBc0Ysb0JBQW9CLG1CQUFtQiw2QkFBNkIseUNBQXlDLG9CQUFvQixVQUFVLGVBQWUsa0JBQWtCLGlCQUFpQixpQ0FBaUMsc0JBQXNCLEdBQUcsa0JBQWtCLG9CQUFvQiw2QkFBNkIscUJBQXFCLFNBQVMsUUFBUSxpQkFBaUIsdUNBQXVDLHFCQUFxQiwyQkFBMkIsOEJBQThCLHNCQUFzQixxQkFBcUIsSUFBSSxRQUFRLGdDQUFnQyxHQUFHLFdBQVcsNENBQTRDLE1BQU0sU0FBUywrQkFBK0IsTUFBTSxpQkFBaUIsaUJBQWlCLG9CQUFvQiwyQkFBMkIsdUJBQXVCLEtBQUssa0JBQWtCLDBDQUEwQyxXQUFXLGdDQUFnQyx3QkFBd0Isb0JBQW9CLDBCQUEwQixXQUFXLGtCQUFrQixnREFBZ0Qsd0JBQXdCLGlDQUFpQyxpQ0FBaUMsdUJBQXVCLHdCQUF3Qix3QkFBd0IsOEJBQThCLDBCQUEwQixPQUFPLHdCQUF3QiwrQ0FBK0MsZ0RBQWdELE1BQU0saUJBQWlCLDJCQUEyQiw2QkFBNkIsTUFBTSwrQkFBK0Isd0JBQXdCLGlDQUFpQyxzQkFBc0Isa0NBQWtDLE1BQU0sZ0JBQWdCLDJCQUEyQixvQ0FBb0MsMEJBQTBCLE1BQU0sa0JBQWtCLCtCQUErQixPQUFPLG9CQUFvQix3QkFBd0Isb0JBQW9CLHVCQUF1Qiw4QkFBOEIsa0NBQWtDLDZCQUE2Qiw4Q0FBOEMsMEJBQTBCLGdDQUFnQyxPQUFPLGFBQWEsZ0NBQWdDLDZCQUE2QixzQkFBc0IsdUJBQXVCLDhDQUE4Qyx1QkFBdUIsOEJBQThCLCtCQUErQixPQUFPLG9CQUFvQix3QkFBd0IsNkJBQTZCLHVCQUF1QixzQkFBc0IsNkJBQTZCLG1CQUFtQixvQkFBb0IsNkNBQTZDLE1BQU0sdUNBQXVDLHFCQUFxQixRQUFRLGdCQUFnQix3QkFBd0IsT0FBTyxnQkFBZ0Isd0JBQXdCLHlDQUF5QyxnQ0FBZ0MsdUJBQXVCLDZDQUE2QyxnQ0FBZ0MscUJBQXFCLDBCQUEwQixVQUFVLDhGQUE4Rix3QkFBd0IsK0NBQStDLHVCQUF1Qix1QkFBdUIsNkJBQTZCLGdDQUFnQyxPQUFPLHNCQUFzQixpREFBaUQsZ0NBQWdDLDBCQUEwQix5QkFBeUIsVUFBVSx3QkFBd0Isa0RBQWtELE9BQU8sOEJBQThCLHdCQUF3Qiw4QkFBOEIseUNBQXlDLG1CQUFtQixPQUFPLGlCQUFpQiw0QkFBNEIsMkJBQTJCLE9BQU8sa0JBQWtCLDJCQUEyQixPQUFPLDJCQUEyQixvQkFBb0IsT0FBTyxnQkFBZ0Isc0JBQXNCLHVCQUF1Qiw2QkFBNkIsT0FBTyxvQ0FBb0MseUJBQXlCLE9BQU8saURBQWlELHdCQUF3Qix5Q0FBeUMseUJBQXlCLGtDQUFrQyxnQkFBZ0Isd0JBQXdCLDhCQUE4QixPQUFPLHFCQUFxQixnQkFBZ0IsTUFBTSwyQkFBMkIsb0JBQW9CLDBCQUEwQixpQ0FBaUMsU0FBUyxxQkFBcUIsMkJBQTJCLDRCQUE0QixPQUFPLG1CQUFtQix3QkFBd0IsdUJBQXVCLHFCQUFxQixvQ0FBb0MsMEJBQTBCLGVBQWUseUJBQXlCLHdEQUF3RCxxQ0FBcUMsT0FBTyw4QkFBOEIscUNBQXFDLDJCQUEyQiwwQkFBMEIsT0FBTyxrREFBa0QsMEJBQTBCLDJCQUEyQixPQUFPLG1CQUFtQiwyQkFBMkIsNEJBQTRCLE9BQU8sZUFBZSx1QkFBdUIsT0FBTyxzQkFBc0IsMEJBQTBCLCtDQUErQyxnQ0FBZ0MsOEJBQThCLFdBQVcsZ0JBQWdCLHFDQUFxQyxnREFBZ0QsV0FBVyx5Q0FBeUMsa0NBQWtDLDhCQUE4Qix3QkFBd0IsMEJBQTBCLGlCQUFpQixvQkFBb0IsNkJBQTZCLE9BQU8sNEJBQTRCLDBCQUEwQixxQ0FBcUMsK0NBQStDLFdBQVcsVUFBVSx1RUFBdUUsbUNBQW1DLHVCQUF1Qix1QkFBdUIsT0FBTyxTQUFTLDhCQUE4QixPQUFPLHNCQUFzQix3QkFBd0IsT0FBTyxvQ0FBb0MsNkJBQTZCLHNCQUFzQixnQ0FBZ0MscUJBQXFCLDRCQUE0QixPQUFPLFlBQVkscUJBQXFCLE9BQU8saUJBQWlCLHNCQUFzQiw0QkFBNEIsT0FBTyxtREFBbUQsNkJBQTZCLGdDQUFnQyxxQkFBcUIsVUFBVSxtQkFBbUIsdUJBQXVCLFVBQVUsb0JBQW9CLHVCQUF1QixVQUFVLG1CQUFtQix5QkFBeUIsc0JBQXNCLFVBQVUsb0JBQW9CLHdCQUF3QixVQUFVLDJCQUEyQixzQkFBc0IsT0FBTyw4Q0FBOEMseUJBQXlCLG1CQUFtQiw2QkFBNkIsZ0JBQWdCLHVCQUF1QiwwQkFBMEIsMkJBQTJCLE9BQU8sZ0JBQWdCLDJCQUEyQiw0QkFBNEIsV0FBVyw0Q0FBNEMsMEJBQTBCLHNCQUFzQixPQUFPLGtCQUFrQixvQkFBb0IscUJBQXFCLE9BQU8sZ0JBQWdCLDJCQUEyQiw0QkFBNEIsT0FBTyxlQUFlLGdCQUFnQix5QkFBeUIsaUJBQWlCLG9CQUFvQixHQUFHLGNBQWMseUJBQXlCLGdCQUFnQixnQkFBZ0IsR0FBRywwQkFBMEIsaUJBQWlCLEdBQUcsa0JBQWtCLG9CQUFvQixHQUFHLHFCQUFxQiwwQkFBMEIsc0JBQXNCLGtDQUFrQyxrQ0FBa0MsdUJBQXVCLHVCQUF1QixPQUFPLG1CQUFtQiw2QkFBNkIsOEJBQThCLHNCQUFzQixPQUFPLHFCQUFxQixvQkFBb0IsMEJBQTBCLE9BQU8sR0FBRyxtQkFBbUI7QUFDMXFiO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7O0FDOWQxQjs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFEO0FBQ3JEO0FBQ0E7QUFDQSxnREFBZ0Q7QUFDaEQ7QUFDQTtBQUNBLHFGQUFxRjtBQUNyRjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsaUJBQWlCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixxQkFBcUI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0ZBQXNGLHFCQUFxQjtBQUMzRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsaURBQWlELHFCQUFxQjtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0RBQXNELHFCQUFxQjtBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDcEZhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUN6QmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkQSxNQUErRjtBQUMvRixNQUFxRjtBQUNyRixNQUE0RjtBQUM1RixNQUErRztBQUMvRyxNQUF3RztBQUN4RyxNQUF3RztBQUN4RyxNQUFtRztBQUNuRztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLHNGQUFPOzs7O0FBSTZDO0FBQ3JFLE9BQU8saUVBQWUsc0ZBQU8sSUFBSSxzRkFBTyxVQUFVLHNGQUFPLG1CQUFtQixFQUFDOzs7Ozs7Ozs7OztBQzFCaEU7O0FBRWI7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiw0QkFBNEI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiw2QkFBNkI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNuRmE7O0FBRWI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDakNhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNUYTs7QUFFYjtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7QUFDakY7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtEO0FBQ2xEO0FBQ0E7QUFDQSwwQ0FBMEM7QUFDMUM7QUFDQTtBQUNBO0FBQ0EsaUZBQWlGO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EseURBQXlEO0FBQ3pEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDNURhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDYkE7QUFDTztBQUNQLDBCQUEwQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUCwwQkFBMEI7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUCwwQkFBMEI7QUFDMUI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLFNBQVM7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxSUFBcUksVUFBVTtBQUMvSTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsVUFBVTtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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TUFBTTtBQUNOO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSx1QkFBdUIsNENBQVM7QUFDaEMsSUFBSSxrREFBVyxXQUFXO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0RBQStELE1BQU07QUFDckUsSUFBSSxnREFBUztBQUNiLElBQUk7QUFDSjtBQUNBLHVCQUF1Qiw0Q0FBUztBQUNoQyxJQUFJLGtEQUFXLFdBQVc7QUFDMUIsSUFBSTtBQUNKO0FBQ0EsdUJBQXVCLDRDQUFTO0FBQ2hDLElBQUksbURBQVk7QUFDaEIsSUFBSSxrREFBVyxXQUFXO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLDRDQUFTO0FBQ2hDLElBQUksa0RBQVcsV0FBVztBQUMxQixJQUFJO0FBQ0o7QUFDQSx1QkFBdUIsNENBQVM7QUFDaEM7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLDRDQUFTO0FBQ2xDLE1BQU0sa0RBQVc7QUFDakI7QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNLG1EQUFZO0FBQ2xCO0FBQ0E7QUFDQSx5QkFBeUIsNENBQVM7QUFDbEMsTUFBTSxtREFBWTtBQUNsQixNQUFNLGtEQUFXO0FBQ2pCO0FBQ0EsTUFBTTtBQUNOO0FBQ0EseUJBQXlCLDRDQUFTO0FBQ2xDLE1BQU0sa0RBQVc7QUFDakIsTUFBTTtBQUNOO0FBQ0EseUJBQXlCLDRDQUFTO0FBQ2xDLE1BQU0sa0RBQVc7QUFDakI7QUFDQSxHQUFHO0FBQ0gsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL211bHRpLXN0ZXAtZm9ybS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vbXVsdGktc3RlcC1mb3JtLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9tdWx0aS1zdGVwLWZvcm0vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL211bHRpLXN0ZXAtZm9ybS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL211bHRpLXN0ZXAtZm9ybS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9tdWx0aS1zdGVwLWZvcm0vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vbXVsdGktc3RlcC1mb3JtLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9tdWx0aS1zdGVwLWZvcm0vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vbXVsdGktc3RlcC1mb3JtLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL211bHRpLXN0ZXAtZm9ybS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL211bHRpLXN0ZXAtZm9ybS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL211bHRpLXN0ZXAtZm9ybS8uL3NyYy90YWJzLmpzIiwid2VicGFjazovL211bHRpLXN0ZXAtZm9ybS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9tdWx0aS1zdGVwLWZvcm0vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vbXVsdGktc3RlcC1mb3JtL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9tdWx0aS1zdGVwLWZvcm0vd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9tdWx0aS1zdGVwLWZvcm0vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9tdWx0aS1zdGVwLWZvcm0vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9tdWx0aS1zdGVwLWZvcm0vd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vbXVsdGktc3RlcC1mb3JtL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL211bHRpLXN0ZXAtZm9ybS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vbXVsdGktc3RlcC1mb3JtLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2Fzc2V0cy9mb250cy91YnVudHUtdjIwLWxhdGluLXJlZ3VsYXIud29mZjJcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL2Fzc2V0cy9pbWFnZXMvYmctc2lkZWJhci1kZXNrdG9wLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4vYXNzZXRzL2ltYWdlcy9iZy1zaWRlYmFyLW1vYmlsZS5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLyogdWJ1bnR1LXJlZ3VsYXIgLSBsYXRpbiAqL1xuQGZvbnQtZmFjZSB7XG4gICAgZm9udC1kaXNwbGF5OiBzd2FwOyBcbiAgICBmb250LWZhbWlseTogJ1VidW50dSc7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSkgZm9ybWF0KCd3b2ZmMicpOyBcbiAgfVxuYm9keXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAgaHNsKDAsIDAlLCAxMDAlKTtcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgICBtYXgtd2lkdGg6IDEwMHZ3O1xuICAgIGZvbnQtZmFtaWx5OiAnVWJ1bnR1JztcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIG1hcmdpbjogMC41cmVtO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDJmcjtcbiAgICBjb2xvcjogaHNsKDIxMywgOTYlLCAxOCUpO1xufVxuLyogbmF2IHN0eWxlICovXG5cbm5hdntcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19ffSk7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGJvdHRvbTtcbiAgICBoZWlnaHQ6IDk1dmg7XG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xuICB9XG51bHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xufVxubGl7XG4gICAgbWFyZ2luOiAxcmVtO1xuICAgIHdpZHRoOiAxMDAlO1xufVxuLm5hdi1ob2xkZXJ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMXJlbTtcbn1cbi5zdGVwLW5hbWV7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBmb250LXdlaWdodDogNzAwO1xufVxuLnN0ZXAtbmFtZTpob3ZlcntcbiAgICB0ZXh0LXNoYWRvdzogMnB4IDJweCAgcmdiKDEwMSwgNSwgMTE4KTtcbiAgICB9XG4uZG90e1xuICAgIHdpZHRoOiAycmVtO1xuICAgIGhlaWdodDogMnJlbTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyOiAycHggcmdiKDI1NSwgMjU1LCAyNTUpIHNvbGlkO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XG4gICAgfVxuICAgIC5kb3Q6aG92ZXJ7XG4gICAgICAgIGJvcmRlcjogcmdiKDIzMiwgMzEsIDI0Nykgc29saWQgM3B4O1xuICAgIH1cbi5zdGVwLW51bXtcbiAgICBjb2xvcjogaHNsKDIyOCwgMTAwJSwgODQlKTtcbiAgICBmb250LXdlaWdodDogNTAwO1xufVxuaDF7XG4gICAgbWFyZ2luOiAwO1xuICAgIGNvbG9yOmhzbCgyMTMsIDk2JSwgMTglKTtcbn1cbi5pbnN0cnVjdGlvbiwgLnBsYW4tZmVlLCAuYWRkLXBsYW4gLCAuY29uZmlybS10ZXh0IHtcbiAgICBjb2xvcjpoc2woMjMxLCAxMSUsIDYzJSkgO1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIH1cbiAgICAuY29uZmlybS10ZXh0e1xuICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgIH1cblxuLmJhY2stYnRue1xuICAgIGNvbG9yOmhzbCgyMzEsIDExJSwgNjMlKSA7IFxufVxuLyogcGVyc29uYWwgaW5mbyBmb3JtICovXG4uc3RlcC1vbmUsIC5zdGVwLXR3bywgLnRhYi10aHJlZSwgLnRhYi1mb3VyICwgLnN0ZXAtZml2ZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBtYXJnaW46IDFyZW07XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMCwgMCUsIDEwMCUpO1xuICAgIHBhZGRpbmc6IDFyZW07XG5cbiAgICAgfVxuICAuZXJyb3ItbXNne1xuICAgIG1hcmdpbjogMXB4O1xuICAgIHdpZHRoOiA2MCU7XG4gICAgY29sb3I6ICBoc2woMzU0LCA4NCUsIDU3JSk7XG4gICAgdGV4dC1hbGlnbjogZW5kO1xufVxuXG4ubGFiZWwtaG9sZGVye1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBtYXJnaW46IDAuM3JlbTtcbiAgICBcbn1cbmlucHV0e1xuICAgIHdpZHRoOiA2MCU7XG4gICBib3JkZXI6IDFweCByZ2IoNTUsIDU1LCA1NSkgc29saWQ7XG4gICBwYWRkaW5nOiAwLjZyZW07XG4gICBib3JkZXItcmFkaXVzOiAwLjVyZW07XG4gICBjb2xvcjpoc2woMjE0LCA5MyUsIDEyJSk7XG4gICBmb250LXdlaWdodDogNTAwO1xuICAgZm9udC1zaXplOiAxcmVtO1xuIH1cbmxhYmVse1xuICAgIGNvbG9yOmhzbCgyMTMsIDk2JSwgMTglKTs7XG59XG4uaW52YWxpZHtcbiAgICBib3JkZXI6IDJweCAgaHNsKDM1NCwgODQlLCA1NyUpIHNvbGlkO1xuICAgfVxuLnZhbGlke1xuICAgIGJvcmRlcjogMnB4IGdyZWVuICBzb2xpZDtcbiAgIH1cbiAgIC5idG4taG9sZGVye1xuICAgIHdpZHRoOiA2NCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcbiAgICBtYXJnaW4tdG9wOiAzcmVtO1xuICB9XG4gICAgaW5wdXQ6Zm9jdXN7XG4gICAgICAgIGJvcmRlcjozcHggc29saWQgcmdiKDAsIDQsIDI1NSk7XG4gICAgICAgIH1cbiAgICAvKiB0YWIgdHdvICovXG4gICAgLnBsYW5ze1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBnYXA6IDFyZW07XG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgfVxuICAgLnBsYW4taG9sZGVye1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAgaHNsKDIxMywgOTYlLCAxOCUpO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBhbGlnbi1pdGVtczpmbGV4LXN0YXJ0O1xuICAgICAgICB3aWR0aDogMjAwcHg7XG4gICAgICAgIGhlaWdodDogMTkwcHg7XG4gICAgICAgIHBhZGRpbmc6IDFyZW07XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG4gICAucGxhbi1ob2xkZXI6aG92ZXJ7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGhzbCgyMjksIDI0JSwgODclKTtcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgaHNsKDI0MywgMTAwJSwgNjIlKTtcbiAgIH1cbiAgIC5hYm91dC1wbGFue1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gICB9XG4gICAucGxhbi1kZXRhaWwsIC5hYm91dC1wbGFue1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBnYXA6IDAuM3JlbTtcbiAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICB9XG4gICAucGxhbi1uYW1le1xuICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICBjb2xvcjogaHNsKDIxMywgOTYlLCAxOCUpO1xuICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICB9XG4gICAuaWNvbi1ob2xkZXJ7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMS41cmVtO1xuICAgfSBcbiAgIC50b2dnbGUtaG9sZGVye1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBnYXA6IDFyZW07XG4gICAgICAgIG1hcmdpbjogMXJlbTtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6NXB4IDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjpoc2woMjI5LCAyNCUsIDg3JSk7XG4gICAgICAgIHBhZGRpbmc6IDAuNXJlbTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xuICAgIH1cbiAgIC50b2dnbGV7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB3aWR0aDogNTBweDtcbiAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOmhzbCgyMTMsIDk2JSwgMTglKTtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC41cztcbiAgICB9XG4gICAudG9nZ2xlOjphZnRlcntcbiAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIHRvcDogNXB4O1xuICAgICAgICBsZWZ0OiAxcHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGhzbCgwLCAwJSwgMTAwJSk7XG4gICB9XG4gIC5jaGVja2JveDpjaGVja2VkICsgLnRvZ2dsZTo6YWZ0ZXJ7XG4gICAgICAgIGxlZnQ6IDI1cHg7XG4gICAgIH1cbiAgICAuY2hlY2tib3h7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICAgIC5uYXYtYnRuc3tcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XG4gICAgICAgIG1hcmdpbjogMXJlbTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDAsIDAlLCAxMDAlKTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xuICAgICAgICB3aWR0aDogOTAlO1xuICAgICAgICBwYWRkaW5nOiAwLjZyZW07XG5cbiAgICAgfVxuICAgIFxuICAgIC50YWItdHdvLWJ0biwgLnRhYi10aHJlZS1idG4sIC50YWItZm91ci1idG4sIC50YWItZm91ci1jb25maXJtLWJ0biAsIC50YWItb25lLWJ0bntcbiAgICAgICAgcGFkZGluZzogMXJlbTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDIxMywgOTYlLCAxOCUpO1xuICAgICAgICBjb2xvcjogYXp1cmU7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgd2lkdGg6IGZpdC1jb250ZW50O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XG4gICAgfVxuICAgXG4gICAuYWJvdXQtYWRkc3tcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgIGhzbCgyNDMsIDEwMCUsIDYyJSk7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDAuNHJlbTtcbiAgICAgICAgcGFkZGluZzogMC41cmVtO1xuICAgICAgICBtYXJnaW46IDAuNXJlbTtcbiAgICAgICB9XG4gICAgLmFib3V0LWFkZHM6aG92ZXJ7XG4gICAgICAgIGJveC1zaGFkb3c6IHJnYigyNTEsIDAsIDApIC0xcHggM3B4IDNweDtcbiAgICB9XG4gICAgLmFkZC1ob2xkZXIsLmFkZC1oZWFkZXJ7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgZ2FwOjFyZW07XG4gICAgfVxuICAgIC5hZGQtdGl0bGV7XG4gICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgIH1cbiAgICAuYWJvdXQtcGxhbntcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICB9XG4gICAgLmFkZC10aXRsZSwuYWRkLXBsYW57XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICB9XG4gICAgLnVzZXItYWRke1xuICAgICAgICB3aWR0aDogMXJlbTtcbiAgICAgICAgaGVpZ2h0OiAxcmVtO1xuICAgICAgICBtYXJnaW4tdG9wOiAwLjVyZW07XG4gICAgfVxuICAgIC8qIHRhYiBmb3VyICovXG4gICAgLnRhYi1mb3Vye1xuICAgICAgICBtYXJnaW46IDEuNXJlbTtcbiAgICB9XG4gICAgLnN1bW1hcnktcGxhbiwgLmFkZC1kZXRhaWwsIC5zdW1tYXJ5LXRvdGFse1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgcGFkZGluZzogMC41cmVtO1xuICAgICAgIGNvbG9yOmhzbCgyMTMsIDk2JSwgMTglKTtcbiAgICAgICBcbiAgICB9XG4gICAgLnN1bW1hcnktc2VydmljZXN7XG4gICAgICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XG4gICAgfVxuICAgLmFkZC1kZXRhaWwgPiBwe1xuICAgIG1hcmdpbjogMDtcbiAgIH1cbiAgICBcbiAgICAuc2VsZWN0ZWQtcGxhbntcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAwLjVyZW07XG5cbiAgICB9XG4gICAgLnN1bW1hcnktcHJpY2V7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgIH1cbiAgICAuY2hhbmdlLXBsYW57XG4gICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgXG4gICAgfVxuICAgIC5jaGFuZ2UtcGxhbjpob3ZlcntcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICBoc2woMjQzLCAxMDAlLCA2MiUpO1xuICAgICAgICBjb2xvcjogaHNsKDI0MywgMTAwJSwgNjIlKTtcbiAgICB9XG4gICAgLmFkZC1uYW1lLCAuY2hhbmdlLXBsYW57XG4gICAgICAgIGNvbG9yOmhzbCgyMzEsIDExJSwgNjMlKSA7IFxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgfVxuICAgIC5vbmxpbmUtcHJpY2UsIC50aGVtZS1wcmljZSwgLnN0b3JhZ2UtcHJpY2V7XG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICB9XG4gICAgLnRvdGFsLXByaWNle1xuICAgICAgICBmb250LXdlaWdodDogOTAwO1xuICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICB9XG4gICAgXG4gICAgaHJ7XG4gICAgICAgIG1hcmdpbjogMXJlbTtcbiAgICB9XG4gICAgLnNlcnZpY2UtaG9sZGVye1xuICAgICAgICBwYWRkaW5nOiAwLjVyZW07XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGhzbCgyMjksIDI0JSwgODclKTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xuICAgICAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuICAgICAgICB9XG4gICAgLmJhY2stYnRue1xuICAgICAgICBjb2xvcjpoc2woMjMxLCAxMSUsIDYzJSkgOyBcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDIzMSwgMTAwJSwgOTklKTtcbiAgICAgICAgfVxuICAgIC8qIHN0ZXAgZml2ZSB0YWIqL1xuICAgIC5zdGVwLWZpdmV7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBwYWRkaW5nOiAxcmVtO1xuICAgICAgICBtYXJnaW4tdG9wOiAxNSU7XG4gICAgICAgIFxuICAgIH1cbiAgICAuY29uZmlybS10ZXh0e1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuQG1lZGlhIChtYXgtd2lkdGg6NTY1cHgpIHtcbiAgICAvKiBuYXYgKi9cbiAgICBib2R5e1xuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDIwNiwgOTQlLCA4NyUpO1xuICAgICAgICB9XG4gICAgbmF2e1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOnVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX199KSA7XG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IHRvcDtcbiAgICAgICAgaGVpZ2h0OiAzMHZoO1xuICAgICAgICB3aWR0aDogMTAwdnc7XG4gICAgfVxuICAgIHVse1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIH1cbiAgIC5uYXYtZGVzY3JpcHRpb257XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICAgIC8qIHN0ZXAgb25lICovXG4gICAgLnN0ZXAtb25le1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGJvdHRvbTogMTYlO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XG4gICAgICAgIHdpZHRoOiA3MCU7XG4gICAgICAgIG1heC1oZWlnaHQ6IDQ5MHB4O1xuICAgIH1cbiAgICBpbnB1dHtcbiAgICAgICAgd2lkdGg6IDgwJTtcbiAgICB9XG4gICAgLmVycm9yLW1zZ3tcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHRleHQtYWxpZ246IHN0YXJ0O1xuICAgIH1cbiAgICAuc3RlcC10d28sIC50YWItdGhyZWUsIC50YWItZm91ciwgLnN0ZXAtZml2ZXtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XG4gICAgICAgIHdpZHRoOiA3MCU7XG4gICAgICAgfVxuICAgICAgIC5zdGVwLXR3b3tcbiAgICAgICAgYm90dG9tOiA2cmVtO1xuICAgICAgIH1cbiAgICAgICAudGFiLXRocmVle1xuICAgICAgICBib3R0b206IDhyZW07XG4gICAgICAgfVxuICAgICAgIC50YWItZm91cntcbiAgICAgICAgYm90dG9tOiA2LjRyZW07XG4gICAgICAgIHJpZ2h0OiAxcmVtO1xuICAgICAgIH1cbiAgICAgICAuc3RlcC1maXZle1xuICAgICAgICBib3R0b206IDEwcmVtO1xuICAgICAgIH1cbiAgICAgICBcbiAgICAuYWRkLWhlYWRlcntcbiAgICAgICAgZ2FwOiAwLjNyZW07XG4gICAgfVxuICAgIC8qIHN0ZXAgdGhyZWUgKi9cbiAgICBcbiAgICAuYWJvdXQtYWRkc3tcbiAgICAgICBwYWRkaW5nOiAwLjVyZW07XG4gICAgICAgbWFyZ2luOiAwO1xuICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gICAgICAgXG4gICAgfVxuICAgIFxuICAgIC5hZGQtdGl0bGV7XG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICB9XG4gICAgLmFkZC1wbGFue1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICBmb250LXNpemU6IDAuN3JlbTtcbiAgICAgICAgfVxuICAgXG4gICAgLyogc3RlcCB0d28gY2FyZHMgKi9cbiAgICAucGxhbnN7XG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgZ2FwOiAwLjVyZW07XG4gICAgfVxuICAgIC5lcnJvci1jYXJke1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgfVxuICAgIC5wbGFuLWZlZXtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgZm9udC1zaXplOiAwLjdyZW07XG4gICAgfVxuIFxuLm5hdi1idG5ze1xuICAgIG1hcmdpbjogMDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAyOHJlbTtcbiAgICByaWdodDogMC4xcmVtO1xufVxuLmJ0bi1ob2xkZXJ7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogMnJlbTtcbiAgICBsZWZ0OiAzNSU7XG59XG5cbi50YWItZm91ciA+IC5uYXYtYnRuc3tcbiAgICB0b3A6IDI4cmVtO1xufVxuLnNlcnZpY2UtaG9sZGVye1xuICAgIGhlaWdodDogMjcwcHg7XG59XG5cbiAgICAucGxhbi1ob2xkZXJ7XG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgaGVpZ2h0OiA4NHB4O1xuICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgfVxuICAgIC5hYm91dC1wbGFuIHtcbiAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBnYXA6IDAuNXJlbTtcbiAgICB9XG4gICAgLnRvZ2dsZS1ob2xkZXJ7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgbWFyZ2luLXRvcDogM3B4O1xuICAgIH1cbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsMkJBQTJCO0FBQzNCO0lBQ0ksa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLDREQUF5RTtFQUMzRTtBQUNGO0lBQ0ksbUNBQW1DO0lBQ25DLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIscUJBQXFCO0lBQ3JCLGFBQWE7SUFDYixjQUFjO0lBQ2QsOEJBQThCO0lBQzlCLHlCQUF5QjtBQUM3QjtBQUNBLGNBQWM7O0FBRWQ7SUFDSSx5REFBNkQ7SUFDN0QsNEJBQTRCO0lBQzVCLHNCQUFzQjtJQUN0Qiwy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STtRQUNJLGVBQWU7UUFDZixXQUFXO1FBQ1gsdUJBQXVCO1FBQ3ZCLHVCQUF1QjtRQUN2QixZQUFZO1FBQ1osWUFBWTtJQUNoQjtJQUNBO09BQ0csbUJBQW1CO1FBQ2xCLG1CQUFtQjtRQUNuQixXQUFXO0lBQ2Y7SUFDQTtRQUNJLFNBQVM7UUFDVCxlQUFlO0lBQ25CO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogdWJ1bnR1LXJlZ3VsYXIgLSBsYXRpbiAqL1xcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWRpc3BsYXk6IHN3YXA7IFxcbiAgICBmb250LWZhbWlseTogJ1VidW50dSc7XFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgc3JjOiB1cmwoJy4vYXNzZXRzL2ZvbnRzL3VidW50dS12MjAtbGF0aW4tcmVndWxhci53b2ZmMicpIGZvcm1hdCgnd29mZjInKTsgXFxuICB9XFxuYm9keXtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIGhzbCgwLCAwJSwgMTAwJSk7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgICBtYXgtd2lkdGg6IDEwMHZ3O1xcbiAgICBmb250LWZhbWlseTogJ1VidW50dSc7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIG1hcmdpbjogMC41cmVtO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyZnI7XFxuICAgIGNvbG9yOiBoc2woMjEzLCA5NiUsIDE4JSk7XFxufVxcbi8qIG5hdiBzdHlsZSAqL1xcblxcbm5hdntcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vYXNzZXRzL2ltYWdlcy9iZy1zaWRlYmFyLWRlc2t0b3Auc3ZnKTtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogYm90dG9tO1xcbiAgICBoZWlnaHQ6IDk1dmg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gIH1cXG51bHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcbmxpe1xcbiAgICBtYXJnaW46IDFyZW07XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG4ubmF2LWhvbGRlcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAxcmVtO1xcbn1cXG4uc3RlcC1uYW1le1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuLnN0ZXAtbmFtZTpob3ZlcntcXG4gICAgdGV4dC1zaGFkb3c6IDJweCAycHggIHJnYigxMDEsIDUsIDExOCk7XFxuICAgIH1cXG4uZG90e1xcbiAgICB3aWR0aDogMnJlbTtcXG4gICAgaGVpZ2h0OiAycmVtO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlcjogMnB4IHJnYigyNTUsIDI1NSwgMjU1KSBzb2xpZDtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcbiAgICB9XFxuICAgIC5kb3Q6aG92ZXJ7XFxuICAgICAgICBib3JkZXI6IHJnYigyMzIsIDMxLCAyNDcpIHNvbGlkIDNweDtcXG4gICAgfVxcbi5zdGVwLW51bXtcXG4gICAgY29sb3I6IGhzbCgyMjgsIDEwMCUsIDg0JSk7XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcbmgxe1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGNvbG9yOmhzbCgyMTMsIDk2JSwgMTglKTtcXG59XFxuLmluc3RydWN0aW9uLCAucGxhbi1mZWUsIC5hZGQtcGxhbiAsIC5jb25maXJtLXRleHQge1xcbiAgICBjb2xvcjpoc2woMjMxLCAxMSUsIDYzJSkgO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIH1cXG4gICAgLmNvbmZpcm0tdGV4dHtcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgIH1cXG5cXG4uYmFjay1idG57XFxuICAgIGNvbG9yOmhzbCgyMzEsIDExJSwgNjMlKSA7IFxcbn1cXG4vKiBwZXJzb25hbCBpbmZvIGZvcm0gKi9cXG4uc3RlcC1vbmUsIC5zdGVwLXR3bywgLnRhYi10aHJlZSwgLnRhYi1mb3VyICwgLnN0ZXAtZml2ZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIG1hcmdpbjogMXJlbTtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDAsIDAlLCAxMDAlKTtcXG4gICAgcGFkZGluZzogMXJlbTtcXG5cXG4gICAgIH1cXG4gIC5lcnJvci1tc2d7XFxuICAgIG1hcmdpbjogMXB4O1xcbiAgICB3aWR0aDogNjAlO1xcbiAgICBjb2xvcjogIGhzbCgzNTQsIDg0JSwgNTclKTtcXG4gICAgdGV4dC1hbGlnbjogZW5kO1xcbn1cXG5cXG4ubGFiZWwtaG9sZGVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBtYXJnaW46IDAuM3JlbTtcXG4gICAgXFxufVxcbmlucHV0e1xcbiAgICB3aWR0aDogNjAlO1xcbiAgIGJvcmRlcjogMXB4IHJnYig1NSwgNTUsIDU1KSBzb2xpZDtcXG4gICBwYWRkaW5nOiAwLjZyZW07XFxuICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgIGNvbG9yOmhzbCgyMTQsIDkzJSwgMTIlKTtcXG4gICBmb250LXdlaWdodDogNTAwO1xcbiAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gfVxcbmxhYmVse1xcbiAgICBjb2xvcjpoc2woMjEzLCA5NiUsIDE4JSk7O1xcbn1cXG4uaW52YWxpZHtcXG4gICAgYm9yZGVyOiAycHggIGhzbCgzNTQsIDg0JSwgNTclKSBzb2xpZDtcXG4gICB9XFxuLnZhbGlke1xcbiAgICBib3JkZXI6IDJweCBncmVlbiAgc29saWQ7XFxuICAgfVxcbiAgIC5idG4taG9sZGVye1xcbiAgICB3aWR0aDogNjQlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcXG4gICAgbWFyZ2luLXRvcDogM3JlbTtcXG4gIH1cXG4gICAgaW5wdXQ6Zm9jdXN7XFxuICAgICAgICBib3JkZXI6M3B4IHNvbGlkIHJnYigwLCA0LCAyNTUpO1xcbiAgICAgICAgfVxcbiAgICAvKiB0YWIgdHdvICovXFxuICAgIC5wbGFuc3tcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBnYXA6IDFyZW07XFxuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgICAgICB9XFxuICAgLnBsYW4taG9sZGVye1xcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIGhzbCgyMTMsIDk2JSwgMTglKTtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgYWxpZ24taXRlbXM6ZmxleC1zdGFydDtcXG4gICAgICAgIHdpZHRoOiAyMDBweDtcXG4gICAgICAgIGhlaWdodDogMTkwcHg7XFxuICAgICAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgfVxcbiAgIC5wbGFuLWhvbGRlcjpob3ZlcntcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGhzbCgyMjksIDI0JSwgODclKTtcXG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIGhzbCgyNDMsIDEwMCUsIDYyJSk7XFxuICAgfVxcbiAgIC5hYm91dC1wbGFue1xcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gICAgICAgIHdpZHRoOiBmaXQtY29udGVudDtcXG4gICB9XFxuICAgLnBsYW4tZGV0YWlsLCAuYWJvdXQtcGxhbntcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgZ2FwOiAwLjNyZW07XFxuICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gICB9XFxuICAgLnBsYW4tbmFtZXtcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgICAgICBjb2xvcjogaHNsKDIxMywgOTYlLCAxOCUpO1xcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xcbiAgIH1cXG4gICAuaWNvbi1ob2xkZXJ7XFxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEuNXJlbTtcXG4gICB9IFxcbiAgIC50b2dnbGUtaG9sZGVye1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGdhcDogMXJlbTtcXG4gICAgICAgIG1hcmdpbjogMXJlbTtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6NXB4IDtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6aHNsKDIyOSwgMjQlLCA4NyUpO1xcbiAgICAgICAgcGFkZGluZzogMC41cmVtO1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgICB9XFxuICAgLnRvZ2dsZXtcXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICAgIHdpZHRoOiA1MHB4O1xcbiAgICAgICAgaGVpZ2h0OiAzMHB4O1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjpoc2woMjEzLCA5NiUsIDE4JSk7XFxuICAgICAgICBib3JkZXI6IG5vbmU7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XFxuICAgIH1cXG4gICAudG9nZ2xlOjphZnRlcntcXG4gICAgICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgaGVpZ2h0OiAyMHB4O1xcbiAgICAgICAgd2lkdGg6IDIwcHg7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgICAgICB0b3A6IDVweDtcXG4gICAgICAgIGxlZnQ6IDFweDtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGhzbCgwLCAwJSwgMTAwJSk7XFxuICAgfVxcbiAgLmNoZWNrYm94OmNoZWNrZWQgKyAudG9nZ2xlOjphZnRlcntcXG4gICAgICAgIGxlZnQ6IDI1cHg7XFxuICAgICB9XFxuICAgIC5jaGVja2JveHtcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIH1cXG4gICAgLm5hdi1idG5ze1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcXG4gICAgICAgIG1hcmdpbjogMXJlbTtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGhzbCgwLCAwJSwgMTAwJSk7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICAgICAgICB3aWR0aDogOTAlO1xcbiAgICAgICAgcGFkZGluZzogMC42cmVtO1xcblxcbiAgICAgfVxcbiAgICBcXG4gICAgLnRhYi10d28tYnRuLCAudGFiLXRocmVlLWJ0biwgLnRhYi1mb3VyLWJ0biwgLnRhYi1mb3VyLWNvbmZpcm0tYnRuICwgLnRhYi1vbmUtYnRue1xcbiAgICAgICAgcGFkZGluZzogMXJlbTtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGhzbCgyMTMsIDk2JSwgMTglKTtcXG4gICAgICAgIGNvbG9yOiBhenVyZTtcXG4gICAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICAgIHdpZHRoOiBmaXQtY29udGVudDtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gICAgfVxcbiAgIFxcbiAgIC5hYm91dC1hZGRze1xcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgIGhzbCgyNDMsIDEwMCUsIDYyJSk7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiAwLjRyZW07XFxuICAgICAgICBwYWRkaW5nOiAwLjVyZW07XFxuICAgICAgICBtYXJnaW46IDAuNXJlbTtcXG4gICAgICAgfVxcbiAgICAuYWJvdXQtYWRkczpob3ZlcntcXG4gICAgICAgIGJveC1zaGFkb3c6IHJnYigyNTEsIDAsIDApIC0xcHggM3B4IDNweDtcXG4gICAgfVxcbiAgICAuYWRkLWhvbGRlciwuYWRkLWhlYWRlcntcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICAgICAgZ2FwOjFyZW07XFxuICAgIH1cXG4gICAgLmFkZC10aXRsZXtcXG4gICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgfVxcbiAgICAuYWJvdXQtcGxhbntcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAgIH1cXG4gICAgLmFkZC10aXRsZSwuYWRkLXBsYW57XFxuICAgICAgICBtYXJnaW46IDA7XFxuICAgIH1cXG4gICAgLnVzZXItYWRke1xcbiAgICAgICAgd2lkdGg6IDFyZW07XFxuICAgICAgICBoZWlnaHQ6IDFyZW07XFxuICAgICAgICBtYXJnaW4tdG9wOiAwLjVyZW07XFxuICAgIH1cXG4gICAgLyogdGFiIGZvdXIgKi9cXG4gICAgLnRhYi1mb3Vye1xcbiAgICAgICAgbWFyZ2luOiAxLjVyZW07XFxuICAgIH1cXG4gICAgLnN1bW1hcnktcGxhbiwgLmFkZC1kZXRhaWwsIC5zdW1tYXJ5LXRvdGFse1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgICAgcGFkZGluZzogMC41cmVtO1xcbiAgICAgICBjb2xvcjpoc2woMjEzLCA5NiUsIDE4JSk7XFxuICAgICAgIFxcbiAgICB9XFxuICAgIC5zdW1tYXJ5LXNlcnZpY2Vze1xcbiAgICAgICAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gICAgfVxcbiAgIC5hZGQtZGV0YWlsID4gcHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgIH1cXG4gICAgXFxuICAgIC5zZWxlY3RlZC1wbGFue1xcbiAgICAgICAgbWFyZ2luOiAwO1xcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDAuNXJlbTtcXG5cXG4gICAgfVxcbiAgICAuc3VtbWFyeS1wcmljZXtcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgfVxcbiAgICAuY2hhbmdlLXBsYW57XFxuICAgICAgICBvdXRsaW5lOiBub25lO1xcbiAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgICAgcGFkZGluZzogMDtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgXFxuICAgIH1cXG4gICAgLmNoYW5nZS1wbGFuOmhvdmVye1xcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICBoc2woMjQzLCAxMDAlLCA2MiUpO1xcbiAgICAgICAgY29sb3I6IGhzbCgyNDMsIDEwMCUsIDYyJSk7XFxuICAgIH1cXG4gICAgLmFkZC1uYW1lLCAuY2hhbmdlLXBsYW57XFxuICAgICAgICBjb2xvcjpoc2woMjMxLCAxMSUsIDYzJSkgOyBcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgICAgICBmb250LXNpemU6IDFyZW07XFxuICAgIH1cXG4gICAgLm9ubGluZS1wcmljZSwgLnRoZW1lLXByaWNlLCAuc3RvcmFnZS1wcmljZXtcXG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgIH1cXG4gICAgLnRvdGFsLXByaWNle1xcbiAgICAgICAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICB9XFxuICAgIFxcbiAgICBocntcXG4gICAgICAgIG1hcmdpbjogMXJlbTtcXG4gICAgfVxcbiAgICAuc2VydmljZS1ob2xkZXJ7XFxuICAgICAgICBwYWRkaW5nOiAwLjVyZW07XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMjI5LCAyNCUsIDg3JSk7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICAgICAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgICAgICAgfVxcbiAgICAuYmFjay1idG57XFxuICAgICAgICBjb2xvcjpoc2woMjMxLCAxMSUsIDYzJSkgOyBcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGhzbCgyMzEsIDEwMCUsIDk5JSk7XFxuICAgICAgICB9XFxuICAgIC8qIHN0ZXAgZml2ZSB0YWIqL1xcbiAgICAuc3RlcC1maXZle1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgcGFkZGluZzogMXJlbTtcXG4gICAgICAgIG1hcmdpbi10b3A6IDE1JTtcXG4gICAgICAgIFxcbiAgICB9XFxuICAgIC5jb25maXJtLXRleHR7XFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIH1cXG5AbWVkaWEgKG1heC13aWR0aDo1NjVweCkge1xcbiAgICAvKiBuYXYgKi9cXG4gICAgYm9keXtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDIwNiwgOTQlLCA4NyUpO1xcbiAgICAgICAgfVxcbiAgICBuYXZ7XFxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOnVybCguL2Fzc2V0cy9pbWFnZXMvYmctc2lkZWJhci1tb2JpbGUuc3ZnKSA7XFxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiB0b3A7XFxuICAgICAgICBoZWlnaHQ6IDMwdmg7XFxuICAgICAgICB3aWR0aDogMTAwdnc7XFxuICAgIH1cXG4gICAgdWx7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICB9XFxuICAgLm5hdi1kZXNjcmlwdGlvbntcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIH1cXG4gICAgLyogc3RlcCBvbmUgKi9cXG4gICAgLnN0ZXAtb25le1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgYm90dG9tOiAxNiU7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICAgICAgICB3aWR0aDogNzAlO1xcbiAgICAgICAgbWF4LWhlaWdodDogNDkwcHg7XFxuICAgIH1cXG4gICAgaW5wdXR7XFxuICAgICAgICB3aWR0aDogODAlO1xcbiAgICB9XFxuICAgIC5lcnJvci1tc2d7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIHRleHQtYWxpZ246IHN0YXJ0O1xcbiAgICB9XFxuICAgIC5zdGVwLXR3bywgLnRhYi10aHJlZSwgLnRhYi1mb3VyLCAuc3RlcC1maXZle1xcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgICAgICAgd2lkdGg6IDcwJTtcXG4gICAgICAgfVxcbiAgICAgICAuc3RlcC10d297XFxuICAgICAgICBib3R0b206IDZyZW07XFxuICAgICAgIH1cXG4gICAgICAgLnRhYi10aHJlZXtcXG4gICAgICAgIGJvdHRvbTogOHJlbTtcXG4gICAgICAgfVxcbiAgICAgICAudGFiLWZvdXJ7XFxuICAgICAgICBib3R0b206IDYuNHJlbTtcXG4gICAgICAgIHJpZ2h0OiAxcmVtO1xcbiAgICAgICB9XFxuICAgICAgIC5zdGVwLWZpdmV7XFxuICAgICAgICBib3R0b206IDEwcmVtO1xcbiAgICAgICB9XFxuICAgICAgIFxcbiAgICAuYWRkLWhlYWRlcntcXG4gICAgICAgIGdhcDogMC4zcmVtO1xcbiAgICB9XFxuICAgIC8qIHN0ZXAgdGhyZWUgKi9cXG4gICAgXFxuICAgIC5hYm91dC1hZGRze1xcbiAgICAgICBwYWRkaW5nOiAwLjVyZW07XFxuICAgICAgIG1hcmdpbjogMDtcXG4gICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG4gICAgICAgXFxuICAgIH1cXG4gICAgXFxuICAgIC5hZGQtdGl0bGV7XFxuICAgICAgICBmb250LXNpemU6IDFyZW07XFxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICB9XFxuICAgIC5hZGQtcGxhbntcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAgICAgICBmb250LXNpemU6IDAuN3JlbTtcXG4gICAgICAgIH1cXG4gICBcXG4gICAgLyogc3RlcCB0d28gY2FyZHMgKi9cXG4gICAgLnBsYW5ze1xcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICAgICAgZ2FwOiAwLjVyZW07XFxuICAgIH1cXG4gICAgLmVycm9yLWNhcmR7XFxuICAgICAgICBtYXJnaW46IDA7XFxuICAgICAgICBwYWRkaW5nOiAwO1xcbiAgICB9XFxuICAgIC5wbGFuLWZlZXtcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgICAgICBmb250LXNpemU6IDAuN3JlbTtcXG4gICAgfVxcbiBcXG4ubmF2LWJ0bnN7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDI4cmVtO1xcbiAgICByaWdodDogMC4xcmVtO1xcbn1cXG4uYnRuLWhvbGRlcntcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB0b3A6IDJyZW07XFxuICAgIGxlZnQ6IDM1JTtcXG59XFxuXFxuLnRhYi1mb3VyID4gLm5hdi1idG5ze1xcbiAgICB0b3A6IDI4cmVtO1xcbn1cXG4uc2VydmljZS1ob2xkZXJ7XFxuICAgIGhlaWdodDogMjcwcHg7XFxufVxcblxcbiAgICAucGxhbi1ob2xkZXJ7XFxuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICBoZWlnaHQ6IDg0cHg7XFxuICAgICAgICBwYWRkaW5nOiA1cHg7XFxuICAgIH1cXG4gICAgLmFib3V0LXBsYW4ge1xcbiAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIGdhcDogMC41cmVtO1xcbiAgICB9XFxuICAgIC50b2dnbGUtaG9sZGVye1xcbiAgICAgICAgbWFyZ2luOiAwO1xcbiAgICAgICAgbWFyZ2luLXRvcDogM3B4O1xcbiAgICB9XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gY2xhc3MgdG8gaG9sZCBpbmZvXG5leHBvcnQgY2xhc3MgVXNlclBlcnNvbmFsSW5mbyB7XG4gIGNvbnN0cnVjdG9yKG9wdGlvbnMgPSB7fSkge1xuICAgIHRoaXMubmFtZSA9IG9wdGlvbnMubmFtZSB8fCBcIlwiO1xuICAgIHRoaXMuZW1haWwgPSBvcHRpb25zLmVtYWlsIHx8IFwiXCI7XG4gICAgdGhpcy5waG9uZSA9IG9wdGlvbnMucGhvbmUgfHwgXCJcIjtcbiAgfVxufVxuZXhwb3J0IGNsYXNzIFVzZXJQbGFuRGF0YSB7XG4gIGNvbnN0cnVjdG9yKG9wdGlvbnMgPSB7fSkge1xuICAgIHRoaXMucGxhbiA9IG9wdGlvbnMucGxhbiB8fCBmYWxzZTtcbiAgICAvLyBjaGVja2JveFxuICAgIHRoaXMuY2hlY2tib3ggPSBvcHRpb25zLmNoZWNrYm94IHx8IFwiXCI7XG4gICAgdGhpcy5hcmNhZGUgPSBvcHRpb25zLmFyY2FkZSB8fCBcIlwiO1xuICAgIHRoaXMuYWR2YW5jZWQgPSBvcHRpb25zLmFkdmFuY2VkIHx8IFwiXCI7XG4gICAgdGhpcy5wcm8gPSBvcHRpb25zLnBybyB8fCBcIlwiO1xuICAgIHRoaXMuYm9udXMgPSBvcHRpb25zLmJvbnVzIHx8IFwibm9uZVwiO1xuICAgIHRoaXMuc2VsZWN0ZWRQbGFuID0gb3B0aW9ucy5zZWxlY3RlZFBsYW4gfHwgXCJcIjtcbiAgICB0aGlzLm1vbmh0bHkgPSBvcHRpb25zLm1vbnRobHkgfHwgXCJcIjtcbiAgICB0aGlzLnllYXJseSA9IG9wdGlvbnMueWVhcmx5IHx8IFwiXCI7XG4gIH1cblxuICB5ZWFybHlQcmljZSgpIHtcbiAgICB0aGlzLmFyY2FkZSA9IFwiJDkwL3lyXCI7XG4gICAgdGhpcy5hZHZhbmNlZCA9IFwiJDEyMC95clwiO1xuICAgIHRoaXMucHJvID0gXCIkMTUwL3lyXCI7XG4gIH1cblxuICBtb250aGx5UHJpY2UoKSB7XG4gICAgdGhpcy5hcmNhZGUgPSBcIiQ5L21vXCI7XG4gICAgdGhpcy5hZHZhbmNlZCA9IFwiJDEyL21vXCI7XG4gICAgdGhpcy5wcm8gPSBcIiQxNS9tb1wiO1xuICB9XG5cbiAgY2hvb3NlblBsYW4oKSB7XG4gICAgaWYgKHRoaXMucGxhbiA9PT0gdHJ1ZSkge1xuICAgICAgdGhpcy55ZWFybHlQcmljZSgpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5wbGFuID09PSBmYWxzZSkge1xuICAgICAgdGhpcy5tb250aGx5UHJpY2UoKTtcbiAgICB9XG4gIH1cblxuICBzdHlsZSgpIHtcbiAgICBpZiAodGhpcy5wbGFuID09PSBmYWxzZSkge1xuICAgICAgdGhpcy5tb250aGx5ID0gXCJoc2woMjEzLCA5NiUsIDE4JVwiO1xuICAgICAgdGhpcy55ZWFybHkgPSBcImhzbCgyMzEsIDExJSwgNjMlKVwiO1xuICAgIH0gZWxzZSBpZiAodGhpcy5wbGFuID09PSB0cnVlKSB7XG4gICAgICB0aGlzLm1vbnRobHkgPSBcImhzbCgyMTMsIDk2JSwgMTglXCI7XG4gICAgICB0aGlzLnllYXJseSA9IFwiaHNsKDIzMSwgMTElLCA2MyUpXCI7XG4gICAgfVxuICB9XG59XG5leHBvcnQgY2xhc3MgVXNlclNlcnZpY2VzIHtcbiAgY29uc3RydWN0b3Iob3B0aW9ucyA9IHt9KSB7XG4gICAgLy8gZ2V0IHBsYW4gaWYgbWVvbnRobHkgb3IgeWVhcmx5KHRydWUgaXMgbW9udGhseSBzZXQgaW4gc3RlcCAyIG9yIHVzZXJkYXRhIG9iailcbiAgICB0aGlzLmFkZFBsYW4gPSBvcHRpb25zLmFkZFBsYW4gfHwgZmFsc2U7XG4gICAgLy9cblxuICAgIC8vIGNoZWNrYm94IHZhbHVlXG4gICAgdGhpcy5vbmxpbmUgPSBvcHRpb25zLm9ubGluZSB8fCBcIlwiO1xuICAgIHRoaXMuc3RvcmFnZSA9IG9wdGlvbnMuc3RvcmFnZSB8fCBcIlwiO1xuICAgIHRoaXMudGhlbWUgPSBvcHRpb25zLnRoZW1lIHx8IFwiXCI7XG4gICAgLy8gcHJpY2VcbiAgICB0aGlzLm9ubGluZVByaWNlID0gb3B0aW9ucy5vbmxpbmVQcmljZSB8fCBcIlwiO1xuICAgIHRoaXMuc3RvcmFnZVByaWNlID0gb3B0aW9ucy5vbmxpbmVQcmljZSB8fCBcIlwiO1xuICAgIHRoaXMudGhlbWVQcmljZSA9IG9wdGlvbnMub25saW5lUHJpY2UgfHwgXCJcIjtcbiAgfVxuXG4gIHllYXJseVByaWNlKCkge1xuICAgIHRoaXMub25saW5lUHJpY2UgPSBcIiskMTAveXJcIjtcbiAgICB0aGlzLnN0b3JhZ2VQcmljZSA9IFwiKyQyMC95clwiO1xuICAgIHRoaXMudGhlbWVQcmljZSA9IFwiKyQyMC95clwiO1xuICB9XG5cbiAgbW9udGhseVByaWNlKCkge1xuICAgIHRoaXMub25saW5lUHJpY2UgPSBcIiskMS9tb1wiO1xuICAgIHRoaXMuc3RvcmFnZVByaWNlID0gXCIrJDIvbW9cIjtcbiAgICB0aGlzLnRoZW1lUHJpY2UgPSBcIiskMi9tb1wiO1xuICB9XG5cbiAgY2hvb3NlblBsYW4oKSB7XG4gICAgaWYgKHRoaXMuYWRkUGxhbiA9PT0gdHJ1ZSkge1xuICAgICAgdGhpcy55ZWFybHlQcmljZSgpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5hZGRQbGFuID09PSBmYWxzZSkge1xuICAgICAgdGhpcy5tb250aGx5UHJpY2UoKTtcbiAgICB9XG4gIH1cbn1cblxuY29uc3QgdGFiT25lID0gZnVuY3Rpb24gKG9iaikge1xuICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBwZXJzb25hbEluZm8gPSBgIFxuICAgIDxkaXYgY2xhc3M9XCJzdGVwLW9uZVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1oZWFkZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImljb24taG9sZGVyXCI+PGltZyBzcmM9XCIuLi9zcmMvYXNzZXRzL2ltYWdlcy9pY29uLWFkdmFuY2VkLnN2Z1wiIGFsdD1cImljb24gZm9yIGFkdmFuY2VkIHBsYW5cIiA+PC9kaXY+XG4gICAgICAgICAgICA8aDE+UGVyc29uYWwgSW5mbzwvaDE+XG4gICAgICAgICAgICA8cCBjbGFzcz1cImluc3RydWN0aW9uXCI+cGxlYXNlIHByb3ZpZGUgeW91ciBuYW1lLGVtYWlsIGFkcmVzcyBhbmQgcGhvbmUgbnVtYmVyPC9wPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ob2xkZXJcIj5cbiAgICAgICAgICAgIDxmb3JtIGNsYXNzPVwicGVyc29uYWwtaW5mby1mb3JtXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxhYmVsLWhvbGRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwidXNlci1uYW1lXCI+TmFtZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiZXJyb3ItbXNnXCIgZGF0YS1lcnJvci1tc2c9MD48L3A+XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cInVzZXItbmFtZVwiIG5hbWU9XCJ1c2VyLW5hbWVcIiBjbGFzcz0ndXNlci1pbmZvJyBkYXRhLXVzZXItbmFtZSBkYXRhLWVycm9yPTAgbWlubGVuZ3RoPVwiMlwiXG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgbWF4bGVuZ3RoPVwiMjBcIiAgdmFsdWU9XCIke29iai5uYW1lfVwiPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsYWJlbC1ob2xkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInVzZXItZW1haWxcIj5FbWFpbCBBZHJlc3M8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJlcnJvci1tc2dcIiAgZGF0YS1lcnJvci1tc2c9MT48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJlbWFpbFwiIGlkPVwidXNlci1lbWFpbFwiIG5hbWU9XCJ1c2VyLWVtYWlsXCIgY2xhc3M9J3VzZXItaW5mbycgZGF0YS11c2VyLWVtYWlsIGRhdGEtZXJyb3I9MSAgdmFsdWU9XCIke29iai5lbWFpbH1cIj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsYWJlbC1ob2xkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInVzZXItcGhvbmVcIj5QaG9uZSBOdW1iZXI8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImVycm9yLW1zZ1wiICBkYXRhLWVycm9yLW1zZz0yPjwvcD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0ICBpZD1cInVzZXItcGhvbmVcIiBuYW1lPVwidXNlci1waG9uZVwiIGNsYXNzPSd1c2VyLWluZm8nIGRhdGEtdXNlci1waG9uZSBkYXRhLWVycm9yPTIgIG1pbmxlbmd0aD1cIjEwXCIgbWF4bGVuZ3RoPVwiMTVcbiAgICAgICAgICAgICAgICAgICAgIHZhbHVlPVwiJHtvYmoucGhvbmV9XCI+XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgXG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiYnRuLWhvbGRlclwiPjxidXR0b24gY2xhc3M9XCJ0YWItb25lLWJ0blwiPk5leHQgU3RlcDwvYnV0dG9uPjwvZGl2PlxuICAgIDwvZGl2PmA7XG4gIGRpdi5pbm5lckhUTUwgPSBwZXJzb25hbEluZm87XG4gIHJldHVybiBkaXY7XG59O1xuY29uc3QgdGFiVHdvID0gZnVuY3Rpb24gKG9iaikge1xuICBvYmouY2hvb3NlblBsYW4oKTtcbiAgb2JqLnN0eWxlKCk7XG4gIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHBsYW4gPSBgXG4gICAgPGRpdiBjbGFzcz1cInN0ZXAtdHdvXCI+XG4gICAgPGRpdiBjbGFzcz1cInBsYW4taGVhZGVyXCI+XG4gICAgICAgIDxoMT5TZWxlY3QgeW91ciBQbGFuPC9oMT5cbiAgICAgICAgPHAgY2xhc3M9XCJpbnN0cnVjdGlvblwiPnlvdSBoYXZlIHRoZSBvcHRpb24gbW9udGhseSBvciB5ZWFybHkgYmlsbGluZy48L3A+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cInBsYW5zXCIgZGF0YS1wbGFucyA+XG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJwbGFuLWhvbGRlclwiIGRhdGEtcGxhbj1cIjBcIj5cbiAgICAgICAgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYWJvdXQtcGxhblwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpY29uLWhvbGRlclwiPjxpbWcgc3JjPVwiLi4vc3JjL2Fzc2V0cy9pbWFnZXMvaWNvbi1hcmNhZGUuc3ZnXCIgYWx0PVwiaWNvbiBmb3IgYXJjYWRlIHBsYW5cIiA+PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBsYW4tZGV0YWlsXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGxhbi1uYW1lXCI+QXJjYWRlPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGxhbi1mZWVcIj4ke29iai5hcmNhZGV9PC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGxhbi1kZXNjcmlwdGlvblwiIGRhdGEtZ2lmdCBzdHlsZT0nZGlzcGxheToke29iai5ib251c307Jz4yIG1vbnRocyBmcmVlPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJwbGFuLWhvbGRlclwiIGRhdGEtcGxhbj1cIjFcIj5cbiAgICAgICAgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYWJvdXQtcGxhblwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpY29uLWhvbGRlclwiPjxpbWcgc3JjPVwiLi4vc3JjL2Fzc2V0cy9pbWFnZXMvaWNvbi1hZHZhbmNlZC5zdmdcIiBhbHQ9XCJpY29uIGZvciBhZHZhbmNlZCBwbGFuXCIgPjwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwbGFuLWRldGFpbFwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBsYW4tbmFtZVwiPkFkdmFuY2VkPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGxhbi1mZWVcIj4ke29iai5hZHZhbmNlZH08L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwbGFuLWRlc2NyaXB0aW9uXCIgZGF0YS1naWZ0IHN0eWxlPSdkaXNwbGF5OiR7b2JqLmJvbnVzfTsnPjIgbW9udGhzIGZyZWU8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInBsYW4taG9sZGVyXCIgIGRhdGEtcGxhbj1cIjJcIj5cbiAgICAgICAgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYWJvdXQtcGxhblwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpY29uLWhvbGRlclwiPjxpbWcgc3JjPVwiLi4vc3JjL2Fzc2V0cy9pbWFnZXMvaWNvbi1wcm8uc3ZnXCIgYWx0PVwiaWNvbiBmb3IgcHJvIHBsYW5cIiA+PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBsYW4tZGV0YWlsXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGxhbi1uYW1lXCI+UHJvPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGxhbi1mZWVcIj4ke29iai5wcm99PC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGxhbi1kZXNjcmlwdGlvblwiIGRhdGEtZ2lmdCBzdHlsZT0nZGlzcGxheToke29iai5ib251c307JyA+MiBtb250aHMgZnJlZTwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgXG4gICAgICA8L2Rpdj5cbiAgIDxwIGNsYXNzPVwiZXJyb3ItY2FyZFwiIGRhdGEtc2VsZWN0LXBsYW4gID48L3A+XG4gICA8ZGl2IGNsYXNzPVwidG9nZ2xlLWhvbGRlclwiPlxuICAgICAgICA8ZGl2IGRhdGEtbW9udGhseSBzdHlsZT1cImNvbG9yOiR7b2JqLm1vbnRobHl9O1wiPm1vbnRobHk8L2Rpdj5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJ1c2VyLXBsYW5cIiBpZD1cInVzZXItcGxhblwiIGNsYXNzPVwiY2hlY2tib3hcIiBkYXRhLWNob29zZS1wbGFuICAke29iai5jaGVja2JveH0+XG4gICAgICAgIDxsYWJlbCBmb3I9XCJ1c2VyLXBsYW5cIiBjbGFzcz1cInRvZ2dsZVwiPiA8L2xhYmVsPlxuICAgICAgICA8ZGl2IGRhdGEteWVhcmx5IHN0eWxlPVwiY29sb3I6JHtvYmoueWVhcmx5fTtcIj55ZWFybHk8L2Rpdj5cbiAgICA8L2Rpdj5cbjxkaXYgY2xhc3M9XCJuYXYtYnRuc1wiPlxuICAgIDxidXR0b24gY2xhc3M9XCJ0YWItdHdvLWJ0biBiYWNrLWJ0blwiICBkYXRhLXRhYi10d28tYmFjay1idG4+R28gQmFjazwvYnV0dG9uPlxuICAgIDxidXR0b24gY2xhc3M9XCJ0YWItdHdvLWJ0blwiIGRhdGEtdGFiLXR3by1uZXh0LWJ0bj5OZXh0IFN0ZXA8L2J1dHRvbj5cbjwvZGl2PlxuICAgPC9kaXY+XG4gICAgYDtcbiAgZGl2LmlubmVySFRNTCA9IHBsYW47XG4gIHJldHVybiBkaXY7XG59O1xuY29uc3QgdGFiVGhyZWUgPSBmdW5jdGlvbiAob2JqKSB7XG4gIG9iai5jaG9vc2VuUGxhbigpO1xuICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBzdG9yYWdlID0gYFxuICAgIDxkaXYgY2xhc3M9XCJ0YWItdGhyZWVcIj5cbiAgICA8ZGl2PlxuICAgICAgICA8aDE+UGljayBhZGQtb25zPC9oMT5cbiAgICAgICAgPHAgY2xhc3M9XCJpbnN0cnVjdGlvblwiPkFkZC1vbnMgZW5oYW5jZSB5b3VyIGdhbWluZyBleHBlcmllbmNlLjwvcD5cbiAgICA8L2Rpdj5cbiAgICAgICA8ZGl2IGNsYXNzPVwiYWJvdXQtYWRkc1wiPlxuICAgICAgIFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImFkZC1ob2xkZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYWRkLWhlYWRlclwiPlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwidXNlci1hZGRcIiBpZD1cImFkZC1vbnNcIiBjbGFzcz1cInVzZXItYWRkXCIgZGF0YS1hZGRzPVwiMFwiICR7b2JqLm9ubGluZX0+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzPVwiYWRkLXRpdGxlXCI+b25saW5lIHNlcnZpY2VzPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJhZGQtcGxhblwiPkFjY2VzcyB0byBtdWx0aXBsYXllciBnYW1lczwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXY+JHtvYmoub25saW5lUHJpY2V9PC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICA8ZGl2IGNsYXNzPVwiYWJvdXQtYWRkc1wiPlxuICAgICAgIFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImFkZC1ob2xkZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYWRkLWhlYWRlclwiPlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwidXNlci1hZGRcIiBpZD1cImFkZC1zdG9yYWdlXCIgY2xhc3M9XCJ1c2VyLWFkZFwiIGRhdGEtYWRkcz1cIjFcIiAke29iai5zdG9yYWdlfT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3M9XCJhZGQtdGl0bGVcIj5MYXJnZSBzdG9yYWdlPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJhZGQtcGxhblwiPkV4dHJhIDFUQiBjbG91ZCBzYXZlPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdj4ke29iai5zdG9yYWdlUHJpY2V9PC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJhYm91dC1hZGRzXCI+XG4gICAgICAgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYWRkLWhvbGRlclwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhZGQtaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJ1c2VyLWFkZFwiIGlkPVwiYWRkLXRoZW1lXCIgY2xhc3M9XCJ1c2VyLWFkZFwiIGRhdGEtYWRkcz1cIjJcIiAke29iai50aGVtZX0+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzPVwiYWRkLXRpdGxlXCI+Q3VzdG9taXphYmxlIHByb2ZpbGU8L2gyPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImFkZC1wbGFuXCI+Q3VzdG9tIHRoZW1lIG9uIHlvdXIgcHJvZmlsZTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXY+JHtvYmoudGhlbWVQcmljZX08L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgIDwvZGl2PlxuICAgICAgIDxkaXYgY2xhc3M9XCJuYXYtYnRuc1wiPlxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwidGFiLXRocmVlLWJ0biBiYWNrLWJ0blwiICBkYXRhLXRhYi10aHJlZS1iYWNrLWJ0biA+R28gQmFjazwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwidGFiLXRocmVlLWJ0blwiIGRhdGEtdGFiLXRocmVlLW5leHQtYnRuID5OZXh0IFN0ZXA8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgIDwvZGl2PlxuICAgIGA7XG4gIGRpdi5pbm5lckhUTUwgPSBzdG9yYWdlO1xuICByZXR1cm4gZGl2O1xufTtcbmNvbnN0IHRhYkZvdXIgPSBmdW5jdGlvbiAob2JqT25lLCBvYmpUd28pIHtcbiAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3Qgc3VtbWFyeSA9IGBcbiAgICA8ZGl2IGNsYXNzPVwidGFiLWZvdXJcIj5cbiAgICA8ZGl2IGNsYXNzPVwiY29uZmlybS1oZWFkZXJcIj5cbiAgICAgICAgPGgxPkZpbmlzaGluZyB1cDwvaDE+XG4gICAgICAgIDxwIGNsYXNzPVwiaW5zdHJ1Y3Rpb25cIj5Eb3VibGUtY2hlY2sgZXZlcnl0aGluZyBsb29rcyBPSyBiZWZvcmUgY29uZmlybWluZy48L3A+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cInNlcnZpY2UtaG9sZGVyXCI+XG4gICAgPGRpdiBjbGFzcz1cInN1bW1hcnktcGxhblwiPlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJwbGFuXCI+XG4gICAgICAgICAgICA8aDIgY2xhc3M9XCJzZWxlY3RlZC1wbGFuXCI+JHtzdW1tYXJ5UGxhbihvYmpPbmUpLnBsYW5OYW1lfSgke3N1bW1hcnlQbGFuKG9iak9uZSkucGxhbn0pPC9oMj5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJjaGFuZ2UtcGxhblwiPkNoYW5nZTwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInN1bW1hcnktcHJpY2VcIj4ke3N1bW1hcnlQbGFuKG9iak9uZSkucHJpY2V9PC9kaXY+XG4gICAgICAgXG4gICAgIDwvZGl2PlxuICAgICAgIDxocj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInN1bW1hcnktc2VydmljZXNcIj5cblxuICAgICAgICAgICAgXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhZGQtZGV0YWlsXCI+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJhZGQtbmFtZVwiPiAke3N1bW1hcnlBZGRzKG9ialR3bykuZmlyc3RBZGR9IDwvcD5cbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cIm9ubGluZS1wcmljZVwiPiR7c3VtbWFyeUFkZHMob2JqVHdvKS5vbmxpbmVQcmljZX08L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYWRkLWRldGFpbFwiPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiYWRkLW5hbWVcIj4gJHtzdW1tYXJ5QWRkcyhvYmpUd28pLnNlY29uZEFkZH0gPC9wPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwic3RvcmFnZS1wcmljZVwiPiR7c3VtbWFyeUFkZHMob2JqVHdvKS5zdG9yYWdlUHJpY2V9PC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImFkZC1kZXRhaWxcIj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImFkZC1uYW1lXCI+ICR7c3VtbWFyeUFkZHMob2JqVHdvKS50aGlyZEFkZH0gPC9wPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwidGhlbWUtcHJpY2VcIj4ke3N1bW1hcnlBZGRzKG9ialR3bykudGhlbWVQcmljZX08L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInN1bW1hcnktdG90YWxcIj5cbiAgICAgICAgICAgIDxwIGNsYXNzPVwidG90YWwtdGl0bGVcIj5Ub3RhbCBwZXIgeWVhcjwvcD5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidG90YWwtcHJpY2VcIj4ke3RvdGFsUHJpY2Uob2JqT25lLCBvYmpUd28pfTwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJuYXYtYnRuc1wiPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInRhYi1mb3VyLWJ0biBiYWNrLWJ0blwiIGRhdGEtdGFiLWZvdXItYmFjay1idG4+R28gQmFjazwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInRhYi1mb3VyLWNvbmZpcm0tYnRuXCIgZGF0YS10YWItZm91ci1jb25maXJtLWJ0bj5Db25maXJtPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuIDwvZGl2PmA7XG4gIGRpdi5pbm5lckhUTUwgPSBzdW1tYXJ5O1xuICByZXR1cm4gZGl2O1xufTtcbmNvbnN0IHRhYkZpdmUgPSBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGNvbmZpcm0gPSBgXG4gICAgIDxkaXYgY2xhc3M9XCJzdGVwLWZpdmVcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJpY29uLWhvbGRlclwiPjxpbWcgc3JjPVwiLi4vc3JjL2Fzc2V0cy9pbWFnZXMvaWNvbi10aGFuay15b3Uuc3ZnXCIgYWx0PVwicmlnaHQgaWNvbiB0byBjb25maXJtIHN1YnNjcmlwdGlvblwiPjwvZGl2PlxuICAgICAgPGRpdj5cbiAgICAgICAgPGgxPlRoYW5rIHlvdSE8L2gxPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2PlxuICAgICAgICA8cCBjbGFzcz1cImNvbmZpcm0tdGV4dFwiPlxuICAgICAgICAgIFRoYW5rcyBmb3IgY29tZmlybWluZyB5b3VyIHN1YnNjcmlwdGlvbiEgV2UgaG9wZSB5b3UgaGF2ZSBmdW4gdXNpbmcgb3VyIHBsYXRmb3JtLlxuICAgICAgICAgIGlmIHlvdSBldmVyIG5lZWQgc3VwcG9ydC5wbGVhc2UgZmVlbCBmcmVlIHRvIGVtYWlsIHVzIGF0IHN1cHBvcnRAbG9yZW1nYW1pbmcuY29tLlxuICAgICAgICA8L3A+XG4gICAgICA8L2Rpdj5cbiAgIDwvZGl2PmA7XG4gIGRpdi5pbm5lckhUTUwgPSBjb25maXJtO1xuICByZXR1cm4gZGl2O1xufTtcbmV4cG9ydCBjb25zdCBmdW5jdGlvbnMgPSB7XG4gIHN0ZXBPbmU6IHRhYk9uZSxcbiAgc3RlcFR3bzogdGFiVHdvLFxuICBzdGVwVGhyZWU6IHRhYlRocmVlLFxuICBzdGVwRm91cjogdGFiRm91cixcbiAgc3RlcEZpdmU6IHRhYkZpdmUsXG59O1xuLyoqXG4gKiBmdW5jdGlvbiB0aGF0IGFjY2VwdCBub2RlbGlzdCBhbmQgY2hhbmdlIHByaWNlIGFjY29yZGluZyB0byBzZWxlY3RlZCBwbGFuKG1wbnRobHkgb3IgeWVhcmx5KVxuICogQHBhcmFtIHsqfSBhcnJhcnkgbm9kZWxpc3Qgb2YgZWxlbWVudFxuICogQHBhcmFtIHsqfSBvYmplY3QgdGhhdCBzdG9yZSBwcmljZSAoY2hvb3NlbnBsYW4gcHJvcGVydHkgIGdldCBtb250aGx5IG9yIHllYXJseSBwcmljZSBmb3IgZWFjaCBwbGFucylcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNoYW5nZVByaWNlKGFyciwgb2JqKSB7XG4gIG9iai5jaG9vc2VuUGxhbigpO1xuICBhcnIuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgIGlmIChhcnIuaW5kZXhPZihlbGVtZW50KSA9PT0gMCkge1xuICAgICAgZWxlbWVudC50ZXh0Q29udGVudCA9IG9iai5hcmNhZGU7XG4gICAgfSBlbHNlIGlmIChhcnIuaW5kZXhPZihlbGVtZW50KSA9PT0gMSkge1xuICAgICAgZWxlbWVudC50ZXh0Q29udGVudCA9IG9iai5hZHZhbmNlZDtcbiAgICB9IGVsc2UgaWYgKGFyci5pbmRleE9mKGVsZW1lbnQpID09PSAyKSB7XG4gICAgICBlbGVtZW50LnRleHRDb250ZW50ID0gb2JqLnBybztcbiAgICB9XG4gIH0pO1xufVxuLypcbiAqZnVuY3Rpb24gdGhhdCBnaXZlIGRpZmVyZW50IGJvcmRlciBzdHlsZSBmb3IgdGhlIGdpdmVuIGRvbSBlbGVtZW50XG4gKnBhcmFtIDE6YXJyYXkgdG8gYWNjZXB0KG5vZGVsaXN0KVxuICpwYXJtIDI6ZG9tIGVsZW1lbnRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFkZEV2ZW50cyhhcnIsIGRvbUVsZW1lbnQpIHtcbiAgYXJyLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICBlbGVtZW50ID09PSBkb21FbGVtZW50XG4gICAgICA/IChlbGVtZW50LnN0eWxlLmJvcmRlciA9IFwiMnB4IHNvbGlkIGhzbCgyNDMsIDEwMCUsIDYyJSlcIilcbiAgICAgIDogKGVsZW1lbnQuc3R5bGUuYm9yZGVyID0gXCIxcHggc29saWQgIGhzbCgyMTMsIDk2JSwgMTglKVwiKTtcbiAgfSk7XG59XG4vLyBzYXZlIHN0YXRlIG9mIHNlbGVjdGVkIHBsYW4gYm9yZGVyIHN0eWxlIGFmdGVyIGFwcHBlbmQgZWxtZW50IHVzaW5nIGluZGV4IG51bWJlciBmcm9tICh1c2VyZGF0YS5zZWxlY3RlZHBsYW4pXG5leHBvcnQgZnVuY3Rpb24gc2VsZWN0ZWRDYXJkKGluZGV4KSB7XG4gIGNvbnN0IHBsYW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1wbGFuPVwiJHtpbmRleH1cIl1gKTtcbiAgaWYgKHBsYW4gPT09IG51bGwpIHJldHVybjtcbiAgcGxhbi5zdHlsZS5ib3JkZXIgPSBcIjJweCBzb2xpZCBibHVlXCI7XG59XG4vKipcbiAqIGZ1bmN0aW9uIHRvIGNoZWNrIHdoaWNoIGFkZHMgaXMgc2VsZWN0ZWQgb3Igbm90XG4gKiBAcGFyYW0geyp9IGluZGV4XG4gKiBAcGFyYW0geyp9IGRvbUVsZW1lbnRcbiAqIEBwYXJhbSB7Kn0gb2JqXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0NoZWNrZWQoaW5kZXgsIGRvbUVsZW1lbnQsIG9iaikge1xuICBpZiAoaW5kZXggPT09IDAgJiYgZG9tRWxlbWVudC5jaGVja2VkID09PSB0cnVlKSB7XG4gICAgb2JqLm9ubGluZSA9IFwiY2hlY2tlZFwiO1xuICB9IGVsc2UgaWYgKGluZGV4ID09PSAxICYmIGRvbUVsZW1lbnQuY2hlY2tlZCA9PT0gdHJ1ZSkge1xuICAgIG9iai5zdG9yYWdlID0gXCJjaGVja2VkXCI7XG4gIH0gZWxzZSBpZiAoaW5kZXggPT09IDIgJiYgZG9tRWxlbWVudC5jaGVja2VkID09PSB0cnVlKSB7XG4gICAgb2JqLnRoZW1lID0gXCJjaGVja2VkXCI7XG4gIH0gZWxzZSBpZiAoaW5kZXggPT09IDAgJiYgZG9tRWxlbWVudC5jaGVja2VkID09PSBmYWxzZSkge1xuICAgIG9iai5vbmxpbmUgPSBcIlwiO1xuICB9IGVsc2UgaWYgKGluZGV4ID09PSAxICYmIGRvbUVsZW1lbnQuY2hlY2tlZCA9PT0gZmFsc2UpIHtcbiAgICBvYmouc3RvcmFnZSA9IFwiXCI7XG4gIH0gZWxzZSBpZiAoaW5kZXggPT09IDIgJiYgZG9tRWxlbWVudC5jaGVja2VkID09PSBmYWxzZSkge1xuICAgIG9iai50aGVtZSA9IFwiXCI7XG4gIH1cbn1cbi8vIHN0ZXAgZm91ciBzdW1tYXJ5XG4vLyB1c2VyZGF0YSBvYmpcbi8qXG4gKmZ1bmN0aW9uIHRoYXQgYWNjZXB0IG9iamVjdCBjaGVjayBzZWxlY3RlZCBwbGFuIHVzaW5nIHRoZXJlIGluZGV4IG51bWJlciBhbmQgcmV0dXJuIG5hbWUgYW5kIHByaWNlXG4gKnBhcmFtIDE6b2JqZWN0IHRoYXQgc3RvcmUgc2VsZWN0ZWQgaXRlbSBhcyBudW1iZXIoMCwxLDIpXG4gKnJldHVybiBzdHJpbmcgKHBsYW4gbmFtZSApIGFuZCBudW1iZXIgKGl0J3MgcHJpY2UpXG4gKi9cbmZ1bmN0aW9uIHN1bW1hcnlQbGFuKG9iaikge1xuICBsZXQgcGxhbk5hbWUsIHBsYW4sIHByaWNlO1xuXG4gIGlmIChvYmouc2VsZWN0ZWRQbGFuID09PSAwKSB7XG4gICAgcGxhbk5hbWUgPSBcIkFyY2FkZVwiO1xuICAgIHByaWNlID0gb2JqLmFyY2FkZTtcbiAgfSBlbHNlIGlmIChvYmouc2VsZWN0ZWRQbGFuID09PSAxKSB7XG4gICAgcGxhbk5hbWUgPSBcIkFkdmFuY2VkXCI7XG4gICAgcHJpY2UgPSBvYmouYWR2YW5jZWQ7XG4gIH0gZWxzZSBpZiAob2JqLnNlbGVjdGVkUGxhbiA9PT0gMikge1xuICAgIHBsYW5OYW1lID0gXCJQcm9cIjtcbiAgICBwcmljZSA9IG9iai5wcm87XG4gIH1cbiAgaWYgKG9iai5jaGVja2JveCA9PT0gXCJjaGVja2VkXCIpIHtcbiAgICBwbGFuID0gXCJ5ZWFybHlcIjtcbiAgfVxuICBpZiAob2JqLmNoZWNrYm94ID09PSBcIlwiKSB7XG4gICAgcGxhbiA9IFwibW9udGhseVwiO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBwbGFuTmFtZSxcbiAgICBwbGFuLFxuICAgIHByaWNlLFxuICB9O1xufVxuXG4vKlxuICpmdW5jdGlvbiB0aGF0IGFjY2VwdCBvYmplY3QgYW5kIGdpdmUgc2VsZWN0ZWQgYWRkcyBuYW1lIGFuZCB0aGVyZSBwcmljZXNcbiAqcGFyYW0gMSA6b2JqZWN0XG4gKnJldHVybiBuYW1lIG9mIGFkZChzdHJpbmcpIGFuZCBwcmljZSBhcyBhbiBhcnJheVxuICovXG5mdW5jdGlvbiBzdW1tYXJ5QWRkcyhvYmopIHtcbiAgbGV0IGZpcnN0QWRkLCBzZWNvbmRBZGQsIHRoaXJkQWRkLCBvbmxpbmVQcmljZSwgc3RvcmFnZVByaWNlLCB0aGVtZVByaWNlO1xuICBjb25zdCBzZWxlY3RlZFByaWNlID0gW107XG4gIGlmIChvYmoub25saW5lID09PSBcImNoZWNrZWRcIikge1xuICAgIGZpcnN0QWRkID0gXCJPbmxpbmUgc2VydmljZVwiO1xuICAgIG9ubGluZVByaWNlID0gb2JqLm9ubGluZVByaWNlO1xuICAgIHNlbGVjdGVkUHJpY2UucHVzaChvbmxpbmVQcmljZSk7XG4gIH1cbiAgaWYgKG9iai5zdG9yYWdlID09PSBcImNoZWNrZWRcIikge1xuICAgIHNlY29uZEFkZCA9IFwiTGFyZ2VyIHN0b3JhZ2VcIjtcbiAgICBzdG9yYWdlUHJpY2UgPSBvYmouc3RvcmFnZVByaWNlO1xuICAgIHNlbGVjdGVkUHJpY2UucHVzaChzdG9yYWdlUHJpY2UpO1xuICB9XG4gIGlmIChvYmoudGhlbWUgPT09IFwiY2hlY2tlZFwiKSB7XG4gICAgdGhpcmRBZGQgPSBcIkN1c3RvbWl6YWJsZSBwcm9maWxlXCI7XG4gICAgdGhlbWVQcmljZSA9IG9iai50aGVtZVByaWNlO1xuICAgIHNlbGVjdGVkUHJpY2UucHVzaCh0aGVtZVByaWNlKTtcbiAgfVxuXG4gIC8vIHVzZSBjbG9zdXJlIHRvIHJlc2V0IGl0ZW1zIGlmIG5vdCBzZWxlY3RlZFxuICBjb25zdCBjaGVja1NlbGVjdGVkQWRkcyA9IGZ1bmN0aW9uIChvYmopIHtcbiAgICBpZiAob2JqLm9ubGluZSAhPT0gXCJjaGVja2VkXCIpIHtcbiAgICAgIGZpcnN0QWRkID0gXCJcIjtcbiAgICAgIG9ubGluZVByaWNlID0gXCJcIjtcbiAgICB9XG4gICAgaWYgKG9iai5zdG9yYWdlICE9PSBcImNoZWNrZWRcIikge1xuICAgICAgc2Vjb25kQWRkID0gXCJcIjtcbiAgICAgIHN0b3JhZ2VQcmljZSA9IFwiXCI7XG4gICAgfVxuICAgIGlmIChvYmoudGhlbWUgIT09IFwiY2hlY2tlZFwiKSB7XG4gICAgICB0aGlyZEFkZCA9IFwiXCI7XG4gICAgICB0aGVtZVByaWNlID0gXCJcIjtcbiAgICB9XG4gIH07XG4gIGNoZWNrU2VsZWN0ZWRBZGRzKG9iaik7XG5cbiAgcmV0dXJuIHtcbiAgICBmaXJzdEFkZCxcbiAgICBzZWNvbmRBZGQsXG4gICAgdGhpcmRBZGQsXG4gICAgb25saW5lUHJpY2UsXG4gICAgc3RvcmFnZVByaWNlLFxuICAgIHRoZW1lUHJpY2UsXG4gICAgc2VsZWN0ZWRQcmljZSxcbiAgfTtcbn1cbi8qXG4gKmZ1bmN0aW9uIHRoYXQgYWNjZXB0IHR3byBvYmplY3RzIGFuZCBjYWxjdWxhdGUgcHJpY2Ugb3Igc3VtXG4gKnBhcmFtIDE6IG9iajEgaG9sZCBwbGFuIHByaWNlIChtb250aGx5IG9yIHllYXJseSlcbiAqcGFyYW0gMjogb2JqMiBob2xkIHNlbGVjdGVkIGFkZHMgcHJpY2UgYXMgYW4gYXJyYXJ5XG4gKnJldHVybiBudW1iZXIgKHN1bSlcbiAqL1xuZnVuY3Rpb24gdG90YWxQcmljZShvYmoxLCBvYmoyKSB7XG4gIGNvbnN0IHBsYW5GZWUgPSBzdW1tYXJ5UGxhbihvYmoxKS5wcmljZTtcbiAgY29uc3QgYWRkc0ZlZSA9IHN1bW1hcnlBZGRzKG9iajIpLnNlbGVjdGVkUHJpY2U7XG4gIGNvbnN0IHBsYW4gPSBOdW1iZXIocGxhbkZlZS5yZXBsYWNlKC9bXjAtOV0vZywgXCJcIikpO1xuICBjb25zdCBwbGFuTmFtZSA9IHBsYW5GZWUucmVwbGFjZSgvW15hLXpdL2csIFwiXCIpOyAvLyBzdG9yZSBcIm1vXCIgb3IgXCJ5clwiIHN0cmluZ1xuXG4gIGxldCBzdW13aXRoY3VycmVuY3kgPSBcIlwiO1xuICBsZXQgdG90YWxBZGRzID0gMDtcbiAgbGV0IHN1bSA9IDA7XG4gIGFkZHNGZWUuZm9yRWFjaCgocHJpY2UpID0+IHtcbiAgICAvLyBwcmljZSBpcyBhcnJheSBvZiBhZGQgdmFsdWUgY29udmVydCB0byBudW0gYW5kIHJlbW92ZSBjdXJyZW5jeSBzaWduXG4gICAgdG90YWxBZGRzICs9IE51bWJlcihwcmljZS5yZXBsYWNlKC9bXjAtOV0vZywgXCJcIikpO1xuICB9KTtcbiAgc3VtID0gcGxhbiArIHRvdGFsQWRkcztcbiAgc3Vtd2l0aGN1cnJlbmN5ID0gYCAkJHtzdW19LyR7cGxhbk5hbWV9YDtcbiAgcmV0dXJuIHN1bXdpdGhjdXJyZW5jeTtcbn1cbi8vIGZ1bmN0aW9uIHRvIHZhbGlkYXRlIHN0ZXAgb25lIGZvcm1cbi8qKlxuICpcbiAqIEBwYXJhbSB7Kn0gZmllbGQgOiBpbnB1dCBmaWVsZFxuICogQHBhcmFtIHsqfSBpbmRleCA6IDAgcmVwcmVzZW50IHVzZXJuYW1lLDEgdXNlciBlbWFpbCAsMiB1c2VycGhvbmUgbnVtYmVyIHJlc3BlY3RpdmVseVxuICogQHBhcmFtIHsqfSBlcnJEb20gOmRvbWVsZW1udCB0byBzaG93IGVycm9yIG1lc3NhZ2VcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHZhbGlkYXRlRm9ybShmaWVsZCwgaW5kZXgsIGVyckRvbSkge1xuICBjb25zdCBlbWFpbFJlZyA9IC9cXHcrW0BdezF9W2Etei1dK1suXXsxfVthLXpdezIsfShbLl17MX1bYS16XXsyLH0pPy87XG4gIGNvbnN0IHBob25lUmVnID0gL15bMC05XXsxMCwxNX0kLztcbiAgY29uc3Qgc3RyaW5nUmVnID0gL1thLXpdKy87IC8vIGNoZWNrIHBob25lIG51bWJlciBlbnRyeVxuXG4gIC8vIGZ1bmN0aW9uIHRvIGhpZGUgZXJyb3IgbWVzc2FnZSBvbiBmb2N1cyBlbHNlIHNob3cgbWVzc2FnZVxuICBjb25zdCBmb2N1c1N0eWxlID0gZnVuY3Rpb24gKCkge1xuICAgIGZpZWxkLmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c1wiLCAoKSA9PiB7XG4gICAgICBpZiAoZmllbGQuY2xhc3NOYW1lID09PSBcImludmFsaWRcIikgZXJyRG9tLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICB9KTtcbiAgICBmaWVsZC5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNvdXRcIiwgKCkgPT4ge1xuICAgICAgaWYgKGZpZWxkLmNsYXNzTmFtZSA9PT0gXCJpbnZhbGlkXCIpIHtcbiAgICAgICAgZXJyRG9tLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG4gIGlmIChmaWVsZC52YWx1ZSA9PT0gXCJcIikge1xuICAgIGVyckRvbS50ZXh0Q29udGVudCA9IFwiVGhpcyBmaWVsZCBpcyBSZXF1aXJlZCFcIjtcbiAgICBmaWVsZC5jbGFzc05hbWUgPSBcImludmFsaWRcIjtcbiAgICByZXR1cm47XG4gIH1cbiAgaWYgKGluZGV4ID09PSAwKSB7XG4gICAgaWYgKGZpZWxkLnZhbGlkaXR5LnRvb1Nob3J0KSB7XG4gICAgICBlcnJEb20udGV4dENvbnRlbnQgPSBcIlRvbyBzaG9ydCBhZGQgbW9yZSBjaGFyYWN0ZXIuXCI7XG4gICAgICBmaWVsZC5jbGFzc05hbWUgPSBcImludmFsaWRcIjtcbiAgICAgIGZvY3VzU3R5bGUoKTtcbiAgICB9IGVsc2UgaWYgKGZpZWxkLnZhbGlkaXR5LnRvb0xvbmcpIHtcbiAgICAgIGVyckRvbS50ZXh0Q29udGVudCA9IFwiVG9vIGxvbmcgbXVzdCBiZSAyLTIwIGNoYXJhY3RlcnMuXCI7XG4gICAgICBmaWVsZC5jbGFzc05hbWUgPSBcImludmFsaWRcIjtcbiAgICAgIGZvY3VzU3R5bGUoKTtcbiAgICB9IGVsc2UgaWYgKGZpZWxkLnZhbGlkaXR5LnZhbGlkKSB7XG4gICAgICBlcnJEb20udGV4dENvbnRlbnQgPSBcIlwiO1xuICAgICAgZmllbGQuY2xhc3NOYW1lID0gXCJ2YWxpZFwiO1xuICAgIH1cbiAgfSBlbHNlIGlmIChpbmRleCA9PT0gMSkge1xuICAgIGlmIChlbWFpbFJlZy50ZXN0KGZpZWxkLnZhbHVlKSkge1xuICAgICAgZmllbGQuY2xhc3NOYW1lID0gXCJ2YWxpZFwiO1xuICAgICAgZXJyRG9tLnRleHRDb250ZW50ID0gXCJcIjtcbiAgICB9IGVsc2UgaWYgKGVtYWlsUmVnLnRlc3QoZmllbGQudmFsdWUpID09PSBmYWxzZSkge1xuICAgICAgZXJyRG9tLnRleHRDb250ZW50ID0gXCJ3cm9uZyBmb3JtYXQsdXNlKGV4YW1wbGVAZG9tYWluLmV4dClcIjtcbiAgICAgIGZpZWxkLmNsYXNzTmFtZSA9IFwiaW52YWxpZFwiO1xuICAgICAgZm9jdXNTdHlsZSgpO1xuICAgIH1cbiAgfSBlbHNlIGlmIChpbmRleCA9PT0gMikge1xuICAgIGlmIChzdHJpbmdSZWcudGVzdChmaWVsZC52YWx1ZSkpIHtcbiAgICAgIGVyckRvbS50ZXh0Q29udGVudCA9IFwiUGxlYXNlIGVudGVyIG51bWJlcnMgb25seSFcIjtcbiAgICAgIGZpZWxkLmNsYXNzTmFtZSA9IFwiaW52YWxpZFwiO1xuICAgICAgZm9jdXNTdHlsZSgpO1xuICAgIH0gZWxzZSBpZiAoZmllbGQudmFsaWRpdHkudG9vTG9uZykge1xuICAgICAgZXJyRG9tLnRleHRDb250ZW50ID0gXCJUb28gbG9uZyBtdXN0IGJlIDEwLTE1IGNoYXJhY3RlcnNcIjtcbiAgICAgIGZpZWxkLmNsYXNzTmFtZSA9IFwiaW52YWxpZFwiO1xuICAgICAgZm9jdXNTdHlsZSgpO1xuICAgIH0gZWxzZSBpZiAoZmllbGQudmFsaWRpdHkudG9vU2hvcnQpIHtcbiAgICAgIGVyckRvbS50ZXh0Q29udGVudCA9IFwiVG9vIHNob3J0IG11c3QgYmUgMTAtMTUgY2hhcmFjdGVyc1wiO1xuICAgICAgZmllbGQuY2xhc3NOYW1lID0gXCJpbnZhbGlkXCI7XG4gICAgICBmb2N1c1N0eWxlKCk7XG4gICAgfSBlbHNlIGlmIChwaG9uZVJlZy50ZXN0KE51bWJlcihmaWVsZC52YWx1ZSkpKSB7XG4gICAgICBjb25zb2xlLmxvZyhmaWVsZC52YWx1ZSk7XG4gICAgICBmaWVsZC5jbGFzc05hbWUgPSBcInZhbGlkXCI7XG4gICAgICBlcnJEb20udGV4dENvbnRlbnQgPSBcIlwiO1xuICAgICAgY29uc3QgdmFsdWUgPSBmaWVsZC52YWx1ZTtcbiAgICAgIGNvbnN0IGZvcm1hdCA9IHZhbHVlLnJlcGxhY2UoL14oLnszfSkoLnszfSkoLns0fSkoLiopJC8sIFwiJDEgJDIgJDNcIik7XG4gICAgICBmaWVsZC52YWx1ZSA9IFwiK1wiICsgZm9ybWF0O1xuICAgIH1cbiAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIGlzRm9ybWZpbGxlZChhcnIpIHtcbiAgY29uc3QgaW52YWxpZElucHV0ID0gW107XG4gIGxldCByZXN1bHQ7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGFycltpXS5jbGFzc05hbWUgPT09IFwiaW52YWxpZFwiKSB7XG4gICAgICBpbnZhbGlkSW5wdXQucHVzaChhcnJbaV0pO1xuICAgIH0gZWxzZSBpZiAoYXJyW2ldLnZhbHVlID09PSBcIlwiKSB7XG4gICAgICBpbnZhbGlkSW5wdXQucHVzaChhcnJbaV0pO1xuICAgIH1cbiAgfVxuICBpbnZhbGlkSW5wdXQubGVuZ3RoID4gMCA/IChyZXN1bHQgPSBmYWxzZSkgOiAocmVzdWx0ID0gdHJ1ZSk7XG4gIHJldHVybiByZXN1bHQ7XG59XG4vLyBmdW5jdGlvbiB0aGF0IGFjY2VwdCBvYmplY3QgYW5kIGNoZWNrIHZhbHVlIGlzIGVtcHR5KHVzZWQgdG8gc3dpdGNoIHRhYiAyKVxuZXhwb3J0IGZ1bmN0aW9uIGlzVmFsdWVFbXB0eShvYmopIHtcbiAgbGV0IHJlc3VsdDtcbiAgY29uc3Qga2V5QXJyYXkgPSBPYmplY3Qua2V5cyhvYmopO1xuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwga2V5QXJyYXkubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGtleUFycmF5W2luZGV4XTtcbiAgICBpZiAob2JqW2VsZW1lbnRdID09PSBcIlwiKSB7XG4gICAgICByZXN1bHQgPSB0cnVlO1xuICAgICAgYnJlYWs7XG4gICAgfSBlbHNlIGlmIChvYmpbZWxlbWVudF0gIT09IFwiXCIpIHtcbiAgICAgIHJlc3VsdCA9IGZhbHNlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuLy8gZnVuY3Rpb24gdG8gY2hhbmdlIGJhY2tncm91ZCBjb2xvciB0byBzaG93IHdoaWNoIHN0ZXAgaXQgaXNcbmV4cG9ydCBmdW5jdGlvbiBjaGFuZ2VDb2xvcihhcnJheSwgaW5kZXgpIHtcbiAgYXJyYXkuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgIGlmIChhcnJheS5pbmRleE9mKGVsZW1lbnQpID09PSBpbmRleCkge1xuICAgICAgZWxlbWVudC5zdHlsZS5jb2xvciA9IFwiYmxhY2tcIjtcbiAgICAgIGVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJyZ2IoMTkxLCAyMjYsIDI1MylcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgZWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcImluaGVyaXRcIjtcbiAgICB9XG4gIH0pO1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0IHtcbiAgZnVuY3Rpb25zLFxuICBVc2VyUGVyc29uYWxJbmZvLFxuICBVc2VyUGxhbkRhdGEsXG4gIFVzZXJTZXJ2aWNlcyxcbiAgY2hhbmdlUHJpY2UsXG4gIGFkZEV2ZW50cyxcbiAgc2VsZWN0ZWRDYXJkLFxuICBpc0NoZWNrZWQsXG4gIHZhbGlkYXRlRm9ybSxcbiAgaXNGb3JtZmlsbGVkLFxuICBpc1ZhbHVlRW1wdHksXG4gIGNoYW5nZUNvbG9yLFxufSBmcm9tIFwiLi90YWJzXCI7XG5jb25zdCBob2xkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByZXZpZXdcIik7XG5jb25zdCBkb3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5kb3RcIik7XG5jb25zdCB0YWJzID0gWy4uLmRvdHNdO1xuY29uc3QgdXNlckluZm8gPSBuZXcgVXNlclBlcnNvbmFsSW5mbygpO1xuY29uc3QgdXNlclBsYW5zID0gbmV3IFVzZXJQbGFuRGF0YSgpO1xuY29uc3QgdXNlckFkZHMgPSBuZXcgVXNlclNlcnZpY2VzKCk7XG5ob2xkZXIuYXBwZW5kQ2hpbGQoZnVuY3Rpb25zLnN0ZXBPbmUodXNlckluZm8pKTsgLy8gZGVmYXVsdCBpcyBlbXB0eSBmb3JtXG5ob2xkZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gIGlmIChlLnRhcmdldC5tYXRjaGVzKFwiLnRhYi1vbmUtYnRuXCIpKSB7XG4gICAgY29uc3QgYWxsSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiaW5wdXRcIik7XG4gICAgY29uc3QgYXJyeUlucHV0ID0gWy4uLmFsbElucHV0XTtcbiAgICAvLyB2YWxpZGF0ZSBzdGVwIG9uZSBmb3JtIGlmIGl0cyBub3QgZW1wdHkgbW92ZSB0byBuZXh0IHN0ZXBcblxuICAgIGlmIChpc0Zvcm1maWxsZWQoYXJyeUlucHV0KSA9PT0gdHJ1ZSkge1xuICAgICAgaG9sZGVyLnRleHRDb250ZW50ID0gXCJcIjtcbiAgICAgIGhvbGRlci5hcHBlbmRDaGlsZChmdW5jdGlvbnMuc3RlcFR3byh1c2VyUGxhbnMpKTtcbiAgICAgIGNoYW5nZUNvbG9yKHRhYnMsIDEpO1xuICAgIH1cbiAgICBhcnJ5SW5wdXQuZm9yRWFjaCgoaW5wdXQpID0+IHtcbiAgICAgIGNvbnN0IGVyck1zZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgIGBbZGF0YS1lcnJvci1tc2c9XCIke051bWJlcihpbnB1dC5kYXRhc2V0LmVycm9yKX1cIl1gXG4gICAgICApO1xuICAgICAgaWYgKGlucHV0LnZhbHVlID09PSBcIlwiKSB7XG4gICAgICAgIGVyck1zZy50ZXh0Q29udGVudCA9IFwiVGhpcyBmaWVsZCBpcyByZXF1aXJlZCFcIjtcbiAgICAgICAgaW5wdXQuY2xhc3NOYW1lID0gXCJpbnZhbGlkXCI7XG4gICAgICB9XG4gICAgfSk7XG4gIH0gZWxzZSBpZiAoZS50YXJnZXQubWF0Y2hlcyhcIltkYXRhLXVzZXItbmFtZV1cIikpIHtcbiAgICBjb25zdCB1c2VyTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS11c2VyLW5hbWVdXCIpO1xuICAgIHVzZXJOYW1lLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKGUpID0+IHtcbiAgICAgIGNvbnN0IGVyck1zZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgIGBbZGF0YS1lcnJvci1tc2c9XCIke2UudGFyZ2V0LmRhdGFzZXQuZXJyb3J9XCJdYFxuICAgICAgKTtcblxuICAgICAgdXNlckluZm8ubmFtZSA9IHVzZXJOYW1lLnZhbHVlO1xuICAgICAgdmFsaWRhdGVGb3JtKHVzZXJOYW1lLCAwLCBlcnJNc2cpO1xuICAgIH0pO1xuICB9IGVsc2UgaWYgKGUudGFyZ2V0Lm1hdGNoZXMoXCJbZGF0YS11c2VyLWVtYWlsXVwiKSkge1xuICAgIGNvbnN0IHVzZXJFbWFpbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS11c2VyLWVtYWlsXVwiKTtcbiAgICB1c2VyRW1haWwuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoZSkgPT4ge1xuICAgICAgY29uc3QgZXJyTXNnID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgYFtkYXRhLWVycm9yLW1zZz1cIiR7ZS50YXJnZXQuZGF0YXNldC5lcnJvcn1cIl1gXG4gICAgICApO1xuICAgICAgdXNlckluZm8uZW1haWwgPSB1c2VyRW1haWwudmFsdWU7XG4gICAgICB2YWxpZGF0ZUZvcm0odXNlckVtYWlsLCAxLCBlcnJNc2cpO1xuICAgIH0pO1xuICB9IGVsc2UgaWYgKGUudGFyZ2V0Lm1hdGNoZXMoXCJbZGF0YS11c2VyLXBob25lXVwiKSkge1xuICAgIGNvbnN0IHVzZXJQaG9uZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS11c2VyLXBob25lXVwiKTtcbiAgICBjb25zdCBlcnJNc2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgYFtkYXRhLWVycm9yLW1zZz1cIiR7ZS50YXJnZXQuZGF0YXNldC5lcnJvcn1cIl1gXG4gICAgKTtcbiAgICB1c2VyUGhvbmUuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoZSkgPT4ge1xuICAgICAgdXNlckluZm8ucGhvbmUgPSB1c2VyUGhvbmUudmFsdWU7XG4gICAgICB2YWxpZGF0ZUZvcm0odXNlclBob25lLCAyLCBlcnJNc2cpO1xuICAgIH0pO1xuICB9IC8vIHRhYiB0d28gZXZlbnRzXG4gIGVsc2UgaWYgKGUudGFyZ2V0Lm1hdGNoZXMoXCIucGxhbi1ob2xkZXJcIikpIHtcbiAgICBjb25zdCBpbmRleCA9IE51bWJlcihlLnRhcmdldC5kYXRhc2V0LnBsYW4pO1xuICAgIGNvbnN0IHBsYW5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wbGFuLWhvbGRlclwiKTtcbiAgICBjb25zdCBjbGlja2VkUGxhbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXBsYW49XCIke2luZGV4fVwiXWApO1xuICAgIGFkZEV2ZW50cyhwbGFucywgY2xpY2tlZFBsYW4pO1xuICAgIHVzZXJQbGFucy5zZWxlY3RlZFBsYW4gPSBpbmRleDtcbiAgfSBlbHNlIGlmIChlLnRhcmdldC5tYXRjaGVzKFwiW2RhdGEtY2hvb3NlLXBsYW5dXCIpKSB7XG4gICAgY29uc3QgdXNlclBsYW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtY2hvb3NlLXBsYW5dXCIpO1xuICAgIGNvbnN0IHByaWNlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucGxhbi1mZWVcIik7XG4gICAgY29uc3QgZnJlZUdpZnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIltkYXRhLWdpZnRdXCIpO1xuICAgIGNvbnN0IG1vbnRobHlQbGFuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLW1vbnRobHldXCIpO1xuICAgIGNvbnN0IHllYXJseVBsYW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEteWVhcmx5XVwiKTtcbiAgICBjb25zdCBwbGFucyA9IFsuLi5wcmljZXNdO1xuICAgIGlmICh1c2VyUGxhbi5jaGVja2VkID09PSB0cnVlKSB7XG4gICAgICB1c2VyUGxhbnMuY2hlY2tib3ggPSBcImNoZWNrZWRcIjtcbiAgICAgIHVzZXJQbGFucy5wbGFuID0gdHJ1ZTtcbiAgICAgIHVzZXJQbGFucy5ib251cyA9IFwiYmxvY2tcIjtcbiAgICAgIHVzZXJBZGRzLmFkZFBsYW4gPSB0cnVlO1xuICAgICAgLy8gdXBkYXRlIGRvbVxuICAgICAgbW9udGhseVBsYW4uc3R5bGUuY29sb3IgPSBcImhzbCgyMzEsIDExJSwgNjMlKVwiO1xuICAgICAgeWVhcmx5UGxhbi5zdHlsZS5jb2xvciA9IFwiaHNsKDIxMywgOTYlLCAxOCUpXCI7XG4gICAgICBmcmVlR2lmdHMuZm9yRWFjaCgoZGl2cykgPT4ge1xuICAgICAgICBkaXZzLnN0eWxlLmRpc3BsYXkgPSB1c2VyUGxhbnMuYm9udXM7XG4gICAgICB9KTtcblxuICAgICAgY2hhbmdlUHJpY2UocGxhbnMsIHVzZXJQbGFucyk7XG4gICAgfSBlbHNlIGlmICh1c2VyUGxhbi5jaGVja2VkID09PSBmYWxzZSkge1xuICAgICAgdXNlclBsYW5zLmNoZWNrYm94ID0gXCJcIjtcbiAgICAgIHVzZXJQbGFucy5wbGFuID0gZmFsc2U7XG4gICAgICB1c2VyUGxhbnMuYm9udXMgPSBcIm5vbmVcIjtcbiAgICAgIHVzZXJBZGRzLmFkZFBsYW4gPSBmYWxzZTtcbiAgICAgIG1vbnRobHlQbGFuLnN0eWxlLmNvbG9yID0gXCJoc2woMjEzLCA5NiUsIDE4JVwiO1xuICAgICAgeWVhcmx5UGxhbi5zdHlsZS5jb2xvciA9IFwiaHNsKDIzMSwgMTElLCA2MyUpXCI7XG4gICAgICAvLyBtb250aGx5IHByaWNlXG4gICAgICBmcmVlR2lmdHMuZm9yRWFjaCgoZGl2cykgPT4ge1xuICAgICAgICBkaXZzLnN0eWxlLmRpc3BsYXkgPSB1c2VyUGxhbnMuYm9udXM7XG4gICAgICB9KTtcbiAgICAgIGNoYW5nZVByaWNlKHBsYW5zLCB1c2VyUGxhbnMpO1xuICAgIH1cbiAgfSBlbHNlIGlmIChlLnRhcmdldC5tYXRjaGVzKFwiW2RhdGEtdGFiLXR3by1uZXh0LWJ0bl1cIikpIHtcbiAgICBjb25zdCBlcnJNc2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtc2VsZWN0LXBsYW5dXCIpO1xuICAgIGlmICh1c2VyUGxhbnMuc2VsZWN0ZWRQbGFuICE9PSBcIlwiKSB7XG4gICAgICBob2xkZXIudGV4dENvbnRlbnQgPSBcIiBcIjtcbiAgICAgIGhvbGRlci5hcHBlbmRDaGlsZChmdW5jdGlvbnMuc3RlcFRocmVlKHVzZXJBZGRzKSk7XG4gICAgICBlcnJNc2cudGV4dENvbnRlbnQgPSBcIlwiO1xuICAgICAgY2hhbmdlQ29sb3IodGFicywgMik7IC8vIHN0ZXAgM1xuICAgIH0gZWxzZSBpZiAodXNlclBsYW5zLnNlbGVjdGVkUGxhbiA9PT0gXCJcIikge1xuICAgICAgZXJyTXNnLnRleHRDb250ZW50ID0gXCJjbGljayB0aGUgY2FyZHMgdG8gIHNlbGVjdC5cIjtcbiAgICB9XG4gIH0gZWxzZSBpZiAoZS50YXJnZXQubWF0Y2hlcyhcIltkYXRhLXRhYi10d28tYmFjay1idG5dXCIpKSB7XG4gICAgaG9sZGVyLnRleHRDb250ZW50ID0gXCJcIjtcbiAgICBob2xkZXIuYXBwZW5kQ2hpbGQoZnVuY3Rpb25zLnN0ZXBPbmUodXNlckluZm8pKTtcbiAgICBjaGFuZ2VDb2xvcih0YWJzLCAwKTsgLy8gc3RlcCBvbmVcbiAgfVxuICAvLyB0YWIgdGhyZWUgZXZlbnRzXG4gIGVsc2UgaWYgKGUudGFyZ2V0Lm1hdGNoZXMoXCIudXNlci1hZGRcIikpIHtcbiAgICBjb25zdCBpbmRleCA9IE51bWJlcihlLnRhcmdldC5kYXRhc2V0LmFkZHMpO1xuICAgIGNvbnN0IGFkZHNDaGVja2JveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWFkZHM9XCIke2luZGV4fVwiXWApO1xuICAgIGlzQ2hlY2tlZChpbmRleCwgYWRkc0NoZWNrYm94LCB1c2VyQWRkcyk7XG4gIH0gZWxzZSBpZiAoZS50YXJnZXQubWF0Y2hlcyhcIltkYXRhLXRhYi10aHJlZS1uZXh0LWJ0blwiKSkge1xuICAgIGhvbGRlci50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgaG9sZGVyLmFwcGVuZENoaWxkKGZ1bmN0aW9ucy5zdGVwRm91cih1c2VyUGxhbnMsIHVzZXJBZGRzKSk7XG4gICAgY2hhbmdlQ29sb3IodGFicywgMyk7IC8vIHN0ZXAgNFxuICB9IGVsc2UgaWYgKGUudGFyZ2V0Lm1hdGNoZXMoXCJbZGF0YS10YWItdGhyZWUtYmFjay1idG5dXCIpKSB7XG4gICAgaG9sZGVyLnRleHRDb250ZW50ID0gXCJcIjtcbiAgICBob2xkZXIuYXBwZW5kQ2hpbGQoZnVuY3Rpb25zLnN0ZXBUd28odXNlclBsYW5zKSk7XG4gICAgc2VsZWN0ZWRDYXJkKHVzZXJQbGFucy5zZWxlY3RlZFBsYW4pO1xuICAgIGNoYW5nZUNvbG9yKHRhYnMsIDEpOyAvLyBzdGVwIDJcbiAgfVxuICAvLyBzdGVwIGZvdXIgZXZlbnRcbiAgZWxzZSBpZiAoZS50YXJnZXQubWF0Y2hlcyhcIltkYXRhLXRhYi1mb3VyLWJhY2stYnRuXVwiKSkge1xuICAgIGhvbGRlci50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgaG9sZGVyLmFwcGVuZENoaWxkKGZ1bmN0aW9ucy5zdGVwVGhyZWUodXNlckFkZHMpKTtcbiAgICBjaGFuZ2VDb2xvcih0YWJzLCAyKTsgLy8gc3RlcCAzXG4gIH0gZWxzZSBpZiAoZS50YXJnZXQubWF0Y2hlcyhcIltkYXRhLXRhYi1mb3VyLWNvbmZpcm0tYnRuXVwiKSkge1xuICAgIGhvbGRlci50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgaG9sZGVyLmFwcGVuZENoaWxkKGZ1bmN0aW9ucy5zdGVwRml2ZSgpKTtcbiAgfVxufSk7XG5cbnRhYnMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGlmICh0YWJzLmluZGV4T2YoZWxlbWVudCkgPT09IDApIHtcbiAgICAgIGhvbGRlci50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgICBob2xkZXIuYXBwZW5kQ2hpbGQoZnVuY3Rpb25zLnN0ZXBPbmUodXNlckluZm8pKTtcbiAgICAgIGNoYW5nZUNvbG9yKHRhYnMsIDApO1xuICAgICAgLy8gbmV4dCBjaGVjayBzdGVwIG9uZSBpcyBjbGVhciBlbHNlIGRvbid0IHN3aXRjaFxuICAgIH0gZWxzZSBpZiAoXG4gICAgICB0YWJzLmluZGV4T2YoZWxlbWVudCkgPT09IDEgJiZcbiAgICAgIGlzVmFsdWVFbXB0eSh1c2VySW5mbykgPT09IGZhbHNlXG4gICAgKSB7XG4gICAgICBob2xkZXIudGV4dENvbnRlbnQgPSBcIlwiO1xuICAgICAgaG9sZGVyLmFwcGVuZENoaWxkKGZ1bmN0aW9ucy5zdGVwVHdvKHVzZXJQbGFucykpO1xuICAgICAgc2VsZWN0ZWRDYXJkKHVzZXJQbGFucy5zZWxlY3RlZFBsYW4pO1xuICAgICAgY2hhbmdlQ29sb3IodGFicywgMSk7XG4gICAgICAvLyBjaGVjayBpZiBzdGVwIHR3byBjYXJkcyBzZWxlY3RlZCB0byBwcmVjZWVkIHRvIHN0ZXAgMyBhbmQgNCB0aGV5IGFyZSBzYW1lXG4gICAgfSBlbHNlIGlmICh0YWJzLmluZGV4T2YoZWxlbWVudCkgPT09IDIgJiYgdXNlclBsYW5zLnNlbGVjdGVkUGxhbiAhPT0gXCJcIikge1xuICAgICAgaG9sZGVyLnRleHRDb250ZW50ID0gXCJcIjtcbiAgICAgIGhvbGRlci5hcHBlbmRDaGlsZChmdW5jdGlvbnMuc3RlcFRocmVlKHVzZXJBZGRzKSk7XG4gICAgICBjaGFuZ2VDb2xvcih0YWJzLCAyKTtcbiAgICB9IGVsc2UgaWYgKHRhYnMuaW5kZXhPZihlbGVtZW50KSA9PT0gMyAmJiB1c2VyUGxhbnMuc2VsZWN0ZWRQbGFuICE9PSBcIlwiKSB7XG4gICAgICBob2xkZXIudGV4dENvbnRlbnQgPSBcIlwiO1xuICAgICAgaG9sZGVyLmFwcGVuZENoaWxkKGZ1bmN0aW9ucy5zdGVwRm91cih1c2VyUGxhbnMsIHVzZXJBZGRzKSk7XG4gICAgICBjaGFuZ2VDb2xvcih0YWJzLCAzKTtcbiAgICB9XG4gIH0pO1xufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=