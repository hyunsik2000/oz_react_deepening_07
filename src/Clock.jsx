import { useEffect, useState } from 'react';

/**
 * Clock 컴포넌트
 *
 * 실시간 시계를 표시하고 사용자가 시계를 시작하거나 정지할 수 있는 React 함수형 컴포넌트입니다.
 * 시간은 "시", "분", "초"로 나뉘어 표시됩니다.
 *
 * 주요 기능:
 * - 현재 시간을 "HH:mm:ss" 형식으로 표시합니다.
 * - 시계가 실행 중일 때 매초마다 시간을 업데이트합니다.
 **/
function Clock() {
  const [timerRunning, setTimerRunning] = useState(false);
  const [time, setTime] = useState(() => new Date());

  const handleTimerToggle = () => {
    setTimerRunning(!timerRunning);
  };

  useEffect(() => {
    if (!timerRunning) return;
    let interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [timerRunning]);

  const hours = time.getHours().toString();
  const minutes = time.getMinutes().toString();
  const seconds = time.getSeconds().toString();

  const timeChars = [...hours.split(''), '시', ...minutes.split(''), '분', ...seconds.split(''), '초'];

  return (
    <section className="timer-container">
      <p>timer-container</p>
      <article className="clock-container">
        <p>RealTime Clock</p>
        <div className="timer-list">
          {timeChars.map((el) => (
            <span className="timer-item">{el}</span>
          ))}
        </div>
        <button className={timerRunning ? 'timer-btn-on' : 'timer-btn-off'} onClick={handleTimerToggle}>
          {timerRunning ? '타이머 정지' : '타이머 시작'}
        </button>
      </article>
    </section>
  );
}

export default Clock;
