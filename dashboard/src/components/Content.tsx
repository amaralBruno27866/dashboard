import style from '../styles/Content.module.css'
import Logo from '../assets/logoBP.png'
import {List, MagnifyingGlass, ToggleLeft, Bell} from 'phosphor-react'

export function Content(){
    return(
        <div className={style.content}>
            <nav className={style.nav}>
                <div className={style.navLeft}>
                    <List size={30} />
                    <input type="text" placeholder='Search'/>
                    <button>
                        <MagnifyingGlass size={30} />
                    </button>
                </div>
                <div>
                    <ToggleLeft size={30} />
                    <Bell size={30} />
                    <img src={Logo} alt="system logo" />
                </div>
            </nav>
        </div>
    );
}