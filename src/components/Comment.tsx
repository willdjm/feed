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
                src="https://scontent-gru2-1.xx.fbcdn.net/v/t1.6435-9/32290122_627515340930724_3986464291959078912_n.jpg?_nc_cat=109&cb=99be929b-59f725be&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=PjZc0yT7yLEAX8vCabK&_nc_ht=scontent-gru2-1.xx&oh=00_AfBRlPklJSBGO16npYFh1rsFw2cr9OUvXq_yQpMxX76aNw&oe=64D10746"
                alt=""
            />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Will Douglas</strong>
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