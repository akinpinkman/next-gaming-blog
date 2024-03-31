import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-[#171717] h-auto pt-5 font font-REVAMPED text-5xl text-white">
      <div className="flex items-center justify-center">
        <span className="text-[#3B82F6]">NEXT</span>
        GAMING
      </div>
      <nav>
        <ul className="flex text-base justify-center gap-5 py-5 font-Oswald font-bold list-disc">
          <li className="pr-3 list-none">
            <Link href="">HOME</Link>
          </li>
          <li className="pr-3 pl-2">
            <Link href="">FORTNITE</Link>
          </li>
          <li className="pr-3 pl-2">
            <Link href="">DIABLO IV</Link>
          </li>
          <li className="pr-3 pl-2">
            <Link href="">RELEASE DATES</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
