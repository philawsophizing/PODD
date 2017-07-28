// MERCHANT PAGE
let storeLocation = {};

(function() {
  // GET CUSTOMER BUTTON
  const customerButton = document.querySelector('.merchant-human-button');
  // ON CLICK CHANGE VIEW
  customerButton.onclick = function() {
    updateView('customer-home');
  }
  // GET STORE LOCATION
  const authorizeButton = document.querySelector('.store-location');
  authorizeButton.onclick = function() {
    if (navigator.geolocation) {
      // HANDLE SUCCESSFUL WATCH
      function success(position) {
        console.log(position);
        storeLocation = position.coords;
        updateView('create-store');
      }
      // HANDLE ERROR
      function error(err) {
        console.log(err);

// WHILE NOT WORKING
        updateView('create-store');
      }
      // PASS OPTIONS
      const options = {
        enableHighAccuracy: true,
        timeout: 5000
      }
      // CALL GEOLOCATION API
      const watchID = navigator.geolocation.getCurrentPosition(success, error, options);
      // HANDLE NO BROWSER SUPPORT
    } else {
      console.log('location must be allowed');
    }
  }
})();
