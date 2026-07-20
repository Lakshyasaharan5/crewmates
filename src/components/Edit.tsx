import { useParams } from 'react-router'
import { supabase } from '../client'
import { useState } from 'react';

export default function Edit(props) {

    const { id } = useParams();
    const [post, setPost] = useState({ name: "", speed: 0 })

    const updatePost = async (event) => {
        event.preventDefault();

        const { data, error } = await supabase
            .from('crewmates')
            .update({ name: post.name, speed: post.speed })
            .eq('id', id);

        console.log(error);
        console.log(data);

        // window.location.href = "/";
    }

    const handleChange = (event) => {
        const { name, value } = event.target
        setPost((prev) => {
            return {
                ...prev,
                [name]: value,
            }
        })
    }

    const deletePost = async (event) => {
        event.preventDefault();

        await supabase
            .from('crewmates')
            .delete()
            .eq('id', id);

        window.location.href = "/";
    }

    return (
        <div>
            <form>
                <label>Name</label>
                <input type="text" name="name" value={post.name} className="border" onChange={handleChange} /><br />
                <label>Speed</label>
                <input type="number" name="speed" value={post.speed} className="border" onChange={handleChange} /><br />
                <input type="submit" value="Submit" onClick={updatePost} className="border" /><br />
                <button className="border cursor-pointer" onClick={deletePost}>Delete</button>
            </form>
        </div >
    )
}

