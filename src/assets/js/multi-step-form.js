document.getElementById('next-btn-1').addEventListener('click', function() {
  document.getElementById('step-1').style.display = 'none';
  document.getElementById('step-2').style.display = 'flex';
  document.getElementById('next-btn-1').style.display = 'none';
  document.getElementById('prev-btn-2').style.display = 'block';
  document.getElementById('progress-1').style.width = '50%';
});

document.getElementById('prev-btn-2').addEventListener('click', function() {
  document.getElementById('step-2').style.display = 'none';
  document.getElementById('step-1').style.display = 'flex';
  document.getElementById('next-btn-1').style.display = 'block';
  document.getElementById('prev-btn-2').style.display = 'none';
  document.getElementById('progress-1').style.width = '0%';
});





