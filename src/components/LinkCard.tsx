"use client";

type LinkCardProps = {
  id: string;
  title: string;
  url: string;
  count: number;
  onClick?: () => void;
};

export default function LinkCard({ id, title, url, count, onClick }: LinkCardProps) {
  // 페이지 이동과 무관하게 전송되도록 sendBeacon 사용 (실패해도 링크 이동은 그대로)
  const recordClick = () => {
    const body = new Blob([JSON.stringify({ id })], { type: "application/json" });
    navigator.sendBeacon("/api/click", body);
    onClick?.();
  };

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={recordClick}
      className="relative block w-full rounded-2xl border border-white/70 bg-white/50 px-14 py-4 text-center font-medium shadow-[0_8px_24px_-12px_rgba(180,100,60,0.3)] backdrop-blur-md transition duration-200 hover:bg-white/70 hover:shadow-[0_10px_28px_-12px_rgba(180,100,60,0.4)] dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10"
    >
      {title}
      <span className="absolute right-5 top-1/2 -translate-y-1/2 text-xs font-normal tabular-nums text-stone-500 dark:text-stone-400">
        {count.toLocaleString("ko-KR")}회
      </span>
    </a>
  );
}
