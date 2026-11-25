import LinkCard from "@/components/LinkCard";
import Profile from "@/components/Profile";
import ThemeToggle from "@/components/ThemeToggle";
import { links, profile } from "@/lib/links";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center px-4 py-8">
      <ThemeToggle />
      {/* 와이어프레임의 바깥 테두리 */}
      <div className="flex w-full max-w-md flex-col items-center gap-8 rounded-[2rem] border-2 border-stone-800 px-6 py-12 dark:border-neutral-300">
        {/* 상단: 원형 프로필 사진 / 이름 / 한 줄 소개 */}
        <Profile name={profile.name} bio={profile.bio} photoUrl={profile.photoUrl} />
        {/* 하단: 링크 카드 3개를 세로로 배치 */}
        <ul className="flex w-full flex-col gap-5">
          {links.map((link) => (
            <li key={link.id}>
              <LinkCard id={link.id} title={link.title} url={link.url} />
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
