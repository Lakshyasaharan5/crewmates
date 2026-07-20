import { Link, useRoutes } from "react-router"
import Gallary from "./components/Gallary";
import Create from "./components/Create";
import Edit from "./components/Edit";
import Details from "./components/Details";

export interface Post {
    id: number;
    name: string;
    speed: number;
}

function App() {

    const posts: Post[] = [
        {
            id: 1,
            name: 'Lakshya',
            speed: 100
        },
        {
            id: 2,
            name: 'Jason',
            speed: 100
        },
        {
            id: 3,
            name: 'Naruto',
            speed: 100
        },
        {
            id: 4,
            name: 'Kakashi',
            speed: 100
        },
        {
            id: 5,
            name: 'Sasuke',
            speed: 100
        }
    ]

    let element = useRoutes([
        {
            path: "/",
            element: <Gallary data={posts} />
        },
        {
            path: "/edit/:id",
            element: <Edit data={posts} />
        },
        {
            path: "/create",
            element: <Create />
        },
        {
            path: "/details/:id",
            element: <Details data={posts} />
        },
    ]);

    return (
        <div className="min-h-screen">
            <div className="min-h-screen max-w-5xl mx-auto px-4 flex flex-col gap-5 items-center">
                <h1 className="text-bold text-6xl text-center my-8">Crewmates</h1>
                <div className="flex gap-4">
                    <button className="bg-gray-800 text-white px-4 py-2 rounded-md cursor-pointer">
                        <Link to="/">
                            Gallary
                        </Link>
                    </button>
                    <button className="bg-gray-800 text-white px-4 py-2 rounded-md cursor-pointer">
                        <Link to="/create">
                            Create Crewmate
                        </Link>
                    </button>
                </div>
                <div>
                    {element}
                </div>
            </div>
        </div>
    )
}

export default App
