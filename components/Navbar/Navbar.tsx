import * as React from 'react';
import Link from 'next/link';

import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/CloseOutlined';

import {
	Slide,
	RightSlideContent,
	SlideItem,
	Wrapper,
	MenuTypography,
	WIconButton,
	SlideItemTypography,
} from './Navbar.styles';

import { useState } from 'react';

export function Navbar() {
	const pages: Array<{ name: string; href: string }> = [
		{
			name: 'Home',
			href: '/',
		},
		{
			name: 'Specialization',
			href: '/specialization',
		},
		{
			name: 'Contact US',
			href: '/contact',
		},
	];

	const [isMenuOpened, setIsMenuOpened] = useState<boolean>(false);
	const [menuBtnClassNames, setMenuBtnClassNames] = useState<string>('');

	const handleOpenNavbar = () => {
		setIsMenuOpened(true);
		setMenuBtnClassNames('animate');

		setTimeout(() => {
			setMenuBtnClassNames('');
		}, 1000);
	};

	const handleCloseNavbar = () => {
		if (isMenuOpened) {
			setIsMenuOpened(false);
		}
		setMenuBtnClassNames('animate');

		setTimeout(() => {
			setMenuBtnClassNames('');
		}, 1000);
	};

	return (
		<Wrapper className={isMenuOpened ? 'open' : 'close'} onClick={handleCloseNavbar}>
			<WIconButton size='large' onClick={handleOpenNavbar} className={menuBtnClassNames}>
				{isMenuOpened ? <CloseIcon /> : <MenuIcon />}
				<MenuTypography>MENU</MenuTypography>
			</WIconButton>
			<Slide className={isMenuOpened ? 'open' : ''}>
				<RightSlideContent>
					{pages.map(page => (
						<Link href={page.href} key={page.href}>
							<SlideItem>
								<SlideItemTypography>{page.name}</SlideItemTypography>
							</SlideItem>
						</Link>
					))}
				</RightSlideContent>
			</Slide>
		</Wrapper>
	);
}
