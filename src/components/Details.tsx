import { Link, useParams } from "react-router"
import { supabase } from '../client'
import { useEffect, useState } from "react"

export default function Details(props) {
    const { id } = useParams();
    const [post, setPost] = useState({ name: "", speed: 0 });

    const fetchPost = async () => {
        const { data, error } = await supabase
            .from('crewmates')
            .select()
            .eq('id', id);

        console.log(error);
        console.log(data);
        // set state of posts
        setPost(data[0])
    }

    useEffect(() => {
        fetchPost()
    }, []);


    return (
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-3 gap-4">
            name: {post.name}<br />
            speed: {post.speed}<br />
            {
                (post.speed > 100) ?
                    <p>Insanely fast</p> :
                    <p>Slow</p>

            }
        </div>
    )
}