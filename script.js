const year = new Date().getFullYear();
document.title = `Emmaki — Creative Studio`;

document.querySelectorAll('.project-thumb').forEach(thumb => {
  const video = thumb.querySelector('video');

  thumb.addEventListener('mouseenter', () => {
    video.currentTime = 0;
    video.play().catch(() => {}); // evita errores silenciosos
  });

  thumb.addEventListener('mouseleave', () => {
    video.pause();
  });
});

