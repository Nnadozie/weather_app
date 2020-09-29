import Link from 'next/link'

interface Props {}

function Nav(props: Props) {
    const {} = props

    return (
        <>
        <Link href="/"><a>Home</a></Link>
        <span>search</span>
        <Link href="/explore"><a>Explore</a></Link>
        <span>img</span>
        </>
    )
}

export default Nav
