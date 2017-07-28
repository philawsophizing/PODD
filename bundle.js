const fs = require('fs');

const fileWatch = () => {

  // WATCH JS
  fs.watch('./dev/js', (event, name) => {
    if (event) {
      build(name);
    }
  });
  // WATCH CSS
  fs.watch('./dev/css', (event, name) => {
    if (event) {
      build(name);
    }
  });
  // WATCH JS
  fs.watch('./dev/html', (event, name) => {
    if (event) {
      build(name);
    }
  });
}

const buildFiles = {
  js: [
    './dev/js/index.js',
    './dev/js/update_view.js',
    './dev/js/customer_home.js',
    './dev/js/merchant_home.js',
    './dev/js/DB.js',
    './dev/js/stores.js',
    './dev/js/create_store.js'
  ],
  css: [
    './dev/css/reset.css',
    './dev/css/app_shell.css',
    './dev/css/customer_home.css',
    './dev/css/merchant_home.css',
    './dev/css/stores.css',
    './dev/css/create_store.css'
  ],
  html: [
    './dev/html/open.html',
    // PAGES ------------->
    './dev/html/customer_home.html',
    './dev/html/merchant_home.html',
    './dev/html/stores.html',
    './dev/html/create_store.html',
    // <-------------------
    './dev/html/close.html'
  ]
}

// BUNDLE WITH FILE SYSTEM
const build = (file) => {
  let language = file.split('.')[1];
  let path = './client/index.' + language;
  let files = buildFiles[language];
  let bundle = files.map(file => {
    return fs.readFileSync(file).toString();
  });
  fs.writeFileSync(path, bundle.join('\n'));

  // console.log(`${path} built`);
};

module.exports = fileWatch;

// STARTUP BUILD
//
// build('.html');
// build('.css');
// build('.js');
