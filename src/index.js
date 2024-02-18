import "./style.css";
import {
  functions,
  UserPersonalInfo,
  UserPlanData,
  UserServices,
  changePrice,
  addEvents,
  selectedCard,
  isChecked,
  validateForm,
  isFormfilled,
  isValueEmpty,
  changeColor,
} from "./tabs";
const holder = document.querySelector(".preview");
const dots = document.querySelectorAll(".dot");
const tabs = [...dots];
const userInfo = new UserPersonalInfo();
const userPlans = new UserPlanData();
const userAdds = new UserServices();
holder.appendChild(functions.stepOne(userInfo)); // default is empty form
holder.addEventListener("click", (e) => {
  if (e.target.matches(".tab-one-btn")) {
    const allInput = document.querySelectorAll("input");
    const arryInput = [...allInput];
    // validate step one form if its not empty move to next step

    if (isFormfilled(arryInput) === true) {
      holder.textContent = "";
      holder.appendChild(functions.stepTwo(userPlans));
      changeColor(tabs, 1);
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
      validateForm(userName, 0, errMsg);
    });
  } else if (e.target.matches("[data-user-email]")) {
    const userEmail = document.querySelector("[data-user-email]");
    userEmail.addEventListener("change", (e) => {
      const errMsg = document.querySelector(
        `[data-error-msg="${e.target.dataset.error}"]`
      );
      userInfo.email = userEmail.value;
      validateForm(userEmail, 1, errMsg);
    });
  } else if (e.target.matches("[data-user-phone]")) {
    const userPhone = document.querySelector("[data-user-phone]");
    const errMsg = document.querySelector(
      `[data-error-msg="${e.target.dataset.error}"]`
    );
    userPhone.addEventListener("change", (e) => {
      userInfo.phone = userPhone.value;
      validateForm(userPhone, 2, errMsg);
    });
  } // tab two events
  else if (e.target.matches(".plan-holder")) {
    const index = Number(e.target.dataset.plan);
    const plans = document.querySelectorAll(".plan-holder");
    const clickedPlan = document.querySelector(`[data-plan="${index}"]`);
    addEvents(plans, clickedPlan);
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

      changePrice(plans, userPlans);
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
      changePrice(plans, userPlans);
    }
  } else if (e.target.matches("[data-tab-two-next-btn]")) {
    const errMsg = document.querySelector("[data-select-plan]");
    if (userPlans.selectedPlan !== "") {
      holder.textContent = " ";
      holder.appendChild(functions.stepThree(userAdds));
      errMsg.textContent = "";
      changeColor(tabs, 2); // step 3
    } else if (userPlans.selectedPlan === "") {
      errMsg.textContent = "click the cards to  select.";
    }
  } else if (e.target.matches("[data-tab-two-back-btn]")) {
    holder.textContent = "";
    holder.appendChild(functions.stepOne(userInfo));
    changeColor(tabs, 0); // step one
  }
  // tab three events
  else if (e.target.matches(".user-add")) {
    const index = Number(e.target.dataset.adds);
    const addsCheckbox = document.querySelector(`[data-adds="${index}"]`);
    isChecked(index, addsCheckbox, userAdds);
  } else if (e.target.matches("[data-tab-three-next-btn")) {
    holder.textContent = "";
    holder.appendChild(functions.stepFour(userPlans, userAdds));
    changeColor(tabs, 3); // step 4
  } else if (e.target.matches("[data-tab-three-back-btn]")) {
    holder.textContent = "";
    holder.appendChild(functions.stepTwo(userPlans));
    selectedCard(userPlans.selectedPlan);
    changeColor(tabs, 1); // step 2
  }
  // step four event
  else if (e.target.matches("[data-tab-four-back-btn]")) {
    holder.textContent = "";
    holder.appendChild(functions.stepThree(userAdds));
    changeColor(tabs, 2); // step 3
  } else if (e.target.matches("[data-tab-four-confirm-btn]")) {
    holder.textContent = "";
    holder.appendChild(functions.stepFive());
  }
});

tabs.forEach((element) => {
  element.addEventListener("click", (e) => {
    if (tabs.indexOf(element) === 0) {
      holder.textContent = "";
      holder.appendChild(functions.stepOne(userInfo));
      changeColor(tabs, 0);
      // next check step one is clear else don't switch
    } else if (
      tabs.indexOf(element) === 1 &&
      isValueEmpty(userInfo) === false
    ) {
      holder.textContent = "";
      holder.appendChild(functions.stepTwo(userPlans));
      selectedCard(userPlans.selectedPlan);
      changeColor(tabs, 1);
      // check if step two cards selected to preceed to step 3 and 4 they are same
    } else if (tabs.indexOf(element) === 2 && userPlans.selectedPlan !== "") {
      holder.textContent = "";
      holder.appendChild(functions.stepThree(userAdds));
      changeColor(tabs, 2);
    } else if (tabs.indexOf(element) === 3 && userPlans.selectedPlan !== "") {
      holder.textContent = "";
      holder.appendChild(functions.stepFour(userPlans, userAdds));
      changeColor(tabs, 3);
    }
  });
});
