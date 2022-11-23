import { Outlet } from 'react-router-dom'
import { Header, LayoutContent } from './styles'

export function Defaultlayout() {
    return (
        <div>
            <Header />
            <LayoutContent>
                <Outlet />
            </LayoutContent>
        </div>
    )
}
