'use client';

const TEXT =
  'FRONTEND DEVELOPER • HACKATHON PARTICIPANT • MARKETER • AI/ML ENTHUSIAST • SOFTWARE ENGINEER • INNOVATOR • PANEL DISCUSSION MODERATOR • PUBLIC SPEAKER • ';

const REPEATED = TEXT + TEXT;

export default function MarqueeBanner() {
  return (
    <div className="w-full overflow-hidden border-y border-[#2A2A2A] bg-[#111111] py-4 mt-[30px] relative z-10 select-none">
      {/* Row 1 – left to right */}
      <div className="relative flex overflow-hidden">
        <div className="marquee-track whitespace-nowrap">
          {[...Array(4)].map((_, i) => (
            <span
              key={i}
              className="text-sm font-semibold tracking-widest text-[#A7A7A7] px-2"
            >
              {TEXT}
            </span>
          ))}
          {[...Array(4)].map((_, i) => (
            <span
              key={`b-${i}`}
              className="text-sm font-semibold tracking-widest text-[#A7A7A7] px-2"
            >
              {TEXT}
            </span>
          ))}
        </div>
      </div>

      {/* Row 2 – right to left, accent highlight */}
      <div className="relative flex overflow-hidden mt-2">
        <div className="marquee-track-reverse whitespace-nowrap">
          {[...Array(4)].map((_, i) => (
            <span
              key={i}
              className="text-sm font-semibold tracking-widest px-2"
            >
              {TEXT.split('•').map((part, pi) => (
                <span key={pi}>
                  <span className="text-[#E6E6E5]">{part.trim()}</span>
                  {pi < TEXT.split('•').length - 1 && (
                    <span className="text-[#F70000] mx-2">•</span>
                  )}
                </span>
              ))}
            </span>
          ))}
          {[...Array(4)].map((_, i) => (
            <span
              key={`b-${i}`}
              className="text-sm font-semibold tracking-widest px-2"
            >
              {TEXT.split('•').map((part, pi) => (
                <span key={pi}>
                  <span className="text-[#E6E6E5]">{part.trim()}</span>
                  {pi < TEXT.split('•').length - 1 && (
                    <span className="text-[#F70000] mx-2">•</span>
                  )}
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
