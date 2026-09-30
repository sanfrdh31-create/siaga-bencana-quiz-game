:root {
  --bg: #020817;
  --bg-2: #0f172a;
  --panel: rgba(15, 23, 42, 0.82);
  --panel-solid: rgba(15, 23, 42, 0.96);
  --border: rgba(148, 163, 184, 0.18);
  --text: #e2e8f0;
  --muted: #94a3b8;
  --primary: #34d399;
  --primary-strong: #10b981;
  --secondary: #60a5fa;
  --warning: #fbbf24;
  --danger: #f87171;
  --purple: #a78bfa;
  --shadow: rgba(15, 118, 110, 0.28);
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  min-height: 100vh;
  font-family: 'Inter', sans-serif;
  background: radial-gradient(circle at top, rgba(16, 185, 129, 0.12), transparent 25%),
    linear-gradient(180deg, var(--bg) 0%, var(--bg-2) 100%);
  color: var(--text);
  position: relative;
  overflow-x: hidden;
}

button,
input,
select {
  font: inherit;
}

button {
  cursor: pointer;
}

.background-blur {
  position: fixed;
  filter: blur(90px);
  opacity: 0.25;
  z-index: 0;
  pointer-events: none;
}

.blur-one {
  top: 80px;
  left: 5%;
  width: 240px;
  height: 240px;
  background: rgba(52, 211, 153, 0.55);
}

.blur-two {
  right: 6%;
  bottom: 90px;
  width: 240px;
  height: 240px;
  background: rgba(96, 165, 250, 0.45);
}

.container {
  width: min(1100px, calc(100% - 32px));
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

.topbar {
  position: sticky;
  top: 0;
  z-index: 20;
  border-bottom: 1px solid rgba(148, 163, 184, 0.18);
  background: rgba(2, 8, 23, 0.7);
  backdrop-filter: blur(16px);
}

.nav-wrap {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 82px;
}

.brand-wrap {
  display: flex;
  align-items: center;
  gap: 14px;
}

.brand-icon {
  width: 48px;
  height: 48px;
  border-radius: 16px;
  display: grid;
  place-items: center;
  background: rgba(52, 211, 153, 0.12);
  color: var(--primary);
  border: 1px solid rgba(52, 211, 153, 0.22);
  font-size: 1.5rem;
}

.brand-wrap h1 {
  margin: 0;
  font-size: clamp(1.1rem, 2vw, 1.45rem);
  font-weight: 800;
  letter-spacing: -0.04em;
}

.brand-wrap small {
  color: var(--muted);
  letter-spacing: 0.15em;
  text-transform: uppercase;
  font-size: 10px;
}

.header-right {
  display: flex;
  align-items: center;
  gap: 10px;
}

.badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  border-radius: 999px;
  border: 1px solid var(--border);
  background: rgba(15, 23, 42, 0.8);
  font-weight: 700;
  font-size: 0.8rem;
}

.badge-score {
  color: var(--primary);
}

.badge-timer {
  color: var(--warning);
}

.badge-sound {
  color: #cbd5e1;
  border-color: rgba(148, 163, 184, 0.2);
  background: rgba(15, 23, 42, 0.8);
}

.badge-sound.muted {
  color: #fca5a5;
}

.main-shell {
  min-height: calc(100vh - 165px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 34px 0 52px;
}

.panel {
  width: min(100%, 860px);
  background: rgba(15, 23, 42, 0.8);
  border: 1px solid var(--border);
  border-radius: 28px;
  box-shadow: 0 22px 50px rgba(2, 6, 23, 0.45);
  backdrop-filter: blur(10px);
  padding: clamp(22px, 2vw, 40px);
}

.intro-panel,
.result-panel {
  max-width: 720px;
}

.hidden {
  display: none !important;
}

.intro-icon {
  width: 90px;
  height: 90px;
  margin: 0 auto 18px;
  display: grid;
  place-items: center;
  border-radius: 50%;
  border: 1px solid rgba(52, 211, 153, 0.3);
  background: rgba(52, 211, 153, 0.08);
  color: var(--primary);
  font-size: 2rem;
}

.pulse-soft {
  animation: pulse-soft 2.8s infinite ease-in-out;
}

@keyframes pulse-soft {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.06); }
}

.eyebrow {
  margin: 0;
  text-align: center;
  font-size: 0.76rem;
  text-transform: uppercase;
  letter-spacing: 0.18em;
  color: var(--primary);
  font-weight: 700;
}

h2 {
  margin: 10px 0 8px;
  text-align: center;
  font-size: clamp(2.1rem, 4vw, 3.1rem);
  line-height: 1.1;
  letter-spacing: -0.06em;
}

