// CUSTOMER PAGE
let customerPosition = {};

(function() {
  // GET MERCHANT BUTTON
  const merchantButton = document.querySelector('.customer-merchant-button');
  // ON CLICK CHANGE VIEW
  merchantButton.onclick = function() {
    updateView('merchant-home');
  }
  // WATCH LOCATION
  const authorizeButton = document.querySelector('.customer-authorize');
  authorizeButton.onclick = function() {
    if (navigator.geolocation) {
      // HANDLE SUCCESSFUL WATCH
      function success(position) {
        console.log(position);
        customerPosition = position.coords;
        updateView('stores');
      }
      // HANDLE ERROR
      function error(err) {
        console.log(err);

// WHILE NOT WORKING
        updateView('stores');
      }
      // PASS OPTIONS
      const options = {
        enableHighAccuracy: true,
        timeout: 5000
      }
      // CALL GEOLOCATION API
      const watchID = navigator.geolocation.watchPosition(success, error, options);
      // HANDLE NO BROWSER SUPPORT
    } else {
      console.log('location must be allowed');
    }
  }
})();
