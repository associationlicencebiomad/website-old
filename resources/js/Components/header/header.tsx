import React, { useEffect } from 'react'
import { Link, usePage } from '@inertiajs/inertia-react'

import './header.scss'
import logo from '../../../images/illustration_licence_bio_mad.jpg'
import pp from '../../../images/pp.png'
import HeaderHamburger from './hamburger'
import HeaderDropdown from './dropdown'


export function Header() {
	const { url } = usePage()

	const [hamburgerOpen, setHamburgerOpen] = React.useState(false)
	const [userDropdown, setUserdropdown] = React.useState(false)

	return (
		<header className={'AppHeader' + (hamburgerOpen ? ' headerOpened' : '')}>
			<nav>
				<Link href="/" className={'logo' + (url === '/' ? ' active' : '')} onClick={() => { setHamburgerOpen(false) }}><img src={logo} alt="" /><div className='Name'>LBM</div></Link>
				<Link href="/test" className={url === '/test' ? ' active' : ''} onClick={() => { setHamburgerOpen(false) }} >Blog</Link>
				<Link href="/test" className={url === '/test' ? ' active' : ''} onClick={() => { setHamburgerOpen(false) }} >Parcours</Link>
			</nav>
			<div className='user' onClick={() => {setUserdropdown(!userDropdown)}}>
				<div className='user__username'>John DOE</div><img src={pp} className='user__profilePicture' />
			</div>
			<HeaderDropdown open={userDropdown}/>
			<HeaderHamburger onClick={() => { setHamburgerOpen(!hamburgerOpen) }} />
		</header>
	)
}
