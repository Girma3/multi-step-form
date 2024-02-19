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
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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CA,aAAa;IACb;QACI,cAAc;IAClB;IACA;QACI,aAAa;QACb,8BAA8B;OAC/B,eAAe;OACf,wBAAwB;;IAE3B;IACA;QACI,mBAAmB;IACvB;GACD;IACC,SAAS;GACV;;IAEC;QACI,SAAS;QACT,eAAe;QACf,sBAAsB;;IAE1B;IACA;QACI,gBAAgB;QAChB,iBAAiB;IACrB;IACA;QACI,aAAa;QACb,YAAY;QACZ,UAAU;QACV,yBAAyB;QACzB,eAAe;;IAEnB;IACA;QACI,6CAA6C;QAC7C,0BAA0B;IAC9B;IACA;QACI,yBAAyB;QACzB,gBAAgB;QAChB,eAAe;IACnB;IACA;QACI,eAAe;QACf,gBAAgB;IACpB;IACA;QACI,gBAAgB;QAChB,iBAAiB;IACrB;;IAEA;QACI,YAAY;IAChB;IACA;QACI,eAAe;QACf,oCAAoC;QACpC,qBAAqB;QACrB,mBAAmB;QACnB;IACJ;QACI,yBAAyB;QACzB,qCAAqC;QACrC;IACJ,iBAAiB;IACjB;QACI,uBAAuB;QACvB,mBAAmB;QACnB,aAAa;QACb,eAAe;;IAEnB;IACA;QACI,kBAAkB;IACtB;AACJ;IACI,QAAQ;IACR;QACI,0BAA0B;QAC1B,oCAAoC;QACpC;IACJ;QACI,yDAA4D;QAC5D,wBAAwB;QACxB,YAAY;QACZ,YAAY;IAChB;IACA;QACI,mBAAmB;IACvB;GACD;QACK,aAAa;IACjB;IACA,aAAa;IACb;QACI,kBAAkB;QAClB,WAAW;QACX,qBAAqB;QACrB,UAAU;QACV,iBAAiB;IACrB;IACA;QACI,UAAU;IACd;IACA;QACI,WAAW;QACX,iBAAiB;IACrB;IACA;QACI,kBAAkB;QAClB,qBAAqB;QACrB,UAAU;OACX;OACA;QACC,YAAY;OACb;OACA;QACC,YAAY;OACb;OACA;QACC,cAAc;QACd,WAAW;OACZ;OACA;QACC,aAAa;OACd;;IAEH;QACI,WAAW;IACf;IACA,eAAe;;IAEf;OACG,eAAe;OACf,SAAS;OACT,mBAAmB;;IAEtB;;IAEA;QACI,eAAe;QACf,gBAAgB;IACpB;IACA;QACI,gBAAgB;QAChB,iBAAiB;QACjB;;IAEJ,mBAAmB;IACnB;QACI,eAAe;QACf,WAAW;IACf;IACA;QACI,SAAS;QACT,UAAU;IACd;IACA;QACI,gBAAgB;QAChB,iBAAiB;IACrB;;AAEJ;IACI,SAAS;IACT,kBAAkB;IAClB,UAAU;IACV,aAAa;AACjB;AACA;IACI,kBAAkB;IAClB,SAAS;IACT,SAAS;AACb;;AAEA;IACI,UAAU;AACd;AACA;IACI,aAAa;AACjB;;IAEI;QACI,eAAe;QACf,WAAW;QACX,uBAAuB;QACvB,uBAAuB;QACvB,YAAY;QACZ,YAAY;IAChB;IACA;OACG,mBAAmB;QAClB,mBAAmB;QACnB,WAAW;IACf;IACA;QACI,SAAS;QACT,eAAe;IACnB;AACJ","sourcesContent":["/* ubuntu-regular - latin */\n@font-face {\n    font-display: swap; \n    font-family: 'Ubuntu';\n    font-style: normal;\n    font-weight: 400;\n    src: url('./assets/fonts/ubuntu-v20-latin-regular.woff2') format('woff2'); \n  }\nbody{\n    background-color:  hsl(0, 0%, 100%);\n    min-height: 100vh;\n    max-width: 100vw;\n    font-family: 'Ubuntu';\n    display: grid;\n    margin: 0.5rem;\n    grid-template-columns: 1fr 2fr;\n    color: hsl(213, 96%, 18%);\n}\n/* nav style */\n\nnav{\n    background-image: url(./assets/images/bg-sidebar-desktop.svg);\n    \n    background-repeat: no-repeat;\n    background-size: cover;\n    background-position: bottom;\n    height: 95vh;\n    border-radius: 0.5rem;\n  }\nul{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    list-style: none;\n}\nli{\n    margin: 1rem;\n    width: 100%;\n}\n.nav-holder{\n    display: flex;\n    align-items: center;\n    gap: 1rem;\n}\n.step-name{\n    color: white;\n    font-size: 1rem;\n    font-weight: 700;\n}\n.step-name:hover{\n    text-shadow: 2px 2px  rgb(101, 5, 118);\n    }\n.dot{\n    width: 2rem;\n    height: 2rem;\n    color: white;\n    border: 2px rgb(255, 255, 255) solid;\n    border-radius: 50%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    cursor: pointer;\n    background-color: inherit;\n    }\n    .dot:hover{\n        border: rgb(232, 31, 247) solid 3px;\n    }\n.step-num{\n    color: hsl(228, 100%, 84%);\n    font-weight: 500;\n}\nh1{\n    margin: 0;\n    color:hsl(213, 96%, 18%);\n}\n.instruction, .plan-fee, .add-plan , .confirm-text {\n    color:hsl(231, 11%, 63%) ;\n    font-size: 1rem;\n    font-weight: 700;\n    }\n    .confirm-text{\n        font-weight: 400;\n    }\n\n.back-btn{\n    color:hsl(231, 11%, 63%) ; \n}\n/* personal info form */\n.step-one, .step-two, .tab-three, .tab-four , .step-five {\n    display: flex;\n    margin: 1rem;\n    flex-direction: column;\n    background-color: hsl(0, 0%, 100%);\n    padding: 1rem;\n\n     }\n  .error-msg{\n    margin: 1px;\n    width: 60%;\n    color:  hsl(354, 84%, 57%);\n    text-align: end;\n}\n\n.label-holder{\n    display: flex;\n    flex-direction: column;\n    margin: 0.3rem;\n    \n}\ninput{\n    width: 60%;\n   border: 1px rgb(55, 55, 55) solid;\n   padding: 0.6rem;\n   border-radius: 0.5rem;\n   color:hsl(214, 93%, 12%);\n   font-weight: 500;\n   font-size: 1rem;\n }\nlabel{\n    color:hsl(213, 96%, 18%);;\n}\n.invalid{\n    border: 2px  hsl(354, 84%, 57%) solid;\n   }\n.valid{\n    border: 2px green  solid;\n   }\n   .btn-holder{\n    width: 64%;\n    display: flex;\n    justify-content: end;\n    margin-top: 3rem;\n  }\n    input:focus{\n        border:3px solid rgb(0, 4, 255);\n        }\n    /* tab two */\n    .plans{\n        display: flex;\n        gap: 1rem;\n        flex-wrap: wrap;\n        }\n   .plan-holder{\n        border: 1px solid  hsl(213, 96%, 18%);\n        display: flex;\n        flex-direction: column;\n        align-items:flex-start;\n        width: 200px;\n        height: 190px;\n        padding: 1rem;\n        border-radius: 1rem;\n        cursor: pointer;\n    }\n   .plan-holder:hover{\n        background-color: hsl(229, 24%, 87%);\n        border: 2px solid hsl(243, 100%, 62%);\n   }\n   .about-plan{\n        font-weight: 500;\n        width: fit-content;\n   }\n   .plan-detail, .about-plan{\n        display: flex;\n        flex-direction: column;\n        gap: 0.3rem;\n        align-items: flex-start;\n   }\n   .plan-name{\n        font-weight: 700;\n        color: hsl(213, 96%, 18%);\n        font-size: 1rem;\n   }\n   .icon-holder{\n        margin-right: 1.5rem;\n   } \n   .toggle-holder{\n        display: flex;\n        gap: 1rem;\n        margin: 1rem;\n        align-items: center;\n        justify-content: center;\n        border-radius:5px ;\n        background-color:hsl(229, 24%, 87%);\n        padding: 0.5rem;\n        border-radius: 0.5rem;\n    }\n   .toggle{\n        display: inline-block;\n        position: relative;\n        width: 50px;\n        height: 30px;\n        background-color:hsl(213, 96%, 18%);\n        border: none;\n        border-radius: 20px;\n        transition: all 0.5s;\n    }\n   .toggle::after{\n        content: \"\";\n        position: absolute;\n        height: 20px;\n        width: 20px;\n        border-radius: 50%;\n        top: 5px;\n        left: 1px;\n        background-color: hsl(0, 0%, 100%);\n   }\n  .checkbox:checked + .toggle::after{\n        left: 25px;\n     }\n    .checkbox{\n        display: none;\n    }\n    .nav-btns{\n        display: flex;\n        justify-content: space-between;\n        align-items: baseline;\n        margin: 1rem;\n        background-color: hsl(0, 0%, 100%);\n        border-radius: 0.5rem;\n        width: 90%;\n        padding: 0.6rem;\n\n     }\n    \n    .tab-two-btn, .tab-three-btn, .tab-four-btn, .tab-four-confirm-btn , .tab-one-btn{\n        padding: 1rem;\n        background-color: hsl(213, 96%, 18%);\n        color: azure;\n        border: none;\n        width: fit-content;\n        border-radius: 0.5rem;\n    }\n   \n   .about-adds{\n        border: 2px solid  hsl(243, 100%, 62%);\n        border-radius: 0.4rem;\n        padding: 0.5rem;\n        margin: 0.5rem;\n       }\n    .about-adds:hover{\n        box-shadow: rgb(251, 0, 0) -1px 3px 3px;\n    }\n    .add-holder,.add-header{\n        display: flex;\n        align-items: center;\n        justify-content: space-between;\n        gap:1rem;\n    }\n    .add-title{\n        font-size: 1.5rem;\n        font-weight: 400;\n    }\n    .about-plan{\n        font-weight: 500;\n    }\n    .add-title,.add-plan{\n        margin: 0;\n    }\n    .user-add{\n        width: 1rem;\n        height: 1rem;\n        margin-top: 0.5rem;\n    }\n    /* tab four */\n    .tab-four{\n        margin: 1.5rem;\n    }\n    .summary-plan, .add-detail, .summary-total{\n        display: flex;\n        justify-content: space-between;\n       padding: 0.5rem;\n       color:hsl(213, 96%, 18%);\n       \n    }\n    .summary-services{\n        height: fit-content;\n    }\n   .add-detail > p{\n    margin: 0;\n   }\n    \n    .selected-plan{\n        margin: 0;\n        font-size: 1rem;\n        padding-bottom: 0.5rem;\n\n    }\n    .summary-price{\n        font-weight: 500;\n        font-size: 1.2rem;\n    }\n    .change-plan{\n        outline: none;\n        border: none;\n        padding: 0;\n        background-color: inherit;\n        cursor: pointer;\n      \n    }\n    .change-plan:hover{\n        border-bottom: 2px solid  hsl(243, 100%, 62%);\n        color: hsl(243, 100%, 62%);\n    }\n    .add-name, .change-plan{\n        color:hsl(231, 11%, 63%) ; \n        font-weight: 400;\n        font-size: 1rem;\n    }\n    .online-price, .theme-price, .storage-price{\n        font-size: 1rem;\n        font-weight: 400;\n    }\n    .total-price{\n        font-weight: 900;\n        font-size: 1.5rem;\n    }\n    \n    hr{\n        margin: 1rem;\n    }\n    .service-holder{\n        padding: 0.5rem;\n        background-color: hsl(229, 24%, 87%);\n        border-radius: 0.5rem;\n        height: fit-content;\n        }\n    .back-btn{\n        color:hsl(231, 11%, 63%) ; \n        background-color: hsl(231, 100%, 99%);\n        }\n    /* step five tab*/\n    .step-five{\n        justify-content: center;\n        align-items: center;\n        padding: 1rem;\n        margin-top: 15%;\n        \n    }\n    .confirm-text{\n        text-align: center;\n    }\n@media (max-width:565px) {\n    /* nav */\n    body{\n        grid-template-columns: 1fr;\n        background-color: hsl(206, 94%, 87%);\n        }\n    nav{\n        background-image:url(./assets/images/bg-sidebar-mobile.svg) ;\n        background-position: top;\n        height: 30vh;\n        width: 100vw;\n    }\n    ul{\n        flex-direction: row;\n    }\n   .nav-description{\n        display: none;\n    }\n    /* step one */\n    .step-one{\n        position: absolute;\n        bottom: 16%;\n        border-radius: 0.5rem;\n        width: 70%;\n        max-height: 490px;\n    }\n    input{\n        width: 80%;\n    }\n    .error-msg{\n        width: 100%;\n        text-align: start;\n    }\n    .step-two, .tab-three, .tab-four, .step-five{\n        position: relative;\n        border-radius: 0.5rem;\n        width: 70%;\n       }\n       .step-two{\n        bottom: 6rem;\n       }\n       .tab-three{\n        bottom: 8rem;\n       }\n       .tab-four{\n        bottom: 6.4rem;\n        right: 1rem;\n       }\n       .step-five{\n        bottom: 10rem;\n       }\n       \n    .add-header{\n        gap: 0.3rem;\n    }\n    /* step three */\n    \n    .about-adds{\n       padding: 0.5rem;\n       margin: 0;\n       margin-bottom: 1rem;\n       \n    }\n    \n    .add-title{\n        font-size: 1rem;\n        font-weight: 400;\n    }\n    .add-plan{\n        font-weight: 500;\n        font-size: 0.7rem;\n        }\n   \n    /* step two cards */\n    .plans{\n        flex-wrap: wrap;\n        gap: 0.5rem;\n    }\n    .error-card{\n        margin: 0;\n        padding: 0;\n    }\n    .plan-fee{\n        font-weight: 700;\n        font-size: 0.7rem;\n    }\n \n.nav-btns{\n    margin: 0;\n    position: absolute;\n    top: 28rem;\n    right: 0.1rem;\n}\n.btn-holder{\n    position: relative;\n    top: 2rem;\n    left: 35%;\n}\n\n.tab-four > .nav-btns{\n    top: 28rem;\n}\n.service-holder{\n    height: 270px;\n}\n\n    .plan-holder{\n        flex-wrap: wrap;\n        width: 100%;\n        align-items: flex-start;\n        justify-content: center;\n        height: 84px;\n        padding: 5px;\n    }\n    .about-plan {\n       flex-direction: row;\n        align-items: center;\n        gap: 0.5rem;\n    }\n    .toggle-holder{\n        margin: 0;\n        margin-top: 3px;\n    }\n}"],"sourceRoot":""}]);
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
/* harmony import */ var _assets_images_icon_arcade_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/images/icon-arcade.svg */ "./src/assets/images/icon-arcade.svg");
/* harmony import */ var _assets_images_icon_pro_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/images/icon-pro.svg */ "./src/assets/images/icon-pro.svg");
/* harmony import */ var _assets_images_icon_advanced_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/images/icon-advanced.svg */ "./src/assets/images/icon-advanced.svg");
/* harmony import */ var _assets_images_icon_thank_you_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/images/icon-thank-you.svg */ "./src/assets/images/icon-thank-you.svg");
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
                <div class="icon-holder"><img src="${_assets_images_icon_arcade_svg__WEBPACK_IMPORTED_MODULE_0__}" alt="icon for arcade plan" ></div>
                <div class="plan-detail">
                  <div class="plan-name">Arcade</div>
                  <div class="plan-fee">${obj.arcade}</div>
                  <div class="plan-description" data-gift style='display:${obj.bonus};'>2 months free</div>
                </div>
            </div>
        </button>
        <button class="plan-holder" data-plan="1">
        
            <div class="about-plan">
                <div class="icon-holder"><img src="${_assets_images_icon_advanced_svg__WEBPACK_IMPORTED_MODULE_2__}" alt="icon for advanced plan" ></div>
                <div class="plan-detail">
                  <div class="plan-name">Advanced</div>
                  <div class="plan-fee">${obj.advanced}</div>
                  <div class="plan-description" data-gift style='display:${obj.bonus};'>2 months free</div>
                </div>
            </div>
        </button>
        <button class="plan-holder"  data-plan="2">
        
            <div class="about-plan">
                <div class="icon-holder"><img src= "${_assets_images_icon_pro_svg__WEBPACK_IMPORTED_MODULE_1__}" alt="icon for pro plan" ></div>
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
      <div class="icon-holder"><img src="${_assets_images_icon_thank_you_svg__WEBPACK_IMPORTED_MODULE_3__}" alt="icon to confirm subscription"></div>
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

