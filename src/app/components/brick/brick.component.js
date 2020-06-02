import './brick.scss';
export const BrickComponent = {
  template: require('./brick.html'),
  controller,
  controllerAs: 'vm',
  bindings: {
    glow: '<', // Boolean
    selected: '<', // Boolean
    matched: '<', // Boolean
    imageSrc: '@', // String
    onSelect: '&' // fn<void>
  }
};

controller.$inject = ['BRICK_COVER'];
function controller(BRICK_COVER) {
  const vm = this;
  vm.$onInit = activate;
  vm.isMatched = isMatched;
  vm.isSelected = isSelected;
  vm.onClick = onClick;
  vm.imageCover = BRICK_COVER;

  function activate() {
  }

  function isMatched() {
    return vm.matched;
  }

  function isSelected() {
    return vm.selected;
  }

  function onClick() {
    vm.onSelect({img: vm.imageSrc});
  }
}
