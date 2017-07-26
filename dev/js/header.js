// HEADER
(function HeaderButtons() {
  // GET BUTTONS
  const human = document.querySelector('.human');
  const merchant = document.querySelector('.merchant');

  // GET STYLES
  const selected = window.getComputedStyle(human, null).cssText;
  const unSelected = window.getComputedStyle(merchant, null).cssText;

  // GET ROUTES
  const humanRoute = document.querySelector('.customer-home');
  const merchantRoute = document.querySelector('.merchant-home');

  human.onclick = function() {
    humanRoute.style.display = 'block';
    merchantRoute.style.display = 'none';
    human.style.cssText = selected;
    merchant.style.cssText = unSelected;
  };

  merchant.onclick = function() {
    merchantRoute.style.display = 'block';
    humanRoute.style.display = 'none';
    merchant.style.cssText = selected;
    human.style.cssText = unSelected;
  };

})();

(function View() {

})();
