import { useEffect, useState } from "react"
import type { Post } from "../App"
import { Link } from "react-router"
import { supabase } from '../client'

interface GallaryProp {
    data: Post[]
}

export default function Gallary(props: GallaryProp) {
    const [posts, setPosts] = useState([])

    const fetchPosts = async () => {
        const { data } = await supabase
            .from('crewmates')
            .select()
            .order('created_at', { ascending: false })

        // set state of posts
        setPosts(data)
    }

    useEffect(() => {
        fetchPosts();
    }, [props])

    return (
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-3 gap-4">
            {posts.map((p) => {
                return <div key={p.id} className="w-36 border">
                    name: {p.name}<br />
                    speed: {p.speed}<br />
                    <Link to={'edit/' + p.id} className="border">Edit</Link>
                    <Link to={'details/' + p.id} className="border">Details</Link>
                </div>
            })}
        </div>
    )
}