"use client";

type LinkCardProps = {
  id: string;
  title: string;
  url: string;
};

export default function LinkCard({ id, title, url }: LinkCardProps) {
  // 페이지 이동과 무관하게 전송되도록 sendBeacon 사용 (실패해도 링크 이동은 그대로)
  const recordClick = () => {
    const body = new Blob([JSON.stringify({ id })], { type: "application/json" });
    navigator.sendBeacon("/api/click", body);
  };

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={recordClick}
      className="block w-full rounded-xl border border-stone-300 bg-white px-5 py-4 text-center font-medium shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-neutral-700 dark:bg-neutral-900"
    >
      {title}
    </a>
  );
}
