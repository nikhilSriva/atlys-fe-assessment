import styles from './Post.module.scss'
import CommentIcon from '../../assets/svg/comment.svg'
import React, {useRef, useState} from "react";
import {convertTimeToHumanReadable} from "../../utils/helpers";
import EllipsisIcon from '../../assets/svg/ellipsis.svg'
import {useClickOutside} from "../../hooks/useClickOutside";
import MoodBg from '../../assets/svg/moodBg.svg'

interface Comment {
    createdAt: number;
    author: string;
    img: string;
    mood: string;
    content: string;
}

interface PostProps {
    author: string;
    mood: string;
    createdAt: number;
    comments: Comment[];
    content: string;
    authorImage: string;
    isEdited: boolean;
}

const Post: React.FC<PostProps> = ({comments, isEdited, authorImage, content, createdAt, mood, author}) => {
    const [showMenu, setShowMenu] = useState(false)
    const menuRef = useRef(null);
    const toggleMenu = () => setShowMenu(prevState => !prevState);

    useClickOutside(menuRef, (e) => {
        if (e.target.id !== 'ellipsis')
            setShowMenu(false)
    });

    return <div className={styles.postContainer}>
        <div className={styles.profile}>
            <div>
                <img alt={'user-image'} src={authorImage}/>
                <div>
                    <h3>{author}</h3>
                    <p>{convertTimeToHumanReadable(createdAt).replace('minutes', 'mins')}
                        {
                            isEdited && <span>&nbsp;• Edited</span>
                        }
                    </p>
                </div>
            </div>
            <img id={'ellipsis'} className={showMenu ? styles.active : ''} onClick={toggleMenu} src={EllipsisIcon}
                 alt={'ellipsis'}/>
            <div ref={menuRef} className={`${styles.menu} ${showMenu ? styles.visible : ''}`}>
                <p>Delete</p>
                <p>Edit</p>
                <p>Share</p>
            </div>
        </div>

        <div className={styles.textArea}>
            <div>
                <img alt={mood} src={MoodBg}/>
                <span>{mood}</span>
            </div>
            <p>{content}</p>
        </div>
        <div className={styles.comment}>
            <img alt={'comment-icon'} src={CommentIcon}/>
            <span>{comments.length} comments</span>
        </div>
    </div>
}

export default Post
