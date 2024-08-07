import styles from './Comment.module.scss'
import React from "react";
import {convertTimeToHumanReadable} from "../../utils/helpers";

interface CommentProps {
    author: string;
    userImage: string;
    createdAt: number;
    content: string;
}

const Comment: React.FC<CommentProps> = ({userImage, createdAt, author, content}) => {
    return <div className={styles.commentContainer}>
        <img alt={`${author}-image`} src={userImage}/>
        <div className={styles.content}>
            <p>{content}</p>
            <div className={styles.footer}>
                <div className={styles.actions}>
                    <span>Like</span>
                    <span>Share</span>
                </div>
                <span>
                {convertTimeToHumanReadable(createdAt).replace('minutes', 'mins')}
            </span>
            </div>
        </div>
    </div>
}
export default Comment
