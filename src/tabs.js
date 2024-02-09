 const tabOne = function(){
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
                    <input type="text" id="user-name" name="user-name" data-user-name>
                </div>
                <div class="label-holder">
                    <label for="user-email">Email Adress</label>
                    <input type="email" id="user-email" name="user-email" data-user-email>
                </div>
                <div class="label-holder">
                    <label for="user-phone">Phone Number</label>
                    <input type="number" id="user-phone" name="user-phone" data-user-phone>
                </div>
                
            </form>
            <button class="tab-one-btn">Next Step</button>
        </div>
    </div>`
  return personalInfo
}
 const tabTwo = function(){
    const plan = `
    <div class="step-two">
    <div class="plan-header">
        <h1>Select your Plan</h1>
        <p>you have the option monthly or yearly billing.</p>
    </div>
    <div class="plans">
        <div class="plan-holder">
        
            <div class="about-plan">
                <div class="icon-holder"><img src="../src/assets/icon-arcade.svg" alt="" srcset=""></div>
                <div class="plan-name">Arcade</div>
                <div class="plan-fee">$90/yr</div>
                <div class="plan-description">2 months fee</div>
            </div>
        </div>
        <div class="plan-holder">
        
            <div class="about-plan">
                <div class="icon-holder"><img src="../src/assets/icon-advanced.svg" alt="" srcset=""></div>
                <div class="plan-name">Advanced</div>
                <div class="plan-fee">$120/yr</div>
                <div class="plan-description">2 months fee</div>
            </div>
        </div>
        <div class="plan-holder">
        
            <div class="about-plan">
                <div class="icon-holder"><img src="../src/assets/icon-pro.svg" alt="" srcset=""></div>
                <div class="plan-name">Pro</div>
                <div class="plan-fee">$150/yr</div>
                <div class="plan-description">2 months fee</div>
            </div>
        </div>
      
   </div>
   <div class="toggle-holder">
        <div>monthly</div>
        <input type="checkbox" name="user-plan" id="user-plan" class="checkbox" >
        <label for="user-plan" class="toggle"> </label>
        <div>yearly</div>
    </div>
<div class="nav-btns">
    <button class="tab-two-btn">Go Back</button>
    <button class="tab-two-btn">Next</button>
</div>
   </div>
    `
    return plan
}
const tabThree = function (){
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
                    <input type="checkbox" name="user-add" id="add-ons" class="user-add" data-user-online>
                </div>
                
                <div>
                    <h2 class="add-title">online services</h2>
                    <p class="add-plan">Access to multiplayer games</span>
                </div>
            </div>
                <div>+$1/mo</div>
            </div>
         </div>

         <div class="about-adds">
       
            <div class="add-holder">
                <div class="add-header">
                <div>
                    <input type="checkbox" name="user-add" id="add-storage" class="user-add" data-user-storage>
                </div>
                
                <div>
                    <h2 class="add-title">Large storage</h2>
                    <p class="add-plan">Extra 1TB cloud save</span>
                </div>
            </div>
                <div>+$2/mo</div>
            </div>
        </div>
        <div class="about-adds">
       
            <div class="add-holder">
                <div class="add-header">
                <div>
                    <input type="checkbox" name="user-add" id="add-theme" class="user-add" data-user-add>
                </div>
                
                <div>
                    <h2 class="add-title">Customizable profile</h2>
                    <p class="add-plan">Custom theme on your profile</span>
                </div>
            </div>
                <div>+$1/mo</div>
            </div>
       </div>
       <div class="nav-btns">
        <button class="tab-three-btn">Go Back</button>
        <button class="tab-three-btn">Next</button>
    </div>
   </div>
    `
    return storage
}
const tabFour = function(){
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
 </div>
    `
    return summary
}
export const functions = {
    stepOne : tabOne,
    stepTwo: tabTwo,
    stepThree: tabThree,
    stepFour: tabFour,
}


