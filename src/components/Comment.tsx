import { ThumbsUp, Trash } from "phosphor-react";
import styles from './Comment.module.css';
import { Avatar } from "./Avatar";
import { useState } from "react";

interface CommentProps {
    content: string;
    OnDeleteComment: (comment: string) => void;
}

export function Comment ({ content, OnDeleteComment }: CommentProps){
    const [likeCount, setLikeCount] = useState(0);


function handleDeleteComment(){
    OnDeleteComment(content);
}

function handleLikeComment (){
    setLikeCount((state) => {
        return state + 1
});
}


    return(
        <div className={styles.comment}>
            <Avatar 
                hasBorder={false} 
                src="https://images.unsplash.com/photo-1526800544336-d04f0cbfd700?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
                alt=""
            />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Wilkinson Morais</strong>
                            <time title='08 de Julho de 2023' dateTime="2023-07-08 19:02">Cerca de 1h atrás</time>
                        </div>
            
                <button title='Deletar comentário' onClick={handleDeleteComment}>
                    <Trash size={24}/>
                </button>
                    </header>
                    <p>{content}</p>

                </div>
                <footer>
                    <button onClick={handleLikeComment}>
                         <ThumbsUp size={20} />
                         Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>



        </div>
    );
}