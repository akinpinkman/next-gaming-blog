import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-[#171717] h-auto pt-5 font-REVAMPED text-white mobile:text-4xl tablet:text-5xl">
      <div className="flex items-center justify-center">
        <span className="text-[#3B82F6]">NEXT</span>
        GAMING
      </div>
      <nav>
        <ul className="mobile:text-xs flex tablet:text-base justify-center gap-5 py-5 font-Oswald font-bold list-disc">
          <li className="pr-3 list-none">
            <Link href="/">HOME</Link>
          </li>
          <li className="pr-3 pl-2">
            <Link href="/tag/fortnite">FORTNITE</Link>
          </li>
          <li className="pr-3 pl-2">
            <Link href="/tag/news">NEWS</Link>
          </li>
          <li className="pr-3 pl-2">
            <Link href="/tag/nextgamingoriginals">ORIGINALS</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
