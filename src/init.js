import game, { handleUserAction } from './gamestate';
import { TICK_RATE } from './constants';
import initButtons from './buttons';

function init() {
  console.log('starting game');

  let nextTimeToTick = Date.now();
  initButtons(handleUserAction);
  function nextAniationFrame() {
    const now = Date.now();

    if (nextTimeToTick <= now) {
      game.tick();
      nextTimeToTick = now + TICK_RATE;
    }

    requestAnimationFrame(nextAniationFrame);
  }

  requestAnimationFrame(nextAniationFrame);
}
init();
