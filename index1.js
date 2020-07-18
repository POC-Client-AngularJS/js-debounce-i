
import "./style.css";

const getData = function() {
  console.log("Fetch data from an API.");
};

const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      timeout = null;
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

const betterFunction = debounce(getData, 300);

var form = document.getElementById("idInpSampleString");
if (form.attachEvent) {
  form.attachEvent("keyup", betterFunction);
} else {
  form.addEventListener("keyup", betterFunction);
}
