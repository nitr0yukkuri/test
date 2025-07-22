const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', (e) => {
  const x = e.clientX;
  const y = e.clientY;

  cursor.style.transform = `translate(${x - 10}px, ${y - 10}px)`;
});
