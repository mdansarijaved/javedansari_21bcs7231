import remarkGfm from "remark-gfm"
import styles from './markdown.module.css'
import ReactMarkdown from "react-markdown"

export default function Markdown({ children }) {
    return (
        <ReactMarkdown remarkPlugins={[remarkGfm]} className={styles.markdown}>{children}</ReactMarkdown>
    )
}