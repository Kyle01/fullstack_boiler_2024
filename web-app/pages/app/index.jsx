import Link from 'next/link'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation';

export default function App() {
    const { status } = useSession()
    const router = useRouter()

    if (status === 'unauthenticated') {
      router.push('/')
    }

  return (
    <div className='m-2 flex flex-col space-y-4'>
        <h1>App Home Page</h1>
        <p>Protected Route</p>
        <Link href="/" className='text-blue-600 underline cursor'>Go Home</Link>    
    </div>
  )
}