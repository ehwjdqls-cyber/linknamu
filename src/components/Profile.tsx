type ProfileProps = {
  name: string;
  bio: string;
  photoUrl?: string;
};

export default function Profile({ name, bio, photoUrl }: ProfileProps) {
  return (
    <section className="flex flex-col items-center text-center">
      {/* 흰 테두리 + 부드러운 그림자로 살짝 떠 보이는 원형 사진 */}
      <div className="rounded-full bg-white/70 p-1.5 shadow-[0_12px_32px_-8px_rgba(180,100,60,0.35)] ring-1 ring-white/80 dark:bg-white/10 dark:ring-white/10">
        {photoUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={photoUrl}
            alt={`${name} 프로필 사진`}
            className="h-32 w-32 rounded-full object-cover object-top"
          />
        ) : (
          <div
            aria-label={`${name} 프로필 사진`}
            className="flex h-32 w-32 items-center justify-center rounded-full bg-orange-400 text-5xl font-bold text-white"
          >
            {name.charAt(0)}
          </div>
        )}
      </div>
      <h1 className="mt-6 text-2xl font-bold tracking-tight">{name}</h1>
      <p className="mt-2 max-w-xs text-[15px] leading-relaxed text-stone-600 dark:text-stone-300">
        {bio}
      </p>
    </section>
  );
}
