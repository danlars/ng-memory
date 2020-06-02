import './memory.scss';

export const MemoryComponent = {
  template: require('./memory.html'),
  controller,
  controllerAs: 'vm'
};

controller.$inject = ['MemoryService', 'BRICKS', '$interval', '$timeout'];

function controller(MemoryService, BRICKS, $interval, $timeout) {
  const vm = this;
  vm.lastClick = -1;
  vm.showContainer = false;
  vm.$onInit = activate;
  vm.getTimerStatus = getTimerStatus;
  vm.getBricks = getBricks;
  vm.isSelected = isSelected;
  vm.isMatched = isMatched;
  vm.onSelect = onSelect;
  vm.getClicks = getClicks;

  function activate() {
    MemoryService.startGame(BRICKS);
    // Check if game has ended every 1 second
    $interval(() => {
      if (MemoryService.wonGame()) {
        goToWinner();
      } else if (MemoryService.endOfTime()) {
        goToLoser();
      }
    }, 1000);

    // awaits the digest cycle to finish before emitted. This is to simulate promise based event handling, eg. if images were loaded from an API
    $timeout(() => {
      vm.showContainer = true;
    }, 100);
  }

  function onSelect(index, img) {
    vm.lastClick = index;
    MemoryService.selectBrick(index, img);
  }

  function getTimerStatus() {
    return MemoryService.timerStatus();
  }

  function getBricks() {
    return MemoryService.getBricks();
  }

  function getClicks() {
    return MemoryService.getClicks();
  }

  function isSelected(index, img) {
    return MemoryService.isSelected(index, img);
  }

  function isMatched(index, img) {
    return MemoryService.isMatched(index, img);
  }

  function goToLoser() {
    window.location = 'https://campaign.jabra.com/loser';
  }

  function goToWinner() {
    const url = new URL('https://campaign.jabra.com/didit');
    url.searchParams.append('clicks', getClicks());
    url.searchParams.append('timer', getTimerStatus());
    window.location = url.href;
  }
}