/***/ }),

/***/ "./src/assets/images/icon-advanced.svg":
/*!*********************************************!*\
  !*** ./src/assets/images/icon-advanced.svg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "705bd10c4c1f688871d7.svg";

/***/ }),

/***/ "./src/assets/images/icon-arcade.svg":
/*!*******************************************!*\
  !*** ./src/assets/images/icon-arcade.svg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a08c098289a31bb2f66d.svg";

/***/ }),

/***/ "./src/assets/images/icon-pro.svg":
/*!****************************************!*\
  !*** ./src/assets/images/icon-pro.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2e7e377da9c658d60862.svg";

/***/ }),

/***/ "./src/assets/images/icon-thank-you.svg":
/*!**********************************************!*\
  !*** ./src/assets/images/icon-thank-you.svg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ee753f231cc5a5789b8e.svg";

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
/******/ 			"index": 0
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDTztBQUNoRyw0Q0FBNEMsdUtBQWdFO0FBQzVHLDRDQUE0Qyx5SkFBeUQ7QUFDckcsNENBQTRDLHVKQUF3RDtBQUNwRyw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxtQ0FBbUM7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNEJBQTRCLG1DQUFtQztBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLG1DQUFtQztBQUNsRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sdUZBQXVGLE1BQU0sWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsTUFBTSxXQUFXLEtBQUssYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLFlBQVksV0FBVyxLQUFLLEtBQUssVUFBVSxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxNQUFNLFlBQVksTUFBTSxVQUFVLFVBQVUsWUFBWSxhQUFhLFlBQVksS0FBSyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLE1BQU0sVUFBVSxLQUFLLFVBQVUsVUFBVSxVQUFVLEtBQUssS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsS0FBSyxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxVQUFVLFlBQVksTUFBTSxVQUFVLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsYUFBYSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sWUFBWSxNQUFNLFlBQVksYUFBYSxXQUFXLFdBQVcsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsTUFBTSxVQUFVLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLE1BQU0sS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVB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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQzVEYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNiQTtBQUN5RDtBQUNOO0FBQ1U7QUFDQTtBQUN0RDtBQUNQLDBCQUEwQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUCwwQkFBMEI7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUCwwQkFBMEI7QUFDMUI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyxTQUFTO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUlBQXFJLFVBQVU7QUFDL0k7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLFVBQVU7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxNQUFNLGtEQUFXO0FBQ2pCO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBLHlCQUF5Qiw0Q0FBUztBQUNsQztBQUNBLE1BQU0sa0RBQVcsV0FBVztBQUM1QixNQUFNO0FBQ047QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBLHVCQUF1Qiw0Q0FBUztBQUNoQyxJQUFJLGtEQUFXLFdBQVc7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrREFBK0QsTUFBTTtBQUNyRSxJQUFJLGdEQUFTO0FBQ2IsSUFBSTtBQUNKO0FBQ0EsdUJBQXVCLDRDQUFTO0FBQ2hDLElBQUksa0RBQVcsV0FBVztBQUMxQixJQUFJO0FBQ0o7QUFDQSx1QkFBdUIsNENBQVM7QUFDaEMsSUFBSSxtREFBWTtBQUNoQixJQUFJLGtEQUFXLFdBQVc7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsNENBQVM7QUFDaEMsSUFBSSxrREFBVyxXQUFXO0FBQzFCLElBQUk7QUFDSjtBQUNBLHVCQUF1Qiw0Q0FBUztBQUNoQztBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsNENBQVM7QUFDbEMsTUFBTSxrREFBVztBQUNqQjtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU0sbURBQVk7QUFDbEI7QUFDQTtBQUNBLHlCQUF5Qiw0Q0FBUztBQUNsQyxNQUFNLG1EQUFZO0FBQ2xCLE1BQU0sa0RBQVc7QUFDakI7QUFDQSxNQUFNO0FBQ047QUFDQSx5QkFBeUIsNENBQVM7QUFDbEMsTUFBTSxrREFBVztBQUNqQixNQUFNO0FBQ047QUFDQSx5QkFBeUIsNENBQVM7QUFDbEMsTUFBTSxrREFBVztBQUNqQjtBQUNBLEdBQUc7QUFDSCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXVsdGktc3RlcC1mb3JtLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9tdWx0aS1zdGVwLWZvcm0vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL211bHRpLXN0ZXAtZm9ybS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vbXVsdGktc3RlcC1mb3JtLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vbXVsdGktc3RlcC1mb3JtLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL211bHRpLXN0ZXAtZm9ybS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9tdWx0aS1zdGVwLWZvcm0vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL211bHRpLXN0ZXAtZm9ybS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9tdWx0aS1zdGVwLWZvcm0vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vbXVsdGktc3RlcC1mb3JtLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vbXVsdGktc3RlcC1mb3JtLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vbXVsdGktc3RlcC1mb3JtLy4vc3JjL3RhYnMuanMiLCJ3ZWJwYWNrOi8vbXVsdGktc3RlcC1mb3JtL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL211bHRpLXN0ZXAtZm9ybS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9tdWx0aS1zdGVwLWZvcm0vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL211bHRpLXN0ZXAtZm9ybS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL211bHRpLXN0ZXAtZm9ybS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL211bHRpLXN0ZXAtZm9ybS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL211bHRpLXN0ZXAtZm9ybS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9tdWx0aS1zdGVwLWZvcm0vd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vbXVsdGktc3RlcC1mb3JtL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9tdWx0aS1zdGVwLWZvcm0vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vYXNzZXRzL2ZvbnRzL3VidW50dS12MjAtbGF0aW4tcmVndWxhci53b2ZmMlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vYXNzZXRzL2ltYWdlcy9iZy1zaWRlYmFyLWRlc2t0b3Auc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi9hc3NldHMvaW1hZ2VzL2JnLXNpZGViYXItbW9iaWxlLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAvKiB1YnVudHUtcmVndWxhciAtIGxhdGluICovXG5AZm9udC1mYWNlIHtcbiAgICBmb250LWRpc3BsYXk6IHN3YXA7IFxuICAgIGZvbnQtZmFtaWx5OiAnVWJ1bnR1JztcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KSBmb3JtYXQoJ3dvZmYyJyk7IFxuICB9XG5ib2R5e1xuICAgIGJhY2tncm91bmQtY29sb3I6ICBoc2woMCwgMCUsIDEwMCUpO1xuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICAgIG1heC13aWR0aDogMTAwdnc7XG4gICAgZm9udC1mYW1pbHk6ICdVYnVudHUnO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgbWFyZ2luOiAwLjVyZW07XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMmZyO1xuICAgIGNvbG9yOiBoc2woMjEzLCA5NiUsIDE4JSk7XG59XG4vKiBuYXYgc3R5bGUgKi9cblxubmF2e1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX199KTtcbiAgICBcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogYm90dG9tO1xuICAgIGhlaWdodDogOTV2aDtcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XG4gIH1cbnVse1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5saXtcbiAgICBtYXJnaW46IDFyZW07XG4gICAgd2lkdGg6IDEwMCU7XG59XG4ubmF2LWhvbGRlcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAxcmVtO1xufVxuLnN0ZXAtbmFtZXtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG4uc3RlcC1uYW1lOmhvdmVye1xuICAgIHRleHQtc2hhZG93OiAycHggMnB4ICByZ2IoMTAxLCA1LCAxMTgpO1xuICAgIH1cbi5kb3R7XG4gICAgd2lkdGg6IDJyZW07XG4gICAgaGVpZ2h0OiAycmVtO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXI6IDJweCByZ2IoMjU1LCAyNTUsIDI1NSkgc29saWQ7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcbiAgICB9XG4gICAgLmRvdDpob3ZlcntcbiAgICAgICAgYm9yZGVyOiByZ2IoMjMyLCAzMSwgMjQ3KSBzb2xpZCAzcHg7XG4gICAgfVxuLnN0ZXAtbnVte1xuICAgIGNvbG9yOiBoc2woMjI4LCAxMDAlLCA4NCUpO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5oMXtcbiAgICBtYXJnaW46IDA7XG4gICAgY29sb3I6aHNsKDIxMywgOTYlLCAxOCUpO1xufVxuLmluc3RydWN0aW9uLCAucGxhbi1mZWUsIC5hZGQtcGxhbiAsIC5jb25maXJtLXRleHQge1xuICAgIGNvbG9yOmhzbCgyMzEsIDExJSwgNjMlKSA7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgfVxuICAgIC5jb25maXJtLXRleHR7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgfVxuXG4uYmFjay1idG57XG4gICAgY29sb3I6aHNsKDIzMSwgMTElLCA2MyUpIDsgXG59XG4vKiBwZXJzb25hbCBpbmZvIGZvcm0gKi9cbi5zdGVwLW9uZSwgLnN0ZXAtdHdvLCAudGFiLXRocmVlLCAudGFiLWZvdXIgLCAuc3RlcC1maXZlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIG1hcmdpbjogMXJlbTtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGhzbCgwLCAwJSwgMTAwJSk7XG4gICAgcGFkZGluZzogMXJlbTtcblxuICAgICB9XG4gIC5lcnJvci1tc2d7XG4gICAgbWFyZ2luOiAxcHg7XG4gICAgd2lkdGg6IDYwJTtcbiAgICBjb2xvcjogIGhzbCgzNTQsIDg0JSwgNTclKTtcbiAgICB0ZXh0LWFsaWduOiBlbmQ7XG59XG5cbi5sYWJlbC1ob2xkZXJ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIG1hcmdpbjogMC4zcmVtO1xuICAgIFxufVxuaW5wdXR7XG4gICAgd2lkdGg6IDYwJTtcbiAgIGJvcmRlcjogMXB4IHJnYig1NSwgNTUsIDU1KSBzb2xpZDtcbiAgIHBhZGRpbmc6IDAuNnJlbTtcbiAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbiAgIGNvbG9yOmhzbCgyMTQsIDkzJSwgMTIlKTtcbiAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICBmb250LXNpemU6IDFyZW07XG4gfVxubGFiZWx7XG4gICAgY29sb3I6aHNsKDIxMywgOTYlLCAxOCUpOztcbn1cbi5pbnZhbGlke1xuICAgIGJvcmRlcjogMnB4ICBoc2woMzU0LCA4NCUsIDU3JSkgc29saWQ7XG4gICB9XG4udmFsaWR7XG4gICAgYm9yZGVyOiAycHggZ3JlZW4gIHNvbGlkO1xuICAgfVxuICAgLmJ0bi1ob2xkZXJ7XG4gICAgd2lkdGg6IDY0JTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogZW5kO1xuICAgIG1hcmdpbi10b3A6IDNyZW07XG4gIH1cbiAgICBpbnB1dDpmb2N1c3tcbiAgICAgICAgYm9yZGVyOjNweCBzb2xpZCByZ2IoMCwgNCwgMjU1KTtcbiAgICAgICAgfVxuICAgIC8qIHRhYiB0d28gKi9cbiAgICAucGxhbnN7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGdhcDogMXJlbTtcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgICB9XG4gICAucGxhbi1ob2xkZXJ7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICBoc2woMjEzLCA5NiUsIDE4JSk7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGFsaWduLWl0ZW1zOmZsZXgtc3RhcnQ7XG4gICAgICAgIHdpZHRoOiAyMDBweDtcbiAgICAgICAgaGVpZ2h0OiAxOTBweDtcbiAgICAgICAgcGFkZGluZzogMXJlbTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMXJlbTtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cbiAgIC5wbGFuLWhvbGRlcjpob3ZlcntcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDIyOSwgMjQlLCA4NyUpO1xuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCBoc2woMjQzLCAxMDAlLCA2MiUpO1xuICAgfVxuICAgLmFib3V0LXBsYW57XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgIHdpZHRoOiBmaXQtY29udGVudDtcbiAgIH1cbiAgIC5wbGFuLWRldGFpbCwgLmFib3V0LXBsYW57XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGdhcDogMC4zcmVtO1xuICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgIH1cbiAgIC5wbGFuLW5hbWV7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgIGNvbG9yOiBoc2woMjEzLCA5NiUsIDE4JSk7XG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgIH1cbiAgIC5pY29uLWhvbGRlcntcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxLjVyZW07XG4gICB9IFxuICAgLnRvZ2dsZS1ob2xkZXJ7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGdhcDogMXJlbTtcbiAgICAgICAgbWFyZ2luOiAxcmVtO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYm9yZGVyLXJhZGl1czo1cHggO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOmhzbCgyMjksIDI0JSwgODclKTtcbiAgICAgICAgcGFkZGluZzogMC41cmVtO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XG4gICAgfVxuICAgLnRvZ2dsZXtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHdpZHRoOiA1MHB4O1xuICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6aHNsKDIxMywgOTYlLCAxOCUpO1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjVzO1xuICAgIH1cbiAgIC50b2dnbGU6OmFmdGVye1xuICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGhlaWdodDogMjBweDtcbiAgICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgdG9wOiA1cHg7XG4gICAgICAgIGxlZnQ6IDFweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDAsIDAlLCAxMDAlKTtcbiAgIH1cbiAgLmNoZWNrYm94OmNoZWNrZWQgKyAudG9nZ2xlOjphZnRlcntcbiAgICAgICAgbGVmdDogMjVweDtcbiAgICAgfVxuICAgIC5jaGVja2JveHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gICAgLm5hdi1idG5ze1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcbiAgICAgICAgbWFyZ2luOiAxcmVtO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMCwgMCUsIDEwMCUpO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XG4gICAgICAgIHdpZHRoOiA5MCU7XG4gICAgICAgIHBhZGRpbmc6IDAuNnJlbTtcblxuICAgICB9XG4gICAgXG4gICAgLnRhYi10d28tYnRuLCAudGFiLXRocmVlLWJ0biwgLnRhYi1mb3VyLWJ0biwgLnRhYi1mb3VyLWNvbmZpcm0tYnRuICwgLnRhYi1vbmUtYnRue1xuICAgICAgICBwYWRkaW5nOiAxcmVtO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMjEzLCA5NiUsIDE4JSk7XG4gICAgICAgIGNvbG9yOiBhenVyZTtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbiAgICB9XG4gICBcbiAgIC5hYm91dC1hZGRze1xuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAgaHNsKDI0MywgMTAwJSwgNjIlKTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMC40cmVtO1xuICAgICAgICBwYWRkaW5nOiAwLjVyZW07XG4gICAgICAgIG1hcmdpbjogMC41cmVtO1xuICAgICAgIH1cbiAgICAuYWJvdXQtYWRkczpob3ZlcntcbiAgICAgICAgYm94LXNoYWRvdzogcmdiKDI1MSwgMCwgMCkgLTFweCAzcHggM3B4O1xuICAgIH1cbiAgICAuYWRkLWhvbGRlciwuYWRkLWhlYWRlcntcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICBnYXA6MXJlbTtcbiAgICB9XG4gICAgLmFkZC10aXRsZXtcbiAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgfVxuICAgIC5hYm91dC1wbGFue1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgIH1cbiAgICAuYWRkLXRpdGxlLC5hZGQtcGxhbntcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgIH1cbiAgICAudXNlci1hZGR7XG4gICAgICAgIHdpZHRoOiAxcmVtO1xuICAgICAgICBoZWlnaHQ6IDFyZW07XG4gICAgICAgIG1hcmdpbi10b3A6IDAuNXJlbTtcbiAgICB9XG4gICAgLyogdGFiIGZvdXIgKi9cbiAgICAudGFiLWZvdXJ7XG4gICAgICAgIG1hcmdpbjogMS41cmVtO1xuICAgIH1cbiAgICAuc3VtbWFyeS1wbGFuLCAuYWRkLWRldGFpbCwgLnN1bW1hcnktdG90YWx7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICBwYWRkaW5nOiAwLjVyZW07XG4gICAgICAgY29sb3I6aHNsKDIxMywgOTYlLCAxOCUpO1xuICAgICAgIFxuICAgIH1cbiAgICAuc3VtbWFyeS1zZXJ2aWNlc3tcbiAgICAgICAgaGVpZ2h0OiBmaXQtY29udGVudDtcbiAgICB9XG4gICAuYWRkLWRldGFpbCA+IHB7XG4gICAgbWFyZ2luOiAwO1xuICAgfVxuICAgIFxuICAgIC5zZWxlY3RlZC1wbGFue1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDAuNXJlbTtcblxuICAgIH1cbiAgICAuc3VtbWFyeS1wcmljZXtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgfVxuICAgIC5jaGFuZ2UtcGxhbntcbiAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICBcbiAgICB9XG4gICAgLmNoYW5nZS1wbGFuOmhvdmVye1xuICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgIGhzbCgyNDMsIDEwMCUsIDYyJSk7XG4gICAgICAgIGNvbG9yOiBoc2woMjQzLCAxMDAlLCA2MiUpO1xuICAgIH1cbiAgICAuYWRkLW5hbWUsIC5jaGFuZ2UtcGxhbntcbiAgICAgICAgY29sb3I6aHNsKDIzMSwgMTElLCA2MyUpIDsgXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICB9XG4gICAgLm9ubGluZS1wcmljZSwgLnRoZW1lLXByaWNlLCAuc3RvcmFnZS1wcmljZXtcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgIH1cbiAgICAudG90YWwtcHJpY2V7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgIH1cbiAgICBcbiAgICBocntcbiAgICAgICAgbWFyZ2luOiAxcmVtO1xuICAgIH1cbiAgICAuc2VydmljZS1ob2xkZXJ7XG4gICAgICAgIHBhZGRpbmc6IDAuNXJlbTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDIyOSwgMjQlLCA4NyUpO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XG4gICAgICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAuYmFjay1idG57XG4gICAgICAgIGNvbG9yOmhzbCgyMzEsIDExJSwgNjMlKSA7IFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMjMxLCAxMDAlLCA5OSUpO1xuICAgICAgICB9XG4gICAgLyogc3RlcCBmaXZlIHRhYiovXG4gICAgLnN0ZXAtZml2ZXtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIHBhZGRpbmc6IDFyZW07XG4gICAgICAgIG1hcmdpbi10b3A6IDE1JTtcbiAgICAgICAgXG4gICAgfVxuICAgIC5jb25maXJtLXRleHR7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG5AbWVkaWEgKG1heC13aWR0aDo1NjVweCkge1xuICAgIC8qIG5hdiAqL1xuICAgIGJvZHl7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMjA2LCA5NCUsIDg3JSk7XG4gICAgICAgIH1cbiAgICBuYXZ7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6dXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fX30pIDtcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogdG9wO1xuICAgICAgICBoZWlnaHQ6IDMwdmg7XG4gICAgICAgIHdpZHRoOiAxMDB2dztcbiAgICB9XG4gICAgdWx7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgfVxuICAgLm5hdi1kZXNjcmlwdGlvbntcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gICAgLyogc3RlcCBvbmUgKi9cbiAgICAuc3RlcC1vbmV7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgYm90dG9tOiAxNiU7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbiAgICAgICAgd2lkdGg6IDcwJTtcbiAgICAgICAgbWF4LWhlaWdodDogNDkwcHg7XG4gICAgfVxuICAgIGlucHV0e1xuICAgICAgICB3aWR0aDogODAlO1xuICAgIH1cbiAgICAuZXJyb3ItbXNne1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgdGV4dC1hbGlnbjogc3RhcnQ7XG4gICAgfVxuICAgIC5zdGVwLXR3bywgLnRhYi10aHJlZSwgLnRhYi1mb3VyLCAuc3RlcC1maXZle1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbiAgICAgICAgd2lkdGg6IDcwJTtcbiAgICAgICB9XG4gICAgICAgLnN0ZXAtdHdve1xuICAgICAgICBib3R0b206IDZyZW07XG4gICAgICAgfVxuICAgICAgIC50YWItdGhyZWV7XG4gICAgICAgIGJvdHRvbTogOHJlbTtcbiAgICAgICB9XG4gICAgICAgLnRhYi1mb3Vye1xuICAgICAgICBib3R0b206IDYuNHJlbTtcbiAgICAgICAgcmlnaHQ6IDFyZW07XG4gICAgICAgfVxuICAgICAgIC5zdGVwLWZpdmV7XG4gICAgICAgIGJvdHRvbTogMTByZW07XG4gICAgICAgfVxuICAgICAgIFxuICAgIC5hZGQtaGVhZGVye1xuICAgICAgICBnYXA6IDAuM3JlbTtcbiAgICB9XG4gICAgLyogc3RlcCB0aHJlZSAqL1xuICAgIFxuICAgIC5hYm91dC1hZGRze1xuICAgICAgIHBhZGRpbmc6IDAuNXJlbTtcbiAgICAgICBtYXJnaW46IDA7XG4gICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgICAgICBcbiAgICB9XG4gICAgXG4gICAgLmFkZC10aXRsZXtcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgIH1cbiAgICAuYWRkLXBsYW57XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMC43cmVtO1xuICAgICAgICB9XG4gICBcbiAgICAvKiBzdGVwIHR3byBjYXJkcyAqL1xuICAgIC5wbGFuc3tcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgICBnYXA6IDAuNXJlbTtcbiAgICB9XG4gICAgLmVycm9yLWNhcmR7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICB9XG4gICAgLnBsYW4tZmVle1xuICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICBmb250LXNpemU6IDAuN3JlbTtcbiAgICB9XG4gXG4ubmF2LWJ0bnN7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDI4cmVtO1xuICAgIHJpZ2h0OiAwLjFyZW07XG59XG4uYnRuLWhvbGRlcntcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiAycmVtO1xuICAgIGxlZnQ6IDM1JTtcbn1cblxuLnRhYi1mb3VyID4gLm5hdi1idG5ze1xuICAgIHRvcDogMjhyZW07XG59XG4uc2VydmljZS1ob2xkZXJ7XG4gICAgaGVpZ2h0OiAyNzBweDtcbn1cblxuICAgIC5wbGFuLWhvbGRlcntcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBoZWlnaHQ6IDg0cHg7XG4gICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICB9XG4gICAgLmFib3V0LXBsYW4ge1xuICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGdhcDogMC41cmVtO1xuICAgIH1cbiAgICAudG9nZ2xlLWhvbGRlcntcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBtYXJnaW4tdG9wOiAzcHg7XG4gICAgfVxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSwyQkFBMkI7QUFDM0I7SUFDSSxrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsNERBQXlFO0VBQzNFO0FBQ0Y7SUFDSSxtQ0FBbUM7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aUI7SUFDckI7O0FBRUo7SUFDSSxTQUFTO0lBQ1Qsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULFNBQVM7QUFDYjs7QUFFQTtJQUNJLFVBQVU7QUFDZDtBQUNBO0lBQ0ksYUFBYTtBQUNqQjs7SUFFSTtRQUNJLGVBQWU7UUFDZixXQUFXO1FBQ1gsdUJBQXVCO1FBQ3ZCLHVCQUF1QjtRQUN2QixZQUFZO1FBQ1osWUFBWTtJQUNoQjtJQUNBO09BQ0csbUJBQW1CO1FBQ2xCLG1CQUFtQjtRQUNuQixXQUFXO0lBQ2Y7SUFDQTtRQUNJLFNBQVM7UUFDVCxlQUFlO0lBQ25CO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogdWJ1bnR1LXJlZ3VsYXIgLSBsYXRpbiAqL1xcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWRpc3BsYXk6IHN3YXA7IFxcbiAgICBmb250LWZhbWlseTogJ1VidW50dSc7XFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgc3JjOiB1cmwoJy4vYXNzZXRzL2ZvbnRzL3VidW50dS12MjAtbGF0aW4tcmVndWxhci53b2ZmMicpIGZvcm1hdCgnd29mZjInKTsgXFxuICB9XFxuYm9keXtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIGhzbCgwLCAwJSwgMTAwJSk7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgICBtYXgtd2lkdGg6IDEwMHZ3O1xcbiAgICBmb250LWZhbWlseTogJ1VidW50dSc7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIG1hcmdpbjogMC41cmVtO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyZnI7XFxuICAgIGNvbG9yOiBoc2woMjEzLCA5NiUsIDE4JSk7XFxufVxcbi8qIG5hdiBzdHlsZSAqL1xcblxcbm5hdntcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vYXNzZXRzL2ltYWdlcy9iZy1zaWRlYmFyLWRlc2t0b3Auc3ZnKTtcXG4gICAgXFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGJvdHRvbTtcXG4gICAgaGVpZ2h0OiA5NXZoO1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICB9XFxudWx7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5saXtcXG4gICAgbWFyZ2luOiAxcmVtO1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuLm5hdi1ob2xkZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMXJlbTtcXG59XFxuLnN0ZXAtbmFtZXtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcbi5zdGVwLW5hbWU6aG92ZXJ7XFxuICAgIHRleHQtc2hhZG93OiAycHggMnB4ICByZ2IoMTAxLCA1LCAxMTgpO1xcbiAgICB9XFxuLmRvdHtcXG4gICAgd2lkdGg6IDJyZW07XFxuICAgIGhlaWdodDogMnJlbTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXI6IDJweCByZ2IoMjU1LCAyNTUsIDI1NSkgc29saWQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXG4gICAgfVxcbiAgICAuZG90OmhvdmVye1xcbiAgICAgICAgYm9yZGVyOiByZ2IoMjMyLCAzMSwgMjQ3KSBzb2xpZCAzcHg7XFxuICAgIH1cXG4uc3RlcC1udW17XFxuICAgIGNvbG9yOiBoc2woMjI4LCAxMDAlLCA4NCUpO1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbn1cXG5oMXtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBjb2xvcjpoc2woMjEzLCA5NiUsIDE4JSk7XFxufVxcbi5pbnN0cnVjdGlvbiwgLnBsYW4tZmVlLCAuYWRkLXBsYW4gLCAuY29uZmlybS10ZXh0IHtcXG4gICAgY29sb3I6aHNsKDIzMSwgMTElLCA2MyUpIDtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICB9XFxuICAgIC5jb25maXJtLXRleHR7XFxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICB9XFxuXFxuLmJhY2stYnRue1xcbiAgICBjb2xvcjpoc2woMjMxLCAxMSUsIDYzJSkgOyBcXG59XFxuLyogcGVyc29uYWwgaW5mbyBmb3JtICovXFxuLnN0ZXAtb25lLCAuc3RlcC10d28sIC50YWItdGhyZWUsIC50YWItZm91ciAsIC5zdGVwLWZpdmUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBtYXJnaW46IDFyZW07XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGhzbCgwLCAwJSwgMTAwJSk7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuXFxuICAgICB9XFxuICAuZXJyb3ItbXNne1xcbiAgICBtYXJnaW46IDFweDtcXG4gICAgd2lkdGg6IDYwJTtcXG4gICAgY29sb3I6ICBoc2woMzU0LCA4NCUsIDU3JSk7XFxuICAgIHRleHQtYWxpZ246IGVuZDtcXG59XFxuXFxuLmxhYmVsLWhvbGRlcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgbWFyZ2luOiAwLjNyZW07XFxuICAgIFxcbn1cXG5pbnB1dHtcXG4gICAgd2lkdGg6IDYwJTtcXG4gICBib3JkZXI6IDFweCByZ2IoNTUsIDU1LCA1NSkgc29saWQ7XFxuICAgcGFkZGluZzogMC42cmVtO1xcbiAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gICBjb2xvcjpoc2woMjE0LCA5MyUsIDEyJSk7XFxuICAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gICBmb250LXNpemU6IDFyZW07XFxuIH1cXG5sYWJlbHtcXG4gICAgY29sb3I6aHNsKDIxMywgOTYlLCAxOCUpOztcXG59XFxuLmludmFsaWR7XFxuICAgIGJvcmRlcjogMnB4ICBoc2woMzU0LCA4NCUsIDU3JSkgc29saWQ7XFxuICAgfVxcbi52YWxpZHtcXG4gICAgYm9yZGVyOiAycHggZ3JlZW4gIHNvbGlkO1xcbiAgIH1cXG4gICAuYnRuLWhvbGRlcntcXG4gICAgd2lkdGg6IDY0JTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBlbmQ7XFxuICAgIG1hcmdpbi10b3A6IDNyZW07XFxuICB9XFxuICAgIGlucHV0OmZvY3Vze1xcbiAgICAgICAgYm9yZGVyOjNweCBzb2xpZCByZ2IoMCwgNCwgMjU1KTtcXG4gICAgICAgIH1cXG4gICAgLyogdGFiIHR3byAqL1xcbiAgICAucGxhbnN7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZ2FwOiAxcmVtO1xcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICAgICAgfVxcbiAgIC5wbGFuLWhvbGRlcntcXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICBoc2woMjEzLCA5NiUsIDE4JSk7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOmZsZXgtc3RhcnQ7XFxuICAgICAgICB3aWR0aDogMjAwcHg7XFxuICAgICAgICBoZWlnaHQ6IDE5MHB4O1xcbiAgICAgICAgcGFkZGluZzogMXJlbTtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIH1cXG4gICAucGxhbi1ob2xkZXI6aG92ZXJ7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMjI5LCAyNCUsIDg3JSk7XFxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCBoc2woMjQzLCAxMDAlLCA2MiUpO1xcbiAgIH1cXG4gICAuYWJvdXQtcGxhbntcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAgICAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICAgfVxcbiAgIC5wbGFuLWRldGFpbCwgLmFib3V0LXBsYW57XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIGdhcDogMC4zcmVtO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICAgfVxcbiAgIC5wbGFuLW5hbWV7XFxuICAgICAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICAgICAgY29sb3I6IGhzbCgyMTMsIDk2JSwgMTglKTtcXG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICB9XFxuICAgLmljb24taG9sZGVye1xcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxLjVyZW07XFxuICAgfSBcXG4gICAudG9nZ2xlLWhvbGRlcntcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBnYXA6IDFyZW07XFxuICAgICAgICBtYXJnaW46IDFyZW07XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICBib3JkZXItcmFkaXVzOjVweCA7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOmhzbCgyMjksIDI0JSwgODclKTtcXG4gICAgICAgIHBhZGRpbmc6IDAuNXJlbTtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gICAgfVxcbiAgIC50b2dnbGV7XFxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgICB3aWR0aDogNTBweDtcXG4gICAgICAgIGhlaWdodDogMzBweDtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6aHNsKDIxMywgOTYlLCAxOCUpO1xcbiAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjVzO1xcbiAgICB9XFxuICAgLnRvZ2dsZTo6YWZ0ZXJ7XFxuICAgICAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIGhlaWdodDogMjBweDtcXG4gICAgICAgIHdpZHRoOiAyMHB4O1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICAgICAgdG9wOiA1cHg7XFxuICAgICAgICBsZWZ0OiAxcHg7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMCwgMCUsIDEwMCUpO1xcbiAgIH1cXG4gIC5jaGVja2JveDpjaGVja2VkICsgLnRvZ2dsZTo6YWZ0ZXJ7XFxuICAgICAgICBsZWZ0OiAyNXB4O1xcbiAgICAgfVxcbiAgICAuY2hlY2tib3h7XFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICB9XFxuICAgIC5uYXYtYnRuc3tcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgICAgICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XFxuICAgICAgICBtYXJnaW46IDFyZW07XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMCwgMCUsIDEwMCUpO1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgICAgICAgd2lkdGg6IDkwJTtcXG4gICAgICAgIHBhZGRpbmc6IDAuNnJlbTtcXG5cXG4gICAgIH1cXG4gICAgXFxuICAgIC50YWItdHdvLWJ0biwgLnRhYi10aHJlZS1idG4sIC50YWItZm91ci1idG4sIC50YWItZm91ci1jb25maXJtLWJ0biAsIC50YWItb25lLWJ0bntcXG4gICAgICAgIHBhZGRpbmc6IDFyZW07XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMjEzLCA5NiUsIDE4JSk7XFxuICAgICAgICBjb2xvcjogYXp1cmU7XFxuICAgICAgICBib3JkZXI6IG5vbmU7XFxuICAgICAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICAgIH1cXG4gICBcXG4gICAuYWJvdXQtYWRkc3tcXG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICBoc2woMjQzLCAxMDAlLCA2MiUpO1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMC40cmVtO1xcbiAgICAgICAgcGFkZGluZzogMC41cmVtO1xcbiAgICAgICAgbWFyZ2luOiAwLjVyZW07XFxuICAgICAgIH1cXG4gICAgLmFib3V0LWFkZHM6aG92ZXJ7XFxuICAgICAgICBib3gtc2hhZG93OiByZ2IoMjUxLCAwLCAwKSAtMXB4IDNweCAzcHg7XFxuICAgIH1cXG4gICAgLmFkZC1ob2xkZXIsLmFkZC1oZWFkZXJ7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgICAgIGdhcDoxcmVtO1xcbiAgICB9XFxuICAgIC5hZGQtdGl0bGV7XFxuICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgIH1cXG4gICAgLmFib3V0LXBsYW57XFxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xcbiAgICB9XFxuICAgIC5hZGQtdGl0bGUsLmFkZC1wbGFue1xcbiAgICAgICAgbWFyZ2luOiAwO1xcbiAgICB9XFxuICAgIC51c2VyLWFkZHtcXG4gICAgICAgIHdpZHRoOiAxcmVtO1xcbiAgICAgICAgaGVpZ2h0OiAxcmVtO1xcbiAgICAgICAgbWFyZ2luLXRvcDogMC41cmVtO1xcbiAgICB9XFxuICAgIC8qIHRhYiBmb3VyICovXFxuICAgIC50YWItZm91cntcXG4gICAgICAgIG1hcmdpbjogMS41cmVtO1xcbiAgICB9XFxuICAgIC5zdW1tYXJ5LXBsYW4sIC5hZGQtZGV0YWlsLCAuc3VtbWFyeS10b3RhbHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgICAgIHBhZGRpbmc6IDAuNXJlbTtcXG4gICAgICAgY29sb3I6aHNsKDIxMywgOTYlLCAxOCUpO1xcbiAgICAgICBcXG4gICAgfVxcbiAgICAuc3VtbWFyeS1zZXJ2aWNlc3tcXG4gICAgICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICAgIH1cXG4gICAuYWRkLWRldGFpbCA+IHB7XFxuICAgIG1hcmdpbjogMDtcXG4gICB9XFxuICAgIFxcbiAgICAuc2VsZWN0ZWQtcGxhbntcXG4gICAgICAgIG1hcmdpbjogMDtcXG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAwLjVyZW07XFxuXFxuICAgIH1cXG4gICAgLnN1bW1hcnktcHJpY2V7XFxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xcbiAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIH1cXG4gICAgLmNoYW5nZS1wbGFue1xcbiAgICAgICAgb3V0bGluZTogbm9uZTtcXG4gICAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICAgIHBhZGRpbmc6IDA7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgIFxcbiAgICB9XFxuICAgIC5jaGFuZ2UtcGxhbjpob3ZlcntcXG4gICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAgaHNsKDI0MywgMTAwJSwgNjIlKTtcXG4gICAgICAgIGNvbG9yOiBoc2woMjQzLCAxMDAlLCA2MiUpO1xcbiAgICB9XFxuICAgIC5hZGQtbmFtZSwgLmNoYW5nZS1wbGFue1xcbiAgICAgICAgY29sb3I6aHNsKDIzMSwgMTElLCA2MyUpIDsgXFxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICB9XFxuICAgIC5vbmxpbmUtcHJpY2UsIC50aGVtZS1wcmljZSwgLnN0b3JhZ2UtcHJpY2V7XFxuICAgICAgICBmb250LXNpemU6IDFyZW07XFxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICB9XFxuICAgIC50b3RhbC1wcmljZXtcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgfVxcbiAgICBcXG4gICAgaHJ7XFxuICAgICAgICBtYXJnaW46IDFyZW07XFxuICAgIH1cXG4gICAgLnNlcnZpY2UtaG9sZGVye1xcbiAgICAgICAgcGFkZGluZzogMC41cmVtO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDIyOSwgMjQlLCA4NyUpO1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgICAgICAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gICAgICAgIH1cXG4gICAgLmJhY2stYnRue1xcbiAgICAgICAgY29sb3I6aHNsKDIzMSwgMTElLCA2MyUpIDsgXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMjMxLCAxMDAlLCA5OSUpO1xcbiAgICAgICAgfVxcbiAgICAvKiBzdGVwIGZpdmUgdGFiKi9cXG4gICAgLnN0ZXAtZml2ZXtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIHBhZGRpbmc6IDFyZW07XFxuICAgICAgICBtYXJnaW4tdG9wOiAxNSU7XFxuICAgICAgICBcXG4gICAgfVxcbiAgICAuY29uZmlybS10ZXh0e1xcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB9XFxuQG1lZGlhIChtYXgtd2lkdGg6NTY1cHgpIHtcXG4gICAgLyogbmF2ICovXFxuICAgIGJvZHl7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGhzbCgyMDYsIDk0JSwgODclKTtcXG4gICAgICAgIH1cXG4gICAgbmF2e1xcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTp1cmwoLi9hc3NldHMvaW1hZ2VzL2JnLXNpZGViYXItbW9iaWxlLnN2ZykgO1xcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogdG9wO1xcbiAgICAgICAgaGVpZ2h0OiAzMHZoO1xcbiAgICAgICAgd2lkdGg6IDEwMHZ3O1xcbiAgICB9XFxuICAgIHVse1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgfVxcbiAgIC5uYXYtZGVzY3JpcHRpb257XFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICB9XFxuICAgIC8qIHN0ZXAgb25lICovXFxuICAgIC5zdGVwLW9uZXtcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIGJvdHRvbTogMTYlO1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgICAgICAgd2lkdGg6IDcwJTtcXG4gICAgICAgIG1heC1oZWlnaHQ6IDQ5MHB4O1xcbiAgICB9XFxuICAgIGlucHV0e1xcbiAgICAgICAgd2lkdGg6IDgwJTtcXG4gICAgfVxcbiAgICAuZXJyb3ItbXNne1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICB0ZXh0LWFsaWduOiBzdGFydDtcXG4gICAgfVxcbiAgICAuc3RlcC10d28sIC50YWItdGhyZWUsIC50YWItZm91ciwgLnN0ZXAtZml2ZXtcXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gICAgICAgIHdpZHRoOiA3MCU7XFxuICAgICAgIH1cXG4gICAgICAgLnN0ZXAtdHdve1xcbiAgICAgICAgYm90dG9tOiA2cmVtO1xcbiAgICAgICB9XFxuICAgICAgIC50YWItdGhyZWV7XFxuICAgICAgICBib3R0b206IDhyZW07XFxuICAgICAgIH1cXG4gICAgICAgLnRhYi1mb3Vye1xcbiAgICAgICAgYm90dG9tOiA2LjRyZW07XFxuICAgICAgICByaWdodDogMXJlbTtcXG4gICAgICAgfVxcbiAgICAgICAuc3RlcC1maXZle1xcbiAgICAgICAgYm90dG9tOiAxMHJlbTtcXG4gICAgICAgfVxcbiAgICAgICBcXG4gICAgLmFkZC1oZWFkZXJ7XFxuICAgICAgICBnYXA6IDAuM3JlbTtcXG4gICAgfVxcbiAgICAvKiBzdGVwIHRocmVlICovXFxuICAgIFxcbiAgICAuYWJvdXQtYWRkc3tcXG4gICAgICAgcGFkZGluZzogMC41cmVtO1xcbiAgICAgICBtYXJnaW46IDA7XFxuICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XFxuICAgICAgIFxcbiAgICB9XFxuICAgIFxcbiAgICAuYWRkLXRpdGxle1xcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgfVxcbiAgICAuYWRkLXBsYW57XFxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xcbiAgICAgICAgZm9udC1zaXplOiAwLjdyZW07XFxuICAgICAgICB9XFxuICAgXFxuICAgIC8qIHN0ZXAgdHdvIGNhcmRzICovXFxuICAgIC5wbGFuc3tcXG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgICAgIGdhcDogMC41cmVtO1xcbiAgICB9XFxuICAgIC5lcnJvci1jYXJke1xcbiAgICAgICAgbWFyZ2luOiAwO1xcbiAgICAgICAgcGFkZGluZzogMDtcXG4gICAgfVxcbiAgICAucGxhbi1mZWV7XFxuICAgICAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICAgICAgZm9udC1zaXplOiAwLjdyZW07XFxuICAgIH1cXG4gXFxuLm5hdi1idG5ze1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAyOHJlbTtcXG4gICAgcmlnaHQ6IDAuMXJlbTtcXG59XFxuLmJ0bi1ob2xkZXJ7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgdG9wOiAycmVtO1xcbiAgICBsZWZ0OiAzNSU7XFxufVxcblxcbi50YWItZm91ciA+IC5uYXYtYnRuc3tcXG4gICAgdG9wOiAyOHJlbTtcXG59XFxuLnNlcnZpY2UtaG9sZGVye1xcbiAgICBoZWlnaHQ6IDI3MHB4O1xcbn1cXG5cXG4gICAgLnBsYW4taG9sZGVye1xcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgaGVpZ2h0OiA4NHB4O1xcbiAgICAgICAgcGFkZGluZzogNXB4O1xcbiAgICB9XFxuICAgIC5hYm91dC1wbGFuIHtcXG4gICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBnYXA6IDAuNXJlbTtcXG4gICAgfVxcbiAgICAudG9nZ2xlLWhvbGRlcntcXG4gICAgICAgIG1hcmdpbjogMDtcXG4gICAgICAgIG1hcmdpbi10b3A6IDNweDtcXG4gICAgfVxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIGNsYXNzIHRvIGhvbGQgaW5mb1xuaW1wb3J0IGFyY2FkZWljb24gZnJvbSBcIi4vYXNzZXRzL2ltYWdlcy9pY29uLWFyY2FkZS5zdmdcIjtcbmltcG9ydCBwcm9pY29uIGZyb20gXCIuL2Fzc2V0cy9pbWFnZXMvaWNvbi1wcm8uc3ZnXCI7XG5pbXBvcnQgYWR2YW5jZWRpY29uIGZyb20gXCIuL2Fzc2V0cy9pbWFnZXMvaWNvbi1hZHZhbmNlZC5zdmdcIjtcbmltcG9ydCBjb25maXJtaWNvbiBmcm9tIFwiLi9hc3NldHMvaW1hZ2VzL2ljb24tdGhhbmsteW91LnN2Z1wiO1xuZXhwb3J0IGNsYXNzIFVzZXJQZXJzb25hbEluZm8ge1xuICBjb25zdHJ1Y3RvcihvcHRpb25zID0ge30pIHtcbiAgICB0aGlzLm5hbWUgPSBvcHRpb25zLm5hbWUgfHwgXCJcIjtcbiAgICB0aGlzLmVtYWlsID0gb3B0aW9ucy5lbWFpbCB8fCBcIlwiO1xuICAgIHRoaXMucGhvbmUgPSBvcHRpb25zLnBob25lIHx8IFwiXCI7XG4gIH1cbn1cbmV4cG9ydCBjbGFzcyBVc2VyUGxhbkRhdGEge1xuICBjb25zdHJ1Y3RvcihvcHRpb25zID0ge30pIHtcbiAgICB0aGlzLnBsYW4gPSBvcHRpb25zLnBsYW4gfHwgZmFsc2U7XG4gICAgLy8gY2hlY2tib3hcbiAgICB0aGlzLmNoZWNrYm94ID0gb3B0aW9ucy5jaGVja2JveCB8fCBcIlwiO1xuICAgIHRoaXMuYXJjYWRlID0gb3B0aW9ucy5hcmNhZGUgfHwgXCJcIjtcbiAgICB0aGlzLmFkdmFuY2VkID0gb3B0aW9ucy5hZHZhbmNlZCB8fCBcIlwiO1xuICAgIHRoaXMucHJvID0gb3B0aW9ucy5wcm8gfHwgXCJcIjtcbiAgICB0aGlzLmJvbnVzID0gb3B0aW9ucy5ib251cyB8fCBcIm5vbmVcIjtcbiAgICB0aGlzLnNlbGVjdGVkUGxhbiA9IG9wdGlvbnMuc2VsZWN0ZWRQbGFuIHx8IFwiXCI7XG4gICAgdGhpcy5tb25odGx5ID0gb3B0aW9ucy5tb250aGx5IHx8IFwiXCI7XG4gICAgdGhpcy55ZWFybHkgPSBvcHRpb25zLnllYXJseSB8fCBcIlwiO1xuICB9XG5cbiAgeWVhcmx5UHJpY2UoKSB7XG4gICAgdGhpcy5hcmNhZGUgPSBcIiQ5MC95clwiO1xuICAgIHRoaXMuYWR2YW5jZWQgPSBcIiQxMjAveXJcIjtcbiAgICB0aGlzLnBybyA9IFwiJDE1MC95clwiO1xuICB9XG5cbiAgbW9udGhseVByaWNlKCkge1xuICAgIHRoaXMuYXJjYWRlID0gXCIkOS9tb1wiO1xuICAgIHRoaXMuYWR2YW5jZWQgPSBcIiQxMi9tb1wiO1xuICAgIHRoaXMucHJvID0gXCIkMTUvbW9cIjtcbiAgfVxuXG4gIGNob29zZW5QbGFuKCkge1xuICAgIGlmICh0aGlzLnBsYW4gPT09IHRydWUpIHtcbiAgICAgIHRoaXMueWVhcmx5UHJpY2UoKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMucGxhbiA9PT0gZmFsc2UpIHtcbiAgICAgIHRoaXMubW9udGhseVByaWNlKCk7XG4gICAgfVxuICB9XG5cbiAgc3R5bGUoKSB7XG4gICAgaWYgKHRoaXMucGxhbiA9PT0gZmFsc2UpIHtcbiAgICAgIHRoaXMubW9udGhseSA9IFwiaHNsKDIxMywgOTYlLCAxOCVcIjtcbiAgICAgIHRoaXMueWVhcmx5ID0gXCJoc2woMjMxLCAxMSUsIDYzJSlcIjtcbiAgICB9IGVsc2UgaWYgKHRoaXMucGxhbiA9PT0gdHJ1ZSkge1xuICAgICAgdGhpcy5tb250aGx5ID0gXCJoc2woMjEzLCA5NiUsIDE4JVwiO1xuICAgICAgdGhpcy55ZWFybHkgPSBcImhzbCgyMzEsIDExJSwgNjMlKVwiO1xuICAgIH1cbiAgfVxufVxuZXhwb3J0IGNsYXNzIFVzZXJTZXJ2aWNlcyB7XG4gIGNvbnN0cnVjdG9yKG9wdGlvbnMgPSB7fSkge1xuICAgIC8vIGdldCBwbGFuIGlmIG1lb250aGx5IG9yIHllYXJseSh0cnVlIGlzIG1vbnRobHkgc2V0IGluIHN0ZXAgMiBvciB1c2VyZGF0YSBvYmopXG4gICAgdGhpcy5hZGRQbGFuID0gb3B0aW9ucy5hZGRQbGFuIHx8IGZhbHNlO1xuICAgIC8vXG5cbiAgICAvLyBjaGVja2JveCB2YWx1ZVxuICAgIHRoaXMub25saW5lID0gb3B0aW9ucy5vbmxpbmUgfHwgXCJcIjtcbiAgICB0aGlzLnN0b3JhZ2UgPSBvcHRpb25zLnN0b3JhZ2UgfHwgXCJcIjtcbiAgICB0aGlzLnRoZW1lID0gb3B0aW9ucy50aGVtZSB8fCBcIlwiO1xuICAgIC8vIHByaWNlXG4gICAgdGhpcy5vbmxpbmVQcmljZSA9IG9wdGlvbnMub25saW5lUHJpY2UgfHwgXCJcIjtcbiAgICB0aGlzLnN0b3JhZ2VQcmljZSA9IG9wdGlvbnMub25saW5lUHJpY2UgfHwgXCJcIjtcbiAgICB0aGlzLnRoZW1lUHJpY2UgPSBvcHRpb25zLm9ubGluZVByaWNlIHx8IFwiXCI7XG4gIH1cblxuICB5ZWFybHlQcmljZSgpIHtcbiAgICB0aGlzLm9ubGluZVByaWNlID0gXCIrJDEwL3lyXCI7XG4gICAgdGhpcy5zdG9yYWdlUHJpY2UgPSBcIiskMjAveXJcIjtcbiAgICB0aGlzLnRoZW1lUHJpY2UgPSBcIiskMjAveXJcIjtcbiAgfVxuXG4gIG1vbnRobHlQcmljZSgpIHtcbiAgICB0aGlzLm9ubGluZVByaWNlID0gXCIrJDEvbW9cIjtcbiAgICB0aGlzLnN0b3JhZ2VQcmljZSA9IFwiKyQyL21vXCI7XG4gICAgdGhpcy50aGVtZVByaWNlID0gXCIrJDIvbW9cIjtcbiAgfVxuXG4gIGNob29zZW5QbGFuKCkge1xuICAgIGlmICh0aGlzLmFkZFBsYW4gPT09IHRydWUpIHtcbiAgICAgIHRoaXMueWVhcmx5UHJpY2UoKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuYWRkUGxhbiA9PT0gZmFsc2UpIHtcbiAgICAgIHRoaXMubW9udGhseVByaWNlKCk7XG4gICAgfVxuICB9XG59XG5cbmNvbnN0IHRhYk9uZSA9IGZ1bmN0aW9uIChvYmopIHtcbiAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgcGVyc29uYWxJbmZvID0gYCBcbiAgICA8ZGl2IGNsYXNzPVwic3RlcC1vbmVcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0taGVhZGVyXCI+XG4gICAgICAgICAgIDxoMT5QZXJzb25hbCBJbmZvPC9oMT5cbiAgICAgICAgICAgIDxwIGNsYXNzPVwiaW5zdHJ1Y3Rpb25cIj5wbGVhc2UgcHJvdmlkZSB5b3VyIG5hbWUsZW1haWwgYWRyZXNzIGFuZCBwaG9uZSBudW1iZXI8L3A+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWhvbGRlclwiPlxuICAgICAgICAgICAgPGZvcm0gY2xhc3M9XCJwZXJzb25hbC1pbmZvLWZvcm1cIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGFiZWwtaG9sZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJ1c2VyLW5hbWVcIj5OYW1lPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJlcnJvci1tc2dcIiBkYXRhLWVycm9yLW1zZz0wPjwvcD5cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwidXNlci1uYW1lXCIgbmFtZT1cInVzZXItbmFtZVwiIGNsYXNzPSd1c2VyLWluZm8nIGRhdGEtdXNlci1uYW1lIGRhdGEtZXJyb3I9MCBtaW5sZW5ndGg9XCIyXCJcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICBtYXhsZW5ndGg9XCIyMFwiICB2YWx1ZT1cIiR7b2JqLm5hbWV9XCI+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxhYmVsLWhvbGRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwidXNlci1lbWFpbFwiPkVtYWlsIEFkcmVzczwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImVycm9yLW1zZ1wiICBkYXRhLWVycm9yLW1zZz0xPjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImVtYWlsXCIgaWQ9XCJ1c2VyLWVtYWlsXCIgbmFtZT1cInVzZXItZW1haWxcIiBjbGFzcz0ndXNlci1pbmZvJyBkYXRhLXVzZXItZW1haWwgZGF0YS1lcnJvcj0xICB2YWx1ZT1cIiR7b2JqLmVtYWlsfVwiPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxhYmVsLWhvbGRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwidXNlci1waG9uZVwiPlBob25lIE51bWJlcjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiZXJyb3ItbXNnXCIgIGRhdGEtZXJyb3ItbXNnPTI+PC9wPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgIGlkPVwidXNlci1waG9uZVwiIG5hbWU9XCJ1c2VyLXBob25lXCIgY2xhc3M9J3VzZXItaW5mbycgZGF0YS11c2VyLXBob25lIGRhdGEtZXJyb3I9MiAgbWlubGVuZ3RoPVwiMTBcIiBtYXhsZW5ndGg9XCIxNVxuICAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCIke29iai5waG9uZX1cIj5cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICBcbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJidG4taG9sZGVyXCI+PGJ1dHRvbiBjbGFzcz1cInRhYi1vbmUtYnRuXCI+TmV4dCBTdGVwPC9idXR0b24+PC9kaXY+XG4gICAgPC9kaXY+YDtcbiAgZGl2LmlubmVySFRNTCA9IHBlcnNvbmFsSW5mbztcbiAgcmV0dXJuIGRpdjtcbn07XG5jb25zdCB0YWJUd28gPSBmdW5jdGlvbiAob2JqKSB7XG4gIG9iai5jaG9vc2VuUGxhbigpO1xuICBvYmouc3R5bGUoKTtcbiAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgcGxhbiA9IGBcbiAgICA8ZGl2IGNsYXNzPVwic3RlcC10d29cIj5cbiAgICA8ZGl2IGNsYXNzPVwicGxhbi1oZWFkZXJcIj5cbiAgICAgICAgPGgxPlNlbGVjdCB5b3VyIFBsYW48L2gxPlxuICAgICAgICA8cCBjbGFzcz1cImluc3RydWN0aW9uXCI+eW91IGhhdmUgdGhlIG9wdGlvbiBtb250aGx5IG9yIHllYXJseSBiaWxsaW5nLjwvcD5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwicGxhbnNcIiBkYXRhLXBsYW5zID5cbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInBsYW4taG9sZGVyXCIgZGF0YS1wbGFuPVwiMFwiPlxuICAgICAgICBcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhYm91dC1wbGFuXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImljb24taG9sZGVyXCI+PGltZyBzcmM9XCIke2FyY2FkZWljb259XCIgYWx0PVwiaWNvbiBmb3IgYXJjYWRlIHBsYW5cIiA+PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBsYW4tZGV0YWlsXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGxhbi1uYW1lXCI+QXJjYWRlPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGxhbi1mZWVcIj4ke29iai5hcmNhZGV9PC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGxhbi1kZXNjcmlwdGlvblwiIGRhdGEtZ2lmdCBzdHlsZT0nZGlzcGxheToke29iai5ib251c307Jz4yIG1vbnRocyBmcmVlPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJwbGFuLWhvbGRlclwiIGRhdGEtcGxhbj1cIjFcIj5cbiAgICAgICAgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYWJvdXQtcGxhblwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpY29uLWhvbGRlclwiPjxpbWcgc3JjPVwiJHthZHZhbmNlZGljb259XCIgYWx0PVwiaWNvbiBmb3IgYWR2YW5jZWQgcGxhblwiID48L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGxhbi1kZXRhaWxcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwbGFuLW5hbWVcIj5BZHZhbmNlZDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBsYW4tZmVlXCI+JHtvYmouYWR2YW5jZWR9PC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGxhbi1kZXNjcmlwdGlvblwiIGRhdGEtZ2lmdCBzdHlsZT0nZGlzcGxheToke29iai5ib251c307Jz4yIG1vbnRocyBmcmVlPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJwbGFuLWhvbGRlclwiICBkYXRhLXBsYW49XCIyXCI+XG4gICAgICAgIFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImFib3V0LXBsYW5cIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaWNvbi1ob2xkZXJcIj48aW1nIHNyYz0gXCIke3Byb2ljb259XCIgYWx0PVwiaWNvbiBmb3IgcHJvIHBsYW5cIiA+PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBsYW4tZGV0YWlsXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGxhbi1uYW1lXCI+UHJvPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGxhbi1mZWVcIj4ke29iai5wcm99PC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGxhbi1kZXNjcmlwdGlvblwiIGRhdGEtZ2lmdCBzdHlsZT0nZGlzcGxheToke29iai5ib251c307JyA+MiBtb250aHMgZnJlZTwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgXG4gICAgICA8L2Rpdj5cbiAgIDxwIGNsYXNzPVwiZXJyb3ItY2FyZFwiIGRhdGEtc2VsZWN0LXBsYW4gID48L3A+XG4gICA8ZGl2IGNsYXNzPVwidG9nZ2xlLWhvbGRlclwiPlxuICAgICAgICA8ZGl2IGRhdGEtbW9udGhseSBzdHlsZT1cImNvbG9yOiR7b2JqLm1vbnRobHl9O1wiPm1vbnRobHk8L2Rpdj5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJ1c2VyLXBsYW5cIiBpZD1cInVzZXItcGxhblwiIGNsYXNzPVwiY2hlY2tib3hcIiBkYXRhLWNob29zZS1wbGFuICAke29iai5jaGVja2JveH0+XG4gICAgICAgIDxsYWJlbCBmb3I9XCJ1c2VyLXBsYW5cIiBjbGFzcz1cInRvZ2dsZVwiPiA8L2xhYmVsPlxuICAgICAgICA8ZGl2IGRhdGEteWVhcmx5IHN0eWxlPVwiY29sb3I6JHtvYmoueWVhcmx5fTtcIj55ZWFybHk8L2Rpdj5cbiAgICA8L2Rpdj5cbjxkaXYgY2xhc3M9XCJuYXYtYnRuc1wiPlxuICAgIDxidXR0b24gY2xhc3M9XCJ0YWItdHdvLWJ0biBiYWNrLWJ0blwiICBkYXRhLXRhYi10d28tYmFjay1idG4+R28gQmFjazwvYnV0dG9uPlxuICAgIDxidXR0b24gY2xhc3M9XCJ0YWItdHdvLWJ0blwiIGRhdGEtdGFiLXR3by1uZXh0LWJ0bj5OZXh0IFN0ZXA8L2J1dHRvbj5cbjwvZGl2PlxuICAgPC9kaXY+XG4gICAgYDtcbiAgZGl2LmlubmVySFRNTCA9IHBsYW47XG4gIHJldHVybiBkaXY7XG59O1xuY29uc3QgdGFiVGhyZWUgPSBmdW5jdGlvbiAob2JqKSB7XG4gIG9iai5jaG9vc2VuUGxhbigpO1xuICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBzdG9yYWdlID0gYFxuICAgIDxkaXYgY2xhc3M9XCJ0YWItdGhyZWVcIj5cbiAgICA8ZGl2PlxuICAgICAgICA8aDE+UGljayBhZGQtb25zPC9oMT5cbiAgICAgICAgPHAgY2xhc3M9XCJpbnN0cnVjdGlvblwiPkFkZC1vbnMgZW5oYW5jZSB5b3VyIGdhbWluZyBleHBlcmllbmNlLjwvcD5cbiAgICA8L2Rpdj5cbiAgICAgICA8ZGl2IGNsYXNzPVwiYWJvdXQtYWRkc1wiPlxuICAgICAgIFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImFkZC1ob2xkZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYWRkLWhlYWRlclwiPlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwidXNlci1hZGRcIiBpZD1cImFkZC1vbnNcIiBjbGFzcz1cInVzZXItYWRkXCIgZGF0YS1hZGRzPVwiMFwiICR7b2JqLm9ubGluZX0+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzPVwiYWRkLXRpdGxlXCI+b25saW5lIHNlcnZpY2VzPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJhZGQtcGxhblwiPkFjY2VzcyB0byBtdWx0aXBsYXllciBnYW1lczwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXY+JHtvYmoub25saW5lUHJpY2V9PC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICA8ZGl2IGNsYXNzPVwiYWJvdXQtYWRkc1wiPlxuICAgICAgIFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImFkZC1ob2xkZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYWRkLWhlYWRlclwiPlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwidXNlci1hZGRcIiBpZD1cImFkZC1zdG9yYWdlXCIgY2xhc3M9XCJ1c2VyLWFkZFwiIGRhdGEtYWRkcz1cIjFcIiAke29iai5zdG9yYWdlfT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3M9XCJhZGQtdGl0bGVcIj5MYXJnZSBzdG9yYWdlPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJhZGQtcGxhblwiPkV4dHJhIDFUQiBjbG91ZCBzYXZlPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdj4ke29iai5zdG9yYWdlUHJpY2V9PC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJhYm91dC1hZGRzXCI+XG4gICAgICAgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYWRkLWhvbGRlclwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhZGQtaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJ1c2VyLWFkZFwiIGlkPVwiYWRkLXRoZW1lXCIgY2xhc3M9XCJ1c2VyLWFkZFwiIGRhdGEtYWRkcz1cIjJcIiAke29iai50aGVtZX0+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzPVwiYWRkLXRpdGxlXCI+Q3VzdG9taXphYmxlIHByb2ZpbGU8L2gyPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImFkZC1wbGFuXCI+Q3VzdG9tIHRoZW1lIG9uIHlvdXIgcHJvZmlsZTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXY+JHtvYmoudGhlbWVQcmljZX08L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgIDwvZGl2PlxuICAgICAgIDxkaXYgY2xhc3M9XCJuYXYtYnRuc1wiPlxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwidGFiLXRocmVlLWJ0biBiYWNrLWJ0blwiICBkYXRhLXRhYi10aHJlZS1iYWNrLWJ0biA+R28gQmFjazwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwidGFiLXRocmVlLWJ0blwiIGRhdGEtdGFiLXRocmVlLW5leHQtYnRuID5OZXh0IFN0ZXA8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgIDwvZGl2PlxuICAgIGA7XG4gIGRpdi5pbm5lckhUTUwgPSBzdG9yYWdlO1xuICByZXR1cm4gZGl2O1xufTtcbmNvbnN0IHRhYkZvdXIgPSBmdW5jdGlvbiAob2JqT25lLCBvYmpUd28pIHtcbiAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3Qgc3VtbWFyeSA9IGBcbiAgICA8ZGl2IGNsYXNzPVwidGFiLWZvdXJcIj5cbiAgICA8ZGl2IGNsYXNzPVwiY29uZmlybS1oZWFkZXJcIj5cbiAgICAgICAgPGgxPkZpbmlzaGluZyB1cDwvaDE+XG4gICAgICAgIDxwIGNsYXNzPVwiaW5zdHJ1Y3Rpb25cIj5Eb3VibGUtY2hlY2sgZXZlcnl0aGluZyBsb29rcyBPSyBiZWZvcmUgY29uZmlybWluZy48L3A+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cInNlcnZpY2UtaG9sZGVyXCI+XG4gICAgPGRpdiBjbGFzcz1cInN1bW1hcnktcGxhblwiPlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJwbGFuXCI+XG4gICAgICAgICAgICA8aDIgY2xhc3M9XCJzZWxlY3RlZC1wbGFuXCI+JHtzdW1tYXJ5UGxhbihvYmpPbmUpLnBsYW5OYW1lfSgke3N1bW1hcnlQbGFuKG9iak9uZSkucGxhbn0pPC9oMj5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJjaGFuZ2UtcGxhblwiPkNoYW5nZTwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInN1bW1hcnktcHJpY2VcIj4ke3N1bW1hcnlQbGFuKG9iak9uZSkucHJpY2V9PC9kaXY+XG4gICAgICAgXG4gICAgIDwvZGl2PlxuICAgICAgIDxocj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInN1bW1hcnktc2VydmljZXNcIj5cblxuICAgICAgICAgICAgXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhZGQtZGV0YWlsXCI+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJhZGQtbmFtZVwiPiAke3N1bW1hcnlBZGRzKG9ialR3bykuZmlyc3RBZGR9IDwvcD5cbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cIm9ubGluZS1wcmljZVwiPiR7c3VtbWFyeUFkZHMob2JqVHdvKS5vbmxpbmVQcmljZX08L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYWRkLWRldGFpbFwiPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiYWRkLW5hbWVcIj4gJHtzdW1tYXJ5QWRkcyhvYmpUd28pLnNlY29uZEFkZH0gPC9wPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwic3RvcmFnZS1wcmljZVwiPiR7c3VtbWFyeUFkZHMob2JqVHdvKS5zdG9yYWdlUHJpY2V9PC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImFkZC1kZXRhaWxcIj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImFkZC1uYW1lXCI+ICR7c3VtbWFyeUFkZHMob2JqVHdvKS50aGlyZEFkZH0gPC9wPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwidGhlbWUtcHJpY2VcIj4ke3N1bW1hcnlBZGRzKG9ialR3bykudGhlbWVQcmljZX08L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInN1bW1hcnktdG90YWxcIj5cbiAgICAgICAgICAgIDxwIGNsYXNzPVwidG90YWwtdGl0bGVcIj5Ub3RhbCBwZXIgeWVhcjwvcD5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidG90YWwtcHJpY2VcIj4ke3RvdGFsUHJpY2Uob2JqT25lLCBvYmpUd28pfTwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJuYXYtYnRuc1wiPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInRhYi1mb3VyLWJ0biBiYWNrLWJ0blwiIGRhdGEtdGFiLWZvdXItYmFjay1idG4+R28gQmFjazwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInRhYi1mb3VyLWNvbmZpcm0tYnRuXCIgZGF0YS10YWItZm91ci1jb25maXJtLWJ0bj5Db25maXJtPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuIDwvZGl2PmA7XG4gIGRpdi5pbm5lckhUTUwgPSBzdW1tYXJ5O1xuICByZXR1cm4gZGl2O1xufTtcbmNvbnN0IHRhYkZpdmUgPSBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGNvbmZpcm0gPSBgXG4gICAgIDxkaXYgY2xhc3M9XCJzdGVwLWZpdmVcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJpY29uLWhvbGRlclwiPjxpbWcgc3JjPVwiJHtjb25maXJtaWNvbn1cIiBhbHQ9XCJpY29uIHRvIGNvbmZpcm0gc3Vic2NyaXB0aW9uXCI+PC9kaXY+XG4gICAgICA8ZGl2PlxuICAgICAgICA8aDE+VGhhbmsgeW91ITwvaDE+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxwIGNsYXNzPVwiY29uZmlybS10ZXh0XCI+XG4gICAgICAgICAgVGhhbmtzIGZvciBjb21maXJtaW5nIHlvdXIgc3Vic2NyaXB0aW9uISBXZSBob3BlIHlvdSBoYXZlIGZ1biB1c2luZyBvdXIgcGxhdGZvcm0uXG4gICAgICAgICAgaWYgeW91IGV2ZXIgbmVlZCBzdXBwb3J0LnBsZWFzZSBmZWVsIGZyZWUgdG8gZW1haWwgdXMgYXQgc3VwcG9ydEBsb3JlbWdhbWluZy5jb20uXG4gICAgICAgIDwvcD5cbiAgICAgIDwvZGl2PlxuICAgPC9kaXY+YDtcbiAgZGl2LmlubmVySFRNTCA9IGNvbmZpcm07XG4gIHJldHVybiBkaXY7XG59O1xuZXhwb3J0IGNvbnN0IGZ1bmN0aW9ucyA9IHtcbiAgc3RlcE9uZTogdGFiT25lLFxuICBzdGVwVHdvOiB0YWJUd28sXG4gIHN0ZXBUaHJlZTogdGFiVGhyZWUsXG4gIHN0ZXBGb3VyOiB0YWJGb3VyLFxuICBzdGVwRml2ZTogdGFiRml2ZSxcbn07XG4vKipcbiAqIGZ1bmN0aW9uIHRoYXQgYWNjZXB0IG5vZGVsaXN0IGFuZCBjaGFuZ2UgcHJpY2UgYWNjb3JkaW5nIHRvIHNlbGVjdGVkIHBsYW4obXBudGhseSBvciB5ZWFybHkpXG4gKiBAcGFyYW0geyp9IGFycmFyeSBub2RlbGlzdCBvZiBlbGVtZW50XG4gKiBAcGFyYW0geyp9IG9iamVjdCB0aGF0IHN0b3JlIHByaWNlIChjaG9vc2VucGxhbiBwcm9wZXJ0eSAgZ2V0IG1vbnRobHkgb3IgeWVhcmx5IHByaWNlIGZvciBlYWNoIHBsYW5zKVxuICovXG5leHBvcnQgZnVuY3Rpb24gY2hhbmdlUHJpY2UoYXJyLCBvYmopIHtcbiAgb2JqLmNob29zZW5QbGFuKCk7XG4gIGFyci5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgaWYgKGFyci5pbmRleE9mKGVsZW1lbnQpID09PSAwKSB7XG4gICAgICBlbGVtZW50LnRleHRDb250ZW50ID0gb2JqLmFyY2FkZTtcbiAgICB9IGVsc2UgaWYgKGFyci5pbmRleE9mKGVsZW1lbnQpID09PSAxKSB7XG4gICAgICBlbGVtZW50LnRleHRDb250ZW50ID0gb2JqLmFkdmFuY2VkO1xuICAgIH0gZWxzZSBpZiAoYXJyLmluZGV4T2YoZWxlbWVudCkgPT09IDIpIHtcbiAgICAgIGVsZW1lbnQudGV4dENvbnRlbnQgPSBvYmoucHJvO1xuICAgIH1cbiAgfSk7XG59XG4vKlxuICpmdW5jdGlvbiB0aGF0IGdpdmUgZGlmZXJlbnQgYm9yZGVyIHN0eWxlIGZvciB0aGUgZ2l2ZW4gZG9tIGVsZW1lbnRcbiAqcGFyYW0gMTphcnJheSB0byBhY2NlcHQobm9kZWxpc3QpXG4gKnBhcm0gMjpkb20gZWxlbWVudFxuICovXG5leHBvcnQgZnVuY3Rpb24gYWRkRXZlbnRzKGFyciwgZG9tRWxlbWVudCkge1xuICBhcnIuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgIGVsZW1lbnQgPT09IGRvbUVsZW1lbnRcbiAgICAgID8gKGVsZW1lbnQuc3R5bGUuYm9yZGVyID0gXCIycHggc29saWQgaHNsKDI0MywgMTAwJSwgNjIlKVwiKVxuICAgICAgOiAoZWxlbWVudC5zdHlsZS5ib3JkZXIgPSBcIjFweCBzb2xpZCAgaHNsKDIxMywgOTYlLCAxOCUpXCIpO1xuICB9KTtcbn1cbi8vIHNhdmUgc3RhdGUgb2Ygc2VsZWN0ZWQgcGxhbiBib3JkZXIgc3R5bGUgYWZ0ZXIgYXBwcGVuZCBlbG1lbnQgdXNpbmcgaW5kZXggbnVtYmVyIGZyb20gKHVzZXJkYXRhLnNlbGVjdGVkcGxhbilcbmV4cG9ydCBmdW5jdGlvbiBzZWxlY3RlZENhcmQoaW5kZXgpIHtcbiAgY29uc3QgcGxhbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXBsYW49XCIke2luZGV4fVwiXWApO1xuICBpZiAocGxhbiA9PT0gbnVsbCkgcmV0dXJuO1xuICBwbGFuLnN0eWxlLmJvcmRlciA9IFwiMnB4IHNvbGlkIGJsdWVcIjtcbn1cbi8qKlxuICogZnVuY3Rpb24gdG8gY2hlY2sgd2hpY2ggYWRkcyBpcyBzZWxlY3RlZCBvciBub3RcbiAqIEBwYXJhbSB7Kn0gaW5kZXhcbiAqIEBwYXJhbSB7Kn0gZG9tRWxlbWVudFxuICogQHBhcmFtIHsqfSBvYmpcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzQ2hlY2tlZChpbmRleCwgZG9tRWxlbWVudCwgb2JqKSB7XG4gIGlmIChpbmRleCA9PT0gMCAmJiBkb21FbGVtZW50LmNoZWNrZWQgPT09IHRydWUpIHtcbiAgICBvYmoub25saW5lID0gXCJjaGVja2VkXCI7XG4gIH0gZWxzZSBpZiAoaW5kZXggPT09IDEgJiYgZG9tRWxlbWVudC5jaGVja2VkID09PSB0cnVlKSB7XG4gICAgb2JqLnN0b3JhZ2UgPSBcImNoZWNrZWRcIjtcbiAgfSBlbHNlIGlmIChpbmRleCA9PT0gMiAmJiBkb21FbGVtZW50LmNoZWNrZWQgPT09IHRydWUpIHtcbiAgICBvYmoudGhlbWUgPSBcImNoZWNrZWRcIjtcbiAgfSBlbHNlIGlmIChpbmRleCA9PT0gMCAmJiBkb21FbGVtZW50LmNoZWNrZWQgPT09IGZhbHNlKSB7XG4gICAgb2JqLm9ubGluZSA9IFwiXCI7XG4gIH0gZWxzZSBpZiAoaW5kZXggPT09IDEgJiYgZG9tRWxlbWVudC5jaGVja2VkID09PSBmYWxzZSkge1xuICAgIG9iai5zdG9yYWdlID0gXCJcIjtcbiAgfSBlbHNlIGlmIChpbmRleCA9PT0gMiAmJiBkb21FbGVtZW50LmNoZWNrZWQgPT09IGZhbHNlKSB7XG4gICAgb2JqLnRoZW1lID0gXCJcIjtcbiAgfVxufVxuLy8gc3RlcCBmb3VyIHN1bW1hcnlcbi8vIHVzZXJkYXRhIG9ialxuLypcbiAqZnVuY3Rpb24gdGhhdCBhY2NlcHQgb2JqZWN0IGNoZWNrIHNlbGVjdGVkIHBsYW4gdXNpbmcgdGhlcmUgaW5kZXggbnVtYmVyIGFuZCByZXR1cm4gbmFtZSBhbmQgcHJpY2VcbiAqcGFyYW0gMTpvYmplY3QgdGhhdCBzdG9yZSBzZWxlY3RlZCBpdGVtIGFzIG51bWJlcigwLDEsMilcbiAqcmV0dXJuIHN0cmluZyAocGxhbiBuYW1lICkgYW5kIG51bWJlciAoaXQncyBwcmljZSlcbiAqL1xuZnVuY3Rpb24gc3VtbWFyeVBsYW4ob2JqKSB7XG4gIGxldCBwbGFuTmFtZSwgcGxhbiwgcHJpY2U7XG5cbiAgaWYgKG9iai5zZWxlY3RlZFBsYW4gPT09IDApIHtcbiAgICBwbGFuTmFtZSA9IFwiQXJjYWRlXCI7XG4gICAgcHJpY2UgPSBvYmouYXJjYWRlO1xuICB9IGVsc2UgaWYgKG9iai5zZWxlY3RlZFBsYW4gPT09IDEpIHtcbiAgICBwbGFuTmFtZSA9IFwiQWR2YW5jZWRcIjtcbiAgICBwcmljZSA9IG9iai5hZHZhbmNlZDtcbiAgfSBlbHNlIGlmIChvYmouc2VsZWN0ZWRQbGFuID09PSAyKSB7XG4gICAgcGxhbk5hbWUgPSBcIlByb1wiO1xuICAgIHByaWNlID0gb2JqLnBybztcbiAgfVxuICBpZiAob2JqLmNoZWNrYm94ID09PSBcImNoZWNrZWRcIikge1xuICAgIHBsYW4gPSBcInllYXJseVwiO1xuICB9XG4gIGlmIChvYmouY2hlY2tib3ggPT09IFwiXCIpIHtcbiAgICBwbGFuID0gXCJtb250aGx5XCI7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHBsYW5OYW1lLFxuICAgIHBsYW4sXG4gICAgcHJpY2UsXG4gIH07XG59XG5cbi8qXG4gKmZ1bmN0aW9uIHRoYXQgYWNjZXB0IG9iamVjdCBhbmQgZ2l2ZSBzZWxlY3RlZCBhZGRzIG5hbWUgYW5kIHRoZXJlIHByaWNlc1xuICpwYXJhbSAxIDpvYmplY3RcbiAqcmV0dXJuIG5hbWUgb2YgYWRkKHN0cmluZykgYW5kIHByaWNlIGFzIGFuIGFycmF5XG4gKi9cbmZ1bmN0aW9uIHN1bW1hcnlBZGRzKG9iaikge1xuICBsZXQgZmlyc3RBZGQsIHNlY29uZEFkZCwgdGhpcmRBZGQsIG9ubGluZVByaWNlLCBzdG9yYWdlUHJpY2UsIHRoZW1lUHJpY2U7XG4gIGNvbnN0IHNlbGVjdGVkUHJpY2UgPSBbXTtcbiAgaWYgKG9iai5vbmxpbmUgPT09IFwiY2hlY2tlZFwiKSB7XG4gICAgZmlyc3RBZGQgPSBcIk9ubGluZSBzZXJ2aWNlXCI7XG4gICAgb25saW5lUHJpY2UgPSBvYmoub25saW5lUHJpY2U7XG4gICAgc2VsZWN0ZWRQcmljZS5wdXNoKG9ubGluZVByaWNlKTtcbiAgfVxuICBpZiAob2JqLnN0b3JhZ2UgPT09IFwiY2hlY2tlZFwiKSB7XG4gICAgc2Vjb25kQWRkID0gXCJMYXJnZXIgc3RvcmFnZVwiO1xuICAgIHN0b3JhZ2VQcmljZSA9IG9iai5zdG9yYWdlUHJpY2U7XG4gICAgc2VsZWN0ZWRQcmljZS5wdXNoKHN0b3JhZ2VQcmljZSk7XG4gIH1cbiAgaWYgKG9iai50aGVtZSA9PT0gXCJjaGVja2VkXCIpIHtcbiAgICB0aGlyZEFkZCA9IFwiQ3VzdG9taXphYmxlIHByb2ZpbGVcIjtcbiAgICB0aGVtZVByaWNlID0gb2JqLnRoZW1lUHJpY2U7XG4gICAgc2VsZWN0ZWRQcmljZS5wdXNoKHRoZW1lUHJpY2UpO1xuICB9XG5cbiAgLy8gdXNlIGNsb3N1cmUgdG8gcmVzZXQgaXRlbXMgaWYgbm90IHNlbGVjdGVkXG4gIGNvbnN0IGNoZWNrU2VsZWN0ZWRBZGRzID0gZnVuY3Rpb24gKG9iaikge1xuICAgIGlmIChvYmoub25saW5lICE9PSBcImNoZWNrZWRcIikge1xuICAgICAgZmlyc3RBZGQgPSBcIlwiO1xuICAgICAgb25saW5lUHJpY2UgPSBcIlwiO1xuICAgIH1cbiAgICBpZiAob2JqLnN0b3JhZ2UgIT09IFwiY2hlY2tlZFwiKSB7XG4gICAgICBzZWNvbmRBZGQgPSBcIlwiO1xuICAgICAgc3RvcmFnZVByaWNlID0gXCJcIjtcbiAgICB9XG4gICAgaWYgKG9iai50aGVtZSAhPT0gXCJjaGVja2VkXCIpIHtcbiAgICAgIHRoaXJkQWRkID0gXCJcIjtcbiAgICAgIHRoZW1lUHJpY2UgPSBcIlwiO1xuICAgIH1cbiAgfTtcbiAgY2hlY2tTZWxlY3RlZEFkZHMob2JqKTtcblxuICByZXR1cm4ge1xuICAgIGZpcnN0QWRkLFxuICAgIHNlY29uZEFkZCxcbiAgICB0aGlyZEFkZCxcbiAgICBvbmxpbmVQcmljZSxcbiAgICBzdG9yYWdlUHJpY2UsXG4gICAgdGhlbWVQcmljZSxcbiAgICBzZWxlY3RlZFByaWNlLFxuICB9O1xufVxuLypcbiAqZnVuY3Rpb24gdGhhdCBhY2NlcHQgdHdvIG9iamVjdHMgYW5kIGNhbGN1bGF0ZSBwcmljZSBvciBzdW1cbiAqcGFyYW0gMTogb2JqMSBob2xkIHBsYW4gcHJpY2UgKG1vbnRobHkgb3IgeWVhcmx5KVxuICpwYXJhbSAyOiBvYmoyIGhvbGQgc2VsZWN0ZWQgYWRkcyBwcmljZSBhcyBhbiBhcnJhcnlcbiAqcmV0dXJuIG51bWJlciAoc3VtKVxuICovXG5mdW5jdGlvbiB0b3RhbFByaWNlKG9iajEsIG9iajIpIHtcbiAgY29uc3QgcGxhbkZlZSA9IHN1bW1hcnlQbGFuKG9iajEpLnByaWNlO1xuICBjb25zdCBhZGRzRmVlID0gc3VtbWFyeUFkZHMob2JqMikuc2VsZWN0ZWRQcmljZTtcbiAgY29uc3QgcGxhbiA9IE51bWJlcihwbGFuRmVlLnJlcGxhY2UoL1teMC05XS9nLCBcIlwiKSk7XG4gIGNvbnN0IHBsYW5OYW1lID0gcGxhbkZlZS5yZXBsYWNlKC9bXmEtel0vZywgXCJcIik7IC8vIHN0b3JlIFwibW9cIiBvciBcInlyXCIgc3RyaW5nXG5cbiAgbGV0IHN1bXdpdGhjdXJyZW5jeSA9IFwiXCI7XG4gIGxldCB0b3RhbEFkZHMgPSAwO1xuICBsZXQgc3VtID0gMDtcbiAgYWRkc0ZlZS5mb3JFYWNoKChwcmljZSkgPT4ge1xuICAgIC8vIHByaWNlIGlzIGFycmF5IG9mIGFkZCB2YWx1ZSBjb252ZXJ0IHRvIG51bSBhbmQgcmVtb3ZlIGN1cnJlbmN5IHNpZ25cbiAgICB0b3RhbEFkZHMgKz0gTnVtYmVyKHByaWNlLnJlcGxhY2UoL1teMC05XS9nLCBcIlwiKSk7XG4gIH0pO1xuICBzdW0gPSBwbGFuICsgdG90YWxBZGRzO1xuICBzdW13aXRoY3VycmVuY3kgPSBgICQke3N1bX0vJHtwbGFuTmFtZX1gO1xuICByZXR1cm4gc3Vtd2l0aGN1cnJlbmN5O1xufVxuLy8gZnVuY3Rpb24gdG8gdmFsaWRhdGUgc3RlcCBvbmUgZm9ybVxuLyoqXG4gKlxuICogQHBhcmFtIHsqfSBmaWVsZCA6IGlucHV0IGZpZWxkXG4gKiBAcGFyYW0geyp9IGluZGV4IDogMCByZXByZXNlbnQgdXNlcm5hbWUsMSB1c2VyIGVtYWlsICwyIHVzZXJwaG9uZSBudW1iZXIgcmVzcGVjdGl2ZWx5XG4gKiBAcGFyYW0geyp9IGVyckRvbSA6ZG9tZWxlbW50IHRvIHNob3cgZXJyb3IgbWVzc2FnZVxuICovXG5leHBvcnQgZnVuY3Rpb24gdmFsaWRhdGVGb3JtKGZpZWxkLCBpbmRleCwgZXJyRG9tKSB7XG4gIGNvbnN0IGVtYWlsUmVnID0gL1xcdytbQF17MX1bYS16LV0rWy5dezF9W2Etel17Mix9KFsuXXsxfVthLXpdezIsfSk/LztcbiAgY29uc3QgcGhvbmVSZWcgPSAvXlswLTldezEwLDE1fSQvO1xuICBjb25zdCBzdHJpbmdSZWcgPSAvW2Etel0rLzsgLy8gY2hlY2sgcGhvbmUgbnVtYmVyIGVudHJ5XG5cbiAgLy8gZnVuY3Rpb24gdG8gaGlkZSBlcnJvciBtZXNzYWdlIG9uIGZvY3VzIGVsc2Ugc2hvdyBtZXNzYWdlXG4gIGNvbnN0IGZvY3VzU3R5bGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgZmllbGQuYWRkRXZlbnRMaXN0ZW5lcihcImZvY3VzXCIsICgpID0+IHtcbiAgICAgIGlmIChmaWVsZC5jbGFzc05hbWUgPT09IFwiaW52YWxpZFwiKSBlcnJEb20uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIH0pO1xuICAgIGZpZWxkLmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c291dFwiLCAoKSA9PiB7XG4gICAgICBpZiAoZmllbGQuY2xhc3NOYW1lID09PSBcImludmFsaWRcIikge1xuICAgICAgICBlcnJEb20uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcbiAgaWYgKGZpZWxkLnZhbHVlID09PSBcIlwiKSB7XG4gICAgZXJyRG9tLnRleHRDb250ZW50ID0gXCJUaGlzIGZpZWxkIGlzIFJlcXVpcmVkIVwiO1xuICAgIGZpZWxkLmNsYXNzTmFtZSA9IFwiaW52YWxpZFwiO1xuICAgIHJldHVybjtcbiAgfVxuICBpZiAoaW5kZXggPT09IDApIHtcbiAgICBpZiAoZmllbGQudmFsaWRpdHkudG9vU2hvcnQpIHtcbiAgICAgIGVyckRvbS50ZXh0Q29udGVudCA9IFwiVG9vIHNob3J0IGFkZCBtb3JlIGNoYXJhY3Rlci5cIjtcbiAgICAgIGZpZWxkLmNsYXNzTmFtZSA9IFwiaW52YWxpZFwiO1xuICAgICAgZm9jdXNTdHlsZSgpO1xuICAgIH0gZWxzZSBpZiAoZmllbGQudmFsaWRpdHkudG9vTG9uZykge1xuICAgICAgZXJyRG9tLnRleHRDb250ZW50ID0gXCJUb28gbG9uZyBtdXN0IGJlIDItMjAgY2hhcmFjdGVycy5cIjtcbiAgICAgIGZpZWxkLmNsYXNzTmFtZSA9IFwiaW52YWxpZFwiO1xuICAgICAgZm9jdXNTdHlsZSgpO1xuICAgIH0gZWxzZSBpZiAoZmllbGQudmFsaWRpdHkudmFsaWQpIHtcbiAgICAgIGVyckRvbS50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgICBmaWVsZC5jbGFzc05hbWUgPSBcInZhbGlkXCI7XG4gICAgfVxuICB9IGVsc2UgaWYgKGluZGV4ID09PSAxKSB7XG4gICAgaWYgKGVtYWlsUmVnLnRlc3QoZmllbGQudmFsdWUpKSB7XG4gICAgICBmaWVsZC5jbGFzc05hbWUgPSBcInZhbGlkXCI7XG4gICAgICBlcnJEb20udGV4dENvbnRlbnQgPSBcIlwiO1xuICAgIH0gZWxzZSBpZiAoZW1haWxSZWcudGVzdChmaWVsZC52YWx1ZSkgPT09IGZhbHNlKSB7XG4gICAgICBlcnJEb20udGV4dENvbnRlbnQgPSBcIndyb25nIGZvcm1hdCx1c2UoZXhhbXBsZUBkb21haW4uZXh0KVwiO1xuICAgICAgZmllbGQuY2xhc3NOYW1lID0gXCJpbnZhbGlkXCI7XG4gICAgICBmb2N1c1N0eWxlKCk7XG4gICAgfVxuICB9IGVsc2UgaWYgKGluZGV4ID09PSAyKSB7XG4gICAgaWYgKHN0cmluZ1JlZy50ZXN0KGZpZWxkLnZhbHVlKSkge1xuICAgICAgZXJyRG9tLnRleHRDb250ZW50ID0gXCJQbGVhc2UgZW50ZXIgbnVtYmVycyBvbmx5IVwiO1xuICAgICAgZmllbGQuY2xhc3NOYW1lID0gXCJpbnZhbGlkXCI7XG4gICAgICBmb2N1c1N0eWxlKCk7XG4gICAgfSBlbHNlIGlmIChmaWVsZC52YWxpZGl0eS50b29Mb25nKSB7XG4gICAgICBlcnJEb20udGV4dENvbnRlbnQgPSBcIlRvbyBsb25nIG11c3QgYmUgMTAtMTUgY2hhcmFjdGVyc1wiO1xuICAgICAgZmllbGQuY2xhc3NOYW1lID0gXCJpbnZhbGlkXCI7XG4gICAgICBmb2N1c1N0eWxlKCk7XG4gICAgfSBlbHNlIGlmIChmaWVsZC52YWxpZGl0eS50b29TaG9ydCkge1xuICAgICAgZXJyRG9tLnRleHRDb250ZW50ID0gXCJUb28gc2hvcnQgbXVzdCBiZSAxMC0xNSBjaGFyYWN0ZXJzXCI7XG4gICAgICBmaWVsZC5jbGFzc05hbWUgPSBcImludmFsaWRcIjtcbiAgICAgIGZvY3VzU3R5bGUoKTtcbiAgICB9IGVsc2UgaWYgKHBob25lUmVnLnRlc3QoTnVtYmVyKGZpZWxkLnZhbHVlKSkpIHtcbiAgICAgIGZpZWxkLmNsYXNzTmFtZSA9IFwidmFsaWRcIjtcbiAgICAgIGVyckRvbS50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgICBjb25zdCB2YWx1ZSA9IGZpZWxkLnZhbHVlO1xuICAgICAgY29uc3QgZm9ybWF0ID0gdmFsdWUucmVwbGFjZSgvXiguezN9KSguezN9KSguezR9KSguKikkLywgXCIkMSAkMiAkM1wiKTtcbiAgICAgIGZpZWxkLnZhbHVlID0gXCIrXCIgKyBmb3JtYXQ7XG4gICAgfVxuICB9XG59XG5leHBvcnQgZnVuY3Rpb24gaXNGb3JtZmlsbGVkKGFycikge1xuICBjb25zdCBpbnZhbGlkSW5wdXQgPSBbXTtcbiAgbGV0IHJlc3VsdDtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoYXJyW2ldLmNsYXNzTmFtZSA9PT0gXCJpbnZhbGlkXCIpIHtcbiAgICAgIGludmFsaWRJbnB1dC5wdXNoKGFycltpXSk7XG4gICAgfSBlbHNlIGlmIChhcnJbaV0udmFsdWUgPT09IFwiXCIpIHtcbiAgICAgIGludmFsaWRJbnB1dC5wdXNoKGFycltpXSk7XG4gICAgfVxuICB9XG4gIGludmFsaWRJbnB1dC5sZW5ndGggPiAwID8gKHJlc3VsdCA9IGZhbHNlKSA6IChyZXN1bHQgPSB0cnVlKTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cbi8vIGZ1bmN0aW9uIHRoYXQgYWNjZXB0IG9iamVjdCBhbmQgY2hlY2sgdmFsdWUgaXMgZW1wdHkodXNlZCB0byBzd2l0Y2ggdGFiIDIpXG5leHBvcnQgZnVuY3Rpb24gaXNWYWx1ZUVtcHR5KG9iaikge1xuICBsZXQgcmVzdWx0O1xuICBjb25zdCBrZXlBcnJheSA9IE9iamVjdC5rZXlzKG9iaik7XG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBrZXlBcnJheS5sZW5ndGg7IGluZGV4KyspIHtcbiAgICBjb25zdCBlbGVtZW50ID0ga2V5QXJyYXlbaW5kZXhdO1xuICAgIGlmIChvYmpbZWxlbWVudF0gPT09IFwiXCIpIHtcbiAgICAgIHJlc3VsdCA9IHRydWU7XG4gICAgICBicmVhaztcbiAgICB9IGVsc2UgaWYgKG9ialtlbGVtZW50XSAhPT0gXCJcIikge1xuICAgICAgcmVzdWx0ID0gZmFsc2U7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG4vLyBmdW5jdGlvbiB0byBjaGFuZ2UgYmFja2dyb3VkIGNvbG9yIHRvIHNob3cgd2hpY2ggc3RlcCBpdCBpc1xuZXhwb3J0IGZ1bmN0aW9uIGNoYW5nZUNvbG9yKGFycmF5LCBpbmRleCkge1xuICBhcnJheS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgaWYgKGFycmF5LmluZGV4T2YoZWxlbWVudCkgPT09IGluZGV4KSB7XG4gICAgICBlbGVtZW50LnN0eWxlLmNvbG9yID0gXCJibGFja1wiO1xuICAgICAgZWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJnYigxOTEsIDIyNiwgMjUzKVwiO1xuICAgIH0gZWxzZSB7XG4gICAgICBlbGVtZW50LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiaW5oZXJpdFwiO1xuICAgIH1cbiAgfSk7XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJpbmRleFwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuXG5pbXBvcnQge1xuICBmdW5jdGlvbnMsXG4gIFVzZXJQZXJzb25hbEluZm8sXG4gIFVzZXJQbGFuRGF0YSxcbiAgVXNlclNlcnZpY2VzLFxuICBjaGFuZ2VQcmljZSxcbiAgYWRkRXZlbnRzLFxuICBzZWxlY3RlZENhcmQsXG4gIGlzQ2hlY2tlZCxcbiAgdmFsaWRhdGVGb3JtLFxuICBpc0Zvcm1maWxsZWQsXG4gIGlzVmFsdWVFbXB0eSxcbiAgY2hhbmdlQ29sb3IsXG59IGZyb20gXCIuL3RhYnNcIjtcbmNvbnN0IGhvbGRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJldmlld1wiKTtcbmNvbnN0IGRvdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmRvdFwiKTtcbmNvbnN0IHRhYnMgPSBbLi4uZG90c107XG5jb25zdCB1c2VySW5mbyA9IG5ldyBVc2VyUGVyc29uYWxJbmZvKCk7XG5jb25zdCB1c2VyUGxhbnMgPSBuZXcgVXNlclBsYW5EYXRhKCk7XG5jb25zdCB1c2VyQWRkcyA9IG5ldyBVc2VyU2VydmljZXMoKTtcbmhvbGRlci5hcHBlbmRDaGlsZChmdW5jdGlvbnMuc3RlcE9uZSh1c2VySW5mbykpOyAvLyBkZWZhdWx0IGlzIGVtcHR5IGZvcm1cbmhvbGRlci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgaWYgKGUudGFyZ2V0Lm1hdGNoZXMoXCIudGFiLW9uZS1idG5cIikpIHtcbiAgICBjb25zdCBhbGxJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJpbnB1dFwiKTtcbiAgICBjb25zdCBhcnJ5SW5wdXQgPSBbLi4uYWxsSW5wdXRdO1xuICAgIC8vIHZhbGlkYXRlIHN0ZXAgb25lIGZvcm0gaWYgaXRzIG5vdCBlbXB0eSBtb3ZlIHRvIG5leHQgc3RlcFxuXG4gICAgaWYgKGlzRm9ybWZpbGxlZChhcnJ5SW5wdXQpID09PSB0cnVlKSB7XG4gICAgICBob2xkZXIudGV4dENvbnRlbnQgPSBcIlwiO1xuICAgICAgaG9sZGVyLmFwcGVuZENoaWxkKGZ1bmN0aW9ucy5zdGVwVHdvKHVzZXJQbGFucykpO1xuICAgICAgY2hhbmdlQ29sb3IodGFicywgMSk7XG4gICAgfVxuICAgIGFycnlJbnB1dC5mb3JFYWNoKChpbnB1dCkgPT4ge1xuICAgICAgY29uc3QgZXJyTXNnID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgYFtkYXRhLWVycm9yLW1zZz1cIiR7TnVtYmVyKGlucHV0LmRhdGFzZXQuZXJyb3IpfVwiXWBcbiAgICAgICk7XG4gICAgICBpZiAoaW5wdXQudmFsdWUgPT09IFwiXCIpIHtcbiAgICAgICAgZXJyTXNnLnRleHRDb250ZW50ID0gXCJUaGlzIGZpZWxkIGlzIHJlcXVpcmVkIVwiO1xuICAgICAgICBpbnB1dC5jbGFzc05hbWUgPSBcImludmFsaWRcIjtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSBlbHNlIGlmIChlLnRhcmdldC5tYXRjaGVzKFwiW2RhdGEtdXNlci1uYW1lXVwiKSkge1xuICAgIGNvbnN0IHVzZXJOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLXVzZXItbmFtZV1cIik7XG4gICAgdXNlck5hbWUuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoZSkgPT4ge1xuICAgICAgY29uc3QgZXJyTXNnID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgYFtkYXRhLWVycm9yLW1zZz1cIiR7ZS50YXJnZXQuZGF0YXNldC5lcnJvcn1cIl1gXG4gICAgICApO1xuXG4gICAgICB1c2VySW5mby5uYW1lID0gdXNlck5hbWUudmFsdWU7XG4gICAgICB2YWxpZGF0ZUZvcm0odXNlck5hbWUsIDAsIGVyck1zZyk7XG4gICAgfSk7XG4gIH0gZWxzZSBpZiAoZS50YXJnZXQubWF0Y2hlcyhcIltkYXRhLXVzZXItZW1haWxdXCIpKSB7XG4gICAgY29uc3QgdXNlckVtYWlsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLXVzZXItZW1haWxdXCIpO1xuICAgIHVzZXJFbWFpbC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIChlKSA9PiB7XG4gICAgICBjb25zdCBlcnJNc2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICBgW2RhdGEtZXJyb3ItbXNnPVwiJHtlLnRhcmdldC5kYXRhc2V0LmVycm9yfVwiXWBcbiAgICAgICk7XG4gICAgICB1c2VySW5mby5lbWFpbCA9IHVzZXJFbWFpbC52YWx1ZTtcbiAgICAgIHZhbGlkYXRlRm9ybSh1c2VyRW1haWwsIDEsIGVyck1zZyk7XG4gICAgfSk7XG4gIH0gZWxzZSBpZiAoZS50YXJnZXQubWF0Y2hlcyhcIltkYXRhLXVzZXItcGhvbmVdXCIpKSB7XG4gICAgY29uc3QgdXNlclBob25lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLXVzZXItcGhvbmVdXCIpO1xuICAgIGNvbnN0IGVyck1zZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICBgW2RhdGEtZXJyb3ItbXNnPVwiJHtlLnRhcmdldC5kYXRhc2V0LmVycm9yfVwiXWBcbiAgICApO1xuICAgIHVzZXJQaG9uZS5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIChlKSA9PiB7XG4gICAgICB1c2VySW5mby5waG9uZSA9IHVzZXJQaG9uZS52YWx1ZTtcbiAgICAgIHZhbGlkYXRlRm9ybSh1c2VyUGhvbmUsIDIsIGVyck1zZyk7XG4gICAgfSk7XG4gIH0gLy8gdGFiIHR3byBldmVudHNcbiAgZWxzZSBpZiAoZS50YXJnZXQubWF0Y2hlcyhcIi5wbGFuLWhvbGRlclwiKSkge1xuICAgIGNvbnN0IGluZGV4ID0gTnVtYmVyKGUudGFyZ2V0LmRhdGFzZXQucGxhbik7XG4gICAgY29uc3QgcGxhbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnBsYW4taG9sZGVyXCIpO1xuICAgIGNvbnN0IGNsaWNrZWRQbGFuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtcGxhbj1cIiR7aW5kZXh9XCJdYCk7XG4gICAgYWRkRXZlbnRzKHBsYW5zLCBjbGlja2VkUGxhbik7XG4gICAgdXNlclBsYW5zLnNlbGVjdGVkUGxhbiA9IGluZGV4O1xuICB9IGVsc2UgaWYgKGUudGFyZ2V0Lm1hdGNoZXMoXCJbZGF0YS1jaG9vc2UtcGxhbl1cIikpIHtcbiAgICBjb25zdCB1c2VyUGxhbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1jaG9vc2UtcGxhbl1cIik7XG4gICAgY29uc3QgcHJpY2VzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wbGFuLWZlZVwiKTtcbiAgICBjb25zdCBmcmVlR2lmdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiW2RhdGEtZ2lmdF1cIik7XG4gICAgY29uc3QgbW9udGhseVBsYW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtbW9udGhseV1cIik7XG4gICAgY29uc3QgeWVhcmx5UGxhbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS15ZWFybHldXCIpO1xuICAgIGNvbnN0IHBsYW5zID0gWy4uLnByaWNlc107XG4gICAgaWYgKHVzZXJQbGFuLmNoZWNrZWQgPT09IHRydWUpIHtcbiAgICAgIHVzZXJQbGFucy5jaGVja2JveCA9IFwiY2hlY2tlZFwiO1xuICAgICAgdXNlclBsYW5zLnBsYW4gPSB0cnVlO1xuICAgICAgdXNlclBsYW5zLmJvbnVzID0gXCJibG9ja1wiO1xuICAgICAgdXNlckFkZHMuYWRkUGxhbiA9IHRydWU7XG4gICAgICAvLyB1cGRhdGUgZG9tXG4gICAgICBtb250aGx5UGxhbi5zdHlsZS5jb2xvciA9IFwiaHNsKDIzMSwgMTElLCA2MyUpXCI7XG4gICAgICB5ZWFybHlQbGFuLnN0eWxlLmNvbG9yID0gXCJoc2woMjEzLCA5NiUsIDE4JSlcIjtcbiAgICAgIGZyZWVHaWZ0cy5mb3JFYWNoKChkaXZzKSA9PiB7XG4gICAgICAgIGRpdnMuc3R5bGUuZGlzcGxheSA9IHVzZXJQbGFucy5ib251cztcbiAgICAgIH0pO1xuXG4gICAgICBjaGFuZ2VQcmljZShwbGFucywgdXNlclBsYW5zKTtcbiAgICB9IGVsc2UgaWYgKHVzZXJQbGFuLmNoZWNrZWQgPT09IGZhbHNlKSB7XG4gICAgICB1c2VyUGxhbnMuY2hlY2tib3ggPSBcIlwiO1xuICAgICAgdXNlclBsYW5zLnBsYW4gPSBmYWxzZTtcbiAgICAgIHVzZXJQbGFucy5ib251cyA9IFwibm9uZVwiO1xuICAgICAgdXNlckFkZHMuYWRkUGxhbiA9IGZhbHNlO1xuICAgICAgbW9udGhseVBsYW4uc3R5bGUuY29sb3IgPSBcImhzbCgyMTMsIDk2JSwgMTglXCI7XG4gICAgICB5ZWFybHlQbGFuLnN0eWxlLmNvbG9yID0gXCJoc2woMjMxLCAxMSUsIDYzJSlcIjtcbiAgICAgIC8vIG1vbnRobHkgcHJpY2VcbiAgICAgIGZyZWVHaWZ0cy5mb3JFYWNoKChkaXZzKSA9PiB7XG4gICAgICAgIGRpdnMuc3R5bGUuZGlzcGxheSA9IHVzZXJQbGFucy5ib251cztcbiAgICAgIH0pO1xuICAgICAgY2hhbmdlUHJpY2UocGxhbnMsIHVzZXJQbGFucyk7XG4gICAgfVxuICB9IGVsc2UgaWYgKGUudGFyZ2V0Lm1hdGNoZXMoXCJbZGF0YS10YWItdHdvLW5leHQtYnRuXVwiKSkge1xuICAgIGNvbnN0IGVyck1zZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1zZWxlY3QtcGxhbl1cIik7XG4gICAgaWYgKHVzZXJQbGFucy5zZWxlY3RlZFBsYW4gIT09IFwiXCIpIHtcbiAgICAgIGhvbGRlci50ZXh0Q29udGVudCA9IFwiIFwiO1xuICAgICAgaG9sZGVyLmFwcGVuZENoaWxkKGZ1bmN0aW9ucy5zdGVwVGhyZWUodXNlckFkZHMpKTtcbiAgICAgIGVyck1zZy50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgICBjaGFuZ2VDb2xvcih0YWJzLCAyKTsgLy8gc3RlcCAzXG4gICAgfSBlbHNlIGlmICh1c2VyUGxhbnMuc2VsZWN0ZWRQbGFuID09PSBcIlwiKSB7XG4gICAgICBlcnJNc2cudGV4dENvbnRlbnQgPSBcImNsaWNrIHRoZSBjYXJkcyB0byAgc2VsZWN0LlwiO1xuICAgIH1cbiAgfSBlbHNlIGlmIChlLnRhcmdldC5tYXRjaGVzKFwiW2RhdGEtdGFiLXR3by1iYWNrLWJ0bl1cIikpIHtcbiAgICBob2xkZXIudGV4dENvbnRlbnQgPSBcIlwiO1xuICAgIGhvbGRlci5hcHBlbmRDaGlsZChmdW5jdGlvbnMuc3RlcE9uZSh1c2VySW5mbykpO1xuICAgIGNoYW5nZUNvbG9yKHRhYnMsIDApOyAvLyBzdGVwIG9uZVxuICB9XG4gIC8vIHRhYiB0aHJlZSBldmVudHNcbiAgZWxzZSBpZiAoZS50YXJnZXQubWF0Y2hlcyhcIi51c2VyLWFkZFwiKSkge1xuICAgIGNvbnN0IGluZGV4ID0gTnVtYmVyKGUudGFyZ2V0LmRhdGFzZXQuYWRkcyk7XG4gICAgY29uc3QgYWRkc0NoZWNrYm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtYWRkcz1cIiR7aW5kZXh9XCJdYCk7XG4gICAgaXNDaGVja2VkKGluZGV4LCBhZGRzQ2hlY2tib3gsIHVzZXJBZGRzKTtcbiAgfSBlbHNlIGlmIChlLnRhcmdldC5tYXRjaGVzKFwiW2RhdGEtdGFiLXRocmVlLW5leHQtYnRuXCIpKSB7XG4gICAgaG9sZGVyLnRleHRDb250ZW50ID0gXCJcIjtcbiAgICBob2xkZXIuYXBwZW5kQ2hpbGQoZnVuY3Rpb25zLnN0ZXBGb3VyKHVzZXJQbGFucywgdXNlckFkZHMpKTtcbiAgICBjaGFuZ2VDb2xvcih0YWJzLCAzKTsgLy8gc3RlcCA0XG4gIH0gZWxzZSBpZiAoZS50YXJnZXQubWF0Y2hlcyhcIltkYXRhLXRhYi10aHJlZS1iYWNrLWJ0bl1cIikpIHtcbiAgICBob2xkZXIudGV4dENvbnRlbnQgPSBcIlwiO1xuICAgIGhvbGRlci5hcHBlbmRDaGlsZChmdW5jdGlvbnMuc3RlcFR3byh1c2VyUGxhbnMpKTtcbiAgICBzZWxlY3RlZENhcmQodXNlclBsYW5zLnNlbGVjdGVkUGxhbik7XG4gICAgY2hhbmdlQ29sb3IodGFicywgMSk7IC8vIHN0ZXAgMlxuICB9XG4gIC8vIHN0ZXAgZm91ciBldmVudFxuICBlbHNlIGlmIChlLnRhcmdldC5tYXRjaGVzKFwiW2RhdGEtdGFiLWZvdXItYmFjay1idG5dXCIpKSB7XG4gICAgaG9sZGVyLnRleHRDb250ZW50ID0gXCJcIjtcbiAgICBob2xkZXIuYXBwZW5kQ2hpbGQoZnVuY3Rpb25zLnN0ZXBUaHJlZSh1c2VyQWRkcykpO1xuICAgIGNoYW5nZUNvbG9yKHRhYnMsIDIpOyAvLyBzdGVwIDNcbiAgfSBlbHNlIGlmIChlLnRhcmdldC5tYXRjaGVzKFwiW2RhdGEtdGFiLWZvdXItY29uZmlybS1idG5dXCIpKSB7XG4gICAgaG9sZGVyLnRleHRDb250ZW50ID0gXCJcIjtcbiAgICBob2xkZXIuYXBwZW5kQ2hpbGQoZnVuY3Rpb25zLnN0ZXBGaXZlKCkpO1xuICB9XG59KTtcblxudGFicy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgaWYgKHRhYnMuaW5kZXhPZihlbGVtZW50KSA9PT0gMCkge1xuICAgICAgaG9sZGVyLnRleHRDb250ZW50ID0gXCJcIjtcbiAgICAgIGhvbGRlci5hcHBlbmRDaGlsZChmdW5jdGlvbnMuc3RlcE9uZSh1c2VySW5mbykpO1xuICAgICAgY2hhbmdlQ29sb3IodGFicywgMCk7XG4gICAgICAvLyBuZXh0IGNoZWNrIHN0ZXAgb25lIGlzIGNsZWFyIGVsc2UgZG9uJ3Qgc3dpdGNoXG4gICAgfSBlbHNlIGlmIChcbiAgICAgIHRhYnMuaW5kZXhPZihlbGVtZW50KSA9PT0gMSAmJlxuICAgICAgaXNWYWx1ZUVtcHR5KHVzZXJJbmZvKSA9PT0gZmFsc2VcbiAgICApIHtcbiAgICAgIGhvbGRlci50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgICBob2xkZXIuYXBwZW5kQ2hpbGQoZnVuY3Rpb25zLnN0ZXBUd28odXNlclBsYW5zKSk7XG4gICAgICBzZWxlY3RlZENhcmQodXNlclBsYW5zLnNlbGVjdGVkUGxhbik7XG4gICAgICBjaGFuZ2VDb2xvcih0YWJzLCAxKTtcbiAgICAgIC8vIGNoZWNrIGlmIHN0ZXAgdHdvIGNhcmRzIHNlbGVjdGVkIHRvIHByZWNlZWQgdG8gc3RlcCAzIGFuZCA0IHRoZXkgYXJlIHNhbWVcbiAgICB9IGVsc2UgaWYgKHRhYnMuaW5kZXhPZihlbGVtZW50KSA9PT0gMiAmJiB1c2VyUGxhbnMuc2VsZWN0ZWRQbGFuICE9PSBcIlwiKSB7XG4gICAgICBob2xkZXIudGV4dENvbnRlbnQgPSBcIlwiO1xuICAgICAgaG9sZGVyLmFwcGVuZENoaWxkKGZ1bmN0aW9ucy5zdGVwVGhyZWUodXNlckFkZHMpKTtcbiAgICAgIGNoYW5nZUNvbG9yKHRhYnMsIDIpO1xuICAgIH0gZWxzZSBpZiAodGFicy5pbmRleE9mKGVsZW1lbnQpID09PSAzICYmIHVzZXJQbGFucy5zZWxlY3RlZFBsYW4gIT09IFwiXCIpIHtcbiAgICAgIGhvbGRlci50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgICBob2xkZXIuYXBwZW5kQ2hpbGQoZnVuY3Rpb25zLnN0ZXBGb3VyKHVzZXJQbGFucywgdXNlckFkZHMpKTtcbiAgICAgIGNoYW5nZUNvbG9yKHRhYnMsIDMpO1xuICAgIH1cbiAgfSk7XG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==