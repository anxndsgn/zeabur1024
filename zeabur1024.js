import { promotions } from './promotions.js';

function zeabur1024Promotion() {
  const today = new Date(Date.now());

  if (today.toLocaleDateString() == '2024/10/14') {
    console.log(promotions);
  }
}

zeabur1024Promotion();