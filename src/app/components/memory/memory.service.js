import lodash from 'lodash';

MemoryService.$inject = ['$interval'];

export function MemoryService($interval) {
  let timer = 45;
  let matched = new Set();
  let selected = new Set();
  let shuffledBricks = [];
  let clicks = 0;

  function init() {
    // Decrement the Game timer
    $interval(function () {
      timer--;
    }, 1000);
    return {
      startGame,
      timerStatus,
      wonGame,
      getBricks,
      isSelected,
      selectBrick,
      isMatched,
      endOfTime,
      getClicks
    };
  }

  return init();

  // This can also be a restart.
  function startGame(bricks) {
    timer = 45;
    matched = new Set();
    selected = new Set();
    shuffledBricks = [];
    clicks = 0;
    for (let key in bricks) {
      shuffledBricks.push(bricks[key]);
      shuffledBricks.push(bricks[key]);
    }
    shuffledBricks = shuffle(shuffledBricks);
  }

  function getBricks() {
    return shuffledBricks;
  }

  function isSelected(index, img) {
    return selected.has(index);
  }

  function isMatched(index, img) {
    return matched.has(img);
  }

  function selectBrick(index, img) {
    // If selected bricks are 2 already
    if (selected.size === 2) {
      selected.clear();
    }

    // Do not add clicks to a selected brick
    if (!selected.has(index)) {
      selected.add(index);
      clicks++;
    }

    // If 2 bricks are selected, grab the values and compare them
    if (selected.size === 2) {
      const selectIterator = selected[Symbol.iterator]();
      const firstSelectedIndex = selectIterator.next().value;
      const secondSelectedIndex = selectIterator.next().value;
      // If pieces Match
      if (shuffledBricks[secondSelectedIndex] === shuffledBricks[firstSelectedIndex]) {
        // Add img string to matched stack
        matched.add(shuffledBricks[firstSelectedIndex]);
      }
    }
  }

  function wonGame() {
    return shuffledBricks.length / 2 === matched.size;
  }

  function timerStatus() {
    return timer;
  }

  function getClicks() {
    return clicks;
  }

  function endOfTime() {
    return timer <= 0;
  }

  // PROTECTED

  function shuffle(collection) {
    return lodash.shuffle(collection);
  }
}
