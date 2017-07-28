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
