/** Segundo Slider **/
new Glider(document.querySelector('.segundoGlider'), {
    slidesToScroll: 1,
    slidesToShow: 1,
    draggable: false,
    dots: '.dots2',
    arrows: {
      prev: '#btnPrev',
      next: '#btnNext'
    }
  });