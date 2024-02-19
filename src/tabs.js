// class to hold info
export class UserPersonalInfo {
  constructor(options = {}) {
    this.name = options.name || "";
    this.email = options.email || "";
    this.phone = options.phone || "";
  }
}
export class UserPlanData {
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
export class UserServices {
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
                <div class="icon-holder"><img src="/src/assets/images/icon-arcade.svg" alt="icon for arcade plan" ></div>
                <div class="plan-detail">
                  <div class="plan-name">Arcade</div>
                  <div class="plan-fee">${obj.arcade}</div>
                  <div class="plan-description" data-gift style='display:${obj.bonus};'>2 months free</div>
                </div>
            </div>
        </button>
        <button class="plan-holder" data-plan="1">
        
            <div class="about-plan">
                <div class="icon-holder"><img src="/src/assets/images/icon-advanced.svg" alt="icon for advanced plan" ></div>
                <div class="plan-detail">
                  <div class="plan-name">Advanced</div>
                  <div class="plan-fee">${obj.advanced}</div>
                  <div class="plan-description" data-gift style='display:${obj.bonus};'>2 months free</div>
                </div>
            </div>
        </button>
        <button class="plan-holder"  data-plan="2">
        
            <div class="about-plan">
                <div class="icon-holder"><img src="/src/assets/images/icon-pro.svg" alt="icon for pro plan" ></div>
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
export const functions = {
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
export function changePrice(arr, obj) {
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
export function addEvents(arr, domElement) {
  arr.forEach((element) => {
    element === domElement
      ? (element.style.border = "2px solid hsl(243, 100%, 62%)")
      : (element.style.border = "1px solid  hsl(213, 96%, 18%)");
  });
}
// save state of selected plan border style after apppend elment using index number from (userdata.selectedplan)
export function selectedCard(index) {
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
export function isChecked(index, domElement, obj) {
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
export function validateForm(field, index, errDom) {
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
export function isFormfilled(arr) {
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
export function isValueEmpty(obj) {
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
export function changeColor(array, index) {
  array.forEach((element) => {
    if (array.indexOf(element) === index) {
      element.style.color = "black";
      element.style.backgroundColor = "rgb(191, 226, 253)";
    } else {
      element.style.backgroundColor = "inherit";
    }
  });
}
