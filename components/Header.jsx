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
            <a href="">HOME</a>
          </li>
          <li className="pr-3 pl-2">
            <a href="">FORTNITE</a>
          </li>
          <li className="pr-3 pl-2">
            <a href="">DIABLO IV</a>
          </li>
          <li className="pr-3 pl-2">
            <a href="">RELEASE DATES</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
