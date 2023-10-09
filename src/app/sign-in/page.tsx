import { Icons } from '@/components/Icons';
import { Button, buttonVariants } from '@/components/ui/button';
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Link from 'next/link';

export default function SignIn() {
	return (
		<div className='flex-1'>
			<Card className='mx-auto max-w-sm backdrop:blur-md items-center'>
				<CardHeader className='space-y-1'>
					<CardTitle className='text-2xl'>Log In</CardTitle>
					<CardDescription>continue with</CardDescription>
				</CardHeader>
				<CardContent className='grid gap-4'>
					<div className='grid grid-cols-2 gap-6'>
						<Button variant='outline'>
							<Icons.gitHub className='mr-2 h-4 w-4' />
							Github
						</Button>
						<Button variant='outline'>
							<Icons.google className='mr-2 h-4 w-4' />
							Google
						</Button>
					</div>
					<div className='relative'>
						<div className='absolute inset-0 flex items-center'>
							<span className='w-full border-t' />
						</div>
						<div className='relative flex justify-center text-xs uppercase'>
							<span className='bg-background px-2 text-muted-foreground'>
								Or
							</span>
						</div>
					</div>

					<div className='grid gap-2'>
						<Label htmlFor='email'>Email</Label>
						<Input
							id='email'
							type='email'
							placeholder='m@example.com'
						/>
					</div>
					<div className='grid gap-2'>
						<Label htmlFor='password'>Password</Label>
						<Input
							id='password'
							type='password'
							placeholder='*****'
						/>
					</div>
				</CardContent>
				<CardFooter>
					<Link
						href='/sign-up/welcome'
						className={`${buttonVariants()} w-full`}>
						Create account
					</Link>
				</CardFooter>
			</Card>
		</div>
	);
}
