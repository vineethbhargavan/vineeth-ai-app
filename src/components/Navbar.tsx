import Link from "next/link";
import AIChatButton from "./AIChatButton";
import ThemeToggle from "./ThemeToggle";
import UploadButton from "./UploadButton";

export default function Navbar() {
  return (
    <header className="sticky top-0 bg-background">
      <div className="mx-auto flex max-w-3xl flex-wrap justify-between gap-3 px-3 py-4">
        <nav className="space-x-4 font-medium">
          <Link href="/">home</Link>
          <Link href="/blog">blogs</Link>
          <Link href="/about">about me</Link>
        </nav>
        <div className="flex items-center gap-4">
          {/* <UploadButton /> */}
          <AIChatButton />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