.subtitle {
  margin: 0 auto 22px;
  max-width: 620px;
  text-align: center;
  color: var(--muted);
  line-height: 1.7;
  font-size: 0.97rem;
}

.info-card {
  border: 1px solid rgba(148, 163, 184, 0.18);
  background: rgba(2, 6, 23, 0.45);
  border-radius: 18px;
  padding: 16px 18px;
  margin-bottom: 22px;
}

.info-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  font-size: 0.88rem;
  color: var(--muted);
  padding: 10px 0;
}

.info-row + .info-row {
  border-top: 1px solid rgba(148, 163, 184, 0.08);
}

.info-row strong {
  color: var(--text);
  text-align: right;
}

.info-row i {
  width: 18px;
  display: inline-block;
  text-align: center;
}

.form-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-bottom: 22px;
}

label {
  display: flex;
  flex-direction: column;
  gap: 8px;
  color: var(--muted);
  font-size: 0.82rem;
  font-weight: 600;
}

input,
select {
  width: 100%;
  border: 1px solid rgba(148, 163, 184, 0.2);
  background: rgba(2, 6, 23, 0.7);
  color: var(--text);
  padding: 13px 14px;
  border-radius: 14px;
  outline: none;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}

input:focus,
select:focus {
  border-color: rgba(52, 211, 153, 0.75);
  box-shadow: 0 0 0 5px rgba(52, 211, 153, 0.12);
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(100px, 1fr));
  gap: 12px;
  margin-bottom: 22px;
}

.mini-stat {
  padding: 18px 12px;
  border: 1px solid rgba(148, 163, 184, 0.18);
  border-radius: 16px;
  background: rgba(2, 6, 23, 0.45);
  text-align: center;
}

