import { useSession, signIn, signOut } from "next-auth/react"

export default function Component() {
  const { data: session } = useSession()
  if (session) {
    return (
      <div className="space-y-2">
        <p>Signed in as {session.user.email} </p>
        <button className='px-2 py-1 rounded bg-green-600 text-white' onClick={() => signOut()}>Sign out</button>
      </div>
    )
  }
  return (
    <div className="space-y-2">
      <p>Not signed in </p>
      <button className='px-2 py-1 rounded bg-green-600 text-white' onClick={() => signIn()}>Sign in</button>
    </div>
  )
}