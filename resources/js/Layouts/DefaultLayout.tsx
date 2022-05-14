import * as React from 'react';

import { Header } from '@/Components/header/header';

export default function DefaultLayout(children: React.ReactNode) {
	return (
		<>
			<Header />
			<main>
				{children}
			</main>
		</>
	);
}
