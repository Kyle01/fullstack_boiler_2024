import Link from 'next/link'

export default function Unauthenticated() {
  return (
    <div className='m-2 space-y-2'>
        <div>You are not logged in</div>
        <Link href="/" className='text-blue-600 underline cursor'>Go Home</Link>    
    </div>
  )
}