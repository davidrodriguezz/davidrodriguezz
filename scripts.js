document.getElementById('openNavImg').addEventListener('click', function() {
    document.getElementById('openNavImg').style.transform = "scaleX(-1)";
    document.getElementById('sideNav').style.width = '250px';
    document.getElementById('openNavImg').style.left = '250px';

  });
  
  document.getElementById('closeNav').addEventListener('click', function() {
    document.getElementById('openNavImg').style.transform = "scaleX(1)";
    document.getElementById('sideNav').style.width = '0';
    document.getElementById('openNavImg').style.left = '0';

  });
  document.addEventListener('scroll', function() {
    const graySection = document.querySelector('.gray-section');
    
    const scrollTop = window.scrollY;
    const windowHeight = window.innerHeight;
    const halfWindowHeight = windowHeight / 2;
    
    if (scrollTop >= halfWindowHeight) {
      graySection.style.display = 'block';
    } else {
      graySection.style.display = 'none';
    }
  });
  
  
  
  
  
