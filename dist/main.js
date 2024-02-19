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
Object(function webpackMissingModule() { var e = new Error("Cannot find module './assets/images/icon-arcade.avg'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
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

/***/ }),

/***/ "./src/assets/images/favicon-32x32.png":
/*!*********************************************!*\
  !*** ./src/assets/images/favicon-32x32.png ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "736eae1ff09acfe04c50.png";

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
/* harmony import */ var _assets_images_favicon_32x32_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/images/favicon-32x32.png */ "./src/assets/images/favicon-32x32.png");
/* harmony import */ var _tabs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tabs */ "./src/tabs.js");



const holder = document.querySelector(".preview");
const dots = document.querySelectorAll(".dot");
const tabs = [...dots];
const userInfo = new _tabs__WEBPACK_IMPORTED_MODULE_2__.UserPersonalInfo();
const userPlans = new _tabs__WEBPACK_IMPORTED_MODULE_2__.UserPlanData();
const userAdds = new _tabs__WEBPACK_IMPORTED_MODULE_2__.UserServices();
holder.appendChild(_tabs__WEBPACK_IMPORTED_MODULE_2__.functions.stepOne(userInfo)); // default is empty form
holder.addEventListener("click", (e) => {
  if (e.target.matches(".tab-one-btn")) {
    const allInput = document.querySelectorAll("input");
    const arryInput = [...allInput];
    // validate step one form if its not empty move to next step

    if ((0,_tabs__WEBPACK_IMPORTED_MODULE_2__.isFormfilled)(arryInput) === true) {
      holder.textContent = "";
      holder.appendChild(_tabs__WEBPACK_IMPORTED_MODULE_2__.functions.stepTwo(userPlans));
      (0,_tabs__WEBPACK_IMPORTED_MODULE_2__.changeColor)(tabs, 1);
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
      (0,_tabs__WEBPACK_IMPORTED_MODULE_2__.validateForm)(userName, 0, errMsg);
    });
  } else if (e.target.matches("[data-user-email]")) {
    const userEmail = document.querySelector("[data-user-email]");
    userEmail.addEventListener("change", (e) => {
      const errMsg = document.querySelector(
        `[data-error-msg="${e.target.dataset.error}"]`
      );
      userInfo.email = userEmail.value;
      (0,_tabs__WEBPACK_IMPORTED_MODULE_2__.validateForm)(userEmail, 1, errMsg);
    });
  } else if (e.target.matches("[data-user-phone]")) {
    const userPhone = document.querySelector("[data-user-phone]");
    const errMsg = document.querySelector(
      `[data-error-msg="${e.target.dataset.error}"]`
    );
    userPhone.addEventListener("change", (e) => {
      userInfo.phone = userPhone.value;
      (0,_tabs__WEBPACK_IMPORTED_MODULE_2__.validateForm)(userPhone, 2, errMsg);
    });
  } // tab two events
  else if (e.target.matches(".plan-holder")) {
    const index = Number(e.target.dataset.plan);
    const plans = document.querySelectorAll(".plan-holder");
    const clickedPlan = document.querySelector(`[data-plan="${index}"]`);
    (0,_tabs__WEBPACK_IMPORTED_MODULE_2__.addEvents)(plans, clickedPlan);
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

      (0,_tabs__WEBPACK_IMPORTED_MODULE_2__.changePrice)(plans, userPlans);
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
      (0,_tabs__WEBPACK_IMPORTED_MODULE_2__.changePrice)(plans, userPlans);
    }
  } else if (e.target.matches("[data-tab-two-next-btn]")) {
    const errMsg = document.querySelector("[data-select-plan]");
    if (userPlans.selectedPlan !== "") {
      holder.textContent = " ";
      holder.appendChild(_tabs__WEBPACK_IMPORTED_MODULE_2__.functions.stepThree(userAdds));
      errMsg.textContent = "";
      (0,_tabs__WEBPACK_IMPORTED_MODULE_2__.changeColor)(tabs, 2); // step 3
    } else if (userPlans.selectedPlan === "") {
      errMsg.textContent = "click the cards to  select.";
    }
  } else if (e.target.matches("[data-tab-two-back-btn]")) {
    holder.textContent = "";
    holder.appendChild(_tabs__WEBPACK_IMPORTED_MODULE_2__.functions.stepOne(userInfo));
    (0,_tabs__WEBPACK_IMPORTED_MODULE_2__.changeColor)(tabs, 0); // step one
  }
  // tab three events
  else if (e.target.matches(".user-add")) {
    const index = Number(e.target.dataset.adds);
    const addsCheckbox = document.querySelector(`[data-adds="${index}"]`);
    (0,_tabs__WEBPACK_IMPORTED_MODULE_2__.isChecked)(index, addsCheckbox, userAdds);
  } else if (e.target.matches("[data-tab-three-next-btn")) {
    holder.textContent = "";
    holder.appendChild(_tabs__WEBPACK_IMPORTED_MODULE_2__.functions.stepFour(userPlans, userAdds));
    (0,_tabs__WEBPACK_IMPORTED_MODULE_2__.changeColor)(tabs, 3); // step 4
  } else if (e.target.matches("[data-tab-three-back-btn]")) {
    holder.textContent = "";
    holder.appendChild(_tabs__WEBPACK_IMPORTED_MODULE_2__.functions.stepTwo(userPlans));
    (0,_tabs__WEBPACK_IMPORTED_MODULE_2__.selectedCard)(userPlans.selectedPlan);
    (0,_tabs__WEBPACK_IMPORTED_MODULE_2__.changeColor)(tabs, 1); // step 2
  }
  // step four event
  else if (e.target.matches("[data-tab-four-back-btn]")) {
    holder.textContent = "";
    holder.appendChild(_tabs__WEBPACK_IMPORTED_MODULE_2__.functions.stepThree(userAdds));
    (0,_tabs__WEBPACK_IMPORTED_MODULE_2__.changeColor)(tabs, 2); // step 3
  } else if (e.target.matches("[data-tab-four-confirm-btn]")) {
    holder.textContent = "";
    holder.appendChild(_tabs__WEBPACK_IMPORTED_MODULE_2__.functions.stepFive());
  }
});

