(function() {
  // RENDER HOME VIEW
  const homeButton = document.querySelector('.home-button');

  homeButton.onclick = function() {
    updateView('customer-home');
  };
  
})();

// GET ROOT DOM NODE
const rootNode = document.querySelector('.shell');
// GET ALL CHILDREN NODES
const pages = [].slice.call(rootNode.children);
// UPDATEVIEW
function updateView(requestedView) {
  pages.forEach(function(page) {
    if (page.className === requestedView) {
      page.style.display = 'block';
    } else {
      page.style.display = 'none';
    }
  });
};

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

const DB = {
  stores: [
    {
      type: 'Retail',
      name: 'Lululemon',
      address: '17 ave SW, Calgary',
      lat: 88888888,
      lon: 3837484,
    },
    {
      type: 'Restaurant',
      name: 'BlueStar',
      address: '1 ave NE, Calgary',
      lat: 88888888,
      lon: 3837484,
    },
    {
      type: 'Retail',
      name: 'Dollarama',
      address: '8 ave SW, Calgary',
      lat: 88888888,
      lon: 3837484,
    },
  ]
};

// STORES PAGE
(function() {
  // GET TABLE
  const table = document.querySelector('.table');

  // APPEND STORES
  const stores = DB.stores;
  console.log(stores);

  stores.forEach(function(store) {
    let row = document.createElement('tr');
    let type = document.createElement('td');
    type.innerHTML = store.type;
    row.appendChild(type);
    let name = document.createElement('td');
    name.innerHTML = store.name;
    row.appendChild(name);
    let address = document.createElement('td');
    address.innerHTML = store.address;
    row.appendChild(address);
    table.appendChild(row);
  });
})();

