import styles from './CreatePost.module.scss'
import Button from "../Button";

const CreatePost = () => {
    return <div className={styles.createPostContainer}>
        <h3>Create post</h3>
        <div className={styles.textArea}>
            <span>💬</span>
            <textarea placeholder={'How are you feeling today?'}/>
        </div>
        <Button className={styles.postBtn}>Post</Button>
    </div>
}

export default CreatePost
