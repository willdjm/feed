import { PencilLine } from "phosphor-react";

import styles from './Sidebar.module.css';
import { Avatar } from "./Avatar";

export function Sidebar(){
    return(
        <aside className={styles.sidebar}>
            <img 
                className={styles.cover} 
                src="https://images.unsplash.com/photo-1688433416701-13d3e04bb7fc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=50" 
            />

            <div className={styles.profile}>
               <Avatar src="https://github.com/willdjm.png" />

                <strong>Will Douglas</strong>
                <span>Web Developer</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={20} />
                    Editar seu perfil
                </a>
            </footer>
        </aside>

    );
}