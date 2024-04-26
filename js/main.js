$(function () {

  document.querySelector('.burger').addEventListener('click', function () {
    this.classList.toggle('active');
    document.querySelector('.main-nav').classList.toggle('open');
  });

  document.addEventListener('click', function (e) {
    if (!e.target.closest('.main-nav') && !e.target.closest('.burger')) {
      document.querySelector('.main-nav').classList.remove('open');
      document.querySelector('.burger').classList.remove('active');
    }
  });

  const burger = document.getElementsByClassName('drop-down');

  for (let i = 0; i < burger.length; i++) {
    burger[i].addEventListener('click', function () {
      this.classList.toggle('active');
    });
  }

  const subMenus = document.getElementsByClassName('main-nav');

  for (let i = 0; i < subMenus.length; i++) {
    subMenus[i].addEventListener('click', function (e) {
      e.stopPropagation();

      if (e.target.classList.contains('drop-down__link')) {

        e.preventDefault();
      } else {

        window.location.href = e.target.href;
      }
    });
  }




  $('.team-slider__inner').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: '<button type="button" class="slick-prev"><svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.2541 0.241064C9.55216 0.533264 9.57926 0.990508 9.33539 1.31272L9.2541 1.40503L2.52658 8L9.2541 14.595C9.55216 14.8872 9.57926 15.3444 9.33539 15.6666L9.2541 15.7589C8.95604 16.0511 8.48963 16.0777 8.16096 15.8386L8.06679 15.7589L0.745899 8.58198C0.44784 8.28978 0.420743 7.83254 0.66461 7.51033L0.745899 7.41802L8.06679 0.241064C8.39466 -0.0803548 8.92624 -0.0803548 9.2541 0.241064Z" fill="black" /></svg>',
    nextArrow: '<button type="button" class="slick-next"><svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.745899 15.7589C0.44784 15.4667 0.420743 15.0095 0.66461 14.6873L0.745899 14.595L7.47342 8L0.7459 1.40503C0.447841 1.11283 0.420744 0.655582 0.664611 0.333374L0.745901 0.241063C1.04396 -0.0511368 1.51037 -0.0776985 1.83904 0.161373L1.93321 0.241063L9.2541 7.41802C9.55216 7.71022 9.57926 8.16746 9.33539 8.48967L9.2541 8.58198L1.93321 15.7589C1.60534 16.0804 1.07376 16.0804 0.745899 15.7589Z" fill="black"/></svg>',
    responsive: [
      {
        breakpoint: 1370,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 656,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
    ]
  });
  $('.feedback-slider__inner').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    adaptiveHeight: true,
    prevArrow: '<button type="button" class="slick-prev"><svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.2541 0.241064C9.55216 0.533264 9.57926 0.990508 9.33539 1.31272L9.2541 1.40503L2.52658 8L9.2541 14.595C9.55216 14.8872 9.57926 15.3444 9.33539 15.6666L9.2541 15.7589C8.95604 16.0511 8.48963 16.0777 8.16096 15.8386L8.06679 15.7589L0.745899 8.58198C0.44784 8.28978 0.420743 7.83254 0.66461 7.51033L0.745899 7.41802L8.06679 0.241064C8.39466 -0.0803548 8.92624 -0.0803548 9.2541 0.241064Z" fill="black" /></svg>',
    nextArrow: '<button type="button" class="slick-next"><svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.745899 15.7589C0.44784 15.4667 0.420743 15.0095 0.66461 14.6873L0.745899 14.595L7.47342 8L0.7459 1.40503C0.447841 1.11283 0.420744 0.655582 0.664611 0.333374L0.745901 0.241063C1.04396 -0.0511368 1.51037 -0.0776985 1.83904 0.161373L1.93321 0.241063L9.2541 7.41802C9.55216 7.71022 9.57926 8.16746 9.33539 8.48967L9.2541 8.58198L1.93321 15.7589C1.60534 16.0804 1.07376 16.0804 0.745899 15.7589Z" fill="black"/></svg>',
    responsive: [
      {
        breakpoint: 656,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
    ]
  });
  $('.partners-slider__inner').slick({
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: '<button type="button" class="slick-prev"><svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.2541 0.241064C9.55216 0.533264 9.57926 0.990508 9.33539 1.31272L9.2541 1.40503L2.52658 8L9.2541 14.595C9.55216 14.8872 9.57926 15.3444 9.33539 15.6666L9.2541 15.7589C8.95604 16.0511 8.48963 16.0777 8.16096 15.8386L8.06679 15.7589L0.745899 8.58198C0.44784 8.28978 0.420743 7.83254 0.66461 7.51033L0.745899 7.41802L8.06679 0.241064C8.39466 -0.0803548 8.92624 -0.0803548 9.2541 0.241064Z" fill="black" /></svg>',
    nextArrow: '<button type="button" class="slick-next"><svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.745899 15.7589C0.44784 15.4667 0.420743 15.0095 0.66461 14.6873L0.745899 14.595L7.47342 8L0.7459 1.40503C0.447841 1.11283 0.420744 0.655582 0.664611 0.333374L0.745901 0.241063C1.04396 -0.0511368 1.51037 -0.0776985 1.83904 0.161373L1.93321 0.241063L9.2541 7.41802C9.55216 7.71022 9.57926 8.16746 9.33539 8.48967L9.2541 8.58198L1.93321 15.7589C1.60534 16.0804 1.07376 16.0804 0.745899 15.7589Z" fill="black"/></svg>',
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 577,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 430,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
    ]
  });


  const accordion = document.getElementsByClassName('accordion__inner');

  for (let i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener('click', function () {
      this.classList.toggle('active');
    });
  }

  window.addEventListener('scroll', function () {
    const header = document.querySelector('.header');
    if (window.scrollY > 0) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

});
