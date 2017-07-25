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
    './dev/js/index.js'
  ],
  css: [
    './dev/css/main.css'
  ],
  html: [
    './dev/html/open.html',
    // PAGES ------------->
    './dev/html/home.html',
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
