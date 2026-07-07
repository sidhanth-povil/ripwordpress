    document.addEventListener("DOMContentLoaded", () => {
      gsap.registerPlugin(ScrollTrigger);

      // Mobile Menu
      const menuBtn = document.getElementById('mobile-menu-btn');
      const menuIcon = menuBtn.querySelector('.material-symbols-outlined');
      const mobileMenu = document.getElementById('mobile-menu');
      const mobileLinks = mobileMenu.querySelectorAll('.mobile-link');

      function toggleMobileMenu() {
        const isOpen = mobileMenu.classList.contains('opacity-100');
        if (isOpen) {
          mobileMenu.classList.remove('opacity-100', 'pointer-events-auto');
          mobileMenu.classList.add('opacity-0', 'pointer-events-none');
          menuIcon.textContent = 'menu';
          document.body.style.overflow = '';
        } else {
          mobileMenu.classList.remove('opacity-0', 'pointer-events-none');
          mobileMenu.classList.add('opacity-100', 'pointer-events-auto');
          menuIcon.textContent = 'close';
          document.body.style.overflow = 'hidden';
        }
      }

      menuBtn.addEventListener('click', toggleMobileMenu);
      mobileLinks.forEach(link => link.addEventListener('click', toggleMobileMenu));

      // GSAP Animations
      gsap.set('.gsap-el', { y: 30, autoAlpha: 0 });
      gsap.to('.gsap-el', { autoAlpha: 1, y: 0, duration: 1, stagger: 0.15, ease: "power3.out", delay: 0.2 });

      gsap.utils.toArray('.gsap-rev').forEach(target => {
        gsap.set(target, { autoAlpha: 0, y: 20 });
        gsap.to(target, { autoAlpha: 1, y: 0, duration: 1, ease: "power3.out", scrollTrigger: { trigger: target, start: "top 85%" } });
      });

      ScrollTrigger.batch(".gsap-card", {
        start: "top 85%",
        onEnter: batch => {
          gsap.set(batch, { autoAlpha: 0, y: 30 });
          gsap.to(batch, { autoAlpha: 1, y: 0, duration: 0.8, ease: "power2.out", stagger: 0.1 })
        }
      });

      ScrollTrigger.batch(".gsap-row", {
        start: "top 85%",
        onEnter: batch => {
          gsap.set(batch, { autoAlpha: 0, x: -20 });
          gsap.to(batch, { autoAlpha: 1, x: 0, duration: 0.8, ease: "power2.out", stagger: 0.2 })
        }
      });

      // Calculator Logic
      const pInput = document.getElementById('input-plugins');
      const tInput = document.getElementById('input-traffic');
      const themeInput = document.getElementById('input-theme');

      const pVal = document.getElementById('val-plugins');
      const tVal = document.getElementById('val-traffic');

      const monoTime = document.getElementById('out-mono-time');
      const monoDom = document.getElementById('out-mono-dom');
      const monoCost = document.getElementById('out-mono-cost');

      const headTime = document.getElementById('out-head-time');
      const headDom = document.getElementById('out-head-dom');
      const headCost = document.getElementById('out-head-cost');

      function calculateRot() {
        const plugins = parseInt(pInput.value);
        const traffic = parseInt(tInput.value);
        const themeMultiplier = parseFloat(themeInput.value);

        pVal.textContent = plugins;
        tVal.textContent = traffic.toLocaleString();

        const mDomVal = Math.floor((800 + (plugins * 75)) * themeMultiplier);
        const mTimeVal = (0.8 + (plugins * 0.05) * themeMultiplier + (traffic / 200000)).toFixed(1);
        const mCostVal = Math.floor(20 + (plugins * 5) + (traffic / 1000));

        const hDomVal = 450;
        const hTimeVal = (0.3 + (traffic / 2000000)).toFixed(1);
        const hCostVal = Math.floor(20 + (traffic / 5000));

        monoDom.textContent = mDomVal.toLocaleString();
        monoTime.textContent = mTimeVal + 's';
        monoCost.textContent = '$' + mCostVal.toLocaleString();

        headDom.textContent = hDomVal.toLocaleString();
        headTime.textContent = hTimeVal + 's';
        headCost.textContent = '$' + hCostVal.toLocaleString();
      }

      if (pInput) {
        [pInput, tInput, themeInput].forEach(el => el.addEventListener('input', calculateRot));
        calculateRot();
      }

      // Candle Logic
      let count = 0;
      const btn = document.getElementById('candle-btn');
      const counter = document.getElementById('candle-num');
      const row = document.getElementById('candles-row');
      const flash = document.getElementById('ignition-flash');

      async function fetchCandleCount() {
        try {
          const res = await fetch('/api/candles');
          if (res.ok) {
            const data = await res.json();
            count = data.count || 0;
            if (counter) counter.textContent = count;

            const visualMax = Math.min(count, 50);
            const currentCandles = row ? row.children.length : 0;
            for (let i = currentCandles; i < visualMax; i++) {
              addCandleToRow(false);
            }
          }
        } catch (e) {
          console.error('Failed to fetch candles', e);
        }
      }

      async function incrementCandleCount() {
        try {
          const res = await fetch('/api/candles', { method: 'POST' });
          if (res.ok) {
            const data = await res.json();
            count = data.count || count + 1;
            if (counter) counter.textContent = count;
          }
        } catch (e) {
          console.error('Failed to increment candles', e);
        }
      }

      function addCandleToRow(animated = true) {
        if (row && row.children.length < 50) {
          const c = document.createElement('div');
          c.className = 'real-candle';
          const floatSpeed = 2 + Math.random() * 2;
          c.style.animation = `float ${floatSpeed}s ease-in-out infinite alternate`;
          c.style.animationDelay = `${Math.random()}s`;
          c.innerHTML = `<div class="flame"></div><div class="wick"></div><div class="wax"></div>`;
          row.appendChild(c);
          if (animated) gsap.fromTo(c, { opacity: 0, y: 30, scale: 0.8 }, { opacity: 1, y: 0, scale: 1, duration: 1.5, ease: "power3.out" });
        }
      }

      fetchCandleCount();
      // Add a few placeholder candles until fetch completes
      for (let i = 0; i < 5; i++) addCandleToRow(false);

      if (btn) {
        if (localStorage.getItem('hasAddedCandle') === 'true') {
          btn.style.opacity = '0.5';
          btn.style.cursor = 'not-allowed';
          btn.textContent = 'CANDLE ALREADY LIT';
        }

        btn.addEventListener('click', () => {
          if (localStorage.getItem('hasAddedCandle') === 'true') {
            return;
          }

          localStorage.setItem('hasAddedCandle', 'true');
          btn.style.opacity = '0.5';
          btn.style.cursor = 'not-allowed';
          btn.textContent = 'CANDLE ALREADY LIT';

          count++;
          if (counter) counter.textContent = count;
          addCandleToRow(true);
          gsap.fromTo(flash, { opacity: 0.3 }, { opacity: 0, duration: 0.8, ease: "power2.out" });

          incrementCandleCount();
        });
      }

      // Footer
      gsap.set('.gsap-foot', { autoAlpha: 0, y: 50 });
      gsap.to('.gsap-foot', {
        autoAlpha: 1, y: 0, duration: 1.2, ease: "power3.out",
        scrollTrigger: { trigger: "footer", start: "top 95%" }
      });
    });
