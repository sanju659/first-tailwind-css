const navDialog = document.getElementById("nav-dialog");
const handleMenu = () => {
  navDialog.classList.toggle("hidden");
};

const initialTranslateLTR = -48 * 4;
const initialTranslateRTL = 36 * 4;

const setupIntersectionObserver = (element, isLTR, speed) => {
  const intersectionCallback = (entries) => {
    const isIntersecting =entries[0].isIntersecting;
    // console.log(element, isIntersecting);
    if(isIntersecting){
      document.addEventListener('scroll', scrollHandler);
    }else{
      document.removeEventListener('scroll', scrollHandler);
    }
  }
  const intersectionObserver = new IntersectionObserver(intersectionCallback);

  intersectionObserver.observe(element);

  const scrollHandler = () => {
    const translateX = (window.innerHeight - element.getBoundingClientRect().top) * speed;
    let totalTranslate = 0;
    if(isLTR){
      totalTranslate = translateX + initialTranslateLTR;
    }else{
      totalTranslate = -(translateX + initialTranslateRTL);
    }
    element.style.transform = `translateX(${totalTranslate}px)`
  }

}

const line1 = document.getElementById("line1");
const line2 = document.getElementById("line2");
const line3 = document.getElementById("line3");
setupIntersectionObserver(line1, true, 0.15);
setupIntersectionObserver(line2, false, 0.15);
setupIntersectionObserver(line3, true, 0.15);
