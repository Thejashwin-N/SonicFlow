    const libraries = [
      {
        name: "Favorites",
        tracks: [
          { title: "Electric Dreams", artist: "SoundPulse", duration: "3:15", src: "1.mp3", art: "https://picsum.photos/100?random=1" },
          { title: "Midnight Echoes", artist: "SoundPulse", duration: "2:45", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3", art: "https://picsum.photos/100?random=2" },
          { title: "Neon Horizon", artist: "SoundPulse", duration: "4:02", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3", art: "https://picsum.photos/100?random=3" }
        ]
      },
      {
        name: "Chill Beats",
        tracks: [
          { title: "Lofi Rain", artist: "Acoustic Aura", duration: "2:10", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3", art: "https://picsum.photos/100?random=5" }
        ]
      },
      {
        name: "Workout Hits",
        tracks: [
          { title: "Power Pulse", artist: "CyberBeat", duration: "3:40", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3", art: "https://picsum.photos/100?random=6" }
        ]
      }
    ];

    let activeLibIndex = 0;
    let activeTrackIndex = 0;
    let lastVolume = 0.8;

    // Player Elements
    const audio = document.getElementById("audio");
    const playBtn = document.getElementById("play");
    const prevBtn = document.getElementById("prev");
    const nextBtn = document.getElementById("next");
    const progress = document.getElementById("progress");
    const current = document.getElementById("current");
    const duration = document.getElementById("duration");
    const title = document.getElementById("title");
    const artist = document.getElementById("artist");
    const playerArt = document.getElementById("player-art");
    const libraryTitle = document.getElementById("library-title");
    const playlistUI = document.getElementById("playlist");
    const libraryListUI = document.getElementById("library-list");

    // Timer Elements
    const timerMins = document.getElementById("timer-mins");
    const timerSecs = document.getElementById("timer-secs");
    const startTimerBtn = document.getElementById("start-timer-btn");
    const resetTimerBtn = document.getElementById("reset-timer-btn");
    const presetButtons = document.querySelectorAll(".preset-btn");

    // Enhancements Elements
    const sleepToggle = document.getElementById("sleep-mode-toggle");
    const fadeToggle = document.getElementById("fade-out-toggle");
    const sidebarVisualizer = document.getElementById("sidebar-visualizer");
    const sidebarArt = document.getElementById("sidebar-art");
    const sidebarTrackTitle = document.getElementById("sidebar-track-title");
    const sidebarTrackArtist = document.getElementById("sidebar-track-artist");

    // Volume & Theme Controls
    const volumeSlider = document.getElementById("volume-slider");
    const volumeValue = document.getElementById("volume-value");
    const volumeIcon = document.getElementById("volume-icon");
    const muteBtn = document.getElementById("mute-btn");
    const themeButtons = document.querySelectorAll(".theme-btn");

    // 10-Band EQ Frequencies (ISO Standard)
    const eqFrequencies = [31, 63, 125, 250, 500, 1000, 2000, 4000, 8000, 16000];
    let eqFilters = [];
    const eqQSlider = document.getElementById("eq-q-factor");
    const qValueDisplay = document.getElementById("q-value");
    const eqPresetButtons = document.querySelectorAll(".eq-preset-btn");

    let timerInterval = null;
    let totalSeconds = 0;
    let isTimerRunning = false;

    // Web Audio API Nodes
    let audioCtx;
    let trackSource;

    // ----------------------------------
    // ANALOG CLOCK LOGIC
    // ----------------------------------
    const hourHand = document.getElementById("clock-hour");
    const minuteHand = document.getElementById("clock-minute");
    const secondHand = document.getElementById("clock-second");
    const digitalDisplay = document.getElementById("digital-clock-display");

    function updateAnalogClock() {
      const now = new Date();
      const seconds = now.getSeconds();
      const minutes = now.getMinutes();
      const hours = now.getHours();

      const secondsDegrees = (seconds / 60) * 360;
      const minutesDegrees = ((minutes + seconds / 60) / 60) * 360;
      const hoursDegrees = ((hours % 12 + minutes / 60) / 12) * 360;

      secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
      minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
      hourHand.style.transform = `rotate(${hoursDegrees}deg)`;

      const hh = String(hours).padStart(2, '0');
      const mm = String(minutes).padStart(2, '0');
      const ss = String(seconds).padStart(2, '0');
      digitalDisplay.textContent = `${hh}:${mm}:${ss}`;
    }

    setInterval(updateAnalogClock, 1000);
    updateAnalogClock();

    // ----------------------------------
    // WEBAUDIO 10-BAND GRAPHIC & PARAMETRIC EQ LOGIC
    // ----------------------------------
    function initAudioContext() {
      if (audioCtx) return;

      try {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        audioCtx = new AudioContext();
        trackSource = audioCtx.createMediaElementSource(audio);

        let lastNode = trackSource;

        // Build 10 Biquad Filters in Series
        eqFrequencies.forEach((freq, idx) => {
          const filter = audioCtx.createBiquadFilter();

          if (idx === 0) {
            filter.type = "lowshelf";
          } else if (idx === eqFrequencies.length - 1) {
            filter.type = "highshelf";
          } else {
            filter.type = "peaking";
            filter.Q.value = parseFloat(eqQSlider.value);
          }

          filter.frequency.value = freq;
          filter.gain.value = 0;

          lastNode.connect(filter);
          lastNode = filter;
          eqFilters.push(filter);
        });

        lastNode.connect(audioCtx.destination);
      } catch (err) {
        console.warn("Web Audio API Error: ", err);
      }
    }

    function render10BandUI() {
      const container = document.getElementById("eq-container");
      container.innerHTML = "";

      eqFrequencies.forEach((freq, i) => {
        const label = freq >= 1000 ? `${freq / 1000}k` : `${freq}`;
        const bandEl = document.createElement("div");
        bandEl.className = "eq-band";
        bandEl.innerHTML = `
          <input type="range" class="eq-slider" min="-18" max="18" value="0" step="0.5" data-index="${i}">
          <span class="eq-label">${label}</span>
        `;

        bandEl.querySelector("input").addEventListener("input", (e) => {
          const index = e.target.dataset.index;
          if (eqFilters[index]) {
            eqFilters[index].gain.value = parseFloat(e.target.value);
          }
          resetPresetActiveState();
        });

        container.appendChild(bandEl);
      });
    }

    // Parametric Bandwidth (Q) Adjuster
    eqQSlider.addEventListener("input", (e) => {
      const qVal = parseFloat(e.target.value);
      qValueDisplay.textContent = qVal.toFixed(1);

      eqFilters.forEach((filter, idx) => {
        if (filter.type === "peaking") {
          filter.Q.value = qVal;
        }
      });
    });

    function resetPresetActiveState() {
      eqPresetButtons.forEach(btn => btn.classList.remove("active"));
    }

    // EQ Presets Definition
    const eqPresets = {
      flat: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      bass: [12, 10, 8, 4, 1, 0, 0, 0, 0, 0],
      vocal: [-4, -2, 1, 5, 8, 7, 5, 2, 0, -2],
      treble: [-4, -2, 0, 0, 1, 3, 6, 9, 12, 14],
      electronic: [8, 6, 3, 0, -2, 4, 2, 5, 8, 10]
    };

    eqPresetButtons.forEach(btn => {
      btn.addEventListener("click", () => {
        resetPresetActiveState();
        btn.classList.add("active");

        const gains = eqPresets[btn.dataset.preset];
        if (gains) {
          gains.forEach((gain, i) => {
            if (eqFilters[i]) eqFilters[i].gain.value = gain;
            const slider = document.querySelector(`.eq-slider[data-index="${i}"]`);
            if (slider) slider.value = gain;
          });
        }
      });
    });

    audio.addEventListener("play", () => {
      initAudioContext();
      if (audioCtx && audioCtx.state === "suspended") {
        audioCtx.resume();
      }
    });

    // ----------------------------------
    // VOLUME & MUTE LOGIC
    // ----------------------------------
    function updateVolume(val) {
      audio.volume = val;
      volumeSlider.value = val;
      volumeValue.textContent = `${Math.round(val * 100)}%`;

      if (val === 0) {
        volumeIcon.textContent = "🔇";
        muteBtn.textContent = "🔇 Unmute";
      } else if (val < 0.5) {
        volumeIcon.textContent = "🔉";
        muteBtn.textContent = "🔊 Mute";
      } else {
        volumeIcon.textContent = "🔊";
        muteBtn.textContent = "🔊 Mute";
      }
    }

    volumeSlider.addEventListener("input", (e) => {
      const val = parseFloat(e.target.value);
      if (val > 0) lastVolume = val;
      updateVolume(val);
    });

    muteBtn.addEventListener("click", () => {
      if (audio.volume > 0) {
        lastVolume = audio.volume;
        updateVolume(0);
      } else {
        updateVolume(lastVolume || 0.8);
      }
    });

    // ----------------------------------
    // COLOR THEME SWITCHER
    // ----------------------------------
    themeButtons.forEach(btn => {
      btn.addEventListener("click", () => {
        themeButtons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        
        const theme = btn.dataset.theme;
        if (theme === "dark") {
          document.documentElement.removeAttribute("data-theme");
        } else {
          document.documentElement.setAttribute("data-theme", theme);
        }
      });
    });

    // ----------------------------------
    // TIMER LOGIC & FADE-OUT
    // ----------------------------------
    function updateTimerDisplay() {
      const mins = Math.floor(totalSeconds / 60);
      const secs = totalSeconds % 60;
      timerMins.textContent = mins < 10 ? `0${mins}` : mins;
      timerSecs.textContent = secs < 10 ? `0${secs}` : secs;
    }

    presetButtons.forEach(btn => {
      btn.addEventListener("click", () => {
        const mins = parseInt(btn.dataset.mins, 10);
        totalSeconds = mins * 60;
        updateTimerDisplay();
      });
    });

    function fadeOutAndStopAudio() {
      if (fadeToggle.checked && audio.volume > 0) {
        const fadeInterval = setInterval(() => {
          if (audio.volume > 0.1) {
            audio.volume -= 0.1;
            volumeSlider.value = audio.volume;
            volumeValue.textContent = `${Math.round(audio.volume * 100)}%`;
          } else {
            clearInterval(fadeInterval);
            audio.pause();
            updateVolume(lastVolume);
            playBtn.textContent = "▶";
            sidebarVisualizer.classList.remove("playing");
          }
        }, 500);
      } else {
        audio.pause();
        playBtn.textContent = "▶";
        sidebarVisualizer.classList.remove("playing");
      }
    }

    startTimerBtn.addEventListener("click", () => {
      if (isTimerRunning) {
        clearInterval(timerInterval);
        isTimerRunning = false;
        startTimerBtn.textContent = "Start";
      } else {
        if (totalSeconds <= 0) return;

        isTimerRunning = true;
        startTimerBtn.textContent = "Pause";

        timerInterval = setInterval(() => {
          if (totalSeconds > 0) {
            totalSeconds--;
            updateTimerDisplay();
          } else {
            clearInterval(timerInterval);
            isTimerRunning = false;
            startTimerBtn.textContent = "Start";
            
            if (sleepToggle.checked && !audio.paused) {
              fadeOutAndStopAudio();
            }
          }
        }, 1000);
      }
    });

    resetTimerBtn.addEventListener("click", () => {
      clearInterval(timerInterval);
      isTimerRunning = false;
      totalSeconds = 0;
      startTimerBtn.textContent = "Start";
      updateTimerDisplay();
    });

    // ----------------------------------
    // AUDIO PLAYER & PLAYLIST LOGIC
    // ----------------------------------
    function renderPlaylist() {
      const currentLib = libraries[activeLibIndex];
      libraryTitle.textContent = currentLib.name;
      playlistUI.innerHTML = "";

      currentLib.tracks.forEach((track, i) => {
        const li = document.createElement("li");
        li.className = i === activeTrackIndex ? "active" : "";
        li.innerHTML = `<span>${track.title}</span><span style="color:var(--text-muted)">${track.duration}</span>`;
        
        li.addEventListener("click", () => {
          activeTrackIndex = i;
          loadTrack(activeLibIndex, activeTrackIndex);
          audio.play();
          playBtn.textContent = "⏸";
          sidebarVisualizer.classList.add("playing");
        });
        
        playlistUI.appendChild(li);
      });
    }

    function loadTrack(libIdx, trackIdx) {
      const track = libraries[libIdx].tracks[trackIdx];
      audio.src = track.src;
      title.textContent = track.title;
      artist.textContent = track.artist;
      playerArt.src = track.art;

      sidebarArt.src = track.art;
      sidebarTrackTitle.textContent = track.title;
      sidebarTrackArtist.textContent = track.artist;

      renderPlaylist();
    }

    libraryListUI.querySelectorAll("li").forEach(item => {
      item.addEventListener("click", (e) => {
        libraryListUI.querySelectorAll("li").forEach(li => li.classList.remove("active"));
        e.target.classList.add("active");

        activeLibIndex = parseInt(e.target.dataset.lib, 10);
        activeTrackIndex = 0;
        loadTrack(activeLibIndex, activeTrackIndex);
      });
    });

    playBtn.addEventListener("click", () => {
      if (audio.paused) {
        if (!audio.src) {
          loadTrack(activeLibIndex, activeTrackIndex);
        }
        audio.play();
        playBtn.textContent = "⏸";
        sidebarVisualizer.classList.add("playing");
      } else {
        audio.pause();
        playBtn.textContent = "▶";
        sidebarVisualizer.classList.remove("playing");
      }
    });

    nextBtn.addEventListener("click", () => {
      const currentLib = libraries[activeLibIndex];
      activeTrackIndex = (activeTrackIndex + 1) % currentLib.tracks.length;
      loadTrack(activeLibIndex, activeTrackIndex);
      audio.play();
      playBtn.textContent = "⏸";
      sidebarVisualizer.classList.add("playing");
    });

    prevBtn.addEventListener("click", () => {
      const currentLib = libraries[activeLibIndex];
      activeTrackIndex = (activeTrackIndex - 1 + currentLib.tracks.length) % currentLib.tracks.length;
      loadTrack(activeLibIndex, activeTrackIndex);
      audio.play();
      playBtn.textContent = "⏸";
      sidebarVisualizer.classList.add("playing");
    });

    function formatTime(seconds) {
      const mins = Math.floor(seconds / 60);
      const secs = Math.floor(seconds % 60);
      return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
    }

    audio.addEventListener("timeupdate", () => {
      if (!isNaN(audio.duration)) {
        const progressPercent = (audio.currentTime / audio.duration) * 100;
        progress.value = progressPercent;
        current.textContent = formatTime(audio.currentTime);
        duration.textContent = formatTime(audio.duration);
      }
    });

    progress.addEventListener("input", () => {
      if (!isNaN(audio.duration)) {
        const seekTime = (progress.value / 100) * audio.duration;
        audio.currentTime = seekTime;
      }
    });

    audio.addEventListener("ended", () => {
      nextBtn.click();
    });

    // Initializations
    render10BandUI();
    loadTrack(activeLibIndex, activeTrackIndex);
