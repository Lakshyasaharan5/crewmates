import { useState } from "react"
import { supabase } from '../client'

export default function Create() {

    const [post, setPost] = useState({ name: "", speed: 0 });

    function handleChange(e) {
        const { name, value } = e.target
        setPost((prev) => {
            return {
                ...prev,
                [name]: value,
            }
        })
    }

    async function createPost(e) {
        e.preventDefault();

        const { data, error } = await supabase
            .from('crewmates')
            .insert({ name: post.name, speed: post.speed })
            .select();

        window.location.href = "/";
        console.log(data);
        console.log(error);
    }

    return (
        <div>
            <form>
                <label>Name</label>
                <input type="text" name="name" className="border" onChange={handleChange} /><br />
                <label>Speed</label>
                <input type="number" name="speed" className="border" onChange={handleChange} /><br />
                <input type="submit" value="submit" className="border cursor-pointer" onClick={createPost} />
            </form>
        </div>
    )
}

