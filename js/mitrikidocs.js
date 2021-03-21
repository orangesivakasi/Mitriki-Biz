function animateValue(obj, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      obj.innerHTML = Math.floor(progress * (end - start) + start);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }
  
  

  const obj = document.getElementById("bc-count");
  animateValue(obj, 0, 50, 2000);

  const obj1= document.getElementById("re-count");
  animateValue(obj1, 0, 30, 2000);
  
  const obj2 = document.getElementById("fp-count");
  animateValue(obj2, 0, 60, 2000);

 