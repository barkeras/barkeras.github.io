(function($) {
  "use strict"; // Start of use strict

  // Toggle the side navigation
  $("#sidebarToggle, #sidebarToggleTop").on('click', function(e) {
    $("body").toggleClass("sidebar-toggled");
    $(".sidebar").toggleClass("toggled");
    if ($(".sidebar").hasClass("toggled")) {
      $('.sidebar .collapse').collapse('hide');
    };
  });

  // Close any open menu accordions when window is resized below 768px
  $(window).resize(function() {
    if ($(window).width() < 768) {
      $('.sidebar .collapse').collapse('hide');
    };
  });

  // Prevent the content wrapper from scrolling when the fixed side navigation hovered over
  $('body.fixed-nav .sidebar').on('mousewheel DOMMouseScroll wheel', function(e) {
    if ($(window).width() > 768) {
      var e0 = e.originalEvent,
        delta = e0.wheelDelta || -e0.detail;
      this.scrollTop += (delta < 0 ? 1 : -1) * 30;
      e.preventDefault();
    }
  });

  // Scroll to top button appear
  $(document).on('scroll', function() {
    var scrollDistance = $(this).scrollTop();
    if (scrollDistance > 100) {
      $('.scroll-to-top').fadeIn();
    } else {
      $('.scroll-to-top').fadeOut();
    }
  });

  // Smooth scrolling using jQuery easing
  $(document).on('click', 'a.scroll-to-top', function(e) {
    var $anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: ($($anchor.attr('href')).offset().top)
    }, 1000, 'easeInOutExpo');
    e.preventDefault();
  });

  $('#billTotalInput').on('change', function(e) {
    calculateTip();
  });

  $('#minTipInput').on('change', function(e) {
    calculateTip();
  })

  function calculateTip() {
    let billTotal = $('#billTotalInput')[0].value;
    let minTipPercent = $('#minTipInput')[0].value;
    console.log('made to calculate tip', billTotal, minTipPercent);

    if(billTotal !== '' && minTipPercent !== '') {
      let finalBillTotal = Math.ceil(Number(billTotal) + Number(billTotal*(minTipPercent/100)));
      let finalTipAmount = Number(Number(finalBillTotal) - Number(billTotal)).toFixed(2);
      let finalTipPercent = (finalTipAmount/billTotal)*100;

      $('#finalTipAmount')[0].innerText = finalTipAmount;
      $('#finalTipPercent')[0].innerText = finalTipPercent;
      $('#finalBillAmount')[0].innerText = finalBillTotal;
    }
  }


})(jQuery); // End of use strict

(function(){
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker
     .register('/service-worker.js')
     .then(function() { 
        console.log('Service Worker Registered'); 
      });
  }    
})()

