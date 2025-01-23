/** @format */

import {
	Links,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
} from '@remix-run/react'
import './tailwind.css'

export function Layout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en'>
			<head>
				<meta charSet='utf-8' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<meta
					name='impact-site-verification'
					content='8a6e1079-6957-4b1c-a71a-4d689a7e1933'
				/>
				<Meta />
				<Links />
			</head>
			<body className='bg-zinc-950 text-zinc-200 w-screen h-screen grid place-items-center'>
				{children}
				<ScrollRestoration />
				<Scripts />
			</body>
		</html>
	)
}

export default function App() {
	return <Outlet />
}
