import { useState, useEffect } from "react"
import { Article } from "../Article/Article";
import styles from './styles.module.css'



export const App = () => {


    const [subreddit, setSubreddit] = useState('askreddit');
    const [articles, setArticles] = useState([]);


    useEffect(() => {

        fetch("https://www.reddit.com/r/" + subreddit + ".json").then(
            res => {
                if (res.status !== 200) {
                    console.warn("Warning: Something is wrong with the api.");
                    return;
                }

                res.json().then(
                    data => {
                        if (data != null) {

                            setArticles(data.data.children)
                        }
                    }
                )


            }).catch((err) => {
                console.log(err)
            })




    }, [subreddit]);

    return (

        <div className={styles.main}>
            <div className={styles.headerWrapper}>
                <div className={styles.heading}>Reddit Feed</div>
                <div className={styles.subHeading}>Enter a Subreddit</div>
                <input
                    className={styles.inputField}
                    onChange={(e) => { setSubreddit(e.target.value) }}
                    type="text" value={`${subreddit}`} />
                <div className={styles.top}> Top posts</div>
            </div>


            <div className={styles.articlesContainer}>
                {(articles != null) ? articles.map((article, index) => {
                    return <a
                        onClick={() => { window.open(`https://reddit.com${article.data.permalink}`) }}
                    > < Article
                            article={article.data} /> </a>
                }) : ''}
            </div>
        </div>
    )
}