'use client'

import LoginButton from './components/LoginButton'

function IndexPage() {
  const onClick = () => {
    fetch('/python_api/bar').then((resp) => resp.json()).then((data) => {
      console.log(data)
    })
  }

  return (
    <div className='my-6 ml-6 space-y-6'>
      <p className='underline text-lg'>Styled header</p>
      <button className="bg-blue-600 rounded px-2 py-1 text-white" onClick={onClick}>Query Python Backend</button>
      <LoginButton />
    </div>
  )
}

export default IndexPage
