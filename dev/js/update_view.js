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
