import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-[#171717] h-auto pt-5 font-REVAMPED text-white mobile:text-4xl tablet:text-5xl">
      <Link href="/">
        <div className="flex items-center justify-center transform hover:scale-105 transition-transform duration-300 ease-in-out">
          <span className="neon-text text-[#3B82F6]">
            NE<b>X</b>T
          </span>
          <span className="">GAMING</span>
        </div>
      </Link>
      <nav>
        <ul className="mobile:text-xs flex tablet:text-base justify-center tablet:gap-5  py-5 font-Oswald font-bold mobile:gap-2">
          <li className="pr-3 list-none transform hover:scale-105 transition-transform duration-300 ease-in-out">
            <Link href="/">HOME</Link>
          </li>
          &#8226;
          <li className="pr-3 pl-2 transform hover:scale-105 transition-transform duration-300 ease-in-out">
            <Link href="/tag/fortnite">FORTNITE</Link>
          </li>
          &#8226;
          <li className="pr-3 pl-2 transform hover:scale-105 transition-transform duration-300 ease-in-out">
            <Link href="/tag/news">NEWS</Link>
          </li>
          &#8226;
          <li className="pr-3 pl-2 transform hover:scale-105 transition-transform duration-300 ease-in-out">
            <Link href="/tag/nextgamingoriginals">ORIGINALS</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
