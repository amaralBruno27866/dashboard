import style from '../styles/Sidebar.module.css'
import {PawPrint, Kanban, Storefront, ChartPie, ChatCenteredDots, UsersThree, Gear, SignOut} from 'phosphor-react'
import beagle from '../assets/beagle.png'

export function Sidebar(){
    return(
        <aside className={style.sidebar}>
            <header className={style.header}>
                <PawPrint size={24} />
                <p>Beagle</p><span>Prog</span>
            </header>
            
            <ul className={style.sideMenu}>
                <li>
                    <Kanban size={24}/>
                    <p>Dashboard</p>
                </li>
                <li>
                    <Storefront size={24}/>
                    <p>Shop</p>
                </li>
                <li>
                    <ChartPie size={24}/>
                    <p>Analytics</p>
                </li>
                <li>
                    <ChatCenteredDots size={24}/>
                    <p>Tickets</p>
                </li>
                <li>
                    <UsersThree size={20}/>
                    <p>Users</p>
                </li>
                <li>
                    <Gear size={24}/>
                    <p>Settings</p>
                </li>
            </ul>

            <footer className={style.footer}>
                <SignOut size={24}/>
                <p>Logout</p>
            </footer>

            <img src={beagle} alt="beagle picture" />

        </aside>
    );
}