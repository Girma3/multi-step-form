// class to hold info
export class UserPersonalInfo {
  constructor(options = {}) {
    this.name = options.name || "you";
    this.email = options.email || "gmail";
    this.phone = options.phone || "0927";
  }
}
export class UserPlanData {
  constructor(options = {}) {
    this.plan = options.plan || false;
    // checkbox
    this.checkbox = options.checkbox || "";
    this.arcade = options.arcade || "2birr";
    this.advanced = options.advanced || "3birr";
    this.pro = options.pro || "5birr";
    this.bonus = options.bonus || "none";
    this.selectedPlan = options.selectedPlan || 0;
  }

  yearlyPrice() {
    this.arcade = 90;
    this.advanced = 120;
    this.pro = 150;
  }

  monthlyPrice() {
    this.arcade = 9;
    this.advanced = 12;
    this.pro = 15;
  }

  choosenPlan() {
    if (this.plan === true) {
      this.yearlyPrice();
    } else if (this.plan === false) {
      this.monthlyPrice();
    }
  }
}
export class UserServices {
  constructor(options = {}) {
    // get plan if meonthly or yearly(true is monthly set in step 2 or userdata obj)
    this.addPlan = options.addPlan || false;
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
    this.onlinePrice = 10;
    this.storagePrice = 20;
    this.themePrice = 20;
  }

  monthlyPrice() {
    this.onlinePrice = 1;
    this.storagePrice = 2;
    this.themePrice = 2;
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
            <p>please provide your name,email adress and phone number</p>
        </div>

        <div class="form-holder">
            <form class="personal-info-form">
                <div class="label-holder">
                    <label for="user-name">Name</label>
                    <input type="text" id="user-name" name="user-name" class='user-info' data-user-name value="${obj.name}">
                </div>
                <div class="label-holder">
                    <label for="user-email">Email Adress</label>
                    <input type="email" id="user-email" name="user-email" class='user-info' data-user-email value="${obj.email}">
                </div>
                <div class="label-holder">
                    <label for="user-phone">Phone Number</label>
                    <input type="number" id="user-phone" name="user-phone" class='user-info' data-user-phone value="${obj.phone}">
                </div>
                
            </form>
            <button class="tab-one-btn">Next Step</button>
        </div>
    </div>`;
  div.innerHTML = personalInfo;
  return div;
};
const tabTwo = function (obj) {
  const div = document.createElement("div");
  const plan = `
    <div class="step-two">
    <div class="plan-header">
        <h1>Select your Plan</h1>
        <p>you have the option monthly or yearly billing.</p>
    </div>
    <div class="plans" data-plans >
        <div class="plan-holder" data-plan="0">
        
            <div class="about-plan">
                <div class="icon-holder"><img src="../src/assets/icon-arcade.svg" alt="" srcset=""></div>
                <div class="plan-name">Arcade</div>
                <div class="plan-fee">${obj.arcade}</div>
                <div class="plan-description" data-gift style='display:${obj.bonus};'>2 months fee</div>
            </div>
        </div>
        <div class="plan-holder" data-plan="1">
        
            <div class="about-plan">
                <div class="icon-holder"><img src="../src/assets/icon-advanced.svg" alt="" srcset=""></div>
                <div class="plan-name">Advanced</div>
                <div class="plan-fee">${obj.advanced}</div>
                <div class="plan-description" data-gift style='display:${obj.bonus};'>2 months fee</div>
            </div>
        </div>
        <div class="plan-holder"  data-plan="2">
        
            <div class="about-plan">
                <div class="icon-holder"><img src="../src/assets/icon-pro.svg" alt="" srcset=""></div>
                <div class="plan-name">Pro</div>
                <div class="plan-fee">${obj.pro}</div>
                <div class="plan-description" data-gift style='display:${obj.bonus};' >2 months fee</div>
            </div>
        </div>
      
   </div>
   <div class="toggle-holder">
        <div>monthly</div>
        <input type="checkbox" name="user-plan" id="user-plan" class="checkbox" data-choose-plan  ${obj.checkbox}>
        <label for="user-plan" class="toggle"> </label>
        <div>yearly</div>
    </div>
<div class="nav-btns">
    <button class="tab-two-btn" data-tab-two-back-btn>Go Back</button>
    <button class="tab-two-btn" data-tab-two-next-btn>Next</button>
</div>
   </div>
    `;
  div.innerHTML = plan;

  return div;
};
const tabThree = function (obj) {
  // check(obj);
  obj.choosenPlan();
  const div = document.createElement("div");
  const storage = `
    <div class="tab-three">
    <div>
        <h1>Pick add-ons</h1>
        <p>Add-ons enhance your gaming experience.</p>
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
        <button class="tab-three-btn"  data-tab-three-back-btn >Go Back</button>
        <button class="tab-three-btn" data-tab-three-next-btn >Next</button>
    </div>
   </div>
    `;
  div.innerHTML = storage;
  return div;
};
const tabFour = function () {
  const div = document.createElement("div");
  const summary = `
    <div class="tab-four">
    <div class="confirm-header">
        <h1>Finishing up</h1>
        <p>Double-check everything looks OK before confirming.</p>
    </div>
    <div class="service-holder">
    <div class="summary-plan">

        <div class="plan">
            <h2 class="selected-plan">Arcade(yearly)</h2>
            <button class="change-plan">change</button>
        </div>
        <div class="summary-price">$90/yr</div>
       
     </div>
       <hr>
        <div class="summary-services">

            <div class="services">
            
                <p>Online service</p>
                <p>Larger storage</p>
               
             </div>
            <div class="service-prices">
                <p class="online-price">+$10/yr</p>
                <p class="storage-price">+$20/yr</p>
            </div>
        </div>
    </div>
        <div class="summary-total">
            <p class="total-title">Total per year</p>
            <span class="total-price">$120/yr</span>
        </div>
        <div class="nav-btns">
            <button class="tab-four-btn">Go Back</button>
            <button class="tab-four-confirm">Confirm</button>
        </div>
 </div>`;
  div.innerHTML = summary;
  return div;
};
export const functions = {
  stepOne: tabOne,
  stepTwo: tabTwo,
  stepThree: tabThree,
  stepFour: tabFour,
};
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
  *function that give diferent background style for the given index element
  *param 1:aray to accept 
  *parm 2:index number
  
  */
export function addEvents(arr, domElement) {
  arr.forEach((element) => {
    element === domElement
      ? (element.style.border = "2px solid red")
      : (element.style.border = "2px solid blue");
  });
}
// save state after apppend elment using index number from (userdata.selectedplan)
export function state(index) {
  const plan = document.querySelector(`[data-plan="${index}"]`);
  plan.style.border = "2px solid red";
}
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
    obj.online = "";
  } else if (index === 2 && domElement.checked === false) {
    obj.theme = "";
  }
}
// step four summary
