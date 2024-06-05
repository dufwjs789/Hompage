let index = 0;
  const images = document.querySelectorAll('.image-container img');
  const totalImages = images.length;
  const sliderWidth = document.querySelector('.slider').offsetWidth;
  let slideInterval;
  
  function startSlider() {
    slideInterval = setInterval(function() {
      changeSlide(index + 1);
    }, 2500);
  }
  
  function resetSlider() {
    clearInterval(slideInterval);
    startSlider();
  }
  
  document.querySelector('.prev').addEventListener('click', function() {
    changeSlide(index - 1);
    resetSlider();
  });
  
  document.querySelector('.next').addEventListener('click', function() {
    changeSlide(index + 1);
    resetSlider();
  });
  
  function changeSlide(n) {
    if (n >= totalImages) {
      index = 0;
    } else if (n < 0) {
      index = totalImages - 1;
    } else {
      index = n;
    }
    updateSlidePosition();
  }
  
  function updateSlidePosition() {
    document.querySelector('.image-container').style.transform = 'translateX(' + (-sliderWidth * index) + 'px)';
    resetSlider();
  }
  
  startSlider();