import { promotions } from './promotions.js';

function zeabur1024Promotion() {
  const today = new Date(Date.now());

  if (today.toLocaleDateString() == '10/14/2024') {
    console.log(promotions);
  }
}

zeabur1024Promotion();
