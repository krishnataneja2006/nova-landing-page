import { useEffect, useState } from "react";

const statistics = [
  { value: 10000, suffix: "+", label: "Teams using NOVA" },
  { value: 2.5, suffix: "M+", label: "Tasks completed" },
  { value: 38, suffix: "%", label: "Average productivity boost" },
  { value: 99.9, suffix: "%", label: "Platform uptime" },
];

function Statistics() {
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const section = document.querySelector(".statistics-section");

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.3,
      }
    );

    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="statistics-section">
      <div className="section-container">
        <div className="statistics-grid">
          {statistics.map((stat) => (
            <AnimatedStat
              key={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              started={started}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function AnimatedStat({ value, suffix, label, started }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!started) return;

    const duration = 1500;
    const startTime = performance.now();

    const animate = (currentTime) => {
      const progress = Math.min(
        (currentTime - startTime) / duration,
        1
      );

      const easedProgress = 1 - Math.pow(1 - progress, 3);
      const currentValue = value * easedProgress;

      setCount(currentValue);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [started, value]);

  const displayValue =
    value % 1 === 0
      ? Math.floor(count).toLocaleString()
      : count.toFixed(1);

  return (
    <div className="stat-item">
      <strong>
        {displayValue}
        {suffix}
      </strong>

      <span>{label}</span>
    </div>
  );
}

export default Statistics;