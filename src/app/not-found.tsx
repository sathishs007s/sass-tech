import Link from 'next/link';

const ErrorPage = () => {
	return (
		<main>
			<div className='max-w-screen-xl mx-auto px-4 flex items-center justify-start py-24 md:px-8'>
				<div className='max-w-lg mx-auto space-y-3 text-center'>
					<h3 className='text-indigo-600 font-semibold'>404 Error</h3>
					<p className='dark:text-slate-100 text-4xl font-semibold sm:text-5xl'>
						Page not found
					</p>
					<p className='dark:text-slate-100 text-slate-600'>
						Sorry, the page you are looking for could not be found or has been
						removed.
					</p>
					<div className='flex flex-wrap items-center justify-center gap-3'>
						<Link
							href='/'
							className='block py-2 px-4 text-white font-medium bg-indigo-600 duration-150 hover:bg-indigo-500 active:bg-indigo-700 rounded-lg'>
							Go back
						</Link>
						<a
							href='/contact'
							className='block py-2 px-4 text-slate-600 dark:text-slate-100 hover:bg-gray-50 font-medium duration-150 active:bg-gray-100 border rounded-lg'>
							Contact support
						</a>
					</div>
				</div>
			</div>
		</main>
	);
};

export default ErrorPage;
