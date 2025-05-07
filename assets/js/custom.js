

$('.mobile-package-wrapper, .mobile-work-wrapper, .mobile-precense-box-wrapper').slick({
  dots: false,
  arrows:true,
  infinite: true,
  pauseOnFocus:false,
  pauseOnHover:false,
  speed: 1000,
  // autoplay:true,
  // autoplaySpeed: 3200,
  slidesToShow: 1,
  slidesToScroll: 1,
  centerMode:true,
  centerPadding:"90px",
  prevArrow: '<img src="./assets/img/left-arrow.webp" class="img-fluid left-arrow" loading="lazy"/>',
  nextArrow: '<img src="./assets/img/right-arrow.webp" class="img-fluid right-arrow" loading="lazy"/>',
  responsive: [
    {
      breakpoint:575,
      settings:{
        centerPadding:"30px",
      }
    }]
});


const data = [
  {
      name: 'Sophia M',
      packageName: 'Basic Boost',
      time: '4 hours ago'
  },
  {
      name: 'Daniel K.',
      packageName: 'Ultimate Brand Dominance',
      time: '2 days ago'
  },
  {
      name: 'Rachel A.',
      packageName: 'Growth Accelerator',
      time: '1 week ago'
  },
  {
      name: 'James T.',
      packageName: 'Premium Influence',
      time: '3 hours ago'
  },
  {
      name: 'Lily P.',
      packageName: 'Ultimate Brand Dominance',
      time: '6 days ago'
  },
  {
      name: 'Marcus R.',
      packageName: 'Basic Boost',
      time: '1 day ago'
  },
  {
      name: 'Emily J.',
      packageName: 'Growth Accelerator',
      time: '2 hours ago'
  },
  {
      name: 'Zayn C.',
      packageName: 'Premium Influence',
      time: '5 days ago'
  },
  {
      name: 'Olivia W.',
      packageName: 'Ultimate Brand Dominance',
      time: '1 week ago'
  },
  {
      name: 'Nathan L.',
      packageName: 'Basic Boost',
      time: '3 days ago'
  },
  {
      name: 'Chloe S.',
      packageName: 'Growth Accelerator',
      time: '4 days ago'
  },
  {
      name: 'Ethan B.',
      packageName: 'Premium Influence',
      time: '9 hours ago'
  },
  {
      name: 'Maya D.',
      packageName: 'Ultimate Brand Dominance',
      time: '2 weeks ago'
  },
  {
      name: 'Leo G.',
      packageName: 'Basic Boost',
      time: '5 hours ago'
  },
  {
      name: 'Isabella T.',
      packageName: 'Growth Accelerator',
      time: '2 days ago'
  },
]


const alertBox = document.querySelector(".bi-alertbox");

const alertName = document.getElementById("alert-name");
const alertPackage = document.getElementById("alert-package");
const alertHour = document.getElementById("alert-hour");


alertBox.style.transition = "opacity 0.5s ease";
alertBox.style.opacity = 1;

function showAlertCycle() {
  const random = data[Math.floor(Math.random() * data.length)];

  alertName.textContent = random.name;
  alertPackage.textContent = random.packageName;
  alertHour.textContent = random.time;

  alertBox.style.opacity = 1;

  setTimeout(() => {
    alertBox.style.opacity = 0;

    // Wait 3 seconds, then show a new alert
    setTimeout(showAlertCycle, 8000);
  }, 4000); // Visible for 4 seconds
}

// Start the loop
showAlertCycle();



  $(function() {
    var showAfter    = 100,   // px scrolled before showing button
        scrollSpeed  = 800,   // animation duration in ms
        fadeDuration = 300,   // fade in/out duration
        $btn         = $('#back-to-top');
    
    // ensure start hidden
    $btn.css('opacity', 0);
  
    $(window).on('scroll', function() {
      if ($(this).scrollTop() > showAfter) {
        $btn.stop().fadeTo(fadeDuration, 1);
      } else {
        $btn.stop().fadeTo(fadeDuration, 0);
      }
    });
  
    $btn.on('click', function(e) {
      e.preventDefault();
      $('html, body').animate({ scrollTop: 0 }, scrollSpeed);
    });
  });
  
  

  (function () {
    const second = 1000,
          minute = second * 60,
          hour = minute * 60,
          day = hour * 24;
  
    //I'm adding this section so I don't have to keep updating this pen every year :-)
    //remove this if you don't need it
    let today = new Date(),
        dd = String(today.getDate()).padStart(2, "0"),
        mm = String(today.getMonth() + 1).padStart(2, "0"),
        yyyy = today.getFullYear(),
        nextYear = yyyy + 1,
        dayMonth = "09/30/",
        birthday = dayMonth + yyyy;
    
    today = mm + "/" + dd + "/" + yyyy;
    if (today > birthday) {
      birthday = dayMonth + nextYear;
    }
    //end
    
    const countDown = new Date(birthday).getTime(),
        x = setInterval(function() {    
  
          const now = new Date().getTime(),
                distance = countDown - now;
  
            document.getElementById("days").innerText = Math.floor(distance / (day)),
            document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
            document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
            document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);
  
          //do something later when date is reached
          if (distance < 0) {
            document.getElementById("headline").innerText = "It's my birthday!";
            document.getElementById("countdown").style.display = "none";
            document.getElementById("content").style.display = "block";
            clearInterval(x);
          }
          //seconds
        }, 0)
    }());