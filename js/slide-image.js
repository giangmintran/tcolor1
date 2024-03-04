const sliders = document.querySelectorAll('.container-slider');

sliders.forEach(slider => {
  slider.addEventListener('input', (e) => {
    // Tìm container chứa slider hiện tại
    const container = slider.closest('.container-slider');
    if (container) {
      container.style.setProperty('--position', `${e.target.value}%`);
    }
  });
});
