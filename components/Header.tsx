import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-4 max-w-[90rem] mx-auto bg-transparent">
      <Link href="/" className="flex items-center cursor-pointer space-x-2">
        <Image src="/logo.png" height={40} width={40} alt="Logo" />
        <p className="tracking-widest font-semibold pr-5 text-white uppercase">
          THE book token
        </p>
      </Link>
    </header>
  );
};

export default Header;
