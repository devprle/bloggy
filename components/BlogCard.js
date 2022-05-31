import Link from 'next/link'
import styles from '../styles/BlogCard.module.css'

export default function BlogCard({title, author, coverPhoto, datePublished, slug}) {

    console.log('coverPhoto: ', coverPhoto)

    return <div className={styles.card}>
        <Link href={'/posts/' + slug}>
            <div className={styles.imgContainer}>
                <img
                    src={coverPhoto ? coverPhoto.url : 'https://amdmediccentar.rs/wp-content/plugins/uix-page-builder/includes/uixpbform/images/default-cover-4.jpg'}
                    alt="cover-photo"/>
            </div>
        </Link>
    </div>
}