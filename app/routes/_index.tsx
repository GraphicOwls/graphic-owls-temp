/** @format */

import type { MetaFunction } from '@remix-run/node'
import Logo from '../components/logo'

export const meta: MetaFunction = () => {
	return [
		{ title: 'Graphic Owls – Webflow Design & Development' },
		{
			name: 'description',
			content: 'Custom website design & development for Webflow.',
		},
	]
}

export default function Index() {
	return (
		<div className='font-sans p-4 text-center flex flex-col items-center justify-center'>
			<div className='max-w-[220px] grid place-items-center'>
				<Logo />
				<h1 className='text-3xl font-bold mt-3'>Graphic Owls</h1>
			</div>
			<div className='mt-6 max-w-[540px] flex flex-col items-center justify-center gap-8'>
				<p className='text-zinc-400 w-full font-light'>
					Graphic Owls is in the process of rebranding. We are accepting limited
					projects. However, if you have any questions or need help with your
					Webflow project, feel free to send us a message.
				</p>
				<a
					className='px-6 py-3 leading-none bg-white rounded-md text-zinc-950 border border-white font-medium hover:bg-transparent hover:text-white transition-colors duration-300'
					href='mailto:hello@graphicowls.com'
				>
					hello@graphicowls.com
				</a>
			</div>
		</div>
	)
}
