import styles from './CreatePost.module.scss'
import Button from "../Button";
import {useCallback, useState} from "react";
import {useAuth} from "../../context/AuthContext";
import Modal from "../Modal";
import {executeFunctionWithTransition} from "../../utils/helpers";
import AuthContainer from "../AuthContainer";

const CreatePost = () => {
    const [post, setPost] = useState('');
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false)
    const {isAuthenticated} = useAuth();

    const closeModal = useCallback((e) => {
        e.stopPropagation();
        executeFunctionWithTransition(() => {
            setIsLoginModalOpen(false)
        })
    }, []);

    const onPost = () => {
        if (isAuthenticated) {
            //create a post after successful validation
        } else {
            executeFunctionWithTransition(() => {
                setIsLoginModalOpen(true)
            })
        }
    }
    return <div className={styles.createPostContainer}>
        <h3>Create post</h3>
        <div className={styles.textArea}>
            <span>💬</span>
            <textarea onChange={(e) => setPost(e.target.value)}
                      value={post}
                      placeholder={'How are you feeling today?'}/>
        </div>
        <Button onClick={onPost} className={styles.postBtn}>
            Post
        </Button>
        <Modal onClose={closeModal} isOpen={isLoginModalOpen}>
            <AuthContainer/>
        </Modal>
    </div>
}

export default CreatePost
