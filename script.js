document.addEventListener('DOMContentLoaded', () => {
  // ==========================================
  // DATA DEFINTIONS (54 Photos, 8 Videos)
  // ==========================================
  
  const PHOTOS = [
    { src: 'public/photo_2026-06-01_10-16-31.jpg', title: 'First Day Vibes', category: 'campus', year: '2023' },
    { src: 'public/photo_2026-06-01_10-16-32.jpg', title: 'Classroom Laughter', category: 'fun', year: '2024' },
    { src: 'public/photo_2026-06-01_10-16-33.jpg', title: 'Group Assignment Hustle', category: 'group', year: '2023' },
    { src: 'public/photo_2026-06-01_10-16-34.jpg', title: 'Lab Session Shenanigans', category: 'fun', year: '2024' },
    { src: 'public/photo_2026-06-01_10-16-35.jpg', title: 'College Corridors', category: 'campus', year: '2023' },
    { src: 'public/photo_2026-06-01_10-16-36.jpg', title: 'Lunch Break Crew', category: 'group', year: '2024' },
    { src: 'public/photo_2026-06-01_10-16-37.jpg', title: 'Exam Prep Panic', category: 'fun', year: '2025' },
    { src: 'public/photo_2026-06-01_10-16-38.jpg', title: 'Traditional Day Colors', category: 'group', year: '2025' },
    { src: 'public/photo_2026-06-01_10-16-39.jpg', title: 'Coding Marathon', category: 'campus', year: '2024' },
    { src: 'public/photo_2026-06-01_10-16-39 (2).jpg', title: 'Late Night Discussions', category: 'fun', year: '2024' },
    { src: 'public/photo_2026-06-01_10-16-40.jpg', title: 'Rainy Campus Walks', category: 'campus', year: '2023' },
    { src: 'public/photo_2026-06-01_10-16-41.jpg', title: 'Presentation Day jitters', category: 'campus', year: '2025' },
    { src: 'public/photo_2026-06-01_10-16-42.jpg', title: 'Canteen Adda', category: 'fun', year: '2024' },
    { src: 'public/photo_2026-06-01_10-16-44.jpg', title: 'Project Exhibition', category: 'group', year: '2025' },
    { src: 'public/photo_2026-06-01_10-16-45.jpg', title: 'Backbenchers Club', category: 'fun', year: '2024' },
    { src: 'public/photo_2026-06-01_10-16-46.jpg', title: 'Sports Week Cheers', category: 'group', year: '2024' },
    { src: 'public/photo_2026-06-01_10-16-46 (2).jpg', title: 'Annual Gathering', category: 'group', year: '2025' },
    { src: 'public/photo_2026-06-01_10-16-47.jpg', title: 'Farewell Practice', category: 'group', year: '2026' },
    { src: 'public/photo_2026-06-01_10-16-48.jpg', title: 'BCA United', category: 'group', year: '2025' },
    { src: 'public/photo_2026-06-01_10-16-49.jpg', title: 'Seminar Hall Memories', category: 'campus', year: '2024' },
    { src: 'public/photo_2026-06-01_10-16-50.jpg', title: 'Tea Break Discussions', category: 'fun', year: '2024' },
    { src: 'public/photo_2026-06-01_10-16-51.jpg', title: 'Behind the Scenes', category: 'fun', year: '2025' },
    { src: 'public/photo_2026-06-01_10-16-52.jpg', title: 'Main Campus Building', category: 'campus', year: '2023' },
    { src: 'public/photo_2026-06-01_10-16-52 (2).jpg', title: 'Silly Face Contest', category: 'fun', year: '2024' },
    { src: 'public/photo_2026-06-01_10-16-53.jpg', title: 'Library Study Sessions', category: 'campus', year: '2024' },
    { src: 'public/photo_2026-06-01_10-16-55.jpg', title: 'Celebrating Success', category: 'group', year: '2025' },
    { src: 'public/photo_2026-06-01_10-16-56.jpg', title: 'Industrial Visit', category: 'group', year: '2025' },
    { src: 'public/photo_2026-06-01_10-16-57.jpg', title: 'The Tripper Gang', category: 'group', year: '2024' },
    { src: 'public/photo_2026-06-01_10-16-57 (2).jpg', title: 'Group Selfie Magic', category: 'group', year: '2025' },
    { src: 'public/photo_2026-06-01_10-16-58.jpg', title: 'Happy Moments', category: 'fun', year: '2024' },
    { src: 'public/photo_2026-06-01_10-17-00.jpg', title: 'Farewell Preps', category: 'campus', year: '2026' },
    { src: 'public/photo_2026-06-01_10-17-01.jpg', title: 'Staircase Group Pic', category: 'group', year: '2024' },
    { src: 'public/photo_2026-06-01_10-17-02.jpg', title: 'Festival Celebration', category: 'group', year: '2025' },
    { src: 'public/photo_2026-06-01_10-17-02 (2).jpg', title: 'Prank Wars Victory', category: 'fun', year: '2024' },
    { src: 'public/photo_2026-06-01_10-17-03.jpg', title: 'College Ground Fun', category: 'campus', year: '2024' },
    { src: 'public/photo_2026-06-01_10-17-04.jpg', title: 'Waiting for Lectures', category: 'fun', year: '2023' },
    { src: 'public/photo_2026-06-01_10-17-05.jpg', title: 'BCA Class Photo', category: 'group', year: '2023' },
    { src: 'public/photo_2026-06-01_10-17-06.jpg', title: 'Freshers Party', category: 'group', year: '2023' },
    { src: 'public/photo_2026-06-01_10-17-07.jpg', title: 'The Core Team', category: 'group', year: '2025' },
    { src: 'public/photo_2026-06-01_10-17-07 (2).jpg', title: 'Vibrant Raisoni', category: 'campus', year: '2024' },
    { src: 'public/photo_2026-06-01_10-17-08.jpg', title: 'Last Lecture Ever', category: 'group', year: '2026' },
    { src: 'public/photo_2026-06-01_10-17-09.jpg', title: 'Graduation Cap Toss', category: 'group', year: '2026' },
    { src: 'public/photo_2026-06-01_10-17-10.jpg', title: 'Signing Shirts', category: 'fun', year: '2026' },
    { src: 'public/photo_2026-06-01_10-17-11.jpg', title: 'Final Exams Done', category: 'fun', year: '2026' },
    { src: 'public/photo_2026-06-01_10-17-12.jpg', title: 'Farewell Speeches', category: 'campus', year: '2026' },
    { src: 'public/photo_2026-06-01_10-17-13.jpg', title: 'Memories Captured', category: 'fun', year: '2025' },
    { src: 'public/photo_2026-06-01_10-17-14.jpg', title: 'Batch Day Celebrations', category: 'group', year: '2026' },
    { src: 'public/photo_2026-06-01_10-17-14 (2).jpg', title: 'Unbreakable Bonds', category: 'group', year: '2025' },
    { src: 'public/photo_2026-06-01_10-17-15.jpg', title: 'Friends for Life', category: 'fun', year: '2025' },
    { src: 'public/photo_2026-06-01_10-17-16.jpg', title: 'Farewell Gala Night', category: 'group', year: '2026' },
    { src: 'public/photo_2026-06-01_10-17-17.jpg', title: 'The Last Selfie', category: 'fun', year: '2026' },
    { src: 'public/photo_2026-06-01_10-17-18.jpg', title: 'Looking Back Proudly', category: 'campus', year: '2026' },
    { src: 'public/photo_2026-06-01_10-17-18 (2).jpg', title: 'Smiles & Tears', category: 'fun', year: '2026' },
    { src: 'public/photo_2026-06-01_10-17-19.jpg', title: 'BCA Jalgoan Alumni', category: 'group', year: '2026' }
  ];

  const VIDEOS = [
    { src: 'public/video_2026-06-01_10-16-14.mp4', title: 'Farewell Tears & Cheers', year: '2026' },
    { src: 'public/video_2026-06-01_10-16-24.mp4', title: 'Canteen Dance Off', year: '2024' },
    { src: 'public/video_2026-06-01_10-16-27.mp4', title: 'Gathering Flashmob', year: '2025' },
    { src: 'public/video_2026-06-01_10-16-34.mp4', title: 'Sports Week Highlights', year: '2024' },
    { src: 'public/video_2026-06-01_10-16-42.mp4', title: 'Birthday Prank', year: '2024' },
    { src: 'public/video_2026-06-01_10-16-43.mp4', title: 'Industrial Visit Vlog', year: '2025' },
    { src: 'public/video_2026-06-01_10-16-54.mp4', title: 'Last Day Countdown', year: '2026' },
    { src: 'public/video_2026-06-01_10-16-59.mp4', title: 'BCA Journey Reel', year: '2026' }
  ];

  // Helper to extract click date/time from filename
  const getClickDate = (src) => {
    const match = src.match(/(?:photo|video)_(\d{4}-\d{2}-\d{2})_(\d{2})-(\d{2})-(\d{2})/);
    if (match) {
      const [_, dateStr, hh, mm, ss] = match;
      const date = new Date(`${dateStr}T${hh}:${mm}:${ss}`);
      return date.toLocaleString('en-US', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
      });
    }
    return '';
  };

  // ==========================================
  // CUSTOM CURSOR LERP ANIMATION (desktop only)
  // ==========================================
  const cursor = document.getElementById('cursor');
  const follower = document.getElementById('cursorFollower');
  const isTouchDevice = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0);

  const lerp = (start, end, amt) => (1 - amt) * start + amt * end;

  if (!isTouchDevice) {
    let mouseX = 0, mouseY = 0;
    let cursorX = 0, cursorY = 0;
    let followerX = 0, followerY = 0;

    window.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    }, { passive: true });

    const animateCursor = () => {
      cursorX = lerp(cursorX, mouseX, 0.2);
      cursorY = lerp(cursorY, mouseY, 0.2);
      cursor.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0) translate(-50%, -50%)`;
      followerX = lerp(followerX, mouseX, 0.1);
      followerY = lerp(followerY, mouseY, 0.1);
      follower.style.transform = `translate3d(${followerX}px, ${followerY}px, 0) translate(-50%, -50%)`;
      requestAnimationFrame(animateCursor);
    };
    animateCursor();
  }

  // Cursor hover triggers — called ONCE after all DOM is ready
  const addCursorHoverTriggers = () => {
    if (isTouchDevice) return; // skip entirely on mobile
    document.querySelectorAll('a, button, .preview-card, .showcase-item, .gallery-card, .video-card, .mosaic-item, .carousel-card, .filter-btn').forEach(item => {
      item.addEventListener('mouseenter', () => { cursor.classList.add('hovered'); follower.classList.add('hovered'); });
      item.addEventListener('mouseleave', () => { cursor.classList.remove('hovered'); follower.classList.remove('hovered'); });
    });
  };
  
  // ==========================================
  // PRELOADER & ASSETS LOADING
  // ==========================================
  const loader = document.getElementById('loader');
  const loaderBar = document.getElementById('loaderBar');
  const loaderText = document.getElementById('loaderText');
  
  // We'll load the first 6 photos completely, and let the rest load lazily. No videos preloaded.
  const criticalAssets = PHOTOS.slice(0, 6).map(p => p.src);
  
  let loadedCount = 0;
  const totalCritical = criticalAssets.length;

  const updateLoaderProgress = () => {
    loadedCount++;
    const progress = Math.min((loadedCount / totalCritical) * 100, 100);
    loaderBar.style.width = `${progress}%`;
    loaderText.innerText = `Loading Memories (${Math.round(progress)}%)`;
    
    if (loadedCount >= totalCritical) {
      setTimeout(() => {
        loader.classList.add('fade-out');
        document.body.style.overflow = 'visible';
        // Initialize animations that depend on sizes
        initCarousel();
      }, 600);
    }
  };

  if (totalCritical === 0) {
    loader.classList.add('fade-out');
  } else {
    document.body.style.overflow = 'hidden';
    criticalAssets.forEach(src => {
      const img = new Image();
      img.src = src;
      img.onload = updateLoaderProgress;
      img.onerror = updateLoaderProgress;
    });
  }

  // ==========================================
  // SCROLLSPY & STICKY NAV (OPTIMIZED)
  // ==========================================
  const nav = document.getElementById('nav');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section');

  // ---- Hamburger Mobile Menu ----
  const hamburger = document.getElementById('navHamburger');
  const mobileMenu = document.getElementById('mobileMenu');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  const closeMobileMenu = () => {
    hamburger.classList.remove('open');
    mobileMenu.classList.remove('open');
    document.body.style.overflow = 'visible';
  };

  hamburger.addEventListener('click', () => {
    const isOpen = hamburger.classList.toggle('open');
    mobileMenu.classList.toggle('open', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : 'visible';
  });

  mobileNavLinks.forEach(link => {
    link.addEventListener('click', () => {
      closeMobileMenu();
    });
  });

  let ticking = false;
  const updateNav = () => {
    const scrollPos = window.scrollY;
    if (scrollPos > 100) {
      nav.style.padding = '0.8rem 4%';
      nav.style.backgroundColor = 'rgba(5, 5, 9, 0.95)';
    } else {
      nav.style.padding = '1.5rem 4%';
      nav.style.backgroundColor = 'rgba(5, 5, 9, 0.7)';
    }
    ticking = false;
  };

  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(updateNav);
      ticking = true;
    }
  });

  const observerOptions = {
    root: null,
    rootMargin: '-20% 0px -60% 0px',
    threshold: 0
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('data-section') === id) {
            link.classList.add('active');
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach(section => observer.observe(section));

  // ==========================================
  // INJECT DYNAMIC PHOTO GALLERY MASONRY
  // ==========================================
  const masonry = document.getElementById('galleryMasonry');
  
  const generateGallery = (filterClass = 'all') => {
    masonry.innerHTML = '';
    
    PHOTOS.forEach((photo, index) => {
      if (filterClass !== 'all' && photo.category !== filterClass) return;
      
      const card = document.createElement('div');
      card.className = 'gallery-card';
      card.setAttribute('data-category', photo.category);
      card.setAttribute('data-index', index);
      
      card.innerHTML = `
        <img src="${photo.src}" alt="${photo.title}" loading="lazy" />
        <div class="gallery-card-overlay">
          <span class="gallery-card-tag">${photo.category} · ${getClickDate(photo.src)}</span>
          <h4 class="gallery-card-title">${photo.title}</h4>
        </div>
      `;
      
      // Lightbox open trigger
      card.addEventListener('click', () => {
        openLightbox(index);
      });
      
      masonry.appendChild(card);
    });
  };

  generateGallery('all');

  // Filter Buttons
  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.getAttribute('data-filter');
      
      // Smooth filter transition
      masonry.style.opacity = '0';
      masonry.style.transform = 'translateY(15px)';
      
      setTimeout(() => {
        generateGallery(filter);
        masonry.style.opacity = '1';
        masonry.style.transform = 'translateY(0)';
      }, 300);
    });
  });

  // ==========================================
  // VIDEO THUMBNAIL CAPTURE (Canvas from video frame)
  // ==========================================
  const captureVideoThumbnail = (src) => new Promise((resolve) => {
    const vid = document.createElement('video');
    vid.preload = 'metadata';
    vid.muted = true;
    vid.playsInline = true;
    vid.crossOrigin = 'anonymous';
    let done = false;
    const finish = () => { if (!done) { done = true; vid.src = ''; resolve(null); } };
    vid.addEventListener('loadedmetadata', () => {
      vid.currentTime = Math.min(1.5, vid.duration * 0.08);
    });
    vid.addEventListener('seeked', () => {
      if (done) return;
      done = true;
      try {
        const canvas = document.createElement('canvas');
        canvas.width = vid.videoWidth || 1280;
        canvas.height = vid.videoHeight || 720;
        canvas.getContext('2d').drawImage(vid, 0, 0, canvas.width, canvas.height);
        resolve(canvas.toDataURL('image/jpeg', 0.95));
      } catch (e) { resolve(null); }
      vid.src = '';
    });
    vid.addEventListener('error', finish);
    setTimeout(finish, 8000);
    vid.src = src;
  });

  // ==========================================
  // CUSTOM VIDEO MODAL PLAYER
  // ==========================================
  const fmtTime = (s) => {
    if (!isFinite(s)) return '0:00';
    const m = Math.floor(s / 60);
    const sec = Math.floor(s % 60).toString().padStart(2, '0');
    return `${m}:${sec}`;
  };

  let vmVideo = null;

  const closeVideoModal = () => {
    const modal = document.getElementById('videoModal');
    if (!modal) return;
    if (vmVideo) { vmVideo.pause(); vmVideo.src = ''; vmVideo.load(); vmVideo = null; }
    if (document.fullscreenElement) document.exitFullscreen().catch(() => {});
    if (document.webkitFullscreenElement) document.webkitExitFullscreen && document.webkitExitFullscreen();
    modal.classList.remove('vm-open');
    setTimeout(() => { modal.remove(); document.body.style.overflow = 'visible'; }, 380);
  };

  const openVideoModal = (src, title, date) => {
    closeVideoModal();
    const modal = document.createElement('div');
    modal.className = 'video-modal';
    modal.id = 'videoModal';
    modal.innerHTML = `
      <div class="vm-backdrop"></div>
      <div class="vm-container">
        <div class="vm-header">
          <div class="vm-title-wrap">
            <span class="vm-date">${date}</span>
            <h3 class="vm-title">${title}</h3>
          </div>
          <button class="vm-close-btn" id="vmClose" aria-label="Close video">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M18 6L6 18M6 6l12 12"/></svg>
          </button>
        </div>
        <div class="vm-video-wrap">
          <video id="vmVid" playsinline preload="auto" src="${src}"></video>
          <div class="vm-center-play" id="vmCenterPlay">
            <svg width="40" height="40" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" fill="white"/></svg>
          </div>
        </div>
        <div class="vm-controls">
          <div class="vm-progress-wrap" id="vmProgressWrap">
            <div class="vm-progress-bg">
              <div class="vm-progress-fill" id="vmFill"></div>
            </div>
            <div class="vm-progress-thumb" id="vmThumb"></div>
          </div>
          <div class="vm-ctrl-row">
            <div class="vm-ctrls-left">
              <button class="vm-ctrl-btn" id="vmPlayPause" aria-label="Play/Pause">
                <svg class="ic-pause" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/></svg>
                <svg class="ic-play" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" style="display:none"><path d="M8 5v14l11-7z"/></svg>
              </button>
              <button class="vm-ctrl-btn" id="vmMute" aria-label="Mute">
                <svg class="ic-unmuted" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 5L6 9H2v6h4l5 4V5zM19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"/></svg>
                <svg class="ic-muted" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="display:none"><path d="M11 5L6 9H2v6h4l5 4V5zM23 9l-6 6M17 9l6 6"/></svg>
              </button>
              <span class="vm-time" id="vmTime">0:00 / 0:00</span>
            </div>
            <div class="vm-ctrls-right">
              <button class="vm-ctrl-btn" id="vmFS" aria-label="Fullscreen">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"/></svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    `;
    document.body.appendChild(modal);
    document.body.style.overflow = 'hidden';
    requestAnimationFrame(() => modal.classList.add('vm-open'));

    vmVideo = modal.querySelector('#vmVid');
    const fill = modal.querySelector('#vmFill');
    const thumb = modal.querySelector('#vmThumb');
    const timeEl = modal.querySelector('#vmTime');
    const playPauseBtn = modal.querySelector('#vmPlayPause');
    const muteBtn = modal.querySelector('#vmMute');
    const fsBtn = modal.querySelector('#vmFS');
    const centerPlay = modal.querySelector('#vmCenterPlay');
    const progressWrap = modal.querySelector('#vmProgressWrap');

    const updatePlayIcon = () => {
      const paused = vmVideo.paused;
      playPauseBtn.querySelector('.ic-pause').style.display = paused ? 'none' : 'block';
      playPauseBtn.querySelector('.ic-play').style.display = paused ? 'block' : 'none';
      centerPlay.style.opacity = paused ? '1' : '0';
    };

    const updateMuteIcon = () => {
      muteBtn.querySelector('.ic-unmuted').style.display = vmVideo.muted ? 'none' : 'block';
      muteBtn.querySelector('.ic-muted').style.display = vmVideo.muted ? 'block' : 'none';
    };

    vmVideo.addEventListener('timeupdate', () => {
      if (!vmVideo.duration) return;
      const pct = (vmVideo.currentTime / vmVideo.duration) * 100;
      fill.style.width = pct + '%';
      thumb.style.left = pct + '%';
      timeEl.textContent = `${fmtTime(vmVideo.currentTime)} / ${fmtTime(vmVideo.duration)}`;
    });

    vmVideo.addEventListener('play', updatePlayIcon);
    vmVideo.addEventListener('pause', updatePlayIcon);
    vmVideo.addEventListener('volumechange', updateMuteIcon);

    vmVideo.addEventListener('canplay', () => {
      vmVideo.play().catch(() => {});
      timeEl.textContent = `0:00 / ${fmtTime(vmVideo.duration)}`;
    });

    playPauseBtn.addEventListener('click', () => {
      if (vmVideo.paused) vmVideo.play(); else vmVideo.pause();
    });

    modal.querySelector('#vmVid').addEventListener('click', () => {
      if (vmVideo.paused) vmVideo.play(); else vmVideo.pause();
    });

    muteBtn.addEventListener('click', () => { vmVideo.muted = !vmVideo.muted; });

    fsBtn.addEventListener('click', () => {
      const wrap = modal.querySelector('.vm-video-wrap');
      if (!document.fullscreenElement && !document.webkitFullscreenElement) {
        if (wrap.requestFullscreen) wrap.requestFullscreen();
        else if (wrap.webkitRequestFullscreen) wrap.webkitRequestFullscreen();
      } else {
        if (document.exitFullscreen) document.exitFullscreen();
        else if (document.webkitExitFullscreen) document.webkitExitFullscreen();
      }
    });

    // Seek on progress click/drag
    const seek = (e) => {
      const rect = progressWrap.getBoundingClientRect();
      const pct = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
      vmVideo.currentTime = pct * vmVideo.duration;
    };
    let seeking = false;
    progressWrap.addEventListener('mousedown', (e) => { seeking = true; seek(e); });
    progressWrap.addEventListener('touchstart', (e) => { seeking = true; seek(e.touches[0]); }, { passive: true });
    window.addEventListener('mousemove', (e) => { if (seeking) seek(e); });
    window.addEventListener('touchmove', (e) => { if (seeking) seek(e.touches[0]); }, { passive: true });
    window.addEventListener('mouseup', () => { seeking = false; });
    window.addEventListener('touchend', () => { seeking = false; });

    // Close button + backdrop click
    modal.querySelector('#vmClose').addEventListener('click', closeVideoModal);
    modal.querySelector('.vm-backdrop').addEventListener('click', closeVideoModal);

    // ESC key
    const onKey = (e) => { if (e.key === 'Escape') { closeVideoModal(); document.removeEventListener('keydown', onKey); } };
    document.addEventListener('keydown', onKey);

    // Fullscreen exit → pause video
    const onFsChange = () => {
      if (!document.fullscreenElement && !document.webkitFullscreenElement) {
        if (vmVideo && !vmVideo.paused) vmVideo.pause();
      }
    };
    document.addEventListener('fullscreenchange', onFsChange);
    document.addEventListener('webkitfullscreenchange', onFsChange);
  };

  // ==========================================
  // INJECT VIDEO GRID — thumbnails from canvas
  // ==========================================
  const videosGrid = document.getElementById('videosGrid');

  const generateVideos = async () => {
    videosGrid.innerHTML = '';

    for (const video of VIDEOS) {
      const card = document.createElement('div');
      card.className = 'video-card';
      const date = getClickDate(video.src);

      card.innerHTML = `
        <div class="video-container">
          <div class="video-placeholder">
            <div class="vp-thumb-wrap">
              <div class="vp-thumb-loading">
                <div class="vp-spinner"></div>
              </div>
              <img class="vp-thumb" alt="${video.title}" style="display:none;" />
            </div>
            <div class="vp-overlay-gradient"></div>
            <div class="vp-info">
              <span class="video-badge">${date}</span>
              <span class="video-card-title">${video.title}</span>
            </div>
            <button class="video-btn video-tap-play" aria-label="Play ${video.title}">
              <svg width="30" height="30" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" fill="white"/></svg>
            </button>
          </div>
        </div>
      `;

      const thumb = card.querySelector('.vp-thumb');
      const thumbLoading = card.querySelector('.vp-thumb-loading');
      const tapBtn = card.querySelector('.video-tap-play');
      const placeholder = card.querySelector('.video-placeholder');

      // Tap to open modal
      const play = () => openVideoModal(video.src, video.title, date);
      tapBtn.addEventListener('click', (e) => { e.stopPropagation(); play(); });
      placeholder.addEventListener('click', play);

      videosGrid.appendChild(card);

      // Capture thumbnail asynchronously (non-blocking)
      captureVideoThumbnail(video.src).then((dataURL) => {
        thumbLoading.style.display = 'none';
        if (dataURL) {
          thumb.src = dataURL;
          thumb.style.display = 'block';
        } else {
          // fallback gradient stays
          thumbLoading.innerHTML = '<div class="vp-thumb-icon">🎬</div>';
          thumbLoading.style.display = 'flex';
        }
      });
    }
  };

  generateVideos();

  // ==========================================
  // HORIZONTAL MOSAIC SCROLL / DRAG
  // ==========================================
  const mosaicWrap = document.getElementById('mosaicWrap');
  const mosaicTrack = document.getElementById('mosaicTrack');
  const mosaicProgress = document.getElementById('mosaicProgress');

  // Select 15 unique photos for the Memory Lane
  const mosaicPhotos = PHOTOS.filter((_, idx) => idx % 3 === 0).slice(0, 15);

  const generateMosaic = () => {
    mosaicTrack.innerHTML = '';
    
    mosaicPhotos.forEach((photo, index) => {
      const item = document.createElement('div');
      item.className = 'mosaic-item';
      item.innerHTML = `
        <img src="${photo.src}" alt="${photo.title}" loading="lazy" />
        <div class="mosaic-overlay">
          <span class="mosaic-tag">${photo.category} · ${getClickDate(photo.src)}</span>
          <h4 class="mosaic-title">${photo.title}</h4>
        </div>
      `;
      
      item.addEventListener('click', () => {
        const fullIndex = PHOTOS.findIndex(p => p.src === photo.src);
        if (fullIndex !== -1) openLightbox(fullIndex);
      });

      mosaicTrack.appendChild(item);
    });
  };

  generateMosaic();

  // Dragging interaction
  let isDown = false;
  let startX;
  let scrollLeft;
  let maxScroll = mosaicWrap.scrollWidth - mosaicWrap.clientWidth;

  window.addEventListener('resize', () => {
    maxScroll = mosaicWrap.scrollWidth - mosaicWrap.clientWidth;
  });

  setTimeout(() => {
    maxScroll = mosaicWrap.scrollWidth - mosaicWrap.clientWidth;
  }, 1000);

  mosaicWrap.addEventListener('mousedown', (e) => {
    isDown = true;
    mosaicWrap.classList.add('active');
    startX = e.pageX - mosaicWrap.offsetLeft;
    scrollLeft = mosaicWrap.scrollLeft;
  });

  mosaicWrap.addEventListener('mouseleave', () => {
    isDown = false;
    mosaicWrap.classList.remove('active');
  });

  mosaicWrap.addEventListener('mouseup', () => {
    isDown = false;
    mosaicWrap.classList.remove('active');
  });

  mosaicWrap.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - mosaicWrap.offsetLeft;
    const walk = (x - startX) * 2; // Scroll multiplier
    mosaicWrap.scrollLeft = scrollLeft - walk;
    updateMosaicProgress();
  });

  // Mouse wheel horizontal scroll conversion
  mosaicWrap.addEventListener('wheel', (e) => {
    if (e.deltaY !== 0) {
      e.preventDefault();
      mosaicWrap.scrollLeft += e.deltaY * 1.5;
      updateMosaicProgress();
    }
  });

  const updateMosaicProgress = () => {
    const progress = maxScroll > 0 ? (mosaicWrap.scrollLeft / maxScroll) * 100 : 0;
    mosaicProgress.style.width = `${progress}%`;
  };

  mosaicWrap.addEventListener('scroll', updateMosaicProgress);

  // Touch swipe support for mobile
  let touchStartX = 0;
  let touchScrollStart = 0;
  mosaicWrap.addEventListener('touchstart', (e) => {
    touchStartX = e.touches[0].clientX;
    touchScrollStart = mosaicWrap.scrollLeft;
  }, { passive: true });

  mosaicWrap.addEventListener('touchmove', (e) => {
    const dx = touchStartX - e.touches[0].clientX;
    mosaicWrap.scrollLeft = touchScrollStart + dx;
    updateMosaicProgress();
  }, { passive: true });

  // ==========================================
  // 3D CAROUSEL
  // ==========================================
  const carousel3d = document.getElementById('carousel3d');
  const carouselPrev = document.getElementById('carouselPrev');
  const carouselNext = document.getElementById('carouselNext');

  // Choose 9 gorgeous photos for the 3D rotating stage
  const carouselPhotos = PHOTOS.filter((_, idx) => idx % 5 === 0).slice(0, 9);
  let currentRotation = 0;
  const numCards = carouselPhotos.length;
  const angle = 360 / numCards;
  
  const initCarousel = () => {
    carousel3d.innerHTML = '';
    
    // Dynamically calculate radius to fit the screen size
    const screenWidth = window.innerWidth;
    let radius = 400; // default for desktop
    if (screenWidth < 768) {
      radius = 220; // smaller radius on mobile
    } else if (screenWidth < 1200) {
      radius = 320;
    }
    
    carouselPhotos.forEach((photo, index) => {
      const card = document.createElement('div');
      card.className = 'carousel-card';
      card.style.transform = `rotateY(${index * angle}deg) translateZ(${radius}px)`;
      
      card.innerHTML = `
        <img src="${photo.src}" alt="${photo.title}" />
        <div class="carousel-card-info">
          <span style="font-family: var(--font-mono); font-size: 0.7rem; color: var(--color-accent-3); display: block; margin-bottom: 0.2rem;">${getClickDate(photo.src)}</span>
          <h4 class="carousel-card-title">${photo.title}</h4>
        </div>
      `;
      
      card.addEventListener('click', () => {
        // Open this card in lightbox
        const fullIndex = PHOTOS.findIndex(p => p.src === photo.src);
        if (fullIndex !== -1) openLightbox(fullIndex);
      });
      
      carousel3d.appendChild(card);
    });
    
    addCursorHoverTriggers();
    rotateCarousel();
  };

  const rotateCarousel = () => {
    carousel3d.style.transform = `rotateY(${currentRotation}deg)`;
  };

  carouselPrev.addEventListener('click', () => {
    currentRotation += angle;
    rotateCarousel();
  });

  carouselNext.addEventListener('click', () => {
    currentRotation -= angle;
    rotateCarousel();
  });

  // Debounced resize for carousel
  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => initCarousel(), 300);
  }, { passive: true });

  // ==========================================
  // LIGHTBOX SYSTEM
  // ==========================================
  const lightbox = document.getElementById('lightbox');
  const lightboxOverlay = document.getElementById('lightboxOverlay');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxClose = document.getElementById('lightboxClose');
  const lightboxPrev = document.getElementById('lightboxPrev');
  const lightboxNext = document.getElementById('lightboxNext');
  const lightboxCounter = document.getElementById('lightboxCounter');

  let currentPhotoIndex = 0;

  const openLightbox = (index) => {
    currentPhotoIndex = index;
    updateLightboxContent();
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    lightbox.classList.remove('active');
    document.body.style.overflow = 'visible';
  };

  const updateLightboxContent = () => {
    const photo = PHOTOS[currentPhotoIndex];
    
    // Scale down image before updating source for transition feel
    lightboxImg.style.transform = 'scale(0.95)';
    lightboxImg.style.opacity = '0';
    
    setTimeout(() => {
      lightboxImg.src = photo.src;
      lightboxImg.alt = photo.title;
      lightboxCounter.innerText = `${currentPhotoIndex + 1} / ${PHOTOS.length}`;
      
      const titleElem = document.getElementById('lightboxTitle');
      const metaElem = document.getElementById('lightboxMeta');
      if (titleElem) titleElem.innerText = photo.title;
      if (metaElem) metaElem.innerText = `${photo.category.toUpperCase()} · ${getClickDate(photo.src)}`;
      
      lightboxImg.onload = () => {
        lightboxImg.style.transform = 'scale(1)';
        lightboxImg.style.opacity = '1';
      };
    }, 150);
  };

  const nextLightbox = () => {
    currentPhotoIndex = (currentPhotoIndex + 1) % PHOTOS.length;
    updateLightboxContent();
  };

  const prevLightbox = () => {
    currentPhotoIndex = (currentPhotoIndex - 1 + PHOTOS.length) % PHOTOS.length;
    updateLightboxContent();
  };

  lightboxClose.addEventListener('click', closeLightbox);
  lightboxOverlay.addEventListener('click', closeLightbox);
  lightboxNext.addEventListener('click', nextLightbox);
  lightboxPrev.addEventListener('click', prevLightbox);

  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('active')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') nextLightbox();
    if (e.key === 'ArrowLeft') prevLightbox();
  });

  // ==========================================
  // TILT EFFECT (3D ROTATION ON MOUSEMOVE)
  // ==========================================
  const applyTiltEffect = () => {
    const tiltElements = document.querySelectorAll('[data-tilt]');
    
    tiltElements.forEach(element => {
      let rect = null;
      
      element.addEventListener('mouseenter', () => {
        rect = element.getBoundingClientRect();
      });
      
      element.addEventListener('mousemove', (e) => {
        if (!rect) rect = element.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = ((y - centerY) / centerY) * -12; // tilt multiplier max 12 deg
        const rotateY = ((x - centerX) / centerX) * 12;
        
        element.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
      });
      
      element.addEventListener('mouseleave', () => {
        rect = null;
        element.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
      });
    });
  };
  
  if (!isTouchDevice) applyTiltEffect();

  // Single call for cursor hover triggers after all DOM is built
  addCursorHoverTriggers();
});
