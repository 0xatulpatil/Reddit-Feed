import styles from './styles.module.css'
import { FaLongArrowAltUp } from 'react-icons/fa'
import { FaCommentAlt } from 'react-icons/fa'


export const Article = (props) => {

    let baseUrl = 'https://reddit.com';

    let iconStyle = { color: 'white', backgroundColor: '#2C2C2C', fontSize: '24px', paddingRight: '4px' }
    let iconStyle1 = { color: 'white', backgroundColor: '#2C2C2C', fontSize: '24px', paddingRight: '8px' }

    return (
        <div className={styles.main}>

            <h3 className={styles.title}>
                {/* <span className={styles.span}> */} {props.article.title}
            </h3>
            <div
                className={styles.iconsDiv}
                style={{ backgroundColor: '#2C2C2C' }}>

                <div style={{ backgroundColor: '#2C2C2C', display: 'flex' }}>
                    <FaLongArrowAltUp style={iconStyle} /><div className={styles.num}>{props.article.ups}</div>
                </div>
                <div style={{ backgroundColor: '#2C2C2C', display: 'flex' }}>
                    <FaCommentAlt style={iconStyle1} /> <div className={styles.num}>{props.article.num_comments}</div>
                </div>
                <div className={styles.user}>
                    {props.article.author}
                </div>
            </div>

        </div>
    )

}