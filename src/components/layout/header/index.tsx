import AuthDialog from "@/components/features/auth/auth-dialog";
import Icons from "./components/icons";
import Links from "./components/links";
import Logo from "./components/logo";

export default function Header() {
  return (
    <header>
      <nav className="flex items-center justify-around py-3 rtl:flex-row">
        {/* Logo */}
        <div>
          <Logo />
        </div>

        {/* Links */}
        <div>
          <Links />
        </div>

        {/* Icons */}
        <div className="flex gap-5 text-custom-rose-900">
          <Icons />
        </div>

        {/* Login */}
        <div>
          <AuthDialog />
        </div>
      </nav>
    </header>
  );
}
