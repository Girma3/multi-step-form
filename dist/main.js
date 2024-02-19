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
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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A,aAAa;IACb;QACI,cAAc;IAClB;IACA;QACI,aAAa;QACb,8BAA8B;OAC/B,eAAe;OACf,wBAAwB;;IAE3B;IACA;QACI,mBAAmB;IACvB;GACD;IACC,SAAS;GACV;;IAEC;QACI,SAAS;QACT,eAAe;QACf,sBAAsB;;IAE1B;IACA;QACI,gBAAgB;QAChB,iBAAiB;IACrB;IACA;QACI,aAAa;QACb,YAAY;QACZ,UAAU;QACV,yBAAyB;QACzB,eAAe;;IAEnB;IACA;QACI,6CAA6C;QAC7C,0BAA0B;IAC9B;IACA;QACI,yBAAyB;QACzB,gBAAgB;QAChB,eAAe;IACnB;IACA;QACI,eAAe;QACf,gBAAgB;IACpB;IACA;QACI,gBAAgB;QAChB,iBAAiB;IACrB;;IAEA;QACI,YAAY;IAChB;IACA;QACI,eAAe;QACf,oCAAoC;QACpC,qBAAqB;QACrB,mBAAmB;QACnB;IACJ;QACI,yBAAyB;QACzB,qCAAqC;QACrC;IACJ,iBAAiB;IACjB;QACI,uBAAuB;QACvB,mBAAmB;QACnB,aAAa;QACb,eAAe;;IAEnB;IACA;QACI,kBAAkB;IACtB;AACJ;IACI,QAAQ;IACR;QACI,0BAA0B;QAC1B,oCAAoC;QACpC;IACJ;QACI,yDAA4D;QAC5D,wBAAwB;QACxB,YAAY;QACZ,YAAY;IAChB;IACA;QACI,mBAAmB;IACvB;GACD;QACK,aAAa;IACjB;IACA,aAAa;IACb;QACI,kBAAkB;QAClB,WAAW;QACX,qBAAqB;QACrB,UAAU;QACV,iBAAiB;IACrB;IACA;QACI,UAAU;IACd;IACA;QACI,WAAW;QACX,iBAAiB;IACrB;IACA;QACI,kBAAkB;QAClB,qBAAqB;QACrB,UAAU;OACX;OACA;QACC,YAAY;OACb;OACA;QACC,YAAY;OACb;OACA;QACC,cAAc;QACd,WAAW;OACZ;OACA;QACC,aAAa;OACd;;IAEH;QACI,WAAW;IACf;IACA,eAAe;;IAEf;OACG,eAAe;OACf,SAAS;OACT,mBAAmB;;IAEtB;;IAEA;QACI,eAAe;QACf,gBAAgB;IACpB;IACA;QACI,gBAAgB;QAChB,iBAAiB;QACjB;;IAEJ,mBAAmB;IACnB;QACI,eAAe;QACf,WAAW;IACf;IACA;QACI,SAAS;QACT,UAAU;IACd;IACA;QACI,gBAAgB;QAChB,iBAAiB;IACrB;;AAEJ;IACI,SAAS;IACT,kBAAkB;IAClB,UAAU;IACV,aAAa;AACjB;AACA;IACI,kBAAkB;IAClB,SAAS;IACT,SAAS;AACb;;AAEA;IACI,UAAU;AACd;AACA;IACI,aAAa;AACjB;;IAEI;QACI,eAAe;QACf,WAAW;QACX,uBAAuB;QACvB,uBAAuB;QACvB,YAAY;QACZ,YAAY;IAChB;IACA;OACG,mBAAmB;QAClB,mBAAmB;QACnB,WAAW;IACf;IACA;QACI,SAAS;QACT,eAAe;IACnB;AACJ","sourcesContent":["/* ubuntu-regular - latin */\n@font-face {\n    font-display: swap; \n    font-family: 'Ubuntu';\n    font-style: normal;\n    font-weight: 400;\n    src: url('./assets/fonts/ubuntu-v20-latin-regular.woff2') format('woff2'); \n  }\nbody{\n    background-color:  hsl(0, 0%, 100%);\n    min-height: 100vh;\n    max-width: 100vw;\n    font-family: 'Ubuntu';\n    display: grid;\n    margin: 0.5rem;\n    grid-template-columns: 1fr 2fr;\n    color: hsl(213, 96%, 18%);\n}\n/* nav style */\n\nnav{\n    background-image: url(./assets/images/bg-sidebar-desktop.svg);\n    background-repeat: no-repeat;\n    background-size: cover;\n    background-position: bottom;\n    height: 95vh;\n    border-radius: 0.5rem;\n  }\nul{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    list-style: none;\n}\nli{\n    margin: 1rem;\n    width: 100%;\n}\n.nav-holder{\n    display: flex;\n    align-items: center;\n    gap: 1rem;\n}\n.step-name{\n    color: white;\n    font-size: 1rem;\n    font-weight: 700;\n}\n.step-name:hover{\n    text-shadow: 2px 2px  rgb(101, 5, 118);\n    }\n.dot{\n    width: 2rem;\n    height: 2rem;\n    color: white;\n    border: 2px rgb(255, 255, 255) solid;\n    border-radius: 50%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    cursor: pointer;\n    background-color: inherit;\n    }\n    .dot:hover{\n        border: rgb(232, 31, 247) solid 3px;\n    }\n.step-num{\n    color: hsl(228, 100%, 84%);\n    font-weight: 500;\n}\nh1{\n    margin: 0;\n    color:hsl(213, 96%, 18%);\n}\n.instruction, .plan-fee, .add-plan , .confirm-text {\n    color:hsl(231, 11%, 63%) ;\n    font-size: 1rem;\n    font-weight: 700;\n    }\n    .confirm-text{\n        font-weight: 400;\n    }\n\n.back-btn{\n    color:hsl(231, 11%, 63%) ; \n}\n/* personal info form */\n.step-one, .step-two, .tab-three, .tab-four , .step-five {\n    display: flex;\n    margin: 1rem;\n    flex-direction: column;\n    background-color: hsl(0, 0%, 100%);\n    padding: 1rem;\n\n     }\n  .error-msg{\n    margin: 1px;\n    width: 60%;\n    color:  hsl(354, 84%, 57%);\n    text-align: end;\n}\n\n.label-holder{\n    display: flex;\n    flex-direction: column;\n    margin: 0.3rem;\n    \n}\ninput{\n    width: 60%;\n   border: 1px rgb(55, 55, 55) solid;\n   padding: 0.6rem;\n   border-radius: 0.5rem;\n   color:hsl(214, 93%, 12%);\n   font-weight: 500;\n   font-size: 1rem;\n }\nlabel{\n    color:hsl(213, 96%, 18%);;\n}\n.invalid{\n    border: 2px  hsl(354, 84%, 57%) solid;\n   }\n.valid{\n    border: 2px green  solid;\n   }\n   .btn-holder{\n    width: 64%;\n    display: flex;\n    justify-content: end;\n    margin-top: 3rem;\n  }\n    input:focus{\n        border:3px solid rgb(0, 4, 255);\n        }\n    /* tab two */\n    .plans{\n        display: flex;\n        gap: 1rem;\n        flex-wrap: wrap;\n        }\n   .plan-holder{\n        border: 1px solid  hsl(213, 96%, 18%);\n        display: flex;\n        flex-direction: column;\n        align-items:flex-start;\n        width: 200px;\n        height: 190px;\n        padding: 1rem;\n        border-radius: 1rem;\n        cursor: pointer;\n    }\n   .plan-holder:hover{\n        background-color: hsl(229, 24%, 87%);\n        border: 2px solid hsl(243, 100%, 62%);\n   }\n   .about-plan{\n        font-weight: 500;\n        width: fit-content;\n   }\n   .plan-detail, .about-plan{\n        display: flex;\n        flex-direction: column;\n        gap: 0.3rem;\n        align-items: flex-start;\n   }\n   .plan-name{\n        font-weight: 700;\n        color: hsl(213, 96%, 18%);\n        font-size: 1rem;\n   }\n   .icon-holder{\n        margin-right: 1.5rem;\n   } \n   .toggle-holder{\n        display: flex;\n        gap: 1rem;\n        margin: 1rem;\n        align-items: center;\n        justify-content: center;\n        border-radius:5px ;\n        background-color:hsl(229, 24%, 87%);\n        padding: 0.5rem;\n        border-radius: 0.5rem;\n    }\n   .toggle{\n        display: inline-block;\n        position: relative;\n        width: 50px;\n        height: 30px;\n        background-color:hsl(213, 96%, 18%);\n        border: none;\n        border-radius: 20px;\n        transition: all 0.5s;\n    }\n   .toggle::after{\n        content: \"\";\n        position: absolute;\n        height: 20px;\n        width: 20px;\n        border-radius: 50%;\n        top: 5px;\n        left: 1px;\n        background-color: hsl(0, 0%, 100%);\n   }\n  .checkbox:checked + .toggle::after{\n        left: 25px;\n     }\n    .checkbox{\n        display: none;\n    }\n    .nav-btns{\n        display: flex;\n        justify-content: space-between;\n        align-items: baseline;\n        margin: 1rem;\n        background-color: hsl(0, 0%, 100%);\n        border-radius: 0.5rem;\n        width: 90%;\n        padding: 0.6rem;\n\n     }\n    \n    .tab-two-btn, .tab-three-btn, .tab-four-btn, .tab-four-confirm-btn , .tab-one-btn{\n        padding: 1rem;\n        background-color: hsl(213, 96%, 18%);\n        color: azure;\n        border: none;\n        width: fit-content;\n        border-radius: 0.5rem;\n    }\n   \n   .about-adds{\n        border: 2px solid  hsl(243, 100%, 62%);\n        border-radius: 0.4rem;\n        padding: 0.5rem;\n        margin: 0.5rem;\n       }\n    .about-adds:hover{\n        box-shadow: rgb(251, 0, 0) -1px 3px 3px;\n    }\n    .add-holder,.add-header{\n        display: flex;\n        align-items: center;\n        justify-content: space-between;\n        gap:1rem;\n    }\n    .add-title{\n        font-size: 1.5rem;\n        font-weight: 400;\n    }\n    .about-plan{\n        font-weight: 500;\n    }\n    .add-title,.add-plan{\n        margin: 0;\n    }\n    .user-add{\n        width: 1rem;\n        height: 1rem;\n        margin-top: 0.5rem;\n    }\n    /* tab four */\n    .tab-four{\n        margin: 1.5rem;\n    }\n    .summary-plan, .add-detail, .summary-total{\n        display: flex;\n        justify-content: space-between;\n       padding: 0.5rem;\n       color:hsl(213, 96%, 18%);\n       \n    }\n    .summary-services{\n        height: fit-content;\n    }\n   .add-detail > p{\n    margin: 0;\n   }\n    \n    .selected-plan{\n        margin: 0;\n        font-size: 1rem;\n        padding-bottom: 0.5rem;\n\n    }\n    .summary-price{\n        font-weight: 500;\n        font-size: 1.2rem;\n    }\n    .change-plan{\n        outline: none;\n        border: none;\n        padding: 0;\n        background-color: inherit;\n        cursor: pointer;\n      \n    }\n    .change-plan:hover{\n        border-bottom: 2px solid  hsl(243, 100%, 62%);\n        color: hsl(243, 100%, 62%);\n    }\n    .add-name, .change-plan{\n        color:hsl(231, 11%, 63%) ; \n        font-weight: 400;\n        font-size: 1rem;\n    }\n    .online-price, .theme-price, .storage-price{\n        font-size: 1rem;\n        font-weight: 400;\n    }\n    .total-price{\n        font-weight: 900;\n        font-size: 1.5rem;\n    }\n    \n    hr{\n        margin: 1rem;\n    }\n    .service-holder{\n        padding: 0.5rem;\n        background-color: hsl(229, 24%, 87%);\n        border-radius: 0.5rem;\n        height: fit-content;\n        }\n    .back-btn{\n        color:hsl(231, 11%, 63%) ; \n        background-color: hsl(231, 100%, 99%);\n        }\n    /* step five tab*/\n    .step-five{\n        justify-content: center;\n        align-items: center;\n        padding: 1rem;\n        margin-top: 15%;\n        \n    }\n    .confirm-text{\n        text-align: center;\n    }\n@media (max-width:565px) {\n    /* nav */\n    body{\n        grid-template-columns: 1fr;\n        background-color: hsl(206, 94%, 87%);\n        }\n    nav{\n        background-image:url(./assets/images/bg-sidebar-mobile.svg) ;\n        background-position: top;\n        height: 30vh;\n        width: 100vw;\n    }\n    ul{\n        flex-direction: row;\n    }\n   .nav-description{\n        display: none;\n    }\n    /* step one */\n    .step-one{\n        position: absolute;\n        bottom: 16%;\n        border-radius: 0.5rem;\n        width: 70%;\n        max-height: 490px;\n    }\n    input{\n        width: 80%;\n    }\n    .error-msg{\n        width: 100%;\n        text-align: start;\n    }\n    .step-two, .tab-three, .tab-four, .step-five{\n        position: relative;\n        border-radius: 0.5rem;\n        width: 70%;\n       }\n       .step-two{\n        bottom: 6rem;\n       }\n       .tab-three{\n        bottom: 8rem;\n       }\n       .tab-four{\n        bottom: 6.4rem;\n        right: 1rem;\n       }\n       .step-five{\n        bottom: 10rem;\n       }\n       \n    .add-header{\n        gap: 0.3rem;\n    }\n    /* step three */\n    \n    .about-adds{\n       padding: 0.5rem;\n       margin: 0;\n       margin-bottom: 1rem;\n       \n    }\n    \n    .add-title{\n        font-size: 1rem;\n        font-weight: 400;\n    }\n    .add-plan{\n        font-weight: 500;\n        font-size: 0.7rem;\n        }\n   \n    /* step two cards */\n    .plans{\n        flex-wrap: wrap;\n        gap: 0.5rem;\n    }\n    .error-card{\n        margin: 0;\n        padding: 0;\n    }\n    .plan-fee{\n        font-weight: 700;\n        font-size: 0.7rem;\n    }\n \n.nav-btns{\n    margin: 0;\n    position: absolute;\n    top: 28rem;\n    right: 0.1rem;\n}\n.btn-holder{\n    position: relative;\n    top: 2rem;\n    left: 35%;\n}\n\n.tab-four > .nav-btns{\n    top: 28rem;\n}\n.service-holder{\n    height: 270px;\n}\n\n    .plan-holder{\n        flex-wrap: wrap;\n        width: 100%;\n        align-items: flex-start;\n        justify-content: center;\n        height: 84px;\n        padding: 5px;\n    }\n    .about-plan {\n       flex-direction: row;\n        align-items: center;\n        gap: 0.5rem;\n    }\n    .toggle-holder{\n        margin: 0;\n        margin-top: 3px;\n    }\n}"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLHVLQUFnRTtBQUM1Ryw0Q0FBNEMseUpBQXlEO0FBQ3JHLDRDQUE0Qyx1SkFBd0Q7QUFDcEcsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRix5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsbUNBQW1DO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDRCQUE0QixtQ0FBbUM7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsbUNBQW1DO0FBQ2xFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyx1RkFBdUYsTUFBTSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxNQUFNLFdBQVcsS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsWUFBWSxXQUFXLEtBQUssS0FBSyxVQUFVLFVBQVUsWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE1BQU0sWUFBWSxNQUFNLFVBQVUsVUFBVSxZQUFZLGFBQWEsWUFBWSxLQUFLLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksTUFBTSxVQUFVLEtBQUssVUFBVSxVQUFVLFVBQVUsS0FBSyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxLQUFLLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsWUFBWSxNQUFNLFVBQVUsS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxhQUFhLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxZQUFZLE1BQU0sWUFBWSxhQUFhLFdBQVcsV0FBVyxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxNQUFNLFVBQVUsS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksTUFBTSxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxLQUFLLFdBQVcs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QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDNURhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDYkE7QUFDTztBQUNQLDBCQUEwQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUCwwQkFBMEI7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUCwwQkFBMEI7QUFDMUI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyxTQUFTO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUlBQXFJLFVBQVU7QUFDL0k7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLFVBQVU7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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QUFDTjtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsdUJBQXVCLDRDQUFTO0FBQ2hDLElBQUksa0RBQVcsV0FBVztBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtEQUErRCxNQUFNO0FBQ3JFLElBQUksZ0RBQVM7QUFDYixJQUFJO0FBQ0o7QUFDQSx1QkFBdUIsNENBQVM7QUFDaEMsSUFBSSxrREFBVyxXQUFXO0FBQzFCLElBQUk7QUFDSjtBQUNBLHVCQUF1Qiw0Q0FBUztBQUNoQyxJQUFJLG1EQUFZO0FBQ2hCLElBQUksa0RBQVcsV0FBVztBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1Qiw0Q0FBUztBQUNoQyxJQUFJLGtEQUFXLFdBQVc7QUFDMUIsSUFBSTtBQUNKO0FBQ0EsdUJBQXVCLDRDQUFTO0FBQ2hDO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5Qiw0Q0FBUztBQUNsQyxNQUFNLGtEQUFXO0FBQ2pCO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTSxtREFBWTtBQUNsQjtBQUNBO0FBQ0EseUJBQXlCLDRDQUFTO0FBQ2xDLE1BQU0sbURBQVk7QUFDbEIsTUFBTSxrREFBVztBQUNqQjtBQUNBLE1BQU07QUFDTjtBQUNBLHlCQUF5Qiw0Q0FBUztBQUNsQyxNQUFNLGtEQUFXO0FBQ2pCLE1BQU07QUFDTjtBQUNBLHlCQUF5Qiw0Q0FBUztBQUNsQyxNQUFNLGtEQUFXO0FBQ2pCO0FBQ0EsR0FBRztBQUNILENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tdWx0aS1zdGVwLWZvcm0vLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL211bHRpLXN0ZXAtZm9ybS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vbXVsdGktc3RlcC1mb3JtLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9tdWx0aS1zdGVwLWZvcm0vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9tdWx0aS1zdGVwLWZvcm0vLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vbXVsdGktc3RlcC1mb3JtLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL211bHRpLXN0ZXAtZm9ybS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vbXVsdGktc3RlcC1mb3JtLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL211bHRpLXN0ZXAtZm9ybS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9tdWx0aS1zdGVwLWZvcm0vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9tdWx0aS1zdGVwLWZvcm0vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9tdWx0aS1zdGVwLWZvcm0vLi9zcmMvdGFicy5qcyIsIndlYnBhY2s6Ly9tdWx0aS1zdGVwLWZvcm0vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbXVsdGktc3RlcC1mb3JtL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL211bHRpLXN0ZXAtZm9ybS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vbXVsdGktc3RlcC1mb3JtL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vbXVsdGktc3RlcC1mb3JtL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vbXVsdGktc3RlcC1mb3JtL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vbXVsdGktc3RlcC1mb3JtL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL211bHRpLXN0ZXAtZm9ybS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9tdWx0aS1zdGVwLWZvcm0vd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL211bHRpLXN0ZXAtZm9ybS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9hc3NldHMvZm9udHMvdWJ1bnR1LXYyMC1sYXRpbi1yZWd1bGFyLndvZmYyXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9hc3NldHMvaW1hZ2VzL2JnLXNpZGViYXItZGVza3RvcC5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIuL2Fzc2V0cy9pbWFnZXMvYmctc2lkZWJhci1tb2JpbGUuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC8qIHVidW50dS1yZWd1bGFyIC0gbGF0aW4gKi9cbkBmb250LWZhY2Uge1xuICAgIGZvbnQtZGlzcGxheTogc3dhcDsgXG4gICAgZm9udC1mYW1pbHk6ICdVYnVudHUnO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pIGZvcm1hdCgnd29mZjInKTsgXG4gIH1cbmJvZHl7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIGhzbCgwLCAwJSwgMTAwJSk7XG4gICAgbWluLWhlaWdodDogMTAwdmg7XG4gICAgbWF4LXdpZHRoOiAxMDB2dztcbiAgICBmb250LWZhbWlseTogJ1VidW50dSc7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBtYXJnaW46IDAuNXJlbTtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyZnI7XG4gICAgY29sb3I6IGhzbCgyMTMsIDk2JSwgMTglKTtcbn1cbi8qIG5hdiBzdHlsZSAqL1xuXG5uYXZ7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBib3R0b207XG4gICAgaGVpZ2h0OiA5NXZoO1xuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbiAgfVxudWx7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbn1cbmxpe1xuICAgIG1hcmdpbjogMXJlbTtcbiAgICB3aWR0aDogMTAwJTtcbn1cbi5uYXYtaG9sZGVye1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDFyZW07XG59XG4uc3RlcC1uYW1le1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cbi5zdGVwLW5hbWU6aG92ZXJ7XG4gICAgdGV4dC1zaGFkb3c6IDJweCAycHggIHJnYigxMDEsIDUsIDExOCk7XG4gICAgfVxuLmRvdHtcbiAgICB3aWR0aDogMnJlbTtcbiAgICBoZWlnaHQ6IDJyZW07XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlcjogMnB4IHJnYigyNTUsIDI1NSwgMjU1KSBzb2xpZDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xuICAgIH1cbiAgICAuZG90OmhvdmVye1xuICAgICAgICBib3JkZXI6IHJnYigyMzIsIDMxLCAyNDcpIHNvbGlkIDNweDtcbiAgICB9XG4uc3RlcC1udW17XG4gICAgY29sb3I6IGhzbCgyMjgsIDEwMCUsIDg0JSk7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbmgxe1xuICAgIG1hcmdpbjogMDtcbiAgICBjb2xvcjpoc2woMjEzLCA5NiUsIDE4JSk7XG59XG4uaW5zdHJ1Y3Rpb24sIC5wbGFuLWZlZSwgLmFkZC1wbGFuICwgLmNvbmZpcm0tdGV4dCB7XG4gICAgY29sb3I6aHNsKDIzMSwgMTElLCA2MyUpIDtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICB9XG4gICAgLmNvbmZpcm0tdGV4dHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICB9XG5cbi5iYWNrLWJ0bntcbiAgICBjb2xvcjpoc2woMjMxLCAxMSUsIDYzJSkgOyBcbn1cbi8qIHBlcnNvbmFsIGluZm8gZm9ybSAqL1xuLnN0ZXAtb25lLCAuc3RlcC10d28sIC50YWItdGhyZWUsIC50YWItZm91ciAsIC5zdGVwLWZpdmUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgbWFyZ2luOiAxcmVtO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDAsIDAlLCAxMDAlKTtcbiAgICBwYWRkaW5nOiAxcmVtO1xuXG4gICAgIH1cbiAgLmVycm9yLW1zZ3tcbiAgICBtYXJnaW46IDFweDtcbiAgICB3aWR0aDogNjAlO1xuICAgIGNvbG9yOiAgaHNsKDM1NCwgODQlLCA1NyUpO1xuICAgIHRleHQtYWxpZ246IGVuZDtcbn1cblxuLmxhYmVsLWhvbGRlcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgbWFyZ2luOiAwLjNyZW07XG4gICAgXG59XG5pbnB1dHtcbiAgICB3aWR0aDogNjAlO1xuICAgYm9yZGVyOiAxcHggcmdiKDU1LCA1NSwgNTUpIHNvbGlkO1xuICAgcGFkZGluZzogMC42cmVtO1xuICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xuICAgY29sb3I6aHNsKDIxNCwgOTMlLCAxMiUpO1xuICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgIGZvbnQtc2l6ZTogMXJlbTtcbiB9XG5sYWJlbHtcbiAgICBjb2xvcjpoc2woMjEzLCA5NiUsIDE4JSk7O1xufVxuLmludmFsaWR7XG4gICAgYm9yZGVyOiAycHggIGhzbCgzNTQsIDg0JSwgNTclKSBzb2xpZDtcbiAgIH1cbi52YWxpZHtcbiAgICBib3JkZXI6IDJweCBncmVlbiAgc29saWQ7XG4gICB9XG4gICAuYnRuLWhvbGRlcntcbiAgICB3aWR0aDogNjQlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBlbmQ7XG4gICAgbWFyZ2luLXRvcDogM3JlbTtcbiAgfVxuICAgIGlucHV0OmZvY3Vze1xuICAgICAgICBib3JkZXI6M3B4IHNvbGlkIHJnYigwLCA0LCAyNTUpO1xuICAgICAgICB9XG4gICAgLyogdGFiIHR3byAqL1xuICAgIC5wbGFuc3tcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZ2FwOiAxcmVtO1xuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgIH1cbiAgIC5wbGFuLWhvbGRlcntcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIGhzbCgyMTMsIDk2JSwgMTglKTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgYWxpZ24taXRlbXM6ZmxleC1zdGFydDtcbiAgICAgICAgd2lkdGg6IDIwMHB4O1xuICAgICAgICBoZWlnaHQ6IDE5MHB4O1xuICAgICAgICBwYWRkaW5nOiAxcmVtO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxuICAgLnBsYW4taG9sZGVyOmhvdmVye1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMjI5LCAyNCUsIDg3JSk7XG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIGhzbCgyNDMsIDEwMCUsIDYyJSk7XG4gICB9XG4gICAuYWJvdXQtcGxhbntcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgd2lkdGg6IGZpdC1jb250ZW50O1xuICAgfVxuICAgLnBsYW4tZGV0YWlsLCAuYWJvdXQtcGxhbntcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgZ2FwOiAwLjNyZW07XG4gICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgfVxuICAgLnBsYW4tbmFtZXtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgY29sb3I6IGhzbCgyMTMsIDk2JSwgMTglKTtcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgfVxuICAgLmljb24taG9sZGVye1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEuNXJlbTtcbiAgIH0gXG4gICAudG9nZ2xlLWhvbGRlcntcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZ2FwOiAxcmVtO1xuICAgICAgICBtYXJnaW46IDFyZW07XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBib3JkZXItcmFkaXVzOjVweCA7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6aHNsKDIyOSwgMjQlLCA4NyUpO1xuICAgICAgICBwYWRkaW5nOiAwLjVyZW07XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbiAgICB9XG4gICAudG9nZ2xle1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgd2lkdGg6IDUwcHg7XG4gICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjpoc2woMjEzLCA5NiUsIDE4JSk7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XG4gICAgfVxuICAgLnRvZ2dsZTo6YWZ0ZXJ7XG4gICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgICB3aWR0aDogMjBweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICB0b3A6IDVweDtcbiAgICAgICAgbGVmdDogMXB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMCwgMCUsIDEwMCUpO1xuICAgfVxuICAuY2hlY2tib3g6Y2hlY2tlZCArIC50b2dnbGU6OmFmdGVye1xuICAgICAgICBsZWZ0OiAyNXB4O1xuICAgICB9XG4gICAgLmNoZWNrYm94e1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgICAubmF2LWJ0bnN7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xuICAgICAgICBtYXJnaW46IDFyZW07XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGhzbCgwLCAwJSwgMTAwJSk7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbiAgICAgICAgd2lkdGg6IDkwJTtcbiAgICAgICAgcGFkZGluZzogMC42cmVtO1xuXG4gICAgIH1cbiAgICBcbiAgICAudGFiLXR3by1idG4sIC50YWItdGhyZWUtYnRuLCAudGFiLWZvdXItYnRuLCAudGFiLWZvdXItY29uZmlybS1idG4gLCAudGFiLW9uZS1idG57XG4gICAgICAgIHBhZGRpbmc6IDFyZW07XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGhzbCgyMTMsIDk2JSwgMTglKTtcbiAgICAgICAgY29sb3I6IGF6dXJlO1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIHdpZHRoOiBmaXQtY29udGVudDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xuICAgIH1cbiAgIFxuICAgLmFib3V0LWFkZHN7XG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICBoc2woMjQzLCAxMDAlLCA2MiUpO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAwLjRyZW07XG4gICAgICAgIHBhZGRpbmc6IDAuNXJlbTtcbiAgICAgICAgbWFyZ2luOiAwLjVyZW07XG4gICAgICAgfVxuICAgIC5hYm91dC1hZGRzOmhvdmVye1xuICAgICAgICBib3gtc2hhZG93OiByZ2IoMjUxLCAwLCAwKSAtMXB4IDNweCAzcHg7XG4gICAgfVxuICAgIC5hZGQtaG9sZGVyLC5hZGQtaGVhZGVye1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIGdhcDoxcmVtO1xuICAgIH1cbiAgICAuYWRkLXRpdGxle1xuICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICB9XG4gICAgLmFib3V0LXBsYW57XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgfVxuICAgIC5hZGQtdGl0bGUsLmFkZC1wbGFue1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgfVxuICAgIC51c2VyLWFkZHtcbiAgICAgICAgd2lkdGg6IDFyZW07XG4gICAgICAgIGhlaWdodDogMXJlbTtcbiAgICAgICAgbWFyZ2luLXRvcDogMC41cmVtO1xuICAgIH1cbiAgICAvKiB0YWIgZm91ciAqL1xuICAgIC50YWItZm91cntcbiAgICAgICAgbWFyZ2luOiAxLjVyZW07XG4gICAgfVxuICAgIC5zdW1tYXJ5LXBsYW4sIC5hZGQtZGV0YWlsLCAuc3VtbWFyeS10b3RhbHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgIHBhZGRpbmc6IDAuNXJlbTtcbiAgICAgICBjb2xvcjpoc2woMjEzLCA5NiUsIDE4JSk7XG4gICAgICAgXG4gICAgfVxuICAgIC5zdW1tYXJ5LXNlcnZpY2Vze1xuICAgICAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuICAgIH1cbiAgIC5hZGQtZGV0YWlsID4gcHtcbiAgICBtYXJnaW46IDA7XG4gICB9XG4gICAgXG4gICAgLnNlbGVjdGVkLXBsYW57XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMC41cmVtO1xuXG4gICAgfVxuICAgIC5zdW1tYXJ5LXByaWNle1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICB9XG4gICAgLmNoYW5nZS1wbGFue1xuICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIFxuICAgIH1cbiAgICAuY2hhbmdlLXBsYW46aG92ZXJ7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAgaHNsKDI0MywgMTAwJSwgNjIlKTtcbiAgICAgICAgY29sb3I6IGhzbCgyNDMsIDEwMCUsIDYyJSk7XG4gICAgfVxuICAgIC5hZGQtbmFtZSwgLmNoYW5nZS1wbGFue1xuICAgICAgICBjb2xvcjpoc2woMjMxLCAxMSUsIDYzJSkgOyBcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgIH1cbiAgICAub25saW5lLXByaWNlLCAudGhlbWUtcHJpY2UsIC5zdG9yYWdlLXByaWNle1xuICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgfVxuICAgIC50b3RhbC1wcmljZXtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgfVxuICAgIFxuICAgIGhye1xuICAgICAgICBtYXJnaW46IDFyZW07XG4gICAgfVxuICAgIC5zZXJ2aWNlLWhvbGRlcntcbiAgICAgICAgcGFkZGluZzogMC41cmVtO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMjI5LCAyNCUsIDg3JSk7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbiAgICAgICAgaGVpZ2h0OiBmaXQtY29udGVudDtcbiAgICAgICAgfVxuICAgIC5iYWNrLWJ0bntcbiAgICAgICAgY29sb3I6aHNsKDIzMSwgMTElLCA2MyUpIDsgXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGhzbCgyMzEsIDEwMCUsIDk5JSk7XG4gICAgICAgIH1cbiAgICAvKiBzdGVwIGZpdmUgdGFiKi9cbiAgICAuc3RlcC1maXZle1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgcGFkZGluZzogMXJlbTtcbiAgICAgICAgbWFyZ2luLXRvcDogMTUlO1xuICAgICAgICBcbiAgICB9XG4gICAgLmNvbmZpcm0tdGV4dHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cbkBtZWRpYSAobWF4LXdpZHRoOjU2NXB4KSB7XG4gICAgLyogbmF2ICovXG4gICAgYm9keXtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGhzbCgyMDYsIDk0JSwgODclKTtcbiAgICAgICAgfVxuICAgIG5hdntcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTp1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19ffSkgO1xuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiB0b3A7XG4gICAgICAgIGhlaWdodDogMzB2aDtcbiAgICAgICAgd2lkdGg6IDEwMHZ3O1xuICAgIH1cbiAgICB1bHtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICB9XG4gICAubmF2LWRlc2NyaXB0aW9ue1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgICAvKiBzdGVwIG9uZSAqL1xuICAgIC5zdGVwLW9uZXtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBib3R0b206IDE2JTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xuICAgICAgICB3aWR0aDogNzAlO1xuICAgICAgICBtYXgtaGVpZ2h0OiA0OTBweDtcbiAgICB9XG4gICAgaW5wdXR7XG4gICAgICAgIHdpZHRoOiA4MCU7XG4gICAgfVxuICAgIC5lcnJvci1tc2d7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB0ZXh0LWFsaWduOiBzdGFydDtcbiAgICB9XG4gICAgLnN0ZXAtdHdvLCAudGFiLXRocmVlLCAudGFiLWZvdXIsIC5zdGVwLWZpdmV7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xuICAgICAgICB3aWR0aDogNzAlO1xuICAgICAgIH1cbiAgICAgICAuc3RlcC10d297XG4gICAgICAgIGJvdHRvbTogNnJlbTtcbiAgICAgICB9XG4gICAgICAgLnRhYi10aHJlZXtcbiAgICAgICAgYm90dG9tOiA4cmVtO1xuICAgICAgIH1cbiAgICAgICAudGFiLWZvdXJ7XG4gICAgICAgIGJvdHRvbTogNi40cmVtO1xuICAgICAgICByaWdodDogMXJlbTtcbiAgICAgICB9XG4gICAgICAgLnN0ZXAtZml2ZXtcbiAgICAgICAgYm90dG9tOiAxMHJlbTtcbiAgICAgICB9XG4gICAgICAgXG4gICAgLmFkZC1oZWFkZXJ7XG4gICAgICAgIGdhcDogMC4zcmVtO1xuICAgIH1cbiAgICAvKiBzdGVwIHRocmVlICovXG4gICAgXG4gICAgLmFib3V0LWFkZHN7XG4gICAgICAgcGFkZGluZzogMC41cmVtO1xuICAgICAgIG1hcmdpbjogMDtcbiAgICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICAgICAgIFxuICAgIH1cbiAgICBcbiAgICAuYWRkLXRpdGxle1xuICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgfVxuICAgIC5hZGQtcGxhbntcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgZm9udC1zaXplOiAwLjdyZW07XG4gICAgICAgIH1cbiAgIFxuICAgIC8qIHN0ZXAgdHdvIGNhcmRzICovXG4gICAgLnBsYW5ze1xuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgIGdhcDogMC41cmVtO1xuICAgIH1cbiAgICAuZXJyb3ItY2FyZHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgIH1cbiAgICAucGxhbi1mZWV7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMC43cmVtO1xuICAgIH1cbiBcbi5uYXYtYnRuc3tcbiAgICBtYXJnaW46IDA7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMjhyZW07XG4gICAgcmlnaHQ6IDAuMXJlbTtcbn1cbi5idG4taG9sZGVye1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IDJyZW07XG4gICAgbGVmdDogMzUlO1xufVxuXG4udGFiLWZvdXIgPiAubmF2LWJ0bnN7XG4gICAgdG9wOiAyOHJlbTtcbn1cbi5zZXJ2aWNlLWhvbGRlcntcbiAgICBoZWlnaHQ6IDI3MHB4O1xufVxuXG4gICAgLnBsYW4taG9sZGVye1xuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGhlaWdodDogODRweDtcbiAgICAgICAgcGFkZGluZzogNXB4O1xuICAgIH1cbiAgICAuYWJvdXQtcGxhbiB7XG4gICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgZ2FwOiAwLjVyZW07XG4gICAgfVxuICAgIC50b2dnbGUtaG9sZGVye1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIG1hcmdpbi10b3A6IDNweDtcbiAgICB9XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLDJCQUEyQjtBQUMzQjtJQUNJLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQiw0REFBeUU7RUFDM0U7QUFDRjtJQUNJLG1DQUFtQztJQUNuQyxpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLHFCQUFxQjtJQUNyQixhQUFhO0lBQ2IsY0FBYztJQUNkLDhCQUE4QjtJQUM5Qix5QkFBeUI7QUFDN0I7QUFDQSxjQUFjOztBQUVkO0lBQ0kseURBQTZEO0lBQzdELDRCQUE0QjtJQUM1QixzQkFBc0I7SUFDdEIsMkJBQTJC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SSxlQUFlO1FBQ2YsV0FBVztRQUNYLHVCQUF1QjtRQUN2Qix1QkFBdUI7UUFDdkIsWUFBWTtRQUNaLFlBQVk7SUFDaEI7SUFDQTtPQUNHLG1CQUFtQjtRQUNsQixtQkFBbUI7UUFDbkIsV0FBVztJQUNmO0lBQ0E7UUFDSSxTQUFTO1FBQ1QsZUFBZTtJQUNuQjtBQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIHVidW50dS1yZWd1bGFyIC0gbGF0aW4gKi9cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1kaXNwbGF5OiBzd2FwOyBcXG4gICAgZm9udC1mYW1pbHk6ICdVYnVudHUnO1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgIHNyYzogdXJsKCcuL2Fzc2V0cy9mb250cy91YnVudHUtdjIwLWxhdGluLXJlZ3VsYXIud29mZjInKSBmb3JtYXQoJ3dvZmYyJyk7IFxcbiAgfVxcbmJvZHl7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICBoc2woMCwgMCUsIDEwMCUpO1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gICAgbWF4LXdpZHRoOiAxMDB2dztcXG4gICAgZm9udC1mYW1pbHk6ICdVYnVudHUnO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBtYXJnaW46IDAuNXJlbTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMmZyO1xcbiAgICBjb2xvcjogaHNsKDIxMywgOTYlLCAxOCUpO1xcbn1cXG4vKiBuYXYgc3R5bGUgKi9cXG5cXG5uYXZ7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguL2Fzc2V0cy9pbWFnZXMvYmctc2lkZWJhci1kZXNrdG9wLnN2Zyk7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGJvdHRvbTtcXG4gICAgaGVpZ2h0OiA5NXZoO1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICB9XFxudWx7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5saXtcXG4gICAgbWFyZ2luOiAxcmVtO1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuLm5hdi1ob2xkZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMXJlbTtcXG59XFxuLnN0ZXAtbmFtZXtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcbi5zdGVwLW5hbWU6aG92ZXJ7XFxuICAgIHRleHQtc2hhZG93OiAycHggMnB4ICByZ2IoMTAxLCA1LCAxMTgpO1xcbiAgICB9XFxuLmRvdHtcXG4gICAgd2lkdGg6IDJyZW07XFxuICAgIGhlaWdodDogMnJlbTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXI6IDJweCByZ2IoMjU1LCAyNTUsIDI1NSkgc29saWQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXG4gICAgfVxcbiAgICAuZG90OmhvdmVye1xcbiAgICAgICAgYm9yZGVyOiByZ2IoMjMyLCAzMSwgMjQ3KSBzb2xpZCAzcHg7XFxuICAgIH1cXG4uc3RlcC1udW17XFxuICAgIGNvbG9yOiBoc2woMjI4LCAxMDAlLCA4NCUpO1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbn1cXG5oMXtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBjb2xvcjpoc2woMjEzLCA5NiUsIDE4JSk7XFxufVxcbi5pbnN0cnVjdGlvbiwgLnBsYW4tZmVlLCAuYWRkLXBsYW4gLCAuY29uZmlybS10ZXh0IHtcXG4gICAgY29sb3I6aHNsKDIzMSwgMTElLCA2MyUpIDtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICB9XFxuICAgIC5jb25maXJtLXRleHR7XFxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICB9XFxuXFxuLmJhY2stYnRue1xcbiAgICBjb2xvcjpoc2woMjMxLCAxMSUsIDYzJSkgOyBcXG59XFxuLyogcGVyc29uYWwgaW5mbyBmb3JtICovXFxuLnN0ZXAtb25lLCAuc3RlcC10d28sIC50YWItdGhyZWUsIC50YWItZm91ciAsIC5zdGVwLWZpdmUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBtYXJnaW46IDFyZW07XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGhzbCgwLCAwJSwgMTAwJSk7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuXFxuICAgICB9XFxuICAuZXJyb3ItbXNne1xcbiAgICBtYXJnaW46IDFweDtcXG4gICAgd2lkdGg6IDYwJTtcXG4gICAgY29sb3I6ICBoc2woMzU0LCA4NCUsIDU3JSk7XFxuICAgIHRleHQtYWxpZ246IGVuZDtcXG59XFxuXFxuLmxhYmVsLWhvbGRlcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgbWFyZ2luOiAwLjNyZW07XFxuICAgIFxcbn1cXG5pbnB1dHtcXG4gICAgd2lkdGg6IDYwJTtcXG4gICBib3JkZXI6IDFweCByZ2IoNTUsIDU1LCA1NSkgc29saWQ7XFxuICAgcGFkZGluZzogMC42cmVtO1xcbiAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gICBjb2xvcjpoc2woMjE0LCA5MyUsIDEyJSk7XFxuICAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gICBmb250LXNpemU6IDFyZW07XFxuIH1cXG5sYWJlbHtcXG4gICAgY29sb3I6aHNsKDIxMywgOTYlLCAxOCUpOztcXG59XFxuLmludmFsaWR7XFxuICAgIGJvcmRlcjogMnB4ICBoc2woMzU0LCA4NCUsIDU3JSkgc29saWQ7XFxuICAgfVxcbi52YWxpZHtcXG4gICAgYm9yZGVyOiAycHggZ3JlZW4gIHNvbGlkO1xcbiAgIH1cXG4gICAuYnRuLWhvbGRlcntcXG4gICAgd2lkdGg6IDY0JTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBlbmQ7XFxuICAgIG1hcmdpbi10b3A6IDNyZW07XFxuICB9XFxuICAgIGlucHV0OmZvY3Vze1xcbiAgICAgICAgYm9yZGVyOjNweCBzb2xpZCByZ2IoMCwgNCwgMjU1KTtcXG4gICAgICAgIH1cXG4gICAgLyogdGFiIHR3byAqL1xcbiAgICAucGxhbnN7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZ2FwOiAxcmVtO1xcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICAgICAgfVxcbiAgIC5wbGFuLWhvbGRlcntcXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICBoc2woMjEzLCA5NiUsIDE4JSk7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOmZsZXgtc3RhcnQ7XFxuICAgICAgICB3aWR0aDogMjAwcHg7XFxuICAgICAgICBoZWlnaHQ6IDE5MHB4O1xcbiAgICAgICAgcGFkZGluZzogMXJlbTtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIH1cXG4gICAucGxhbi1ob2xkZXI6aG92ZXJ7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMjI5LCAyNCUsIDg3JSk7XFxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCBoc2woMjQzLCAxMDAlLCA2MiUpO1xcbiAgIH1cXG4gICAuYWJvdXQtcGxhbntcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAgICAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICAgfVxcbiAgIC5wbGFuLWRldGFpbCwgLmFib3V0LXBsYW57XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIGdhcDogMC4zcmVtO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICAgfVxcbiAgIC5wbGFuLW5hbWV7XFxuICAgICAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICAgICAgY29sb3I6IGhzbCgyMTMsIDk2JSwgMTglKTtcXG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICB9XFxuICAgLmljb24taG9sZGVye1xcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxLjVyZW07XFxuICAgfSBcXG4gICAudG9nZ2xlLWhvbGRlcntcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBnYXA6IDFyZW07XFxuICAgICAgICBtYXJnaW46IDFyZW07XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICBib3JkZXItcmFkaXVzOjVweCA7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOmhzbCgyMjksIDI0JSwgODclKTtcXG4gICAgICAgIHBhZGRpbmc6IDAuNXJlbTtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gICAgfVxcbiAgIC50b2dnbGV7XFxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgICB3aWR0aDogNTBweDtcXG4gICAgICAgIGhlaWdodDogMzBweDtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6aHNsKDIxMywgOTYlLCAxOCUpO1xcbiAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjVzO1xcbiAgICB9XFxuICAgLnRvZ2dsZTo6YWZ0ZXJ7XFxuICAgICAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIGhlaWdodDogMjBweDtcXG4gICAgICAgIHdpZHRoOiAyMHB4O1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICAgICAgdG9wOiA1cHg7XFxuICAgICAgICBsZWZ0OiAxcHg7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMCwgMCUsIDEwMCUpO1xcbiAgIH1cXG4gIC5jaGVja2JveDpjaGVja2VkICsgLnRvZ2dsZTo6YWZ0ZXJ7XFxuICAgICAgICBsZWZ0OiAyNXB4O1xcbiAgICAgfVxcbiAgICAuY2hlY2tib3h7XFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICB9XFxuICAgIC5uYXYtYnRuc3tcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgICAgICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XFxuICAgICAgICBtYXJnaW46IDFyZW07XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMCwgMCUsIDEwMCUpO1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgICAgICAgd2lkdGg6IDkwJTtcXG4gICAgICAgIHBhZGRpbmc6IDAuNnJlbTtcXG5cXG4gICAgIH1cXG4gICAgXFxuICAgIC50YWItdHdvLWJ0biwgLnRhYi10aHJlZS1idG4sIC50YWItZm91ci1idG4sIC50YWItZm91ci1jb25maXJtLWJ0biAsIC50YWItb25lLWJ0bntcXG4gICAgICAgIHBhZGRpbmc6IDFyZW07XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMjEzLCA5NiUsIDE4JSk7XFxuICAgICAgICBjb2xvcjogYXp1cmU7XFxuICAgICAgICBib3JkZXI6IG5vbmU7XFxuICAgICAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICAgIH1cXG4gICBcXG4gICAuYWJvdXQtYWRkc3tcXG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICBoc2woMjQzLCAxMDAlLCA2MiUpO1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMC40cmVtO1xcbiAgICAgICAgcGFkZGluZzogMC41cmVtO1xcbiAgICAgICAgbWFyZ2luOiAwLjVyZW07XFxuICAgICAgIH1cXG4gICAgLmFib3V0LWFkZHM6aG92ZXJ7XFxuICAgICAgICBib3gtc2hhZG93OiByZ2IoMjUxLCAwLCAwKSAtMXB4IDNweCAzcHg7XFxuICAgIH1cXG4gICAgLmFkZC1ob2xkZXIsLmFkZC1oZWFkZXJ7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgICAgIGdhcDoxcmVtO1xcbiAgICB9XFxuICAgIC5hZGQtdGl0bGV7XFxuICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgIH1cXG4gICAgLmFib3V0LXBsYW57XFxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xcbiAgICB9XFxuICAgIC5hZGQtdGl0bGUsLmFkZC1wbGFue1xcbiAgICAgICAgbWFyZ2luOiAwO1xcbiAgICB9XFxuICAgIC51c2VyLWFkZHtcXG4gICAgICAgIHdpZHRoOiAxcmVtO1xcbiAgICAgICAgaGVpZ2h0OiAxcmVtO1xcbiAgICAgICAgbWFyZ2luLXRvcDogMC41cmVtO1xcbiAgICB9XFxuICAgIC8qIHRhYiBmb3VyICovXFxuICAgIC50YWItZm91cntcXG4gICAgICAgIG1hcmdpbjogMS41cmVtO1xcbiAgICB9XFxuICAgIC5zdW1tYXJ5LXBsYW4sIC5hZGQtZGV0YWlsLCAuc3VtbWFyeS10b3RhbHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgICAgIHBhZGRpbmc6IDAuNXJlbTtcXG4gICAgICAgY29sb3I6aHNsKDIxMywgOTYlLCAxOCUpO1xcbiAgICAgICBcXG4gICAgfVxcbiAgICAuc3VtbWFyeS1zZXJ2aWNlc3tcXG4gICAgICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICAgIH1cXG4gICAuYWRkLWRldGFpbCA+IHB7XFxuICAgIG1hcmdpbjogMDtcXG4gICB9XFxuICAgIFxcbiAgICAuc2VsZWN0ZWQtcGxhbntcXG4gICAgICAgIG1hcmdpbjogMDtcXG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAwLjVyZW07XFxuXFxuICAgIH1cXG4gICAgLnN1bW1hcnktcHJpY2V7XFxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xcbiAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIH1cXG4gICAgLmNoYW5nZS1wbGFue1xcbiAgICAgICAgb3V0bGluZTogbm9uZTtcXG4gICAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICAgIHBhZGRpbmc6IDA7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgIFxcbiAgICB9XFxuICAgIC5jaGFuZ2UtcGxhbjpob3ZlcntcXG4gICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAgaHNsKDI0MywgMTAwJSwgNjIlKTtcXG4gICAgICAgIGNvbG9yOiBoc2woMjQzLCAxMDAlLCA2MiUpO1xcbiAgICB9XFxuICAgIC5hZGQtbmFtZSwgLmNoYW5nZS1wbGFue1xcbiAgICAgICAgY29sb3I6aHNsKDIzMSwgMTElLCA2MyUpIDsgXFxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICB9XFxuICAgIC5vbmxpbmUtcHJpY2UsIC50aGVtZS1wcmljZSwgLnN0b3JhZ2UtcHJpY2V7XFxuICAgICAgICBmb250LXNpemU6IDFyZW07XFxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICB9XFxuICAgIC50b3RhbC1wcmljZXtcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgfVxcbiAgICBcXG4gICAgaHJ7XFxuICAgICAgICBtYXJnaW46IDFyZW07XFxuICAgIH1cXG4gICAgLnNlcnZpY2UtaG9sZGVye1xcbiAgICAgICAgcGFkZGluZzogMC41cmVtO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDIyOSwgMjQlLCA4NyUpO1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgICAgICAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gICAgICAgIH1cXG4gICAgLmJhY2stYnRue1xcbiAgICAgICAgY29sb3I6aHNsKDIzMSwgMTElLCA2MyUpIDsgXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMjMxLCAxMDAlLCA5OSUpO1xcbiAgICAgICAgfVxcbiAgICAvKiBzdGVwIGZpdmUgdGFiKi9cXG4gICAgLnN0ZXAtZml2ZXtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIHBhZGRpbmc6IDFyZW07XFxuICAgICAgICBtYXJnaW4tdG9wOiAxNSU7XFxuICAgICAgICBcXG4gICAgfVxcbiAgICAuY29uZmlybS10ZXh0e1xcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB9XFxuQG1lZGlhIChtYXgtd2lkdGg6NTY1cHgpIHtcXG4gICAgLyogbmF2ICovXFxuICAgIGJvZHl7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGhzbCgyMDYsIDk0JSwgODclKTtcXG4gICAgICAgIH1cXG4gICAgbmF2e1xcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTp1cmwoLi9hc3NldHMvaW1hZ2VzL2JnLXNpZGViYXItbW9iaWxlLnN2ZykgO1xcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogdG9wO1xcbiAgICAgICAgaGVpZ2h0OiAzMHZoO1xcbiAgICAgICAgd2lkdGg6IDEwMHZ3O1xcbiAgICB9XFxuICAgIHVse1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgfVxcbiAgIC5uYXYtZGVzY3JpcHRpb257XFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICB9XFxuICAgIC8qIHN0ZXAgb25lICovXFxuICAgIC5zdGVwLW9uZXtcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIGJvdHRvbTogMTYlO1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgICAgICAgd2lkdGg6IDcwJTtcXG4gICAgICAgIG1heC1oZWlnaHQ6IDQ5MHB4O1xcbiAgICB9XFxuICAgIGlucHV0e1xcbiAgICAgICAgd2lkdGg6IDgwJTtcXG4gICAgfVxcbiAgICAuZXJyb3ItbXNne1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICB0ZXh0LWFsaWduOiBzdGFydDtcXG4gICAgfVxcbiAgICAuc3RlcC10d28sIC50YWItdGhyZWUsIC50YWItZm91ciwgLnN0ZXAtZml2ZXtcXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gICAgICAgIHdpZHRoOiA3MCU7XFxuICAgICAgIH1cXG4gICAgICAgLnN0ZXAtdHdve1xcbiAgICAgICAgYm90dG9tOiA2cmVtO1xcbiAgICAgICB9XFxuICAgICAgIC50YWItdGhyZWV7XFxuICAgICAgICBib3R0b206IDhyZW07XFxuICAgICAgIH1cXG4gICAgICAgLnRhYi1mb3Vye1xcbiAgICAgICAgYm90dG9tOiA2LjRyZW07XFxuICAgICAgICByaWdodDogMXJlbTtcXG4gICAgICAgfVxcbiAgICAgICAuc3RlcC1maXZle1xcbiAgICAgICAgYm90dG9tOiAxMHJlbTtcXG4gICAgICAgfVxcbiAgICAgICBcXG4gICAgLmFkZC1oZWFkZXJ7XFxuICAgICAgICBnYXA6IDAuM3JlbTtcXG4gICAgfVxcbiAgICAvKiBzdGVwIHRocmVlICovXFxuICAgIFxcbiAgICAuYWJvdXQtYWRkc3tcXG4gICAgICAgcGFkZGluZzogMC41cmVtO1xcbiAgICAgICBtYXJnaW46IDA7XFxuICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XFxuICAgICAgIFxcbiAgICB9XFxuICAgIFxcbiAgICAuYWRkLXRpdGxle1xcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgfVxcbiAgICAuYWRkLXBsYW57XFxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xcbiAgICAgICAgZm9udC1zaXplOiAwLjdyZW07XFxuICAgICAgICB9XFxuICAgXFxuICAgIC8qIHN0ZXAgdHdvIGNhcmRzICovXFxuICAgIC5wbGFuc3tcXG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgICAgIGdhcDogMC41cmVtO1xcbiAgICB9XFxuICAgIC5lcnJvci1jYXJke1xcbiAgICAgICAgbWFyZ2luOiAwO1xcbiAgICAgICAgcGFkZGluZzogMDtcXG4gICAgfVxcbiAgICAucGxhbi1mZWV7XFxuICAgICAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICAgICAgZm9udC1zaXplOiAwLjdyZW07XFxuICAgIH1cXG4gXFxuLm5hdi1idG5ze1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAyOHJlbTtcXG4gICAgcmlnaHQ6IDAuMXJlbTtcXG59XFxuLmJ0bi1ob2xkZXJ7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgdG9wOiAycmVtO1xcbiAgICBsZWZ0OiAzNSU7XFxufVxcblxcbi50YWItZm91ciA+IC5uYXYtYnRuc3tcXG4gICAgdG9wOiAyOHJlbTtcXG59XFxuLnNlcnZpY2UtaG9sZGVye1xcbiAgICBoZWlnaHQ6IDI3MHB4O1xcbn1cXG5cXG4gICAgLnBsYW4taG9sZGVye1xcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgaGVpZ2h0OiA4NHB4O1xcbiAgICAgICAgcGFkZGluZzogNXB4O1xcbiAgICB9XFxuICAgIC5hYm91dC1wbGFuIHtcXG4gICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBnYXA6IDAuNXJlbTtcXG4gICAgfVxcbiAgICAudG9nZ2xlLWhvbGRlcntcXG4gICAgICAgIG1hcmdpbjogMDtcXG4gICAgICAgIG1hcmdpbi10b3A6IDNweDtcXG4gICAgfVxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIGNsYXNzIHRvIGhvbGQgaW5mb1xuZXhwb3J0IGNsYXNzIFVzZXJQZXJzb25hbEluZm8ge1xuICBjb25zdHJ1Y3RvcihvcHRpb25zID0ge30pIHtcbiAgICB0aGlzLm5hbWUgPSBvcHRpb25zLm5hbWUgfHwgXCJcIjtcbiAgICB0aGlzLmVtYWlsID0gb3B0aW9ucy5lbWFpbCB8fCBcIlwiO1xuICAgIHRoaXMucGhvbmUgPSBvcHRpb25zLnBob25lIHx8IFwiXCI7XG4gIH1cbn1cbmV4cG9ydCBjbGFzcyBVc2VyUGxhbkRhdGEge1xuICBjb25zdHJ1Y3RvcihvcHRpb25zID0ge30pIHtcbiAgICB0aGlzLnBsYW4gPSBvcHRpb25zLnBsYW4gfHwgZmFsc2U7XG4gICAgLy8gY2hlY2tib3hcbiAgICB0aGlzLmNoZWNrYm94ID0gb3B0aW9ucy5jaGVja2JveCB8fCBcIlwiO1xuICAgIHRoaXMuYXJjYWRlID0gb3B0aW9ucy5hcmNhZGUgfHwgXCJcIjtcbiAgICB0aGlzLmFkdmFuY2VkID0gb3B0aW9ucy5hZHZhbmNlZCB8fCBcIlwiO1xuICAgIHRoaXMucHJvID0gb3B0aW9ucy5wcm8gfHwgXCJcIjtcbiAgICB0aGlzLmJvbnVzID0gb3B0aW9ucy5ib251cyB8fCBcIm5vbmVcIjtcbiAgICB0aGlzLnNlbGVjdGVkUGxhbiA9IG9wdGlvbnMuc2VsZWN0ZWRQbGFuIHx8IFwiXCI7XG4gICAgdGhpcy5tb25odGx5ID0gb3B0aW9ucy5tb250aGx5IHx8IFwiXCI7XG4gICAgdGhpcy55ZWFybHkgPSBvcHRpb25zLnllYXJseSB8fCBcIlwiO1xuICB9XG5cbiAgeWVhcmx5UHJpY2UoKSB7XG4gICAgdGhpcy5hcmNhZGUgPSBcIiQ5MC95clwiO1xuICAgIHRoaXMuYWR2YW5jZWQgPSBcIiQxMjAveXJcIjtcbiAgICB0aGlzLnBybyA9IFwiJDE1MC95clwiO1xuICB9XG5cbiAgbW9udGhseVByaWNlKCkge1xuICAgIHRoaXMuYXJjYWRlID0gXCIkOS9tb1wiO1xuICAgIHRoaXMuYWR2YW5jZWQgPSBcIiQxMi9tb1wiO1xuICAgIHRoaXMucHJvID0gXCIkMTUvbW9cIjtcbiAgfVxuXG4gIGNob29zZW5QbGFuKCkge1xuICAgIGlmICh0aGlzLnBsYW4gPT09IHRydWUpIHtcbiAgICAgIHRoaXMueWVhcmx5UHJpY2UoKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMucGxhbiA9PT0gZmFsc2UpIHtcbiAgICAgIHRoaXMubW9udGhseVByaWNlKCk7XG4gICAgfVxuICB9XG5cbiAgc3R5bGUoKSB7XG4gICAgaWYgKHRoaXMucGxhbiA9PT0gZmFsc2UpIHtcbiAgICAgIHRoaXMubW9udGhseSA9IFwiaHNsKDIxMywgOTYlLCAxOCVcIjtcbiAgICAgIHRoaXMueWVhcmx5ID0gXCJoc2woMjMxLCAxMSUsIDYzJSlcIjtcbiAgICB9IGVsc2UgaWYgKHRoaXMucGxhbiA9PT0gdHJ1ZSkge1xuICAgICAgdGhpcy5tb250aGx5ID0gXCJoc2woMjEzLCA5NiUsIDE4JVwiO1xuICAgICAgdGhpcy55ZWFybHkgPSBcImhzbCgyMzEsIDExJSwgNjMlKVwiO1xuICAgIH1cbiAgfVxufVxuZXhwb3J0IGNsYXNzIFVzZXJTZXJ2aWNlcyB7XG4gIGNvbnN0cnVjdG9yKG9wdGlvbnMgPSB7fSkge1xuICAgIC8vIGdldCBwbGFuIGlmIG1lb250aGx5IG9yIHllYXJseSh0cnVlIGlzIG1vbnRobHkgc2V0IGluIHN0ZXAgMiBvciB1c2VyZGF0YSBvYmopXG4gICAgdGhpcy5hZGRQbGFuID0gb3B0aW9ucy5hZGRQbGFuIHx8IGZhbHNlO1xuICAgIC8vXG5cbiAgICAvLyBjaGVja2JveCB2YWx1ZVxuICAgIHRoaXMub25saW5lID0gb3B0aW9ucy5vbmxpbmUgfHwgXCJcIjtcbiAgICB0aGlzLnN0b3JhZ2UgPSBvcHRpb25zLnN0b3JhZ2UgfHwgXCJcIjtcbiAgICB0aGlzLnRoZW1lID0gb3B0aW9ucy50aGVtZSB8fCBcIlwiO1xuICAgIC8vIHByaWNlXG4gICAgdGhpcy5vbmxpbmVQcmljZSA9IG9wdGlvbnMub25saW5lUHJpY2UgfHwgXCJcIjtcbiAgICB0aGlzLnN0b3JhZ2VQcmljZSA9IG9wdGlvbnMub25saW5lUHJpY2UgfHwgXCJcIjtcbiAgICB0aGlzLnRoZW1lUHJpY2UgPSBvcHRpb25zLm9ubGluZVByaWNlIHx8IFwiXCI7XG4gIH1cblxuICB5ZWFybHlQcmljZSgpIHtcbiAgICB0aGlzLm9ubGluZVByaWNlID0gXCIrJDEwL3lyXCI7XG4gICAgdGhpcy5zdG9yYWdlUHJpY2UgPSBcIiskMjAveXJcIjtcbiAgICB0aGlzLnRoZW1lUHJpY2UgPSBcIiskMjAveXJcIjtcbiAgfVxuXG4gIG1vbnRobHlQcmljZSgpIHtcbiAgICB0aGlzLm9ubGluZVByaWNlID0gXCIrJDEvbW9cIjtcbiAgICB0aGlzLnN0b3JhZ2VQcmljZSA9IFwiKyQyL21vXCI7XG4gICAgdGhpcy50aGVtZVByaWNlID0gXCIrJDIvbW9cIjtcbiAgfVxuXG4gIGNob29zZW5QbGFuKCkge1xuICAgIGlmICh0aGlzLmFkZFBsYW4gPT09IHRydWUpIHtcbiAgICAgIHRoaXMueWVhcmx5UHJpY2UoKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuYWRkUGxhbiA9PT0gZmFsc2UpIHtcbiAgICAgIHRoaXMubW9udGhseVByaWNlKCk7XG4gICAgfVxuICB9XG59XG5cbmNvbnN0IHRhYk9uZSA9IGZ1bmN0aW9uIChvYmopIHtcbiAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgcGVyc29uYWxJbmZvID0gYCBcbiAgICA8ZGl2IGNsYXNzPVwic3RlcC1vbmVcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0taGVhZGVyXCI+XG4gICAgICAgICAgICA8aDE+UGVyc29uYWwgSW5mbzwvaDE+XG4gICAgICAgICAgICA8cCBjbGFzcz1cImluc3RydWN0aW9uXCI+cGxlYXNlIHByb3ZpZGUgeW91ciBuYW1lLGVtYWlsIGFkcmVzcyBhbmQgcGhvbmUgbnVtYmVyPC9wPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ob2xkZXJcIj5cbiAgICAgICAgICAgIDxmb3JtIGNsYXNzPVwicGVyc29uYWwtaW5mby1mb3JtXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxhYmVsLWhvbGRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwidXNlci1uYW1lXCI+TmFtZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiZXJyb3ItbXNnXCIgZGF0YS1lcnJvci1tc2c9MD48L3A+XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cInVzZXItbmFtZVwiIG5hbWU9XCJ1c2VyLW5hbWVcIiBjbGFzcz0ndXNlci1pbmZvJyBkYXRhLXVzZXItbmFtZSBkYXRhLWVycm9yPTAgbWlubGVuZ3RoPVwiMlwiXG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgbWF4bGVuZ3RoPVwiMjBcIiAgdmFsdWU9XCIke29iai5uYW1lfVwiPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsYWJlbC1ob2xkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInVzZXItZW1haWxcIj5FbWFpbCBBZHJlc3M8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJlcnJvci1tc2dcIiAgZGF0YS1lcnJvci1tc2c9MT48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJlbWFpbFwiIGlkPVwidXNlci1lbWFpbFwiIG5hbWU9XCJ1c2VyLWVtYWlsXCIgY2xhc3M9J3VzZXItaW5mbycgZGF0YS11c2VyLWVtYWlsIGRhdGEtZXJyb3I9MSAgdmFsdWU9XCIke29iai5lbWFpbH1cIj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsYWJlbC1ob2xkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInVzZXItcGhvbmVcIj5QaG9uZSBOdW1iZXI8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImVycm9yLW1zZ1wiICBkYXRhLWVycm9yLW1zZz0yPjwvcD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0ICBpZD1cInVzZXItcGhvbmVcIiBuYW1lPVwidXNlci1waG9uZVwiIGNsYXNzPSd1c2VyLWluZm8nIGRhdGEtdXNlci1waG9uZSBkYXRhLWVycm9yPTIgIG1pbmxlbmd0aD1cIjEwXCIgbWF4bGVuZ3RoPVwiMTVcbiAgICAgICAgICAgICAgICAgICAgIHZhbHVlPVwiJHtvYmoucGhvbmV9XCI+XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgXG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiYnRuLWhvbGRlclwiPjxidXR0b24gY2xhc3M9XCJ0YWItb25lLWJ0blwiPk5leHQgU3RlcDwvYnV0dG9uPjwvZGl2PlxuICAgIDwvZGl2PmA7XG4gIGRpdi5pbm5lckhUTUwgPSBwZXJzb25hbEluZm87XG4gIHJldHVybiBkaXY7XG59O1xuY29uc3QgdGFiVHdvID0gZnVuY3Rpb24gKG9iaikge1xuICBvYmouY2hvb3NlblBsYW4oKTtcbiAgb2JqLnN0eWxlKCk7XG4gIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHBsYW4gPSBgXG4gICAgPGRpdiBjbGFzcz1cInN0ZXAtdHdvXCI+XG4gICAgPGRpdiBjbGFzcz1cInBsYW4taGVhZGVyXCI+XG4gICAgICAgIDxoMT5TZWxlY3QgeW91ciBQbGFuPC9oMT5cbiAgICAgICAgPHAgY2xhc3M9XCJpbnN0cnVjdGlvblwiPnlvdSBoYXZlIHRoZSBvcHRpb24gbW9udGhseSBvciB5ZWFybHkgYmlsbGluZy48L3A+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cInBsYW5zXCIgZGF0YS1wbGFucyA+XG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJwbGFuLWhvbGRlclwiIGRhdGEtcGxhbj1cIjBcIj5cbiAgICAgICAgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYWJvdXQtcGxhblwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpY29uLWhvbGRlclwiPjxpbWcgc3JjPVwiLi4vc3JjL2Fzc2V0cy9pbWFnZXMvaWNvbi1hcmNhZGUuc3ZnXCIgYWx0PVwiaWNvbiBmb3IgYXJjYWRlIHBsYW5cIiA+PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBsYW4tZGV0YWlsXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGxhbi1uYW1lXCI+QXJjYWRlPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGxhbi1mZWVcIj4ke29iai5hcmNhZGV9PC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGxhbi1kZXNjcmlwdGlvblwiIGRhdGEtZ2lmdCBzdHlsZT0nZGlzcGxheToke29iai5ib251c307Jz4yIG1vbnRocyBmcmVlPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJwbGFuLWhvbGRlclwiIGRhdGEtcGxhbj1cIjFcIj5cbiAgICAgICAgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYWJvdXQtcGxhblwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpY29uLWhvbGRlclwiPjxpbWcgc3JjPVwiLi4vc3JjL2Fzc2V0cy9pbWFnZXMvaWNvbi1hZHZhbmNlZC5zdmdcIiBhbHQ9XCJpY29uIGZvciBhZHZhbmNlZCBwbGFuXCIgPjwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwbGFuLWRldGFpbFwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBsYW4tbmFtZVwiPkFkdmFuY2VkPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGxhbi1mZWVcIj4ke29iai5hZHZhbmNlZH08L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwbGFuLWRlc2NyaXB0aW9uXCIgZGF0YS1naWZ0IHN0eWxlPSdkaXNwbGF5OiR7b2JqLmJvbnVzfTsnPjIgbW9udGhzIGZyZWU8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInBsYW4taG9sZGVyXCIgIGRhdGEtcGxhbj1cIjJcIj5cbiAgICAgICAgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYWJvdXQtcGxhblwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpY29uLWhvbGRlclwiPjxpbWcgc3JjPVwiLi4vc3JjL2Fzc2V0cy9pbWFnZXMvaWNvbi1wcm8uc3ZnXCIgYWx0PVwiaWNvbiBmb3IgcHJvIHBsYW5cIiA+PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBsYW4tZGV0YWlsXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGxhbi1uYW1lXCI+UHJvPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGxhbi1mZWVcIj4ke29iai5wcm99PC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGxhbi1kZXNjcmlwdGlvblwiIGRhdGEtZ2lmdCBzdHlsZT0nZGlzcGxheToke29iai5ib251c307JyA+MiBtb250aHMgZnJlZTwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgXG4gICAgICA8L2Rpdj5cbiAgIDxwIGNsYXNzPVwiZXJyb3ItY2FyZFwiIGRhdGEtc2VsZWN0LXBsYW4gID48L3A+XG4gICA8ZGl2IGNsYXNzPVwidG9nZ2xlLWhvbGRlclwiPlxuICAgICAgICA8ZGl2IGRhdGEtbW9udGhseSBzdHlsZT1cImNvbG9yOiR7b2JqLm1vbnRobHl9O1wiPm1vbnRobHk8L2Rpdj5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJ1c2VyLXBsYW5cIiBpZD1cInVzZXItcGxhblwiIGNsYXNzPVwiY2hlY2tib3hcIiBkYXRhLWNob29zZS1wbGFuICAke29iai5jaGVja2JveH0+XG4gICAgICAgIDxsYWJlbCBmb3I9XCJ1c2VyLXBsYW5cIiBjbGFzcz1cInRvZ2dsZVwiPiA8L2xhYmVsPlxuICAgICAgICA8ZGl2IGRhdGEteWVhcmx5IHN0eWxlPVwiY29sb3I6JHtvYmoueWVhcmx5fTtcIj55ZWFybHk8L2Rpdj5cbiAgICA8L2Rpdj5cbjxkaXYgY2xhc3M9XCJuYXYtYnRuc1wiPlxuICAgIDxidXR0b24gY2xhc3M9XCJ0YWItdHdvLWJ0biBiYWNrLWJ0blwiICBkYXRhLXRhYi10d28tYmFjay1idG4+R28gQmFjazwvYnV0dG9uPlxuICAgIDxidXR0b24gY2xhc3M9XCJ0YWItdHdvLWJ0blwiIGRhdGEtdGFiLXR3by1uZXh0LWJ0bj5OZXh0IFN0ZXA8L2J1dHRvbj5cbjwvZGl2PlxuICAgPC9kaXY+XG4gICAgYDtcbiAgZGl2LmlubmVySFRNTCA9IHBsYW47XG4gIHJldHVybiBkaXY7XG59O1xuY29uc3QgdGFiVGhyZWUgPSBmdW5jdGlvbiAob2JqKSB7XG4gIG9iai5jaG9vc2VuUGxhbigpO1xuICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBzdG9yYWdlID0gYFxuICAgIDxkaXYgY2xhc3M9XCJ0YWItdGhyZWVcIj5cbiAgICA8ZGl2PlxuICAgICAgICA8aDE+UGljayBhZGQtb25zPC9oMT5cbiAgICAgICAgPHAgY2xhc3M9XCJpbnN0cnVjdGlvblwiPkFkZC1vbnMgZW5oYW5jZSB5b3VyIGdhbWluZyBleHBlcmllbmNlLjwvcD5cbiAgICA8L2Rpdj5cbiAgICAgICA8ZGl2IGNsYXNzPVwiYWJvdXQtYWRkc1wiPlxuICAgICAgIFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImFkZC1ob2xkZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYWRkLWhlYWRlclwiPlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwidXNlci1hZGRcIiBpZD1cImFkZC1vbnNcIiBjbGFzcz1cInVzZXItYWRkXCIgZGF0YS1hZGRzPVwiMFwiICR7b2JqLm9ubGluZX0+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzPVwiYWRkLXRpdGxlXCI+b25saW5lIHNlcnZpY2VzPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJhZGQtcGxhblwiPkFjY2VzcyB0byBtdWx0aXBsYXllciBnYW1lczwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXY+JHtvYmoub25saW5lUHJpY2V9PC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICA8ZGl2IGNsYXNzPVwiYWJvdXQtYWRkc1wiPlxuICAgICAgIFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImFkZC1ob2xkZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYWRkLWhlYWRlclwiPlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwidXNlci1hZGRcIiBpZD1cImFkZC1zdG9yYWdlXCIgY2xhc3M9XCJ1c2VyLWFkZFwiIGRhdGEtYWRkcz1cIjFcIiAke29iai5zdG9yYWdlfT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3M9XCJhZGQtdGl0bGVcIj5MYXJnZSBzdG9yYWdlPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJhZGQtcGxhblwiPkV4dHJhIDFUQiBjbG91ZCBzYXZlPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdj4ke29iai5zdG9yYWdlUHJpY2V9PC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJhYm91dC1hZGRzXCI+XG4gICAgICAgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYWRkLWhvbGRlclwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhZGQtaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJ1c2VyLWFkZFwiIGlkPVwiYWRkLXRoZW1lXCIgY2xhc3M9XCJ1c2VyLWFkZFwiIGRhdGEtYWRkcz1cIjJcIiAke29iai50aGVtZX0+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzPVwiYWRkLXRpdGxlXCI+Q3VzdG9taXphYmxlIHByb2ZpbGU8L2gyPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImFkZC1wbGFuXCI+Q3VzdG9tIHRoZW1lIG9uIHlvdXIgcHJvZmlsZTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXY+JHtvYmoudGhlbWVQcmljZX08L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgIDwvZGl2PlxuICAgICAgIDxkaXYgY2xhc3M9XCJuYXYtYnRuc1wiPlxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwidGFiLXRocmVlLWJ0biBiYWNrLWJ0blwiICBkYXRhLXRhYi10aHJlZS1iYWNrLWJ0biA+R28gQmFjazwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwidGFiLXRocmVlLWJ0blwiIGRhdGEtdGFiLXRocmVlLW5leHQtYnRuID5OZXh0IFN0ZXA8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgIDwvZGl2PlxuICAgIGA7XG4gIGRpdi5pbm5lckhUTUwgPSBzdG9yYWdlO1xuICByZXR1cm4gZGl2O1xufTtcbmNvbnN0IHRhYkZvdXIgPSBmdW5jdGlvbiAob2JqT25lLCBvYmpUd28pIHtcbiAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3Qgc3VtbWFyeSA9IGBcbiAgICA8ZGl2IGNsYXNzPVwidGFiLWZvdXJcIj5cbiAgICA8ZGl2IGNsYXNzPVwiY29uZmlybS1oZWFkZXJcIj5cbiAgICAgICAgPGgxPkZpbmlzaGluZyB1cDwvaDE+XG4gICAgICAgIDxwIGNsYXNzPVwiaW5zdHJ1Y3Rpb25cIj5Eb3VibGUtY2hlY2sgZXZlcnl0aGluZyBsb29rcyBPSyBiZWZvcmUgY29uZmlybWluZy48L3A+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cInNlcnZpY2UtaG9sZGVyXCI+XG4gICAgPGRpdiBjbGFzcz1cInN1bW1hcnktcGxhblwiPlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJwbGFuXCI+XG4gICAgICAgICAgICA8aDIgY2xhc3M9XCJzZWxlY3RlZC1wbGFuXCI+JHtzdW1tYXJ5UGxhbihvYmpPbmUpLnBsYW5OYW1lfSgke3N1bW1hcnlQbGFuKG9iak9uZSkucGxhbn0pPC9oMj5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJjaGFuZ2UtcGxhblwiPkNoYW5nZTwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInN1bW1hcnktcHJpY2VcIj4ke3N1bW1hcnlQbGFuKG9iak9uZSkucHJpY2V9PC9kaXY+XG4gICAgICAgXG4gICAgIDwvZGl2PlxuICAgICAgIDxocj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInN1bW1hcnktc2VydmljZXNcIj5cblxuICAgICAgICAgICAgXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhZGQtZGV0YWlsXCI+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJhZGQtbmFtZVwiPiAke3N1bW1hcnlBZGRzKG9ialR3bykuZmlyc3RBZGR9IDwvcD5cbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cIm9ubGluZS1wcmljZVwiPiR7c3VtbWFyeUFkZHMob2JqVHdvKS5vbmxpbmVQcmljZX08L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYWRkLWRldGFpbFwiPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiYWRkLW5hbWVcIj4gJHtzdW1tYXJ5QWRkcyhvYmpUd28pLnNlY29uZEFkZH0gPC9wPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwic3RvcmFnZS1wcmljZVwiPiR7c3VtbWFyeUFkZHMob2JqVHdvKS5zdG9yYWdlUHJpY2V9PC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImFkZC1kZXRhaWxcIj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImFkZC1uYW1lXCI+ICR7c3VtbWFyeUFkZHMob2JqVHdvKS50aGlyZEFkZH0gPC9wPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwidGhlbWUtcHJpY2VcIj4ke3N1bW1hcnlBZGRzKG9ialR3bykudGhlbWVQcmljZX08L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInN1bW1hcnktdG90YWxcIj5cbiAgICAgICAgICAgIDxwIGNsYXNzPVwidG90YWwtdGl0bGVcIj5Ub3RhbCBwZXIgeWVhcjwvcD5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidG90YWwtcHJpY2VcIj4ke3RvdGFsUHJpY2Uob2JqT25lLCBvYmpUd28pfTwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJuYXYtYnRuc1wiPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInRhYi1mb3VyLWJ0biBiYWNrLWJ0blwiIGRhdGEtdGFiLWZvdXItYmFjay1idG4+R28gQmFjazwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInRhYi1mb3VyLWNvbmZpcm0tYnRuXCIgZGF0YS10YWItZm91ci1jb25maXJtLWJ0bj5Db25maXJtPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuIDwvZGl2PmA7XG4gIGRpdi5pbm5lckhUTUwgPSBzdW1tYXJ5O1xuICByZXR1cm4gZGl2O1xufTtcbmNvbnN0IHRhYkZpdmUgPSBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGNvbmZpcm0gPSBgXG4gICAgIDxkaXYgY2xhc3M9XCJzdGVwLWZpdmVcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJpY29uLWhvbGRlclwiPjxpbWcgc3JjPVwiLi4vc3JjL2Fzc2V0cy9pbWFnZXMvaWNvbi10aGFuay15b3Uuc3ZnXCIgYWx0PVwicmlnaHQgaWNvbiB0byBjb25maXJtIHN1YnNjcmlwdGlvblwiPjwvZGl2PlxuICAgICAgPGRpdj5cbiAgICAgICAgPGgxPlRoYW5rIHlvdSE8L2gxPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2PlxuICAgICAgICA8cCBjbGFzcz1cImNvbmZpcm0tdGV4dFwiPlxuICAgICAgICAgIFRoYW5rcyBmb3IgY29tZmlybWluZyB5b3VyIHN1YnNjcmlwdGlvbiEgV2UgaG9wZSB5b3UgaGF2ZSBmdW4gdXNpbmcgb3VyIHBsYXRmb3JtLlxuICAgICAgICAgIGlmIHlvdSBldmVyIG5lZWQgc3VwcG9ydC5wbGVhc2UgZmVlbCBmcmVlIHRvIGVtYWlsIHVzIGF0IHN1cHBvcnRAbG9yZW1nYW1pbmcuY29tLlxuICAgICAgICA8L3A+XG4gICAgICA8L2Rpdj5cbiAgIDwvZGl2PmA7XG4gIGRpdi5pbm5lckhUTUwgPSBjb25maXJtO1xuICByZXR1cm4gZGl2O1xufTtcbmV4cG9ydCBjb25zdCBmdW5jdGlvbnMgPSB7XG4gIHN0ZXBPbmU6IHRhYk9uZSxcbiAgc3RlcFR3bzogdGFiVHdvLFxuICBzdGVwVGhyZWU6IHRhYlRocmVlLFxuICBzdGVwRm91cjogdGFiRm91cixcbiAgc3RlcEZpdmU6IHRhYkZpdmUsXG59O1xuLyoqXG4gKiBmdW5jdGlvbiB0aGF0IGFjY2VwdCBub2RlbGlzdCBhbmQgY2hhbmdlIHByaWNlIGFjY29yZGluZyB0byBzZWxlY3RlZCBwbGFuKG1wbnRobHkgb3IgeWVhcmx5KVxuICogQHBhcmFtIHsqfSBhcnJhcnkgbm9kZWxpc3Qgb2YgZWxlbWVudFxuICogQHBhcmFtIHsqfSBvYmplY3QgdGhhdCBzdG9yZSBwcmljZSAoY2hvb3NlbnBsYW4gcHJvcGVydHkgIGdldCBtb250aGx5IG9yIHllYXJseSBwcmljZSBmb3IgZWFjaCBwbGFucylcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNoYW5nZVByaWNlKGFyciwgb2JqKSB7XG4gIG9iai5jaG9vc2VuUGxhbigpO1xuICBhcnIuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgIGlmIChhcnIuaW5kZXhPZihlbGVtZW50KSA9PT0gMCkge1xuICAgICAgZWxlbWVudC50ZXh0Q29udGVudCA9IG9iai5hcmNhZGU7XG4gICAgfSBlbHNlIGlmIChhcnIuaW5kZXhPZihlbGVtZW50KSA9PT0gMSkge1xuICAgICAgZWxlbWVudC50ZXh0Q29udGVudCA9IG9iai5hZHZhbmNlZDtcbiAgICB9IGVsc2UgaWYgKGFyci5pbmRleE9mKGVsZW1lbnQpID09PSAyKSB7XG4gICAgICBlbGVtZW50LnRleHRDb250ZW50ID0gb2JqLnBybztcbiAgICB9XG4gIH0pO1xufVxuLypcbiAqZnVuY3Rpb24gdGhhdCBnaXZlIGRpZmVyZW50IGJvcmRlciBzdHlsZSBmb3IgdGhlIGdpdmVuIGRvbSBlbGVtZW50XG4gKnBhcmFtIDE6YXJyYXkgdG8gYWNjZXB0KG5vZGVsaXN0KVxuICpwYXJtIDI6ZG9tIGVsZW1lbnRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFkZEV2ZW50cyhhcnIsIGRvbUVsZW1lbnQpIHtcbiAgYXJyLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICBlbGVtZW50ID09PSBkb21FbGVtZW50XG4gICAgICA/IChlbGVtZW50LnN0eWxlLmJvcmRlciA9IFwiMnB4IHNvbGlkIGhzbCgyNDMsIDEwMCUsIDYyJSlcIilcbiAgICAgIDogKGVsZW1lbnQuc3R5bGUuYm9yZGVyID0gXCIxcHggc29saWQgIGhzbCgyMTMsIDk2JSwgMTglKVwiKTtcbiAgfSk7XG59XG4vLyBzYXZlIHN0YXRlIG9mIHNlbGVjdGVkIHBsYW4gYm9yZGVyIHN0eWxlIGFmdGVyIGFwcHBlbmQgZWxtZW50IHVzaW5nIGluZGV4IG51bWJlciBmcm9tICh1c2VyZGF0YS5zZWxlY3RlZHBsYW4pXG5leHBvcnQgZnVuY3Rpb24gc2VsZWN0ZWRDYXJkKGluZGV4KSB7XG4gIGNvbnN0IHBsYW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1wbGFuPVwiJHtpbmRleH1cIl1gKTtcbiAgaWYgKHBsYW4gPT09IG51bGwpIHJldHVybjtcbiAgcGxhbi5zdHlsZS5ib3JkZXIgPSBcIjJweCBzb2xpZCBibHVlXCI7XG59XG4vKipcbiAqIGZ1bmN0aW9uIHRvIGNoZWNrIHdoaWNoIGFkZHMgaXMgc2VsZWN0ZWQgb3Igbm90XG4gKiBAcGFyYW0geyp9IGluZGV4XG4gKiBAcGFyYW0geyp9IGRvbUVsZW1lbnRcbiAqIEBwYXJhbSB7Kn0gb2JqXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0NoZWNrZWQoaW5kZXgsIGRvbUVsZW1lbnQsIG9iaikge1xuICBpZiAoaW5kZXggPT09IDAgJiYgZG9tRWxlbWVudC5jaGVja2VkID09PSB0cnVlKSB7XG4gICAgb2JqLm9ubGluZSA9IFwiY2hlY2tlZFwiO1xuICB9IGVsc2UgaWYgKGluZGV4ID09PSAxICYmIGRvbUVsZW1lbnQuY2hlY2tlZCA9PT0gdHJ1ZSkge1xuICAgIG9iai5zdG9yYWdlID0gXCJjaGVja2VkXCI7XG4gIH0gZWxzZSBpZiAoaW5kZXggPT09IDIgJiYgZG9tRWxlbWVudC5jaGVja2VkID09PSB0cnVlKSB7XG4gICAgb2JqLnRoZW1lID0gXCJjaGVja2VkXCI7XG4gIH0gZWxzZSBpZiAoaW5kZXggPT09IDAgJiYgZG9tRWxlbWVudC5jaGVja2VkID09PSBmYWxzZSkge1xuICAgIG9iai5vbmxpbmUgPSBcIlwiO1xuICB9IGVsc2UgaWYgKGluZGV4ID09PSAxICYmIGRvbUVsZW1lbnQuY2hlY2tlZCA9PT0gZmFsc2UpIHtcbiAgICBvYmouc3RvcmFnZSA9IFwiXCI7XG4gIH0gZWxzZSBpZiAoaW5kZXggPT09IDIgJiYgZG9tRWxlbWVudC5jaGVja2VkID09PSBmYWxzZSkge1xuICAgIG9iai50aGVtZSA9IFwiXCI7XG4gIH1cbn1cbi8vIHN0ZXAgZm91ciBzdW1tYXJ5XG4vLyB1c2VyZGF0YSBvYmpcbi8qXG4gKmZ1bmN0aW9uIHRoYXQgYWNjZXB0IG9iamVjdCBjaGVjayBzZWxlY3RlZCBwbGFuIHVzaW5nIHRoZXJlIGluZGV4IG51bWJlciBhbmQgcmV0dXJuIG5hbWUgYW5kIHByaWNlXG4gKnBhcmFtIDE6b2JqZWN0IHRoYXQgc3RvcmUgc2VsZWN0ZWQgaXRlbSBhcyBudW1iZXIoMCwxLDIpXG4gKnJldHVybiBzdHJpbmcgKHBsYW4gbmFtZSApIGFuZCBudW1iZXIgKGl0J3MgcHJpY2UpXG4gKi9cbmZ1bmN0aW9uIHN1bW1hcnlQbGFuKG9iaikge1xuICBsZXQgcGxhbk5hbWUsIHBsYW4sIHByaWNlO1xuXG4gIGlmIChvYmouc2VsZWN0ZWRQbGFuID09PSAwKSB7XG4gICAgcGxhbk5hbWUgPSBcIkFyY2FkZVwiO1xuICAgIHByaWNlID0gb2JqLmFyY2FkZTtcbiAgfSBlbHNlIGlmIChvYmouc2VsZWN0ZWRQbGFuID09PSAxKSB7XG4gICAgcGxhbk5hbWUgPSBcIkFkdmFuY2VkXCI7XG4gICAgcHJpY2UgPSBvYmouYWR2YW5jZWQ7XG4gIH0gZWxzZSBpZiAob2JqLnNlbGVjdGVkUGxhbiA9PT0gMikge1xuICAgIHBsYW5OYW1lID0gXCJQcm9cIjtcbiAgICBwcmljZSA9IG9iai5wcm87XG4gIH1cbiAgaWYgKG9iai5jaGVja2JveCA9PT0gXCJjaGVja2VkXCIpIHtcbiAgICBwbGFuID0gXCJ5ZWFybHlcIjtcbiAgfVxuICBpZiAob2JqLmNoZWNrYm94ID09PSBcIlwiKSB7XG4gICAgcGxhbiA9IFwibW9udGhseVwiO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBwbGFuTmFtZSxcbiAgICBwbGFuLFxuICAgIHByaWNlLFxuICB9O1xufVxuXG4vKlxuICpmdW5jdGlvbiB0aGF0IGFjY2VwdCBvYmplY3QgYW5kIGdpdmUgc2VsZWN0ZWQgYWRkcyBuYW1lIGFuZCB0aGVyZSBwcmljZXNcbiAqcGFyYW0gMSA6b2JqZWN0XG4gKnJldHVybiBuYW1lIG9mIGFkZChzdHJpbmcpIGFuZCBwcmljZSBhcyBhbiBhcnJheVxuICovXG5mdW5jdGlvbiBzdW1tYXJ5QWRkcyhvYmopIHtcbiAgbGV0IGZpcnN0QWRkLCBzZWNvbmRBZGQsIHRoaXJkQWRkLCBvbmxpbmVQcmljZSwgc3RvcmFnZVByaWNlLCB0aGVtZVByaWNlO1xuICBjb25zdCBzZWxlY3RlZFByaWNlID0gW107XG4gIGlmIChvYmoub25saW5lID09PSBcImNoZWNrZWRcIikge1xuICAgIGZpcnN0QWRkID0gXCJPbmxpbmUgc2VydmljZVwiO1xuICAgIG9ubGluZVByaWNlID0gb2JqLm9ubGluZVByaWNlO1xuICAgIHNlbGVjdGVkUHJpY2UucHVzaChvbmxpbmVQcmljZSk7XG4gIH1cbiAgaWYgKG9iai5zdG9yYWdlID09PSBcImNoZWNrZWRcIikge1xuICAgIHNlY29uZEFkZCA9IFwiTGFyZ2VyIHN0b3JhZ2VcIjtcbiAgICBzdG9yYWdlUHJpY2UgPSBvYmouc3RvcmFnZVByaWNlO1xuICAgIHNlbGVjdGVkUHJpY2UucHVzaChzdG9yYWdlUHJpY2UpO1xuICB9XG4gIGlmIChvYmoudGhlbWUgPT09IFwiY2hlY2tlZFwiKSB7XG4gICAgdGhpcmRBZGQgPSBcIkN1c3RvbWl6YWJsZSBwcm9maWxlXCI7XG4gICAgdGhlbWVQcmljZSA9IG9iai50aGVtZVByaWNlO1xuICAgIHNlbGVjdGVkUHJpY2UucHVzaCh0aGVtZVByaWNlKTtcbiAgfVxuXG4gIC8vIHVzZSBjbG9zdXJlIHRvIHJlc2V0IGl0ZW1zIGlmIG5vdCBzZWxlY3RlZFxuICBjb25zdCBjaGVja1NlbGVjdGVkQWRkcyA9IGZ1bmN0aW9uIChvYmopIHtcbiAgICBpZiAob2JqLm9ubGluZSAhPT0gXCJjaGVja2VkXCIpIHtcbiAgICAgIGZpcnN0QWRkID0gXCJcIjtcbiAgICAgIG9ubGluZVByaWNlID0gXCJcIjtcbiAgICB9XG4gICAgaWYgKG9iai5zdG9yYWdlICE9PSBcImNoZWNrZWRcIikge1xuICAgICAgc2Vjb25kQWRkID0gXCJcIjtcbiAgICAgIHN0b3JhZ2VQcmljZSA9IFwiXCI7XG4gICAgfVxuICAgIGlmIChvYmoudGhlbWUgIT09IFwiY2hlY2tlZFwiKSB7XG4gICAgICB0aGlyZEFkZCA9IFwiXCI7XG4gICAgICB0aGVtZVByaWNlID0gXCJcIjtcbiAgICB9XG4gIH07XG4gIGNoZWNrU2VsZWN0ZWRBZGRzKG9iaik7XG5cbiAgcmV0dXJuIHtcbiAgICBmaXJzdEFkZCxcbiAgICBzZWNvbmRBZGQsXG4gICAgdGhpcmRBZGQsXG4gICAgb25saW5lUHJpY2UsXG4gICAgc3RvcmFnZVByaWNlLFxuICAgIHRoZW1lUHJpY2UsXG4gICAgc2VsZWN0ZWRQcmljZSxcbiAgfTtcbn1cbi8qXG4gKmZ1bmN0aW9uIHRoYXQgYWNjZXB0IHR3byBvYmplY3RzIGFuZCBjYWxjdWxhdGUgcHJpY2Ugb3Igc3VtXG4gKnBhcmFtIDE6IG9iajEgaG9sZCBwbGFuIHByaWNlIChtb250aGx5IG9yIHllYXJseSlcbiAqcGFyYW0gMjogb2JqMiBob2xkIHNlbGVjdGVkIGFkZHMgcHJpY2UgYXMgYW4gYXJyYXJ5XG4gKnJldHVybiBudW1iZXIgKHN1bSlcbiAqL1xuZnVuY3Rpb24gdG90YWxQcmljZShvYmoxLCBvYmoyKSB7XG4gIGNvbnN0IHBsYW5GZWUgPSBzdW1tYXJ5UGxhbihvYmoxKS5wcmljZTtcbiAgY29uc3QgYWRkc0ZlZSA9IHN1bW1hcnlBZGRzKG9iajIpLnNlbGVjdGVkUHJpY2U7XG4gIGNvbnN0IHBsYW4gPSBOdW1iZXIocGxhbkZlZS5yZXBsYWNlKC9bXjAtOV0vZywgXCJcIikpO1xuICBjb25zdCBwbGFuTmFtZSA9IHBsYW5GZWUucmVwbGFjZSgvW15hLXpdL2csIFwiXCIpOyAvLyBzdG9yZSBcIm1vXCIgb3IgXCJ5clwiIHN0cmluZ1xuXG4gIGxldCBzdW13aXRoY3VycmVuY3kgPSBcIlwiO1xuICBsZXQgdG90YWxBZGRzID0gMDtcbiAgbGV0IHN1bSA9IDA7XG4gIGFkZHNGZWUuZm9yRWFjaCgocHJpY2UpID0+IHtcbiAgICAvLyBwcmljZSBpcyBhcnJheSBvZiBhZGQgdmFsdWUgY29udmVydCB0byBudW0gYW5kIHJlbW92ZSBjdXJyZW5jeSBzaWduXG4gICAgdG90YWxBZGRzICs9IE51bWJlcihwcmljZS5yZXBsYWNlKC9bXjAtOV0vZywgXCJcIikpO1xuICB9KTtcbiAgc3VtID0gcGxhbiArIHRvdGFsQWRkcztcbiAgc3Vtd2l0aGN1cnJlbmN5ID0gYCAkJHtzdW19LyR7cGxhbk5hbWV9YDtcbiAgcmV0dXJuIHN1bXdpdGhjdXJyZW5jeTtcbn1cbi8vIGZ1bmN0aW9uIHRvIHZhbGlkYXRlIHN0ZXAgb25lIGZvcm1cbi8qKlxuICpcbiAqIEBwYXJhbSB7Kn0gZmllbGQgOiBpbnB1dCBmaWVsZFxuICogQHBhcmFtIHsqfSBpbmRleCA6IDAgcmVwcmVzZW50IHVzZXJuYW1lLDEgdXNlciBlbWFpbCAsMiB1c2VycGhvbmUgbnVtYmVyIHJlc3BlY3RpdmVseVxuICogQHBhcmFtIHsqfSBlcnJEb20gOmRvbWVsZW1udCB0byBzaG93IGVycm9yIG1lc3NhZ2VcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHZhbGlkYXRlRm9ybShmaWVsZCwgaW5kZXgsIGVyckRvbSkge1xuICBjb25zdCBlbWFpbFJlZyA9IC9cXHcrW0BdezF9W2Etei1dK1suXXsxfVthLXpdezIsfShbLl17MX1bYS16XXsyLH0pPy87XG4gIGNvbnN0IHBob25lUmVnID0gL15bMC05XXsxMCwxNX0kLztcbiAgY29uc3Qgc3RyaW5nUmVnID0gL1thLXpdKy87IC8vIGNoZWNrIHBob25lIG51bWJlciBlbnRyeVxuXG4gIC8vIGZ1bmN0aW9uIHRvIGhpZGUgZXJyb3IgbWVzc2FnZSBvbiBmb2N1cyBlbHNlIHNob3cgbWVzc2FnZVxuICBjb25zdCBmb2N1c1N0eWxlID0gZnVuY3Rpb24gKCkge1xuICAgIGZpZWxkLmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c1wiLCAoKSA9PiB7XG4gICAgICBpZiAoZmllbGQuY2xhc3NOYW1lID09PSBcImludmFsaWRcIikgZXJyRG9tLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICB9KTtcbiAgICBmaWVsZC5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNvdXRcIiwgKCkgPT4ge1xuICAgICAgaWYgKGZpZWxkLmNsYXNzTmFtZSA9PT0gXCJpbnZhbGlkXCIpIHtcbiAgICAgICAgZXJyRG9tLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG4gIGlmIChmaWVsZC52YWx1ZSA9PT0gXCJcIikge1xuICAgIGVyckRvbS50ZXh0Q29udGVudCA9IFwiVGhpcyBmaWVsZCBpcyBSZXF1aXJlZCFcIjtcbiAgICBmaWVsZC5jbGFzc05hbWUgPSBcImludmFsaWRcIjtcbiAgICByZXR1cm47XG4gIH1cbiAgaWYgKGluZGV4ID09PSAwKSB7XG4gICAgaWYgKGZpZWxkLnZhbGlkaXR5LnRvb1Nob3J0KSB7XG4gICAgICBlcnJEb20udGV4dENvbnRlbnQgPSBcIlRvbyBzaG9ydCBhZGQgbW9yZSBjaGFyYWN0ZXIuXCI7XG4gICAgICBmaWVsZC5jbGFzc05hbWUgPSBcImludmFsaWRcIjtcbiAgICAgIGZvY3VzU3R5bGUoKTtcbiAgICB9IGVsc2UgaWYgKGZpZWxkLnZhbGlkaXR5LnRvb0xvbmcpIHtcbiAgICAgIGVyckRvbS50ZXh0Q29udGVudCA9IFwiVG9vIGxvbmcgbXVzdCBiZSAyLTIwIGNoYXJhY3RlcnMuXCI7XG4gICAgICBmaWVsZC5jbGFzc05hbWUgPSBcImludmFsaWRcIjtcbiAgICAgIGZvY3VzU3R5bGUoKTtcbiAgICB9IGVsc2UgaWYgKGZpZWxkLnZhbGlkaXR5LnZhbGlkKSB7XG4gICAgICBlcnJEb20udGV4dENvbnRlbnQgPSBcIlwiO1xuICAgICAgZmllbGQuY2xhc3NOYW1lID0gXCJ2YWxpZFwiO1xuICAgIH1cbiAgfSBlbHNlIGlmIChpbmRleCA9PT0gMSkge1xuICAgIGlmIChlbWFpbFJlZy50ZXN0KGZpZWxkLnZhbHVlKSkge1xuICAgICAgZmllbGQuY2xhc3NOYW1lID0gXCJ2YWxpZFwiO1xuICAgICAgZXJyRG9tLnRleHRDb250ZW50ID0gXCJcIjtcbiAgICB9IGVsc2UgaWYgKGVtYWlsUmVnLnRlc3QoZmllbGQudmFsdWUpID09PSBmYWxzZSkge1xuICAgICAgZXJyRG9tLnRleHRDb250ZW50ID0gXCJ3cm9uZyBmb3JtYXQsdXNlKGV4YW1wbGVAZG9tYWluLmV4dClcIjtcbiAgICAgIGZpZWxkLmNsYXNzTmFtZSA9IFwiaW52YWxpZFwiO1xuICAgICAgZm9jdXNTdHlsZSgpO1xuICAgIH1cbiAgfSBlbHNlIGlmIChpbmRleCA9PT0gMikge1xuICAgIGlmIChzdHJpbmdSZWcudGVzdChmaWVsZC52YWx1ZSkpIHtcbiAgICAgIGVyckRvbS50ZXh0Q29udGVudCA9IFwiUGxlYXNlIGVudGVyIG51bWJlcnMgb25seSFcIjtcbiAgICAgIGZpZWxkLmNsYXNzTmFtZSA9IFwiaW52YWxpZFwiO1xuICAgICAgZm9jdXNTdHlsZSgpO1xuICAgIH0gZWxzZSBpZiAoZmllbGQudmFsaWRpdHkudG9vTG9uZykge1xuICAgICAgZXJyRG9tLnRleHRDb250ZW50ID0gXCJUb28gbG9uZyBtdXN0IGJlIDEwLTE1IGNoYXJhY3RlcnNcIjtcbiAgICAgIGZpZWxkLmNsYXNzTmFtZSA9IFwiaW52YWxpZFwiO1xuICAgICAgZm9jdXNTdHlsZSgpO1xuICAgIH0gZWxzZSBpZiAoZmllbGQudmFsaWRpdHkudG9vU2hvcnQpIHtcbiAgICAgIGVyckRvbS50ZXh0Q29udGVudCA9IFwiVG9vIHNob3J0IG11c3QgYmUgMTAtMTUgY2hhcmFjdGVyc1wiO1xuICAgICAgZmllbGQuY2xhc3NOYW1lID0gXCJpbnZhbGlkXCI7XG4gICAgICBmb2N1c1N0eWxlKCk7XG4gICAgfSBlbHNlIGlmIChwaG9uZVJlZy50ZXN0KE51bWJlcihmaWVsZC52YWx1ZSkpKSB7XG4gICAgICBjb25zb2xlLmxvZyhmaWVsZC52YWx1ZSk7XG4gICAgICBmaWVsZC5jbGFzc05hbWUgPSBcInZhbGlkXCI7XG4gICAgICBlcnJEb20udGV4dENvbnRlbnQgPSBcIlwiO1xuICAgICAgY29uc3QgdmFsdWUgPSBmaWVsZC52YWx1ZTtcbiAgICAgIGNvbnN0IGZvcm1hdCA9IHZhbHVlLnJlcGxhY2UoL14oLnszfSkoLnszfSkoLns0fSkoLiopJC8sIFwiJDEgJDIgJDNcIik7XG4gICAgICBmaWVsZC52YWx1ZSA9IFwiK1wiICsgZm9ybWF0O1xuICAgIH1cbiAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIGlzRm9ybWZpbGxlZChhcnIpIHtcbiAgY29uc3QgaW52YWxpZElucHV0ID0gW107XG4gIGxldCByZXN1bHQ7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGFycltpXS5jbGFzc05hbWUgPT09IFwiaW52YWxpZFwiKSB7XG4gICAgICBpbnZhbGlkSW5wdXQucHVzaChhcnJbaV0pO1xuICAgIH0gZWxzZSBpZiAoYXJyW2ldLnZhbHVlID09PSBcIlwiKSB7XG4gICAgICBpbnZhbGlkSW5wdXQucHVzaChhcnJbaV0pO1xuICAgIH1cbiAgfVxuICBpbnZhbGlkSW5wdXQubGVuZ3RoID4gMCA/IChyZXN1bHQgPSBmYWxzZSkgOiAocmVzdWx0ID0gdHJ1ZSk7XG4gIHJldHVybiByZXN1bHQ7XG59XG4vLyBmdW5jdGlvbiB0aGF0IGFjY2VwdCBvYmplY3QgYW5kIGNoZWNrIHZhbHVlIGlzIGVtcHR5KHVzZWQgdG8gc3dpdGNoIHRhYiAyKVxuZXhwb3J0IGZ1bmN0aW9uIGlzVmFsdWVFbXB0eShvYmopIHtcbiAgbGV0IHJlc3VsdDtcbiAgY29uc3Qga2V5QXJyYXkgPSBPYmplY3Qua2V5cyhvYmopO1xuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwga2V5QXJyYXkubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGtleUFycmF5W2luZGV4XTtcbiAgICBpZiAob2JqW2VsZW1lbnRdID09PSBcIlwiKSB7XG4gICAgICByZXN1bHQgPSB0cnVlO1xuICAgICAgYnJlYWs7XG4gICAgfSBlbHNlIGlmIChvYmpbZWxlbWVudF0gIT09IFwiXCIpIHtcbiAgICAgIHJlc3VsdCA9IGZhbHNlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuLy8gZnVuY3Rpb24gdG8gY2hhbmdlIGJhY2tncm91ZCBjb2xvciB0byBzaG93IHdoaWNoIHN0ZXAgaXQgaXNcbmV4cG9ydCBmdW5jdGlvbiBjaGFuZ2VDb2xvcihhcnJheSwgaW5kZXgpIHtcbiAgYXJyYXkuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgIGlmIChhcnJheS5pbmRleE9mKGVsZW1lbnQpID09PSBpbmRleCkge1xuICAgICAgZWxlbWVudC5zdHlsZS5jb2xvciA9IFwiYmxhY2tcIjtcbiAgICAgIGVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJyZ2IoMTkxLCAyMjYsIDI1MylcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgZWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcImluaGVyaXRcIjtcbiAgICB9XG4gIH0pO1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0IHtcbiAgZnVuY3Rpb25zLFxuICBVc2VyUGVyc29uYWxJbmZvLFxuICBVc2VyUGxhbkRhdGEsXG4gIFVzZXJTZXJ2aWNlcyxcbiAgY2hhbmdlUHJpY2UsXG4gIGFkZEV2ZW50cyxcbiAgc2VsZWN0ZWRDYXJkLFxuICBpc0NoZWNrZWQsXG4gIHZhbGlkYXRlRm9ybSxcbiAgaXNGb3JtZmlsbGVkLFxuICBpc1ZhbHVlRW1wdHksXG4gIGNoYW5nZUNvbG9yLFxufSBmcm9tIFwiLi90YWJzXCI7XG5jb25zdCBob2xkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByZXZpZXdcIik7XG5jb25zdCBkb3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5kb3RcIik7XG5jb25zdCB0YWJzID0gWy4uLmRvdHNdO1xuY29uc3QgdXNlckluZm8gPSBuZXcgVXNlclBlcnNvbmFsSW5mbygpO1xuY29uc3QgdXNlclBsYW5zID0gbmV3IFVzZXJQbGFuRGF0YSgpO1xuY29uc3QgdXNlckFkZHMgPSBuZXcgVXNlclNlcnZpY2VzKCk7XG5ob2xkZXIuYXBwZW5kQ2hpbGQoZnVuY3Rpb25zLnN0ZXBPbmUodXNlckluZm8pKTsgLy8gZGVmYXVsdCBpcyBlbXB0eSBmb3JtXG5ob2xkZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gIGlmIChlLnRhcmdldC5tYXRjaGVzKFwiLnRhYi1vbmUtYnRuXCIpKSB7XG4gICAgY29uc3QgYWxsSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiaW5wdXRcIik7XG4gICAgY29uc3QgYXJyeUlucHV0ID0gWy4uLmFsbElucHV0XTtcbiAgICAvLyB2YWxpZGF0ZSBzdGVwIG9uZSBmb3JtIGlmIGl0cyBub3QgZW1wdHkgbW92ZSB0byBuZXh0IHN0ZXBcblxuICAgIGlmIChpc0Zvcm1maWxsZWQoYXJyeUlucHV0KSA9PT0gdHJ1ZSkge1xuICAgICAgaG9sZGVyLnRleHRDb250ZW50ID0gXCJcIjtcbiAgICAgIGhvbGRlci5hcHBlbmRDaGlsZChmdW5jdGlvbnMuc3RlcFR3byh1c2VyUGxhbnMpKTtcbiAgICAgIGNoYW5nZUNvbG9yKHRhYnMsIDEpO1xuICAgIH1cbiAgICBhcnJ5SW5wdXQuZm9yRWFjaCgoaW5wdXQpID0+IHtcbiAgICAgIGNvbnN0IGVyck1zZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgIGBbZGF0YS1lcnJvci1tc2c9XCIke051bWJlcihpbnB1dC5kYXRhc2V0LmVycm9yKX1cIl1gXG4gICAgICApO1xuICAgICAgaWYgKGlucHV0LnZhbHVlID09PSBcIlwiKSB7XG4gICAgICAgIGVyck1zZy50ZXh0Q29udGVudCA9IFwiVGhpcyBmaWVsZCBpcyByZXF1aXJlZCFcIjtcbiAgICAgICAgaW5wdXQuY2xhc3NOYW1lID0gXCJpbnZhbGlkXCI7XG4gICAgICB9XG4gICAgfSk7XG4gIH0gZWxzZSBpZiAoZS50YXJnZXQubWF0Y2hlcyhcIltkYXRhLXVzZXItbmFtZV1cIikpIHtcbiAgICBjb25zdCB1c2VyTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS11c2VyLW5hbWVdXCIpO1xuICAgIHVzZXJOYW1lLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKGUpID0+IHtcbiAgICAgIGNvbnN0IGVyck1zZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgIGBbZGF0YS1lcnJvci1tc2c9XCIke2UudGFyZ2V0LmRhdGFzZXQuZXJyb3J9XCJdYFxuICAgICAgKTtcblxuICAgICAgdXNlckluZm8ubmFtZSA9IHVzZXJOYW1lLnZhbHVlO1xuICAgICAgdmFsaWRhdGVGb3JtKHVzZXJOYW1lLCAwLCBlcnJNc2cpO1xuICAgIH0pO1xuICB9IGVsc2UgaWYgKGUudGFyZ2V0Lm1hdGNoZXMoXCJbZGF0YS11c2VyLWVtYWlsXVwiKSkge1xuICAgIGNvbnN0IHVzZXJFbWFpbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS11c2VyLWVtYWlsXVwiKTtcbiAgICB1c2VyRW1haWwuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoZSkgPT4ge1xuICAgICAgY29uc3QgZXJyTXNnID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgYFtkYXRhLWVycm9yLW1zZz1cIiR7ZS50YXJnZXQuZGF0YXNldC5lcnJvcn1cIl1gXG4gICAgICApO1xuICAgICAgdXNlckluZm8uZW1haWwgPSB1c2VyRW1haWwudmFsdWU7XG4gICAgICB2YWxpZGF0ZUZvcm0odXNlckVtYWlsLCAxLCBlcnJNc2cpO1xuICAgIH0pO1xuICB9IGVsc2UgaWYgKGUudGFyZ2V0Lm1hdGNoZXMoXCJbZGF0YS11c2VyLXBob25lXVwiKSkge1xuICAgIGNvbnN0IHVzZXJQaG9uZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS11c2VyLXBob25lXVwiKTtcbiAgICBjb25zdCBlcnJNc2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgYFtkYXRhLWVycm9yLW1zZz1cIiR7ZS50YXJnZXQuZGF0YXNldC5lcnJvcn1cIl1gXG4gICAgKTtcbiAgICB1c2VyUGhvbmUuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoZSkgPT4ge1xuICAgICAgdXNlckluZm8ucGhvbmUgPSB1c2VyUGhvbmUudmFsdWU7XG4gICAgICB2YWxpZGF0ZUZvcm0odXNlclBob25lLCAyLCBlcnJNc2cpO1xuICAgIH0pO1xuICB9IC8vIHRhYiB0d28gZXZlbnRzXG4gIGVsc2UgaWYgKGUudGFyZ2V0Lm1hdGNoZXMoXCIucGxhbi1ob2xkZXJcIikpIHtcbiAgICBjb25zdCBpbmRleCA9IE51bWJlcihlLnRhcmdldC5kYXRhc2V0LnBsYW4pO1xuICAgIGNvbnN0IHBsYW5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wbGFuLWhvbGRlclwiKTtcbiAgICBjb25zdCBjbGlja2VkUGxhbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXBsYW49XCIke2luZGV4fVwiXWApO1xuICAgIGFkZEV2ZW50cyhwbGFucywgY2xpY2tlZFBsYW4pO1xuICAgIHVzZXJQbGFucy5zZWxlY3RlZFBsYW4gPSBpbmRleDtcbiAgfSBlbHNlIGlmIChlLnRhcmdldC5tYXRjaGVzKFwiW2RhdGEtY2hvb3NlLXBsYW5dXCIpKSB7XG4gICAgY29uc3QgdXNlclBsYW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtY2hvb3NlLXBsYW5dXCIpO1xuICAgIGNvbnN0IHByaWNlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucGxhbi1mZWVcIik7XG4gICAgY29uc3QgZnJlZUdpZnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIltkYXRhLWdpZnRdXCIpO1xuICAgIGNvbnN0IG1vbnRobHlQbGFuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLW1vbnRobHldXCIpO1xuICAgIGNvbnN0IHllYXJseVBsYW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEteWVhcmx5XVwiKTtcbiAgICBjb25zdCBwbGFucyA9IFsuLi5wcmljZXNdO1xuICAgIGlmICh1c2VyUGxhbi5jaGVja2VkID09PSB0cnVlKSB7XG4gICAgICB1c2VyUGxhbnMuY2hlY2tib3ggPSBcImNoZWNrZWRcIjtcbiAgICAgIHVzZXJQbGFucy5wbGFuID0gdHJ1ZTtcbiAgICAgIHVzZXJQbGFucy5ib251cyA9IFwiYmxvY2tcIjtcbiAgICAgIHVzZXJBZGRzLmFkZFBsYW4gPSB0cnVlO1xuICAgICAgLy8gdXBkYXRlIGRvbVxuICAgICAgbW9udGhseVBsYW4uc3R5bGUuY29sb3IgPSBcImhzbCgyMzEsIDExJSwgNjMlKVwiO1xuICAgICAgeWVhcmx5UGxhbi5zdHlsZS5jb2xvciA9IFwiaHNsKDIxMywgOTYlLCAxOCUpXCI7XG4gICAgICBmcmVlR2lmdHMuZm9yRWFjaCgoZGl2cykgPT4ge1xuICAgICAgICBkaXZzLnN0eWxlLmRpc3BsYXkgPSB1c2VyUGxhbnMuYm9udXM7XG4gICAgICB9KTtcblxuICAgICAgY2hhbmdlUHJpY2UocGxhbnMsIHVzZXJQbGFucyk7XG4gICAgfSBlbHNlIGlmICh1c2VyUGxhbi5jaGVja2VkID09PSBmYWxzZSkge1xuICAgICAgdXNlclBsYW5zLmNoZWNrYm94ID0gXCJcIjtcbiAgICAgIHVzZXJQbGFucy5wbGFuID0gZmFsc2U7XG4gICAgICB1c2VyUGxhbnMuYm9udXMgPSBcIm5vbmVcIjtcbiAgICAgIHVzZXJBZGRzLmFkZFBsYW4gPSBmYWxzZTtcbiAgICAgIG1vbnRobHlQbGFuLnN0eWxlLmNvbG9yID0gXCJoc2woMjEzLCA5NiUsIDE4JVwiO1xuICAgICAgeWVhcmx5UGxhbi5zdHlsZS5jb2xvciA9IFwiaHNsKDIzMSwgMTElLCA2MyUpXCI7XG4gICAgICAvLyBtb250aGx5IHByaWNlXG4gICAgICBmcmVlR2lmdHMuZm9yRWFjaCgoZGl2cykgPT4ge1xuICAgICAgICBkaXZzLnN0eWxlLmRpc3BsYXkgPSB1c2VyUGxhbnMuYm9udXM7XG4gICAgICB9KTtcbiAgICAgIGNoYW5nZVByaWNlKHBsYW5zLCB1c2VyUGxhbnMpO1xuICAgIH1cbiAgfSBlbHNlIGlmIChlLnRhcmdldC5tYXRjaGVzKFwiW2RhdGEtdGFiLXR3by1uZXh0LWJ0bl1cIikpIHtcbiAgICBjb25zdCBlcnJNc2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtc2VsZWN0LXBsYW5dXCIpO1xuICAgIGlmICh1c2VyUGxhbnMuc2VsZWN0ZWRQbGFuICE9PSBcIlwiKSB7XG4gICAgICBob2xkZXIudGV4dENvbnRlbnQgPSBcIiBcIjtcbiAgICAgIGhvbGRlci5hcHBlbmRDaGlsZChmdW5jdGlvbnMuc3RlcFRocmVlKHVzZXJBZGRzKSk7XG4gICAgICBlcnJNc2cudGV4dENvbnRlbnQgPSBcIlwiO1xuICAgICAgY2hhbmdlQ29sb3IodGFicywgMik7IC8vIHN0ZXAgM1xuICAgIH0gZWxzZSBpZiAodXNlclBsYW5zLnNlbGVjdGVkUGxhbiA9PT0gXCJcIikge1xuICAgICAgZXJyTXNnLnRleHRDb250ZW50ID0gXCJjbGljayB0aGUgY2FyZHMgdG8gIHNlbGVjdC5cIjtcbiAgICB9XG4gIH0gZWxzZSBpZiAoZS50YXJnZXQubWF0Y2hlcyhcIltkYXRhLXRhYi10d28tYmFjay1idG5dXCIpKSB7XG4gICAgaG9sZGVyLnRleHRDb250ZW50ID0gXCJcIjtcbiAgICBob2xkZXIuYXBwZW5kQ2hpbGQoZnVuY3Rpb25zLnN0ZXBPbmUodXNlckluZm8pKTtcbiAgICBjaGFuZ2VDb2xvcih0YWJzLCAwKTsgLy8gc3RlcCBvbmVcbiAgfVxuICAvLyB0YWIgdGhyZWUgZXZlbnRzXG4gIGVsc2UgaWYgKGUudGFyZ2V0Lm1hdGNoZXMoXCIudXNlci1hZGRcIikpIHtcbiAgICBjb25zdCBpbmRleCA9IE51bWJlcihlLnRhcmdldC5kYXRhc2V0LmFkZHMpO1xuICAgIGNvbnN0IGFkZHNDaGVja2JveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWFkZHM9XCIke2luZGV4fVwiXWApO1xuICAgIGlzQ2hlY2tlZChpbmRleCwgYWRkc0NoZWNrYm94LCB1c2VyQWRkcyk7XG4gIH0gZWxzZSBpZiAoZS50YXJnZXQubWF0Y2hlcyhcIltkYXRhLXRhYi10aHJlZS1uZXh0LWJ0blwiKSkge1xuICAgIGhvbGRlci50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgaG9sZGVyLmFwcGVuZENoaWxkKGZ1bmN0aW9ucy5zdGVwRm91cih1c2VyUGxhbnMsIHVzZXJBZGRzKSk7XG4gICAgY2hhbmdlQ29sb3IodGFicywgMyk7IC8vIHN0ZXAgNFxuICB9IGVsc2UgaWYgKGUudGFyZ2V0Lm1hdGNoZXMoXCJbZGF0YS10YWItdGhyZWUtYmFjay1idG5dXCIpKSB7XG4gICAgaG9sZGVyLnRleHRDb250ZW50ID0gXCJcIjtcbiAgICBob2xkZXIuYXBwZW5kQ2hpbGQoZnVuY3Rpb25zLnN0ZXBUd28odXNlclBsYW5zKSk7XG4gICAgc2VsZWN0ZWRDYXJkKHVzZXJQbGFucy5zZWxlY3RlZFBsYW4pO1xuICAgIGNoYW5nZUNvbG9yKHRhYnMsIDEpOyAvLyBzdGVwIDJcbiAgfVxuICAvLyBzdGVwIGZvdXIgZXZlbnRcbiAgZWxzZSBpZiAoZS50YXJnZXQubWF0Y2hlcyhcIltkYXRhLXRhYi1mb3VyLWJhY2stYnRuXVwiKSkge1xuICAgIGhvbGRlci50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgaG9sZGVyLmFwcGVuZENoaWxkKGZ1bmN0aW9ucy5zdGVwVGhyZWUodXNlckFkZHMpKTtcbiAgICBjaGFuZ2VDb2xvcih0YWJzLCAyKTsgLy8gc3RlcCAzXG4gIH0gZWxzZSBpZiAoZS50YXJnZXQubWF0Y2hlcyhcIltkYXRhLXRhYi1mb3VyLWNvbmZpcm0tYnRuXVwiKSkge1xuICAgIGhvbGRlci50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgaG9sZGVyLmFwcGVuZENoaWxkKGZ1bmN0aW9ucy5zdGVwRml2ZSgpKTtcbiAgfVxufSk7XG5cbnRhYnMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGlmICh0YWJzLmluZGV4T2YoZWxlbWVudCkgPT09IDApIHtcbiAgICAgIGhvbGRlci50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgICBob2xkZXIuYXBwZW5kQ2hpbGQoZnVuY3Rpb25zLnN0ZXBPbmUodXNlckluZm8pKTtcbiAgICAgIGNoYW5nZUNvbG9yKHRhYnMsIDApO1xuICAgICAgLy8gbmV4dCBjaGVjayBzdGVwIG9uZSBpcyBjbGVhciBlbHNlIGRvbid0IHN3aXRjaFxuICAgIH0gZWxzZSBpZiAoXG4gICAgICB0YWJzLmluZGV4T2YoZWxlbWVudCkgPT09IDEgJiZcbiAgICAgIGlzVmFsdWVFbXB0eSh1c2VySW5mbykgPT09IGZhbHNlXG4gICAgKSB7XG4gICAgICBob2xkZXIudGV4dENvbnRlbnQgPSBcIlwiO1xuICAgICAgaG9sZGVyLmFwcGVuZENoaWxkKGZ1bmN0aW9ucy5zdGVwVHdvKHVzZXJQbGFucykpO1xuICAgICAgc2VsZWN0ZWRDYXJkKHVzZXJQbGFucy5zZWxlY3RlZFBsYW4pO1xuICAgICAgY2hhbmdlQ29sb3IodGFicywgMSk7XG4gICAgICAvLyBjaGVjayBpZiBzdGVwIHR3byBjYXJkcyBzZWxlY3RlZCB0byBwcmVjZWVkIHRvIHN0ZXAgMyBhbmQgNCB0aGV5IGFyZSBzYW1lXG4gICAgfSBlbHNlIGlmICh0YWJzLmluZGV4T2YoZWxlbWVudCkgPT09IDIgJiYgdXNlclBsYW5zLnNlbGVjdGVkUGxhbiAhPT0gXCJcIikge1xuICAgICAgaG9sZGVyLnRleHRDb250ZW50ID0gXCJcIjtcbiAgICAgIGhvbGRlci5hcHBlbmRDaGlsZChmdW5jdGlvbnMuc3RlcFRocmVlKHVzZXJBZGRzKSk7XG4gICAgICBjaGFuZ2VDb2xvcih0YWJzLCAyKTtcbiAgICB9IGVsc2UgaWYgKHRhYnMuaW5kZXhPZihlbGVtZW50KSA9PT0gMyAmJiB1c2VyUGxhbnMuc2VsZWN0ZWRQbGFuICE9PSBcIlwiKSB7XG4gICAgICBob2xkZXIudGV4dENvbnRlbnQgPSBcIlwiO1xuICAgICAgaG9sZGVyLmFwcGVuZENoaWxkKGZ1bmN0aW9ucy5zdGVwRm91cih1c2VyUGxhbnMsIHVzZXJBZGRzKSk7XG4gICAgICBjaGFuZ2VDb2xvcih0YWJzLCAzKTtcbiAgICB9XG4gIH0pO1xufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=