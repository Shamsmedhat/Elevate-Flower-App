import Icons from "./components/icons";
import Links from "./components/links";
import Logo from "./components/logo";

export default function Header() {
  return (
    <header>
      <nav className="flex items-center justify-around py-3">
        {/* Logo */}
        <div>
          <Logo />
        </div>

        {/* Links */}
        <div>
          <Links />
        </div>

        {/* Icons */}
        <div className="text-custom-rose-900 flex gap-5">
          <Icons />
        </div>
      </nav>
    </header>
  );
}
