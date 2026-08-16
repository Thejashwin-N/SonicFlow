    const libraries = [
      {
        name: "Favorites",
        tracks: [
          { title: "Adi Penne (Duet)", artist: "Various Artists",   src: "song/Adi Penne (Duet) (From Naam Series).mp3", art: "https://picsum.photos/100?random=1" },
          { title: "Adipoli", artist: "Various Artists",   src: "song/Adipoli (From _Think Originals_).mp3", art: "https://picsum.photos/100?random=2" },
          { title: "Adiye", artist: "Various Artists",   src: "song/Adiye (From _Bachelor_).mp3", art: "https://picsum.photos/100?random=3" },
          { title: "Azhage", artist: "Various Artists",   src: "song/Azhage (feat. Thenuja).mp3", art: "https://picsum.photos/100?random=4" },
          { title: "Chellamma", artist: "Various Artists",   src: "song/Chellamma (From _Doctor_).mp3", art: "https://picsum.photos/100?random=5" },
          { title: "chuttamalle x paththavaikkum", artist: "Various Artists",   src: "song/chuttamalle x paththavaikkum (tamil x telugu mashup) (1).mp3", art: "https://picsum.photos/100?random=6" },
          { title: "Chuttamalle", artist: "Various Artists",   src: "song/Chuttamalle.mp3", art: "https://picsum.photos/100?random=7" },
          { title: "Dheema", artist: "Various Artists",   src: "song/Dheema (From _Love Insurance Kompany_).mp3", art: "https://picsum.photos/100?random=9" },
          { title: "Dhinam oru kavithai", artist: "Various Artists",   src: "song/Dhinam oru kavithai.mp3", art: "https://picsum.photos/100?random=10" },
          { title: "En Kadhal Solla", artist: "Various Artists",   src: "song/En Kadhal Solla.mp3", art: "https://picsum.photos/100?random=11" },
          { title: "Enna Solla Pogirai", artist: "Various Artists",   src: "song/Enna Solla Pogirai.mp3", art: "https://picsum.photos/100?random=12" },
          { title: "Great Ji", artist: "Various Artists",   src: "song/Great Ji (From _Meesaya Murukku_).mp3", art: "https://picsum.photos/100?random=13" },
          { title: "Hey Minnale ", artist: "Various Artists",   src: "song/Hey Minnale (From _Amaran_) (Tamil).mp3", art: "https://picsum.photos/100?random=14" },
          { title: "Hi Sonna Pothum", artist: "Various Artists",   src: "song/Hi Sonna Pothum (From _Comali_).mp3", art: "https://picsum.photos/100?random=15" },
          { title: "Indru Netru Naalai", artist: "Various Artists",   src: "song/Indru Netru Naalai.mp3", art: "https://picsum.photos/100?random=16" },
          { title: "Kadhaippoma", artist: "Various Artists",   src: "song/Kadhaippoma.mp3", art: "https://picsum.photos/100?random=17" },
          { title: "Kadhal Oru Aagayam", artist: "Various Artists",   src: "song/Kadhal Oru Aagayam.mp3", art: "https://picsum.photos/100?random=18" },
          { title: "Kanave Unai", artist: "Various Artists",   src: "song/Kanave Unai.mp3", art: "https://picsum.photos/100?random=19" },
          { title: "Kannala Kannala", artist: "Various Artists",   src: "song/Kannala Kannala (The Melting Point of Love).mp3", art: "https://picsum.photos/100?random=20" },
          { title: "Kannoram", artist: "Various Artists",   src: "song/Kannoram (From Naam Series).mp3", art: "https://picsum.photos/100?random=21" },
          { title: "Kurumugil", artist: "Various Artists",   src: "song/Kurumugil (From _Sita Ramam (Tamil)_).mp3", art: "https://picsum.photos/100?random=22" },
          { title: "Yaaro En Nenjai Video", artist: "Various Artists",   src: "song/Kutty - Yaaro En Nenjai Video _ Dhanush _ Devi Sri Prasad.mp3", art: "https://picsum.photos/100?random=23" },
          { title: "Maatikichu", artist: "Various Artists",   src: "song/Maatikichu.mp3", art: "https://picsum.photos/100?random=24" },
          { title: "Mayakirriye", artist: "Various Artists",   src: "song/Mayakirriye - Music Video _ Mugen Rao _ Aathmika _ Anirudh Ravichander _ AniVee _ Jimmyrudh.mp3", art: "https://picsum.photos/100?random=25" },
          { title: "Mudhal Nee Mudivum Nee", artist: "Various Artists",   src: "song/Mudhal Nee Mudivum Nee Title Track (From _Mudhal Nee Mudivum Nee_).mp3", art: "https://picsum.photos/100?random=26" },
          { title: "Mundhinam", artist: "Various Artists",   src: "song/Mundhinam.mp3", art: "https://picsum.photos/100?random=27" },
          { title: "Muzumathi", artist: "Various Artists",   src: "song/Muzumathi (From _Jodhaa Akbar (Tamil)_).mp3", art: "https://picsum.photos/100?random=28" },
          { title: "Naan Aval Illai", artist: "Various Artists",   src: "song/Naan Aval Illai.mp3", art: "https://picsum.photos/100?random=29" },
          { title: "Nee Nenacha", artist: "Various Artists",   src: "song/Nee Nenacha.mp3", art: "https://picsum.photos/100?random=30" },
          { title: "Neethanae", artist: "Various Artists",   src: "song/Neethanae (From _Mersal_).mp3", art: "https://picsum.photos/100?random=31" },
          { title: "Neeyum Naanum Anbe", artist: "Various Artists",   src: "song/Neeyum Naanum Anbe.mp3", art: "https://picsum.photos/100?random=32" },
          { title: "Nenjukkul Peidhidum", artist: "Various Artists",   src: "song/Nenjukkul Peidhidum.mp3", art: "https://picsum.photos/100?random=33" },
          { title: "Oorum Blood", artist: "Various Artists",   src: "song/Oorum Blood (From _Dude_).mp3", art: "https://picsum.photos/100?random=34" },
          { title: "Otha Thamarai", artist: "Various Artists",   src: "song/Otha Thamarai (Original Soundtrack).mp3", art: "https://picsum.photos/100?random=35" },
          { title: "Oxygen", artist: "Various Artists",   src: "song/Oxygen.mp3", art: "https://picsum.photos/100?random=36" },
          { title: "Pazhagikalam", artist: "Various Artists",   src: "song/Pazhagikalam (Lyric Video) _ Hiphop Tamizha _ Vishal, Hansika _ Sundar C _ Lyrics.mp3", art: "https://picsum.photos/100?random=37" },
          { title: "Pottala Muttaye", artist: "Various Artists",   src: "song/Pottala Muttaye _ Thalaivan Thalaivii _ Vijay Sethupathi,Nithya Menen _Pandiraaj _Santhosh Narayanan.mp3", art: "https://picsum.photos/100?random=38" },
          { title: "Yaayum ", artist: "Various Artists",   src: "song/Sagaa Songs _ Yaayum Video Song (யாயும்) _ Saran, Ayra _ Shabir Sulthan _ Murugesh.mp3", art: "https://picsum.photos/100?random=39" },
          { title: "Sakkarakatti", artist: "Various Artists",   src: "song/Sakkarakatti.mp3", art: "https://picsum.photos/100?random=40" },
          { title: "Sidu Sidu", artist: "Various Artists",   src: "song/Sidu Sidu.mp3", art: "https://picsum.photos/100?random=41" },
          { title: "Thangapoovey", artist: "Various Artists",   src: "song/Thangapoovey - Lyrical Video _ Madharaasi _ Sivakarthikeyan _ Rukmini _ A.R.Murugadoss _ Anirudh.mp3", art: "https://picsum.photos/100?random=42" },
          { title: "Thanimai Kadhal", artist: "Various Artists",   src: "song/Thanimai Kadhal.mp3", art: "https://picsum.photos/100?random=43" },
          { title: "Theethiriyaai", artist: "Various Artists",   src: "song/Theethiriyaai (From _Brahmastra (Tamil)_).mp3", art: "https://picsum.photos/100?random=44" },
          { title: "Thuli Thuli", artist: "Various Artists",   src: "song/Thuli Thuli.mp3", art: "https://picsum.photos/100?random=45" },
          { title: "Tum Tum", artist: "Various Artists",   src: "song/Tum Tum (From _Enemy - Tamil_).mp3", art: "https://picsum.photos/100?random=46" },
          { title: "Unakkul Naane x Nenjil Jil Jil x En Kadhal Solla _ remix _ mashup", artist: "Various Artists",   src: "song/Unakkul Naane x Nenjil Jil Jil x En Kadhal Solla _ remix _ mashup.mp3", art: "https://picsum.photos/100?random=47" },
          { title: "Uyirey", artist: "Various Artists",   src: "song/Uyirey (From _Amaran_) (Tamil).mp3", art: "https://picsum.photos/100?random=48" },
          { title: "Vaa Senthaazhini", artist: "Various Artists",   src: "song/Vaa Senthaazhini (From _Adiyae_).mp3", art: "https://picsum.photos/100?random=49" },
          { title: "Vaadi Nee Vaa", artist: "Various Artists",   src: "song/Vaadi Nee Vaa.mp3", art: "https://picsum.photos/100?random=50" },
          { title: "Vaarayo Vaarayo", artist: "Various Artists",   src: "song/Vaarayo Vaarayo.mp3", art: "https://picsum.photos/100?random=51" },
          { title: "Vaaya En Veera - Video Song _ Kanchana 2 _ Raghava Lawrence _ Taapsee _ Sun Music", artist: "Various Artists",   src: "song/Vaaya En Veera - Video Song _ Kanchana 2 _ Raghava Lawrence _ Taapsee _ Sun Music.mp3", art: "https://picsum.photos/100?random=52" },
          { title: "Vazhithunaiye", artist: "Various Artists",   src: "song/Vazhithunaiye (From _Dragon_).mp3", art: "https://picsum.photos/100?random=53" },
          { title: "Yaanji", artist: "Various Artists",   src: "song/Yaanji (From _Vikram Vedha_).mp3", art: "https://picsum.photos/100?random=54" }
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
