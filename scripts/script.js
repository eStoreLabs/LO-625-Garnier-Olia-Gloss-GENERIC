(() => {
  const container = document.querySelector(
    '#es-rc .es-benefits__item-comparison',
  );
  const slider = document.querySelector('#es-rc .comparison-slider');
  const beforeImg = document.querySelector('#es-rc .comparison-img--before');
  const labelBefore = document
    .querySelector('#es-rc .es-benefits__item-label--before')
    .closest('#es-rc .es-benefits__item-label-inner');
  const labelAfter = document
    .querySelector('#es-rc .es-benefits__item-label--after')
    .closest('#es-rc .es-benefits__item-label-inner');

  let isDragging = false;

  function updateSliderPosition(e) {
    const rect = container.getBoundingClientRect();
    let x = e.clientX - rect.left;

    if (x < 0) x = 0;
    if (x > rect.width) x = rect.width;

    const percent = (x / rect.width) * 100;

    slider.style.left = percent + '%';
    const clipRight = 100 - percent;
    beforeImg.style.clipPath = `inset(0 ${clipRight}% 0 0)`;

    if (percent < 35) {
      labelBefore.classList.add('hidden');
    } else {
      labelBefore.classList.remove('hidden');
    }

    if (percent > 65) {
      labelAfter.classList.add('hidden');
    } else {
      labelAfter.classList.remove('hidden');
    }
  }

  slider.addEventListener('mousedown', () => {
    isDragging = true;
  });

  container.addEventListener('mousedown', (e) => {
    isDragging = true;
    updateSliderPosition(e);
  });

  document.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    updateSliderPosition(e);
  });

  document.addEventListener('mouseup', () => {
    isDragging = false;
  });

  // Touch support
  container.addEventListener('touchstart', (e) => {
    isDragging = true;
  });

  document.addEventListener('touchmove', (e) => {
    if (!isDragging) return;
    e.preventDefault();

    const touch = e.touches[0];
    const rect = container.getBoundingClientRect();
    let x = touch.clientX - rect.left;

    if (x < 0) x = 0;
    if (x > rect.width) x = rect.width;

    const percent = (x / rect.width) * 100;

    slider.style.left = percent + '%';
    const clipRight = 100 - percent;
    beforeImg.style.clipPath = `inset(0 ${clipRight}% 0 0)`;

    if (percent < 20) {
      labelBefore.classList.add('hidden');
    } else {
      labelBefore.classList.remove('hidden');
    }

    if (percent > 65) {
      labelAfter.classList.add('hidden');
    } else {
      labelAfter.classList.remove('hidden');
    }
  });

  document.addEventListener('touchend', () => {
    isDragging = false;
  });
})();
