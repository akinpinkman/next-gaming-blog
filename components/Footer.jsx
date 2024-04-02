export default function Footer() {
  const Year = new Date().getFullYear();
  return (
    <footer className="bg-[#171717] h-20 text-white tablet:text-xl flex items-center justify-center mt-20">
      Akın Bilgin &copy; {Year}{" "}
    </footer>
  );
}
