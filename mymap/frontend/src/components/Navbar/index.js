import React from 'react';
import {
Nav,
NavLink,
Bars,
NavMenu,
NavBtn,
NavBtnLink,
} from './NavbarElements';

const Navbar = () => {
return (
	<>
	<Nav>
		<Bars />
		<NavMenu>
		<NavLink to='/events'>
			Events
		</NavLink>
		<NavLink to='/annual'>
			Annual Report
		</NavLink>
		<NavLink to='/team'>
			Teams
		</NavLink>
		<NavLink to='/blogs'>
			Blogs
		</NavLink>
		</NavMenu>
		<NavBtn>
		<NavBtnLink to='/signin'>Sign In</NavBtnLink>
		</NavBtn>
	</Nav>
	</>
);
};

export default Navbar;
