import "./style.css";
import {
  functions,
  UserPersonalInfo,
  UserPlanData,
  UserServices,
  changePrice,
  addEvents,
  isChecked,
  state,
} from "./tabs";
const holder = document.querySelector(".preview");
const dots = document.querySelectorAll(".dot");
const tabs = [...dots];

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
// const userInfo = document.querySelectorAll(".user-info");
// default

// function to save user info  as an array in localstorage

holder.addEventListener("click", (e) => {
  if (e.target.matches(".tab-one-btn")) {
    holder.textContent = "";

    console.log(userPlans);
    holder.appendChild(functions.stepTwo(userPlans));
    state(userPlans.selectedPlan);

    tabs[1].style.backgroundColor = "yellow";
  } else if (e.target.matches("[data-user-name]")) {
    const userName = document.querySelector("[data-user-name]");
    userName.addEventListener("change", (e) => {
      userDataArray[0].name = userName.value;
      userInfo.name = userName.value;
      save();
    });
  } else if (e.target.matches("[data-user-email]")) {
    const userEmail = document.querySelector("[data-user-email]");
    userEmail.addEventListener("change", (e) => {
      userDataArray[0].email = userEmail.value;
      save();
    });
  } else if (e.target.matches("[data-user-phone]")) {
    const userPhone = document.querySelector("[data-user-phone]");
    userPhone.addEventListener("change", (e) => {
      userDataArray[0].phone = userPhone.value;
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

    const plans = [...prices];
    if (userPlan.checked === true) {
      userPlans.checkbox = "checked";
      userPlans.plan = true;
      userPlans.bonus = "block";
      userAdds.addPlan = true;
      // update dom
      freeGifts.forEach((divs) => {
        divs.style.display = userPlans.bonus;
      });
      changePrice(plans, userPlans);
    } else if (userPlan.checked === false) {
      // monthly price
      userPlans.checkbox = "";
      userPlans.plan = false;
      userPlans.bonus = "none";
      userAdds.addPlan = false;
      freeGifts.forEach((divs) => {
        divs.style.display = userPlans.bonus;
      });
      changePrice(plans, userPlans);
    }
  } else if (e.target.matches("[data-tab-two-next-btn]")) {
    holder.textContent = " ";
    holder.appendChild(functions.stepThree(userAdds));
  }
  // tab three events
  else if (e.target.matches(".user-add")) {
    const index = Number(e.target.dataset.adds);
    const addsCheckbox = document.querySelector(`[data-adds="${index}"]`);
    isChecked(index, addsCheckbox, userAdds);
    console.log(addsCheckbox.checked);
    console.log(userAdds);
  } else if (e.target.matches("[data-tab-three-next-btn")) {
    holder.textContent = "";
    holder.appendChild(functions.stepFour());
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
      state(userPlans.selectedPlan);
    } else if (tabs.indexOf(element) === 2) {
      holder.textContent = "";
      holder.appendChild(functions.stepThree(userAdds));
    }
  });
});
