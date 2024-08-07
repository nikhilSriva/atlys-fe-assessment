import styles from './Home.module.scss'
import CreatePost from "../../components/CreatePost";
import Post from "../../components/Post/index";
import {POST_DATA} from "../../utils/constants";

const Home = () => {
    return <div className={styles.home}>
        <div className={styles.header}>
            <h2>Hello Jane</h2>
            <p>How are you doing today? Would you like to share something with the community 🤗</p>
        </div>
        <div className={styles.postContent}>
            <CreatePost/>
            {
                POST_DATA.map(item => <Post key={item.id}
                                            authorImage={item.img}
                                            comments={item.comments}
                                            author={item.author}
                                            content={item.content}
                                            isEdited={item.isEdited}
                                            createdAt={item.createdAt} mood={item.mood}/>)
            }
        </div>
    </div>
}
export default Home