.mini-stat span {
  display: block;
  color: var(--muted);
  font-size: 0.72rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.mini-stat strong {
  display: block;
  margin-top: 8px;
  font-size: 1.6rem;
  color: var(--text);
}

.primary-btn,
.secondary-btn,
.accent-btn {
  cursor: pointer;
  border: none;
  border-radius: 16px;
  font-weight: 800;
  transition: transform 0.2s ease, filter 0.2s ease, box-shadow 0.2s ease;
}

.primary-btn:hover,
.secondary-btn:hover,
.accent-btn:hover {
  transform: translateY(-1px);
  filter: brightness(1.03);
}

.large-btn {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 16px 18px;
  font-size: 1rem;
}

.primary-btn {
  background: linear-gradient(135deg, var(--primary), var(--primary-strong));
  color: #022b1f;
  box-shadow: 0 16px 28px rgba(16, 185, 129, 0.22);
}

.secondary-btn {
  background: rgba(51, 65, 85, 0.92);
  color: var(--text);
  border: 1px solid rgba(148, 163, 184, 0.2);
  padding: 14px 18px;
}

.accent-btn {
  background: linear-gradient(135deg, #a78bfa, #60a5fa);
  color: #f8fafc;
  box-shadow: 0 16px 28px rgba(96, 165, 250, 0.2);
  padding: 14px 18px;
}

.top-panel {
  margin-bottom: 20px;
}

.question-meta {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  font-size: 0.78rem;
  color: var(--muted);
  margin-bottom: 14px;
}

.meta-tags {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
}

.pill {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 7px 12px;
  border-radius: 999px;
  border: 1px solid;
  font-weight: 700;
}

.pill-blue {
  background: rgba(59, 130, 246, 0.08);
  color: #93c5fd;
  border-color: rgba(96, 165, 250, 0.32);
}

.pill-emerald {
  background: rgba(52, 211, 153, 0.08);
  color: var(--primary);
  border-color: rgba(52, 211, 153, 0.22);
}

.progress-wrap {
  width: 100%;
}

.progress-bar {
  height: 12px;
  width: 100%;
  overflow: hidden;
  border-radius: 999px;
  background: rgba(15, 23, 42, 0.8);
  border: 1px solid rgba(148, 163, 184, 0.18);
}

.progress-fill {
  height: 100%;
  width: 0%;
  border-radius: inherit;
  background: linear-gradient(90deg, #34d399, #14b8a6, #60a5fa);
  transition: width 0.3s ease;
}

.game-card {
  position: relative;
  border: 1px solid rgba(148, 163, 184, 0.18);
  background: rgba(2, 6, 23, 0.44);
  border-radius: 22px;
  padding: clamp(18px, 2vw, 28px);
}

.streak-box {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  padding: 8px 12px;
  border-radius: 999px;
  background: rgba(167, 139, 250, 0.09);
  border: 1px solid rgba(167, 139, 250, 0.2);
  color: #ddd6fe;
  font-size: 0.8rem;
  margin-bottom: 14px;
}

.streak-box strong {
  color: #f5f3ff;
}

#question-text {
  margin: 0 0 22px;
  font-size: clamp(1.2rem, 2vw, 2rem);
  line-height: 1.5;
  letter-spacing: -0.04em;
}

.options-container {
  display: grid;
  gap: 12px;
}

.option-btn {
  width: 100%;
  display: flex;
  align-items: flex-start;
  gap: 12px;
  border: 1px solid rgba(148, 163, 184, 0.18);
  background: rgba(15, 23, 42, 0.78);
  padding: 16px 16px;
  border-radius: 16px;
  color: var(--text);
  text-align: left;
  cursor: pointer;
  transition: transform 0.2s ease, border-color 0.2s ease, background 0.2s ease;
}

.option-btn:hover {
  transform: translateY(-1px);
  border-color: rgba(52, 211, 153, 0.42);
  background: rgba(30, 41, 59, 0.9);
}

.option-letter {
  width: 32px;
  height: 32px;
  flex-shrink: 0;
  display: grid;
  place-items: center;
  border-radius: 50%;
  background: rgba(15, 23, 42, 0.9);
  border: 1px solid rgba(148, 163, 184, 0.24);
  font-weight: 800;
  font-size: 0.8rem;
  color: var(--text);
}

.option-text {
  font-size: 0.96rem;
  line-height: 1.6;
  color: #e2e8f0;
}

.explanation-box {
  margin-top: 18px;
  padding: 18px 20px;
  border-radius: 18px;
  border: 1px solid rgba(148, 163, 184, 0.18);
  background: rgba(15, 23, 42, 0.8);
}

.explanation-title {
  font-weight: 800;
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  gap: 8px;
}

.explanation-box p {
  margin: 0;
  color: var(--muted);
  line-height: 1.7;
}

.explanation-box.success {
  border-color: rgba(52, 211, 153, 0.35);
  background: rgba(5, 46, 34, 0.42);
}

.explanation-box.error {
  border-color: rgba(248, 113, 113, 0.4);
  background: rgba(69, 10, 10, 0.38);
}

#next-btn {
  margin-top: 18px;
}

.result-panel {
  text-align: center;
}

.result-icon {
  width: 110px;
  height: 110px;
  margin: 0 auto 18px;
  display: grid;
  place-items: center;
  border-radius: 50%;
  border: 1px solid rgba(148, 163, 184, 0.2);
  font-size: 2.5rem;
}

.result-eyebrow {
  margin-bottom: 10px;
}

.result-student {
  margin: 0 0 10px;
  color: var(--muted);
  font-size: 0.84rem;
}

.result-message {
  margin: 0 auto 26px;
  max-width: 620px;
  line-height: 1.7;
  color: #dfe7f5;
}

.result-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(140px, 1fr));
  gap: 16px;
  margin-bottom: 22px;
}

.result-box {
  padding: 18px 16px;
  border-radius: 18px;
  border: 1px solid rgba(148, 163, 184, 0.18);
  background: rgba(2, 6, 23, 0.45);
}

.result-box span {
  display: block;
  font-size: 0.72rem;
  color: var(--muted);
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

.result-box strong {
  display: block;
  margin-top: 8px;
  font-size: clamp(1.5rem, 2vw, 2.2rem);
}

.achievement-box {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  width: 100%;
  justify-content: center;
  margin-bottom: 22px;
  padding: 14px 16px;
  border-radius: 16px;
  border: 1px solid rgba(148, 163, 184, 0.18);
  background: rgba(2, 6, 23, 0.4);
  color: var(--text);
  font-weight: 700;
}

.result-actions {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 12px;
}

.result-actions > button {
  min-width: 160px;
  padding: 14px 16px;
}

.footer {
  padding: 18px 14px 32px;
  text-align: center;
  color: var(--muted);
  border-top: 1px solid rgba(148, 163, 184, 0.12);
  background: rgba(2, 8, 23, 0.7);
}

.footer p {
  margin: 4px 0;
}

@media (max-width: 640px) {
  .nav-wrap {
    min-height: 72px;
  }

  .header-right {
    gap: 6px;
  }

  .badge {
    padding: 7px 9px;
  }

  .question-meta {
    flex-direction: column;
    align-items: flex-start;
  }

  .form-grid,
  .stats-grid,
  .result-grid {
    grid-template-columns: 1fr;
  }

  .result-actions {
    flex-direction: column;
  }

  .result-actions > button {
    width: 100%;
  }
}
