import { useEffect, useMemo, useRef, useState } from 'react';
import type { FocusEvent, KeyboardEvent } from 'react';
import { dailyData, monthlyData, type DailyImpression, type MonthlyImpression } from './impressionsData';

const kpis = [
  { value: '762,273', label: 'IMPRESSIONS' },
  { value: '28,451', label: 'PROFILE VISITS' },
  { value: '5,892', label: 'FOLLOWERS GAINED' },
];

const monthlyChanges = ['27%', '31%', '38%', '32%', '28%', '—'];

const formatNumber = (value: number): string => value.toLocaleString('en-US');

const formatDate = (date: string): string => {
  const [year, month, day] = date.split('-').map(Number);
  return new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric', year: 'numeric' }).format(new Date(Date.UTC(year, month - 1, day)));
};

const getChartPoints = (data: Array<MonthlyImpression | DailyImpression>) => data.map((item, index) => ({
  x: 42 + (index / Math.max(data.length - 1, 1)) * 916,
  y: 246 - (item.impressions / 200000) * 220,
  ...item,
}));

const getLinePath = (points: Array<{ x: number; y: number }>): string =>
  points.map((point, index) => `${index === 0 ? 'M' : 'L'} ${point.x.toFixed(2)} ${point.y.toFixed(2)}`).join(' ');

function ImpressionsChart() {
  const [view, setView] = useState<'monthly' | 'daily'>('monthly');
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const chartRef = useRef<HTMLDivElement>(null);
  const data = view === 'monthly' ? monthlyData : dailyData;
  const points = useMemo(() => getChartPoints(data), [data]);
  const linePath = useMemo(() => getLinePath(points), [points]);
  const areaPath = `${linePath} L ${points[points.length - 1].x} 246 L ${points[0].x} 246 Z`;
  const activePoint = activeIndex === null ? null : points[activeIndex];
  const labelStep = view === 'monthly' ? 1 : 30;

  useEffect(() => {
    const element = chartRef.current;
    if (!element) return undefined;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.2 });
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const handleKeyDown = (event: KeyboardEvent<SVGCircleElement>, index: number) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      setActiveIndex(index);
    }
  };

  const handleBlur = (event: FocusEvent<SVGCircleElement>) => {
    if (!event.currentTarget.parentElement?.contains(event.relatedTarget as Node)) setActiveIndex(null);
  };

  return (
    <div ref={chartRef}>
      <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-navy">Impressions over time</span>
          <h3 id="chart-heading" className="mt-2 font-display text-3xl font-semibold leading-tight tracking-tight text-navy lg:text-4xl">A steady upward trend.</h3>
          <p className="mt-2 text-sm leading-relaxed text-navy/55">Total impressions grew consistently over the last 6 months.</p>
        </div>
        <div className="flex self-start rounded-full border border-navy/10 bg-white/55 p-0.5 sm:self-end" aria-label="Chart view">
          {(['monthly', 'daily'] as const).map((option) => (
            <button
              key={option}
              type="button"
              aria-pressed={view === option}
              onClick={() => { setView(option); setActiveIndex(null); }}
              className={`rounded-full px-4 py-1.5 text-[11px] font-semibold capitalize transition-colors ${view === option ? 'bg-navy text-white' : 'text-navy/65 hover:text-navy'}`}
            >
              {option}
            </button>
          ))}
        </div>
      </div>

      <div className="relative mt-8" role="region" aria-label={`${view} impressions chart. Daily data is illustrative.`}>
        <div className="relative pl-9 sm:pl-12">
          <div className="pointer-events-none absolute inset-x-0 top-0 flex h-[calc(100%-2rem)] flex-col justify-between">
            {[200000, 150000, 100000, 50000, 0].map((label) => <span key={label} className="text-right text-[10px] text-navy/40">{label === 0 ? '0' : `${label / 1000}K`}</span>)}
          </div>
          <svg className="h-64 w-full overflow-visible sm:h-80" viewBox="0 0 1000 300" fill="none" preserveAspectRatio="none">
            <defs>
              <linearGradient id="impressions-fill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor="#1E9E96" stopOpacity=".18" />
                <stop offset="1" stopColor="#1E9E96" stopOpacity="0" />
              </linearGradient>
            </defs>
            {[0, 1, 2, 3, 4].map((line) => <line key={line} x1="0" x2="1000" y1={26 + line * 55} y2={26 + line * 55} stroke="#A9B2B7" strokeOpacity=".25" strokeDasharray="2 7" />)}
            {view === 'monthly' && monthlyData.map((_, index) => <line key={index} x1={points[index].x} x2={points[index].x} y1="26" y2="246" stroke="#A9B2B7" strokeOpacity=".16" strokeDasharray="2 7" />)}
            <path d={areaPath} fill="url(#impressions-fill)" className={isVisible ? 'chart-area-enter' : 'opacity-0'} />
            <path d={linePath} pathLength="1" stroke="#1E9E96" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={isVisible ? 'chart-line-enter' : 'opacity-0'} />
            {points.map((point, index) => {
              const item = data[index];
              const isActive = activeIndex === index;
              const showMarker = view === 'monthly' || isActive;
              return (
                <g key={'date' in item ? item.date : item.month}>
                  {view === 'monthly' && <text x={point.x} y={point.y - 15} textAnchor="middle" className="fill-navy text-[11px] font-semibold">{`${Math.round(item.impressions / 1000)}K`}</text>}
                  <circle
                    cx={point.x}
                    cy={point.y}
                    r={isActive ? 6 : showMarker ? 4 : 1.5}
                    fill="#FBF9F3"
                    stroke="#1E9E96"
                    strokeWidth={isActive ? 3 : 2}
                    className="cursor-pointer outline-none transition-all focus-visible:stroke-navy"
                    tabIndex={0}
                    aria-label={'date' in item ? `${formatDate(item.date)}: ${formatNumber(item.impressions)} impressions` : `${item.month}: ${formatNumber(item.impressions)} impressions`}
                    onMouseEnter={() => setActiveIndex(index)}
                    onFocus={() => setActiveIndex(index)}
                    onMouseLeave={() => setActiveIndex(null)}
                    onBlur={handleBlur}
                    onKeyDown={(event) => handleKeyDown(event, index)}
                  />
                </g>
              );
            })}
          </svg>
          <div className="mt-3 flex justify-between text-[10px] font-medium text-navy/45">
            {points.map((point, index) => index % labelStep === 0 ? <span key={index}>{'month' in point ? `${point.shortMonth} 2024` : formatDate(point.date).split(',')[0]}</span> : null)}
          </div>
        </div>
        {activePoint && (
          <div className="pointer-events-none absolute z-10 -translate-x-1/2 -translate-y-full rounded-md bg-navy px-3 py-2 text-xs text-white shadow-lg" style={{ left: `${Math.min(Math.max((activePoint.x / 1000) * 100, 8), 92)}%`, top: `${Math.max((activePoint.y / 300) * 100, 16)}%` }}>
            <p className="font-semibold">{'month' in activePoint ? activePoint.month : formatDate(activePoint.date)}</p>
            <p className="mt-0.5 font-semibold">{formatNumber(activePoint.impressions)}</p>
          </div>
        )}
      </div>
      <p className="mt-3 text-xs text-navy/40">Daily view is illustrative; actual daily analytics have not been provided.</p>
    </div>
  );
}

