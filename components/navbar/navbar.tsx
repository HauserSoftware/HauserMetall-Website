import React from 'react';
import {
  Navbar as NextUiNavbar,
  NavbarBrand,
  NavbarContent,
} from '@nextui-org/navbar';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import NavbarItem from '@/components/navbar/navbarItem';

const navbarItemList: string[] = [
  'home',
  'inspirations',
  'career',
  'about',
  'contact',
];

interface NavbarProps {
  locale: string;
}

export default function Navbar({ locale }: NavbarProps) {
  const t = useTranslations('Navbar');
  return (
    <NextUiNavbar isBordered>
      <NavbarBrand>
        <Image
          src={'/brand.png'}
          alt={'Brand'}
          width={150}
          height={50}
          priority
        />
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-5" justify="center">
        {navbarItemList.map((item) => (
          <NavbarItem
            link={`/${locale}${item === 'home' ? '' : `/${item}`}`}
            translatedText={t(item)}
            isHomePage={item === 'home'}
            key={item}
          />
        ))}
      </NavbarContent>
    </NextUiNavbar>
  );
}
