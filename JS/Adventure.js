  let sortBtn = document.querySelector(".filter-menu").children;
  let sortItem = document.querySelector(".filter-item").children;
  for (let i = 0; i < sortBtn.length; i++) {
    sortBtn[i].addEventListener("click", function () {
      for (let j = 0; j < sortBtn.length; j++) {
        sortBtn[j].classList.remove("current");
      }
      this.classList.add("current");
      let targetData = this.getAttribute("data-target");
      for (let k = 0; k < sortItem.length; k++) {
        sortItem[k].classList.remove("active");
        sortItem[k].classList.add("delete");
        if (
          sortItem[k].getAttribute("data-item") == targetData ||
          targetData == "all"
        ) {
          sortItem[k].classList.remove("delete");
          sortItem[k].classList.add("active");
        }
      }
    });
  }


  // logo slider ------------
  //logo slider

$('.logos-slider').slick({
slidesToShow: 5,
slidesToScroll: 1,
autoplay: true,
autoplaySpeed: 1500,
arrows: false,
dots: false,
pauseOnHover: false,
responsive: [{
breakpoint: 768,
settings: {
slidesToShow: 3
}
}, {
breakpoint: 520,
settings: {
slidesToShow: 2
}
}]
});