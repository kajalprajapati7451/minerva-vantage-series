AOS.init({ duration: 900, once: true });

    // Swiper for Amenities & Gallery
    new Swiper('.amenitySwiper', {
      slidesPerView: 1, spaceBetween: 20, loop: true,
      autoplay: { delay: 3500, disableOnInteraction: false },
      pagination: { el: '.swiper-pagination', clickable: true },
      breakpoints: { 640: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }
    });
    new Swiper('.gallerySwiper', {
      slidesPerView: 1, spaceBetween: 20, loop: true,
      navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
      pagination: { el: '.swiper-pagination' },
      breakpoints: { 640: { slidesPerView: 2 }, 1024: { slidesPerView: 2.5 } }
    });

    // STARTING POPUP with cross and link
    const startPopup = document.getElementById('startPopup');
    document.getElementById('closeStartPopupCross').addEventListener('click', () => startPopup.style.display = 'none');
    document.getElementById('closeStartPopupLink').addEventListener('click', (e) => { e.preventDefault(); startPopup.style.display = 'none'; });
    document.getElementById('startPopupForm').addEventListener('submit', (e) => { e.preventDefault(); alert('Thank you! Your exclusive portfolio will be emailed.'); startPopup.style.display = 'none'; });

    // AI CHATBOT TOGGLE with symbol
    const chatbot = document.getElementById('aiChatbot');
    const chatToggle = document.getElementById('chatToggleIcon');

    chatToggle.addEventListener('click', function () {
      chatbot.classList.toggle('show-chat');
    });

    document.getElementById('chatCloseBtn').addEventListener('click', function () {
      chatbot.classList.remove('show-chat');
    });

    // Chat send functionality
    const chatSendBtn = document.getElementById('chatSendBtn');
    const chatInput = document.getElementById('chatInput');
    const chatMessageDisplay = document.getElementById('chatMessageDisplay');

    chatSendBtn.addEventListener('click', function () {
      let userMsg = chatInput.value.trim();
      if (userMsg) {
        chatMessageDisplay.innerHTML = `<i class="fas fa-quote-left gold-text me-1"></i> You: "${userMsg}"<br>Pooja: Thank you! Our team will assist shortly.`;
        chatInput.value = '';
      } else {
        alert('Please type a message.');
      }
    });

    // GENERIC POPUP function
    const popup = document.getElementById('genericPopup');
    const popupTitle = document.getElementById('popupTitle');
    const popupDesc = document.getElementById('popupDesc');
    function showPopup(title, desc) {
      popupTitle.innerText = title;
      popupDesc.innerText = desc;
      popup.style.display = 'flex';
    }

    // All download triggers (fixed duplicate IDs and added missing offcanvas handler)
    document.getElementById('brochureBtnDesktop')?.addEventListener('click', (e) => { e.preventDefault(); showPopup('Download Brochure', 'Vantage series brochure with floor plans & pricing.'); });
    document.getElementById('brochureBtnOffcanvas')?.addEventListener('click', (e) => { e.preventDefault(); showPopup('Download Brochure', 'Vantage series brochure with floor plans & pricing.'); });
    document.getElementById('aboutBrochureBtn')?.addEventListener('click', (e) => { e.preventDefault(); showPopup('Download Brochure', 'Complete Minerva Vantage brochure.'); });
    document.getElementById('costSheetHeroBtn')?.addEventListener('click', (e) => { e.preventDefault(); showPopup('Cost Sheet', 'Detailed payment plan, taxes & extra charges.'); });
    document.getElementById('costSheetBtn')?.addEventListener('click', (e) => { e.preventDefault(); showPopup('Cost Sheet', 'Detailed payment plan, taxes & extra charges.'); });
    document.getElementById('priceSheetBtn')?.addEventListener('click', (e) => { e.preventDefault(); showPopup('Price Sheet', '3.5 BHK ₹12.99 Cr* | 4 BHK ₹13.49 Cr* onwards.'); });
    document.querySelectorAll('.floorPlanBtn').forEach(btn => { btn.addEventListener('click', (e) => { e.preventDefault(); showPopup('Floor Plan', 'Download ' + btn.dataset.plan + ' floor plan.'); }); });
    document.getElementById('masterPlanBtn')?.addEventListener('click', (e) => { e.preventDefault(); showPopup('Master Plan', 'Vantage series master plan layout.'); });
    document.getElementById('downloadAmenitiesBtn')?.addEventListener('click', (e) => { e.preventDefault(); showPopup('Amenities', 'Complete list of 40+ luxury amenities.'); });
    document.getElementById('downloadGalleryBtn')?.addEventListener('click', (e) => { e.preventDefault(); showPopup('Gallery', 'High-resolution images of Minerva.'); });
    document.getElementById('bookViewBtn')?.addEventListener('click', (e) => { e.preventDefault(); showPopup('Book Private Viewing', 'Schedule an exclusive site visit.'); });

    // Contact form alert
    let recaptchaValidated = false;
    
    // reCAPTCHA callbacks
    function onRecaptchaSuccess(token) {
      recaptchaValidated = true;
      document.getElementById('recaptchaError').classList.add('d-none');
    }
    
    function onRecaptchaExpired() {
      recaptchaValidated = false;
      document.getElementById('recaptchaError').classList.remove('d-none');
    }
    
    document.getElementById('contactForm')?.addEventListener('submit', (e) => { 
      e.preventDefault();
      
      // Check if reCAPTCHA is validated
      if (!recaptchaValidated) {
        document.getElementById('recaptchaError').classList.remove('d-none');
        alert('Please verify the reCAPTCHA');
        return;
      }
      
      // Get form values
      const name = document.getElementById('contactName')?.value.trim();
      const email = document.getElementById('contactEmail')?.value.trim();
      const phone = document.getElementById('contactPhone')?.value.trim();
      const message = document.getElementById('contactMessage')?.value.trim();
      
      // Validate required fields
      if (!name || !email || !phone) {
        alert('Please fill in all required fields');
        return;
      }
      
      // Validate email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        alert('Please enter a valid email address');
        return;
      }
      
      // Validate phone format
      const phoneRegex = /^[0-9\s\-\+\(\)]+$/;
      if (!phoneRegex.test(phone) || phone.length < 10) {
        alert('Please enter a valid phone number');
        return;
      }
      
      alert('Thank you for your inquiry! Our team will contact you within 30 minutes.');
      document.getElementById('contactForm').reset();
      recaptchaValidated = false;
      
      // Reset reCAPTCHA
      if (typeof grecaptcha !== 'undefined') {
        grecaptcha.reset();
      }
    });
    document.getElementById('genericForm')?.addEventListener('submit', (e) => { e.preventDefault(); window.open('IMAGES/Opp Doc.pdf', '_blank'); popup.style.display = 'none'; });
     // Hero Slider
    new Swiper('.hero-swiper', {
      slidesPerView: 1, loop: true, autoplay: { delay: 5000 },
      pagination: { el: '.swiper-pagination', clickable: true },
      navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
      effect: 'fade'
    });

    // Top to Bottom
    document.getElementById('topBottomBtn').addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    
    // Popup close
    document.getElementById('closeStartPopupCross').onclick = () => {
      document.getElementById('startPopup').style.display = 'none';
    };
    document.getElementById('closeStartPopupLink').onclick = (e) => {
      e.preventDefault();
      document.getElementById('startPopup').style.display = 'none';
    };
    document.getElementById('startPopupForm').onsubmit = (e) => {
      e.preventDefault();
      alert('Thank you! Your exclusive portfolio will be emailed.');
      document.getElementById('startPopup').style.display = 'none';
    };
    document.getElementById('bookingForm').onsubmit = (e) => {
      e.preventDefault();
      alert('Thank you for registering! Our team will contact you.');
    };

    // Show popup
    window.onload = () => {
      setTimeout(() => {
        document.getElementById('bookingPopup').style.display = 'block';
      }, 1500);
    };
