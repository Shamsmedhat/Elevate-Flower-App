import { IoSearchOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { AiOutlineShopping } from "react-icons/ai";
import { Link } from "@/i18n/routing";

export default function Icons() {
  return (
    <>
      {/* Search */}
      <button className="cursor-pointer">
        <IoSearchOutline size={25} />
      </button>

      {/* Favourite */}
      <Link href="" className="relative cursor-pointer">
        <span className="before:bg-custom-rose-900 before:text-custom-rose-50 before:absolute before:right-[-6px] before:top-[-11px] before:ml-0.5 before:rounded-full before:px-[4px] before:text-center before:text-[10px] before:content-['2']">
          <CiHeart size={25} />
        </span>
      </Link>

      {/* Card */}
      <Link href="" className="relative cursor-pointer">
        <span className="before:bg-custom-rose-900 before:text-custom-rose-50 before:absolute before:right-[-6px] before:top-[-11px] before:ml-0.5 before:rounded-full before:px-[4px] before:text-center before:text-[10px] before:content-['5']">
          <AiOutlineShopping size={25} />
        </span>
      </Link>
    </>
  );
}
