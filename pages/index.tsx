import Link from 'next/link'
import Layout from '../components/Layout'
import {useState} from 'react';

const IndexPage = () => {
  const [count, setCount] = useState(0)
  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <h1>Hello Next.js 👋</h1>
      <button onClick={() => setCount(n => n + 1)}>Click to increase: {count}</button>
      <p>
        <Link href="/about">
          <a>About</a>
        </Link>
      </p>
    </Layout>
  )

}
export default IndexPage
