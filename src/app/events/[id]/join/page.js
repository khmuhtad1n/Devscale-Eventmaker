import Image from "next/image";

export default function page() {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <Image
        src="https://pub-7f2bbc06dc9149ea8dbfa51c713c10a5.r2.dev/eventmakers/nggyu.gif"
        alt="coming soon"
        width={300}
        height={300}
        className="rounded-lg"
      />
      <h1 className="text-2xl font-semibold text-gray-900 space-y-4">
        Congrats, you found nothing!
      </h1>
      <p>this feature is not implemented yet</p>
    </div>
  );
}
