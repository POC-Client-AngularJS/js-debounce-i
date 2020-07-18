/*
 * Import stylesheets.
 */
import "./style.css";

const getData = function() {
  console.log("Fetch data from an API.");
};

/**
 * Returns a function, that, as long as it continues to be invoked,
 * will not be triggered.
 * The function will be called after it stops being called for
 * "wait" milliseconds.
 **/
const debounce = (func, wait) => {
  let timeout;
  /*
   * This is the function that is returned and will be executed
   * many times.
   * We spread (...args) to capture any number of parameters
   * we want to pass.
   */
  return function executedFunction(...args) {
    /*
     * The callback function to be executed after the debounce
     * time has elapsed.
     */
    const later = () => {
      /*
       * Setting "timeout" to "null" to indicate that
       * Debounce has ended.
       */
      timeout = null;
      /*
       * Execute callback function.
       */
      func(...args);
    };
    /*
     * This will reset the waiting every function execution.
     * This is the step that prevents the function from
     * being executed because it will never reach the inside
     * of the previous "setTimeout".
     */
    clearTimeout(timeout);
    /*
     * Restart the Debounce waiting period.
     * "setTimeout" returns a truthy value. It differs in web vs Node.
     */
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
