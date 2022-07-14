import styles from "./BlogCard.module.css";

function BlogCard( props ) {
    const {blogPost} = props

    const {title, description, image} = blogPost

    return (
        <div className={styles.blogCard}>

        </div>
    );
}

export default BlogCard
