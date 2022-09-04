import Link from "next/link";

const IndexPage = () => {
    return <Link href={{
        pathname: '/hello',
        query: {name: 'NextJS'}
    }}>
        <a>say hello</a>
    </Link>

}
export default IndexPage
