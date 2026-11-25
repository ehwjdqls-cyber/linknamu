type ProfileProps = {
  name: string;
  bio: string;
  photoUrl?: string;
};

export default function Profile({ name, bio, photoUrl }: ProfileProps) {
  return (
    <section className="flex flex-col items-center text-center">
      {photoUrl ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={photoUrl}
          alt={`${name} 프로필 사진`}
          className="h-40 w-40 rounded-full object-cover shadow-md"
        />
      ) : (
        <div
          aria-label={`${name} 프로필 사진`}
          className="flex h-40 w-40 items-center justify-center rounded-full bg-emerald-600 text-6xl font-bold text-white shadow-md"
        >
          {name.charAt(0)}
        </div>
      )}
      <h1 className="mt-4 text-2xl font-bold">{name}</h1>
      <p className="mt-1 text-stone-600 dark:text-neutral-400">{bio}</p>
    </section>
  );
}
