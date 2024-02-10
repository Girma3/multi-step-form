import "./style.css";
import { functions, UserData } from "./tabs";
const holder = document.querySelector(".preview");
const dots = document.querySelectorAll(".dot");
const tabs = [...dots];

const obj = new UserData();
const LOCAL_STORAGE_OBJ_KEY = "user.info";
const userDataArray = JSON.parse(
  localStorage.getItem(LOCAL_STORAGE_OBJ_KEY)
) || [obj];
holder.appendChild(functions.stepOne(userDataArray[0]));
const userInfo = document.querySelectorAll(".user-info");

// function to save user info  as an array in localstorage
function save() {
  localStorage.setItem(LOCAL_STORAGE_OBJ_KEY, JSON.stringify(userDataArray));
}
// localStorage.clear();

holder.addEventListener("click", (e) => {
  // userInfo.forEach((input) => {
  //   input.addEventListener("change", (e) => {
  //     if (e.target.matches("[data-user-name]")) {
  //       userDataArray[0].name = userName.value;
  //       save();
  //       console.log(userName.value);
  //     } else if (e.target === userEmail) {
  //       userDataArray[0].email = userEmail.value;
  //       save();
  //     } else if (e.target === userPhone) {
  //       userDataArray[0].phone = userPhone.value;
  //       save();
  //     }
  //   });
  // });
  if (e.target.matches(".tab-one-btn")) {
    holder.textContent = "";
    holder.appendChild(functions.stepTwo());
    tabs[1].style.backgroundColor = "yellow";
  } else if (e.target.matches("[data-user-name]")) {
    const userName = document.querySelector("[data-user-name]");
    userName.addEventListener("change", (e) => {
      userDataArray[0].name = userName.value;
      save();
    });
  } else if (e.target.matches("[data-user-email]")) {
    const userEmail = document.querySelector("[data-user-email]");
    userEmail.addEventListener("change", (e) => {
      userDataArray[0].email = userEmail.value;
      save();
    });
  } else if (e.target.matches("[data-user-phone]")) {
    const userPhone = document.querySelector("[data-user-phone");
    userPhone.addEventListener("change", (e) => {
      userDataArray[0].phone = userPhone.value;
      save();
    });
  }
});
tabs.forEach((element) => {
  element.addEventListener("click", (e) => {
    if (tabs.indexOf(element) === 0) {
      holder.textContent = "";
      holder.appendChild(functions.stepOne(userDataArray[0]));
    }
  });
});
