"use client";

import { useEffect, useState } from "react";
import LinkCard from "@/components/LinkCard";

type LinkItem = { id: string; title: string; url: string };

export default function LinkList({ links }: { links: LinkItem[] }) {
  // 데이터를 받기 전에는 비어 있고, 카드에서는 0회로 표시된다
  const [counts, setCounts] = useState<Record<string, number>>({});

  // 페이지가 열릴 때 모든 링크의 클릭 수를 한 번에 가져온다
  useEffect(() => {
    fetch("/api/click", { cache: "no-store" })
      .then((res) => (res.ok ? res.json() : Promise.reject(res.status)))
      .then((data: Record<string, number>) => setCounts(data))
      .catch(() => {
        /* 실패해도 0회로 계속 표시 */
      });
  }, []);

  // 클릭 즉시 화면의 숫자도 +1 (서버 기록은 LinkCard에서 전송)
  const handleClick = (id: string) =>
    setCounts((prev) => ({ ...prev, [id]: (prev[id] ?? 0) + 1 }));

  return (
    <ul className="flex w-full flex-col gap-4">
      {links.map((link) => (
        <li key={link.id}>
          <LinkCard
            id={link.id}
            title={link.title}
            url={link.url}
            count={counts[link.id] ?? 0}
            onClick={() => handleClick(link.id)}
          />
        </li>
      ))}
    </ul>
  );
}
