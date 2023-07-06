// Chakra Imports
import { Box,  Flex, Text } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import AdminNavbarLinks from './NavbarLinksAdmin';

export default function AdminNavbar(props) {
	const [ scrolled, setScrolled ] = useState(false);

	useEffect(() => {
		window.addEventListener('scroll', changeNavbar);

		return () => {
			window.removeEventListener('scroll', changeNavbar);
		};
	});

	const { secondary, message } = props;

	// Here are all the props that may change depending on navbar's type or state.(secondary, variant, scrolled)
	
	let gap = '0px';
	const changeNavbar = () => {
		if (window.scrollY > 1) {
			setScrolled(true);
		} else {
			setScrolled(false);
		}
	};

	return (
		<Box
		marginTop={"-20px"}
		
		
		
		
		
		
		
		
		
		
		>
			<Flex
				w='100%'
				flexDirection={{
					sm: 'column',
					md: 'row'
				}}
				alignItems={{ xl: 'center' }}
				mb={gap}>
				
				<Box ms='auto' w={{ sm: '100%', md: 'unset' }}>
					<AdminNavbarLinks
						onOpen={props.onOpen}
						logoText={props.logoText}
						secondary={props.secondary}
						fixed={props.fixed}
						scrolled={scrolled}
					/>
				</Box>
			</Flex>
			{secondary ? <Text color='white'>{message}</Text> : null}
		</Box>
	);
}

AdminNavbar.propTypes = {
	
	variant: PropTypes.string,
	secondary: PropTypes.bool,
	fixed: PropTypes.bool,
	onOpen: PropTypes.func
};
