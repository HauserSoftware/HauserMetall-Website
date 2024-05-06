'use client';

import { NavbarItem as NextUiNavbarItem } from '@nextui-org/navbar';
import { Link, type LinkProps } from '@nextui-org/link';
import { usePathname } from 'next/navigation';
interface NavbarItemProps {
  link: string;
  translatedText: string;
  isHomePage: boolean;
}
export default function NavbarItem({
  link,
  translatedText,
  isHomePage,
}: NavbarItemProps) {
  const pathName = usePathname();
  console.log(pathName, link, pathName.startsWith(link));
  const isItemActive: boolean = isHomePage
    ? pathName === link
    : pathName.startsWith(link);
  return (
    <NextUiNavbarItem>
      <Link
        href={link}
        underline={'hover'}
        color={isItemActive ? 'primary' : 'foreground'}
      >
        {translatedText}
      </Link>
    </NextUiNavbarItem>
  );
}