tabs.forEach((element) => {
  element.addEventListener("click", (e) => {
    if (tabs.indexOf(element) === 0) {
      holder.textContent = "";
      holder.appendChild(_tabs__WEBPACK_IMPORTED_MODULE_2__.functions.stepOne(userInfo));
      (0,_tabs__WEBPACK_IMPORTED_MODULE_2__.changeColor)(tabs, 0);
      // next check step one is clear else don't switch
    } else if (
      tabs.indexOf(element) === 1 &&
      (0,_tabs__WEBPACK_IMPORTED_MODULE_2__.isValueEmpty)(userInfo) === false
    ) {
      holder.textContent = "";
      holder.appendChild(_tabs__WEBPACK_IMPORTED_MODULE_2__.functions.stepTwo(userPlans));
      (0,_tabs__WEBPACK_IMPORTED_MODULE_2__.selectedCard)(userPlans.selectedPlan);
      (0,_tabs__WEBPACK_IMPORTED_MODULE_2__.changeColor)(tabs, 1);
      // check if step two cards selected to preceed to step 3 and 4 they are same
    } else if (tabs.indexOf(element) === 2 && userPlans.selectedPlan !== "") {
      holder.textContent = "";
      holder.appendChild(_tabs__WEBPACK_IMPORTED_MODULE_2__.functions.stepThree(userAdds));
      (0,_tabs__WEBPACK_IMPORTED_MODULE_2__.changeColor)(tabs, 2);
    } else if (tabs.indexOf(element) === 3 && userPlans.selectedPlan !== "") {
      holder.textContent = "";
      holder.appendChild(_tabs__WEBPACK_IMPORTED_MODULE_2__.functions.stepFour(userPlans, userAdds));
      (0,_tabs__WEBPACK_IMPORTED_MODULE_2__.changeColor)(tabs, 3);
    }
  });
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLHVLQUFnRTtBQUM1Ryw0Q0FBNEMseUpBQXlEO0FBQ3JHLDRDQUE0Qyx1SkFBd0Q7QUFDcEcsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRix5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsbUNBQW1DO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDRCQUE0QixtQ0FBbUM7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixtQ0FBbUM7QUFDbEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLHVGQUF1RixNQUFNLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLE1BQU0sV0FBVyxLQUFLLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxZQUFZLFdBQVcsS0FBSyxLQUFLLFVBQVUsVUFBVSxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksTUFBTSxZQUFZLE1BQU0sVUFBVSxVQUFVLFlBQVksYUFBYSxZQUFZLEtBQUssS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxNQUFNLFVBQVUsS0FBSyxVQUFVLFVBQVUsVUFBVSxLQUFLLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLEtBQUssS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxZQUFZLE1BQU0sVUFBVSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLGFBQWEsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLFlBQVksTUFBTSxZQUFZLGFBQWEsV0FBVyxXQUFXLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLE1BQU0sVUFBVSxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxNQUFNLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLEtBQUss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Q2xDO0FBQ0EsTUFBTSxrREFBVyxXQUFXO0FBQzVCLE1BQU07QUFDTjtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsdUJBQXVCLDRDQUFTO0FBQ2hDLElBQUksa0RBQVcsV0FBVztBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtEQUErRCxNQUFNO0FBQ3JFLElBQUksZ0RBQVM7QUFDYixJQUFJO0FBQ0o7QUFDQSx1QkFBdUIsNENBQVM7QUFDaEMsSUFBSSxrREFBVyxXQUFXO0FBQzFCLElBQUk7QUFDSjtBQUNBLHVCQUF1Qiw0Q0FBUztBQUNoQyxJQUFJLG1EQUFZO0FBQ2hCLElBQUksa0RBQVcsV0FBVztBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1Qiw0Q0FBUztBQUNoQyxJQUFJLGtEQUFXLFdBQVc7QUFDMUIsSUFBSTtBQUNKO0FBQ0EsdUJBQXVCLDRDQUFTO0FBQ2hDO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5Qiw0Q0FBUztBQUNsQyxNQUFNLGtEQUFXO0FBQ2pCO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTSxtREFBWTtBQUNsQjtBQUNBO0FBQ0EseUJBQXlCLDRDQUFTO0FBQ2xDLE1BQU0sbURBQVk7QUFDbEIsTUFBTSxrREFBVztBQUNqQjtBQUNBLE1BQU07QUFDTjtBQUNBLHlCQUF5Qiw0Q0FBUztBQUNsQyxNQUFNLGtEQUFXO0FBQ2pCLE1BQU07QUFDTjtBQUNBLHlCQUF5Qiw0Q0FBUztBQUNsQyxNQUFNLGtEQUFXO0FBQ2pCO0FBQ0EsR0FBRztBQUNILENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tdWx0aS1zdGVwLWZvcm0vLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL211bHRpLXN0ZXAtZm9ybS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vbXVsdGktc3RlcC1mb3JtLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9tdWx0aS1zdGVwLWZvcm0vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9tdWx0aS1zdGVwLWZvcm0vLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vbXVsdGktc3RlcC1mb3JtLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL211bHRpLXN0ZXAtZm9ybS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vbXVsdGktc3RlcC1mb3JtLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL211bHRpLXN0ZXAtZm9ybS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9tdWx0aS1zdGVwLWZvcm0vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9tdWx0aS1zdGVwLWZvcm0vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9tdWx0aS1zdGVwLWZvcm0vLi9zcmMvdGFicy5qcyIsIndlYnBhY2s6Ly9tdWx0aS1zdGVwLWZvcm0vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbXVsdGktc3RlcC1mb3JtL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL211bHRpLXN0ZXAtZm9ybS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vbXVsdGktc3RlcC1mb3JtL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vbXVsdGktc3RlcC1mb3JtL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vbXVsdGktc3RlcC1mb3JtL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vbXVsdGktc3RlcC1mb3JtL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL211bHRpLXN0ZXAtZm9ybS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9tdWx0aS1zdGVwLWZvcm0vd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL211bHRpLXN0ZXAtZm9ybS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9hc3NldHMvZm9udHMvdWJ1bnR1LXYyMC1sYXRpbi1yZWd1bGFyLndvZmYyXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9hc3NldHMvaW1hZ2VzL2JnLXNpZGViYXItZGVza3RvcC5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIuL2Fzc2V0cy9pbWFnZXMvYmctc2lkZWJhci1tb2JpbGUuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC8qIHVidW50dS1yZWd1bGFyIC0gbGF0aW4gKi9cbkBmb250LWZhY2Uge1xuICAgIGZvbnQtZGlzcGxheTogc3dhcDsgXG4gICAgZm9udC1mYW1pbHk6ICdVYnVudHUnO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pIGZvcm1hdCgnd29mZjInKTsgXG4gIH1cbmJvZHl7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIGhzbCgwLCAwJSwgMTAwJSk7XG4gICAgbWluLWhlaWdodDogMTAwdmg7XG4gICAgbWF4LXdpZHRoOiAxMDB2dztcbiAgICBmb250LWZhbWlseTogJ1VidW50dSc7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBtYXJnaW46IDAuNXJlbTtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyZnI7XG4gICAgY29sb3I6IGhzbCgyMTMsIDk2JSwgMTglKTtcbn1cbi8qIG5hdiBzdHlsZSAqL1xuXG5uYXZ7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pO1xuICAgIFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBib3R0b207XG4gICAgaGVpZ2h0OiA5NXZoO1xuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbiAgfVxudWx7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbn1cbmxpe1xuICAgIG1hcmdpbjogMXJlbTtcbiAgICB3aWR0aDogMTAwJTtcbn1cbi5uYXYtaG9sZGVye1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDFyZW07XG59XG4uc3RlcC1uYW1le1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cbi5zdGVwLW5hbWU6aG92ZXJ7XG4gICAgdGV4dC1zaGFkb3c6IDJweCAycHggIHJnYigxMDEsIDUsIDExOCk7XG4gICAgfVxuLmRvdHtcbiAgICB3aWR0aDogMnJlbTtcbiAgICBoZWlnaHQ6IDJyZW07XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlcjogMnB4IHJnYigyNTUsIDI1NSwgMjU1KSBzb2xpZDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xuICAgIH1cbiAgICAuZG90OmhvdmVye1xuICAgICAgICBib3JkZXI6IHJnYigyMzIsIDMxLCAyNDcpIHNvbGlkIDNweDtcbiAgICB9XG4uc3RlcC1udW17XG4gICAgY29sb3I6IGhzbCgyMjgsIDEwMCUsIDg0JSk7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbmgxe1xuICAgIG1hcmdpbjogMDtcbiAgICBjb2xvcjpoc2woMjEzLCA5NiUsIDE4JSk7XG59XG4uaW5zdHJ1Y3Rpb24sIC5wbGFuLWZlZSwgLmFkZC1wbGFuICwgLmNvbmZpcm0tdGV4dCB7XG4gICAgY29sb3I6aHNsKDIzMSwgMTElLCA2MyUpIDtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICB9XG4gICAgLmNvbmZpcm0tdGV4dHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICB9XG5cbi5iYWNrLWJ0bntcbiAgICBjb2xvcjpoc2woMjMxLCAxMSUsIDYzJSkgOyBcbn1cbi8qIHBlcnNvbmFsIGluZm8gZm9ybSAqL1xuLnN0ZXAtb25lLCAuc3RlcC10d28sIC50YWItdGhyZWUsIC50YWItZm91ciAsIC5zdGVwLWZpdmUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgbWFyZ2luOiAxcmVtO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDAsIDAlLCAxMDAlKTtcbiAgICBwYWRkaW5nOiAxcmVtO1xuXG4gICAgIH1cbiAgLmVycm9yLW1zZ3tcbiAgICBtYXJnaW46IDFweDtcbiAgICB3aWR0aDogNjAlO1xuICAgIGNvbG9yOiAgaHNsKDM1NCwgODQlLCA1NyUpO1xuICAgIHRleHQtYWxpZ246IGVuZDtcbn1cblxuLmxhYmVsLWhvbGRlcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgbWFyZ2luOiAwLjNyZW07XG4gICAgXG59XG5pbnB1dHtcbiAgICB3aWR0aDogNjAlO1xuICAgYm9yZGVyOiAxcHggcmdiKDU1LCA1NSwgNTUpIHNvbGlkO1xuICAgcGFkZGluZzogMC42cmVtO1xuICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xuICAgY29sb3I6aHNsKDIxNCwgOTMlLCAxMiUpO1xuICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgIGZvbnQtc2l6ZTogMXJlbTtcbiB9XG5sYWJlbHtcbiAgICBjb2xvcjpoc2woMjEzLCA5NiUsIDE4JSk7O1xufVxuLmludmFsaWR7XG4gICAgYm9yZGVyOiAycHggIGhzbCgzNTQsIDg0JSwgNTclKSBzb2xpZDtcbiAgIH1cbi52YWxpZHtcbiAgICBib3JkZXI6IDJweCBncmVlbiAgc29saWQ7XG4gICB9XG4gICAuYnRuLWhvbGRlcntcbiAgICB3aWR0aDogNjQlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBlbmQ7XG4gICAgbWFyZ2luLXRvcDogM3JlbTtcbiAgfVxuICAgIGlucHV0OmZvY3Vze1xuICAgICAgICBib3JkZXI6M3B4IHNvbGlkIHJnYigwLCA0LCAyNTUpO1xuICAgICAgICB9XG4gICAgLyogdGFiIHR3byAqL1xuICAgIC5wbGFuc3tcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZ2FwOiAxcmVtO1xuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgIH1cbiAgIC5wbGFuLWhvbGRlcntcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIGhzbCgyMTMsIDk2JSwgMTglKTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgYWxpZ24taXRlbXM6ZmxleC1zdGFydDtcbiAgICAgICAgd2lkdGg6IDIwMHB4O1xuICAgICAgICBoZWlnaHQ6IDE5MHB4O1xuICAgICAgICBwYWRkaW5nOiAxcmVtO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxuICAgLnBsYW4taG9sZGVyOmhvdmVye1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMjI5LCAyNCUsIDg3JSk7XG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIGhzbCgyNDMsIDEwMCUsIDYyJSk7XG4gICB9XG4gICAuYWJvdXQtcGxhbntcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgd2lkdGg6IGZpdC1jb250ZW50O1xuICAgfVxuICAgLnBsYW4tZGV0YWlsLCAuYWJvdXQtcGxhbntcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgZ2FwOiAwLjNyZW07XG4gICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgfVxuICAgLnBsYW4tbmFtZXtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgY29sb3I6IGhzbCgyMTMsIDk2JSwgMTglKTtcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgfVxuICAgLmljb24taG9sZGVye1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEuNXJlbTtcbiAgIH0gXG4gICAudG9nZ2xlLWhvbGRlcntcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZ2FwOiAxcmVtO1xuICAgICAgICBtYXJnaW46IDFyZW07XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBib3JkZXItcmFkaXVzOjVweCA7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6aHNsKDIyOSwgMjQlLCA4NyUpO1xuICAgICAgICBwYWRkaW5nOiAwLjVyZW07XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbiAgICB9XG4gICAudG9nZ2xle1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgd2lkdGg6IDUwcHg7XG4gICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjpoc2woMjEzLCA5NiUsIDE4JSk7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XG4gICAgfVxuICAgLnRvZ2dsZTo6YWZ0ZXJ7XG4gICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgICB3aWR0aDogMjBweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICB0b3A6IDVweDtcbiAgICAgICAgbGVmdDogMXB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMCwgMCUsIDEwMCUpO1xuICAgfVxuICAuY2hlY2tib3g6Y2hlY2tlZCArIC50b2dnbGU6OmFmdGVye1xuICAgICAgICBsZWZ0OiAyNXB4O1xuICAgICB9XG4gICAgLmNoZWNrYm94e1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgICAubmF2LWJ0bnN7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xuICAgICAgICBtYXJnaW46IDFyZW07XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGhzbCgwLCAwJSwgMTAwJSk7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbiAgICAgICAgd2lkdGg6IDkwJTtcbiAgICAgICAgcGFkZGluZzogMC42cmVtO1xuXG4gICAgIH1cbiAgICBcbiAgICAudGFiLXR3by1idG4sIC50YWItdGhyZWUtYnRuLCAudGFiLWZvdXItYnRuLCAudGFiLWZvdXItY29uZmlybS1idG4gLCAudGFiLW9uZS1idG57XG4gICAgICAgIHBhZGRpbmc6IDFyZW07XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGhzbCgyMTMsIDk2JSwgMTglKTtcbiAgICAgICAgY29sb3I6IGF6dXJlO1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIHdpZHRoOiBmaXQtY29udGVudDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xuICAgIH1cbiAgIFxuICAgLmFib3V0LWFkZHN7XG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICBoc2woMjQzLCAxMDAlLCA2MiUpO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAwLjRyZW07XG4gICAgICAgIHBhZGRpbmc6IDAuNXJlbTtcbiAgICAgICAgbWFyZ2luOiAwLjVyZW07XG4gICAgICAgfVxuICAgIC5hYm91dC1hZGRzOmhvdmVye1xuICAgICAgICBib3gtc2hhZG93OiByZ2IoMjUxLCAwLCAwKSAtMXB4IDNweCAzcHg7XG4gICAgfVxuICAgIC5hZGQtaG9sZGVyLC5hZGQtaGVhZGVye1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIGdhcDoxcmVtO1xuICAgIH1cbiAgICAuYWRkLXRpdGxle1xuICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICB9XG4gICAgLmFib3V0LXBsYW57XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgfVxuICAgIC5hZGQtdGl0bGUsLmFkZC1wbGFue1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgfVxuICAgIC51c2VyLWFkZHtcbiAgICAgICAgd2lkdGg6IDFyZW07XG4gICAgICAgIGhlaWdodDogMXJlbTtcbiAgICAgICAgbWFyZ2luLXRvcDogMC41cmVtO1xuICAgIH1cbiAgICAvKiB0YWIgZm91ciAqL1xuICAgIC50YWItZm91cntcbiAgICAgICAgbWFyZ2luOiAxLjVyZW07XG4gICAgfVxuICAgIC5zdW1tYXJ5LXBsYW4sIC5hZGQtZGV0YWlsLCAuc3VtbWFyeS10b3RhbHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgIHBhZGRpbmc6IDAuNXJlbTtcbiAgICAgICBjb2xvcjpoc2woMjEzLCA5NiUsIDE4JSk7XG4gICAgICAgXG4gICAgfVxuICAgIC5zdW1tYXJ5LXNlcnZpY2Vze1xuICAgICAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuICAgIH1cbiAgIC5hZGQtZGV0YWlsID4gcHtcbiAgICBtYXJnaW46IDA7XG4gICB9XG4gICAgXG4gICAgLnNlbGVjdGVkLXBsYW57XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMC41cmVtO1xuXG4gICAgfVxuICAgIC5zdW1tYXJ5LXByaWNle1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICB9XG4gICAgLmNoYW5nZS1wbGFue1xuICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIFxuICAgIH1cbiAgICAuY2hhbmdlLXBsYW46aG92ZXJ7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAgaHNsKDI0MywgMTAwJSwgNjIlKTtcbiAgICAgICAgY29sb3I6IGhzbCgyNDMsIDEwMCUsIDYyJSk7XG4gICAgfVxuICAgIC5hZGQtbmFtZSwgLmNoYW5nZS1wbGFue1xuICAgICAgICBjb2xvcjpoc2woMjMxLCAxMSUsIDYzJSkgOyBcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgIH1cbiAgICAub25saW5lLXByaWNlLCAudGhlbWUtcHJpY2UsIC5zdG9yYWdlLXByaWNle1xuICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgfVxuICAgIC50b3RhbC1wcmljZXtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgfVxuICAgIFxuICAgIGhye1xuICAgICAgICBtYXJnaW46IDFyZW07XG4gICAgfVxuICAgIC5zZXJ2aWNlLWhvbGRlcntcbiAgICAgICAgcGFkZGluZzogMC41cmVtO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMjI5LCAyNCUsIDg3JSk7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbiAgICAgICAgaGVpZ2h0OiBmaXQtY29udGVudDtcbiAgICAgICAgfVxuICAgIC5iYWNrLWJ0bntcbiAgICAgICAgY29sb3I6aHNsKDIzMSwgMTElLCA2MyUpIDsgXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGhzbCgyMzEsIDEwMCUsIDk5JSk7XG4gICAgICAgIH1cbiAgICAvKiBzdGVwIGZpdmUgdGFiKi9cbiAgICAuc3RlcC1maXZle1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgcGFkZGluZzogMXJlbTtcbiAgICAgICAgbWFyZ2luLXRvcDogMTUlO1xuICAgICAgICBcbiAgICB9XG4gICAgLmNvbmZpcm0tdGV4dHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cbkBtZWRpYSAobWF4LXdpZHRoOjU2NXB4KSB7XG4gICAgLyogbmF2ICovXG4gICAgYm9keXtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGhzbCgyMDYsIDk0JSwgODclKTtcbiAgICAgICAgfVxuICAgIG5hdntcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTp1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19ffSkgO1xuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiB0b3A7XG4gICAgICAgIGhlaWdodDogMzB2aDtcbiAgICAgICAgd2lkdGg6IDEwMHZ3O1xuICAgIH1cbiAgICB1bHtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICB9XG4gICAubmF2LWRlc2NyaXB0aW9ue1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgICAvKiBzdGVwIG9uZSAqL1xuICAgIC5zdGVwLW9uZXtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBib3R0b206IDE2JTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xuICAgICAgICB3aWR0aDogNzAlO1xuICAgICAgICBtYXgtaGVpZ2h0OiA0OTBweDtcbiAgICB9XG4gICAgaW5wdXR7XG4gICAgICAgIHdpZHRoOiA4MCU7XG4gICAgfVxuICAgIC5lcnJvci1tc2d7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB0ZXh0LWFsaWduOiBzdGFydDtcbiAgICB9XG4gICAgLnN0ZXAtdHdvLCAudGFiLXRocmVlLCAudGFiLWZvdXIsIC5zdGVwLWZpdmV7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xuICAgICAgICB3aWR0aDogNzAlO1xuICAgICAgIH1cbiAgICAgICAuc3RlcC10d297XG4gICAgICAgIGJvdHRvbTogNnJlbTtcbiAgICAgICB9XG4gICAgICAgLnRhYi10aHJlZXtcbiAgICAgICAgYm90dG9tOiA4cmVtO1xuICAgICAgIH1cbiAgICAgICAudGFiLWZvdXJ7XG4gICAgICAgIGJvdHRvbTogNi40cmVtO1xuICAgICAgICByaWdodDogMXJlbTtcbiAgICAgICB9XG4gICAgICAgLnN0ZXAtZml2ZXtcbiAgICAgICAgYm90dG9tOiAxMHJlbTtcbiAgICAgICB9XG4gICAgICAgXG4gICAgLmFkZC1oZWFkZXJ7XG4gICAgICAgIGdhcDogMC4zcmVtO1xuICAgIH1cbiAgICAvKiBzdGVwIHRocmVlICovXG4gICAgXG4gICAgLmFib3V0LWFkZHN7XG4gICAgICAgcGFkZGluZzogMC41cmVtO1xuICAgICAgIG1hcmdpbjogMDtcbiAgICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICAgICAgIFxuICAgIH1cbiAgICBcbiAgICAuYWRkLXRpdGxle1xuICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgfVxuICAgIC5hZGQtcGxhbntcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgZm9udC1zaXplOiAwLjdyZW07XG4gICAgICAgIH1cbiAgIFxuICAgIC8qIHN0ZXAgdHdvIGNhcmRzICovXG4gICAgLnBsYW5ze1xuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgIGdhcDogMC41cmVtO1xuICAgIH1cbiAgICAuZXJyb3ItY2FyZHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgIH1cbiAgICAucGxhbi1mZWV7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMC43cmVtO1xuICAgIH1cbiBcbi5uYXYtYnRuc3tcbiAgICBtYXJnaW46IDA7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMjhyZW07XG4gICAgcmlnaHQ6IDAuMXJlbTtcbn1cbi5idG4taG9sZGVye1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IDJyZW07XG4gICAgbGVmdDogMzUlO1xufVxuXG4udGFiLWZvdXIgPiAubmF2LWJ0bnN7XG4gICAgdG9wOiAyOHJlbTtcbn1cbi5zZXJ2aWNlLWhvbGRlcntcbiAgICBoZWlnaHQ6IDI3MHB4O1xufVxuXG4gICAgLnBsYW4taG9sZGVye1xuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGhlaWdodDogODRweDtcbiAgICAgICAgcGFkZGluZzogNXB4O1xuICAgIH1cbiAgICAuYWJvdXQtcGxhbiB7XG4gICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgZ2FwOiAwLjVyZW07XG4gICAgfVxuICAgIC50b2dnbGUtaG9sZGVye1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIG1hcmdpbi10b3A6IDNweDtcbiAgICB9XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLDJCQUEyQjtBQUMzQjtJQUNJLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQiw0REFBeUU7RUFDM0U7QUFDRjtJQUNJLG1DQUFtQztJQUNuQyxpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLHFCQUFxQjtJQUNyQixhQUFhO0lBQ2IsY0FBYztJQUNkLDhCQUE4QjtJQUM5Qix5QkFBeUI7QUFDN0I7QUFDQSxjQUFjOztBQUVkO0lBQ0kseURB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Q0ksVUFBVTtBQUNkO0FBQ0E7SUFDSSxhQUFhO0FBQ2pCOztJQUVJO1FBQ0ksZUFBZTtRQUNmLFdBQVc7UUFDWCx1QkFBdUI7UUFDdkIsdUJBQXVCO1FBQ3ZCLFlBQVk7UUFDWixZQUFZO0lBQ2hCO0lBQ0E7T0FDRyxtQkFBbUI7UUFDbEIsbUJBQW1CO1FBQ25CLFdBQVc7SUFDZjtJQUNBO1FBQ0ksU0FBUztRQUNULGVBQWU7SUFDbkI7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiB1YnVudHUtcmVndWxhciAtIGxhdGluICovXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZGlzcGxheTogc3dhcDsgXFxuICAgIGZvbnQtZmFtaWx5OiAnVWJ1bnR1JztcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICBzcmM6IHVybCgnLi9hc3NldHMvZm9udHMvdWJ1bnR1LXYyMC1sYXRpbi1yZWd1bGFyLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpOyBcXG4gIH1cXG5ib2R5e1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAgaHNsKDAsIDAlLCAxMDAlKTtcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxuICAgIG1heC13aWR0aDogMTAwdnc7XFxuICAgIGZvbnQtZmFtaWx5OiAnVWJ1bnR1JztcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgbWFyZ2luOiAwLjVyZW07XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDJmcjtcXG4gICAgY29sb3I6IGhzbCgyMTMsIDk2JSwgMTglKTtcXG59XFxuLyogbmF2IHN0eWxlICovXFxuXFxubmF2e1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi9hc3NldHMvaW1hZ2VzL2JnLXNpZGViYXItZGVza3RvcC5zdmcpO1xcbiAgICBcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogYm90dG9tO1xcbiAgICBoZWlnaHQ6IDk1dmg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gIH1cXG51bHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcbmxpe1xcbiAgICBtYXJnaW46IDFyZW07XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG4ubmF2LWhvbGRlcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAxcmVtO1xcbn1cXG4uc3RlcC1uYW1le1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuLnN0ZXAtbmFtZTpob3ZlcntcXG4gICAgdGV4dC1zaGFkb3c6IDJweCAycHggIHJnYigxMDEsIDUsIDExOCk7XFxuICAgIH1cXG4uZG90e1xcbiAgICB3aWR0aDogMnJlbTtcXG4gICAgaGVpZ2h0OiAycmVtO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlcjogMnB4IHJnYigyNTUsIDI1NSwgMjU1KSBzb2xpZDtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcbiAgICB9XFxuICAgIC5kb3Q6aG92ZXJ7XFxuICAgICAgICBib3JkZXI6IHJnYigyMzIsIDMxLCAyNDcpIHNvbGlkIDNweDtcXG4gICAgfVxcbi5zdGVwLW51bXtcXG4gICAgY29sb3I6IGhzbCgyMjgsIDEwMCUsIDg0JSk7XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcbmgxe1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGNvbG9yOmhzbCgyMTMsIDk2JSwgMTglKTtcXG59XFxuLmluc3RydWN0aW9uLCAucGxhbi1mZWUsIC5hZGQtcGxhbiAsIC5jb25maXJtLXRleHQge1xcbiAgICBjb2xvcjpoc2woMjMxLCAxMSUsIDYzJSkgO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIH1cXG4gICAgLmNvbmZpcm0tdGV4dHtcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgIH1cXG5cXG4uYmFjay1idG57XFxuICAgIGNvbG9yOmhzbCgyMzEsIDExJSwgNjMlKSA7IFxcbn1cXG4vKiBwZXJzb25hbCBpbmZvIGZvcm0gKi9cXG4uc3RlcC1vbmUsIC5zdGVwLXR3bywgLnRhYi10aHJlZSwgLnRhYi1mb3VyICwgLnN0ZXAtZml2ZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIG1hcmdpbjogMXJlbTtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDAsIDAlLCAxMDAlKTtcXG4gICAgcGFkZGluZzogMXJlbTtcXG5cXG4gICAgIH1cXG4gIC5lcnJvci1tc2d7XFxuICAgIG1hcmdpbjogMXB4O1xcbiAgICB3aWR0aDogNjAlO1xcbiAgICBjb2xvcjogIGhzbCgzNTQsIDg0JSwgNTclKTtcXG4gICAgdGV4dC1hbGlnbjogZW5kO1xcbn1cXG5cXG4ubGFiZWwtaG9sZGVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBtYXJnaW46IDAuM3JlbTtcXG4gICAgXFxufVxcbmlucHV0e1xcbiAgICB3aWR0aDogNjAlO1xcbiAgIGJvcmRlcjogMXB4IHJnYig1NSwgNTUsIDU1KSBzb2xpZDtcXG4gICBwYWRkaW5nOiAwLjZyZW07XFxuICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgIGNvbG9yOmhzbCgyMTQsIDkzJSwgMTIlKTtcXG4gICBmb250LXdlaWdodDogNTAwO1xcbiAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gfVxcbmxhYmVse1xcbiAgICBjb2xvcjpoc2woMjEzLCA5NiUsIDE4JSk7O1xcbn1cXG4uaW52YWxpZHtcXG4gICAgYm9yZGVyOiAycHggIGhzbCgzNTQsIDg0JSwgNTclKSBzb2xpZDtcXG4gICB9XFxuLnZhbGlke1xcbiAgICBib3JkZXI6IDJweCBncmVlbiAgc29saWQ7XFxuICAgfVxcbiAgIC5idG4taG9sZGVye1xcbiAgICB3aWR0aDogNjQlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcXG4gICAgbWFyZ2luLXRvcDogM3JlbTtcXG4gIH1cXG4gICAgaW5wdXQ6Zm9jdXN7XFxuICAgICAgICBib3JkZXI6M3B4IHNvbGlkIHJnYigwLCA0LCAyNTUpO1xcbiAgICAgICAgfVxcbiAgICAvKiB0YWIgdHdvICovXFxuICAgIC5wbGFuc3tcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBnYXA6IDFyZW07XFxuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgICAgICB9XFxuICAgLnBsYW4taG9sZGVye1xcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIGhzbCgyMTMsIDk2JSwgMTglKTtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgYWxpZ24taXRlbXM6ZmxleC1zdGFydDtcXG4gICAgICAgIHdpZHRoOiAyMDBweDtcXG4gICAgICAgIGhlaWdodDogMTkwcHg7XFxuICAgICAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgfVxcbiAgIC5wbGFuLWhvbGRlcjpob3ZlcntcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGhzbCgyMjksIDI0JSwgODclKTtcXG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIGhzbCgyNDMsIDEwMCUsIDYyJSk7XFxuICAgfVxcbiAgIC5hYm91dC1wbGFue1xcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gICAgICAgIHdpZHRoOiBmaXQtY29udGVudDtcXG4gICB9XFxuICAgLnBsYW4tZGV0YWlsLCAuYWJvdXQtcGxhbntcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgZ2FwOiAwLjNyZW07XFxuICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gICB9XFxuICAgLnBsYW4tbmFtZXtcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgICAgICBjb2xvcjogaHNsKDIxMywgOTYlLCAxOCUpO1xcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xcbiAgIH1cXG4gICAuaWNvbi1ob2xkZXJ7XFxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEuNXJlbTtcXG4gICB9IFxcbiAgIC50b2dnbGUtaG9sZGVye1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGdhcDogMXJlbTtcXG4gICAgICAgIG1hcmdpbjogMXJlbTtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6NXB4IDtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6aHNsKDIyOSwgMjQlLCA4NyUpO1xcbiAgICAgICAgcGFkZGluZzogMC41cmVtO1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgICB9XFxuICAgLnRvZ2dsZXtcXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICAgIHdpZHRoOiA1MHB4O1xcbiAgICAgICAgaGVpZ2h0OiAzMHB4O1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjpoc2woMjEzLCA5NiUsIDE4JSk7XFxuICAgICAgICBib3JkZXI6IG5vbmU7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XFxuICAgIH1cXG4gICAudG9nZ2xlOjphZnRlcntcXG4gICAgICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgaGVpZ2h0OiAyMHB4O1xcbiAgICAgICAgd2lkdGg6IDIwcHg7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgICAgICB0b3A6IDVweDtcXG4gICAgICAgIGxlZnQ6IDFweDtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGhzbCgwLCAwJSwgMTAwJSk7XFxuICAgfVxcbiAgLmNoZWNrYm94OmNoZWNrZWQgKyAudG9nZ2xlOjphZnRlcntcXG4gICAgICAgIGxlZnQ6IDI1cHg7XFxuICAgICB9XFxuICAgIC5jaGVja2JveHtcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIH1cXG4gICAgLm5hdi1idG5ze1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcXG4gICAgICAgIG1hcmdpbjogMXJlbTtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGhzbCgwLCAwJSwgMTAwJSk7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICAgICAgICB3aWR0aDogOTAlO1xcbiAgICAgICAgcGFkZGluZzogMC42cmVtO1xcblxcbiAgICAgfVxcbiAgICBcXG4gICAgLnRhYi10d28tYnRuLCAudGFiLXRocmVlLWJ0biwgLnRhYi1mb3VyLWJ0biwgLnRhYi1mb3VyLWNvbmZpcm0tYnRuICwgLnRhYi1vbmUtYnRue1xcbiAgICAgICAgcGFkZGluZzogMXJlbTtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGhzbCgyMTMsIDk2JSwgMTglKTtcXG4gICAgICAgIGNvbG9yOiBhenVyZTtcXG4gICAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICAgIHdpZHRoOiBmaXQtY29udGVudDtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gICAgfVxcbiAgIFxcbiAgIC5hYm91dC1hZGRze1xcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgIGhzbCgyNDMsIDEwMCUsIDYyJSk7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiAwLjRyZW07XFxuICAgICAgICBwYWRkaW5nOiAwLjVyZW07XFxuICAgICAgICBtYXJnaW46IDAuNXJlbTtcXG4gICAgICAgfVxcbiAgICAuYWJvdXQtYWRkczpob3ZlcntcXG4gICAgICAgIGJveC1zaGFkb3c6IHJnYigyNTEsIDAsIDApIC0xcHggM3B4IDNweDtcXG4gICAgfVxcbiAgICAuYWRkLWhvbGRlciwuYWRkLWhlYWRlcntcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICAgICAgZ2FwOjFyZW07XFxuICAgIH1cXG4gICAgLmFkZC10aXRsZXtcXG4gICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgfVxcbiAgICAuYWJvdXQtcGxhbntcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAgIH1cXG4gICAgLmFkZC10aXRsZSwuYWRkLXBsYW57XFxuICAgICAgICBtYXJnaW46IDA7XFxuICAgIH1cXG4gICAgLnVzZXItYWRke1xcbiAgICAgICAgd2lkdGg6IDFyZW07XFxuICAgICAgICBoZWlnaHQ6IDFyZW07XFxuICAgICAgICBtYXJnaW4tdG9wOiAwLjVyZW07XFxuICAgIH1cXG4gICAgLyogdGFiIGZvdXIgKi9cXG4gICAgLnRhYi1mb3Vye1xcbiAgICAgICAgbWFyZ2luOiAxLjVyZW07XFxuICAgIH1cXG4gICAgLnN1bW1hcnktcGxhbiwgLmFkZC1kZXRhaWwsIC5zdW1tYXJ5LXRvdGFse1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgICAgcGFkZGluZzogMC41cmVtO1xcbiAgICAgICBjb2xvcjpoc2woMjEzLCA5NiUsIDE4JSk7XFxuICAgICAgIFxcbiAgICB9XFxuICAgIC5zdW1tYXJ5LXNlcnZpY2Vze1xcbiAgICAgICAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gICAgfVxcbiAgIC5hZGQtZGV0YWlsID4gcHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgIH1cXG4gICAgXFxuICAgIC5zZWxlY3RlZC1wbGFue1xcbiAgICAgICAgbWFyZ2luOiAwO1xcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDAuNXJlbTtcXG5cXG4gICAgfVxcbiAgICAuc3VtbWFyeS1wcmljZXtcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgfVxcbiAgICAuY2hhbmdlLXBsYW57XFxuICAgICAgICBvdXRsaW5lOiBub25lO1xcbiAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgICAgcGFkZGluZzogMDtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgXFxuICAgIH1cXG4gICAgLmNoYW5nZS1wbGFuOmhvdmVye1xcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICBoc2woMjQzLCAxMDAlLCA2MiUpO1xcbiAgICAgICAgY29sb3I6IGhzbCgyNDMsIDEwMCUsIDYyJSk7XFxuICAgIH1cXG4gICAgLmFkZC1uYW1lLCAuY2hhbmdlLXBsYW57XFxuICAgICAgICBjb2xvcjpoc2woMjMxLCAxMSUsIDYzJSkgOyBcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgICAgICBmb250LXNpemU6IDFyZW07XFxuICAgIH1cXG4gICAgLm9ubGluZS1wcmljZSwgLnRoZW1lLXByaWNlLCAuc3RvcmFnZS1wcmljZXtcXG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgIH1cXG4gICAgLnRvdGFsLXByaWNle1xcbiAgICAgICAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICB9XFxuICAgIFxcbiAgICBocntcXG4gICAgICAgIG1hcmdpbjogMXJlbTtcXG4gICAgfVxcbiAgICAuc2VydmljZS1ob2xkZXJ7XFxuICAgICAgICBwYWRkaW5nOiAwLjVyZW07XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMjI5LCAyNCUsIDg3JSk7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICAgICAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgICAgICAgfVxcbiAgICAuYmFjay1idG57XFxuICAgICAgICBjb2xvcjpoc2woMjMxLCAxMSUsIDYzJSkgOyBcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGhzbCgyMzEsIDEwMCUsIDk5JSk7XFxuICAgICAgICB9XFxuICAgIC8qIHN0ZXAgZml2ZSB0YWIqL1xcbiAgICAuc3RlcC1maXZle1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgcGFkZGluZzogMXJlbTtcXG4gICAgICAgIG1hcmdpbi10b3A6IDE1JTtcXG4gICAgICAgIFxcbiAgICB9XFxuICAgIC5jb25maXJtLXRleHR7XFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIH1cXG5AbWVkaWEgKG1heC13aWR0aDo1NjVweCkge1xcbiAgICAvKiBuYXYgKi9cXG4gICAgYm9keXtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDIwNiwgOTQlLCA4NyUpO1xcbiAgICAgICAgfVxcbiAgICBuYXZ7XFxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOnVybCguL2Fzc2V0cy9pbWFnZXMvYmctc2lkZWJhci1tb2JpbGUuc3ZnKSA7XFxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiB0b3A7XFxuICAgICAgICBoZWlnaHQ6IDMwdmg7XFxuICAgICAgICB3aWR0aDogMTAwdnc7XFxuICAgIH1cXG4gICAgdWx7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICB9XFxuICAgLm5hdi1kZXNjcmlwdGlvbntcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIH1cXG4gICAgLyogc3RlcCBvbmUgKi9cXG4gICAgLnN0ZXAtb25le1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgYm90dG9tOiAxNiU7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICAgICAgICB3aWR0aDogNzAlO1xcbiAgICAgICAgbWF4LWhlaWdodDogNDkwcHg7XFxuICAgIH1cXG4gICAgaW5wdXR7XFxuICAgICAgICB3aWR0aDogODAlO1xcbiAgICB9XFxuICAgIC5lcnJvci1tc2d7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIHRleHQtYWxpZ246IHN0YXJ0O1xcbiAgICB9XFxuICAgIC5zdGVwLXR3bywgLnRhYi10aHJlZSwgLnRhYi1mb3VyLCAuc3RlcC1maXZle1xcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgICAgICAgd2lkdGg6IDcwJTtcXG4gICAgICAgfVxcbiAgICAgICAuc3RlcC10d297XFxuICAgICAgICBib3R0b206IDZyZW07XFxuICAgICAgIH1cXG4gICAgICAgLnRhYi10aHJlZXtcXG4gICAgICAgIGJvdHRvbTogOHJlbTtcXG4gICAgICAgfVxcbiAgICAgICAudGFiLWZvdXJ7XFxuICAgICAgICBib3R0b206IDYuNHJlbTtcXG4gICAgICAgIHJpZ2h0OiAxcmVtO1xcbiAgICAgICB9XFxuICAgICAgIC5zdGVwLWZpdmV7XFxuICAgICAgICBib3R0b206IDEwcmVtO1xcbiAgICAgICB9XFxuICAgICAgIFxcbiAgICAuYWRkLWhlYWRlcntcXG4gICAgICAgIGdhcDogMC4zcmVtO1xcbiAgICB9XFxuICAgIC8qIHN0ZXAgdGhyZWUgKi9cXG4gICAgXFxuICAgIC5hYm91dC1hZGRze1xcbiAgICAgICBwYWRkaW5nOiAwLjVyZW07XFxuICAgICAgIG1hcmdpbjogMDtcXG4gICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG4gICAgICAgXFxuICAgIH1cXG4gICAgXFxuICAgIC5hZGQtdGl0bGV7XFxuICAgICAgICBmb250LXNpemU6IDFyZW07XFxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICB9XFxuICAgIC5hZGQtcGxhbntcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAgICAgICBmb250LXNpemU6IDAuN3JlbTtcXG4gICAgICAgIH1cXG4gICBcXG4gICAgLyogc3RlcCB0d28gY2FyZHMgKi9cXG4gICAgLnBsYW5ze1xcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICAgICAgZ2FwOiAwLjVyZW07XFxuICAgIH1cXG4gICAgLmVycm9yLWNhcmR7XFxuICAgICAgICBtYXJnaW46IDA7XFxuICAgICAgICBwYWRkaW5nOiAwO1xcbiAgICB9XFxuICAgIC5wbGFuLWZlZXtcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgICAgICBmb250LXNpemU6IDAuN3JlbTtcXG4gICAgfVxcbiBcXG4ubmF2LWJ0bnN7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDI4cmVtO1xcbiAgICByaWdodDogMC4xcmVtO1xcbn1cXG4uYnRuLWhvbGRlcntcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB0b3A6IDJyZW07XFxuICAgIGxlZnQ6IDM1JTtcXG59XFxuXFxuLnRhYi1mb3VyID4gLm5hdi1idG5ze1xcbiAgICB0b3A6IDI4cmVtO1xcbn1cXG4uc2VydmljZS1ob2xkZXJ7XFxuICAgIGhlaWdodDogMjcwcHg7XFxufVxcblxcbiAgICAucGxhbi1ob2xkZXJ7XFxuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICBoZWlnaHQ6IDg0cHg7XFxuICAgICAgICBwYWRkaW5nOiA1cHg7XFxuICAgIH1cXG4gICAgLmFib3V0LXBsYW4ge1xcbiAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIGdhcDogMC41cmVtO1xcbiAgICB9XFxuICAgIC50b2dnbGUtaG9sZGVye1xcbiAgICAgICAgbWFyZ2luOiAwO1xcbiAgICAgICAgbWFyZ2luLXRvcDogM3B4O1xcbiAgICB9XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gY2xhc3MgdG8gaG9sZCBpbmZvXG5pbXBvcnQgYXJjYWRlaWNvbiBmcm9tIFwiLi9hc3NldHMvaW1hZ2VzL2ljb24tYXJjYWRlLmF2Z1wiO1xuZXhwb3J0IGNsYXNzIFVzZXJQZXJzb25hbEluZm8ge1xuICBjb25zdHJ1Y3RvcihvcHRpb25zID0ge30pIHtcbiAgICB0aGlzLm5hbWUgPSBvcHRpb25zLm5hbWUgfHwgXCJcIjtcbiAgICB0aGlzLmVtYWlsID0gb3B0aW9ucy5lbWFpbCB8fCBcIlwiO1xuICAgIHRoaXMucGhvbmUgPSBvcHRpb25zLnBob25lIHx8IFwiXCI7XG4gIH1cbn1cbmV4cG9ydCBjbGFzcyBVc2VyUGxhbkRhdGEge1xuICBjb25zdHJ1Y3RvcihvcHRpb25zID0ge30pIHtcbiAgICB0aGlzLnBsYW4gPSBvcHRpb25zLnBsYW4gfHwgZmFsc2U7XG4gICAgLy8gY2hlY2tib3hcbiAgICB0aGlzLmNoZWNrYm94ID0gb3B0aW9ucy5jaGVja2JveCB8fCBcIlwiO1xuICAgIHRoaXMuYXJjYWRlID0gb3B0aW9ucy5hcmNhZGUgfHwgXCJcIjtcbiAgICB0aGlzLmFkdmFuY2VkID0gb3B0aW9ucy5hZHZhbmNlZCB8fCBcIlwiO1xuICAgIHRoaXMucHJvID0gb3B0aW9ucy5wcm8gfHwgXCJcIjtcbiAgICB0aGlzLmJvbnVzID0gb3B0aW9ucy5ib251cyB8fCBcIm5vbmVcIjtcbiAgICB0aGlzLnNlbGVjdGVkUGxhbiA9IG9wdGlvbnMuc2VsZWN0ZWRQbGFuIHx8IFwiXCI7XG4gICAgdGhpcy5tb25odGx5ID0gb3B0aW9ucy5tb250aGx5IHx8IFwiXCI7XG4gICAgdGhpcy55ZWFybHkgPSBvcHRpb25zLnllYXJseSB8fCBcIlwiO1xuICB9XG5cbiAgeWVhcmx5UHJpY2UoKSB7XG4gICAgdGhpcy5hcmNhZGUgPSBcIiQ5MC95clwiO1xuICAgIHRoaXMuYWR2YW5jZWQgPSBcIiQxMjAveXJcIjtcbiAgICB0aGlzLnBybyA9IFwiJDE1MC95clwiO1xuICB9XG5cbiAgbW9udGhseVByaWNlKCkge1xuICAgIHRoaXMuYXJjYWRlID0gXCIkOS9tb1wiO1xuICAgIHRoaXMuYWR2YW5jZWQgPSBcIiQxMi9tb1wiO1xuICAgIHRoaXMucHJvID0gXCIkMTUvbW9cIjtcbiAgfVxuXG4gIGNob29zZW5QbGFuKCkge1xuICAgIGlmICh0aGlzLnBsYW4gPT09IHRydWUpIHtcbiAgICAgIHRoaXMueWVhcmx5UHJpY2UoKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMucGxhbiA9PT0gZmFsc2UpIHtcbiAgICAgIHRoaXMubW9udGhseVByaWNlKCk7XG4gICAgfVxuICB9XG5cbiAgc3R5bGUoKSB7XG4gICAgaWYgKHRoaXMucGxhbiA9PT0gZmFsc2UpIHtcbiAgICAgIHRoaXMubW9udGhseSA9IFwiaHNsKDIxMywgOTYlLCAxOCVcIjtcbiAgICAgIHRoaXMueWVhcmx5ID0gXCJoc2woMjMxLCAxMSUsIDYzJSlcIjtcbiAgICB9IGVsc2UgaWYgKHRoaXMucGxhbiA9PT0gdHJ1ZSkge1xuICAgICAgdGhpcy5tb250aGx5ID0gXCJoc2woMjEzLCA5NiUsIDE4JVwiO1xuICAgICAgdGhpcy55ZWFybHkgPSBcImhzbCgyMzEsIDExJSwgNjMlKVwiO1xuICAgIH1cbiAgfVxufVxuZXhwb3J0IGNsYXNzIFVzZXJTZXJ2aWNlcyB7XG4gIGNvbnN0cnVjdG9yKG9wdGlvbnMgPSB7fSkge1xuICAgIC8vIGdldCBwbGFuIGlmIG1lb250aGx5IG9yIHllYXJseSh0cnVlIGlzIG1vbnRobHkgc2V0IGluIHN0ZXAgMiBvciB1c2VyZGF0YSBvYmopXG4gICAgdGhpcy5hZGRQbGFuID0gb3B0aW9ucy5hZGRQbGFuIHx8IGZhbHNlO1xuICAgIC8vXG5cbiAgICAvLyBjaGVja2JveCB2YWx1ZVxuICAgIHRoaXMub25saW5lID0gb3B0aW9ucy5vbmxpbmUgfHwgXCJcIjtcbiAgICB0aGlzLnN0b3JhZ2UgPSBvcHRpb25zLnN0b3JhZ2UgfHwgXCJcIjtcbiAgICB0aGlzLnRoZW1lID0gb3B0aW9ucy50aGVtZSB8fCBcIlwiO1xuICAgIC8vIHByaWNlXG4gICAgdGhpcy5vbmxpbmVQcmljZSA9IG9wdGlvbnMub25saW5lUHJpY2UgfHwgXCJcIjtcbiAgICB0aGlzLnN0b3JhZ2VQcmljZSA9IG9wdGlvbnMub25saW5lUHJpY2UgfHwgXCJcIjtcbiAgICB0aGlzLnRoZW1lUHJpY2UgPSBvcHRpb25zLm9ubGluZVByaWNlIHx8IFwiXCI7XG4gIH1cblxuICB5ZWFybHlQcmljZSgpIHtcbiAgICB0aGlzLm9ubGluZVByaWNlID0gXCIrJDEwL3lyXCI7XG4gICAgdGhpcy5zdG9yYWdlUHJpY2UgPSBcIiskMjAveXJcIjtcbiAgICB0aGlzLnRoZW1lUHJpY2UgPSBcIiskMjAveXJcIjtcbiAgfVxuXG4gIG1vbnRobHlQcmljZSgpIHtcbiAgICB0aGlzLm9ubGluZVByaWNlID0gXCIrJDEvbW9cIjtcbiAgICB0aGlzLnN0b3JhZ2VQcmljZSA9IFwiKyQyL21vXCI7XG4gICAgdGhpcy50aGVtZVByaWNlID0gXCIrJDIvbW9cIjtcbiAgfVxuXG4gIGNob29zZW5QbGFuKCkge1xuICAgIGlmICh0aGlzLmFkZFBsYW4gPT09IHRydWUpIHtcbiAgICAgIHRoaXMueWVhcmx5UHJpY2UoKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuYWRkUGxhbiA9PT0gZmFsc2UpIHtcbiAgICAgIHRoaXMubW9udGhseVByaWNlKCk7XG4gICAgfVxuICB9XG59XG5cbmNvbnN0IHRhYk9uZSA9IGZ1bmN0aW9uIChvYmopIHtcbiAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgcGVyc29uYWxJbmZvID0gYCBcbiAgICA8ZGl2IGNsYXNzPVwic3RlcC1vbmVcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0taGVhZGVyXCI+XG4gICAgICBcbiAgICAgICAgICAgIDxoMT5QZXJzb25hbCBJbmZvPC9oMT5cbiAgICAgICAgICAgIDxwIGNsYXNzPVwiaW5zdHJ1Y3Rpb25cIj5wbGVhc2UgcHJvdmlkZSB5b3VyIG5hbWUsZW1haWwgYWRyZXNzIGFuZCBwaG9uZSBudW1iZXI8L3A+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWhvbGRlclwiPlxuICAgICAgICAgICAgPGZvcm0gY2xhc3M9XCJwZXJzb25hbC1pbmZvLWZvcm1cIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGFiZWwtaG9sZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJ1c2VyLW5hbWVcIj5OYW1lPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJlcnJvci1tc2dcIiBkYXRhLWVycm9yLW1zZz0wPjwvcD5cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwidXNlci1uYW1lXCIgbmFtZT1cInVzZXItbmFtZVwiIGNsYXNzPSd1c2VyLWluZm8nIGRhdGEtdXNlci1uYW1lIGRhdGEtZXJyb3I9MCBtaW5sZW5ndGg9XCIyXCJcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICBtYXhsZW5ndGg9XCIyMFwiICB2YWx1ZT1cIiR7b2JqLm5hbWV9XCI+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxhYmVsLWhvbGRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwidXNlci1lbWFpbFwiPkVtYWlsIEFkcmVzczwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImVycm9yLW1zZ1wiICBkYXRhLWVycm9yLW1zZz0xPjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImVtYWlsXCIgaWQ9XCJ1c2VyLWVtYWlsXCIgbmFtZT1cInVzZXItZW1haWxcIiBjbGFzcz0ndXNlci1pbmZvJyBkYXRhLXVzZXItZW1haWwgZGF0YS1lcnJvcj0xICB2YWx1ZT1cIiR7b2JqLmVtYWlsfVwiPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxhYmVsLWhvbGRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwidXNlci1waG9uZVwiPlBob25lIE51bWJlcjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiZXJyb3ItbXNnXCIgIGRhdGEtZXJyb3ItbXNnPTI+PC9wPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgIGlkPVwidXNlci1waG9uZVwiIG5hbWU9XCJ1c2VyLXBob25lXCIgY2xhc3M9J3VzZXItaW5mbycgZGF0YS11c2VyLXBob25lIGRhdGEtZXJyb3I9MiAgbWlubGVuZ3RoPVwiMTBcIiBtYXhsZW5ndGg9XCIxNVxuICAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCIke29iai5waG9uZX1cIj5cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICBcbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJidG4taG9sZGVyXCI+PGJ1dHRvbiBjbGFzcz1cInRhYi1vbmUtYnRuXCI+TmV4dCBTdGVwPC9idXR0b24+PC9kaXY+XG4gICAgPC9kaXY+YDtcbiAgZGl2LmlubmVySFRNTCA9IHBlcnNvbmFsSW5mbztcbiAgcmV0dXJuIGRpdjtcbn07XG5jb25zdCB0YWJUd28gPSBmdW5jdGlvbiAob2JqKSB7XG4gIG9iai5jaG9vc2VuUGxhbigpO1xuICBvYmouc3R5bGUoKTtcbiAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgcGxhbiA9IGBcbiAgICA8ZGl2IGNsYXNzPVwic3RlcC10d29cIj5cbiAgICA8ZGl2IGNsYXNzPVwicGxhbi1oZWFkZXJcIj5cbiAgICAgICAgPGgxPlNlbGVjdCB5b3VyIFBsYW48L2gxPlxuICAgICAgICA8cCBjbGFzcz1cImluc3RydWN0aW9uXCI+eW91IGhhdmUgdGhlIG9wdGlvbiBtb250aGx5IG9yIHllYXJseSBiaWxsaW5nLjwvcD5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwicGxhbnNcIiBkYXRhLXBsYW5zID5cbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInBsYW4taG9sZGVyXCIgZGF0YS1wbGFuPVwiMFwiPlxuICAgICAgICBcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhYm91dC1wbGFuXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImljb24taG9sZGVyXCI+PGltZyBzcmM9XCIuLi9zcmMvYXNzZXRzL2ltYWdlcy9pY29uLWFyY2FkZS5zdmdcIiBhbHQ9XCJpY29uIGZvciBhcmNhZGUgcGxhblwiID48L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGxhbi1kZXRhaWxcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwbGFuLW5hbWVcIj5BcmNhZGU8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwbGFuLWZlZVwiPiR7b2JqLmFyY2FkZX08L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwbGFuLWRlc2NyaXB0aW9uXCIgZGF0YS1naWZ0IHN0eWxlPSdkaXNwbGF5OiR7b2JqLmJvbnVzfTsnPjIgbW9udGhzIGZyZWU8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInBsYW4taG9sZGVyXCIgZGF0YS1wbGFuPVwiMVwiPlxuICAgICAgICBcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhYm91dC1wbGFuXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImljb24taG9sZGVyXCI+PGltZyBzcmM9XCIuLi9zcmMvYXNzZXRzL2ltYWdlcy9pY29uLWFkdmFuY2VkLnN2Z1wiIGFsdD1cImljb24gZm9yIGFkdmFuY2VkIHBsYW5cIiA+PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBsYW4tZGV0YWlsXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGxhbi1uYW1lXCI+QWR2YW5jZWQ8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwbGFuLWZlZVwiPiR7b2JqLmFkdmFuY2VkfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBsYW4tZGVzY3JpcHRpb25cIiBkYXRhLWdpZnQgc3R5bGU9J2Rpc3BsYXk6JHtvYmouYm9udXN9Oyc+MiBtb250aHMgZnJlZTwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwicGxhbi1ob2xkZXJcIiAgZGF0YS1wbGFuPVwiMlwiPlxuICAgICAgICBcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhYm91dC1wbGFuXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImljb24taG9sZGVyXCI+PGltZyBzcmM9XCIuLi9zcmMvYXNzZXRzL2ltYWdlcy9pY29uLXByby5zdmdcIiBhbHQ9XCJpY29uIGZvciBwcm8gcGxhblwiID48L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGxhbi1kZXRhaWxcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwbGFuLW5hbWVcIj5Qcm88L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwbGFuLWZlZVwiPiR7b2JqLnByb308L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwbGFuLWRlc2NyaXB0aW9uXCIgZGF0YS1naWZ0IHN0eWxlPSdkaXNwbGF5OiR7b2JqLmJvbnVzfTsnID4yIG1vbnRocyBmcmVlPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICBcbiAgICAgIDwvZGl2PlxuICAgPHAgY2xhc3M9XCJlcnJvci1jYXJkXCIgZGF0YS1zZWxlY3QtcGxhbiAgPjwvcD5cbiAgIDxkaXYgY2xhc3M9XCJ0b2dnbGUtaG9sZGVyXCI+XG4gICAgICAgIDxkaXYgZGF0YS1tb250aGx5IHN0eWxlPVwiY29sb3I6JHtvYmoubW9udGhseX07XCI+bW9udGhseTwvZGl2PlxuICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cInVzZXItcGxhblwiIGlkPVwidXNlci1wbGFuXCIgY2xhc3M9XCJjaGVja2JveFwiIGRhdGEtY2hvb3NlLXBsYW4gICR7b2JqLmNoZWNrYm94fT5cbiAgICAgICAgPGxhYmVsIGZvcj1cInVzZXItcGxhblwiIGNsYXNzPVwidG9nZ2xlXCI+IDwvbGFiZWw+XG4gICAgICAgIDxkaXYgZGF0YS15ZWFybHkgc3R5bGU9XCJjb2xvcjoke29iai55ZWFybHl9O1wiPnllYXJseTwvZGl2PlxuICAgIDwvZGl2PlxuPGRpdiBjbGFzcz1cIm5hdi1idG5zXCI+XG4gICAgPGJ1dHRvbiBjbGFzcz1cInRhYi10d28tYnRuIGJhY2stYnRuXCIgIGRhdGEtdGFiLXR3by1iYWNrLWJ0bj5HbyBCYWNrPC9idXR0b24+XG4gICAgPGJ1dHRvbiBjbGFzcz1cInRhYi10d28tYnRuXCIgZGF0YS10YWItdHdvLW5leHQtYnRuPk5leHQgU3RlcDwvYnV0dG9uPlxuPC9kaXY+XG4gICA8L2Rpdj5cbiAgICBgO1xuICBkaXYuaW5uZXJIVE1MID0gcGxhbjtcbiAgcmV0dXJuIGRpdjtcbn07XG5jb25zdCB0YWJUaHJlZSA9IGZ1bmN0aW9uIChvYmopIHtcbiAgb2JqLmNob29zZW5QbGFuKCk7XG4gIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHN0b3JhZ2UgPSBgXG4gICAgPGRpdiBjbGFzcz1cInRhYi10aHJlZVwiPlxuICAgIDxkaXY+XG4gICAgICAgIDxoMT5QaWNrIGFkZC1vbnM8L2gxPlxuICAgICAgICA8cCBjbGFzcz1cImluc3RydWN0aW9uXCI+QWRkLW9ucyBlbmhhbmNlIHlvdXIgZ2FtaW5nIGV4cGVyaWVuY2UuPC9wPlxuICAgIDwvZGl2PlxuICAgICAgIDxkaXYgY2xhc3M9XCJhYm91dC1hZGRzXCI+XG4gICAgICAgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYWRkLWhvbGRlclwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhZGQtaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJ1c2VyLWFkZFwiIGlkPVwiYWRkLW9uc1wiIGNsYXNzPVwidXNlci1hZGRcIiBkYXRhLWFkZHM9XCIwXCIgJHtvYmoub25saW5lfT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3M9XCJhZGQtdGl0bGVcIj5vbmxpbmUgc2VydmljZXM8L2gyPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImFkZC1wbGFuXCI+QWNjZXNzIHRvIG11bHRpcGxheWVyIGdhbWVzPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdj4ke29iai5vbmxpbmVQcmljZX08L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgIDxkaXYgY2xhc3M9XCJhYm91dC1hZGRzXCI+XG4gICAgICAgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYWRkLWhvbGRlclwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhZGQtaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJ1c2VyLWFkZFwiIGlkPVwiYWRkLXN0b3JhZ2VcIiBjbGFzcz1cInVzZXItYWRkXCIgZGF0YS1hZGRzPVwiMVwiICR7b2JqLnN0b3JhZ2V9PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzcz1cImFkZC10aXRsZVwiPkxhcmdlIHN0b3JhZ2U8L2gyPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImFkZC1wbGFuXCI+RXh0cmEgMVRCIGNsb3VkIHNhdmU8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2PiR7b2JqLnN0b3JhZ2VQcmljZX08L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImFib3V0LWFkZHNcIj5cbiAgICAgICBcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhZGQtaG9sZGVyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImFkZC1oZWFkZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cInVzZXItYWRkXCIgaWQ9XCJhZGQtdGhlbWVcIiBjbGFzcz1cInVzZXItYWRkXCIgZGF0YS1hZGRzPVwiMlwiICR7b2JqLnRoZW1lfT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3M9XCJhZGQtdGl0bGVcIj5DdXN0b21pemFibGUgcHJvZmlsZTwvaDI+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiYWRkLXBsYW5cIj5DdXN0b20gdGhlbWUgb24geW91ciBwcm9maWxlPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdj4ke29iai50aGVtZVByaWNlfTwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgPC9kaXY+XG4gICAgICAgPGRpdiBjbGFzcz1cIm5hdi1idG5zXCI+XG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJ0YWItdGhyZWUtYnRuIGJhY2stYnRuXCIgIGRhdGEtdGFiLXRocmVlLWJhY2stYnRuID5HbyBCYWNrPC9idXR0b24+XG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJ0YWItdGhyZWUtYnRuXCIgZGF0YS10YWItdGhyZWUtbmV4dC1idG4gPk5leHQgU3RlcDwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICAgPC9kaXY+XG4gICAgYDtcbiAgZGl2LmlubmVySFRNTCA9IHN0b3JhZ2U7XG4gIHJldHVybiBkaXY7XG59O1xuY29uc3QgdGFiRm91ciA9IGZ1bmN0aW9uIChvYmpPbmUsIG9ialR3bykge1xuICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBzdW1tYXJ5ID0gYFxuICAgIDxkaXYgY2xhc3M9XCJ0YWItZm91clwiPlxuICAgIDxkaXYgY2xhc3M9XCJjb25maXJtLWhlYWRlclwiPlxuICAgICAgICA8aDE+RmluaXNoaW5nIHVwPC9oMT5cbiAgICAgICAgPHAgY2xhc3M9XCJpbnN0cnVjdGlvblwiPkRvdWJsZS1jaGVjayBldmVyeXRoaW5nIGxvb2tzIE9LIGJlZm9yZSBjb25maXJtaW5nLjwvcD5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwic2VydmljZS1ob2xkZXJcIj5cbiAgICA8ZGl2IGNsYXNzPVwic3VtbWFyeS1wbGFuXCI+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cInBsYW5cIj5cbiAgICAgICAgICAgIDxoMiBjbGFzcz1cInNlbGVjdGVkLXBsYW5cIj4ke3N1bW1hcnlQbGFuKG9iak9uZSkucGxhbk5hbWV9KCR7c3VtbWFyeVBsYW4ob2JqT25lKS5wbGFufSk8L2gyPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImNoYW5nZS1wbGFuXCI+Q2hhbmdlPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwic3VtbWFyeS1wcmljZVwiPiR7c3VtbWFyeVBsYW4ob2JqT25lKS5wcmljZX08L2Rpdj5cbiAgICAgICBcbiAgICAgPC9kaXY+XG4gICAgICAgPGhyPlxuICAgICAgICA8ZGl2IGNsYXNzPVwic3VtbWFyeS1zZXJ2aWNlc1wiPlxuXG4gICAgICAgICAgICBcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImFkZC1kZXRhaWxcIj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImFkZC1uYW1lXCI+ICR7c3VtbWFyeUFkZHMob2JqVHdvKS5maXJzdEFkZH0gPC9wPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwib25saW5lLXByaWNlXCI+JHtzdW1tYXJ5QWRkcyhvYmpUd28pLm9ubGluZVByaWNlfTwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhZGQtZGV0YWlsXCI+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJhZGQtbmFtZVwiPiAke3N1bW1hcnlBZGRzKG9ialR3bykuc2Vjb25kQWRkfSA8L3A+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJzdG9yYWdlLXByaWNlXCI+JHtzdW1tYXJ5QWRkcyhvYmpUd28pLnN0b3JhZ2VQcmljZX08L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYWRkLWRldGFpbFwiPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiYWRkLW5hbWVcIj4gJHtzdW1tYXJ5QWRkcyhvYmpUd28pLnRoaXJkQWRkfSA8L3A+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJ0aGVtZS1wcmljZVwiPiR7c3VtbWFyeUFkZHMob2JqVHdvKS50aGVtZVByaWNlfTwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwic3VtbWFyeS10b3RhbFwiPlxuICAgICAgICAgICAgPHAgY2xhc3M9XCJ0b3RhbC10aXRsZVwiPlRvdGFsIHBlciB5ZWFyPC9wPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0b3RhbC1wcmljZVwiPiR7dG90YWxQcmljZShvYmpPbmUsIG9ialR3byl9PC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm5hdi1idG5zXCI+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwidGFiLWZvdXItYnRuIGJhY2stYnRuXCIgZGF0YS10YWItZm91ci1iYWNrLWJ0bj5HbyBCYWNrPC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwidGFiLWZvdXItY29uZmlybS1idG5cIiBkYXRhLXRhYi1mb3VyLWNvbmZpcm0tYnRuPkNvbmZpcm08L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gPC9kaXY+YDtcbiAgZGl2LmlubmVySFRNTCA9IHN1bW1hcnk7XG4gIHJldHVybiBkaXY7XG59O1xuY29uc3QgdGFiRml2ZSA9IGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgY29uZmlybSA9IGBcbiAgICAgPGRpdiBjbGFzcz1cInN0ZXAtZml2ZVwiPlxuICAgICAgPGRpdiBjbGFzcz1cImljb24taG9sZGVyXCI+PGltZyBzcmM9XCIuLi9zcmMvYXNzZXRzL2ltYWdlcy9pY29uLXRoYW5rLXlvdS5zdmdcIiBhbHQ9XCJyaWdodCBpY29uIHRvIGNvbmZpcm0gc3Vic2NyaXB0aW9uXCI+PC9kaXY+XG4gICAgICA8ZGl2PlxuICAgICAgICA8aDE+VGhhbmsgeW91ITwvaDE+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxwIGNsYXNzPVwiY29uZmlybS10ZXh0XCI+XG4gICAgICAgICAgVGhhbmtzIGZvciBjb21maXJtaW5nIHlvdXIgc3Vic2NyaXB0aW9uISBXZSBob3BlIHlvdSBoYXZlIGZ1biB1c2luZyBvdXIgcGxhdGZvcm0uXG4gICAgICAgICAgaWYgeW91IGV2ZXIgbmVlZCBzdXBwb3J0LnBsZWFzZSBmZWVsIGZyZWUgdG8gZW1haWwgdXMgYXQgc3VwcG9ydEBsb3JlbWdhbWluZy5jb20uXG4gICAgICAgIDwvcD5cbiAgICAgIDwvZGl2PlxuICAgPC9kaXY+YDtcbiAgZGl2LmlubmVySFRNTCA9IGNvbmZpcm07XG4gIHJldHVybiBkaXY7XG59O1xuZXhwb3J0IGNvbnN0IGZ1bmN0aW9ucyA9IHtcbiAgc3RlcE9uZTogdGFiT25lLFxuICBzdGVwVHdvOiB0YWJUd28sXG4gIHN0ZXBUaHJlZTogdGFiVGhyZWUsXG4gIHN0ZXBGb3VyOiB0YWJGb3VyLFxuICBzdGVwRml2ZTogdGFiRml2ZSxcbn07XG4vKipcbiAqIGZ1bmN0aW9uIHRoYXQgYWNjZXB0IG5vZGVsaXN0IGFuZCBjaGFuZ2UgcHJpY2UgYWNjb3JkaW5nIHRvIHNlbGVjdGVkIHBsYW4obXBudGhseSBvciB5ZWFybHkpXG4gKiBAcGFyYW0geyp9IGFycmFyeSBub2RlbGlzdCBvZiBlbGVtZW50XG4gKiBAcGFyYW0geyp9IG9iamVjdCB0aGF0IHN0b3JlIHByaWNlIChjaG9vc2VucGxhbiBwcm9wZXJ0eSAgZ2V0IG1vbnRobHkgb3IgeWVhcmx5IHByaWNlIGZvciBlYWNoIHBsYW5zKVxuICovXG5leHBvcnQgZnVuY3Rpb24gY2hhbmdlUHJpY2UoYXJyLCBvYmopIHtcbiAgb2JqLmNob29zZW5QbGFuKCk7XG4gIGFyci5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgaWYgKGFyci5pbmRleE9mKGVsZW1lbnQpID09PSAwKSB7XG4gICAgICBlbGVtZW50LnRleHRDb250ZW50ID0gb2JqLmFyY2FkZTtcbiAgICB9IGVsc2UgaWYgKGFyci5pbmRleE9mKGVsZW1lbnQpID09PSAxKSB7XG4gICAgICBlbGVtZW50LnRleHRDb250ZW50ID0gb2JqLmFkdmFuY2VkO1xuICAgIH0gZWxzZSBpZiAoYXJyLmluZGV4T2YoZWxlbWVudCkgPT09IDIpIHtcbiAgICAgIGVsZW1lbnQudGV4dENvbnRlbnQgPSBvYmoucHJvO1xuICAgIH1cbiAgfSk7XG59XG4vKlxuICpmdW5jdGlvbiB0aGF0IGdpdmUgZGlmZXJlbnQgYm9yZGVyIHN0eWxlIGZvciB0aGUgZ2l2ZW4gZG9tIGVsZW1lbnRcbiAqcGFyYW0gMTphcnJheSB0byBhY2NlcHQobm9kZWxpc3QpXG4gKnBhcm0gMjpkb20gZWxlbWVudFxuICovXG5leHBvcnQgZnVuY3Rpb24gYWRkRXZlbnRzKGFyciwgZG9tRWxlbWVudCkge1xuICBhcnIuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgIGVsZW1lbnQgPT09IGRvbUVsZW1lbnRcbiAgICAgID8gKGVsZW1lbnQuc3R5bGUuYm9yZGVyID0gXCIycHggc29saWQgaHNsKDI0MywgMTAwJSwgNjIlKVwiKVxuICAgICAgOiAoZWxlbWVudC5zdHlsZS5ib3JkZXIgPSBcIjFweCBzb2xpZCAgaHNsKDIxMywgOTYlLCAxOCUpXCIpO1xuICB9KTtcbn1cbi8vIHNhdmUgc3RhdGUgb2Ygc2VsZWN0ZWQgcGxhbiBib3JkZXIgc3R5bGUgYWZ0ZXIgYXBwcGVuZCBlbG1lbnQgdXNpbmcgaW5kZXggbnVtYmVyIGZyb20gKHVzZXJkYXRhLnNlbGVjdGVkcGxhbilcbmV4cG9ydCBmdW5jdGlvbiBzZWxlY3RlZENhcmQoaW5kZXgpIHtcbiAgY29uc3QgcGxhbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXBsYW49XCIke2luZGV4fVwiXWApO1xuICBpZiAocGxhbiA9PT0gbnVsbCkgcmV0dXJuO1xuICBwbGFuLnN0eWxlLmJvcmRlciA9IFwiMnB4IHNvbGlkIGJsdWVcIjtcbn1cbi8qKlxuICogZnVuY3Rpb24gdG8gY2hlY2sgd2hpY2ggYWRkcyBpcyBzZWxlY3RlZCBvciBub3RcbiAqIEBwYXJhbSB7Kn0gaW5kZXhcbiAqIEBwYXJhbSB7Kn0gZG9tRWxlbWVudFxuICogQHBhcmFtIHsqfSBvYmpcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzQ2hlY2tlZChpbmRleCwgZG9tRWxlbWVudCwgb2JqKSB7XG4gIGlmIChpbmRleCA9PT0gMCAmJiBkb21FbGVtZW50LmNoZWNrZWQgPT09IHRydWUpIHtcbiAgICBvYmoub25saW5lID0gXCJjaGVja2VkXCI7XG4gIH0gZWxzZSBpZiAoaW5kZXggPT09IDEgJiYgZG9tRWxlbWVudC5jaGVja2VkID09PSB0cnVlKSB7XG4gICAgb2JqLnN0b3JhZ2UgPSBcImNoZWNrZWRcIjtcbiAgfSBlbHNlIGlmIChpbmRleCA9PT0gMiAmJiBkb21FbGVtZW50LmNoZWNrZWQgPT09IHRydWUpIHtcbiAgICBvYmoudGhlbWUgPSBcImNoZWNrZWRcIjtcbiAgfSBlbHNlIGlmIChpbmRleCA9PT0gMCAmJiBkb21FbGVtZW50LmNoZWNrZWQgPT09IGZhbHNlKSB7XG4gICAgb2JqLm9ubGluZSA9IFwiXCI7XG4gIH0gZWxzZSBpZiAoaW5kZXggPT09IDEgJiYgZG9tRWxlbWVudC5jaGVja2VkID09PSBmYWxzZSkge1xuICAgIG9iai5zdG9yYWdlID0gXCJcIjtcbiAgfSBlbHNlIGlmIChpbmRleCA9PT0gMiAmJiBkb21FbGVtZW50LmNoZWNrZWQgPT09IGZhbHNlKSB7XG4gICAgb2JqLnRoZW1lID0gXCJcIjtcbiAgfVxufVxuLy8gc3RlcCBmb3VyIHN1bW1hcnlcbi8vIHVzZXJkYXRhIG9ialxuLypcbiAqZnVuY3Rpb24gdGhhdCBhY2NlcHQgb2JqZWN0IGNoZWNrIHNlbGVjdGVkIHBsYW4gdXNpbmcgdGhlcmUgaW5kZXggbnVtYmVyIGFuZCByZXR1cm4gbmFtZSBhbmQgcHJpY2VcbiAqcGFyYW0gMTpvYmplY3QgdGhhdCBzdG9yZSBzZWxlY3RlZCBpdGVtIGFzIG51bWJlcigwLDEsMilcbiAqcmV0dXJuIHN0cmluZyAocGxhbiBuYW1lICkgYW5kIG51bWJlciAoaXQncyBwcmljZSlcbiAqL1xuZnVuY3Rpb24gc3VtbWFyeVBsYW4ob2JqKSB7XG4gIGxldCBwbGFuTmFtZSwgcGxhbiwgcHJpY2U7XG5cbiAgaWYgKG9iai5zZWxlY3RlZFBsYW4gPT09IDApIHtcbiAgICBwbGFuTmFtZSA9IFwiQXJjYWRlXCI7XG4gICAgcHJpY2UgPSBvYmouYXJjYWRlO1xuICB9IGVsc2UgaWYgKG9iai5zZWxlY3RlZFBsYW4gPT09IDEpIHtcbiAgICBwbGFuTmFtZSA9IFwiQWR2YW5jZWRcIjtcbiAgICBwcmljZSA9IG9iai5hZHZhbmNlZDtcbiAgfSBlbHNlIGlmIChvYmouc2VsZWN0ZWRQbGFuID09PSAyKSB7XG4gICAgcGxhbk5hbWUgPSBcIlByb1wiO1xuICAgIHByaWNlID0gb2JqLnBybztcbiAgfVxuICBpZiAob2JqLmNoZWNrYm94ID09PSBcImNoZWNrZWRcIikge1xuICAgIHBsYW4gPSBcInllYXJseVwiO1xuICB9XG4gIGlmIChvYmouY2hlY2tib3ggPT09IFwiXCIpIHtcbiAgICBwbGFuID0gXCJtb250aGx5XCI7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHBsYW5OYW1lLFxuICAgIHBsYW4sXG4gICAgcHJpY2UsXG4gIH07XG59XG5cbi8qXG4gKmZ1bmN0aW9uIHRoYXQgYWNjZXB0IG9iamVjdCBhbmQgZ2l2ZSBzZWxlY3RlZCBhZGRzIG5hbWUgYW5kIHRoZXJlIHByaWNlc1xuICpwYXJhbSAxIDpvYmplY3RcbiAqcmV0dXJuIG5hbWUgb2YgYWRkKHN0cmluZykgYW5kIHByaWNlIGFzIGFuIGFycmF5XG4gKi9cbmZ1bmN0aW9uIHN1bW1hcnlBZGRzKG9iaikge1xuICBsZXQgZmlyc3RBZGQsIHNlY29uZEFkZCwgdGhpcmRBZGQsIG9ubGluZVByaWNlLCBzdG9yYWdlUHJpY2UsIHRoZW1lUHJpY2U7XG4gIGNvbnN0IHNlbGVjdGVkUHJpY2UgPSBbXTtcbiAgaWYgKG9iai5vbmxpbmUgPT09IFwiY2hlY2tlZFwiKSB7XG4gICAgZmlyc3RBZGQgPSBcIk9ubGluZSBzZXJ2aWNlXCI7XG4gICAgb25saW5lUHJpY2UgPSBvYmoub25saW5lUHJpY2U7XG4gICAgc2VsZWN0ZWRQcmljZS5wdXNoKG9ubGluZVByaWNlKTtcbiAgfVxuICBpZiAob2JqLnN0b3JhZ2UgPT09IFwiY2hlY2tlZFwiKSB7XG4gICAgc2Vjb25kQWRkID0gXCJMYXJnZXIgc3RvcmFnZVwiO1xuICAgIHN0b3JhZ2VQcmljZSA9IG9iai5zdG9yYWdlUHJpY2U7XG4gICAgc2VsZWN0ZWRQcmljZS5wdXNoKHN0b3JhZ2VQcmljZSk7XG4gIH1cbiAgaWYgKG9iai50aGVtZSA9PT0gXCJjaGVja2VkXCIpIHtcbiAgICB0aGlyZEFkZCA9IFwiQ3VzdG9taXphYmxlIHByb2ZpbGVcIjtcbiAgICB0aGVtZVByaWNlID0gb2JqLnRoZW1lUHJpY2U7XG4gICAgc2VsZWN0ZWRQcmljZS5wdXNoKHRoZW1lUHJpY2UpO1xuICB9XG5cbiAgLy8gdXNlIGNsb3N1cmUgdG8gcmVzZXQgaXRlbXMgaWYgbm90IHNlbGVjdGVkXG4gIGNvbnN0IGNoZWNrU2VsZWN0ZWRBZGRzID0gZnVuY3Rpb24gKG9iaikge1xuICAgIGlmIChvYmoub25saW5lICE9PSBcImNoZWNrZWRcIikge1xuICAgICAgZmlyc3RBZGQgPSBcIlwiO1xuICAgICAgb25saW5lUHJpY2UgPSBcIlwiO1xuICAgIH1cbiAgICBpZiAob2JqLnN0b3JhZ2UgIT09IFwiY2hlY2tlZFwiKSB7XG4gICAgICBzZWNvbmRBZGQgPSBcIlwiO1xuICAgICAgc3RvcmFnZVByaWNlID0gXCJcIjtcbiAgICB9XG4gICAgaWYgKG9iai50aGVtZSAhPT0gXCJjaGVja2VkXCIpIHtcbiAgICAgIHRoaXJkQWRkID0gXCJcIjtcbiAgICAgIHRoZW1lUHJpY2UgPSBcIlwiO1xuICAgIH1cbiAgfTtcbiAgY2hlY2tTZWxlY3RlZEFkZHMob2JqKTtcblxuICByZXR1cm4ge1xuICAgIGZpcnN0QWRkLFxuICAgIHNlY29uZEFkZCxcbiAgICB0aGlyZEFkZCxcbiAgICBvbmxpbmVQcmljZSxcbiAgICBzdG9yYWdlUHJpY2UsXG4gICAgdGhlbWVQcmljZSxcbiAgICBzZWxlY3RlZFByaWNlLFxuICB9O1xufVxuLypcbiAqZnVuY3Rpb24gdGhhdCBhY2NlcHQgdHdvIG9iamVjdHMgYW5kIGNhbGN1bGF0ZSBwcmljZSBvciBzdW1cbiAqcGFyYW0gMTogb2JqMSBob2xkIHBsYW4gcHJpY2UgKG1vbnRobHkgb3IgeWVhcmx5KVxuICpwYXJhbSAyOiBvYmoyIGhvbGQgc2VsZWN0ZWQgYWRkcyBwcmljZSBhcyBhbiBhcnJhcnlcbiAqcmV0dXJuIG51bWJlciAoc3VtKVxuICovXG5mdW5jdGlvbiB0b3RhbFByaWNlKG9iajEsIG9iajIpIHtcbiAgY29uc3QgcGxhbkZlZSA9IHN1bW1hcnlQbGFuKG9iajEpLnByaWNlO1xuICBjb25zdCBhZGRzRmVlID0gc3VtbWFyeUFkZHMob2JqMikuc2VsZWN0ZWRQcmljZTtcbiAgY29uc3QgcGxhbiA9IE51bWJlcihwbGFuRmVlLnJlcGxhY2UoL1teMC05XS9nLCBcIlwiKSk7XG4gIGNvbnN0IHBsYW5OYW1lID0gcGxhbkZlZS5yZXBsYWNlKC9bXmEtel0vZywgXCJcIik7IC8vIHN0b3JlIFwibW9cIiBvciBcInlyXCIgc3RyaW5nXG5cbiAgbGV0IHN1bXdpdGhjdXJyZW5jeSA9IFwiXCI7XG4gIGxldCB0b3RhbEFkZHMgPSAwO1xuICBsZXQgc3VtID0gMDtcbiAgYWRkc0ZlZS5mb3JFYWNoKChwcmljZSkgPT4ge1xuICAgIC8vIHByaWNlIGlzIGFycmF5IG9mIGFkZCB2YWx1ZSBjb252ZXJ0IHRvIG51bSBhbmQgcmVtb3ZlIGN1cnJlbmN5IHNpZ25cbiAgICB0b3RhbEFkZHMgKz0gTnVtYmVyKHByaWNlLnJlcGxhY2UoL1teMC05XS9nLCBcIlwiKSk7XG4gIH0pO1xuICBzdW0gPSBwbGFuICsgdG90YWxBZGRzO1xuICBzdW13aXRoY3VycmVuY3kgPSBgICQke3N1bX0vJHtwbGFuTmFtZX1gO1xuICByZXR1cm4gc3Vtd2l0aGN1cnJlbmN5O1xufVxuLy8gZnVuY3Rpb24gdG8gdmFsaWRhdGUgc3RlcCBvbmUgZm9ybVxuLyoqXG4gKlxuICogQHBhcmFtIHsqfSBmaWVsZCA6IGlucHV0IGZpZWxkXG4gKiBAcGFyYW0geyp9IGluZGV4IDogMCByZXByZXNlbnQgdXNlcm5hbWUsMSB1c2VyIGVtYWlsICwyIHVzZXJwaG9uZSBudW1iZXIgcmVzcGVjdGl2ZWx5XG4gKiBAcGFyYW0geyp9IGVyckRvbSA6ZG9tZWxlbW50IHRvIHNob3cgZXJyb3IgbWVzc2FnZVxuICovXG5leHBvcnQgZnVuY3Rpb24gdmFsaWRhdGVGb3JtKGZpZWxkLCBpbmRleCwgZXJyRG9tKSB7XG4gIGNvbnN0IGVtYWlsUmVnID0gL1xcdytbQF17MX1bYS16LV0rWy5dezF9W2Etel17Mix9KFsuXXsxfVthLXpdezIsfSk/LztcbiAgY29uc3QgcGhvbmVSZWcgPSAvXlswLTldezEwLDE1fSQvO1xuICBjb25zdCBzdHJpbmdSZWcgPSAvW2Etel0rLzsgLy8gY2hlY2sgcGhvbmUgbnVtYmVyIGVudHJ5XG5cbiAgLy8gZnVuY3Rpb24gdG8gaGlkZSBlcnJvciBtZXNzYWdlIG9uIGZvY3VzIGVsc2Ugc2hvdyBtZXNzYWdlXG4gIGNvbnN0IGZvY3VzU3R5bGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgZmllbGQuYWRkRXZlbnRMaXN0ZW5lcihcImZvY3VzXCIsICgpID0+IHtcbiAgICAgIGlmIChmaWVsZC5jbGFzc05hbWUgPT09IFwiaW52YWxpZFwiKSBlcnJEb20uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIH0pO1xuICAgIGZpZWxkLmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c291dFwiLCAoKSA9PiB7XG4gICAgICBpZiAoZmllbGQuY2xhc3NOYW1lID09PSBcImludmFsaWRcIikge1xuICAgICAgICBlcnJEb20uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcbiAgaWYgKGZpZWxkLnZhbHVlID09PSBcIlwiKSB7XG4gICAgZXJyRG9tLnRleHRDb250ZW50ID0gXCJUaGlzIGZpZWxkIGlzIFJlcXVpcmVkIVwiO1xuICAgIGZpZWxkLmNsYXNzTmFtZSA9IFwiaW52YWxpZFwiO1xuICAgIHJldHVybjtcbiAgfVxuICBpZiAoaW5kZXggPT09IDApIHtcbiAgICBpZiAoZmllbGQudmFsaWRpdHkudG9vU2hvcnQpIHtcbiAgICAgIGVyckRvbS50ZXh0Q29udGVudCA9IFwiVG9vIHNob3J0IGFkZCBtb3JlIGNoYXJhY3Rlci5cIjtcbiAgICAgIGZpZWxkLmNsYXNzTmFtZSA9IFwiaW52YWxpZFwiO1xuICAgICAgZm9jdXNTdHlsZSgpO1xuICAgIH0gZWxzZSBpZiAoZmllbGQudmFsaWRpdHkudG9vTG9uZykge1xuICAgICAgZXJyRG9tLnRleHRDb250ZW50ID0gXCJUb28gbG9uZyBtdXN0IGJlIDItMjAgY2hhcmFjdGVycy5cIjtcbiAgICAgIGZpZWxkLmNsYXNzTmFtZSA9IFwiaW52YWxpZFwiO1xuICAgICAgZm9jdXNTdHlsZSgpO1xuICAgIH0gZWxzZSBpZiAoZmllbGQudmFsaWRpdHkudmFsaWQpIHtcbiAgICAgIGVyckRvbS50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgICBmaWVsZC5jbGFzc05hbWUgPSBcInZhbGlkXCI7XG4gICAgfVxuICB9IGVsc2UgaWYgKGluZGV4ID09PSAxKSB7XG4gICAgaWYgKGVtYWlsUmVnLnRlc3QoZmllbGQudmFsdWUpKSB7XG4gICAgICBmaWVsZC5jbGFzc05hbWUgPSBcInZhbGlkXCI7XG4gICAgICBlcnJEb20udGV4dENvbnRlbnQgPSBcIlwiO1xuICAgIH0gZWxzZSBpZiAoZW1haWxSZWcudGVzdChmaWVsZC52YWx1ZSkgPT09IGZhbHNlKSB7XG4gICAgICBlcnJEb20udGV4dENvbnRlbnQgPSBcIndyb25nIGZvcm1hdCx1c2UoZXhhbXBsZUBkb21haW4uZXh0KVwiO1xuICAgICAgZmllbGQuY2xhc3NOYW1lID0gXCJpbnZhbGlkXCI7XG4gICAgICBmb2N1c1N0eWxlKCk7XG4gICAgfVxuICB9IGVsc2UgaWYgKGluZGV4ID09PSAyKSB7XG4gICAgaWYgKHN0cmluZ1JlZy50ZXN0KGZpZWxkLnZhbHVlKSkge1xuICAgICAgZXJyRG9tLnRleHRDb250ZW50ID0gXCJQbGVhc2UgZW50ZXIgbnVtYmVycyBvbmx5IVwiO1xuICAgICAgZmllbGQuY2xhc3NOYW1lID0gXCJpbnZhbGlkXCI7XG4gICAgICBmb2N1c1N0eWxlKCk7XG4gICAgfSBlbHNlIGlmIChmaWVsZC52YWxpZGl0eS50b29Mb25nKSB7XG4gICAgICBlcnJEb20udGV4dENvbnRlbnQgPSBcIlRvbyBsb25nIG11c3QgYmUgMTAtMTUgY2hhcmFjdGVyc1wiO1xuICAgICAgZmllbGQuY2xhc3NOYW1lID0gXCJpbnZhbGlkXCI7XG4gICAgICBmb2N1c1N0eWxlKCk7XG4gICAgfSBlbHNlIGlmIChmaWVsZC52YWxpZGl0eS50b29TaG9ydCkge1xuICAgICAgZXJyRG9tLnRleHRDb250ZW50ID0gXCJUb28gc2hvcnQgbXVzdCBiZSAxMC0xNSBjaGFyYWN0ZXJzXCI7XG4gICAgICBmaWVsZC5jbGFzc05hbWUgPSBcImludmFsaWRcIjtcbiAgICAgIGZvY3VzU3R5bGUoKTtcbiAgICB9IGVsc2UgaWYgKHBob25lUmVnLnRlc3QoTnVtYmVyKGZpZWxkLnZhbHVlKSkpIHtcbiAgICAgIGNvbnNvbGUubG9nKGZpZWxkLnZhbHVlKTtcbiAgICAgIGZpZWxkLmNsYXNzTmFtZSA9IFwidmFsaWRcIjtcbiAgICAgIGVyckRvbS50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgICBjb25zdCB2YWx1ZSA9IGZpZWxkLnZhbHVlO1xuICAgICAgY29uc3QgZm9ybWF0ID0gdmFsdWUucmVwbGFjZSgvXiguezN9KSguezN9KSguezR9KSguKikkLywgXCIkMSAkMiAkM1wiKTtcbiAgICAgIGZpZWxkLnZhbHVlID0gXCIrXCIgKyBmb3JtYXQ7XG4gICAgfVxuICB9XG59XG5leHBvcnQgZnVuY3Rpb24gaXNGb3JtZmlsbGVkKGFycikge1xuICBjb25zdCBpbnZhbGlkSW5wdXQgPSBbXTtcbiAgbGV0IHJlc3VsdDtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoYXJyW2ldLmNsYXNzTmFtZSA9PT0gXCJpbnZhbGlkXCIpIHtcbiAgICAgIGludmFsaWRJbnB1dC5wdXNoKGFycltpXSk7XG4gICAgfSBlbHNlIGlmIChhcnJbaV0udmFsdWUgPT09IFwiXCIpIHtcbiAgICAgIGludmFsaWRJbnB1dC5wdXNoKGFycltpXSk7XG4gICAgfVxuICB9XG4gIGludmFsaWRJbnB1dC5sZW5ndGggPiAwID8gKHJlc3VsdCA9IGZhbHNlKSA6IChyZXN1bHQgPSB0cnVlKTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cbi8vIGZ1bmN0aW9uIHRoYXQgYWNjZXB0IG9iamVjdCBhbmQgY2hlY2sgdmFsdWUgaXMgZW1wdHkodXNlZCB0byBzd2l0Y2ggdGFiIDIpXG5leHBvcnQgZnVuY3Rpb24gaXNWYWx1ZUVtcHR5KG9iaikge1xuICBsZXQgcmVzdWx0O1xuICBjb25zdCBrZXlBcnJheSA9IE9iamVjdC5rZXlzKG9iaik7XG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBrZXlBcnJheS5sZW5ndGg7IGluZGV4KyspIHtcbiAgICBjb25zdCBlbGVtZW50ID0ga2V5QXJyYXlbaW5kZXhdO1xuICAgIGlmIChvYmpbZWxlbWVudF0gPT09IFwiXCIpIHtcbiAgICAgIHJlc3VsdCA9IHRydWU7XG4gICAgICBicmVhaztcbiAgICB9IGVsc2UgaWYgKG9ialtlbGVtZW50XSAhPT0gXCJcIikge1xuICAgICAgcmVzdWx0ID0gZmFsc2U7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG4vLyBmdW5jdGlvbiB0byBjaGFuZ2UgYmFja2dyb3VkIGNvbG9yIHRvIHNob3cgd2hpY2ggc3RlcCBpdCBpc1xuZXhwb3J0IGZ1bmN0aW9uIGNoYW5nZUNvbG9yKGFycmF5LCBpbmRleCkge1xuICBhcnJheS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgaWYgKGFycmF5LmluZGV4T2YoZWxlbWVudCkgPT09IGluZGV4KSB7XG4gICAgICBlbGVtZW50LnN0eWxlLmNvbG9yID0gXCJibGFja1wiO1xuICAgICAgZWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJnYigxOTEsIDIyNiwgMjUzKVwiO1xuICAgIH0gZWxzZSB7XG4gICAgICBlbGVtZW50LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiaW5oZXJpdFwiO1xuICAgIH1cbiAgfSk7XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQgZmF2IGZyb20gXCIuL2Fzc2V0cy9pbWFnZXMvZmF2aWNvbi0zMngzMi5wbmdcIjtcbmltcG9ydCB7XG4gIGZ1bmN0aW9ucyxcbiAgVXNlclBlcnNvbmFsSW5mbyxcbiAgVXNlclBsYW5EYXRhLFxuICBVc2VyU2VydmljZXMsXG4gIGNoYW5nZVByaWNlLFxuICBhZGRFdmVudHMsXG4gIHNlbGVjdGVkQ2FyZCxcbiAgaXNDaGVja2VkLFxuICB2YWxpZGF0ZUZvcm0sXG4gIGlzRm9ybWZpbGxlZCxcbiAgaXNWYWx1ZUVtcHR5LFxuICBjaGFuZ2VDb2xvcixcbn0gZnJvbSBcIi4vdGFic1wiO1xuY29uc3QgaG9sZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcmV2aWV3XCIpO1xuY29uc3QgZG90cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZG90XCIpO1xuY29uc3QgdGFicyA9IFsuLi5kb3RzXTtcbmNvbnN0IHVzZXJJbmZvID0gbmV3IFVzZXJQZXJzb25hbEluZm8oKTtcbmNvbnN0IHVzZXJQbGFucyA9IG5ldyBVc2VyUGxhbkRhdGEoKTtcbmNvbnN0IHVzZXJBZGRzID0gbmV3IFVzZXJTZXJ2aWNlcygpO1xuaG9sZGVyLmFwcGVuZENoaWxkKGZ1bmN0aW9ucy5zdGVwT25lKHVzZXJJbmZvKSk7IC8vIGRlZmF1bHQgaXMgZW1wdHkgZm9ybVxuaG9sZGVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICBpZiAoZS50YXJnZXQubWF0Y2hlcyhcIi50YWItb25lLWJ0blwiKSkge1xuICAgIGNvbnN0IGFsbElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImlucHV0XCIpO1xuICAgIGNvbnN0IGFycnlJbnB1dCA9IFsuLi5hbGxJbnB1dF07XG4gICAgLy8gdmFsaWRhdGUgc3RlcCBvbmUgZm9ybSBpZiBpdHMgbm90IGVtcHR5IG1vdmUgdG8gbmV4dCBzdGVwXG5cbiAgICBpZiAoaXNGb3JtZmlsbGVkKGFycnlJbnB1dCkgPT09IHRydWUpIHtcbiAgICAgIGhvbGRlci50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgICBob2xkZXIuYXBwZW5kQ2hpbGQoZnVuY3Rpb25zLnN0ZXBUd28odXNlclBsYW5zKSk7XG4gICAgICBjaGFuZ2VDb2xvcih0YWJzLCAxKTtcbiAgICB9XG4gICAgYXJyeUlucHV0LmZvckVhY2goKGlucHV0KSA9PiB7XG4gICAgICBjb25zdCBlcnJNc2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICBgW2RhdGEtZXJyb3ItbXNnPVwiJHtOdW1iZXIoaW5wdXQuZGF0YXNldC5lcnJvcil9XCJdYFxuICAgICAgKTtcbiAgICAgIGlmIChpbnB1dC52YWx1ZSA9PT0gXCJcIikge1xuICAgICAgICBlcnJNc2cudGV4dENvbnRlbnQgPSBcIlRoaXMgZmllbGQgaXMgcmVxdWlyZWQhXCI7XG4gICAgICAgIGlucHV0LmNsYXNzTmFtZSA9IFwiaW52YWxpZFwiO1xuICAgICAgfVxuICAgIH0pO1xuICB9IGVsc2UgaWYgKGUudGFyZ2V0Lm1hdGNoZXMoXCJbZGF0YS11c2VyLW5hbWVdXCIpKSB7XG4gICAgY29uc3QgdXNlck5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtdXNlci1uYW1lXVwiKTtcbiAgICB1c2VyTmFtZS5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIChlKSA9PiB7XG4gICAgICBjb25zdCBlcnJNc2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICBgW2RhdGEtZXJyb3ItbXNnPVwiJHtlLnRhcmdldC5kYXRhc2V0LmVycm9yfVwiXWBcbiAgICAgICk7XG5cbiAgICAgIHVzZXJJbmZvLm5hbWUgPSB1c2VyTmFtZS52YWx1ZTtcbiAgICAgIHZhbGlkYXRlRm9ybSh1c2VyTmFtZSwgMCwgZXJyTXNnKTtcbiAgICB9KTtcbiAgfSBlbHNlIGlmIChlLnRhcmdldC5tYXRjaGVzKFwiW2RhdGEtdXNlci1lbWFpbF1cIikpIHtcbiAgICBjb25zdCB1c2VyRW1haWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtdXNlci1lbWFpbF1cIik7XG4gICAgdXNlckVtYWlsLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKGUpID0+IHtcbiAgICAgIGNvbnN0IGVyck1zZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgIGBbZGF0YS1lcnJvci1tc2c9XCIke2UudGFyZ2V0LmRhdGFzZXQuZXJyb3J9XCJdYFxuICAgICAgKTtcbiAgICAgIHVzZXJJbmZvLmVtYWlsID0gdXNlckVtYWlsLnZhbHVlO1xuICAgICAgdmFsaWRhdGVGb3JtKHVzZXJFbWFpbCwgMSwgZXJyTXNnKTtcbiAgICB9KTtcbiAgfSBlbHNlIGlmIChlLnRhcmdldC5tYXRjaGVzKFwiW2RhdGEtdXNlci1waG9uZV1cIikpIHtcbiAgICBjb25zdCB1c2VyUGhvbmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtdXNlci1waG9uZV1cIik7XG4gICAgY29uc3QgZXJyTXNnID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgIGBbZGF0YS1lcnJvci1tc2c9XCIke2UudGFyZ2V0LmRhdGFzZXQuZXJyb3J9XCJdYFxuICAgICk7XG4gICAgdXNlclBob25lLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKGUpID0+IHtcbiAgICAgIHVzZXJJbmZvLnBob25lID0gdXNlclBob25lLnZhbHVlO1xuICAgICAgdmFsaWRhdGVGb3JtKHVzZXJQaG9uZSwgMiwgZXJyTXNnKTtcbiAgICB9KTtcbiAgfSAvLyB0YWIgdHdvIGV2ZW50c1xuICBlbHNlIGlmIChlLnRhcmdldC5tYXRjaGVzKFwiLnBsYW4taG9sZGVyXCIpKSB7XG4gICAgY29uc3QgaW5kZXggPSBOdW1iZXIoZS50YXJnZXQuZGF0YXNldC5wbGFuKTtcbiAgICBjb25zdCBwbGFucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucGxhbi1ob2xkZXJcIik7XG4gICAgY29uc3QgY2xpY2tlZFBsYW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1wbGFuPVwiJHtpbmRleH1cIl1gKTtcbiAgICBhZGRFdmVudHMocGxhbnMsIGNsaWNrZWRQbGFuKTtcbiAgICB1c2VyUGxhbnMuc2VsZWN0ZWRQbGFuID0gaW5kZXg7XG4gIH0gZWxzZSBpZiAoZS50YXJnZXQubWF0Y2hlcyhcIltkYXRhLWNob29zZS1wbGFuXVwiKSkge1xuICAgIGNvbnN0IHVzZXJQbGFuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLWNob29zZS1wbGFuXVwiKTtcbiAgICBjb25zdCBwcmljZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnBsYW4tZmVlXCIpO1xuICAgIGNvbnN0IGZyZWVHaWZ0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJbZGF0YS1naWZ0XVwiKTtcbiAgICBjb25zdCBtb250aGx5UGxhbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1tb250aGx5XVwiKTtcbiAgICBjb25zdCB5ZWFybHlQbGFuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLXllYXJseV1cIik7XG4gICAgY29uc3QgcGxhbnMgPSBbLi4ucHJpY2VzXTtcbiAgICBpZiAodXNlclBsYW4uY2hlY2tlZCA9PT0gdHJ1ZSkge1xuICAgICAgdXNlclBsYW5zLmNoZWNrYm94ID0gXCJjaGVja2VkXCI7XG4gICAgICB1c2VyUGxhbnMucGxhbiA9IHRydWU7XG4gICAgICB1c2VyUGxhbnMuYm9udXMgPSBcImJsb2NrXCI7XG4gICAgICB1c2VyQWRkcy5hZGRQbGFuID0gdHJ1ZTtcbiAgICAgIC8vIHVwZGF0ZSBkb21cbiAgICAgIG1vbnRobHlQbGFuLnN0eWxlLmNvbG9yID0gXCJoc2woMjMxLCAxMSUsIDYzJSlcIjtcbiAgICAgIHllYXJseVBsYW4uc3R5bGUuY29sb3IgPSBcImhzbCgyMTMsIDk2JSwgMTglKVwiO1xuICAgICAgZnJlZUdpZnRzLmZvckVhY2goKGRpdnMpID0+IHtcbiAgICAgICAgZGl2cy5zdHlsZS5kaXNwbGF5ID0gdXNlclBsYW5zLmJvbnVzO1xuICAgICAgfSk7XG5cbiAgICAgIGNoYW5nZVByaWNlKHBsYW5zLCB1c2VyUGxhbnMpO1xuICAgIH0gZWxzZSBpZiAodXNlclBsYW4uY2hlY2tlZCA9PT0gZmFsc2UpIHtcbiAgICAgIHVzZXJQbGFucy5jaGVja2JveCA9IFwiXCI7XG4gICAgICB1c2VyUGxhbnMucGxhbiA9IGZhbHNlO1xuICAgICAgdXNlclBsYW5zLmJvbnVzID0gXCJub25lXCI7XG4gICAgICB1c2VyQWRkcy5hZGRQbGFuID0gZmFsc2U7XG4gICAgICBtb250aGx5UGxhbi5zdHlsZS5jb2xvciA9IFwiaHNsKDIxMywgOTYlLCAxOCVcIjtcbiAgICAgIHllYXJseVBsYW4uc3R5bGUuY29sb3IgPSBcImhzbCgyMzEsIDExJSwgNjMlKVwiO1xuICAgICAgLy8gbW9udGhseSBwcmljZVxuICAgICAgZnJlZUdpZnRzLmZvckVhY2goKGRpdnMpID0+IHtcbiAgICAgICAgZGl2cy5zdHlsZS5kaXNwbGF5ID0gdXNlclBsYW5zLmJvbnVzO1xuICAgICAgfSk7XG4gICAgICBjaGFuZ2VQcmljZShwbGFucywgdXNlclBsYW5zKTtcbiAgICB9XG4gIH0gZWxzZSBpZiAoZS50YXJnZXQubWF0Y2hlcyhcIltkYXRhLXRhYi10d28tbmV4dC1idG5dXCIpKSB7XG4gICAgY29uc3QgZXJyTXNnID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLXNlbGVjdC1wbGFuXVwiKTtcbiAgICBpZiAodXNlclBsYW5zLnNlbGVjdGVkUGxhbiAhPT0gXCJcIikge1xuICAgICAgaG9sZGVyLnRleHRDb250ZW50ID0gXCIgXCI7XG4gICAgICBob2xkZXIuYXBwZW5kQ2hpbGQoZnVuY3Rpb25zLnN0ZXBUaHJlZSh1c2VyQWRkcykpO1xuICAgICAgZXJyTXNnLnRleHRDb250ZW50ID0gXCJcIjtcbiAgICAgIGNoYW5nZUNvbG9yKHRhYnMsIDIpOyAvLyBzdGVwIDNcbiAgICB9IGVsc2UgaWYgKHVzZXJQbGFucy5zZWxlY3RlZFBsYW4gPT09IFwiXCIpIHtcbiAgICAgIGVyck1zZy50ZXh0Q29udGVudCA9IFwiY2xpY2sgdGhlIGNhcmRzIHRvICBzZWxlY3QuXCI7XG4gICAgfVxuICB9IGVsc2UgaWYgKGUudGFyZ2V0Lm1hdGNoZXMoXCJbZGF0YS10YWItdHdvLWJhY2stYnRuXVwiKSkge1xuICAgIGhvbGRlci50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgaG9sZGVyLmFwcGVuZENoaWxkKGZ1bmN0aW9ucy5zdGVwT25lKHVzZXJJbmZvKSk7XG4gICAgY2hhbmdlQ29sb3IodGFicywgMCk7IC8vIHN0ZXAgb25lXG4gIH1cbiAgLy8gdGFiIHRocmVlIGV2ZW50c1xuICBlbHNlIGlmIChlLnRhcmdldC5tYXRjaGVzKFwiLnVzZXItYWRkXCIpKSB7XG4gICAgY29uc3QgaW5kZXggPSBOdW1iZXIoZS50YXJnZXQuZGF0YXNldC5hZGRzKTtcbiAgICBjb25zdCBhZGRzQ2hlY2tib3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1hZGRzPVwiJHtpbmRleH1cIl1gKTtcbiAgICBpc0NoZWNrZWQoaW5kZXgsIGFkZHNDaGVja2JveCwgdXNlckFkZHMpO1xuICB9IGVsc2UgaWYgKGUudGFyZ2V0Lm1hdGNoZXMoXCJbZGF0YS10YWItdGhyZWUtbmV4dC1idG5cIikpIHtcbiAgICBob2xkZXIudGV4dENvbnRlbnQgPSBcIlwiO1xuICAgIGhvbGRlci5hcHBlbmRDaGlsZChmdW5jdGlvbnMuc3RlcEZvdXIodXNlclBsYW5zLCB1c2VyQWRkcykpO1xuICAgIGNoYW5nZUNvbG9yKHRhYnMsIDMpOyAvLyBzdGVwIDRcbiAgfSBlbHNlIGlmIChlLnRhcmdldC5tYXRjaGVzKFwiW2RhdGEtdGFiLXRocmVlLWJhY2stYnRuXVwiKSkge1xuICAgIGhvbGRlci50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgaG9sZGVyLmFwcGVuZENoaWxkKGZ1bmN0aW9ucy5zdGVwVHdvKHVzZXJQbGFucykpO1xuICAgIHNlbGVjdGVkQ2FyZCh1c2VyUGxhbnMuc2VsZWN0ZWRQbGFuKTtcbiAgICBjaGFuZ2VDb2xvcih0YWJzLCAxKTsgLy8gc3RlcCAyXG4gIH1cbiAgLy8gc3RlcCBmb3VyIGV2ZW50XG4gIGVsc2UgaWYgKGUudGFyZ2V0Lm1hdGNoZXMoXCJbZGF0YS10YWItZm91ci1iYWNrLWJ0bl1cIikpIHtcbiAgICBob2xkZXIudGV4dENvbnRlbnQgPSBcIlwiO1xuICAgIGhvbGRlci5hcHBlbmRDaGlsZChmdW5jdGlvbnMuc3RlcFRocmVlKHVzZXJBZGRzKSk7XG4gICAgY2hhbmdlQ29sb3IodGFicywgMik7IC8vIHN0ZXAgM1xuICB9IGVsc2UgaWYgKGUudGFyZ2V0Lm1hdGNoZXMoXCJbZGF0YS10YWItZm91ci1jb25maXJtLWJ0bl1cIikpIHtcbiAgICBob2xkZXIudGV4dENvbnRlbnQgPSBcIlwiO1xuICAgIGhvbGRlci5hcHBlbmRDaGlsZChmdW5jdGlvbnMuc3RlcEZpdmUoKSk7XG4gIH1cbn0pO1xuXG50YWJzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBpZiAodGFicy5pbmRleE9mKGVsZW1lbnQpID09PSAwKSB7XG4gICAgICBob2xkZXIudGV4dENvbnRlbnQgPSBcIlwiO1xuICAgICAgaG9sZGVyLmFwcGVuZENoaWxkKGZ1bmN0aW9ucy5zdGVwT25lKHVzZXJJbmZvKSk7XG4gICAgICBjaGFuZ2VDb2xvcih0YWJzLCAwKTtcbiAgICAgIC8vIG5leHQgY2hlY2sgc3RlcCBvbmUgaXMgY2xlYXIgZWxzZSBkb24ndCBzd2l0Y2hcbiAgICB9IGVsc2UgaWYgKFxuICAgICAgdGFicy5pbmRleE9mKGVsZW1lbnQpID09PSAxICYmXG4gICAgICBpc1ZhbHVlRW1wdHkodXNlckluZm8pID09PSBmYWxzZVxuICAgICkge1xuICAgICAgaG9sZGVyLnRleHRDb250ZW50ID0gXCJcIjtcbiAgICAgIGhvbGRlci5hcHBlbmRDaGlsZChmdW5jdGlvbnMuc3RlcFR3byh1c2VyUGxhbnMpKTtcbiAgICAgIHNlbGVjdGVkQ2FyZCh1c2VyUGxhbnMuc2VsZWN0ZWRQbGFuKTtcbiAgICAgIGNoYW5nZUNvbG9yKHRhYnMsIDEpO1xuICAgICAgLy8gY2hlY2sgaWYgc3RlcCB0d28gY2FyZHMgc2VsZWN0ZWQgdG8gcHJlY2VlZCB0byBzdGVwIDMgYW5kIDQgdGhleSBhcmUgc2FtZVxuICAgIH0gZWxzZSBpZiAodGFicy5pbmRleE9mKGVsZW1lbnQpID09PSAyICYmIHVzZXJQbGFucy5zZWxlY3RlZFBsYW4gIT09IFwiXCIpIHtcbiAgICAgIGhvbGRlci50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgICBob2xkZXIuYXBwZW5kQ2hpbGQoZnVuY3Rpb25zLnN0ZXBUaHJlZSh1c2VyQWRkcykpO1xuICAgICAgY2hhbmdlQ29sb3IodGFicywgMik7XG4gICAgfSBlbHNlIGlmICh0YWJzLmluZGV4T2YoZWxlbWVudCkgPT09IDMgJiYgdXNlclBsYW5zLnNlbGVjdGVkUGxhbiAhPT0gXCJcIikge1xuICAgICAgaG9sZGVyLnRleHRDb250ZW50ID0gXCJcIjtcbiAgICAgIGhvbGRlci5hcHBlbmRDaGlsZChmdW5jdGlvbnMuc3RlcEZvdXIodXNlclBsYW5zLCB1c2VyQWRkcykpO1xuICAgICAgY2hhbmdlQ29sb3IodGFicywgMyk7XG4gICAgfVxuICB9KTtcbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9