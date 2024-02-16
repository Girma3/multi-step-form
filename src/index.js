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
  isEmpty,
} from "./tabs";
const holder = document.querySelector(".preview");
const dots = document.querySelectorAll(".dot");
const tabs = [...dots];
let cardSelected;

const userInfo = new UserPersonalInfo();
const userPlans = new UserPlanData();
const userAdds = new UserServices();

const LOCAL_STORAGE_OBJ_KEY = "user.info";
const userDataArray = JSON.parse(
  localStorage.getItem(LOCAL_STORAGE_OBJ_KEY)
) || [userInfo, userPlans];
// userDataArray.push(userone);

function save() {
  localStorage.setItem(LOCAL_STORAGE_OBJ_KEY, JSON.stringify(userDataArray));
}

localStorage.clear();
// save();
holder.appendChild(functions.stepOne(userDataArray[0]));

holder.addEventListener("click", (e) => {
  if (e.target.matches(".tab-one-btn")) {
    // validate step one form if its not empty
    const allInput = document.querySelectorAll("input");
    const arryInput = [...allInput];
    arryInput.forEach((input) => {
      const errMsg = document.querySelector(
        `[data-error-msg="${Number(input.dataset.error)}"]`
      );
      if (input.value === "") {
        errMsg.textContent = "This field is required!";
      }
    });

    if (isEmpty(arryInput) === false) {
      holder.textContent = "";
      holder.appendChild(functions.stepTwo(userPlans));
      tabs[1].style.backgroundColor = " hsl(206, 94%, 87%)";
    }
  } else if (e.target.matches("[data-user-name]")) {
    const userName = document.querySelector("[data-user-name]");
    userName.addEventListener("change", (e) => {
      const errMsg = document.querySelector(
        `[data-error-msg="${e.target.dataset.error}"]`
      );

      userDataArray[0].name = userName.value;
      userInfo.name = userName.value;
      validateForm(userName, 0, errMsg);

      save();
    });
  } else if (e.target.matches("[data-user-email]")) {
    const userEmail = document.querySelector("[data-user-email]");

    userEmail.addEventListener("change", (e) => {
      const errMsg = document.querySelector(
        `[data-error-msg="${e.target.dataset.error}"]`
      );
      userDataArray[0].email = userEmail.value;
      validateForm(userEmail, 1, errMsg);
      save();
    });
  } else if (e.target.matches("[data-user-phone]")) {
    const userPhone = document.querySelector("[data-user-phone]");
    const errMsg = document.querySelector(
      `[data-error-msg="${e.target.dataset.error}"]`
    );
    userPhone.addEventListener("change", (e) => {
      userDataArray[0].phone = userPhone.value;
      validateForm(userPhone, 2, errMsg);
      save();
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

      // state(userPlans.selectedPlan, userPlans);
      changePrice(plans, userPlans);
    }
  } else if (e.target.matches("[data-tab-two-next-btn]")) {
    const errMsg = document.querySelector("[data-select-plan]");
    if (userPlans.selectedPlan !== "") {
      holder.textContent = " ";
      holder.appendChild(functions.stepThree(userAdds));
      errMsg.textContent = "";
    } else if (userPlans.selectedPlan === "") {
      errMsg.textContent = "click the cards to  select.";
    }
  }
  // tab three events
  else if (e.target.matches(".user-add")) {
    const index = Number(e.target.dataset.adds);
    const addsCheckbox = document.querySelector(`[data-adds="${index}"]`);
    isChecked(index, addsCheckbox, userAdds);
  } else if (e.target.matches("[data-tab-three-next-btn")) {
    holder.textContent = "";
    holder.appendChild(functions.stepFour(userPlans, userAdds));
  }
});

tabs.forEach((element) => {
  element.addEventListener("click", (e) => {
    if (tabs.indexOf(element) === 0) {
      holder.textContent = "";
      holder.appendChild(functions.stepOne(userInfo));
    } else if (tabs.indexOf(element) === 1) {
      holder.textContent = "";
      holder.appendChild(functions.stepTwo(userPlans));
      selectedCard(userPlans.selectedPlan);
    } else if (tabs.indexOf(element) === 2) {
      holder.textContent = "";
      holder.appendChild(functions.stepThree(userAdds));
    } else if (tabs.indexOf(element) === 3) {
      holder.textContent = "";
      holder.appendChild(functions.stepFour(userPlans, userAdds));
    }
  });
});
