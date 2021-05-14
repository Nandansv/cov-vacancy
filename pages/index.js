import Head from 'next/head'

export default function Home() {
  return (
    <div>
       Welcome to Cov-acancy 
       <button onClick={() => window.location = '/home' } >
          Click to get redirected to Home Page
       </button>
    </div>
  )
}
