import React from "react";

import { FaChevronDown } from "react-icons/fa";
import { RxAvatar } from "react-icons/rx";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Heart, Menu, Search, ShoppingCart } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Navbar = () => {
  return (
    <nav className="w-full border-b-2 border-gray-300 p-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <h1 className="text-2xl font-bold ml-10">Bandage</h1>
        <div className="hidden md:flex gap-4">
          <Link
            href={"/"}
            className="text-sm font-normal hover:text-blue-600 hover:underline"
          >
            Home
          </Link>
          <Link
            href={"/shop"}
            className="text-sm font-normal hover:text-blue-600 hover:underline flex"
          >
            Shop
            <FaChevronDown className="mt-1 font-thin" />
          </Link>
          <Link
            href={"/about"}
            className="text-sm font-normal hover:text-blue-600 hover:underline flex"
          >
            About
          </Link>
          <Link
            href={"#"}
            className="text-sm font-normal hover:text-blue-600 hover:underline "
          >
            Blog
          </Link>
          <Link
            href={"/contact"}
            className="text-sm font-normal hover:text-blue-600 hover:underline"
          >
            Contact
          </Link>
          <Link
            href={"#"}
            className="text-sm font-normal hover:text-blue-600 hover:underline"
          >
            pages
          </Link>
        </div>

        {/* Update: Move Login/Register to the same flex container as Search */}
        <div className="hidden md:flex items-center gap-4 mr-9">
          <span className="text-sm font-normal text-blue-600 hover:underline flex">
            <RxAvatar className="size-5 " />
            Login/Register
          </span>
          <Button
            variant={"outline"}
            size={"icon"}
            className="rounded-full text-blue-600 hover:bg-blue-800"
          >
            <Search />
          </Button>

          <Button
            variant={"outline"}
            size={"icon"}
            className="rounded-full text-blue-600 hover:bg-blue-800"
          >
            <ShoppingCart />1
          </Button>
          <Button
            variant={"outline"}
            size={"icon"}
            className="rounded-full text-blue-600 hover:bg-blue-800"
          >
            <Heart />1
          </Button>
        </div>

        {/* Mobile menu */}
        <Sheet>
          <SheetTrigger className="flex md:hidden">
            <Button variant={"outline"} size={"icon"} className="rounded-full">
              <Menu />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Bandage</SheetTitle>
            </SheetHeader>
            <div className="flex flex-col gap-6 mt-6 justify-center items-center">
              <Link
                href={"/"}
                className="text-sm font-normal hover:text-blue-600 hover:underline"
              >
                Home
              </Link>
              <Link
                href={"/product"}
                className="text-sm font-normal hover:text-blue-600 hover:underline"
              >
                Product
              </Link>
              <Link
                href={"#"}
                className="text-sm font-normal hover:text-blue-600 hover:underline"
              >
                Pricing
              </Link>
              <Link
                href={"/contact"}
                className="text-sm font-normal hover:text-blue-600 hover:underline"
              >
                Contact
              </Link>
              <Link
                href={"/shop"}
                className="text-sm font-normal hover:text-blue-600 hover:underline"
              >
                Shop
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Navbar;
