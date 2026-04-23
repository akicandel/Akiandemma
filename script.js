const year = new Date().getFullYear();
document.title = `Emmaki — Creative Studio`;

document.querySelectorAll('.project-thumb').forEach(thumb => {
  const video = thumb.querySelector('video');

  thumb.addEventListener('mouseenter', () => {
    video.play();
  });

  thumb.addEventListener('mouseleave', () => {
    video.pause();
    video.currentTime = 0;
  });
});

