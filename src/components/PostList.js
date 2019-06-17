import React from "react"
import PostCard from "./PostCard"
import styles from "../css/postlist.module.css"
const PostList = ({ posts }) => {
  return (
    <section className={styles.posts}>
      <h1>john doe</h1>
      <h4>personal blog</h4>
      <div className={styles.center}>
        {posts.map(({ node }, index) => {
          return <PostCard key={index} post={node} />
        })}
      </div>
    </section>
  )
}

export default PostList