function MonthlyBreakdown() {
  return (
    <aside className="border-t border-navy/10 pt-8 md:border-l md:border-t-0 md:pl-8 md:pt-0" aria-labelledby="breakdown-heading">
      <h3 id="breakdown-heading" className="text-[10px] font-semibold uppercase tracking-[0.2em] text-navy">Monthly breakdown</h3>
      <div className="mt-5">
        {[...monthlyData].reverse().map((item, index) => (
          <div key={item.month} className="grid grid-cols-[1fr_auto_auto] items-center gap-3 border-b border-navy/10 py-3 text-xs">
            <span className="text-navy/70">{item.month}</span>
            <strong className="font-semibold text-navy">{formatNumber(item.impressions)}</strong>
            <span className="w-9 text-right text-[10px] font-semibold text-teal">{index < monthlyChanges.length - 1 ? `↑ ${monthlyChanges[index]}` : '—'}</span>
          </div>
        ))}
      </div>
    </aside>
  );
}

export default function ResultsStrip() {
  return (
    <section className="border-y border-navy/10 bg-[#FBF9F3] py-16 lg:py-24" aria-labelledby="results-heading">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between lg:gap-20">
          <div className="max-w-xl">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-teal">The results</span>
            <h2 id="results-heading" className="mt-3 font-display text-3xl font-semibold leading-tight tracking-tight text-navy lg:text-4xl">Consistent content. Compounding visibility.</h2>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-navy/55">In 6 months, the account saw a steady increase in reach as we shared the right ideas with the right people.</p>
          </div>
          <div className="grid grid-cols-1 border-t border-navy/15 sm:min-w-[520px] sm:grid-cols-3 sm:border-t-0">
            {kpis.map((kpi, index) => (
              <div key={kpi.label} className={`py-5 sm:px-7 sm:py-0 ${index > 0 ? 'border-t border-navy/15 sm:border-l sm:border-t-0' : ''} ${index === 0 ? 'sm:pl-0' : ''} ${index === kpis.length - 1 ? 'sm:pr-0' : ''}`}>
                <p className="whitespace-nowrap font-display text-3xl font-semibold tracking-tight text-navy lg:text-4xl">{kpi.value}</p>
                <p className="mt-2 text-[10px] font-semibold uppercase leading-[1.5] tracking-[0.17em] text-navy/50">{kpi.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function ResultsInsights() {
  return (
    <section className="border-b border-navy/10 bg-[#FBF9F3] pb-16 lg:pb-24" aria-labelledby="chart-heading">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-10 md:grid-cols-[minmax(0,1fr)_260px] md:gap-8">
          <ImpressionsChart />
          <MonthlyBreakdown />
        </div>
      </div>
    </section>
  );
}
