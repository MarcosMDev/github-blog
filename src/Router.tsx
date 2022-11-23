import { Routes, Route } from 'react-router-dom'
import { Defaultlayout } from './layouts/DefaultLayout'
import { Blog } from './pages/Blog'
import { Post } from './pages/Post'

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<Defaultlayout />}>
                <Route path="/" element={<Blog />} />
                <Route path="/post/:number" element={<Post />} />
            </Route>
        </Routes>
    )
}
