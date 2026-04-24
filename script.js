document.querySelectorAll('.project-thumb').forEach(thumb => {
  const video = thumb.querySelector('video.thumb-gif');
  if (!video) return;

  thumb.addEventListener('mouseenter', () => {
    video.currentTime = 0;
    video.play().catch(() => {});
  });

  thumb.addEventListener('mouseleave', () => {
    video.pause();
  });
});
